import type { Dict } from "../types";

const pt: Dict = {
  app: { name: "UniGames", tagline: "A tua biblioteca toda. Num só sítio." },
  nav: { library: "Biblioteca", connections: "Ligações", recent: "Recentes", settings: "Definições" },
  common: {
    search: "Procurar jogos...", all: "Todos", connect: "Ligar", disconnect: "Desligar",
    connected: "Ligado", connectedAs: "Ligado como", hours: "h", play: "Jogar",
    install: "Instalar", installed: "Instalado", lastPlayed: "Jogado pela última vez", achievements: "Conquistas",
    sortBy: "Ordenar por", sortRecent: "Jogado recentemente", sortHours: "Mais jogado", sortAZ: "A → Z",
    games: "jogos", noResults: "Nenhum jogo corresponde aos filtros."
  },
  connections: {
    title: "Liga as tuas plataformas",
    subtitle: "Liga as tuas contas da mesma maneira que fazes no Discord ou Twitch. Nós unificamos tudo numa só biblioteca.",
    connectCta: "Ligar à {platform}",
    modalTitle: "Autorizar UniGames",
    modalDesc: "O UniGames está a pedir acesso à tua conta da {platform} para importar a tua biblioteca, tempo de jogo e conquistas.",
    authorize: "Autorizar", cancel: "Cancelar",
    disconnectConfirm: "Desligar {platform}? Os jogos desta plataforma serão escondidos."
  },
  weather: {
    title: "Vibe de hoje",
    stayIn: "Fica em casa e joga", goOut: "Sai à rua",
    stayInMsg: "Está {condition} lá fora. Desculpa perfeita para arrancar com algo aconchegante.",
    goOutMsg: "Está {condition} e {temp}°. Fecha o portátil — o dia está a chamar.",
    location: "Lisboa, PT"
  },
  spotify: {
    title: "Banda sonora",
    subtitle: "Opcional — cola um link de uma playlist do Spotify para incorporar.",
    placeholder: "https://open.spotify.com/playlist/...",
    apply: "Aplicar", remove: "Remover", helper: "Dica: funciona com playlists, álbuns e faixas."
  },
  stats: { totalGames: "Total de jogos", totalHours: "Total de horas", platforms: "Plataformas", recent7: "Jogados esta semana" },
  settings: { title: "Definições", theme: "Tema", light: "Claro", dark: "Escuro", language: "Idioma" },
  recent: { title: "Continuar a jogar", empty: "Liga uma plataforma para ver as tuas sessões." }
};

export default pt;
