import type { Dict } from "../types";

const en: Dict = {
  app: { name: "UniGames", tagline: "Your whole library. One home." },
  nav: { library: "Library", connections: "Connections", recent: "Recent", settings: "Settings" },
  common: {
    search: "Search games...", all: "All", connect: "Connect", disconnect: "Disconnect",
    connected: "Connected", connectedAs: "Connected as", hours: "hrs", play: "Play",
    install: "Install", installed: "Installed", lastPlayed: "Last played", achievements: "Achievements",
    sortBy: "Sort by", sortRecent: "Recently played", sortHours: "Most played", sortAZ: "A → Z",
    games: "games", noResults: "No games match your filters."
  },
  connections: {
    title: "Connect your platforms",
    subtitle: "Link your accounts the same way you do on Discord or Twitch. We unify everything into one library.",
    connectCta: "Connect {platform}",
    modalTitle: "Authorize UniGames",
    modalDesc: "UniGames is requesting access to your {platform} account to import your library, playtime and achievements.",
    authorize: "Authorize", cancel: "Cancel",
    disconnectConfirm: "Disconnect {platform}? Your games from this platform will be hidden."
  },
  weather: {
    title: "Today's vibe",
    stayIn: "Stay in & play", goOut: "Go outside",
    stayInMsg: "{condition} out there. Perfect excuse to boot up something cozy.",
    goOutMsg: "It's {condition} and {temp}°. Close the laptop — the day is calling.",
    location: "Lisbon, PT"
  },
  spotify: {
    title: "Soundtrack",
    subtitle: "Optional — paste a Spotify playlist URL to embed it.",
    placeholder: "https://open.spotify.com/playlist/...",
    apply: "Apply", remove: "Remove", helper: "Tip: works with playlists, albums and tracks."
  },
  stats: { totalGames: "Total games", totalHours: "Total hours", platforms: "Platforms", recent7: "Played this week" },
  settings: { title: "Settings", theme: "Theme", light: "Light", dark: "Dark", language: "Language" },
  recent: { title: "Continue playing", empty: "Connect a platform to see your sessions." }
};

export default en;
