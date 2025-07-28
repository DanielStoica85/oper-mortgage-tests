import { test as base, expect } from "@playwright/test";
import { DashboardPage } from "../POM/DashboardPage";
import { CommonsPage } from "../POM/CommonsPage";
import { ProjectDetailsPage } from "../POM/ProjectDetailsPage";
import { OwnContributionPage } from "../POM/OwnContributionPage";
import { ExpensesPage } from "../POM/ExpensesPage";
import { MortgageOverviewPage } from "../POM/MortgageOverviewPage";

// Extend base test with custom fixtures for all POMs
export const test = base.extend<{
  dashboardPage: DashboardPage;
  commonsPage: CommonsPage;
  ownContributionPage: OwnContributionPage;
  projectDetailsPage: ProjectDetailsPage;
  expensesPage: ExpensesPage;
  mortgageOverviewPage: MortgageOverviewPage;
}>({
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  commonsPage: async ({ page }, use) => {
    await use(new CommonsPage(page));
  },
  ownContributionPage: async ({ page }, use) => {
    await use(new OwnContributionPage(page));
  },
  projectDetailsPage: async ({ page }, use) => {
    await use(new ProjectDetailsPage(page));
  },
  expensesPage: async ({ page }, use) => {
    await use(new ExpensesPage(page));
  },
  mortgageOverviewPage: async ({ page }, use) => {
    await use(new MortgageOverviewPage(page));
  },
});

export { expect };
