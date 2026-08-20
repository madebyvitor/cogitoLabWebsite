import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/components/Link";
import { NewsCard } from "@/components/NewsCard";
import { PlaceholderNotice } from "@/components/PlaceholderNotice";
import { ResearchAreaCard } from "@/components/ResearchAreaCard";
import { Button } from "@/components/ui/button";
import { getRepository } from "@/data/repository";
import { localizedField } from "@/data/types";
import { getPageHref } from "@/i18n/pathnames";
import type { Locale } from "@/i18n/routing";

export async function HomePage({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const repo = getRepository();
  const lab = repo.getLab();
  const areas = repo.getResearchAreas();
  const news = repo.getNews().slice(0, 3);

  const t = await getTranslations({ locale, namespace: "Home" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });
  const tNews = await getTranslations({ locale, namespace: "News" });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/95 via-primary to-primary/80 px-6 py-12 text-primary-foreground sm:px-10 sm:py-16">
        <div className="relative z-10 max-w-2xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/80">
            {t("heroSubtitle")}
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            {t("heroTitle")}
          </h1>
          <p className="text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            {localizedField(lab, "mission", locale)}
          </p>
          <Button
            render={
              <Link
                href={getPageHref(locale, "join")}
                className="inline-flex h-9 items-center rounded-lg bg-accent px-4 text-sm font-medium text-accent-foreground hover:bg-accent/90"
              />
            }
          >
            {t("joinCta")}
          </Button>
        </div>
      </section>

      <div className="mt-8">
        <PlaceholderNotice message={tCommon("placeholderNotice")} />
      </div>

      <section className="mt-12 space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-2xl font-semibold text-primary">
            {t("areasHeading")}
          </h2>
          <Link
            href={getPageHref(locale, "research")}
            className="text-sm font-medium text-primary hover:underline"
          >
            {tCommon("viewAll")}
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <ResearchAreaCard
              key={area.id}
              area={area}
              locale={locale}
              readMoreLabel={tCommon("readMore")}
            />
          ))}
        </div>
      </section>

      <section className="mt-14 space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-2xl font-semibold text-primary">
            {t("newsHeading")}
          </h2>
          <Link
            href={getPageHref(locale, "news")}
            className="text-sm font-medium text-primary hover:underline"
          >
            {tCommon("viewAll")}
          </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {news.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
              locale={locale}
              kindLabel={tNews(`kinds.${item.kind}`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
