import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderNotice } from "@/components/PlaceholderNotice";
import { getRepository } from "@/data/repository";
import { localizedField } from "@/data/types";
import type { Locale } from "@/i18n/routing";

export async function AboutPage({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const repo = getRepository();
  const lab = repo.getLab();
  const t = await getTranslations({ locale, namespace: "About" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader title={t("title")} description={lab.tagline} />
      <PlaceholderNotice message={tCommon("placeholderNotice")} />
      <div className="prose prose-neutral max-w-none dark:prose-invert">
        <p className="text-base leading-relaxed text-muted-foreground">
          {localizedField(lab, "about", locale)}
        </p>
      </div>
      <section>
        <h2 className="mb-4 font-heading text-xl font-semibold text-primary">
          {t("institutionsHeading")}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {lab.institutions.map((institution) => (
            <li
              key={institution.id}
              className="rounded-lg border bg-card px-4 py-3 text-sm"
            >
              {localizedField(institution, "name", locale)}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
