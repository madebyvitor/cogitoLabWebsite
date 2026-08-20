import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/components/Link";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderNotice } from "@/components/PlaceholderNotice";
import { ResearchAreaBadge, ResearchAreaCard } from "@/components/ResearchAreaCard";
import { getRepository } from "@/data/repository";
import { localizedField } from "@/data/types";
import { getPageHref } from "@/i18n/pathnames";
import type { Locale } from "@/i18n/routing";

export async function ResearchListPage({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const repo = getRepository();
  const areas = repo.getResearchAreas();
  const t = await getTranslations({ locale, namespace: "Research" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader title={t("title")} description={t("description")} />
      <PlaceholderNotice message={tCommon("placeholderNotice")} />
      <div className="grid gap-4 sm:grid-cols-2">
        {areas.map((area, index) => (
          <div key={area.id} className="relative">
            <div className="absolute -left-1 top-4 z-10">
              <ResearchAreaBadge index={index} />
            </div>
            <ResearchAreaCard
              area={area}
              locale={locale}
              readMoreLabel={tCommon("readMore")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function ResearchDetailPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  setRequestLocale(locale);
  const repo = getRepository();
  const area = repo.getResearchAreaBySlug(slug);
  const t = await getTranslations({ locale, namespace: "Research" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });

  if (!area) {
    return null;
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
      <Link
        href={getPageHref(locale, "research")}
        className="text-sm font-medium text-primary hover:underline"
      >
        ← {tCommon("back")}
      </Link>
      <PageHeader
        title={localizedField(area, "title", locale)}
        description={localizedField(area, "summary", locale)}
      />
      <section>
        <h2 className="mb-3 font-heading text-lg font-semibold">
          {t("detailHeading")}
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          {localizedField(area, "description", locale)}
        </p>
      </section>
    </div>
  );
}
