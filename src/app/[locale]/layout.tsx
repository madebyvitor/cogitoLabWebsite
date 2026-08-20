import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { htmlLang } from "@/i18n/pathnames";
import { routing, type Locale } from "@/i18n/routing";
import { generateLocaleParams } from "@/lib/static-params";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return generateLocaleParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const tCommon = await getTranslations({ locale, namespace: "Common" });

  return (
    <NextIntlClientProvider locale={locale as Locale} messages={messages}>
      <div lang={htmlLang(locale as Locale)} className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          {tCommon("skipToContent")}
        </a>
        <SiteHeader locale={locale as Locale} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter locale={locale as Locale} />
      </div>
    </NextIntlClientProvider>
  );
}
