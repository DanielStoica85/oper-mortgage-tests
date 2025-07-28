import { Page, expect, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole("textbox", { name: "E-mail" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.locator('[data-test="button--login"]');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await expect(this.loginButton).toBeEnabled();
    await this.loginButton.click();
    await expect(this.page).toHaveURL(/.*\/app\/dashboard/);
  }
}
