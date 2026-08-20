import { routing, type Locale } from "./routing";

export type AppPage =
  | "home"
  | "about"
  | "research"
  | "people"
  | "projects"
  | "publications"
  | "news"
  | "join"
  | "partners"
  | "contact";

export type ContentPage = Exclude<AppPage, "home">;

export const pagePathnames: Record<ContentPage, Record<Locale, string>> = {
  about: { pt: "sobre", en: "about" },
  research: { pt: "pesquisa", en: "research" },
  people: { pt: "pessoas", en: "people" },
  projects: { pt: "projetos", en: "projects" },
  publications: { pt: "publicacoes", en: "publications" },
  news: { pt: "noticias", en: "news" },
  join: { pt: "participe", en: "join" },
  partners: { pt: "parceiros", en: "partners" },
  contact: { pt: "contato", en: "contact" },
};

export const detailPages = ["research", "people", "projects", "news"] as const;
export type DetailPage = (typeof detailPages)[number];

export const navPages: AppPage[] = [
  "home",
  "about",
  "research",
  "people",
  "projects",
  "publications",
  "news",
  "join",
  "partners",
  "contact",
];

export function isLocale(value: string): value is Locale {
  return routing.locales.includes(value as Locale);
}

function withTrailingSlash(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

export function getPageHref(
  locale: Locale,
  page: AppPage,
  slug?: string,
): string {
  if (page === "home") {
    return withTrailingSlash(`/${locale}`);
  }

  const segment = pagePathnames[page][locale];
  if (slug) {
    return withTrailingSlash(`/${locale}/${segment}/${slug}`);
  }

  return withTrailingSlash(`/${locale}/${segment}`);
}

export function resolvePage(
  locale: Locale,
  segment: string,
): ContentPage | null {
  const match = (Object.entries(pagePathnames) as [ContentPage, Record<Locale, string>][])
    .find(([, paths]) => paths[locale] === segment);

  return match?.[0] ?? null;
}

export function isDetailPage(page: ContentPage): page is DetailPage {
  return (detailPages as readonly string[]).includes(page);
}

function parsePathname(pathname: string): {
  locale: Locale | null;
  page: AppPage;
  slug?: string;
} {
  const parts = pathname.split("/").filter(Boolean);
  const localePart = parts[0];
  const locale = localePart && isLocale(localePart) ? localePart : null;

  if (!locale || parts.length === 1) {
    return { locale, page: "home" };
  }

  const page = resolvePage(locale, parts[1] ?? "");
  if (!page) {
    return { locale, page: "home" };
  }

  return { locale, page, slug: parts[2] };
}

export function getEquivalentHref(
  currentLocale: Locale,
  targetLocale: Locale,
  pathname: string,
): string {
  const parsed = parsePathname(pathname);
  const page = parsed.page;
  const slug = parsed.slug;

  if (page === "home") {
    return getPageHref(targetLocale, "home");
  }

  if (slug && isDetailPage(page)) {
    return getPageHref(targetLocale, page, slug);
  }

  return getPageHref(targetLocale, page);
}

export function htmlLang(locale: Locale): string {
  return locale === "pt" ? "pt-BR" : "en";
}
