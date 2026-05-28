import type { Platform } from "@/types";

export const PLATFORMS: Platform[] = [
  { id: "steam", name: "Steam",      color: "#1b2838", icon: "🎮" },
  { id: "xbox",  name: "Xbox",       color: "#107C10", icon: "🟢" },
  { id: "psn",   name: "PlayStation",color: "#003791", icon: "🔵" },
  { id: "epic",  name: "Epic Games", color: "#2a2a2a", icon: "⬛" }
];

export const platformById = (id: string) => PLATFORMS.find(p => p.id === id);
