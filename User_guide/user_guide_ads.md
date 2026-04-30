# Ads Module — User Guide

**System:** Maly - OBS (Online Business System)  
**Module:** Ads / Campaigns & Marketing Analytics  
**Version:** 1.0

---

## Module Purpose

The Ads module manages advertising campaigns, daily spend tracking, and marketing analytics. You create campaigns per platform (Facebook, Google, TikTok, Snapchat), set budgets, record daily spend per campaign, and record ad charges (platform top-ups) as expenses. Analytics shows spend, revenue (from orders linked to campaigns), ROAS, CPA, CPI, campaign delivery rate (delivered vs total orders), platform breakdown, and exportable reports. Charts support bar and line views, and data can be filtered by date range, platform, and campaign.

---

## UI Elements

### Header Area
| Element | Description |
|---------|-------------|
| **Title** | "Ads Manager" / "Campaigns Manager" subtitle |
| **Refresh** | Icon button — reload current tab data |

### Tabs
| Tab | Content |
|-----|---------|
| **Campaigns Manager** | Campaign table, New Campaign, New Charge, pagination |
| **Daily Spend Entry** | Date picker, spend matrix per campaign, Copy Previous Day, Save |
| **Analytics & ROI** | KPIs, Platform Breakdown, charts, Campaign Performance table, filters, PDF export |

### Campaigns Manager Tab
| Element | Description |
|---------|-------------|
| **New Charge** | Button — record platform top-up (expense) |
| **New Campaign** | Button — add campaign |
| **Campaign Table** | Columns: ID, Name, Platform, Budget, Total Spend, Status, Actions |
| **Status** | Switch — Active / Paused per row |
| **Actions per row** | Edit (✎), Delete (🗑) |
| **Pagination** | Previous / Page X of Y / Next — 10 campaigns per page |
| **Budget Exceeded** | Red warning icon when total spend > budget |

### Add/Edit Campaign Dialog
| Element | Description |
|---------|-------------|
| **Name** | Text field — campaign name |
| **Platform** | Dropdown — Facebook, Google, TikTok, Snapchat |
| **Budget** | Text field — budget amount |
| **Active** | Switch — Active or Paused |
| **Save / Cancel** | Buttons |

### New Charge Dialog
| Element | Description |
|---------|-------------|
| **Platform** | Dropdown — Facebook, Google, TikTok, Snapchat |
| **Charge Amount** | Text field — amount (EGP suffix) |
| **Date** | Read-only date with calendar picker |
| **Notes** | Text field — optional |
| **Info** | "This charge will be recorded as an expense and cannot be edited" |
| **Save / Cancel** | Buttons |

### Daily Spend Tab
| Element | Description |
|---------|-------------|
| **Date** | Button — opens date picker (default: today) |
| **Copy Previous Day** | Button — copy yesterday's spend into today's fields |
| **Save** | Button — save daily spend for all campaigns |
| **Spend List** | One row per active campaign — Name, Platform, Spend input (EGP) |

### Analytics Tab — Filter Bar
| Element | Description |
|---------|-------------|
| **Date Range** | Clickable field — opens date range picker (presets + custom) |
| **Platform** | Dropdown — All, Facebook, Google, TikTok, Snapchat |
| **Name** | Dropdown — All or specific campaign |
| **Refresh** | Icon button — reload analytics |
| **Export PDF** | Icon button — generate and open PDF report |

### Analytics Tab — KPI Cards
| Card | Description |
|------|-------------|
| **Total Spend** | Sum of daily spend in range |
| **Revenue** | Sum of order revenue (order_price) from campaign-linked orders |
| **ROAS** | Revenue ÷ Spend |
| **CPA** | Spend ÷ Orders (cost per order) |
| **CPI** | Spend ÷ Items (cost per item) |
| **Campaign Delivery Rate** | % of orders delivered or partially delivered |

### Analytics Tab — Platform Breakdown Table
| Column | Description |
|--------|-------------|
| **Platform** | Facebook, Google, TikTok, Snapchat |
| **Spend** | Total spend in range |
| **Orders** | Order count |
| **Revenue** | Total revenue |
| **ROAS** | Revenue ÷ Spend (green ≥ 2, red &lt; 2) |
| **CPA** | Cost per order |

### Analytics Tab — Charts
| Element | Description |
|---------|-------------|
| **Chart Toggle** | Bar Chart / Line Chart |
| **Charts** | Spend, Revenue, ROAS, CPA — over time (by month if range &gt; 30 days, by day if ≤ 30 days) |

### Analytics Tab — Campaign Performance Table
| Column | Description |
|--------|-------------|
| **Name** | Campaign name with platform icon |
| **Spend** | Total spend |
| **Revenue** | Total revenue |
| **Orders** | Order count |
| **Items** | Item count |
| **ROAS** | Revenue ÷ Spend (green ≥ 2, red &lt; 2) |
| **CPA** | Cost per order |
| **CPI** | Cost per item |
| **Campaign Delivery Rate** | % delivered/partial (green ≥ 50%, orange ≥ 25%, red &lt; 25%) |
| **Sort** | Click column header to sort |

---

## Step-by-Step Workflow

### 1. Add a Campaign

1. Open **Campaigns Manager** tab.
2. Click **New Campaign**.
3. Enter **Name** (required).
4. Select **Platform** (Facebook, Google, TikTok, Snapchat).
5. Enter **Budget** (can be 0).
6. Set **Active** switch (on = Active, off = Paused).
7. Click **Save**.
8. Success: green snackbar; table refreshes.
9. Dialog stays open if Name is empty.

---

### 2. Edit a Campaign

1. In the Campaigns Manager table, click **Edit** (✎).
2. Change **Name**, **Platform**, **Budget**, or **Active** status.
3. Click **Save**.
4. Success: green snackbar; table refreshes.

---

### 3. Toggle Campaign Status (Active/Paused)

1. In the Campaigns Manager table, use the **Status** switch on the row.
2. Switch ON = Active, OFF = Paused.
3. The table refreshes automatically.
4. Paused campaigns do not appear in Daily Spend (only Active campaigns).

---

### 4. Delete a Campaign

1. In the Campaigns Manager table, click **Delete** (🗑).
2. Confirm in the dialog.
3. Success: green snackbar; campaign is removed.
4. **Cannot delete** if the campaign has linked orders or spend data: "Cannot delete: Campaign has linked orders or spend data."

---

### 5. Record a New Charge (Platform Top-Up)

1. In Campaigns Manager, click **New Charge**.
2. Select **Platform** (Facebook, Google, TikTok, Snapchat).
3. Enter **Charge Amount**.
4. Adjust **Date** if needed (default: today).
5. Optionally add **Notes**.
6. Click **Save**.
7. Success: "Ad charge saved successfully"; amount is recorded as an expense (Ads category) and cannot be edited.
8. Empty amount: dialog stays open.

---

### 6. Record Daily Spend

1. Open **Daily Spend Entry** tab.
2. Click the **Date** button to select the day.
3. For each active campaign, enter the **Spend** amount in the input (0 if none).
4. Click **Save**.
5. Success: "Spend Saved"; values are stored for that date.
6. Negative values are treated as 0; campaigns with amount = 0 are not inserted but existing rows are updated.
7. If no valid data: nothing is saved (no snackbar).

---

### 7. Copy Previous Day's Spend

1. In Daily Spend tab, select the desired date.
2. Click **Copy Previous Day**.
3. The system copies yesterday's spend into today's inputs for matching campaigns.
4. If yesterday has no data or all zeros: "No previous day data" (red snackbar).
5. If no matching campaigns: same message.

---

### 8. View Analytics

1. Open **Analytics & ROI** tab.
2. Select **Date Range** (click to open presets: Today, Yesterday, This Week, etc., or custom).
3. Optionally filter by **Platform** or **Campaign**.
4. Click **Refresh** (or change filters) to reload.
5. View KPIs, Platform Breakdown, charts, and Campaign Performance table.
6. Toggle **Bar Chart** / **Line Chart** for chart display.
7. Click column headers in Campaign Performance to sort.

---

### 9. Export Analytics to PDF

1. In Analytics tab, set **Date Range**, **Platform**, and **Campaign** filters.
2. Click **Export PDF** (picture icon).
3. A PDF report is generated and opens automatically.
4. Success: "PDF saved" (green).
5. Failure: error message (red).

---

## Business Rules & Validations

### Add/Edit Campaign

| Rule | Result |
|------|--------|
| Name required | Dialog stays open; no snackbar |
| Budget | Can be 0; no validation |
| Platform | One of Facebook, Google, TikTok, Snapchat |

### Delete Campaign

| Rule | Result |
|------|--------|
| Has linked orders or spend | "Cannot delete: Campaign has linked orders or spend data." |
| No linked data | Campaign deleted |

### New Charge

| Rule | Result |
|------|--------|
| Amount required | Dialog stays open |
| Valid amount | Recorded as Expense (Ads, is_auto=1); cannot be edited |
| Treasury | Must be sufficient (standard expense validation) |

### Daily Spend

| Rule | Result |
|------|--------|
| Negative values | Treated as 0 |
| No campaigns | Empty state shown |
| Only Active campaigns | Shown in spend list |
| Save | Updates existing or inserts new; skips if amount = 0 and no existing row |

### Analytics

| Rule | Description |
|------|-------------|
| Date range | Applied to both spend and orders |
| Orders | Includes active + archived; excludes Cancelled |
| Revenue | Sum of order_price (or total_amount fallback) |
| ROAS | Revenue ÷ Spend; 0 if no spend |
| CPA | Spend ÷ Orders; 0 if no orders |
| CPI | Spend ÷ Items; 0 if no items |
| Campaign Delivery Rate | (Delivered + Partially Delivered) ÷ Total Orders × 100 |

---

## Messages & Alerts

| Situation | Message |
|-----------|---------|
| Campaign saved | "Campaign Saved Successfully" (green) |
| Campaign deleted | "Campaign Deleted" (green) |
| Delete blocked | "Cannot delete: Campaign has linked orders or spend data." (red) |
| Charge saved | "Ad charge saved successfully" (green) |
| Charge failed | Error message (red) |
| Daily spend saved | "Spend Saved" (green) |
| No previous day data | "No previous day data" (red) |
| PDF saved | "PDF saved" (green) |
| Error | Generic error message (red) |

---

## Tips

- **Budget Exceeded**: Total spend vs budget is shown per campaign; red icon when over budget.
- **Daily Spend**: Only Active campaigns appear; Paused campaigns are excluded.
- **Copy Previous Day**: Copies from the day before the selected date.
- **New Charge**: Records a platform top-up as a protected expense; use for ad account refills.
- **Analytics**: Uses both active and archived orders; cancelled orders are excluded.
- **ROAS**: Green when ≥ 2; red when &lt; 2 in tables.
- **Campaign Delivery Rate**: Percentage of orders that are Delivered or Partially Delivered.
- **Charts**: Range &gt; 30 days = grouped by month (e.g., Jan-26); range ≤ 30 days = by day.
- **PDF Export**: Uses the current date range and filters; report includes stats, charts, and platform breakdown.
- **Pagination**: Campaigns Manager shows 10 campaigns per page.
