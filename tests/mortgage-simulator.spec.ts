import { test, expect } from "../fixtures/fixtures";
import { mortgageSimulationData } from "../data/mortgageSimulationData";

test("User is able to see a mortgage simulation report after filling in the financial details form", async ({
  dashboardPage,
  commonsPage,
  ownContributionPage,
  projectDetailsPage,
  expensesPage,
  mortgageOverviewPage,
}) => {
  await test.step("User clicks on the New Simulation link", async () => {
    await dashboardPage.goto();
    await dashboardPage.startNewSimulation();
  });

  await test.step("User chooses to buy a property by himself", async () => {
    await commonsPage.selectRadioButtonByName("Buy a property");
    await commonsPage.selectRadioButtonByName("I’m applying by myself");
  });

  await test.step("User provides basic project details including location and price", async () => {
    await projectDetailsPage.fillProjectDetails(
      mortgageSimulationData.projectDetails
    );
  });

  await test.step("User enters personal contribution (own funds)", async () => {
    await ownContributionPage.fillOwnContribution(
      mortgageSimulationData.ownFunds
    );
    await commonsPage.nextButton.click();
  });

  await test.step("User enters employee salary as income", async () => {
    await commonsPage.makeComboboxSelection("Income type", "Salary (employee)");
    await commonsPage.fillTextBoxByName(
      "Monthly",
      mortgageSimulationData.salary
    );
    await commonsPage.nextButton.click();
  });

  await test.step("User adds rent as a monthly liability", async () => {
    await expensesPage.addExpenseButton.click();
    await commonsPage.makeComboboxSelection("Liability type", "Rent");
    await commonsPage.fillTextBoxByName("Monthly", mortgageSimulationData.rent);
    await commonsPage.nextButton.click();
  });

  await test.step("User completes personal details (DOB and dependents)", async () => {
    await commonsPage.fillTextBoxByName(
      "Date of birth",
      mortgageSimulationData.birthDate
    );
    await commonsPage.fillTextBoxByName(
      "Number of dependents",
      mortgageSimulationData.dependents
    );
    await commonsPage.nextButton.click();
  });

  await test.step("User should see the mortgage overview with available offers", async () => {
    await expect(mortgageOverviewPage.mortgageOverviewHeading).toBeVisible();
    await expect(mortgageOverviewPage.totalMortgageAmount).toContainText(
      "€ 348,278"
    );
    await expect(mortgageOverviewPage.totalprojectCostsHeader).toContainText(
      "348,278"
    );
    await expect(mortgageOverviewPage.totalprojectCostsHeader).toBeVisible();
    await expect(mortgageOverviewPage.monthlyPriceSpan).toContainText(
      "€ 1,433"
    );
    await expect(mortgageOverviewPage.monthlyPriceSpan).toBeVisible();
  });
});
