import { getTranslations, setRequestLocale } from "next-intl/server";
import { NewsCard } from "@/components/NewsCard";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderNotice } from "@/components/PlaceholderNotice";
import { getRepository } from "@/data/repository";
import type { Locale } from "@/i18n/routing";

export async function NewsPage({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const repo = getRepository();
  const news = repo.getNews();
  const t = await getTranslations({ locale, namespace: "News" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader title={t("title")} description={t("description")} />
      <PlaceholderNotice message={tCommon("placeholderNotice")} />
      <div className="space-y-6">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            item={item}
            locale={locale}
            kindLabel={t(`kinds.${item.kind}`)}
          />
        ))}
      </div>
    </div>
  );
}
