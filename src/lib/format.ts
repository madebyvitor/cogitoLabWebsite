import type { Locale } from "@/i18n/routing";

export function dateLocale(locale: Locale): string {
  return locale === "pt" ? "pt-BR" : "en-GB";
}

export function formatDate(iso: string, locale: Locale): string {
  const date = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat(dateLocale(locale), {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatYearRange(
  startDate: string,
  endDate: string | null,
  locale: Locale,
  ongoingLabel: string,
): string {
  const startYear = startDate.slice(0, 4);
  const endLabel = endDate ? endDate.slice(0, 4) : ongoingLabel;
  return `${startYear} – ${endLabel}`;
}

export function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter((part) => part.length > 0 && !/^d[aeo]s?$/i.test(part))
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function doiUrl(doi: string): string {
  return doi.startsWith("http") ? doi : `https://doi.org/${doi}`;
}
