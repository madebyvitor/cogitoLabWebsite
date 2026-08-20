import { describe, expect, it } from "vitest";
import {
  doiUrl,
  formatDate,
  formatYearRange,
  getInitials,
} from "@/lib/format";

describe("format helpers", () => {
  it("formats ISO dates per locale", () => {
    expect(formatDate("2025-11-12", "pt")).toMatch(/2025/);
    expect(formatDate("2025-11-12", "en")).toMatch(/2025/);
  });

  it("formats project year ranges", () => {
    expect(formatYearRange("2024-08-01", "2027-07-31", "en", "Ongoing")).toBe(
      "2024 – 2027",
    );
    expect(formatYearRange("2025-01-01", null, "pt", "Em andamento")).toBe(
      "2025 – Em andamento",
    );
  });

  it("derives initials from names", () => {
    expect(getInitials("Ana Ribeiro")).toBe("AR");
    expect(getInitials("João da Silva")).toBe("JS");
  });

  it("normalizes DOI URLs", () => {
    expect(doiUrl("10.1000/example")).toBe("https://doi.org/10.1000/example");
    expect(doiUrl("https://doi.org/10.1000/example")).toBe(
      "https://doi.org/10.1000/example",
    );
  });
});
