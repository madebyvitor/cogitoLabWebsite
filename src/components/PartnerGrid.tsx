import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Partner } from "@/data/types";

export function PartnerGrid({
  partners,
  kindLabels,
}: {
  partners: Partner[];
  kindLabels: Record<Partner["kind"], string>;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {partners.map((partner) => (
        <Card key={partner.id} className="h-full">
          <CardHeader>
            <Badge variant="outline">{kindLabels[partner.kind]}</Badge>
            <CardTitle className="text-base">{partner.name}</CardTitle>
          </CardHeader>
          <CardContent>
            {partner.url ? (
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Website
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            ) : (
              <p className="text-sm text-muted-foreground">—</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
