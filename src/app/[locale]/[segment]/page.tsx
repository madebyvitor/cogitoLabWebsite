import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { resolvePage } from "@/i18n/pathnames";
import { routing, type Locale } from "@/i18n/routing";
import { generateSegmentParams } from "@/lib/static-params";
import { AboutPage } from "@/views/about-page";
import { ContactPage } from "@/views/contact-page";
import { JoinPage } from "@/views/join-page";
import { NewsPage } from "@/views/news-page";
import { PartnersPage } from "@/views/partners-page";
import { PeoplePage } from "@/views/people-page";
import { ProjectsPage } from "@/views/projects-page";
import { PublicationsPage } from "@/views/publications-page";
import { ResearchListPage } from "@/views/research-page";

type Props = {
  params: Promise<{ locale: string; segment: string }>;
};

export function generateStaticParams() {
  return generateSegmentParams();
}

export default async function SegmentPage({ params }: Props) {
  const { locale, segment } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const page = resolvePage(locale as Locale, segment);

  if (!page) {
    notFound();
  }

  const typedLocale = locale as Locale;

  switch (page) {
    case "about":
      return <AboutPage locale={typedLocale} />;
    case "research":
      return <ResearchListPage locale={typedLocale} />;
    case "people":
      return <PeoplePage locale={typedLocale} />;
    case "projects":
      return <ProjectsPage locale={typedLocale} />;
    case "publications":
      return <PublicationsPage locale={typedLocale} />;
    case "news":
      return <NewsPage locale={typedLocale} />;
    case "join":
      return <JoinPage locale={typedLocale} />;
    case "partners":
      return <PartnersPage locale={typedLocale} />;
    case "contact":
      return <ContactPage locale={typedLocale} />;
    default:
      notFound();
  }
}
