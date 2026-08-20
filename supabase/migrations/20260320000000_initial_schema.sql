-- Initial schema for Cogito Lab website (aligned with src/data/types.ts)
-- RLS: public read-only for anonymous users. Writes reserved for future admin role.

create type person_role as enum (
  'researcher',
  'collaborator',
  'phd',
  'msc',
  'ic',
  'alumni'
);

create type link_kind as enum (
  'lattes',
  'orcid',
  'github',
  'website',
  'scholar',
  'linkedin'
);

create type artifact_kind as enum (
  'software',
  'tool',
  'dataset',
  'repository'
);

create type news_kind as enum (
  'paper',
  'conference',
  'award',
  'defense',
  'other'
);

create type partner_kind as enum (
  'funding',
  'university',
  'industry'
);

create table institutions (
  id text primary key,
  name_pt text not null,
  name_en text not null
);

create table lab_info (
  id text primary key default 'default',
  name text not null,
  tagline text not null,
  mission_pt text not null,
  mission_en text not null,
  about_pt text not null,
  about_en text not null,
  email text not null,
  location_pt text not null,
  location_en text not null,
  github_org text not null
);

create table lab_institutions (
  lab_id text not null references lab_info (id) on delete cascade,
  institution_id text not null references institutions (id) on delete cascade,
  primary key (lab_id, institution_id)
);

create table social_links (
  id text primary key,
  lab_id text not null references lab_info (id) on delete cascade,
  kind text not null check (kind in ('github', 'linkedin', 'instagram', 'x')),
  url text not null,
  label text not null
);

create table research_areas (
  id text primary key,
  slug text not null unique,
  title_pt text not null,
  title_en text not null,
  summary_pt text not null,
  summary_en text not null,
  description_pt text not null,
  description_en text not null
);

create table people (
  id text primary key,
  slug text not null unique,
  name text not null,
  role person_role not null,
  title_pt text not null,
  title_en text not null,
  bio_pt text not null,
  bio_en text not null,
  photo_url text
);

create table person_links (
  id text primary key,
  person_id text not null references people (id) on delete cascade,
  kind link_kind not null,
  url text not null
);

create table publications (
  id text primary key,
  title text not null,
  year integer not null,
  venue_pt text not null,
  venue_en text not null,
  doi text,
  url text
);

create table publication_authors (
  publication_id text not null references publications (id) on delete cascade,
  person_id text not null references people (id) on delete cascade,
  position integer not null default 0,
  primary key (publication_id, person_id)
);

create table projects (
  id text primary key,
  slug text not null unique,
  code text not null,
  title_pt text not null,
  title_en text not null,
  description_pt text not null,
  description_en text not null,
  coordinator_id text not null references people (id),
  start_date date not null,
  end_date date
);

create table project_publications (
  project_id text not null references projects (id) on delete cascade,
  publication_id text not null references publications (id) on delete cascade,
  primary key (project_id, publication_id)
);

create table artifacts (
  id text primary key,
  kind artifact_kind not null,
  name text not null,
  description_pt text not null,
  description_en text not null,
  url text not null,
  year integer not null
);

create table news_items (
  id text primary key,
  slug text not null unique,
  kind news_kind not null,
  date date not null,
  title_pt text not null,
  title_en text not null,
  summary_pt text not null,
  summary_en text not null,
  body_pt text not null,
  body_en text not null
);

create table partners (
  id text primary key,
  kind partner_kind not null,
  name text not null,
  url text
);

alter table institutions enable row level security;
alter table lab_info enable row level security;
alter table lab_institutions enable row level security;
alter table social_links enable row level security;
alter table research_areas enable row level security;
alter table people enable row level security;
alter table person_links enable row level security;
alter table publications enable row level security;
alter table publication_authors enable row level security;
alter table projects enable row level security;
alter table project_publications enable row level security;
alter table artifacts enable row level security;
alter table news_items enable row level security;
alter table partners enable row level security;

create policy "Public read institutions"
  on institutions for select
  to anon, authenticated
  using (true);

create policy "Public read lab_info"
  on lab_info for select
  to anon, authenticated
  using (true);

create policy "Public read lab_institutions"
  on lab_institutions for select
  to anon, authenticated
  using (true);

create policy "Public read social_links"
  on social_links for select
  to anon, authenticated
  using (true);

create policy "Public read research_areas"
  on research_areas for select
  to anon, authenticated
  using (true);

create policy "Public read people"
  on people for select
  to anon, authenticated
  using (true);

create policy "Public read person_links"
  on person_links for select
  to anon, authenticated
  using (true);

create policy "Public read publications"
  on publications for select
  to anon, authenticated
  using (true);

create policy "Public read publication_authors"
  on publication_authors for select
  to anon, authenticated
  using (true);

create policy "Public read projects"
  on projects for select
  to anon, authenticated
  using (true);

create policy "Public read project_publications"
  on project_publications for select
  to anon, authenticated
  using (true);

create policy "Public read artifacts"
  on artifacts for select
  to anon, authenticated
  using (true);

create policy "Public read news_items"
  on news_items for select
  to anon, authenticated
  using (true);

create policy "Public read partners"
  on partners for select
  to anon, authenticated
  using (true);
