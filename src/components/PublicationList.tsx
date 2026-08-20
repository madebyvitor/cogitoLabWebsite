import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  localizedField,
  type Artifact,
  type Publication,
} from "@/data/types";
import type { Locale } from "@/i18n/routing";
import { doiUrl } from "@/lib/format";

export function PublicationList({
  publications,
  locale,
  authorsLabel,
  doiLabel,
  getAuthorName,
}: {
  publications: Publication[];
  locale: Locale;
  authorsLabel: string;
  doiLabel: string;
  getAuthorName: (id: string) => string;
}) {
  return (
    <ul className="space-y-4">
      {publications.map((publication) => (
        <li key={publication.id}>
          <Card>
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{publication.year}</Badge>
              </div>
              <CardTitle className="text-base leading-snug">
                {publication.url ? (
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2 hover:underline"
                  >
                    {publication.title}
                    <ExternalLink className="mt-1 size-3.5 shrink-0" aria-hidden />
                  </a>
                ) : (
                  publication.title
                )}
              </CardTitle>
              <CardDescription>
                {localizedField(publication, "venue", locale)}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">
                  {authorsLabel}:{" "}
                </span>
                {publication.author_ids.map(getAuthorName).join(", ")}
              </p>
              {publication.doi ? (
                <p>
                  <span className="font-medium text-foreground">
                    {doiLabel}:{" "}
                  </span>
                  <a
                    href={doiUrl(publication.doi)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground hover:underline"
                  >
                    {publication.doi}
                  </a>
                </p>
              ) : null}
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export function ArtifactList({
  artifacts,
  locale,
  kindLabels,
}: {
  artifacts: Artifact[];
  locale: Locale;
  kindLabels: Record<Artifact["kind"], string>;
}) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {artifacts.map((artifact) => (
        <li key={artifact.id}>
          <Card className="h-full">
            <CardHeader>
              <Badge variant="outline">{kindLabels[artifact.kind]}</Badge>
              <CardTitle className="text-base">{artifact.name}</CardTitle>
              <CardDescription>{artifact.year}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                {localizedField(artifact, "description", locale)}
              </p>
              <a
                href={artifact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
              >
                Open
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
}
