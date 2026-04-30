# Preparation Module — User Guide

**System:** Maly - OBS (Online Business System)  
**Module:** Preparation Hub  
**Version:** 1.0

---

## Module Purpose

The Preparation module manages orders that are ready to be picked and packed but have not yet been handed over to a shipping company. You can mark orders as **prepared**, see which ones have enough stock, defer or cancel orders, modify bundles, and export prepared orders to Excel or ship them to a courier. Deferred orders appear in a separate tab and "wake up" a configurable number of days before their due date.

---

## UI Elements

### Header Area
| Element | Description |
|---------|-------------|
| **Stat Badges** | Total, Ready, Prepared, Shortage, Exchange/Missing counts |
| **Export Options** | Button to export prepared orders (disabled when no prepared orders) |
| **Sync** | Cloud icon — sync orders from Google Sheets |
| **Settings** | Gear icon — open Preparation Settings |
| **Search** | Text field — search by order code, customer name, or products |
| **Filter by Governorate** | Location icon — filter by one or more governorates |
| **Filter by Type** | Filter icon — filter by All, Ready, Exchange, Missing, or Shortage only |

### Orders Tab (Main Area)
| Element | Description |
|---------|-------------|
| **Orders List** | Paginated cards showing each order with order ID, customer name, products, governorate, status badge, and action buttons |
| **Pagination** | Previous / Next page buttons and page counter |
| **Right Panel** | Auto-Prepare Options, Unmark All, and Picking List (grouped quantities) |

### Order Card (Per Order)
| Element | Description |
|---------|-------------|
| **Star** | Toggle urgent priority (filled = urgent, outlined = normal) |
| **Order ID & Type Badge** | e.g. `#123`, New / Exchange / Missing |
| **Stock Indicator** | e.g. `3/5` — items in stock / total items needed |
| **Customer Name** | Customer name |
| **Products** | Product line summary |
| **Governorate Badge** | Governorate name |
| **Status Badge** | Ready / Shortage / Packed / Unknown |
| **Prepare / Undo Button** | Mark as prepared or unmark |
| **More Menu (⋮)** | View Details, Show Shortage, Modify Bundle, Defer, Cancel |

### Deferred Tab
| Element | Description |
|---------|-------------|
| **Deferred List** | Orders scheduled for later, with countdown (days left / Due Today / Overdue) and due date |
| **Info Banner** | Explains deferred orders behavior |

### Dialogs
| Dialog | Purpose |
|--------|---------|
| **Filter by Governorate** | Checkboxes to select governorates; Clear All, Cancel, Confirm |
| **Filter by Type** | Options: All Orders, Ready to Prepare, Exchange, Missing Items, Shortage Only |
| **Preparation Settings** | Set "Days before due date" for deferred wake-up |
| **Confirm Cancellation** | Yes / No to cancel an order |
| **Defer Order** | Date picker to select due date |
| **Shortage Details** | Product name, needed, available, shortage per line |
| **Order Details** | Customer, phone, address, governorate, total, notes |
| **Unbox Bundle** | Adjust component quantities, remove items, confirm unbox |
| **Auto-Prepare Options** | Current Page or All Pending |
| **Unmark All Confirm** | Yes / No to unmark all prepared orders |
| **Export Options** | Courier dropdown, Ship Date picker; Excel Only or Ship & Export |

---

## Step-by-Step Workflow

### 1. View and Filter Orders

1. Open the Preparation module.
2. Use **Search** to find orders by code, name, phone, or products.
3. Click **Filter by Governorate** to limit by governorate(s) → select → **Confirm**.
4. Click **Filter by Type** to show All, Ready, Exchange, Missing, or Shortage only.
5. Use pagination if there are many orders.

---

### 2. Mark an Order as Prepared

**Single order**

1. Ensure the order shows **Ready** (stock indicator green or sufficient).
2. Click **Prepare** on the order card.
3. The system checks stock. If OK, the order is marked prepared and the list refreshes.
4. If stock is insufficient, you see: **"Insufficient stock for: [product name]"**.

**Bulk (auto-prepare)**

1. Click **Auto-Prepare Options** in the right panel.
2. Choose **Current Page** (this page only) or **All Pending**.
3. The system prepares all eligible orders.
4. A snackbar shows: **"Auto-prepared orders: [count]"**.

---

### 3. Unmark a Prepared Order

1. Click **Undo** on a prepared order card.
2. The order returns to pending (not prepared).

**Unmark all**

1. Click **Unmark All** in the right panel.
2. Confirm in the dialog.
3. All prepared orders are unmarked.

---

### 4. Defer an Order

1. Open the **⋮** menu on the order.
2. Choose **Defer Order**.
3. Select a due date in the date picker.
4. Click **Defer**.
5. The order moves to the **Deferred** tab and its stock reservation is released.

---

### 5. Cancel an Order

1. Open the **⋮** menu on the order.
2. Choose **Cancel Order**.
3. Confirm in the dialog.
4. The order is cancelled, its status updates in the system and Google Sheets, and its stock reservation is released.

---

### 6. Modify a Bundle (Unbox)

1. Open the **⋮** menu on an order that has bundles.
2. Choose **Modify Bundle**.
3. Adjust quantities with +/- or type in the field.
4. Click the delete icon to remove a component (sets quantity to 0).
5. **At least one component must remain** — otherwise you get: **"Keep at least one component"**.
6. Click **Confirm Unbox**.
7. The bundle is replaced by the chosen components and quantities.

---

### 7. Export / Ship Prepared Orders

1. Ensure at least one order is marked prepared.
2. Click **Export Options (X)** where X is the count of prepared orders.
3. Select **Courier** (shipping company).
4. Pick **Ship Date**.
5. Choose:
   - **Excel Only** — generate Excel file only (no status change).
   - **Ship & Export** — update orders to Shipped, assign courier and ship date, deduct stock, export Excel, and sync to Google Sheets.
6. If using **Ship & Export**, courier is required; otherwise you see an error.

---

### 8. Sync Orders from Google Sheets

1. Click the **Cloud Sync** icon in the header.
2. A loading overlay appears.
3. When done, a snackbar shows success or error and the list refreshes.

---

### 9. Adjust Deferred Orders Settings

1. Click **Settings** in the header.
2. Set **Days before due date** (e.g. 5).
3. Click **Save**.
4. Deferred orders appear in the main Orders tab when their due date is within that many days.

---

## Business Rules & Validations

### Required Conditions to Prepare

- Order must be **Ready** (stock status = available).
- Order must have **no unknown items** (all items mapped to variants).
- Current stock (minus reserved) must be sufficient for the order quantity.

### Prepare Validation

| Condition | Result |
|-----------|--------|
| Insufficient stock | Error: **"Insufficient stock for: [product name]"** |
| Order has unknown items | Prepare button disabled |
| Order not Ready (shortage) | Prepare button disabled |

### Defer / Cancel

- Defer and Cancel release reserved stock immediately.
- Cancelled orders are excluded from the preparation list.
- Cancellation syncs status to Google Sheets (e.g. ملغى).

### Bundle Explosion (Unbox)

- At least one component must have quantity > 0; otherwise: **"Keep at least one component"**.
- After unbox, the order is marked as manually modified so sync does not overwrite it.

### Export

| Action | Requirements |
|--------|--------------|
| Excel Only | No courier required |
| Ship & Export | **Courier required** — error if not selected |

### Order Types

- **New** (جديد) — standard new order.
- **Exchange** (استبدال) — exchange order.
- **Missing Items** (ارسال نواقص / نواقص) — missing items order.

### Excluded Orders

Orders with status Cancelled, Delivered, Returned (and Arabic equivalents) do not appear in the preparation list.

---

## Messages & Alerts

| Situation | Message |
|-----------|---------|
| Loading | "Loading..." overlay |
| Prepare success | "Success" (green) |
| Prepare failure | "Insufficient stock for: [name]" or exception text (red) |
| Bulk prepare | "Auto-prepared orders: [count]" (green) |
| Unmark all | "Unmarked [count] orders" (green) |
| Cancel success | "Order cancelled" (green) |
| Defer success | "Order deferred to [date]" (green) |
| Defer/Cancel failure | Exception message (red) |
| Bundle unbox success | "Bundle exploded successfully" (green) |
| Bundle validation | "Keep at least one component" (yellow) |
| No bundles | "No bundles in this order" (yellow) |
| Export success | "Exported [count] orders" (green) |
| Export failure | Exception message (red) |
| Sync | Success or error message (blue / red) |
| Save settings | "Success" (green) |
| Load error | "Error: [message]" (red) |

---

## Tips

- Use the **Star** to mark urgent orders; they appear first in the list.
- **Stock indicator** (e.g. 3/5) shows how many item types are in stock versus total.
- For shortage, use **Show Shortage** to see exactly what is missing.
- **Deferred** tab shows orders scheduled for later with countdown (green = OK, yellow = soon, red = due/overdue).
- **Picking List** aggregates quantities across all prepared orders for efficient picking.
- Export **Excel Only** when you only need a file without changing order status.
- Use **Ship & Export** when you hand over to a courier and want status updated in the system and Sheets.
