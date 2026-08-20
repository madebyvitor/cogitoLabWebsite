import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { localizedField, type Project, type Publication } from "@/data/types";
import type { Locale } from "@/i18n/routing";
import { doiUrl, formatYearRange } from "@/lib/format";

export function ProjectCard({
  project,
  locale,
  coordinatorName,
  publications,
  labels,
}: {
  project: Project;
  locale: Locale;
  coordinatorName: string;
  publications: Publication[];
  labels: {
    coordinator: string;
    period: string;
    publications: string;
    ongoing: string;
  };
}) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{project.code}</CardDescription>
        <CardTitle>{localizedField(project, "title", locale)}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <p className="leading-relaxed text-muted-foreground">
          {localizedField(project, "description", locale)}
        </p>
        <dl className="grid gap-2 sm:grid-cols-2">
          <div>
            <dt className="font-medium">{labels.coordinator}</dt>
            <dd className="text-muted-foreground">{coordinatorName}</dd>
          </div>
          <div>
            <dt className="font-medium">{labels.period}</dt>
            <dd className="text-muted-foreground">
              {formatYearRange(
                project.start_date,
                project.end_date,
                locale,
                labels.ongoing,
              )}
            </dd>
          </div>
        </dl>
        {publications.length > 0 ? (
          <div>
            <p className="mb-2 font-medium">{labels.publications}</p>
            <ul className="space-y-2 text-muted-foreground">
              {publications.map((publication) => (
                <li key={publication.id}>
                  {publication.url ? (
                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground hover:underline"
                    >
                      {publication.title} ({publication.year})
                    </a>
                  ) : publication.doi ? (
                    <a
                      href={doiUrl(publication.doi)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground hover:underline"
                    >
                      {publication.title} ({publication.year})
                    </a>
                  ) : (
                    <span>
                      {publication.title} ({publication.year})
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
