import { Link } from "@/components/Link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { localizedField, type ResearchArea } from "@/data/types";
import { getPageHref } from "@/i18n/pathnames";
import type { Locale } from "@/i18n/routing";

export function ResearchAreaCard({
  area,
  locale,
  readMoreLabel,
}: {
  area: ResearchArea;
  locale: Locale;
  readMoreLabel: string;
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{localizedField(area, "title", locale)}</CardTitle>
        <CardDescription>
          {localizedField(area, "summary", locale)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={getPageHref(locale, "research", area.slug)}
          className="text-sm font-medium text-primary hover:underline"
        >
          {readMoreLabel}
        </Link>
      </CardContent>
    </Card>
  );
}

export function ResearchAreaBadge({ index }: { index: number }) {
  return (
    <Badge variant="secondary" className="tabular-nums">
      {String(index + 1).padStart(2, "0")}
    </Badge>
  );
}
