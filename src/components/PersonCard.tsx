import { ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { localizedField, type Person, type PersonRole } from "@/data/types";
import type { Locale } from "@/i18n/routing";
import { getInitials } from "@/lib/format";

export function PersonCard({
  person,
  locale,
  roleLabel,
  linkLabels,
}: {
  person: Person;
  locale: Locale;
  roleLabel: string;
  linkLabels: Record<string, string>;
}) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-start gap-4">
        <Avatar size="lg">
          <AvatarFallback>{getInitials(person.name)}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <CardTitle className="text-base">{person.name}</CardTitle>
            <Badge variant="outline">{roleLabel}</Badge>
          </div>
          <CardDescription>
            {localizedField(person, "title", locale)}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {localizedField(person, "bio", locale)}
        </p>
        {person.links.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {person.links.map((link) => (
              <li key={`${person.id}-${link.kind}`}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-medium hover:bg-muted"
                >
                  {linkLabels[link.kind] ?? link.kind}
                  <ExternalLink className="size-3" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </CardContent>
    </Card>
  );
}

export function filterPeopleByRole(
  people: Person[],
  role: PersonRole | "all",
): Person[] {
  if (role === "all") {
    return people;
  }

  return people.filter((person) => person.role === role);
}
