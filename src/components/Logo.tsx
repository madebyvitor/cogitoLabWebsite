import { Link } from "@/components/Link";
import type { Locale } from "@/i18n/routing";

export function Logo({ locale }: { locale: Locale }) {
  return (
    <Link
      href={`/${locale}/`}
      className="group flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span
        aria-hidden
        className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
      >
        C
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-heading text-lg font-semibold tracking-tight text-primary">
          Cogito Lab
        </span>
        <span className="text-xs text-muted-foreground group-hover:text-foreground">
          Cogito, ergo sum
        </span>
      </span>
    </Link>
  );
}
