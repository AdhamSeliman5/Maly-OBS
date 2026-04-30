# Debts Module — User Guide

**System:** Maly - OBS (Online Business System)  
**Module:** Debts / Financial Position & Ledger  
**Version:** 1.0

---

## Module Purpose

The Debts module shows your financial position: liquid assets (receivables, pipeline, shipping balance, staff loans), fixed assets (equipment, property), and liabilities (payables, staff due, shipping debt). You can add manual debts (receivables and payables), settle them with full or partial payments, track history, and manage fixed assets (add, update value, sell or dispose). A forecast simulator lets you adjust the delivery rate and toggle pipeline inclusion to see how projected assets change. Overdue debts are highlighted, and the Net position shows your liquid financial standing.

---

## UI Elements

### Header Area
| Element | Description |
|---------|-------------|
| **Title** | "Financial Position & Ledger" / "Debts" |
| **Refresh** | Icon button — reload all data |
| **Add New Entry** | Button — add a new debt (Receivable or Payable) |

### KPI Cards
| Card | Description |
|------|-------------|
| **Liquid Assets** | Receivables, pipeline, shipping balance, staff loans (excludes fixed assets) |
| **Fixed Assets** | Sum of current values of all fixed assets |
| **Liabilities** | Payables, staff due today, shipping debt |
| **Net** | Liquid Assets − Liabilities (green if positive, red if negative) |
| **Overdue** | Total amount of past-due debts |

### Forecast Simulator (in Header)
| Element | Description |
|---------|-------------|
| **Pipeline** | Switch — include or exclude pipeline (To Prepare) orders in asset calculations |
| **Pipeline Info** | Shows count of pipeline orders |
| **Delivery Rate** | Slider 0–100% — percentage applied to pipeline and in-shipping values for forecast |

### Tabs
| Tab | Content |
|-----|---------|
| **Assets** | Table — receivables, pipeline, shipping balance, staff loans, fixed assets summary |
| **Liabilities** | Table — payables, staff due today, shipping debt |
| **Fixed Assets** | Table — asset list with Add button and per-row actions |

### Assets Table
| Column | Description |
|--------|-------------|
| **Source** | Row name (e.g., Pipeline, In Shipping, Shipping Ledger, Staff Loans, person name) |
| **Type** | Category badge (Forecast, Ledger, Payroll, Manual, CapEx) |
| **Amount** | Value (green) |
| **Due Date** | Due date or "-" |
| **Actions** | History (📜), Settle (✓) for manual entries; "-" for system rows |

### Liabilities Table
| Column | Description |
|--------|-------------|
| **Source** | Row name (e.g., Staff Due Today, person name) |
| **Type** | Category badge |
| **Amount** | Value (red) |
| **Due Date** | Due date or "-"; overdue shown in red with left bar |
| **Actions** | History, Settle for manual entries |

### Fixed Assets Table
| Column | Description |
|--------|-------------|
| **Asset Name** | Name of the asset |
| **Purchase Date** | Date acquired |
| **Purchase Price** | Original cost |
| **Current Value** | Updated/depreciated value |
| **Actions** | Update Value (✎), Sell/Dispose (🗑) |

### Add Debt Dialog
| Element | Description |
|---------|-------------|
| **Name** | Text field — person/entity name; suggestions appear as you type |
| **Amount** | Text field — numeric amount |
| **Type** | Dropdown — Receivable or Payable |
| **Notes** | Text field — optional |
| **Due Date** | Button — opens date picker |
| **Record in Cash Flow** | Checkbox — record transaction in treasury (checked by default) |
| **Save / Cancel** | Buttons |

### Settle Dialog
| Element | Description |
|---------|-------------|
| **Info** | Shows entity name, amount, and type (Receivable/Payable) |
| **Amount** | Text field — amount being paid (default: full amount) |
| **Notes** | Text field — optional |
| **Confirm / Cancel** | Buttons |

### History Log Dialog
| Element | Description |
|---------|-------------|
| **Table** | Date, Type, Amount, Balance, Notes for each transaction |

### Add Fixed Asset Dialog
| Element | Description |
|---------|-------------|
| **Asset Name** | Text field — name |
| **Purchase Date** | Button — date picker |
| **Purchase Price** | Text field — original cost |
| **Current Value** | Text field — optional; defaults to purchase price |
| **Record Payment in Treasury** | Switch — deduct purchase from cash (on by default) |
| **Notes** | Text field — optional |
| **Save / Cancel** | Buttons |

### Update Value Dialog
| Element | Description |
|---------|-------------|
| **Asset Name** | Display |
| **Current Value** | Text field — new value (for manual depreciation) |
| **Save / Cancel** | Buttons |

### Sell/Dispose Dialog
| Element | Description |
|---------|-------------|
| **Info** | Shows asset name and current value |
| **Sale Amount** | Text field — sale price; 0 = disposal (no cash received) |
| **Notes** | Text field — optional |
| **Confirm / Cancel** | Buttons |

---

## Step-by-Step Workflow

### 1. Add a New Debt (Receivable or Payable)

1. Click **Add New Entry**.
2. Enter **Name** (person or entity). As you type, suggestions from existing entries appear; click one to fill.
3. Enter **Amount** (positive number).
4. Select **Type**: **Receivable** (they owe you) or **Payable** (you owe them).
5. Optionally enter **Notes** and set **Due Date**.
6. Check **Record in Cash Flow** if the transaction involves actual cash:
   - **Receivable** + checked: you gave them cash (Expense) and they owe you.
   - **Payable** + checked: they gave you cash (Income) and you owe them.
7. Click **Save**.
8. Success: green snackbar; tables refresh. If the same entity already has a debt, the new amount is **netted** with the existing balance (added to or reduced from the current amount).
9. If treasury is insufficient when recording cash: "Insufficient treasury balance. (Current: X.XX)".

---

### 2. Settle a Debt (Full or Partial)

1. In the **Assets** or **Liabilities** table, find the manual entry and click **Settle** (✓).
2. Enter the **Amount** you are paying (default: full amount).
3. Optionally add **Notes**.
4. Click **Confirm**.
5. If the amount pays the full balance (or within 0.01), the debt is marked settled and removed from the active list.
6. If partial: the remaining balance stays; you can settle again later.
7. The system records the cash impact in the Expenses module (Income for receivable settlement, Expense for payable).
8. Treasury is checked when paying a payable (Expense).

---

### 3. View Debt History

1. In the Assets or Liabilities table, click **History** (📜) on a manual entry.
2. A dialog shows the transaction log: Date, Type, Amount, Balance After, Notes.
3. Click **Close** to dismiss.

---

### 4. Add a Fixed Asset

1. Open the **Fixed Assets** tab.
2. Click **Add Fixed Asset**.
3. Enter **Asset Name**.
4. Select **Purchase Date**.
5. Enter **Purchase Price**.
6. Optionally enter **Current Value** (defaults to purchase price if left blank).
7. Toggle **Record Payment in Treasury** — if on, the purchase is deducted from cash (treasury must be sufficient).
8. Optionally add **Notes**.
9. Click **Save**.
10. Success: green snackbar; fixed assets table refreshes.

---

### 5. Update Fixed Asset Value (Depreciation)

1. In the Fixed Assets table, click **Update Value** (✎) on the asset.
2. Enter the new **Current Value**.
3. Click **Save**.
4. Success: green snackbar; value updates (no treasury impact).

---

### 6. Sell or Dispose of a Fixed Asset

1. In the Fixed Assets table, click **Sell/Dispose** (🗑).
2. **To sell:** Enter **Sale Amount** (e.g., 5000). Income is recorded in the treasury.
3. **To dispose:** Enter **0**. The current value is written off as an Expense.
4. Optionally add **Notes**.
5. Click **Confirm**.
6. Success: asset is removed; treasury is updated (Income for sale, Expense for disposal).
7. For disposal, treasury must be sufficient to record the expense.

---

### 7. Adjust Forecast (Delivery Rate & Pipeline)

1. **Pipeline** switch: Turn off to exclude pipeline (To Prepare) orders from asset calculations.
2. **Delivery Rate** slider: Move to adjust the percentage applied to pipeline and in-shipping values (e.g., 85% = expect 85% to be collected).
3. KPI cards and tables update immediately when you change the slider or switch.

---

### 8. Refresh Data

1. Click **Refresh** in the header.
2. All data is reloaded from the database; KPIs and tables update.

---

## Business Rules & Validations

### Add Debt

| Rule | Result |
|------|--------|
| Name required | "Name is required" |
| Amount must be positive | "Amount must be positive" |
| Same entity | Amount is netted with existing balance; type (Receivable/Payable) may flip |
| Record in Cash Flow + Receivable | Expense recorded; treasury must cover amount |
| Record in Cash Flow + Payable | Income recorded |

### Settle Debt

| Rule | Result |
|------|--------|
| Amount must be positive | "Amount must be positive" |
| Debt not found | "Debt not found" |
| Balance ≤ 0.01 after payment | Marked fully settled, removed from active list |
| Payable settlement | Expense recorded; treasury must cover amount |
| Receivable settlement | Income recorded |

### Add Fixed Asset

| Rule | Result |
|------|--------|
| Asset name required | "Asset name is required" |
| Invalid amount | "Invalid amount" |
| Record in Treasury + purchase_price > 0 | Treasury must be sufficient |
| Current value | Optional; defaults to purchase price |

### Update Fixed Asset Value

| Rule | Result |
|------|--------|
| Value cannot be negative | "Value cannot be negative" |
| Invalid value | "Invalid value" |
| Asset not found | "Asset not found" |

### Sell/Dispose Fixed Asset

| Rule | Result |
|------|--------|
| Sale amount > 0 | Income recorded in treasury |
| Sale amount = 0 (disposal) | Expense = current value (write-off); treasury must be sufficient |
| Sale amount cannot be negative | Dialog rejects negative input |
| Asset not found | "Asset not found" |

### General

| Rule | Description |
|------|-------------|
| Smart ledger | Same entity: multiple entries are netted into one balance |
| Soft delete | Deleting a debt marks it settled (not physically removed) |
| Overdue | Debts with due date &lt; today show red bar and red due date |

---

## Messages & Alerts

| Situation | Message |
|-----------|---------|
| Add debt success | "Saved successfully" (green) |
| Settle success | "Settled successfully" (green) |
| Delete success | "Deleted" (green) |
| Add fixed asset success | "Fixed asset added successfully" (green) |
| Update value success | "Value updated" (green) |
| Sell success | "Asset sold successfully" (green) |
| Dispose success | "Asset disposed" (green) |
| Treasury insufficient | "Insufficient treasury balance. (Current: X.XX)" (red) |
| Name required | "Name is required" (red) |
| Amount must be positive | "Amount must be positive" (red) |
| Debt not found | "Debt not found" (red) |
| Asset name required | "Asset name is required" (red) |
| Invalid amount | "Invalid amount" (red) |
| Value cannot be negative | "Value cannot be negative" (red) |
| Asset not found | "Asset not found" (red) |

---

## Tips

- **Liquid Assets** exclude fixed assets and show cash-like items (receivables, pipeline, loans).
- **Net** = Liquid Assets − Liabilities; indicates your liquid financial position.
- **Pipeline** and **Delivery Rate** affect only forecast rows (orange "Forecast" badge); manual and system rows are fixed.
- **Record in Cash Flow** links debt and treasury: cash movements are logged in the Expenses module.
- **Same-entity netting** keeps one balance per person; adding a receivable and a payable for the same person produces a net balance.
- **Settle** reduces the debt; use partial amounts for installments.
- **Fixed assets** are separate from liquid assets; use Update Value for depreciation.
- **Disposal** (sale amount 0) writes off the current value as an expense.
