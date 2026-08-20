import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderNotice } from "@/components/PlaceholderNotice";
import { ArtifactList, PublicationList } from "@/components/PublicationList";
import { getRepository } from "@/data/repository";
import type { Artifact } from "@/data/types";
import type { Locale } from "@/i18n/routing";

export async function PublicationsPage({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const repo = getRepository();
  const publications = repo.getPublications();
  const artifacts = repo.getArtifacts();
  const t = await getTranslations({ locale, namespace: "Publications" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });

  const kindLabels: Record<Artifact["kind"], string> = {
    software: t("artifactKinds.software"),
    tool: t("artifactKinds.tool"),
    dataset: t("artifactKinds.dataset"),
    repository: t("artifactKinds.repository"),
  };

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader title={t("title")} />
      <PlaceholderNotice message={tCommon("placeholderNotice")} />

      <section className="space-y-4">
        <h2 className="font-heading text-xl font-semibold text-primary">
          {t("papersHeading")}
        </h2>
        <PublicationList
          publications={publications}
          locale={locale}
          authorsLabel={t("authors")}
          doiLabel={t("doi")}
          getAuthorName={(id) => repo.getPersonById(id)?.name ?? id}
        />
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-xl font-semibold text-primary">
          {t("artifactsHeading")}
        </h2>
        <ArtifactList
          artifacts={artifacts}
          locale={locale}
          kindLabels={kindLabels}
        />
      </section>
    </div>
  );
}
