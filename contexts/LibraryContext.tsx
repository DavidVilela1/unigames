"use client";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Game, PlatformAccount, PlatformId } from "@/types";
import { MOCK_GAMES } from "@/lib/mock/games";

interface LibraryCtx {
  accounts: PlatformAccount[];
  connect: (platform: PlatformId, username: string) => void;
  disconnect: (platform: PlatformId) => void;
  isConnected: (platform: PlatformId) => boolean;
  games: Game[]; // only from connected platforms
}

const Ctx = createContext<LibraryCtx | null>(null);
const LS = "unigames.accounts";

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [accounts, setAccounts] = useState<PlatformAccount[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS);
      if (raw) setAccounts(JSON.parse(raw));
      else {
        // Demo: pre-connect Steam so the maquete looks alive on first load
        const seed: PlatformAccount[] = [
          { platform: "steam", username: "player_one", connectedAt: new Date().toISOString() }
        ];
        setAccounts(seed);
      }
    } catch {}
  }, []);

  useEffect(() => { localStorage.setItem(LS, JSON.stringify(accounts)); }, [accounts]);

  const games = useMemo(() => {
    const set = new Set(accounts.map(a => a.platform));
    return MOCK_GAMES.filter(g => set.has(g.platform));
  }, [accounts]);

  const value: LibraryCtx = {
    accounts,
    connect: (platform, username) =>
      setAccounts(prev => prev.some(a => a.platform === platform)
        ? prev
        : [...prev, { platform, username, connectedAt: new Date().toISOString() }]),
    disconnect: (platform) => setAccounts(prev => prev.filter(a => a.platform !== platform)),
    isConnected: (platform) => accounts.some(a => a.platform === platform),
    games
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLibrary() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useLibrary must be used inside LibraryProvider");
  return v;
}
