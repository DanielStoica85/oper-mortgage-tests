import { Page, expect, Locator } from "@playwright/test";

export class CookiesModal {
  readonly page: Page;
  readonly allowAllButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allowAllButton = page.getByRole("button", {
      name: "Allow All Cookies",
    });
  }

  async acceptAllCookies() {
    await this.allowAllButton.click();
    await expect(this.allowAllButton).toBeHidden();
  }
}
