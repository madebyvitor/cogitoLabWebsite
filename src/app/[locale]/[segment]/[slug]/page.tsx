import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { pagePathnames, resolvePage } from "@/i18n/pathnames";
import { routing, type Locale } from "@/i18n/routing";
import { generateResearchDetailParams } from "@/lib/static-params";
import { ResearchDetailPage } from "@/views/research-page";

type Props = {
  params: Promise<{ locale: string; segment: string; slug: string }>;
};

export function generateStaticParams() {
  return generateResearchDetailParams();
}

export default async function DetailPage({ params }: Props) {
  const { locale, segment, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const page = resolvePage(typedLocale, segment);

  if (page !== "research" || segment !== pagePathnames.research[typedLocale]) {
    notFound();
  }

  setRequestLocale(locale);

  const content = await ResearchDetailPage({ locale: typedLocale, slug });

  if (!content) {
    notFound();
  }

  return content;
}
