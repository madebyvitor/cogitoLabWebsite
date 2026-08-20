import { getTranslations } from "next-intl/server";
import { Link } from "@/components/Link";
import { getRepository } from "@/data/repository";
import { getPageHref } from "@/i18n/pathnames";
import type { Locale } from "@/i18n/routing";

export async function SiteFooter({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "Footer" });
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  const repo = getRepository();
  const lab = repo.getLab();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <p className="font-heading text-lg font-semibold text-primary">
            {lab.name}
          </p>
          <p className="text-sm text-muted-foreground">{t("tagline")}</p>
          <p className="text-xs text-muted-foreground">{lab.tagline}</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">{tNav("contact")}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${lab.email}`} className="hover:text-foreground">
                {lab.email}
              </a>
            </li>
            <li>
              <a
                href={lab.github_org}
                className="hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Organization
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">{tNav("join")}</p>
          <Link
            href={getPageHref(locale, "join")}
            className="text-sm font-medium text-primary hover:underline"
          >
            {tNav("join")}
          </Link>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {year} {lab.name}. {t("rights")}
      </div>
    </footer>
  );
}
