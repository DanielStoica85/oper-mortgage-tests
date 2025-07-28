import type { Page, Locator } from "@playwright/test";
import { CommonsPage } from "./CommonsPage";

export class ExpensesPage extends CommonsPage {
  readonly addExpenseButton: Locator;

  constructor(page: Page) {
    super(page);
    this.addExpenseButton = page.getByRole("button", { name: "Add expense" });
  }
}
