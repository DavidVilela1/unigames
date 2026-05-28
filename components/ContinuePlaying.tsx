"use client";
import { useMemo } from "react";
import { useLibrary } from "@/contexts/LibraryContext";
import { useApp } from "@/contexts/AppContext";
import { platformById } from "@/lib/mock/platforms";
import { formatDate, formatHours } from "@/lib/utils";
import { Play } from "lucide-react";

export default function ContinuePlaying() {
  const { games } = useLibrary();
  const { t, intl } = useApp();

  const top = useMemo(
    () => [...games].sort((a, b) => +new Date(b.lastPlayed) - +new Date(a.lastPlayed)).slice(0, 4),
    [games]
  );

  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">{t.recent.title}</h2>
      {top.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-6 text-center text-sm text-muted">
          {t.recent.empty}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          {top.map(g => {
            const p = platformById(g.platform)!;
            return (
              <div key={g.id} className="group relative flex gap-3 overflow-hidden rounded-2xl border border-border bg-surface p-2 transition hover:bg-elevated">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.cover} alt={g.title} className="h-20 w-16 shrink-0 rounded-lg object-cover" />
                <div className="flex flex-1 flex-col justify-between py-1 pr-2">
                  <div>
                    <div className="text-sm font-semibold leading-tight line-clamp-1">{g.title}</div>
                    <div className="text-[11px] text-muted">{p.icon} {p.name} • {formatHours(g.hoursPlayed, t.common.hours)}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-muted">{formatDate(g.lastPlayed, intl)}</span>
                    <button className="inline-flex h-7 items-center gap-1 rounded-md bg-accent px-2 text-[11px] font-medium text-accent-fg">
                      <Play className="h-3 w-3" />{t.common.play}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
