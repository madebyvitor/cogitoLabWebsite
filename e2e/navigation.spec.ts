import { test, expect } from "@playwright/test";

test.describe("Cogito Lab navigation", () => {
  test("loads Portuguese home and navigates to people", async ({ page }) => {
    await page.goto("/pt/");
    await expect(page.getByRole("heading", { name: "Cogito Lab" })).toBeVisible();

    await page.getByRole("navigation", { name: "Main" }).getByRole("link", {
      name: "Pessoas",
    }).click();

    await expect(page).toHaveURL(/\/pt\/pessoas\/$/);
    await expect(
      page.getByRole("heading", { name: "Pessoas", exact: true }),
    ).toBeVisible();
  });

  test("switches language while preserving page context", async ({ page }) => {
    await page.goto("/pt/sobre/");
    await page.getByRole("link", { name: "en", exact: true }).click();

    await expect(page).toHaveURL(/\/en\/about\/$/);
    await expect(
      page.getByRole("heading", { name: "About the lab" }),
    ).toBeVisible();
  });

  test("renders on a narrow viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/pt/");
    await expect(page.getByRole("heading", { name: "Cogito Lab" })).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Menu" }),
    ).toBeVisible();
  });
});
