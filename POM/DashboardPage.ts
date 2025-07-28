import type { Page, Locator } from "@playwright/test";
import { expect } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly simulationsHeading: Locator;
  readonly newSimulationButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.simulationsHeading = page.getByRole("heading", {
      name: "Simulations",
    });
    this.newSimulationButton = page.getByText("New Simulation");
  }

  async goto() {
    await this.page.goto("/app/dashboard");
    await expect(this.page).toHaveURL(/.*\/app\/dashboard/);
    await expect(this.simulationsHeading).toBeVisible();
  }

  async startNewSimulation() {
    await this.newSimulationButton.click();
  }
}
