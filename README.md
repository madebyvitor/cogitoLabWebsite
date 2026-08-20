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

## Deploy (GitHub Pages)

1. Habilite **GitHub Pages** com source **GitHub Actions**.
2. Push na branch `main` dispara `.github/workflows/pages.yml`.
3. Para **project site** (`https://USER.github.io/REPO/`), defina a variable de repositório `NEXT_PUBLIC_BASE_PATH` como `/REPO` (ou exporte no workflow).

Copie `.env.example` para `.env.local` se precisar testar `basePath` localmente.

## Supabase (fase seguinte)

1. Crie um projeto Supabase e aplique `supabase/migrations/20260320000000_initial_schema.sql`.
2. Implemente um repositório que busque dados no **build** (SSG).
3. Configure rebuild via GitHub Actions quando o conteúdo mudar.

## Conteúdo

Os dados atuais são **placeholders** fielmente estruturados (6 áreas de pesquisa, projetos CNPq/FAPEMIG citados na spec, pessoas, publicações, notícias). Substitua em `src/data/seed/content.ts` ou migre para Supabase.

## Registro de engenharia

Ver [DEVELOPMENT_LOG.md](DEVELOPMENT_LOG.md).
