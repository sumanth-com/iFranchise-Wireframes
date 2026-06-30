# iFranchise CRM — Role & Permission Management

## Roles Dashboard

**Why do we need it?** Access control is a critical security and operational function. The dashboard gives the admin a quick health check — are roles properly assigned, are there any users without roles, and are permission conflicts present?

**What is inside?**
- Total roles defined
- Users by role (bar chart or pie chart)
- Users without a role assigned (urgent alert)
- Roles with no users (orphaned roles)
- Recently modified roles
- Permission conflicts summary (if any)
- Quick actions: Create Role, View All Roles, Permission Matrix

## Roles List

**Why do we need it?** As the organisation grows, so do the number of roles. A central list makes it easy to manage, audit, and understand the role structure.

**What is inside?**
- Search by role name
- Filter: by department, by type (system-defined vs custom)
- Table: role name, description, department, user count, permissions summary, created date, last modified
- Click to view full Role Details
- Create new role button
- Clone role button (create a new role based on an existing one)
- Compare roles button

## Create Role

**Why do we need it?** As the business grows, new roles emerge — a franchise operations manager, a regional sales head, a junior accounts executive. Each needs a carefully defined set of permissions tailored to their responsibilities.

**What is inside?**
- Role name field
- Description field
- Department association
- Role type: Standard (pre-defined) or Custom
- Permission assignment interface (covered in detail by the Permission Matrix screen)
- Data access level selector: own records, team records, department records, all records
- Approval authority settings
- Reporting permissions
- Save Role button

## Edit Role

**Why do we need it?** As business processes change, role permissions need updating. A department may take on new responsibilities, or a security review may require tightening access.

**What is inside?**
- All role settings pre-filled
- Impact warning: "X users have this role. Changes will affect them immediately."
- Audit trail of previous permission changes
- Preview permission changes before saving
- Save changes and Confirm button

## Role Details

**Why do we need it?** For security audits and access reviews, the team needs to see the exact permissions of any role in a readable format. This screen provides that complete view.

**What is inside?**
- Role name, description, department
- User count (with link to see the users)
- Complete permission list, organised by module:
  - Each module: Can View, Can Create, Can Edit, Can Delete
  - Data scope: own records, team, all
  - Special permissions: can approve, can export, can bulk edit
- Last modified: who changed this role and when
- Edit, Clone, and Archive buttons

## Permission Matrix

**Why do we need it?** Managing permissions individually can miss conflicts or gaps. The matrix view shows everything at once, making it easy to spot where a role has too much access or too little.

**What is inside?**
- Rows: one per module (Leads, Customers, Accounts, Documents, etc.)
- Columns: one per role (CEO, Manager, Team Lead, Executive, Accounts, Admin, etc.)
- Cells: permission level indicator (Full Access, View Only, No Access, Custom)
- Click a cell to see detailed permissions for that role-module combination
- Export matrix as PDF for compliance documentation
- Filter: show only differences between roles

## Module Permissions

**Why do we need it?** Access control needs to be granular. A user might need to view the Accounts module but not record payments. They might need to see customer records but not edit them. Module-level permissions provide that granularity.

**What is inside?**
- Module selector
- Role selector
- Permission checkboxes for the selected module-role combination:
  - View records
  - Create new records
  - Edit own records
  - Edit all records
  - Delete records
  - Export data
  - Import data
  - Bulk actions
  - Run reports
  - Access analytics
- Save permissions button

## Data Access

**Why do we need it?** Beyond module access, data scope is critical. A sales executive should not see leads assigned to executives in another branch. An accounts manager in one region should not see another region's financial data. Data access scope enforces these boundaries.

**What is inside?**
- Role selector
- Module selector
- Data scope configuration:
  - Own records only
  - Team records
  - Department records
  - Branch records
  - All records
- Filters: additional record-level filters (e.g., only records of a specific brand, only records in their state)
- Preview: see a sample of records this role would see with current settings

## Feature Access

**Why do we need it?** Some features within a module should be restricted — bulk export, advanced analytics, system configuration, bulk deletion. Feature-level access prevents junior users from accidentally or intentionally misusing powerful features.

**What is inside?**
- Feature list per module: advanced features, bulk actions, settings, integrations
- Role-by-role feature toggles
- Examples of features controlled here:
  - Bulk lead export (sensitive — can be used to steal leads)
  - Delete records permanently
  - Access financial reports
  - Configure automation workflows
  - Manage API keys
  - View audit logs

## User Assignment (Roles)

**Why do we need it?** Managing which users have which roles needs to be easy and auditable. This screen provides a clean interface for role assignment management.

**What is inside?**
- Selected role at the top with its permission summary
- Current users with this role: name, department, date assigned, assigned by
- Add users to this role button (search and select)
- Remove user from role button
- Bulk assignment: import from CSV
- Role change history: when users were added or removed

## Department Permissions

**Why do we need it?** Some access rules should apply to an entire department. All members of the Accounts Department should see financial records. No one in the Sales Department should see HR documents. Department permissions enforce these broader rules.

**What is inside?**
- Department selector
- Department-level permission toggles
- Override rules: department-level permissions can override or supplement role-level permissions
- Conflicts summary: where department and role permissions may contradict

## Approval Permissions

**Why do we need it?** Approval authority is a sensitive business control. The wrong person approving large financial transactions or strategic decisions is a governance risk. This screen precisely defines approval authority by role.

**What is inside?**
- Approval type selector
- Requester roles: which roles can submit requests of this type
- Approver roles: which roles can approve requests of this type
- Approval limits: can approve up to a certain value, can approve at a certain urgency level
- Multi-level approval role assignments
- Delegate approval authority settings

## Workflow Permissions

**Why do we need it?** Automation workflows affect business-critical processes. Allowing anyone to create or modify automations is dangerous. This screen restricts workflow management to authorised users.

**What is inside?**
- Role-by-role permission for each workflow action: View, Create, Edit, Activate, Deactivate, Delete
- Workflow category restrictions (some categories may require higher authority)
- Test-only access (can test workflows but not activate in production)

## Field Permissions

**Why do we need it?** Not all fields should be universally visible. Salary information, sensitive customer financial details, or internal scoring fields should only be visible to authorised roles. Field-level security provides this granularity.

**What is inside?**
- Module selector
- Field list for the module
- Per field, per role: Visible, Hidden, Read-only, Editable
- Sensitive fields marked (e.g., bank account details, personal ID numbers)
- Test: preview a record as seen by each role

## Record Permissions

**Why do we need it?** Sometimes a specific record needs to be shared with a user who would not normally have access — a VIP customer record shared with the CEO, a confidential lead shared between two specific executives. Record-level sharing handles these exceptions.

**What is inside?**
- Record search (find a specific lead, customer, or other record)
- Current access: who can currently see this record
- Share with: add specific users or roles
- Access type: view only, edit, full access
- Expiry: share until a specific date
- Sharing history: who has been given access, by whom, and when

## Custom Roles

**Why do we need it?** Every business is different. Some companies need a "Franchise Operations Auditor" role that does not fit any standard category. This screen manages those custom-built roles separately so they are easy to identify and maintain.

**What is inside?**
- List of all custom roles (separate from system-defined roles)
- Each custom role: name, creator, creation date, user count, purpose
- Full permission details per custom role
- Edit, clone, deactivate options
- Convert to template option (save as a template for future use)

## Role Templates

**Why do we need it?** Starting a new role from scratch is time-consuming and error-prone. Templates provide well-configured starting points that embody best practices for common roles.

**What is inside?**
- Template library: Sales Executive, Team Lead, Accounts Manager, Admin, Brand Manager, Franchise Operations, etc.
- Each template: description, included permissions, recommended data access scope
- Use as template button (creates a new role draft from the template)
- Preview permissions before using
- System templates (provided by the CRM) vs organisation templates (saved by the team)

## Clone Role

**Why do we need it?** When a new role is very similar to an existing one with a few differences, cloning is faster than creating from scratch. This prevents duplicate work and ensures the new role starts from a solid, proven base.

**What is inside?**
- Select role to clone
- New role name and description
- Preview of cloned permissions
- Modifications section: highlight what will be different from the original
- Save new role button

## Role Comparison

**Why do we need it?** Before assigning a role to a user, or when reviewing access control, understanding the differences between similar roles is important. The comparison view makes this quick and clear.

**What is inside?**
- Select 2-3 roles to compare
- Side-by-side permission table: each row is a permission, columns are the roles
- Differences highlighted (permissions one role has that the other does not)
- Match indicator (percentage of permissions in common)
- Export comparison

## Effective Permissions

**Why do we need it?** Permissions come from multiple sources — the role, the department, custom overrides. Sometimes these interact in unexpected ways. The Effective Permissions screen shows the final result for any specific user, resolving all conflicts.

**What is inside?**
- User selector
- Module-by-module breakdown of effective permissions
- Source indicator for each permission: "from role", "from department", "custom override"
- Conflict resolution notes (if a department permission overrides a role permission)
- Comparison with base role permissions
- "What can this user see?" simulation: browse the system as this user

## Role Analytics

**Why do we need it?** Understanding role distribution helps identify security risks — too many users with admin roles, roles that are barely used, or a large number of users without proper roles. Analytics surface these issues.

**What is inside?**
- User count per role (with trend)
- Roles with most users vs least users
- Users with multiple roles (potential over-privilege)
- Inactive role holders (have role but never use the associated features)
- Permission utilisation: which permissions are actually being used vs configured
- Overprivileged users: users whose assigned role gives more access than their activity suggests they need

## Access Requests

**Why do we need it?** Sometimes a user needs temporary or permanent access beyond their standard role. Rather than the admin informally updating permissions, a formal request and approval process maintains governance.

**What is inside?**
- Submit access request form: what access is needed, why, for how long
- Pending access requests (for approver review)
- Approve/Reject with reason
- Temporary access option: grant access for a specific time period
- Access request history

## Assignment History

**Why do we need it?** For compliance and security audits, the history of all role assignments must be documented. If a security breach occurs, understanding who had what access and when is critical.

**What is inside?**
- Chronological log: user, old role, new role, changed by, date, reason
- Filter by user, role, date range, or admin who made the change
- Cannot be edited
- Export as CSV

## Role Audit

**Why do we need it?** Changes to role permissions are a significant security event. If someone modifies the Sales Executive role to add financial export permissions without authorisation, the audit log captures that change with the full details.

**What is inside?**
- All role change events: role created, permission added, permission removed, role cloned, role archived
- Each event: timestamp, user, role affected, what changed (old permission vs new permission)
- Cannot be edited or deleted
- Filter by role, date range, or change type
- Export for compliance review

## Role Timeline

**Why do we need it?** Roles evolve as business needs change. The timeline shows how a role's permissions have changed over time, which is useful for understanding how access control has evolved and for reverting unwanted changes.

**What is inside?**
- Chronological list of all events for this role: created, permission added, permission removed, users assigned, users removed, role cloned, archived
- Visual timeline layout
- Each event with details
- "View permissions at this point in time" option (see what permissions the role had on any specific date)
- Export timeline
