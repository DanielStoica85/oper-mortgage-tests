## Bug Report: Mortgage simulation report is not displayed after user fills in valid mortgage data

**Environment:**  
https://demo-report-delta-self-service.operengineering.com/

**Summary:**  
After completing the mortgage simulation form with valid data, the user is not presented with the simulation report. The UI does not show the mortgage overview or any available offers, even though all required fields are filled in correctly.

---

### Steps to Reproduce

1. Go to https://demo-report-delta-self-service.operengineering.com/
2. Accept all Cookies.
3. Login with valid credentials.
4. Go to the simulation dashboard.
5. Click on **New Simulation**.
6. Select **Buy a property** as the project purpose.
7. Select **I’m applying by myself** as the number of borrowers.
8. Fill in the **Project Details**:
   - Type of property: _House_
   - Project location: _Brussels_
   - Property price: _300000_
   - Property will be used for: _Living_
   - Type of sale: _Private sale_
   - EPC score: _10_
9. Add **Own Funds**: _100000_
10. Fill in **Income**:
    - Income type: _Salary (employee)_
    - Monthly income: _4000_
11. Add **Expenses**:
    - Liability type: _Rent_
    - Monthly amount: _800_
12. Fill in **Personal Details**:
    - Date of birth: _13/05/1985_
    - Number of dependents: _0_
13. Click **Next** to reach the mortgage overview step.

### ✅ Expected results:

- A mortgage simulation report should be displayed.
- The overview should include:
  - Total project cost 348,278
  - Total mortgage amount 248,478
  - Monthly payment estimate 1433
  - Available loan offers from Mensualiteit

### ❌ Actual results:

- The mortgage simulation report is **not displayed**.
- No offers are visible.

### 🔎 Extra details:

The problem seems to come from the fact that the `/default_products/` API request does not return any products in the response.

This is the response received on the "delta" environment where the issue can be reproduced:

`{"count":0,"next":null,"previous":null,"results":{"products":[]}}`

Also, this causes the subsequent `offers/?is_borrower_acceptance_rules=true&generate_url=true&language=en-UK` API request to contain an empty list of `selected_products` inside its payload.

Running the same test on the [base environment](https://demo-report-base-self-service.operengineering.com/app/simulation) leads to a completely different response from the same API request, which contains a list of 9 products avilable for this customer.
