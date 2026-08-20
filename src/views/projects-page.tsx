import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderNotice } from "@/components/PlaceholderNotice";
import { ProjectCard } from "@/components/ProjectCard";
import { getRepository } from "@/data/repository";
import type { Locale } from "@/i18n/routing";

export async function ProjectsPage({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const repo = getRepository();
  const projects = repo.getProjects();
  const t = await getTranslations({ locale, namespace: "Projects" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader title={t("title")} description={t("description")} />
      <PlaceholderNotice message={tCommon("placeholderNotice")} />
      <div className="space-y-6">
        {projects.map((project) => {
          const coordinator = repo.getPersonById(project.coordinator_id);
          const publications = project.publication_ids
            .map((id) => repo.getPublicationById(id))
            .filter((publication) => publication !== undefined);

          return (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              coordinatorName={coordinator?.name ?? "—"}
              publications={publications}
              labels={{
                coordinator: t("coordinator"),
                period: t("period"),
                publications: t("publications"),
                ongoing: tCommon("ongoing"),
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
