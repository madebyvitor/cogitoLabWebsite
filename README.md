# Cogito Lab Website

Site institucional estático do grupo de pesquisa **Cogito Lab** — Engenharia de Software, IA, qualidade, testes, mobile/IoT e inovação.

## Requisitos

- Node.js 20+
- npm

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build estático em `out/` |
| `npm start` | Serve `out/` localmente |
| `npm run lint` | ESLint |
| `npm run format` | Prettier (write) |
| `npm run typecheck` | TypeScript |
| `npm run test` | Vitest |
| `npm run test:e2e` | Playwright (requer `npm run build` antes) |

## Estrutura

- `src/app/` — rotas Next.js (App Router, export estático)
- `src/data/` — tipos, seed e repositório de conteúdo
- `src/i18n/` — configuração pt/en e pathnames localizados
- `messages/` — strings de UI
- `supabase/migrations/` — schema SQL alinhado aos tipos (RLS leitura pública)
- `AboutTheProject/` — especificação e documentação do produto

## Internacionalização

- Português: `/pt/...` (ex.: `/pt/sobre/`)
- Inglês: `/en/...` (ex.: `/en/about/`)
- A raiz `/` redireciona para `/pt/` ou `/en/` conforme o navegador.


## Registro de engenharia

Ver [DEVELOPMENT_LOG.md](DEVELOPMENT_LOG.md).
