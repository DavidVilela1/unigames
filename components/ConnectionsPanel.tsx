"use client";
import { PLATFORMS, platformById } from "@/lib/mock/platforms";
import { useLibrary } from "@/contexts/LibraryContext";
import { useApp } from "@/contexts/AppContext";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { Check, Link2, Loader2, Unplug } from "lucide-react";
import { useState } from "react";
import type { PlatformId } from "@/types";

export default function ConnectionsPanel() {
  const { t, tx } = useApp();
  const { accounts, connect, disconnect, isConnected } = useLibrary();
  const [pending, setPending] = useState<PlatformId | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAuthorize = async () => {
    if (!pending) return;
    setLoading(true);
    // simulate oauth round-trip
    await new Promise(r => setTimeout(r, 1100));
    connect(pending, `player_${pending}`);
    setLoading(false);
    setPending(null);
  };

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">{t.connections.title}</h2>
        <p className="mt-1 text-sm text-muted max-w-2xl">{t.connections.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PLATFORMS.map(p => {
          const connected = isConnected(p.id);
          const acc = accounts.find(a => a.platform === p.id);
          return (
            <Card key={p.id} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl text-lg text-white"
                  style={{ background: p.color }}
                >{p.icon}</div>
                <div className="flex-1">
                  <div className="font-semibold">{p.name}</div>
                  {connected && acc
                    ? <div className="text-xs text-muted">{t.common.connectedAs} <span className="text-fg">{acc.username}</span></div>
                    : <div className="text-xs text-muted">—</div>
                  }
                </div>
                {connected && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-500">
                    <Check className="h-3 w-3" /> {t.common.connected}
                  </span>
                )}
              </div>

              {connected
                ? <Button variant="danger" onClick={() => {
                    if (confirm(tx(t.connections.disconnectConfirm, { platform: p.name }))) disconnect(p.id);
                  }}>
                    <Unplug className="h-4 w-4" /> {t.common.disconnect}
                  </Button>
                : <Button onClick={() => setPending(p.id)}>
                    <Link2 className="h-4 w-4" /> {tx(t.connections.connectCta, { platform: p.name })}
                  </Button>
              }
            </Card>
          );
        })}
      </div>

      <Modal
        open={!!pending}
        onClose={() => !loading && setPending(null)}
        title={t.connections.modalTitle}
      >
        {pending && (
          <div className="space-y-5">
            <div className="flex items-center gap-3 rounded-xl border border-border bg-elevated p-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg text-white"
                   style={{ background: platformById(pending)!.color }}>
                {platformById(pending)!.icon}
              </div>
              <div className="text-sm">
                <div className="font-medium">{platformById(pending)!.name}</div>
                <div className="text-xs text-muted">oauth.{pending}.com</div>
              </div>
            </div>
            <p className="text-sm text-muted">
              {tx(t.connections.modalDesc, { platform: platformById(pending)!.name })}
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="ghost" disabled={loading} onClick={() => setPending(null)}>{t.connections.cancel}</Button>
              <Button onClick={handleAuthorize} disabled={loading}>
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {t.connections.authorize}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
