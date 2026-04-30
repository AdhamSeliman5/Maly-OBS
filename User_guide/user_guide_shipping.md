# Shipping Module — User Guide

**System:** Maly - OBS (Online Business System)  
**Module:** Shipping  
**Version:** 1.0

---

## Module Purpose

The Shipping module manages orders that have been handed over to a courier (shipping company). You select a company, view its active (in-transit) orders, update their delivery status (Delivered, Partial, Returned, Damaged), adjust shipping fees and extra costs, then process collection to finalize them. The module also tracks loans (advances) between you and the courier, generates collection reports, and exports PDF analytics. Net settlement uses **total amount minus shipping fees** (deposit is not used in the calculation).

---

## UI Elements

### Header Area
| Element | Description |
|---------|-------------|
| **Shipping Company Dropdown** | Select the courier to work with |
| **Add Company** | Green + icon — add a new shipping company |
| **Delete Company** | Red trash icon — delete the selected company |
| **Search** | Text field — search orders by order ID, customer name, phone, or governorate |
| **Export PDF** | PDF icon — generate shipping report PDF for the selected company |
| **Refresh** | Refresh icon — reload data |
| **Process Collection (X)** | Button — process selected orders (X = count); disabled when none selected |

### KPI Cards (Header)
| Card | Description |
|------|-------------|
| **Active Orders** | Number of orders in transit |
| **Pending Amount** | Total net value (total − shipping fees) of active orders |
| **Loan** | Outstanding loan balance with the courier |
| **Net Due** | Pending amount minus loan (what the courier owes or you owe) |
| **Delivery Rate** | Percentage of delivered vs returned/damaged |

### Tabs
| Tab | Content |
|-----|---------|
| **Analytics** | Avg delivery days, Delivered/Returned/Damaged counts, Order types pie chart, Avg days by governorate, Governorate performance bars |
| **Active Orders** | Data table with orders, checkboxes, status dropdowns, editable fields |
| **Ledger** | Add Loan button, ledger entries table with pagination, Repay button per unpaid loan |

### Orders Table (Active Orders Tab)
| Column | Description |
|--------|-------------|
| **Checkbox** | Select order for processing (header checkbox = Select All) |
| **Order ID** | Order code |
| **Customer** | Name and governorate |
| **Products** | Product summary |
| **Total** | Order total amount |
| **Ship Cost** | Editable text field — shipping fees |
| **Net** | Calculated: Total − Ship Cost (auto-updates when Ship Cost changes) |
| **Status** | Dropdown: Delivered, Partial, Returned, Damaged |
| **Extra** | Editable when status is Returned or Damaged — extra cost (Shipped on Sender) or compensation |
| **Date** | Delivery date button — opens date picker |

### Ledger Tab
| Element | Description |
|---------|-------------|
| **Add Loan** | Button to add a loan (advance from/to courier) |
| **Ledger Table** | Entries: #, Date, Type, Amount, Description, Repay action |
| **Pagination** | Previous/Next ledger pages |
| **Repay** | Button on unpaid loan rows — open repay dialog |

---

## Step-by-Step Workflow

### 1. Select a Shipping Company

1. Open the Shipping module.
2. Use the **Shipping Company** dropdown to choose a courier.
3. The system loads active orders, ledger, and analytics for that company.

---

### 2. Add or Delete a Shipping Company

**Add**

1. Click the **green +** icon.
2. Enter the company name.
3. Click **Add**.
4. Success: "Success" snackbar.

**Delete**

1. Select the company in the dropdown.
2. Click the **red trash** icon.
3. Confirm in the dialog.
4. Success: "Deleted". If orders are still assigned to the company, you see: **"Cannot delete: X orders still assigned"**.

---

### 3. Search Orders

1. Type in the **Search** field (order ID, customer name, phone, governorate).
2. Press **Enter**.
3. The orders list filters and pagination resets.

---

### 4. Update Order Status and Amounts

1. In the **Active Orders** tab, for each order you can:
   - **Ship Cost**: Edit the shipping fees (Net recalculates automatically).
   - **Status**: Choose Delivered, Partial, Returned, or Damaged.
   - **Extra**: When status is Returned or Damaged, enter extra cost (Shipped on Sender) or compensation amount.
   - **Date**: Click to pick a delivery date.
2. To process, **check the orders** you want to settle.
3. For **Partial** status: when you check the order, a Partial Delivery dialog opens. Enter delivered quantities and unit prices per item, then **Confirm**. New price = sum(delivered × unit price) + shipping.

---

### 5. Process Collection

1. Check the orders to settle.
2. Click **Process Collection (X)**.
3. In the dialog you see:
   - Selected orders count
   - Total Delivered, Total Shipping, Total Extra
   - **Net Amount** (what the courier owes you)
   - **Unified Delivery Date** (optional) — set one date for all selected orders
   - **Cash Received** — amount the courier paid (default = Net Amount)
   - **Report Orders Older Than (Days)** — threshold for "Stale Orders" in the Excel report (default 7)
4. Click **Process**.
5. The system:
   - Updates order statuses (Delivered, Partially Delivered, Returned, Damaged, Shipped on Sender)
   - Records ledger entries (Order Closing, Cash Payout, Loan if there is a difference)
   - Generates a Collection Excel report with Settlement Details, Pending Orders, Stale Orders
   - Opens the Excel file
6. Success: "Processed Successfully!" and "Collection report saved and opened".

---

### 6. Add a Loan

1. Go to the **Ledger** tab.
2. Click **Add Loan**.
3. Enter the amount:
   - **Positive**: Company receives advance from courier (Treasury increases).
   - **Negative**: Company gives advance to courier (Treasury decreases; must have sufficient treasury).
4. Click **Add**.
5. Success: "Loan Added". If treasury is insufficient: **"Insufficient treasury balance. (Current: X)"**.

---

### 7. Repay a Loan

1. In the **Ledger** tab, find an unpaid loan (has **Repay** button).
2. Click **Repay**.
3. Enter the **Repay Amount** (default = original amount).
4. Click **Repay**.
5. Success: "Repaid Successfully".

---

### 8. Export PDF Report

1. Select a shipping company.
2. Click the **PDF** icon in the header.
3. A loading overlay appears: "Generating PDF...".
4. The system creates a PDF in `Desktop\Reports\Shipping\` and opens it.
5. Success: "PDF Report Saved: [path]".

---

## Business Rules & Validations

### Process Collection

| Condition | Result |
|-----------|--------|
| No company selected | Error shown |
| No orders selected | Error: "No orders selected" |
| Cash Received = 0 and Net < 0 | Company pays courier; **Treasury must be sufficient** — otherwise: "Insufficient treasury balance" |
| Cash ≠ Net | Difference becomes a Loan (advance) in the ledger |
| Partial status | Must provide delivered quantities and unit prices in the Partial Delivery dialog |

### Net Calculation (Rule 4 — NO DEPOSIT)

| Status | Net |
|--------|-----|
| **Delivered** | Total − Ship Cost |
| **Partial** | New Price (from partial dialog) − Ship Cost |
| **Returned** (no extra) | 0 |
| **Returned** (with extra = Shipped on Sender) | −Extra |
| **Damaged** | +Extra (compensation) |

### Add Loan

| Amount | Effect |
|--------|--------|
| **Positive** | Company receives advance from courier; Treasury increases |
| **Negative** | Company gives advance to courier; Treasury decreases — **must have sufficient treasury** |

### Delete Company

- **Cannot delete** if any orders are still assigned to the company.
- Error: "Cannot delete: X orders still assigned".

### Partial Delivery

- Enter **Delivered Qty** and **Unit Price** per item (bundles shown as components).
- New Price = sum(delivered × unit price) + shipping.
- Returned items go to quarantine; reserved stock is released.

---

## Messages & Alerts

| Situation | Message |
|-----------|---------|
| Loading | "Loading..." overlay |
| Process success | "Processed Successfully!" (green) |
| Collection report | "Collection report saved and opened" (teal) |
| Process failure | Treasury/localized error (red) |
| Add company success | "Success" (green) |
| Delete company success | "Deleted" (green) |
| Delete company failure | "Cannot delete: X orders still assigned" (red) |
| Add loan success | "Loan Added" (green) |
| Add loan failure | "Insufficient treasury balance. (Current: X)" or backend error (red) |
| Repay success | "Repaid Successfully" (green) |
| Repay failure | Treasury/localized error (red) |
| PDF export success | "PDF Report Saved: [path]" (green) |
| PDF export failure | Error message (red) |
| No company for PDF | "Select Company" (red) |
| Stale days | Must be 1–365 (clamped if out of range) |

---

## Tips

- **Unified Delivery Date**: Use when all selected orders were delivered on the same date.
- **Partial Delivery**: For partial shipments, open the dialog, enter delivered quantities and unit prices per item.
- **Returned + Extra**: When a return has "Shipped on Sender" cost, set status to Returned and fill Extra. The system records it as Shipped on Sender.
- **Damaged + Extra**: Enter compensation amount in Extra for damaged items.
- **Net Due** = Pending − Loan; negative means you owe the courier.
- **Collection Excel**: Includes Settlement Details, Pending Orders, and Stale Orders (orders older than the entered days).
- **Ledger**: Loan (سلفة), Order Closing, Cash Payout, Loan Repayment, Return Cost, Compensation appear as different transaction types.
