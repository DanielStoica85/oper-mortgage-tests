import { chromium, type FullConfig } from "@playwright/test";
import { CookiesModal } from "./POM/CookiesModal";
import { LoginPage } from "./POM/LoginPage";

const EMAIL = "dldanielstoica@gmail.com";
const PASSWORD = "NepK2ikPJrLc8P@";

async function loginAndSaveState(baseURL: string, storageStatePath: string) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseURL);

  const cookiesModal = new CookiesModal(page);
  await cookiesModal.acceptAllCookies();

  const loginPage = new LoginPage(page);
  await loginPage.login(EMAIL, PASSWORD);

  await page.context().storageState({ path: storageStatePath });
  await browser.close();
}

async function globalSetup(config: FullConfig) {
  await loginAndSaveState(
    "https://demo-report-base-self-service.operengineering.com",
    "storage/baseState.json"
  );
  await loginAndSaveState(
    "https://demo-report-delta-self-service.operengineering.com",
    "storage/deltaState.json"
  );
}

export default globalSetup;
