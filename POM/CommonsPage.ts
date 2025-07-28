import type { Page, Locator } from "@playwright/test";

export class CommonsPage {
  readonly page: Page;
  readonly nextButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nextButton = page.getByRole("button", { name: "Next" });
  }

  async selectRadioButtonByName(name: string) {
    await this.page.getByRole("radio", { name }).click();
  }

  async fillTextBoxByName(name: string, input: string) {
    await this.page.getByRole("textbox", { name }).fill(input);
  }

  async makeComboboxSelection(name: string, option: string) {
    await this.page.getByRole("combobox", { name }).click();
    await this.page.getByText(option, { exact: true }).click();
  }
}
