import { ExternalLink } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderNotice } from "@/components/PlaceholderNotice";
import { getRepository } from "@/data/repository";
import { localizedField } from "@/data/types";
import type { Locale } from "@/i18n/routing";

export async function ContactPage({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const repo = getRepository();
  const lab = repo.getLab();
  const t = await getTranslations({ locale, namespace: "Contact" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader title={t("title")} description={t("description")} />
      <PlaceholderNotice message={tCommon("placeholderNotice")} />
      <dl className="space-y-6 text-sm">
        <div>
          <dt className="font-semibold">{t("email")}</dt>
          <dd className="mt-1 text-muted-foreground">
            <a href={`mailto:${lab.email}`} className="hover:text-foreground">
              {lab.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-semibold">{t("location")}</dt>
          <dd className="mt-1 text-muted-foreground">
            {localizedField(lab, "location", locale)}
          </dd>
        </div>
        <div>
          <dt className="font-semibold">{t("github")}</dt>
          <dd className="mt-1">
            <a
              href={lab.github_org}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              {lab.github_org.replace("https://", "")}
              <ExternalLink className="size-3.5" aria-hidden />
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-semibold">{t("social")}</dt>
          <dd className="mt-2">
            <ul className="space-y-2">
              {lab.social.map((link) => (
                <li key={link.kind}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                    <ExternalLink className="size-3.5" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  );
}
