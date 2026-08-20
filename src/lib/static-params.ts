import { routing } from "@/i18n/routing";
import { pagePathnames } from "@/i18n/pathnames";
import { getRepository } from "@/data/repository";

export function generateLocaleParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export function generateSegmentParams() {
  return routing.locales.flatMap((locale) =>
    Object.entries(pagePathnames).map(([, paths]) => ({
      locale,
      segment: paths[locale],
    })),
  );
}

export function generateResearchDetailParams() {
  const repo = getRepository();
  const areas = repo.getResearchAreas();

  return routing.locales.flatMap((locale) =>
    areas.map((area) => ({
      locale,
      segment: pagePathnames.research[locale],
      slug: area.slug,
    })),
  );
}
