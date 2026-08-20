import { HomePage } from "@/views/home-page";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { generateLocaleParams } from "@/lib/static-params";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return generateLocaleParams();
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    return null;
  }

  return <HomePage locale={locale as Locale} />;
}
