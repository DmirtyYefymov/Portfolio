import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("renders a single h1 heading", async ({ page }) => {
        const h1s = page.locator("h1");
        await expect(h1s).toHaveCount(1);
    });

    test("renders Hero section", async ({ page }) => {
        await expect(page.locator("#home")).toBeVisible();
    });

    test("renders About section", async ({ page }) => {
        await expect(page.locator("#about")).toBeVisible();
    });

    test("renders Contact section", async ({ page }) => {
        await expect(page.locator("#contact")).toBeVisible();
    });

    test("contact mailto link is present", async ({ page }) => {
        const link = page.locator('a[href^="mailto:"]');
        await expect(link).toBeVisible();
    });

    test("footer social links have rel=noopener noreferrer", async ({ page }) => {
        const externalLinks = page.locator('a[target="_blank"]');
        const count = await externalLinks.count();
        expect(count).toBeGreaterThan(0);
        for (let i = 0; i < count; i++) {
            const rel = await externalLinks.nth(i).getAttribute("rel");
            expect(rel).toContain("noopener");
            expect(rel).toContain("noreferrer");
        }
    });

    test("mobile menu burger has aria-expanded", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        const burger = page.locator('button[aria-controls="mobile-menu"]');
        await expect(burger).toHaveAttribute("aria-expanded", "false");
        await burger.click();
        await expect(burger).toHaveAttribute("aria-expanded", "true");
    });

    test("mobile menu closes on Escape key", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        const burger = page.locator('button[aria-controls="mobile-menu"]');
        await burger.click();
        await expect(burger).toHaveAttribute("aria-expanded", "true");
        await page.keyboard.press("Escape");
        await expect(burger).toHaveAttribute("aria-expanded", "false");
    });
});
