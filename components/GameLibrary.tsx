"use client";
import { useMemo, useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { useLibrary } from "@/contexts/LibraryContext";
import { PLATFORMS } from "@/lib/mock/platforms";
import GameCard from "@/components/GameCard";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PlatformId } from "@/types";

type Sort = "recent" | "hours" | "az";

export default function GameLibrary() {
  const { t } = useApp();
  const { games } = useLibrary();
  const [q, setQ] = useState("");
  const [platform, setPlatform] = useState<PlatformId | "all">("all");
  const [sort, setSort] = useState<Sort>("recent");

  const filtered = useMemo(() => {
    let list = games;
    if (platform !== "all") list = list.filter(g => g.platform === platform);
    if (q.trim()) {
      const s = q.toLowerCase();
      list = list.filter(g => g.title.toLowerCase().includes(s) || g.genres.some(x => x.toLowerCase().includes(s)));
    }
    list = [...list];
    if (sort === "recent") list.sort((a, b) => +new Date(b.lastPlayed) - +new Date(a.lastPlayed));
    if (sort === "hours")  list.sort((a, b) => b.hoursPlayed - a.hoursPlayed);
    if (sort === "az")     list.sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [games, q, platform, sort]);

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder={t.common.search}
            className="h-10 w-full rounded-xl border border-border bg-surface pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-accent/40"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs text-muted">{t.common.sortBy}</label>
          <select
            value={sort}
            onChange={e => setSort(e.target.value as Sort)}
            className="h-10 rounded-xl border border-border bg-surface px-3 text-sm outline-none"
          >
            <option value="recent">{t.common.sortRecent}</option>
            <option value="hours">{t.common.sortHours}</option>
            <option value="az">{t.common.sortAZ}</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {(["all", ...PLATFORMS.map(p => p.id)] as const).map(id => {
          const active = platform === id;
          const p = id === "all" ? null : PLATFORMS.find(x => x.id === id)!;
          return (
            <button
              key={id}
              onClick={() => setPlatform(id as any)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition",
                active ? "border-accent bg-accent text-accent-fg" : "border-border bg-surface text-muted hover:text-fg"
              )}
            >
              {p ? <><span>{p.icon}</span>{p.name}</> : t.common.all}
            </button>
          );
        })}
        <span className="ml-auto self-center text-xs text-muted">
          {filtered.length} {t.common.games}
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-surface p-10 text-center text-sm text-muted">
          {t.common.noResults}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map(g => <GameCard key={g.id} game={g} />)}
        </div>
      )}
    </section>
  );
}
