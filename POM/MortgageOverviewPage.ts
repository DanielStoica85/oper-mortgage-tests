import type { Page, Locator } from "@playwright/test";
import { CommonsPage } from "./CommonsPage";

export class MortgageOverviewPage extends CommonsPage {
  readonly mortgageOverviewHeading: Locator;
  readonly totalMortgageAmount: Locator;
  readonly totalprojectCostsHeader: Locator;
  readonly monthlyPriceSpan: Locator;

  constructor(page: Page) {
    super(page);
    this.mortgageOverviewHeading = page.getByRole("heading", {
      name: "Mortgage overview",
    });
    this.totalMortgageAmount = page.locator("div.barchart__title");
    this.totalprojectCostsHeader = page.getByText("Total project cost€");
    this.monthlyPriceSpan = page.locator("span.summary__price");
  }
}
