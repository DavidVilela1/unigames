import type { Game } from "@/types";

// Cover images: using picsum seeded so each title has a stable image (no external API needed).
const cover = (seed: string, w = 600, h = 800) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;

export const MOCK_GAMES: Game[] = [
  { id: "g1",  title: "Hollow Knight",          platform: "steam", cover: cover("hollow-knight"),     hoursPlayed: 64,  lastPlayed: "2026-05-20", genres: ["Metroidvania","Indie"],  achievements: { unlocked: 28, total: 63 }, installed: true },
  { id: "g2",  title: "Cyberpunk 2077",         platform: "steam", cover: cover("cyberpunk-2077"),    hoursPlayed: 112, lastPlayed: "2026-05-24", genres: ["RPG","Open World"],      achievements: { unlocked: 42, total: 57 }, installed: true },
  { id: "g3",  title: "Halo Infinite",          platform: "xbox",  cover: cover("halo-infinite"),     hoursPlayed: 38,  lastPlayed: "2026-05-10", genres: ["FPS","Shooter"],         achievements: { unlocked: 51, total: 119 } },
  { id: "g4",  title: "Forza Horizon 5",        platform: "xbox",  cover: cover("forza-horizon-5"),   hoursPlayed: 73,  lastPlayed: "2026-05-22", genres: ["Racing","Open World"],   achievements: { unlocked: 80, total: 200 }, installed: true },
  { id: "g5",  title: "God of War Ragnarök",    platform: "psn",   cover: cover("gow-ragnarok"),      hoursPlayed: 47,  lastPlayed: "2026-04-30", genres: ["Action","Adventure"],    achievements: { unlocked: 22, total: 36 } },
  { id: "g6",  title: "Bloodborne",             platform: "psn",   cover: cover("bloodborne"),        hoursPlayed: 89,  lastPlayed: "2026-05-15", genres: ["Souls-like","Action"],   achievements: { unlocked: 31, total: 47 } },
  { id: "g7",  title: "Fortnite",               platform: "epic",  cover: cover("fortnite"),          hoursPlayed: 210, lastPlayed: "2026-05-26", genres: ["Battle Royale"],         installed: true },
  { id: "g8",  title: "Alan Wake 2",            platform: "epic",  cover: cover("alan-wake-2"),       hoursPlayed: 19,  lastPlayed: "2026-05-12", genres: ["Horror","Adventure"] },
  { id: "g9",  title: "Stardew Valley",         platform: "steam", cover: cover("stardew-valley"),    hoursPlayed: 156, lastPlayed: "2026-05-25", genres: ["Simulation","Indie"],    installed: true },
  { id: "g10", title: "Elden Ring",             platform: "steam", cover: cover("elden-ring"),        hoursPlayed: 134, lastPlayed: "2026-05-21", genres: ["Souls-like","RPG"],      achievements: { unlocked: 28, total: 42 }, installed: true },
  { id: "g11", title: "Sea of Thieves",         platform: "xbox",  cover: cover("sea-of-thieves"),    hoursPlayed: 42,  lastPlayed: "2026-04-18", genres: ["Adventure","Co-op"] },
  { id: "g12", title: "The Last of Us Part II", platform: "psn",   cover: cover("tlou-2"),            hoursPlayed: 31,  lastPlayed: "2026-03-29", genres: ["Action","Story"] },
  { id: "g13", title: "Rocket League",          platform: "epic",  cover: cover("rocket-league"),     hoursPlayed: 287, lastPlayed: "2026-05-26", genres: ["Sports","Multiplayer"],  installed: true },
  { id: "g14", title: "Baldur's Gate 3",        platform: "steam", cover: cover("baldurs-gate-3"),    hoursPlayed: 98,  lastPlayed: "2026-05-19", genres: ["RPG","Turn-based"],      achievements: { unlocked: 18, total: 54 }, installed: true }
];
