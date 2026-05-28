export type PlatformId = "steam" | "xbox" | "psn" | "epic";

export interface Platform {
  id: PlatformId;
  name: string;
  color: string; // tailwind-safe hex
  icon: string;  // unicode/emoji fallback
}

export interface Game {
  id: string;
  title: string;
  platform: PlatformId;
  cover: string; // url
  hoursPlayed: number;
  lastPlayed: string; // ISO
  genres: string[];
  achievements?: { unlocked: number; total: number };
  installed?: boolean;
}

export interface PlatformAccount {
  platform: PlatformId;
  username: string;
  connectedAt: string;
  avatar?: string;
}

export type ThemeMode = "light" | "dark";
export type LocaleCode = "pt" | "en";
