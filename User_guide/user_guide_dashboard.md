# Dashboard Module — User Guide

**System:** Maly - OBS (Online Business System)  
**Module:** Dashboard  
**Version:** 1.0

---

## Module Purpose

The Dashboard is the main analytics screen in Maly - OBS. It shows your business performance at a glance using key numbers (KPIs), charts, and lists. You can choose a date range to see sales, deliveries, shipping, returns, top products, top governorates, customer insights, and campaign performance. The dashboard also lets you **sync orders from Google Sheets** so your data stays up to date.

---

## UI Elements

### Header Area
| Element | Description |
|--------|-------------|
| **Date Range Button** | Shows the current date range (e.g., `2025-01-01 → 2025-03-02`). Click to change the range. |
| **Sync Orders** | Button to fetch the latest orders from Google Sheets. |

### KPI Cards (Top Section)
| KPI Card | What It Shows |
|----------|----------------|
| **Total Revenue** | Order count and total net sales (EGP) in the selected period. |
| **Delivered** | Number of delivered orders and total value (EGP). |
| **To Prepare** | Orders waiting to be prepared and their total value. Click to open the Preparation module. |
| **In Shipping** | Orders currently in transit and their total value. Click to open the Shipping module. |
| **Returned** | Number of returned/cancelled orders and total cost of returns. |
| **Active Clients** | Unique customers with orders in the period. |

### Quick Stats Row
| Stat | Description |
|------|-------------|
| **Avg Shipping Time** | Days from order date to shipping date (lower is better). |
| **Avg Order Value** | Average order value in EGP. |
| **Returning Customers** | Percentage of repeat customers. |
| **MoM Growth** | Month-over-month revenue growth. |

### Charts & Lists
| Section | Content |
|---------|---------|
| **Sales Trend** | Bar chart of revenue over time (daily or monthly). |
| **Top Sellers** | Top 5 products by quantity sold. |
| **Status** | Pie chart: Delivered vs Cancelled. |
| **Moderators** | Orders handled per moderator. |
| **Order Types** | Grouped bar chart of Exchange, Missing, etc. by month. |
| **Shipping Performance** | Delivered vs Returned by shipping company. |
| **Avg Delivery Days** | Average days from ship to delivery per company. |

### More Analytics (Expandable)
Click **More Analytics** to show:

| Section | Content |
|---------|---------|
| **Top Governorates** | Top 5 governorates by order count. |
| **Highest Return Rates** | Governorates with highest return rates. |
| **Top Months** | Best-performing months by revenue. |
| **Best Days of Week** | Days with most orders. |
| **Customer Value Distribution** | How many customers fall into each spend bucket (0–500 EGP, 500–1K, etc.). |
| **Top VIP Customers** | Top 10 customers by total spend. |
| **Most Returned Products** | Products with most returns. |
| **Campaign Performance** | Ad campaigns with Spend, Revenue, ROAS, and CPO. |

---

## Step-by-Step Workflow

### 1. View the Dashboard

When you open the Dashboard:

1. The system loads **KPIs** first, then **charts**.
2. Default date range is **start of year → today**, unless you previously set another range.
3. KPI cards and charts appear as data is ready.

---

### 2. Change the Date Range

1. Click the **Date Range** button (e.g., `2025-01-01 → 2025-03-02`).
2. A date-picker dialog opens.
3. Choose **Start Date** and **End Date**.
4. Click **Apply** (or equivalent confirm action).
5. The system reloads all dashboard data for the new range and keeps your choice for the session.

---

### 3. Sync Orders from Google Sheets

1. Click **Sync Orders**.
2. A full-screen overlay appears with “Syncing with Google Sheets...”.
3. When done, you will see:
   - **Success:** “Sync Complete: [summary]” and a refresh of the dashboard.
   - **Failure:** “Sync Failed: [error message]”.
4. The Sync button is disabled during the sync.

---

### 4. Navigate to Preparation or Shipping

1. Click the **To Prepare** card → opens the Preparation module.
2. Click the **In Shipping** card → opens the Shipping module.

---

### 5. View More Analytics

1. Click **More Analytics**.
2. Additional sections appear: Top Governorates, Governorate Returns, Top Months, Best Days, Customer Value Distribution, VIP Customers, Returned Products, Campaign Performance.
3. Click again to collapse.

---

## Business Rules & Validations

### Date Range
- You must pick a valid **start** and **end** date.
- End date cannot be before start date (enforced in the date picker).
- The range is stored in your session and reused until you change it.

### KPI Definitions (What the Numbers Represent)
| KPI | Rule |
|-----|------|
| **Total Revenue** | Sum of item values (order_price) for non-cancelled orders. |
| **Delivered** | Orders with status Delivered / Partially Delivered; shows count and total value. |
| **To Prepare** | Orders without a shipping company assigned and not finalized. |
| **In Shipping** | Orders with a shipping company assigned and not yet delivered/returned/cancelled. |
| **Returned** | Includes Returned, Shipped on Sender, and Cancelled. **Returned Money** = Shipped on Sender extra cost + refurbishment costs from Quarantine. |

### Data Scope
- Data comes from **Orders** and **Archived Orders** within the selected date range.
- Sales and most charts use **non-cancelled** orders.
- Governorate return rates are only shown if a governorate has **at least 5 orders**.

### No Special User Input
- The Dashboard is read-only: you do not enter or edit data.
- No required fields; everything is driven by the selected date range and sync.

---

## Messages & Alerts

| Situation | Message |
|-----------|---------|
| Loading | “Loading...” overlay or similar. |
| No data | “No Data Available” in charts or lists. |
| Sync success | “✅ Sync Complete: [summary]” (green snackbar). |
| Sync failure | “❌ Sync Failed: [error message]” (red snackbar). |
| General error | “Error: [message]” (red snackbar). |

---

## Tips

- Use a shorter date range (e.g., 1–2 weeks) for detailed daily trends.
- Use a longer range (e.g., 3–6 months) for monthly trends and broader analytics.
- Sync regularly to keep the Dashboard aligned with Google Sheets.
- Click “More Analytics” for deeper insights on geography, time, customers, and campaigns.
