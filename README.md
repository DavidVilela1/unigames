# UniGames

Maquete frontend (Next.js 14 + TypeScript + Tailwind CSS) de uma plataforma que unifica as bibliotecas de jogos do utilizador entre Steam, Xbox, PSN e Epic Games.

> Apenas frontend com dados mock. Pronta para evoluir.

## Funcionalidades

- Biblioteca unificada de jogos (mock) entre plataformas
- Fluxo de "ligar conta" (estilo Discord/Twitch) — mockado
- Tema claro/escuro
- Internacionalização preparada (PT / EN, fácil adicionar novas)
- Recomendação baseada em meteorologia (ficar em casa vs sair)
- Spotify embed estilizado (opcional, com playlist personalizada)
- Estatísticas, filtros, pesquisa, ordenação
- Sessões de jogo recentes, conquistas (mock)

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- lucide-react

## Como correr

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## Estrutura

```
app/                rotas
components/         UI reutilizável
contexts/           providers (theme, i18n, library)
lib/i18n/locales/   ficheiros de tradução (adicionar novas linguas aqui)
lib/mock/           dados mock
types/              tipos partilhados
```

### Adicionar uma nova língua

1. Criar `lib/i18n/locales/<code>.ts` exportando o mesmo shape de `pt.ts`.
2. Registar em `lib/i18n/index.ts`.

### Adicionar uma nova plataforma

1. Adicionar entrada em `lib/mock/platforms.ts`.
2. Adicionar jogos mock em `lib/mock/games.ts`.
