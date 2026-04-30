# Expenses Module — User Guide

**System:** Maly - OBS (Online Business System)  
**Module:** Expenses / Treasury & Operations Ledger  
**Version:** 1.0

---

## Module Purpose

The Expenses module tracks income and expenses, maintains the treasury (cash) balance, and records financial operations in a date-filtered ledger. You can add manual entries (income or expense), view totals by category, close the day with an actual cash count to reconcile differences, and consolidate all transactions into summary entries. The module also provides analytics to see how expenses break down by category. Treasury balance is strictly enforced: you cannot record an expense that would make the cash balance negative.

---

## UI Elements

### Header Area
| Element | Description |
|---------|-------------|
| **Header Title** | "Expenses" / "Operations Ledger" subtitle |
| **Consolidate** | Button — groups all transactions by category into single entries (irreversible) |

### KPI Cards
| Card | Description |
|------|-------------|
| **Total Treasury** | Current cash balance (all income minus all expenses) |
| **Total Income** | Sum of income in the selected date range |
| **Total Expenses** | Sum of expenses in the selected date range |

### Action Bar
| Element | Description |
|---------|-------------|
| **Search** | Text field — search in ledger by category, notes, or amount |
| **Date Range** | Clickable field — opens date range picker (presets + custom) |
| **Refresh** | Icon button — reload data |
| **New Entry** | Button — add a new income or expense |
| **Close Day** | Button — reconcile treasury with actual cash count |

### Tabs
| Tab | Content |
|-----|---------|
| **Operations Ledger** | Transaction table with pagination |
| **Analytics & Reports** | Expenses breakdown chart by category |

### Operations Ledger Tab
| Element | Description |
|---------|-------------|
| **Data Table** | Columns: Type, Category, Amount, Date, Notes, Actions |
| **Type** | Income (green) or Expense (red) with icon |
| **Actions** | Edit and Delete buttons per row (or "System" badge for auto-generated entries) |
| **Pagination** | Previous / Page X of Y / Next — 15 rows per page |

### Entry Dialog (Add / Edit)
| Element | Description |
|---------|-------------|
| **Type** | Radio buttons — Expense or Income (changes dialog background color) |
| **Category** | Dropdown — select category; + button to add new category |
| **Amount** | Text field — numeric amount |
| **Notes** | Text field — optional description |
| **Date** | Button — opens date picker (new entries only; disabled when editing) |
| **Save** | Button — save the entry |

### Add Category Dialog
| Element | Description |
|---------|-------------|
| **Name** | Text field — new category name |
| **Add** | Button — create category and select it in the parent dialog |

### Close Day Dialog
| Element | Description |
|---------|-------------|
| **System Balance** | Display — current calculated balance |
| **Amount** | Text field — actual cash you have in hand |
| **Confirm** | Button — create adjustment if there is a difference |

### Consolidate Dialog
| Element | Description |
|---------|-------------|
| **Warning** | Explains that all transactions will be grouped by category; consolidated entries cannot be edited; action cannot be undone |
| **Info** | "This will consolidate ALL transactions in the system (not just the current date range)" |
| **Cancel** | Dismiss dialog |
| **Confirm** | Proceed with consolidation |

### Analytics Tab
| Element | Description |
|---------|-------------|
| **Expenses Breakdown** | Section title |
| **Include Purchases & System** | Switch — include purchase/system transactions in the chart (off by default) |
| **Chart List** | Bar-style list — category names with progress bars and amounts, sorted by amount |

---

## Step-by-Step Workflow

### 1. Add a New Entry (Income or Expense)

1. Click **New Entry**.
2. Choose **Income** or **Expense** (Expense is default).
3. Select a **Category** from the dropdown, or click the **+** icon to add a new category.
4. Enter the **Amount** (e.g., 150.50).
5. Optionally enter **Notes**.
6. Click the **Date** button to pick a date (defaults to today for new entries).
7. Click **Save**.
8. The dialog closes. If saved successfully, a green snackbar shows; the ledger and KPIs refresh. If the amount is invalid or required fields are missing, the dialog stays open (fix and try again).

---

### 2. Edit an Entry

1. In the ledger, find the row and click the **Edit** icon (blue pencil).
2. Change **Category**, **Amount**, **Type**, or **Notes**. Date cannot be changed when editing.
3. Click **Save**.
4. Success: green snackbar; ledger refreshes.
5. **Note:** System-generated entries (e.g., daily closing adjustments, consolidated entries) show a "System" badge instead of Edit/Delete and cannot be edited.

---

### 3. Delete an Entry

1. In the ledger, click the **Delete** icon (red trash).
2. Confirm in the dialog.
3. Success: green snackbar; ledger refreshes.
4. **Note:** System-generated entries cannot be deleted.

---

### 4. Add a New Category

1. Open **New Entry** or **Edit**.
2. Click the **+** (plus) icon next to the Category dropdown.
3. Enter the category **Name** and click **Add**.
4. The new category is created and selected. Continue filling the entry form and click **Save**.

---

### 5. Change Date Range

1. Click the **Date Range** field (shows start → end).
2. In the dialog, choose a preset (Today, Yesterday, This Week, Last Week, This Month, Last Month, This Year, Last Year, All Time) or pick custom Start and End dates.
3. Apply the selection. The ledger and KPIs update to the new range.
4. The range is remembered for the session.

---

### 6. Search in the Ledger

1. Type in the **Search** field.
2. The ledger filters by category, notes, or amount in real time.
3. KPIs still reflect the full filtered result set.

---

### 7. Close the Day (Reconcile Cash)

1. Count your actual cash on hand.
2. Click **Close Day**.
3. See the **System Balance** (calculated from all income and expenses).
4. Enter the **Amount** you actually have (actual cash).
5. Click **Confirm**.
6. If the difference is more than 0.01, the system adds an protected **Adjustment** entry (Income or Expense) to match the actual balance. A green snackbar confirms with the difference shown.
7. **Note:** Actual cash cannot be negative. If you enter a negative value, an error message appears.

---

### 8. Consolidate Transactions

1. Click **Consolidate** in the header.
2. Read the warning: all transactions (manual and system) will be grouped by category into single entries; consolidated entries cannot be edited; this cannot be undone.
3. Click **Confirm** to proceed or **Cancel** to close.
4. Success: green snackbar; ledger refreshes with fewer, grouped entries.
5. If there are no transactions: "No transactions to consolidate" is shown.
6. **Note:** Consolidation affects all transactions in the system, not only the current date range.

---

### 9. View Analytics

1. Open the **Analytics & Reports** tab.
2. See the **Expenses Breakdown** chart (categories with amounts and progress bars).
3. Toggle **Include Purchases & System** to include or exclude purchase and system-generated transactions in the chart.
4. The chart shows only expense categories (no income).

---

### 10. Paginate the Ledger

1. Use **Previous** and **Next** to move between pages (15 rows per page).
2. The label shows "Page X of Y".

---

## Business Rules & Validations

### Add / Edit Entry

| Rule | Result |
|------|--------|
| Category required | Dialog stays open if empty; must select a category |
| Amount required | Dialog stays open if empty |
| Amount must be a valid number | Invalid input causes save to be ignored; fix and retry |
| Treasury balance | When adding an **Expense**, the amount cannot exceed current treasury; otherwise: "Insufficient treasury balance. (Current: X.XX)" |

### Edit / Delete

| Rule | Result |
|------|--------|
| System-generated entries | Cannot edit or delete; show "System" badge instead of buttons |
| Error if attempted | "Security: Cannot edit System-Auto records." / "Cannot delete System-Auto records." |

### Close Day

| Rule | Result |
|------|--------|
| Actual cash cannot be negative | "Actual balance cannot be negative. (Strict Treasury Control)" |
| Difference &lt; 0.01 | No adjustment entry created; closing is recorded |
| Difference ≥ 0.01 | An Adjustment entry is added automatically (protected) |

### Consolidate

| Rule | Result |
|------|--------|
| No transactions | "No transactions to consolidate" |
| All transactions | Affects entire system, regardless of date filter |

### General

| Rule | Description |
|------|-------------|
| Treasury = Income − Expense | Current balance is always (total income − total expenses) |
| Date filter | Ledger and KPIs use the selected date range; treasury balance is always full-history |

---

## Messages & Alerts

| Situation | Message |
|-----------|---------|
| Add success | "Saved Successfully" (green) |
| Update success | "Updated Successfully" (green) |
| Delete success | "Deleted Successfully" (green) |
| Add/Update failure (treasury) | "Insufficient treasury balance. (Current: X.XX)" (red) |
| Edit system entry | "Security: Cannot edit System-Auto records." (red) |
| Delete system entry | "Security: Cannot delete System-Auto records." (red) |
| Close day success | "Closed! Diff: X.XX" (green) |
| Close day failure (negative) | "Actual balance cannot be negative. (Strict Treasury Control)" (red) |
| Consolidate success | "Transactions consolidated successfully" (green) |
| Consolidate failure (none) | "No transactions to consolidate" (red) |
| Load error | Error message in snackbar (red) |

---

## Tips

- **Treasury** shows total cash; it turns red if the balance is negative.
- **System entries** (adjustments, consolidated entries) are protected and cannot be edited or deleted.
- **Date** can only be set when creating a new entry; editing keeps the original date.
- **Include Purchases & System** in Analytics lets you see purchase-related categories in the breakdown; off by default for a cleaner view.
- **Consolidate** reduces many transactions to one per (category, type). Use when you want a simplified ledger for reporting.
- **Close Day** is for daily reconciliation; enter the actual cash you have so the system can adjust for differences.
