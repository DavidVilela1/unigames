"use client";
import { useApp } from "@/contexts/AppContext";
import StatsRow from "@/components/StatsRow";
import WeatherCard from "@/components/WeatherCard";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import ContinuePlaying from "@/components/ContinuePlaying";
import GameLibrary from "@/components/GameLibrary";

export default function HomeView() {
  const { t } = useApp();
  return (
    <div className="space-y-8">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight">{t.nav.library}</h1>
        <p className="text-sm text-muted">{t.app.tagline}</p>
      </header>

      <StatsRow />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <WeatherCard />
        <div className="lg:col-span-2"><SpotifyEmbed /></div>
      </div>

      <ContinuePlaying />
      <GameLibrary />
    </div>
  );
}
