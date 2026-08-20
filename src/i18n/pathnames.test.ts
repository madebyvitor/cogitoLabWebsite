import { describe, expect, it } from "vitest";
import {
  getEquivalentHref,
  getPageHref,
  resolvePage,
} from "@/i18n/pathnames";

describe("pathnames", () => {
  it("builds localized home hrefs", () => {
    expect(getPageHref("pt", "home")).toBe("/pt/");
    expect(getPageHref("en", "home")).toBe("/en/");
  });

  it("builds localized content page hrefs", () => {
    expect(getPageHref("pt", "about")).toBe("/pt/sobre/");
    expect(getPageHref("en", "about")).toBe("/en/about/");
  });

  it("resolves segments back to page keys", () => {
    expect(resolvePage("pt", "sobre")).toBe("about");
    expect(resolvePage("en", "people")).toBe("people");
    expect(resolvePage("pt", "unknown")).toBeNull();
  });

  it("switches locale while preserving equivalent page", () => {
    expect(getEquivalentHref("pt", "en", "/pt/sobre/")).toBe("/en/about/");
    expect(getEquivalentHref("en", "pt", "/en/research/")).toBe("/pt/pesquisa/");
  });

  it("switches locale for research detail slugs", () => {
    expect(
      getEquivalentHref(
        "pt",
        "en",
        "/pt/pesquisa/ia-engenharia-software/",
      ),
    ).toBe("/en/research/ia-engenharia-software/");
  });
});
