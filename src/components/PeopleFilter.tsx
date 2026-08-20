"use client";

import { useTranslations } from "next-intl";
import { PersonCard, filterPeopleByRole } from "@/components/PersonCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PERSON_ROLES, type Person } from "@/data/types";
import type { Locale } from "@/i18n/routing";

const tabs = ["all", ...PERSON_ROLES] as const;

export function PeopleFilter({
  people,
  locale,
}: {
  people: Person[];
  locale: Locale;
}) {
  const t = useTranslations("People");

  const linkLabels = {
    lattes: t("links.lattes"),
    orcid: t("links.orcid"),
    github: t("links.github"),
    website: t("links.website"),
    scholar: t("links.scholar"),
    linkedin: t("links.linkedin"),
  };

  return (
    <Tabs defaultValue="all">
      <TabsList className="h-auto flex-wrap">
        {tabs.map((tabRole) => (
          <TabsTrigger key={tabRole} value={tabRole}>
            {tabRole === "all" ? t("all") : t(`roles.${tabRole}`)}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tabRole) => (
        <TabsContent key={tabRole} value={tabRole} className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {filterPeopleByRole(people, tabRole).map((person) => (
              <PersonCard
                key={person.id}
                person={person}
                locale={locale}
                roleLabel={t(`roles.${person.role}`)}
                linkLabels={linkLabels}
              />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
