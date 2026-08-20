"use client";

import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link } from "@/components/Link";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { getPageHref, navPages, type AppPage } from "@/i18n/pathnames";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function SiteHeader({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const t = useTranslations("Nav");

  const navItems = navPages.map((page) => ({
    page,
    href: getPageHref(locale, page),
    label: t(page as AppPage),
  }));

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo locale={locale} />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.page}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:flex" />
          <MobileNav locale={locale} />
        </div>
      </div>
    </header>
  );
}
