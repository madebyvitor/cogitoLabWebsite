# Development Log — Cogito Lab Website

## 2026-03-20 — MVP inicial (seed estático)

### Contexto

Implementação da versão inicial do site institucional do **Cogito Lab**, conforme [InitialSpec.md](AboutTheProject/Specs/Foundation/InitialSpec.md).

### Decisões arquiteturais

1. **Next.js com `output: 'export'`** — compatível com GitHub Pages (somente arquivos estáticos).
2. **Dados seed-first** — conteúdo em `src/data/seed/content.ts` via `ContentRepository`; o site funciona sem credenciais Supabase.
3. **Schema Supabase preparado** — migration em `supabase/migrations/` com RLS e leitura pública (SELECT anon); gestão de conteúdo fica para fase seguinte.
4. **i18n sem middleware** — rotas estáticas `/pt/...` e `/en/...` com pathnames localizados; redirect na raiz via client-side + links de fallback.
5. **Admin adiado** — área administrativa com login não faz parte desta entrega (escopo MVP reduzido).

### Stack entregue

- Next.js 16 + React + TypeScript (strict)
- Tailwind CSS 4 + shadcn/ui
- next-intl (pt/en)
- Vitest + Testing Library + Playwright
- ESLint + Prettier
- GitHub Actions (CI + deploy Pages)

### Próximos passos sugeridos

1. Conectar Supabase no build (SSG) e webhook para rebuild ao alterar dados.
2. Implementar área admin protegida por autenticação.
3. Substituir placeholders por conteúdo, logo e fotos oficiais.
4. Configurar `NEXT_PUBLIC_BASE_PATH` no GitHub se for project site (`/CogitoLabWebsite`).
