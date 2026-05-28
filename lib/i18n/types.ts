export interface Dict {
  app: { name: string; tagline: string };
  nav: { library: string; connections: string; recent: string; settings: string };
  common: {
    search: string; all: string; connect: string; disconnect: string;
    connected: string; connectedAs: string; hours: string; play: string;
    install: string; installed: string; lastPlayed: string; achievements: string;
    sortBy: string; sortRecent: string; sortHours: string; sortAZ: string;
    games: string; noResults: string;
  };
  connections: {
    title: string; subtitle: string; connectCta: string;
    modalTitle: string; modalDesc: string; authorize: string; cancel: string;
    disconnectConfirm: string;
  };
  weather: {
    title: string; stayIn: string; goOut: string;
    stayInMsg: string; goOutMsg: string; location: string;
  };
  spotify: { title: string; subtitle: string; placeholder: string; apply: string; remove: string; helper: string };
  stats: { totalGames: string; totalHours: string; platforms: string; recent7: string };
  settings: { title: string; theme: string; light: string; dark: string; language: string };
  recent: { title: string; empty: string };
}
