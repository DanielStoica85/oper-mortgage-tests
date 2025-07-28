import type { Page, Locator } from "@playwright/test";
import { CommonsPage } from "./CommonsPage";

export class ProjectDetailsPage extends CommonsPage {
  readonly typeOfPropertyCombo: Locator;
  readonly projectLocationCombo: Locator;
  readonly propertyPriceInput: Locator;
  readonly propertyUsedForCombo: Locator;
  readonly typeOfSaleCombo: Locator;
  readonly epcScoreInput: Locator;
  readonly nextButton: Locator;

  constructor(page: Page) {
    super(page);
    this.typeOfPropertyCombo = page.getByRole("combobox", {
      name: "Type of property",
    });
    this.projectLocationCombo = page.getByRole("combobox", {
      name: "Project location",
    });
    this.propertyPriceInput = page.getByRole("textbox", {
      name: "Property price",
    });
    this.propertyUsedForCombo = page.getByRole("combobox", {
      name: "Property will be used for",
    });
    this.typeOfSaleCombo = page.getByRole("combobox", { name: "Type of sale" });
    this.epcScoreInput = page.getByRole("textbox", { name: "EPC score" });
    this.nextButton = page.getByRole("button", { name: "Next" });
  }

  async fillProjectDetails(options: {
    typeOfProperty: string;
    projectLocation: string;
    propertyPrice: string;
    propertyUsedFor: string;
    typeOfSale: string;
    epcScore: string;
  }) {
    await this.typeOfPropertyCombo.click();
    await this.page.getByText(options.typeOfProperty, { exact: true }).click();
    await this.projectLocationCombo.click();
    await this.page.getByText(options.projectLocation).click();
    await this.propertyPriceInput.fill(options.propertyPrice);
    await this.propertyUsedForCombo.click();
    await this.page.getByText(options.propertyUsedFor, { exact: true }).click();
    await this.typeOfSaleCombo.click();
    await this.page.getByText(options.typeOfSale).click();
    await this.epcScoreInput.fill(options.epcScore);
    await this.nextButton.click();
  }
}
