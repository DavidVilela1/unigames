"use client";
import { useMemo } from "react";
import { useLibrary } from "@/contexts/LibraryContext";
import { useApp } from "@/contexts/AppContext";
import Card from "@/components/ui/Card";
import { Gamepad2, Clock, Layers, CalendarDays } from "lucide-react";

export default function StatsRow() {
  const { games, accounts } = useLibrary();
  const { t } = useApp();

  const stats = useMemo(() => {
    const totalHours = games.reduce((s, g) => s + g.hoursPlayed, 0);
    const weekAgo = Date.now() - 7 * 24 * 3600 * 1000;
    const recent = games.filter(g => +new Date(g.lastPlayed) >= weekAgo).length;
    return { totalGames: games.length, totalHours, platforms: accounts.length, recent };
  }, [games, accounts]);

  const items = [
    { icon: Gamepad2,     label: t.stats.totalGames, value: stats.totalGames },
    { icon: Clock,        label: t.stats.totalHours, value: stats.totalHours.toLocaleString() },
    { icon: Layers,       label: t.stats.platforms,  value: stats.platforms },
    { icon: CalendarDays, label: t.stats.recent7,    value: stats.recent }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {items.map(it => {
        const Icon = it.icon;
        return (
          <Card key={it.label} className="flex items-center gap-3 !p-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-elevated">
              <Icon className="h-4 w-4 text-accent" />
            </div>
            <div>
              <div className="text-xs text-muted">{it.label}</div>
              <div className="text-lg font-semibold leading-tight">{it.value}</div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
