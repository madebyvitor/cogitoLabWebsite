import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { localizedField, type NewsItem } from "@/data/types";
import type { Locale } from "@/i18n/routing";
import { formatDate } from "@/lib/format";

export function NewsCard({
  item,
  locale,
  kindLabel,
}: {
  item: NewsItem;
  locale: Locale;
  kindLabel: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{kindLabel}</Badge>
          <span className="text-xs text-muted-foreground">
            {formatDate(item.date, locale)}
          </span>
        </div>
        <CardTitle className="text-lg">
          {localizedField(item, "title", locale)}
        </CardTitle>
        <CardDescription>
          {localizedField(item, "summary", locale)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {localizedField(item, "body", locale)}
        </p>
      </CardContent>
    </Card>
  );
}
