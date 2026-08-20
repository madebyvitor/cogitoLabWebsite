import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { PeopleFilter } from "@/components/PeopleFilter";
import { PlaceholderNotice } from "@/components/PlaceholderNotice";
import { getRepository } from "@/data/repository";
import type { Locale } from "@/i18n/routing";

export async function PeoplePage({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const repo = getRepository();
  const people = repo.getPeople();
  const t = await getTranslations({ locale, namespace: "People" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader title={t("title")} description={t("description")} />
      <PlaceholderNotice message={tCommon("placeholderNotice")} />
      <PeopleFilter people={people} locale={locale} />
    </div>
  );
}
