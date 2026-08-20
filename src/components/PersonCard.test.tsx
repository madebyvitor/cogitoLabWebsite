import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PersonCard } from "@/components/PersonCard";
import type { Person } from "@/data/types";

const person: Person = {
  id: "p-test",
  slug: "test-person",
  name: "Test Person",
  role: "researcher",
  title_pt: "Título PT",
  title_en: "Title EN",
  bio_pt: "Bio PT",
  bio_en: "Bio EN",
  photo_url: null,
  links: [{ kind: "github", url: "https://github.com/example" }],
};

describe("PersonCard", () => {
  it("renders name, role and localized bio", () => {
    render(
      <PersonCard
        person={person}
        locale="pt"
        roleLabel="Pesquisador"
        linkLabels={{ github: "GitHub" }}
      />,
    );

    expect(screen.getByText("Test Person")).toBeInTheDocument();
    expect(screen.getByText("Pesquisador")).toBeInTheDocument();
    expect(screen.getByText("Bio PT")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /GitHub/i })).toHaveAttribute(
      "href",
      "https://github.com/example",
    );
  });
});
