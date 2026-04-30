# Settings Module — User Guide

**System:** Maly - OBS (Online Business System)  
**Module:** Settings / System Configuration  
**Version:** 1.0

---

## Module Purpose

The Settings module manages system configuration, user accounts, Google Sheets integration, backups, and subscription. You add and edit users with roles (Manager, Staff) and module permissions, connect a Google account, link or create a Google Sheet for orders sync, push system data or pull orders, run smart archiving, create backups, export/import data, and perform maintenance actions (clear transactions, delete orders, replace table data, factory reset). Auto-backup can be scheduled. The Subscription tab shows license status and allows activation. Access to Settings is restricted to Manager role; non-Managers see an access-denied message.

---

## UI Elements

### Access Control
| Condition | Result |
|-----------|--------|
| **Manager** | Full access to all tabs |
| **Non-Manager** | "Access Denied" — Manager only |
| **Subscription tab only** | Can be shown for non-Managers in license-only mode |

### Tab Navigation
| Tab | Content |
|-----|---------|
| **Users & Roles** | User cards, Add User |
| **Cloud** | Google account, Sheet config, Sync/Archive actions |
| **Backup** | Manual backup, Export/Import, Auto-backup, Danger Zone |
| **Subscription** | License status, plan, expiry, HWID, activation |

### Users Tab
| Element | Description |
|---------|-------------|
| **Add User** | Button — open add user dialog |
| **User Cards** | Name, @username, Role badge, Active/Locked badge, Allowed Modules chips, Edit, Delete |
| **Edit** | Icon — open edit user dialog |
| **Delete** | Icon — confirm and deactivate user |

### Add/Edit User Dialog
| Element | Description |
|---------|-------------|
| **Name** | Text field — display name |
| **Username** | Text field — login username |
| **Password** | Text field — new password (required for add; optional for edit — leave empty to keep current) |
| **Role** | Dropdown — Manager or Staff |
| **Active Account** | Switch — on = Active, off = Locked |
| **Permissions** | Checkboxes — Dashboard, Preparation, Inventory, Manufacturing, Expenses, Shipping, Debts, Ads, Staff, Reports, Settings |
| **Save / Cancel** | Buttons |

### Cloud Tab — Google Account Card
| Element | Description |
|---------|-------------|
| **Status** | Connected / Not Connected |
| **Connect Account** | Button — open OAuth flow (disabled when connected) |
| **Disconnect** | Button — remove token (enabled when connected) |

### Cloud Tab — Sheet Configuration Card
| Element | Description |
|---------|-------------|
| **Status** | Linked ID or "No Sheet" |
| **Google Sheet URL / ID** | Text field — paste URL or ID; Copy button |
| **Create Sheet** | Button — create new sheet and link (disabled when already linked) |
| **Link Existing** | Button — link sheet from URL field (disabled when already linked) |
| **Check Access** | Button — verify read/write (disabled when no sheet) |
| **Unlink Sheet** | Button — clear linked sheet (disabled when no sheet) |

### Cloud Tab — Data Actions Card
| Element | Description |
|---------|-------------|
| **Push System Data** | Button — sync products, governors, etc. to sheet |
| **Fetch New Orders** | Button — pull orders from Google Sheet |
| **Archive** | Button — smart archiving (move finalized orders to archive) |
| **Hint** | Explains archiving behavior |

### Backup Tab — Manual Backup Card
| Element | Description |
|---------|-------------|
| **Backup Database** | Button — create local .db backup |
| **Export as CSV** | Button — export all tables to ZIP |
| **Import Database** | Button — restore from .db or import from CSV ZIP |
| **Hint** | Suggests keeping backups on external drive |

### Backup Tab — Auto-Backup Card
| Element | Description |
|---------|-------------|
| **Enable Auto-Backup** | Switch — run backup on app start |
| **Frequency** | Dropdown — Daily or Weekly |
| **Max Backups** | Text field — keep up to N backups (1–50) |
| **Save** | Button — save auto-backup settings |

### Backup Tab — Storage Info Card
| Element | Description |
|---------|-------------|
| **Last Backup** | Date/time or "Never" |
| **Backup Files** | Count |
| **Backup Storage** | Total size |

### Backup Tab — Danger Zone Card
| Element | Description |
|---------|-------------|
| **Clear Transactions** | Button — Level 1 factory reset (transactions only) |
| **Delete All Orders** | Button — clear orders and order_items (admin password required) |
| **Replace Entire Table** | Button — replace table with Excel/CSV (admin password required) |
| **Factory Reset** | Button — Level 2 full reset (admin password required) |

### Replace Table Dialog
| Element | Description |
|---------|-------------|
| **Warning** | Explains data replacement is irreversible |
| **Select Table** | Dropdown — choose table |
| **Download Template** | Button — generate empty Excel with column headers |
| **Upload New Data** | Button — pick Excel or CSV file |
| **File label** | Shows selected file name |
| **Confirm Password** | Text field — admin password |
| **Execute Replacement** | Button |
| **Cancel** | Button |

### Delete All Orders Dialog
| Element | Description |
|---------|-------------|
| **Message** | Explains orders and order items will be cleared |
| **Admin Password** | Text field — required |
| **Confirm / Cancel** | Buttons |

### Factory Reset Dialogs (Level 1 & 2)
| Step | Content |
|------|---------|
| **Step 1** | Security Check — enter admin password, Verify |
| **Step 2** | Final warning — confirm action, Execute |
| **Level 1** | Clears transactions (orders, expenses, etc.); starts new year |
| **Level 2** | Full reset; keeps users and settings |

### Subscription Tab
| Element | Description |
|---------|-------------|
| **Status Card** | Active / Expired — license message |
| **Plan** | Basic, Premium, Unknown |
| **Expiry Date** | Date or N/A |
| **Days Left** | Count or "Expired" |
| **HWID** | Hardware ID — copyable |
| **License Key** | Text field — paste key to activate |
| **Activate** | Button |
| **Current User** | Logged-in user info |

---

## Step-by-Step Workflow

### 1. Add a User

1. Open **Users & Roles** tab.
2. Click **Add User**.
3. Enter **Name** and **Username** (required).
4. Enter **Password** (required for new users).
5. Select **Role** (Manager or Staff).
6. Set **Active Account** switch.
7. Check **Allowed Modules** (Dashboard, Preparation, Inventory, etc.).
8. Click **Save**.
9. Success: green snackbar; user list refreshes.
10. Manager role automatically gets Settings access.
11. Duplicate username: "Username 'X' is already taken!"

---

### 2. Edit a User

1. In Users tab, click **Edit** on a user card.
2. Change **Name**, **Username**, **Password** (leave empty to keep current), **Role**, **Active**, or **Permissions**.
3. Click **Save**.
4. Success: green snackbar; list refreshes.
5. Duplicate username: "Username 'X' is already taken!"

---

### 3. Delete (Deactivate) a User

1. In Users tab, click **Delete** on a user card.
2. Confirm in the dialog.
3. User is soft-deleted (deactivated); credentials cleared.
4. Success: green snackbar; list refreshes.
5. Cannot delete yourself: "Cannot delete self" (red).
6. Cannot delete admin: "Cannot delete main admin account." (red).

---

### 4. Connect Google Account

1. Open **Cloud** tab.
2. Click **Connect Account**.
3. Complete OAuth in the browser.
4. Status shows "Connected"; Connect disabled, Disconnect enabled.
5. Failure: "Connection failed" or similar.

---

### 5. Disconnect Google Account

1. In Cloud tab, click **Disconnect**.
2. Token is removed; status shows "Not Connected".

---

### 6. Link a Google Sheet

1. In Cloud tab, paste the **Google Sheet URL** or **ID** in the text field.
2. Click **Link Existing** (or **Create Sheet** for a new sheet).
3. System verifies access and saves the sheet ID.
4. Success: "Linked Successfully"; Create and Link disabled; Check Access and Unlink enabled.
5. Invalid URL/ID: "Invalid URL or ID".
6. Access denied: "Access Denied: [message]".
7. No sheet to create when already linked: Create and Link are disabled.

---

### 7. Unlink Sheet

1. In Cloud tab, click **Unlink Sheet**.
2. Linked sheet ID is cleared.
3. Success: "Sheet unlinked successfully".

---

### 8. Push System Data to Sheet

1. Ensure a sheet is linked and Google is connected.
2. Click **Push System Data to Sheet**.
3. Products, governors, and other system data sync to the sheet.
4. No linked sheet: "No linked Google Sheet. Please link one first."

---

### 9. Fetch Orders from Sheet

1. Ensure a sheet is linked.
2. Click **Fetch New Orders from Sheet**.
3. Orders are pulled from the Google Sheet.
4. No linked sheet: "No linked Google Sheet."

---

### 10. Run Smart Archive

1. Ensure Google is connected and sheet is linked.
2. Click **Archive**.
3. Finalized orders are moved to archive (local + sheet).
4. Success or error snackbar.

---

### 11. Create Backup

1. Open **Backup** tab.
2. Click **Backup Database**.
3. A backup file is created in the Backups folder.
4. Success: "Backup Created: Backup_YYYYMMDD_HHMMSS.db" (green).

---

### 12. Export to CSV (ZIP)

1. In Backup tab, click **Export as CSV**.
2. Read the warning and click **Confirm**.
3. Choose save location and filename (.zip).
4. All tables are exported as CSV files inside the ZIP.
5. Success: "Exported N tables to [filename]" (green).

---

### 13. Import Database

1. In Backup tab, click **Import Database**.
2. Choose **Restore from .db** or **Import from CSV (ZIP)**.
3. For CSV: confirm that current data will be replaced.
4. Select the file.
5. Confirm restore in the dialog.
6. Success: "Database Restored. Please Restart App." or "Database imported from CSV. Please restart the app."
7. ZIP with no CSV: "No CSV files found in ZIP archive".

---

### 14. Configure Auto-Backup

1. In Backup tab, enable **Enable Auto-Backup on App Start**.
2. Select **Frequency** (Daily or Weekly).
3. Set **Max Backups** (1–50; default 5).
4. Click **Save**.
5. Success: "Settings Saved" (green).
6. Max backups is clamped to 1–50.

---

### 15. Delete All Orders

1. In Backup tab, Danger Zone, click **Delete All Orders**.
2. Enter **Admin Password**.
3. Click **Confirm**.
4. Orders and order_items are cleared (archived_orders and shipping_ledger kept).
5. Success: "Orders and order items cleared. You can now run a fresh sync." (green).
6. Wrong password: "Wrong password!" (red).
7. Empty password: "Admin password is required." (red).

---

### 16. Replace Table Data

1. In Backup tab, Danger Zone, click **Replace Entire Table**.
2. Select **Table** from dropdown.
3. Optionally click **Download Template** to get an Excel template with column headers.
4. Fill the template or create Excel/CSV with matching columns.
5. Click **Upload New Data** and select the file.
6. Enter **Admin Password**.
7. Click **Execute Replacement**.
8. Success: "Table 'X' replaced successfully. Please refresh the app." (green).
9. Wrong password: "Wrong password!" (red).
10. Column mismatch: "Column 'X' in file does not exist in table" or "File columns must exactly match table columns."
11. Table not found: "Table 'X' not found or has no columns."
12. pandas not installed: "pandas not installed. Run: pip install pandas openpyxl".

---

### 17. Clear Transactions (Level 1 Factory Reset)

1. In Backup tab, Danger Zone, click **Clear Transactions**.
2. Enter **Admin Password** and click **Verify**.
3. Read final warning and click **Execute**.
4. All transaction tables are cleared; employee balances reset; new year started.
5. Success: "Transactions Cleared (Start New Year)" (green).
6. Wrong password: "Wrong password" (red).

---

### 18. Factory Reset (Level 2)

1. In Backup tab, Danger Zone, click **Factory Reset**.
2. Enter **Admin Password** and click **Verify**.
3. Read final warning and click **Execute**.
4. Products, campaigns, partners, etc. are cleared; users and settings kept.
5. Success: "Factory Reset Complete (Users & Settings Kept)" (green).

---

### 19. Activate License

1. Open **Subscription** tab.
2. Paste **License Key** in the field.
3. Click **Activate**.
4. Success: "License activated" (green); may navigate after activation.
5. Empty key: "License key required" (red).
6. Invalid key: Error message (red).

---

### 20. Copy HWID

1. In Subscription tab, find the **HWID** card.
2. Click the **Copy** icon.
3. HWID is copied to clipboard.
4. Success: "Copied" (green).

---

## Business Rules & Validations

### Users

| Rule | Result |
|------|--------|
| Name required | "Missing credentials" / dialog stays open |
| Username required | "Missing credentials" / dialog stays open |
| Password required (new) | "Missing credentials" / dialog stays open |
| Duplicate username | "Username 'X' is already taken!" |
| Manager | Always gets Settings in allowed_modules |
| Delete self | "Cannot delete self" |
| Delete admin | "Cannot delete main admin account." |
| Delete | Soft delete — credentials cleared, is_active=0 |

### Google & Sheet

| Rule | Result |
|------|--------|
| Link sheet | Validates access before saving ID |
| Invalid URL/ID | "Invalid URL or ID" |
| Access denied | "Access Denied: [message]" |
| No sheet for sync | "No linked Google Sheet. Please link one first." |
| Create/Link | Disabled when sheet already linked |
| Check Access / Unlink | Disabled when no sheet |

### Backup & Import

| Rule | Result |
|------|--------|
| Restore .db | Replaces DB file; emergency backup created first |
| Import CSV ZIP | Wipes tables and inserts from CSV; foreign keys disabled during import |
| Max backups | 1–50; older backups deleted when exceeded |
| Export CSV | Warning about overwrite/behavior before file picker |

### Danger Zone

| Rule | Result |
|------|--------|
| Admin password | Required for Delete Orders, Replace Table, Factory Reset |
| Wrong password | "Wrong password!" |
| Replace table | File columns must exactly match table columns |
| Replace table | pandas and openpyxl required for Excel |
| Clear Orders | Deletes orders and order_items only |
| Level 1 Reset | Clears transaction tables; resets balances |
| Level 2 Reset | Clears products, campaigns, partners, etc.; keeps users |

### Subscription

| Rule | Result |
|------|--------|
| License key | Required for activation |
| Invalid key | Error message from license module |

---

## Messages & Alerts

| Situation | Message |
|-----------|---------|
| User saved | "User Saved Successfully" / "Success" (green) |
| User deleted | "User Deactivated" / "Deleted" (green) |
| Username taken | "Username 'X' is already taken!" (red) |
| Cannot delete self | "Cannot delete self" (red) |
| Cannot delete admin | "Cannot delete main admin account." (red) |
| Linked successfully | "Linked Successfully: [msg]" (green) |
| Access denied | "Access Denied: [msg]" (red) |
| Sheet unlinked | "Sheet unlinked successfully" (green) |
| No linked sheet | "No linked Google Sheet. Please link one first." (red) |
| Backup created | "Backup Created: Backup_YYYYMMDD_HHMMSS.db" (green) |
| Export success | "Exported N tables to [filename]" (green) |
| Restore success | "Database Restored. Please Restart App." (green) |
| Import success | "Database imported from CSV. Please restart the app." (green) |
| Auto-backup saved | "Settings Saved" (green) |
| Orders cleared | "Orders and order items cleared. You can now run a fresh sync." (green) |
| Table replaced | "Table 'X' replaced successfully. Please refresh the app." (green) |
| Wrong password | "Wrong password!" (red) |
| Admin password required | "Admin password is required." (red) |
| Transactions cleared | "Transactions Cleared (Start New Year)" (green) |
| Factory reset | "Factory Reset Complete (Users & Settings Kept)" (green) |
| License activated | "License activated" (green) |
| Access denied (non-Manager) | "Access Denied" / "Manager only" |

---

## Tips

- **Manager** always has Settings access; the checkbox is enforced automatically.
- **Staff** can be restricted to specific modules via the permissions checkboxes.
- **Soft delete** keeps the employee record; only credentials and active status are cleared.
- **Link Existing** accepts full URL or sheet ID; ID is extracted from URLs automatically.
- **Create Sheet** creates a new Google Sheet and links it; disabled when one is already linked.
- **Export CSV** produces a ZIP with one CSV per table; useful for Excel or migration.
- **Import CSV** replaces table data; column names must match exactly.
- **Replace Table** uses the same column structure as the template; download template first.
- **Level 1 Reset** clears transactions for a new fiscal year; Level 2 is a deep reset.
- **Auto-backup** runs on app start when due (daily or weekly based on frequency).
- **Backups** are stored in the Backups folder; older files are pruned by max count.
- **Subscription** tab may be the only accessible section for non-Managers when license activation is required.
