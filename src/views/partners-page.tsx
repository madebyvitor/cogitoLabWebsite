import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { PartnerGrid } from "@/components/PartnerGrid";
import { PlaceholderNotice } from "@/components/PlaceholderNotice";
import { getRepository } from "@/data/repository";
import type { Partner } from "@/data/types";
import type { Locale } from "@/i18n/routing";

export async function PartnersPage({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const repo = getRepository();
  const partners = repo.getPartners();
  const t = await getTranslations({ locale, namespace: "Partners" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });

  const kindLabels: Record<Partner["kind"], string> = {
    funding: t("kinds.funding"),
    university: t("kinds.university"),
    industry: t("kinds.industry"),
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader title={t("title")} description={t("description")} />
      <PlaceholderNotice message={tCommon("placeholderNotice")} />
      <PartnerGrid partners={partners} kindLabels={kindLabels} />
    </div>
  );
}
