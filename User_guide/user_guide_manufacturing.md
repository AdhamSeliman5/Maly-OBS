# Manufacturing Module — User Guide

**System:** Maly - OBS (Online Business System)  
**Module:** Manufacturing / Product Bundles & Kits  
**Version:** 1.0

---

## Module Purpose

The Manufacturing module manages product bundles (kits) made from standard product components. You create bundles by defining a Bill of Materials (BOM), set a selling price, and see virtual stock (how many you can assemble from current component stock). The module shows which component limits each bundle, profit margins, top sellers, low-stock alerts, and component usage across bundles. Bundles have no physical stock—they are assembled from components when orders are prepared or shipped.

---

## UI Elements

### Header Area
| Element | Description |
|---------|-------------|
| **Header Stats** | Total Bundles, Active, Low Stock counts |
| **Refresh** | (via loading bar on data reload) |

### Tabs
| Tab | Content |
|-----|---------|
| **Repository** | Bundle cards grid, search, filters, New Bundle button |
| **Studio** | Bundle creation/editing form, BOM builder |
| **Analytics** | KPI cards, Top Selling, Low Stock, Most Profitable, Component Usage |

### Repository Tab
| Element | Description |
|---------|-------------|
| **Search** | Text field — search by bundle name |
| **Filter Chips** | All, Active, Low Stock, Out of Stock |
| **Show Inactive** | Checkbox — include inactive bundles |
| **New Bundle** | Button — open Studio and create new bundle |
| **Bundle Cards** | Grid of cards — each shows name, item count, stock, cost, price, margin, limiter, ⋮ menu |
| **Empty State** | Shown when no bundles; "Create your first bundle" button |

### Bundle Card (⋮ menu)
| Option | Description |
|--------|-------------|
| **View Details** | Show component list with availability and virtual stock |
| **Edit** | Open Studio to edit (only if no order history) |
| **Delete** | Delete bundle (only if no order history) |
| **Duplicate** | Create a copy with a new name |
| **Activate / Deactivate** | Toggle active status |

### Studio Tab (Creator)
| Element | Description |
|---------|-------------|
| **Bundle Name** | Text field — bundle name |
| **Selling Price** | Text field — selling price |
| **Select Component** | Read-only field — opens component picker when clicked |
| **Pick Component** | Search icon — open component picker |
| **Qty** | Text field — quantity per component (default 1) |
| **Add Component** | Green + icon — add selected component to BOM |
| **BOM List** | List of components with cost breakdown; remove (red ×) per item |
| **Total Cost** | Display — sum of component costs |
| **Profit Margin** | Display — calculated from selling price vs total cost |
| **Cancel** | Reset studio and return to Repository |
| **Save** | Save bundle (create or update) |

### Component Picker Dialog
| Element | Description |
|---------|-------------|
| **Search** | Text field — filter components by name |
| **Results List** | Clickable items — name, availability, cost; click to select |

### Analytics Tab
| Element | Description |
|---------|-------------|
| **KPI Cards** | Total Bundles, Active, Low Stock, Avg Margin |
| **Top Selling Bundles** | List — bundles by units sold |
| **Low Stock Alert** | List — bundles with virtual stock < 5 |
| **Most Profitable** | List — bundles by profit margin |
| **Component Usage** | List — components and how many bundles use them |

---

## Step-by-Step Workflow

### 1. Create a New Bundle

1. Click **New Bundle** or go to the **Studio** tab.
2. Enter **Bundle Name**.
3. Enter **Selling Price**.
4. Add components:
   - Click the **Select Component** field or **Pick Component** icon.
   - Search or scroll in the picker, then click a component.
   - Set **Qty** (default 1).
   - Click **Add Component** (green +).
5. Repeat step 4 for all components.
6. Review **Total Cost** and **Profit Margin**.
7. Click **Save**.
8. Success: snackbar confirms; you return to the Repository tab with the new bundle.

---

### 2. Edit a Bundle

1. Open the ⋮ menu on a bundle card.
2. Click **Edit**.
3. The Studio tab opens with the current name, price, and BOM.
4. Change Name, Selling Price, or components (add/remove/adjust qty).
5. Click **Save**.
6. If the bundle has order history: **"Cannot edit: Bundle has order history"** (Edit is hidden).

---

### 3. Add Components in Studio

1. Click **Select Component** or the search icon.
2. In the picker, type to search or scroll the list.
3. Click a component to select it.
4. Enter **Qty** (e.g. 2).
5. Click the green **Add Component** icon.
6. The component appears in the BOM list. If it was already in the BOM, its quantity is increased.
7. **Total Cost** and **Profit Margin** update automatically.

---

### 4. Remove a Component from BOM

1. In the BOM list, click the red **Remove** (×) icon next to the component.
2. The component is removed and cost/margin recalculate.

---

### 5. Duplicate a Bundle

1. Open the ⋮ menu on a bundle card.
2. Click **Duplicate**.
3. Enter **New Bundle Name** in the dialog (default: "[Name] (Copy)").
4. Click **Duplicate**.
5. Success: a new bundle is created with the same BOM and prices.

---

### 6. Activate or Deactivate a Bundle

1. Open the ⋮ menu on a bundle card.
2. Click **Activate** or **Deactivate**.
3. Success: snackbar confirms; the bundle’s status toggles.
4. Inactive bundles appear dimmed and can be filtered via **Show Inactive**.

---

### 7. Delete a Bundle

1. Open the ⋮ menu on a bundle card.
2. Click **Delete**.
3. Confirm in the dialog.
4. Success: bundle is removed.
5. If it has order history: **"Cannot delete: Bundle has order history"** (Delete is hidden).

---

### 8. View Bundle Details

1. Open the ⋮ menu on a bundle card.
2. Click **View Details**.
3. A dialog shows each component with availability and which one limits the bundle.
4. **Virtual Stock** is shown at the bottom.

---

### 9. Search and Filter Bundles

1. **Search**: Type in the search field — filters by name.
2. **Filter chips**: Click All, Active, Low Stock, or Out of Stock.
3. **Show Inactive**: Check to include inactive bundles.

---

## Business Rules & Validations

### Create / Update Bundle

| Rule | Result |
|------|--------|
| Bundle name required | "Bundle name is required" |
| At least 1 component | "Bundle must have at least 1 component" |
| Duplicate name | "Bundle name already exists" |
| Invalid selling price | "Invalid selling price" |

### Add Component

| Rule | Result |
|------|--------|
| No component selected | "Please select a component first" (yellow) |
| Quantity ≤ 0 | "Quantity must be greater than 0" |
| Component already in BOM | Quantity is increased (no error) |

### Edit Bundle

| Rule | Result |
|------|--------|
| Has order history | Edit and Delete are hidden; if called: "Cannot edit: Bundle has order history" |

### Delete Bundle

| Rule | Result |
|------|--------|
| Has order history | Delete hidden; if called: "Cannot delete: Bundle has order history" |

### Duplicate Bundle

| Rule | Result |
|------|--------|
| New name required | "New name is required" |
| Duplicate name | "Name already exists" |

### Virtual Stock

- **Virtual Stock** = minimum (component available ÷ BOM quantity) across all components.
- The **Limiter** is the component with the lowest ratio.
- Bundles have no physical stock; stock is held in components.

### Cost & Margin

- **Total Cost** = sum of (component cost × quantity) for each BOM item.
- **Profit Margin** = ((Selling Price − Total Cost) ÷ Selling Price) × 100.

---

## Messages & Alerts

| Situation | Message |
|-----------|---------|
| Save success | "Bundle created successfully!" / "Bundle updated successfully!" (green) |
| Save failure | "Bundle name is required", "Bundle must have at least 1 component", "Bundle name already exists", "Invalid selling price" (red) |
| Add component | "Component added" / "Quantity updated" (no snackbar; UI updates) |
| Add component failure | "Please select a component first" (yellow), "Quantity must be greater than 0" (red) |
| Edit/Delete blocked | "Cannot edit: Bundle has order history" / "Cannot delete: Bundle has order history" (red) |
| Delete success | "Bundle deleted successfully!" (green) |
| Duplicate success | "Bundle duplicated successfully!" (green) |
| Duplicate failure | "New name is required", "Name already exists" (red) |
| Toggle status success | "Status updated!" (green) |
| Load error | Error message in snackbar (red) |

---

## Tips

- **Virtual Stock**: Shows how many bundles you can assemble from current component stock.
- **Limiter**: The component with the lowest available ÷ quantity is the bottleneck.
- **Order history**: Once a bundle has orders, Edit and Delete are disabled to protect history.
- **Duplicate**: Use to create similar bundles without re-entering the BOM.
- **Inactive**: Deactivate bundles you no longer sell; they stay in the system but can be excluded from views.
- **Component picker**: Standard (non-Bundle) products appear as components; bundles are excluded.
- **Cost recalculation**: Bundle costs are recalculated from component costs when data is loaded.
