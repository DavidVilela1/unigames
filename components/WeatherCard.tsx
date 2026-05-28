"use client";
import { useWeather, conditionEmoji } from "@/hooks/useWeather";
import { useApp } from "@/contexts/AppContext";
import { MapPin, Home, Sun } from "lucide-react";

export default function WeatherCard() {
  const data = useWeather();
  const { t, tx } = useApp();

  if (!data) {
    return <div className="h-[156px] rounded-2xl border border-border bg-surface animate-pulse" />;
  }

  const stay = data.recommendation === "stay";
  const condLabel = data.condition;
  const Icon = stay ? Home : Sun;

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-border p-5 ${
      stay
        ? "bg-gradient-to-br from-indigo-500/15 via-surface to-surface"
        : "bg-gradient-to-br from-amber-400/20 via-surface to-surface"
    }`}>
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted">{t.weather.title}</div>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-3xl">{conditionEmoji[data.condition]}</span>
            <span className="text-3xl font-semibold">{data.temp}°</span>
          </div>
          <div className="mt-1 inline-flex items-center gap-1 text-xs text-muted">
            <MapPin className="h-3 w-3" /> {t.weather.location}
          </div>
        </div>
        <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
          stay ? "bg-indigo-500/15 text-indigo-400" : "bg-amber-500/20 text-amber-500"
        }`}>
          <Icon className="h-3.5 w-3.5" />
          {stay ? t.weather.stayIn : t.weather.goOut}
        </div>
      </div>
      <p className="mt-4 text-sm text-muted">
        {stay
          ? tx(t.weather.stayInMsg, { condition: condLabel })
          : tx(t.weather.goOutMsg, { condition: condLabel, temp: data.temp })}
      </p>
    </div>
  );
}
