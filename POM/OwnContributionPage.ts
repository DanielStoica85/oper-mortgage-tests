import type { Page } from "@playwright/test";
import { CommonsPage } from "./CommonsPage";

export class OwnContributionPage extends CommonsPage {
  constructor(page: Page) {
    super(page);
  }

  async fillOwnContribution(ownFunds: string) {
    await this.fillTextBoxByName("Own funds", ownFunds);
  }
}
