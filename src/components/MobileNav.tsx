"use client";

import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link } from "@/components/Link";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getPageHref, navPages, type AppPage } from "@/i18n/pathnames";
import type { Locale } from "@/i18n/routing";

export function MobileNav({ locale }: { locale: Locale }) {
  const t = useTranslations("Nav");
  const tCommon = useTranslations("Common");

  const items = navPages.map((page) => ({
    page,
    href: getPageHref(locale, page),
    label: t(page as AppPage),
  }));

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon-sm"
            className="lg:hidden"
            aria-label={tCommon("menu")}
          />
        }
      >
        <Menu className="size-4" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs">
        <SheetHeader>
          <SheetTitle>{tCommon("menu")}</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 px-4 pb-6">
          <Logo locale={locale} />
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.page}
                href={item.href}
                className="rounded-md px-3 py-2 text-base font-medium hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="border-t pt-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {tCommon("language")}
            </p>
            <LanguageSwitcher />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
