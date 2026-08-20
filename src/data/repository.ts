import {
  artifacts,
  lab,
  news,
  partners,
  people,
  projects,
  publications,
  researchAreas,
} from "./seed/content";
import type { ContentRepository } from "./types";

export function getRepository(): ContentRepository {
  return {
    getLab: () => lab,
    getResearchAreas: () => researchAreas,
    getResearchAreaBySlug: (slug) =>
      researchAreas.find((area) => area.slug === slug),
    getPeople: () => people,
    getPersonById: (id) => people.find((person) => person.id === id),
    getPersonBySlug: (slug) => people.find((person) => person.slug === slug),
    getProjects: () => projects,
    getProjectBySlug: (slug) => projects.find((project) => project.slug === slug),
    getPublications: () => publications,
    getPublicationById: (id) =>
      publications.find((publication) => publication.id === id),
    getArtifacts: () => artifacts,
    getNews: () =>
      [...news].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    getNewsBySlug: (slug) => news.find((item) => item.slug === slug),
    getPartners: () => partners,
  };
}
