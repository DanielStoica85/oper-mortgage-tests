# Oper Mortgage Tests

This repository contains end-to-end (E2E) tests for the Oper Mortgage Simulator using Playwright and the Page Object Model (POM) pattern. The tests cover the full mortgage simulation flow, including login, form completion, and mortgage offer verification, across multiple environments.

## Features

- Playwright-based E2E tests for mortgage simulation
- Page Object Model (POM) structure for maintainability
- Environment-specific configuration (base, delta)
- Test data managed in a single file
- API response assertions for backend validation
- Modular, reusable test steps

## Project Structure

```
oper-mortgage-tests/
├── POM/                  # Page Object Model classes
├── data/                 # Test data files
├── fixtures/             # Playwright custom fixtures for POMs
├── tests/                # Test specs
│   └── mortgage-simulator.spec.ts
├── playwright.config.ts  # Playwright configuration (environments, retries, etc.)
├── package.json          # Scripts and dependencies
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Install dependencies

```sh
npm install
```

### Run tests

- **Base environment:**
  ```sh
  npx playwright test --project=base
  ```
- **Delta environment:**
  ```sh
  npx playwright test --project=delta
  ```
- **All environments:**

  ```sh
  npx playwright test
  ```

### View the HTML test report

After running tests, open the report with:

```sh
npx playwright show-report
```

### Folder Overview

- `POM/`: Contains all page object classes (e.g., LoginPage, DashboardPage, ProjectDetailsPage, etc.)
- `data/`: Centralized test data (e.g., `mortgageSimulationData.ts`)
- `fixtures/`: Custom Playwright fixtures to inject POMs into tests
- `tests/`: Test specifications using fixtures and POMs
