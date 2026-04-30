# Inventory Module — User Guide

**System:** Maly - OBS (Online Business System)  
**Module:** Inventory / Global Stock Status  
**Version:** 1.0

---

## Module Purpose

The Inventory module manages your product catalog and stock levels. You can add and edit products with variants, record stock purchases, run stock adjustments (stocktake, damaged, etc.), process quarantine items (valid vs damaged), and view analytics. Restock alerts show items with negative available stock. Bundles are virtual products—their availability is computed from component stock, and you cannot buy or edit them directly.

---

## UI Elements

### Header Area
| Element | Description |
|---------|-------------|
| **Refresh** | Reload inventory data |
| **Adjustment** | Open the Stock Adjustment dialog |
| **New Product** | Open the Add Product dialog |

### Tabs
| Tab | Content |
|-----|---------|
| **Main Inventory** | Products table, search, category filter, restock sidebar |
| **Analytics** | KPI cards, sales performance, date range filter, product filter |
| **Quarantine** | Quarantine table (valid processing), Damaged table (damaged counts/loss) |
| **Stock Movements** | Stock history with type filter, search, pagination |

### Main Inventory Tab
| Element | Description |
|---------|-------------|
| **Search** | Text field — search by product name or ID |
| **Category Filter** | Dropdown — filter by category |
| **Show Archived** | Checkbox — include archived products |
| **Archive Suggestions** | Button — open dialog with products suggested for archiving |
| **Products Table** | Columns: ID, Product Name, Physical, Reserved, Available, Cost, Actions |
| **Pagination** | Previous / Next, page info, total items |
| **Restock Sidebar** | List of items needing restock (current < reserved); total estimated cost |

### Product Row Actions (per product)
| Action | Icon | Description |
|--------|------|-------------|
| **Star** | Star / Star Border | Toggle favorite (show first) |
| **Buy** | Add box | Open Purchase dialog (disabled for bundles) |
| **Edit** | Pencil | Open Edit Product dialog (disabled for bundles) |
| **Archive** | Archive / Unarchive | Archive or unarchive the product |
| **Delete** | Trash | Delete product (disabled for bundles) |

### Analytics Tab
| Element | Description |
|---------|-------------|
| **KPI Cards** | Products count, Physical Stock, Cost, Value; Sold Units, Revenue, Profit, Damage Rate |
| **Date Range Button** | Opens date picker with presets (Today, This Week, This Month, etc.) |
| **Product Filter** | Dropdown — filter analytics by product |
| **Refresh** | Reload analytics |
| **Top Profit** | Horizontal bar list — most profitable products |
| **Most Damaged** | Horizontal bar list — most damaged units |

### Quarantine Tab
| Element | Description |
|---------|-------------|
| **KPI Cards** | Quarantine items count, Quarantine value, Damaged count, Damaged loss |
| **Quarantine Table** | Name, Count, Cost, Process button |
| **Damaged Table** | Name, Count, Loss (read-only) |

### Stock Movements Tab
| Element | Description |
|---------|-------------|
| **Movement Type** | Dropdown — All, Purchase, Adjustment In/Out, Quarantine Valid/Damaged |
| **Search** | Filter movements |
| **Table** | Product Name, Movement Type, Count, Cost, Cost Before/After, Reason, Date |
| **Pagination** | Previous / Next |

---

## Step-by-Step Workflow

### 1. Add a New Product

1. Click **New Product**.
2. Enter **Product Name**.
3. Add variants: enter Variant Name and Price, then click + (or press Enter).
4. Click **Save**.
5. If the name already exists: error snackbar. If variants list is empty: system requires at least one variant.

---

### 2. Edit a Product

1. Click the **Edit** (pencil) icon on a product row.
2. Change Product Name or variant prices.
3. To add a variant: enter Name and Price → click +.
4. To delete a variant: click the delete icon on the row.
5. Click **Save**.
6. Note: Buy, Edit, and Delete are disabled for bundles.

---

### 3. Purchase Stock

1. Click the **Buy** (add box) icon on a product row.
2. Enter **Supplier** (required). You can use suggestion chips if shown.
3. For each variant: enter **Quantity**, **Cost**, and optionally **Paid** (defaults to qty × cost).
4. Click **Confirm**.
5. The system:
   - Adds stock and updates weighted average cost (WAC)
   - Records the purchase expense if Paid > 0 (treasury must be sufficient)
   - Creates Receivable/Payable if expected cost ≠ paid (with supplier)

**Validations:**
- Supplier is required.
- At least one variant must have quantity > 0.
- If Paid > 0 and treasury is insufficient: "Insufficient treasury balance".

---

### 4. Stock Adjustment

1. Click **Adjustment** in the header.
2. Select **Product** and **Variant**.
3. Enter **Quantity Change** (+ to add, − to subtract).
4. Select **Adjustment Type**: Stocktake, Damaged, Gift, Correction, Other.
5. Enter **Reason** (optional; default is the type).
6. Click **Confirm**.

**Rules:**
- **Quantity cannot be 0** — error if zero.
- **Damaged type**: quantity must be negative (e.g. −5 for 5 damaged). Positive quantity shows: "For Damaged adjustment, enter a negative quantity (e.g. -5 for 5 units)".

---

### 5. Process Quarantine

1. Go to the **Quarantine** tab.
2. For an item in the Quarantine table, click **Process**.
3. In the dialog, split items into:
   - **Valid** — returned to regular stock (optionally with refurbishment cost)
   - **Damaged** — counted as damaged
4. Enter **Refurbishment Cost/Unit** if applicable.
5. **Valid + Damaged** must equal the total quantity in quarantine. "Remaining" must be 0.
6. Click **Confirm**.

**Rules:**
- Remaining must be 0 to enable Confirm.
- Refurbishment cost (if > 0) is recorded as an expense; treasury must be sufficient.

---

### 6. Archive / Unarchive Products

**Single product**
1. Click the **Archive** or **Unarchive** icon on the row.
2. Product is archived or unarchived; snackbar shows success.

**Bulk archive**
1. Click **Archive Suggestions**.
2. Review suggested products (0 stock, no orders in last 90 days).
3. Check the ones to archive.
4. Click **Archive All**.

---

### 7. Delete a Product

1. Click the **Delete** (trash) icon on a product row.
2. Confirm in the dialog.
3. Success: product and variants are deleted. If the product has sales history: **"Cannot delete: Product has sales history!"**.

---

### 8. View Stock Movements

1. Go to the **Stock Movements** tab.
2. Optionally select a **Movement Type** and use **Search**.
3. Use pagination to browse history.

---

### 9. Toggle Star (Favorite)

- Click the **Star** icon on a product. Favorites appear first in the list.

---

## Business Rules & Validations

### Add Product
| Rule | Result |
|------|--------|
| Product name required | Error if empty |
| At least one variant | Error if variants list is empty |
| Duplicate name | Error if name already exists |

### Edit Product
- Same rules as Add for name and variants.
- Bundles: Edit is disabled.

### Purchase
| Rule | Result |
|------|--------|
| Supplier required | Error: "Supplier" |
| At least one variant with qty > 0 | Error: "Enter quantity > 0 for at least one variant" |
| Cost < 0 | Error for that variant |
| Paid > 0 and insufficient treasury | "Insufficient treasury balance. (Current: X)" |

### Stock Adjustment
| Rule | Result |
|------|--------|
| Quantity = 0 | "Quantity cannot be zero" |
| Damaged type + positive qty | "For Damaged adjustment, enter a negative quantity..." |
| Variant not selected | Error shown |

### Quarantine Processing
| Rule | Result |
|------|--------|
| Valid + Damaged ≠ Total | Confirm button disabled until Remaining = 0 |
| Refurbishment cost > 0 | Expense recorded; treasury must be sufficient |

### Delete Product
| Rule | Result |
|------|--------|
| Has sales history | "Cannot delete: Product has sales history!" |

### Bundles
- Bundles are virtual: Physical = 0, Reserved = 0.
- **Availability** = minimum (component available ÷ BOM quantity) across components.
- Buy, Edit, Delete are disabled for bundles.

---

## Messages & Alerts

| Situation | Message |
|-----------|---------|
| Load error | "Error: [message]" (red) |
| Add/Edit success | Snackbar confirms save |
| Add duplicate name | "Error" (red) |
| Purchase success | "Success" (green) |
| Purchase insufficient treasury | "Insufficient treasury balance. (Current: X)" (red) |
| Purchase no qty | "Enter quantity > 0 for at least one variant" (red) |
| Stock adjustment success | "Adjustment saved successfully" (green) |
| Stock adjustment qty zero | "Quantity cannot be zero" |
| Stock adjustment damaged positive | "For Damaged adjustment, enter a negative quantity..." (red) |
| Quarantine success | Data reloads; no explicit message in code |
| Quarantine treasury | Treasury error if refurbishment and insufficient funds |
| Archive success | "Product Archived/Unarchived Successfully" (green) |
| Bulk archive success | "Archived X products" (green) |
| Delete success | "Success" (green) |
| Delete blocked | "Cannot delete: Product has sales history!" (red) |
| No archive suggestions | "No suggestions" (blue) |
| Restock sidebar empty | Shows "Success" (green) when no items need restock |

---

## Tips

- **Restock sidebar**: Items with reserved > current (negative available) appear with estimated cost.
- **Bundles**: Restock and purchase work on component variants, not the bundle itself.
- **Quarantine**: Items come from returns; you decide how many go back to stock vs damaged.
- **Refurbishment cost**: Use when repair/cleaning costs apply before putting valid items back.
- **Damaged adjustment**: Use negative quantity (e.g. −5) to mark 5 units as damaged.
- **Archive**: Products with 0 stock and no orders in 90 days are suggested for archiving.
- **Stock Movements**: Use filters and search to trace purchase, adjustment, and quarantine events.
