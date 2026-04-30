# Staff Module — User Guide

**System:** Maly - OBS (Online Business System)  
**Module:** Staff & HR / Employees & Payroll  
**Version:** 1.0

---

## Module Purpose

The Staff module manages employees, payroll, and salary-related actions. You add employees with roles (Manager, Moderator, Staff, Accountant, Marketer), set salary methods (Fixed, Commission-based, Per Order, Per Item, or Percentage of ad spend), and calculate payroll from accrued salary, commissions, bonuses, deductions, and loans. You can process payments (with optional Google Sheet update), add bonuses, deductions, or loans, and view transaction history. Dashboard stats show total staff, due today, month paid, lifetime paid, and carried-over balances. Deleting an employee with an outstanding balance lets you settle first or move the balance to the Debts module.

---

## UI Elements

### Header Area
| Element | Description |
|---------|-------------|
| **Title** | "Staff" / "Employees & Payroll" subtitle |
| **Refresh** | Icon button — reload all data |
| **Add Employee** | Button — open add employee dialog |

### KPI Cards (in Header)
| Card | Description |
|------|-------------|
| **Total Staff** | Count of active employees |
| **Due Today** | Sum of salaries due up to today |
| **Month Paid** | Total paid this month |
| **Lifetime Paid** | Total ever paid |
| **Carried Over** | Pending balance carried from previous periods |

### Tab Bar
| Tab | Content |
|-----|---------|
| **Team Directory** | Employee table with filters and actions |
| **Payroll & Actions** | Payroll calculator, bonuses, deductions, loans, payment processing |
| **History & Logs** | Transaction history with filters |

### Team Tab
| Element | Description |
|---------|-------------|
| **Employee Table** | Columns: Name, Role, Salary Method, Base, Commission, Due Today, Last Paid, Actions |
| **Actions per row** | Edit (✎), Delete (🗑) |
| **Due Today** | Highlighted in amber if > 0 |

### Add/Edit Employee Dialog
| Element | Description |
|---------|-------------|
| **Name** | Text field — employee name |
| **Role** | Dropdown — Manager, Moderator, Staff, Accountant, Marketer |
| **Salary Method** | Dropdown — Fixed, Fixed+Commission%, Fixed+PerOrder, Fixed+PerItem, Percentage |
| **Base** | Text field — base salary amount |
| **Commission** | Text field — % or fixed amount depending on method |
| **Hire Date** | Read-only date (new employees only; date picker button for add) |
| **Last Paid** | Read-only date (new employees only; date picker button for add) |
| **Manager** | Dropdown — shown only for Moderator |
| **Ad Spend** | Text field — shown only for Marketer |
| **Commission Scope** | Dropdown — "Delivered Only" or "All Orders" (Moderator/Manager with commission) |
| **Save / Cancel** | Buttons |

### Payroll Tab — Left Panel
| Element | Description |
|---------|-------------|
| **Select Employee** | Dropdown — pick employee |
| **Period From** | Read-only — last paid date or 1st of month |
| **Period To** | Date field — end of payroll period (date picker) |
| **Overlap Hint** | Note about base salary calculation in overlapping cycles |
| **Ad Spend** | Text field — shown for Marketer; updates commission |
| **Calculate Payroll** | Button — run payroll calculation |
| **Bonus** | Button — add bonus (shown after employee selected) |
| **Deduction** | Button — add deduction (shown after employee selected) |
| **Loan/Advance** | Button — add loan (shown after employee selected) |
| **Pay Amount** | Text field — amount to pay (default: net due) |
| **Update Google Sheet** | Checkbox — mark orders as paid in sheet (Moderator/Manager with orders) |
| **Process Payment** | Button — confirm and pay |

### Payroll Result Card (Right Panel)
| Section | Content |
|---------|---------|
| **Header** | Employee name, role, salary method |
| **Period** | Period From → Period To |
| **Earnings** | Carried Over, Base (Accrued), Commission, Bonus, Previous Balance, Gross |
| **Deductions** | Deductions, Loans; Total Deductions |
| **Net Due** | Prominent total (green if positive, red if negative) |

### Bonus Dialog
| Element | Description |
|---------|-------------|
| **Amount** | Text field — bonus amount |
| **Notes** | Text field — optional reason |
| **Add / Cancel** | Buttons |

### Deduction Dialog
| Element | Description |
|---------|-------------|
| **Amount** | Text field — deduction amount |
| **Notes** | Text field — optional reason |
| **Add / Cancel** | Buttons |

### Loan Dialog
| Element | Description |
|---------|-------------|
| **Notice** | "This will be paid now and deducted from future salary" |
| **Amount** | Text field — loan amount |
| **Notes** | Text field — optional note |
| **Confirm / Cancel** | Buttons |

### Delete Employee Dialog
| Scenario | Content |
|----------|---------|
| **No balance** | Simple confirm: "Are you sure you want to delete this employee?" |
| **Has balance** | Message: "{name} has an outstanding balance of {amount}. Do you want to settle first or move it to Debts?" — Options: Settle First, Move to Debts, Cancel |

### History Tab
| Element | Description |
|---------|-------------|
| **Role** | Dropdown — filter by role (All, Manager, Moderator, etc.) |
| **Name** | Dropdown — filter by employee (All or specific) |
| **Refresh** | Icon button — reload history |
| **History Table** | Columns: Date, Name, Role, Type, Amount, Notes |

---

## Step-by-Step Workflow

### 1. Add an Employee

1. Click **Add Employee**.
2. Enter **Name**, **Role**, **Salary Method**, **Base**, **Commission** (if applicable).
3. Set **Hire Date** and **Last Paid** (use date pickers; Hire Date must be ≤ Last Paid Date).
4. For **Moderator**: select **Manager**.
5. For **Marketer**: enter **Ad Spend** if salary method is Percentage.
6. For **Moderator/Manager** with commission: choose **Commission Scope** (Delivered Only or All Orders).
7. Click **Save**.
8. Success: green snackbar; table refreshes.

---

### 2. Edit an Employee

1. In the Team table, click **Edit** (✎) on the row.
2. Update any fields (Name, Role, Salary Method, Base, Commission, Manager, Ad Spend, Commission Scope).
3. Hire Date and Last Paid cannot be changed when editing.
4. Click **Save**.
5. Success: green snackbar; table refreshes.

---

### 3. Delete an Employee

1. In the Team table, click **Delete** (🗑).
2. **If no outstanding balance:** Confirm in the dialog. Employee is removed (soft or hard delete).
3. **If outstanding balance:** Choose:
   - **Settle First** — Opens Payroll tab and selects the employee so you can process payment.
   - **Move to Debts** — Moves balance to Debts module and deletes the employee.
4. Success: green snackbar (or message about balance moved to Debts).

---

### 4. Calculate Payroll

1. Open **Payroll & Actions** tab.
2. Select **Employee** from the dropdown.
3. **Period From** shows automatically (last paid date or 1st of month).
4. Adjust **Period To** if needed (default: today).
5. For **Marketer**: enter **Ad Spend** if not already set.
6. Click **Calculate Payroll**.
7. The right panel shows earnings, deductions, and **Net Due**.

---

### 5. Add Bonus

1. In Payroll tab, select an employee and click **Calculate Payroll** (optional).
2. Click **Bonus**.
3. Enter **Amount** and optionally **Notes**.
4. Click **Add**.
5. Success: green snackbar. Recalculate payroll to see the bonus in the breakdown.

---

### 6. Add Deduction

1. In Payroll tab, select an employee and click **Calculate Payroll** (optional).
2. Click **Deduction**.
3. Enter **Amount** and optionally **Notes**.
4. Click **Add**.
5. Success: green snackbar. Recalculate to see the deduction in the breakdown.

---

### 7. Add Loan/Advance

1. In Payroll tab, select an employee and click **Calculate Payroll** (optional).
2. Click **Loan/Advance**.
3. Enter **Amount** and optionally **Notes**.
4. Click **Confirm**.
5. The amount is paid from treasury immediately and deducted from future salary.
6. Success: green snackbar; treasury must be sufficient.
7. Recalculate payroll to see the loan in deductions.

---

### 8. Process Payment

1. Calculate payroll for the employee.
2. Review **Net Due** in the result card.
3. Enter **Pay Amount** (default: full net due; can pay partial — remainder is carried over).
4. For **Moderator/Manager** with commission orders: check **Update Google Sheet** to mark orders as paid in the sheet (if configured).
5. Click **Process Payment**.
6. Success: green snackbar; payslip PDF opens (saved to Desktop/Payslib/employee_name/); payroll section resets.
7. If treasury is insufficient: error snackbar.

---

### 9. View History

1. Open **History & Logs** tab.
2. Filter by **Role** and **Employee**.
3. Click **Refresh** if needed.
4. Table shows Date, Name, Role, Type (e.g., Salary Payment, Loan), Amount, Notes.

---

## Business Rules & Validations

### Add/Edit Employee

| Rule | Result |
|------|--------|
| Name required | "Employee name is required!" |
| Role required | "Role is required!" |
| Base salary ≥ 0 | "Base salary cannot be negative!" |
| Commission value ≥ 0 | "Commission value cannot be negative!" |
| Moderator must have Manager | "Moderator must have a Manager assigned!" |
| Duplicate name + role | "Employee '{name}' already exists with role '{role}'!" |
| Hire Date ≤ Last Paid (new only) | "Hire Date must be less than or equal to Last Paid Date!" |

### Delete Employee

| Rule | Result |
|------|--------|
| Employee not found | "Employee not found!" |
| Outstanding balance | Dialog offers Settle First or Move to Debts |
| Move to Debts fails | "Cannot delete! Outstanding balance exists and could not be moved to Debts" |

### Payroll

| Rule | Description |
|------|-------------|
| Period | From last_paid_date+1 to Period To |
| Commission scope | Delivered Only or All Orders (Moderator/Manager) |
| Overlapping cycles | Base salary prorated by days in start month |
| Carried over | Positive remainder from previous underpayment |
| Loans | Negative balance; deducted from gross |

### Payment

| Rule | Result |
|------|--------|
| Pay amount > 0 | Required to process |
| Treasury sufficient | "Insufficient treasury balance. (Current: X.XX)" if not enough |
| Partial payment | Remainder carried over to next period |
| Overpayment | Negative balance (advance) |
| Google Sheet | Optional; marks orders as paid if Moderator/Manager and orders exist |

### Loan

| Rule | Result |
|------|--------|
| Treasury sufficient | "Insufficient treasury balance" if not enough |
| Amount > 0 | Required |

### Bonus/Deduction

| Rule | Description |
|------|-------------|
| Amount | Required (no explicit error; dialog stays open if empty) |
| Applied | Marked applied when payment is processed |

---

## Messages & Alerts

| Situation | Message |
|-----------|---------|
| Save employee success | "Saved Successfully" (green) |
| Delete success (no balance) | "Deleted Successfully" (green) |
| Delete success (with balance) | "Deleted. Outstanding balance moved to Debts: X" (green) |
| Payment success | "Payment Processed Successfully" (green) |
| Bonus added | "Added Successfully" (green) |
| Deduction added | "Added Successfully" (green) |
| Loan recorded | "Loan Recorded" (green) |
| No payroll calculated | "No payroll calculated!" (red) |
| Employee not found | "Employee not found" (red) |
| Treasury insufficient | "Insufficient treasury balance. (Current: X.XX)" (red) |
| Validation errors | As in Business Rules table (red) |

---

## Tips

- **Due Today** in the Team table shows what is owed up to today (accrued salary, commission, bonus minus deduction, plus carried over).
- **Commission Scope** affects whether commission is calculated on delivered orders only or all orders.
- **Moderator** commission is based on orders where moderator_name matches; **Manager** commission is from moderators' orders (those under the manager).
- **Marketer** with Percentage method: commission = Ad Spend × (Commission % / 100).
- **Carried Over** = positive remainder when you pay less than net due; it appears in next payroll.
- **Loan** is paid from treasury immediately; it reduces employee balance (negative) and is shown in deductions.
- **Update Google Sheet** syncs "حساب الموديرتور" / moderator settlement status when payment includes commission orders.
- **Payslip PDF** is saved to Desktop/Payslib/[Employee Name]/ and opens after a successful payment.
- **Soft delete**: Employees with transaction history are marked inactive; others are hard-deleted.
