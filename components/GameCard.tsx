"use client";
import type { Game } from "@/types";
import { platformById } from "@/lib/mock/platforms";
import { useApp } from "@/contexts/AppContext";
import { formatDate, formatHours, cn } from "@/lib/utils";
import { Play, Trophy } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function GameCard({ game }: { game: Game }) {
  const { t, intl } = useApp();
  const p = platformById(game.platform)!;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:shadow-glow">
      <div className="relative aspect-[3/4] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={game.cover}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
        <span
          className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-semibold text-white"
          style={{ background: p.color }}
        >
          {p.icon} {p.name}
        </span>
        {game.installed && (
          <span className="absolute top-2 right-2 rounded-md bg-emerald-500/90 px-1.5 py-0.5 text-[10px] font-semibold text-white">
            {t.common.installed}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-3 text-white">
          <h3 className="text-sm font-semibold leading-tight line-clamp-2">{game.title}</h3>
          <div className="mt-1 flex items-center gap-2 text-[11px] opacity-90">
            <span>{formatHours(game.hoursPlayed, t.common.hours)}</span>
            <span>•</span>
            <span>{formatDate(game.lastPlayed, intl)}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 p-3">
        <div className="flex flex-wrap gap-1">
          {game.genres.slice(0, 2).map(g => <Badge key={g}>{g}</Badge>)}
          {game.achievements && (
            <Badge>
              <Trophy className="h-3 w-3" />
              {game.achievements.unlocked}/{game.achievements.total}
            </Badge>
          )}
        </div>
        <button
          className={cn(
            "inline-flex h-8 items-center gap-1 rounded-lg bg-accent px-3 text-xs font-medium text-accent-fg",
            "opacity-90 transition hover:opacity-100"
          )}
        >
          <Play className="h-3 w-3" /> {t.common.play}
        </button>
      </div>
    </article>
  );
}
