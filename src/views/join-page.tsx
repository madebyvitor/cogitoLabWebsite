import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderNotice } from "@/components/PlaceholderNotice";
import { buttonVariants } from "@/components/ui/button";
import { getRepository } from "@/data/repository";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export async function JoinPage({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const repo = getRepository();
  const lab = repo.getLab();
  const t = await getTranslations({ locale, namespace: "Join" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader title={t("title")} description={t("description")} />
      <PlaceholderNotice message={tCommon("placeholderNotice")} />
      <p className="leading-relaxed text-muted-foreground">{t("body")}</p>
      <a href={`mailto:${lab.email}`} className={cn(buttonVariants({ size: "lg" }))}>
        {t("cta")}
      </a>
    </div>
  );
}
