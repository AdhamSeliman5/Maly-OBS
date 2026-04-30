# Reports Module — User Guide

**System:** Maly - OBS (Online Business System)  
**Module:** Reports / Financial Intelligence & Partner Distribution  
**Version:** 1.0

---

## Module Purpose

The Reports module provides the financial overview of your business: assets, liabilities, KPIs, partner distribution, and scenario simulation. You see Net Profit, Revenue, Net Equity, Liquidity, ROI, Burn Rate, Runway, and a detailed breakdown of assets and liabilities. A simulation engine lets you adjust delivery rate, pipeline logic (ship all vs ready only), and inventory valuation to explore "what-if" scenarios. Partners are managed with share percentages, capital, injections, withdrawals, and profit distribution. You can export reports to PDF, close financial periods, and execute partner exits with strict payout calculations.

---

## UI Elements

### Header Area
| Element | Description |
|---------|-------------|
| **Title** | "Financial Reports & Intelligence" / "Financial Position & Partner Distribution" |
| **Refresh** | Icon button — reload all data |
| **Export PDF** | Button — generate and open PDF report |

### KPI Cards (8 cards, clickable)
| Card | Description |
|------|-------------|
| **Net Profit** | Distribution base (adjusted equity − effective capital) |
| **Net Revenue** | Total revenue (orders + archived) |
| **Net Equity** | Assets − Liabilities |
| **Net Liquidity** | Liquid assets − current liabilities |
| **Profit Margin** | Net Profit ÷ Revenue × 100 |
| **ROI** | Net Profit ÷ Opening Capital × 100 |
| **Burn Rate** | Average monthly operating expenses |
| **Runway** | Months of liquidity at current burn rate |

### Simulation Controls
| Element | Description |
|---------|-------------|
| **Delivery Rate** | Slider 0–100% — expected % of orders delivered |
| **Inventory Valuation Rate** | Slider 0–100% — inventory value vs book |
| **Pipeline Execution** | Switch — Ship All Pipeline or Ship Ready Only |
| **Settings** | Icon — open Simulation Settings (return cost, moderator bonus, packaging cost) |
| **Disclaimer** | Info icon — simulation disclaimer |
| **Run Simulation** | Button — apply current settings and recalculate |
| **Reset** | Button — clear simulation, return to book value |

### Simulation Settings Dialog
| Element | Description |
|---------|-------------|
| **Average Return Cost per Order** | Text field — cost per returned order |
| **Average Moderator Bonus per Successful Order** | Text field |
| **Average Packaging Cost per Order** | Text field |
| **Save & Apply** | Button |

### Tabs
| Tab | Content |
|-----|---------|
| **Financial Breakdown** | KPIs, simulation controls, Assets/Liabilities tables, Monthly Performance |
| **Partners & Distribution** | Summary cards, share total bar, Partners table, Add Partner |

### Financial Breakdown Tab
| Element | Description |
|---------|-------------|
| **Assets** | Cash, Inventory, Staff Loans, Receivables, In Shipping, Pipeline, Shipping Ledger (Credit), Fixed Assets (with Exclude toggle) |
| **Liabilities** | Staff Pending, Payables, Restock Cost, Return Penalties, Moderator Bonus, Packaging Cost, Shipping Ledger (Debt) |
| **Fixed Assets Toggle** | "Exclude (Liquid Mode)" — removes fixed assets from equity for liquid view |
| **Monthly Performance** | Line chart (Revenue vs Expenses), Bar chart (Net diff), sortable table (Month, Revenue, Expenses, Difference) |

### Partners Tab
| Element | Description |
|---------|-------------|
| **Total Capital** | Sum of partner initial capital |
| **Distribution Base** | Net Profit available for distribution (adjusted equity − effective capital) |
| **Total Shares** | Progress bar + percentage (green if 100%, red if not) |
| **Add Partner** | Button |
| **Partners Table** | Name (click for History), Share %, Capital, Profit/Simulated Share, Withdrawals, Injections, Total Equity, Actions |

### Partner Row Actions
| Action | Description |
|--------|-------------|
| **Name (link)** | Opens Partner History dialog |
| **Add Transaction** | Add Injection, Withdrawal, or Capital Increase |
| **Edit** | Update name and share % |
| **Delete** | Opens Partner Exit dialog |

### Add Partner Dialog
| Element | Description |
|---------|-------------|
| **Name** | Text field — partner name |
| **Share %** | Text field — ownership percentage |
| **Capital** | Text field — initial capital (optional) |
| **Note** | "Share must be > 0% and total cannot exceed 100%" |
| **Save** | Button |

### Edit Partner Dialog
| Element | Description |
|---------|-------------|
| **Name** | Text field |
| **Share %** | Text field |
| **Capital** | Read-only (cannot change) |
| **Update** | Button |

### Add Transaction Dialog
| Element | Description |
|---------|-------------|
| **Type** | Dropdown — Withdrawal, Cash Injection, Capital Increase |
| **Amount** | Text field — EGP |
| **Notes** | Text field — optional |
| **Save** | Button |

### Partner History Dialog
| Element | Description |
|---------|-------------|
| **Sections** | Injections, Withdrawals, Profit Share — each with date, amount, note |
| **Close** | Button |

### Partner Exit Dialog
| Element | Description |
|---------|-------------|
| **Warning** | "Partner will be removed and share redistributed to remaining partners." |
| **Include Fixed Assets Valuation** | Switch |
| **Inventory Liquidation %** | Slider 0–100% |
| **Recalculate** | Button — refresh payout with new valuation |
| **Breakdown** | Assets, Liabilities, Partner status, Net Payout Due |
| **Pay Now (from Treasury)** | Switch — pay immediately or create debt |
| **Due Date** | Date picker — shown when Pay Now is off |
| **Finalize Exit & Remove Partner** | Button |

### KPI Breakdown Dialog (Explainable BI)
| Element | Description |
|---------|-------------|
| **Content** | Formula and components for the clicked KPI |
| **Close** | Button |

---

## Step-by-Step Workflow

### 1. View Financial Breakdown

1. Open **Financial Breakdown** tab (default).
2. View the 8 KPI cards.
3. Click any KPI card to open the **Breakdown** dialog with the formula.
4. Scroll to see **Assets** and **Liabilities** tables.
5. Toggle **Exclude (Liquid Mode)** on Fixed Assets to see liquid equity only.
6. View **Monthly Performance** charts and table; click column headers to sort.

---

### 2. Run a Simulation

1. Adjust **Delivery Rate** slider (0–100%).
2. Adjust **Inventory Valuation Rate** slider (0–100%).
3. Set **Pipeline Execution**: Ship All Pipeline or Ship Ready Only.
4. Optionally click **Settings** to set return cost, moderator bonus, packaging cost.
5. Click **Run Simulation**.
6. KPIs, assets, liabilities, and Partners table update with simulated values.
7. Simulation settings are saved for the session.

---

### 3. Reset Simulation

1. Click **Reset**.
2. Simulation is cleared; values return to book (historical).
3. Delivery Rate resets to implied historical rate; Pipeline = Ship Ready Only; Inventory = 100%.

---

### 4. Add a Partner

1. Open **Partners & Distribution** tab.
2. Click **Add Partner**.
3. Enter **Name** (required).
4. Enter **Share %** (required; must be > 0; total shares cannot exceed 100%).
5. Enter **Capital** (optional; initial investment).
6. Click **Save**.
7. Success: green snackbar; table refreshes.
8. If total shares exceed 100%: backend may reject or show error.

---

### 5. Edit a Partner

1. In Partners table, click **Edit** (✎) on the row.
2. Change **Name** or **Share %**.
3. Capital cannot be changed here.
4. Click **Update**.
5. Success: green snackbar; table refreshes.

---

### 6. Add a Partner Transaction

1. In Partners table, click **Add Transaction** (💳) on the row.
2. Select **Type**: Withdrawal, Cash Injection, or Capital Increase.
3. Enter **Amount** (required).
4. Optionally add **Notes**.
5. Click **Save**.
6. Success: green snackbar; data reloads.
7. Withdrawal from treasury: treasury must be sufficient.

---

### 7. View Partner History

1. Click the partner **Name** in the Partners table.
2. A dialog shows Injections, Withdrawals, and Profit Share transactions.

---

### 8. Distribute Profits

1. In Partners table, find the **Distribute** action (if shown).
2. Enter the amount to distribute to a partner.
3. Confirm. The amount is recorded as a Withdrawal (profit distribution).
4. Treasury must be sufficient.

---

### 9. Exit a Partner

1. In Partners table, click **Delete** (🗑) on the row.
2. Pre-validation: "Cannot exit the last remaining partner" or "Total shares must equal exactly 100% before executing an exit" if not met.
3. The **Partner Exit** dialog opens with:
   - Valuation controls (Include Fixed Assets, Inventory Liquidation %)
   - **Recalculate** to refresh the payout
   - Detailed breakdown (assets, liabilities, partner status, net payout)
4. Choose **Pay Now (from Treasury)** or create a Payable (due date required).
5. Click **Finalize Exit & Remove Partner**.
6. Success: partner is removed; share is redistributed to remaining partners.
7. If Pay Now: treasury must be sufficient.
8. If creating debt: enter **Due Date**.

---

### 10. Close a Financial Period

1. (If Close Period is available in the UI) Use the Close Period action.
2. Validates that total shares = 100%.
3. Archives the period; moves partner dues to Debts; clears partners ledger.
4. "Cannot Close: Total Shares are X%. Must be 100%." if shares ≠ 100%.

---

### 11. Export to PDF

1. Click **Export PDF** in the header.
2. A PDF report is generated and opens.
3. Report includes current KPIs, simulation params (if active), partners, assets/liabilities.
4. Saved to a fixed path (e.g., Desktop/Reports/Financial report).
5. Success: "PDF saved to [path]" (green).

---

### 12. Refresh Data

1. Click **Refresh** in the header.
2. All data is reloaded from the database.
3. Saved simulation params may be reapplied if stored.

---

## Business Rules & Validations

### Partners

| Rule | Result |
|------|--------|
| Name required | Dialog stays open |
| Share % required | Dialog stays open |
| Share > 0 | "Share must be > 0% and total cannot exceed 100%" (note in UI) |
| Total shares ≤ 100% | Add/Edit may fail if exceeded |
| Capital | Optional; if > 0, recorded as Income (Capital Injection) |

### Partner Exit

| Rule | Result |
|------|--------|
| Last partner | "Cannot exit the last remaining partner." |
| Total shares ≠ 100% | "Total shares must equal exactly 100% before executing an exit." |
| Pay Now | Treasury must be sufficient |
| Pay as debt | Due date required; "Provide due date" if missing |
| Share redistribution | Exiting share goes to remaining partners (proportional) |

### Close Period

| Rule | Result |
|------|--------|
| Total shares ≠ 100% | "Cannot Close: Total Shares are X%. Must be 100%." |
| Success | Period archived; partner dues moved to Debts |

### Simulation

| Rule | Description |
|------|-------------|
| Delivery Rate | 0–100%; applied to pipeline/in-shipping revenue |
| Liquidation Rate | 0–100%; applied to inventory value |
| Ship All | Includes restock liability; Ready Only = ready orders only |
| Runway | Net Liquidity ÷ Burn Rate; 0 if liquidity < 0 or burn = 0 |

### General

| Rule | Description |
|------|-------------|
| Net Profit | Distribution base = Adjusted Net Equity − Effective Capital |
| Effective Capital | Sum of partner capital + injections − withdrawals |
| Exclude Fixed Assets | Liquid mode; fixed assets removed from equity |
| Data scope | All-time (no date filter for main report) |

---

## Messages & Alerts

| Situation | Message |
|-----------|---------|
| Partner added | "Partner added" / success (green) |
| Partner updated | "Partner Updated" (green) |
| Transaction added | Success (green) |
| Partner exit success | "Partner Exit Executed" (green) |
| Partner removed & settled | "Partner Removed & Settled" (green) |
| Period closed | "Period Closed Successfully. Profits moved to Debts." (green) |
| Last partner exit | "Cannot exit the last remaining partner." (red) |
| Shares not 100% | "Total shares must equal exactly 100% before executing an exit." (red) |
| Close period shares | "Cannot Close: Total Shares are X%. Must be 100%." (red) |
| Partner not found | "Partner not found" (red) |
| Treasury insufficient | "Insufficient treasury balance. (Current: X.XX)" (red) |
| Provide due date | "Provide due date" (red) |
| PDF saved | "PDF saved to [path]" (green) |

---

## Tips

- **Click KPI cards** to see the exact formula and components (Explainable BI).
- **Simulation** is indicative; delivery rate affects revenue; return/mod bonus/packaging use order counts from settings.
- **Distribution Base** = what can be distributed to partners (after effective capital).
- **Total Shares** bar: green when 100%; red when not — fix before closing or exiting.
- **Partner Exit** uses book value for payout; simulation does not affect exit math (unless explicitly overridden in implementation).
- **Exclude Fixed Assets** shows liquid equity only (no fixed assets in assets total).
- **Monthly Performance** shows last 12 months; sort by clicking column headers.
- **Export PDF** uses current view (simulated or book) and includes report parameters.
- **Capital** in Edit Partner is read-only; use Capital Increase transaction to add.
- **Company Treasury** can hold shares when a partner exits (shares transferred to keep total at 100%).
