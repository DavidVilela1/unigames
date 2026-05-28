"use client";
import { useEffect, useState } from "react";

export type WeatherCondition = "sunny" | "cloudy" | "rainy" | "snowy" | "stormy";

export interface WeatherData {
  condition: WeatherCondition;
  conditionLabelKey: string; // for i18n if needed
  temp: number;
  recommendation: "stay" | "out";
}

// Mock weather generator — deterministic per day so it doesn't flicker each render.
function pick(): WeatherData {
  const day = new Date().getDate();
  const conditions: WeatherCondition[] = ["sunny", "cloudy", "rainy", "stormy", "sunny", "cloudy", "snowy"];
  const condition = conditions[day % conditions.length];
  const baseTemp: Record<WeatherCondition, number> = { sunny: 26, cloudy: 19, rainy: 14, snowy: 2, stormy: 12 };
  const temp = baseTemp[condition] + ((day % 5) - 2);
  const recommendation: "stay" | "out" = (condition === "sunny" || condition === "cloudy") && temp >= 18 ? "out" : "stay";
  return { condition, conditionLabelKey: condition, temp, recommendation };
}

export function useWeather() {
  const [data, setData] = useState<WeatherData | null>(null);
  useEffect(() => { setData(pick()); }, []);
  return data;
}

export const conditionEmoji: Record<WeatherCondition, string> = {
  sunny: "☀️", cloudy: "⛅", rainy: "🌧️", snowy: "❄️", stormy: "⛈️"
};
