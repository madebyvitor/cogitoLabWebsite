import type { Locale } from "@/i18n/routing";

export type PersonRole =
  | "researcher"
  | "collaborator"
  | "phd"
  | "msc"
  | "ic"
  | "alumni";

export type LinkKind =
  | "lattes"
  | "orcid"
  | "github"
  | "website"
  | "scholar"
  | "linkedin";

export type ArtifactKind = "software" | "tool" | "dataset" | "repository";

export type NewsKind = "paper" | "conference" | "award" | "defense" | "other";

export type PartnerKind = "funding" | "university" | "industry";

export const PERSON_ROLES: PersonRole[] = [
  "researcher",
  "collaborator",
  "phd",
  "msc",
  "ic",
  "alumni",
];

export interface Institution {
  id: string;
  name_pt: string;
  name_en: string;
}

export interface SocialLink {
  kind: "github" | "linkedin" | "instagram" | "x";
  url: string;
  label: string;
}

export interface LabInfo {
  name: string;
  tagline: string;
  mission_pt: string;
  mission_en: string;
  about_pt: string;
  about_en: string;
  email: string;
  location_pt: string;
  location_en: string;
  github_org: string;
  institutions: Institution[];
  social: SocialLink[];
}

export interface ResearchArea {
  id: string;
  slug: string;
  title_pt: string;
  title_en: string;
  summary_pt: string;
  summary_en: string;
  description_pt: string;
  description_en: string;
}

export interface PersonLink {
  kind: LinkKind;
  url: string;
}

export interface Person {
  id: string;
  slug: string;
  name: string;
  role: PersonRole;
  title_pt: string;
  title_en: string;
  bio_pt: string;
  bio_en: string;
  photo_url: string | null;
  links: PersonLink[];
}

export interface Project {
  id: string;
  slug: string;
  code: string;
  title_pt: string;
  title_en: string;
  description_pt: string;
  description_en: string;
  coordinator_id: string;
  start_date: string;
  end_date: string | null;
  publication_ids: string[];
}

export interface Publication {
  id: string;
  title: string;
  year: number;
  venue_pt: string;
  venue_en: string;
  doi: string | null;
  url: string | null;
  author_ids: string[];
}

export interface Artifact {
  id: string;
  kind: ArtifactKind;
  name: string;
  description_pt: string;
  description_en: string;
  url: string;
  year: number;
}

export interface NewsItem {
  id: string;
  slug: string;
  kind: NewsKind;
  date: string;
  title_pt: string;
  title_en: string;
  summary_pt: string;
  summary_en: string;
  body_pt: string;
  body_en: string;
}

export interface Partner {
  id: string;
  kind: PartnerKind;
  name: string;
  url: string | null;
}

export interface ContentRepository {
  getLab(): LabInfo;
  getResearchAreas(): ResearchArea[];
  getResearchAreaBySlug(slug: string): ResearchArea | undefined;
  getPeople(): Person[];
  getPersonById(id: string): Person | undefined;
  getPersonBySlug(slug: string): Person | undefined;
  getProjects(): Project[];
  getProjectBySlug(slug: string): Project | undefined;
  getPublications(): Publication[];
  getPublicationById(id: string): Publication | undefined;
  getArtifacts(): Artifact[];
  getNews(): NewsItem[];
  getNewsBySlug(slug: string): NewsItem | undefined;
  getPartners(): Partner[];
}

export function localizedField(
  item: object,
  field: string,
  locale: Locale,
): string {
  const record = item as Record<string, unknown>;
  const localized = record[`${field}_${locale}`];
  if (typeof localized === "string" && localized.length > 0) {
    return localized;
  }

  const fallback = record[`${field}_pt`];
  return typeof fallback === "string" ? fallback : "";
}
