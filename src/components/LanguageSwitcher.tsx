"use client";

import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { routing, type Locale } from "@/i18n/routing";
import { getEquivalentHref } from "@/i18n/pathnames";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/base-path";

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("Common");
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <nav aria-label={t("language")} className={cn("flex items-center gap-1", className)}>
      {routing.locales.map((targetLocale) => {
        const href = withBasePath(getEquivalentHref(locale, targetLocale, pathname));
        const isActive = targetLocale === locale;

        return (
          <a
            key={targetLocale}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-md px-2 py-1 text-xs font-medium uppercase tracking-wide transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {targetLocale}
          </a>
        );
      })}
    </nav>
  );
}
