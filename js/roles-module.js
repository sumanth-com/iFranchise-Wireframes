/* Role & Permission Management — Single Page Module (25 screens) */

const ROLES_MODULE = (() => {
  const d = () => ROLES_DATA;
  const k = () => d().kpis;
  let activeRole = "Super Admin";

  const roleBar = () => WF.roleSwitcher(WF.getViewRole(activeRole), d().viewRoles);
  const filters = () => WF.toolbar({ filters: ["Role", "Department", "Permission", "Module", "Status", "Type"], showImport: true, showExport: true });
  const exports = () => WF.reportActions();
  const sampleRole = () => d().roles.find((r) => r.name === "Sales Manager") || d().roles[0];

  const dashKpis = () => WF.kpiGrid([
    { label: "Total Roles", value: k().totalRoles },
    { label: "Custom Roles", value: k().customRoles },
    { label: "Permission Requests", value: k().permissionRequests, change: k().pendingApprovals + " pending" },
    { label: "Failed Access Attempts", value: k().failedAccessAttempts, change: "last 7 days" },
    { label: "Security Alerts", value: k().securityAlerts },
    { label: "Most Used Role", value: k().mostUsedRole, small: true },
    { label: "Recent Changes", value: k().recentChanges, change: "last 30 days" },
    { label: "Pending Approvals", value: k().pendingApprovals }
  ]);

  const detailTabs = (active) => WF.spaTabs([
    { id: "details", label: "Overview" },
    { id: "permission-matrix", label: "Permissions" },
    { id: "user-assignment", label: "Users" },
    { id: "audit", label: "Audit" },
    { id: "timeline", label: "Timeline" }
  ], active);

  const screens = [
    {
      id: "dashboard", label: "Security Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Security Dashboard", "Role governance, access control, and security monitoring", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="roles-list" class="wf-btn wf-btn--sm">All Roles</button>
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ Create Role</button>
        `)}
        ${dashKpis()}
        <div class="wf-grid-2 wf-mb-20">
          ${WF.chartCard("Users Per Role", "Bar Chart", { height: 240, drillScreen: "roles-list", subtitle: "Sales Executive leads with 42 users" })}
          ${WF.chartCard("Permission Changes", "Line Chart", { height: 240, drillScreen: "audit" })}
        </div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Security Alerts</span><button data-screen="analytics" class="wf-btn wf-btn--sm">Analytics</button></div>
            <div class="wf-card__body">
              ${d().securityAlerts.map((a) => `<div class="wf-security-alert wf-security-alert--${a.severity.toLowerCase()}">
                <div><strong>${a.type}</strong> · ${a.severity}<br><span style="font-size:12px;color:var(--wf-text-muted)">${a.detail} · ${a.time}</span></div>
              </div>`).join("")}
            </div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Pending Access Requests</span><button data-screen="access-requests" class="wf-btn wf-btn--sm">View All</button></div>
            <div class="wf-card__body" style="font-size:13px">
              ${d().accessRequests.filter((r) => r.status === "Pending").map((r) => `
                <div style="padding:10px 0;border-bottom:1px solid var(--wf-border-light)">
                  <strong>${r.user}</strong> — ${r.permission} on ${r.module}<br>
                  <span style="font-size:12px;color:var(--wf-text-muted)">${r.requested}</span>
                  <button data-modal="access-request" class="wf-btn wf-btn--sm" style="float:right">Review</button>
                </div>`).join("")}
            </div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recent Role Changes</span><button data-screen="audit" class="wf-btn wf-btn--sm">Audit History</button></div>
          <div class="wf-card__body">${WF.activityFeed(d().auditLog.slice(0, 5).map((a) => ({ title: a.action + " — " + a.target, user: a.user, time: a.time, desc: a.details })))}</div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Quick Actions</span></div>
          <div class="wf-card__body" style="display:flex;flex-wrap:wrap;gap:8px">
            <button data-screen="permission-matrix" class="wf-btn wf-btn--sm">Permission Matrix</button>
            <button data-modal="bulk-permission" class="wf-btn wf-btn--sm">Bulk Assign</button>
            <button data-screen="comparison" class="wf-btn wf-btn--sm">Compare Roles</button>
            <button data-screen="effective" class="wf-btn wf-btn--sm">Effective Permissions</button>
            <button data-screen="templates" class="wf-btn wf-btn--sm">Templates</button>
            <button data-screen="assignment-history" class="wf-btn wf-btn--sm">Assignment History</button>
          </div>
        </div>
      `
    },
    {
      id: "roles-list", label: "Roles List",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Roles List", "System and custom roles with permission counts", `
          <button data-modal="bulk-permission" class="wf-btn wf-btn--sm">Bulk Permissions</button>
          <button data-screen="templates" class="wf-btn wf-btn--sm">Templates</button>
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ Create Role</button>
        `)}
        ${filters()}
        <div style="display:flex;gap:8px;margin-bottom:12px">
          <button data-modal="bulk-permission" class="wf-btn wf-btn--sm">Bulk Grant</button>
          <button class="wf-btn wf-btn--sm">Bulk Revoke</button>
          <button data-screen="clone" class="wf-btn wf-btn--sm">Clone Selected</button>
        </div>
        ${WF.roleTable(d().roles)}
        ${WF.pagination(d().roles.length, 1, 25)}
      `
    },
    {
      id: "details", label: "Role Details",
      render: () => {
        const r = sampleRole();
        return `
        ${roleBar()}
        ${WF.pageHeader(r.name, r.id + " · " + r.permissions + " permissions", `
          <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
          <button data-screen="clone" class="wf-btn wf-btn--sm">Clone</button>
          <button data-screen="comparison" class="wf-btn wf-btn--sm">Compare</button>
          <button data-screen="permission-matrix" class="wf-btn wf-btn--sm wf-btn--primary">Permission Matrix</button>
        `)}
        ${detailTabs("details")}
        <div class="wf-profile-layout wf-mt-16">
          ${WF.roleDetailCard(r)}
          <div>
            <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Overview</span></div>
              <div class="wf-card__body" style="font-size:13px;line-height:1.9">
                <div><strong>Description:</strong> ${r.description}</div>
                <div><strong>Parent Role:</strong> ${r.parent}</div>
                <div><strong>Default Dashboard:</strong> Sales Dashboard</div>
                <div><strong>API Access:</strong> Read + Write (scoped)</div>
                <div><strong>Storage:</strong> Department files</div>
                <div><strong>Session Timeout:</strong> 1 hour · <strong>MFA:</strong> ${r.mfa ? "Required" : "Optional"}</div>
              </div>
            </div>
            <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Assigned Users (${r.users})</span><button data-screen="user-assignment" class="wf-btn wf-btn--sm">Manage</button></div>
              <div class="wf-card__body" style="display:flex;flex-wrap:wrap;gap:8px">
                ${d().users.slice(0, r.users > 4 ? 4 : r.users).map((u) => `<span class="wf-badge wf-badge--dark">${u}</span>`).join("")}
                ${r.users > 4 ? `<span class="wf-badge">+${r.users - 4} more</span>` : ""}
              </div>
            </div>
            <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Validation</span><button data-action="validate-permissions" class="wf-btn wf-btn--sm">Validate</button></div>
              <div class="wf-card__body">
                <div class="wf-props__check wf-props__check--ok">✓ Unique role name</div>
                <div class="wf-props__check wf-props__check--ok">✓ No permission conflicts</div>
                <div class="wf-props__check wf-props__check--ok">✓ No circular hierarchy</div>
                <div class="wf-props__check wf-props__check--ok">✓ Mandatory permissions present</div>
                <div class="wf-props__check wf-props__check--warn">⚠ MFA recommended for this role level</div>
              </div>
            </div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recent Changes</span><button data-screen="audit" class="wf-btn wf-btn--sm">Full Audit</button></div>
          <div class="wf-card__body">${WF.timeline(d().auditLog.filter((a) => a.target.includes("Sales")).slice(0, 3).map((a) => ({ title: a.action, time: a.time, user: a.user, desc: a.details })))}</div>
        </div>
      `;
      }
    },
    {
      id: "create", label: "Create Role",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Create Role", "Define role, permissions, and security policies", `
          <button data-screen="templates" class="wf-btn wf-btn--sm">Use Template</button>
        `)}
        <div class="wf-card"><div class="wf-card__body">${WF.roleForm(null, "create")}</div></div>
      `
    },
    {
      id: "edit", label: "Edit Role",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Edit Role", sampleRole().id + " · " + sampleRole().name, `
          <button data-screen="details" class="wf-btn wf-btn--sm">View Details</button>
        `)}
        <div class="wf-card"><div class="wf-card__body">${WF.roleForm(sampleRole(), "edit")}</div></div>
      `
    },
    {
      id: "permission-matrix", label: "Permission Matrix",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Permission Matrix", "Module × permission grid — Salesforce-style access control", `
          <select class="wf-form__select" style="width:auto;font-size:13px"><option>Sales Manager</option>${d().roles.map((r) => `<option>${r.name}</option>`).join("")}</select>
          <button data-action="validate-permissions" class="wf-btn wf-btn--sm">Validate</button>
          <button class="wf-btn wf-btn--sm wf-btn--primary">Save Changes</button>
        `)}
        <div class="wf-card"><div class="wf-card__header">
          <span class="wf-card__title">Sales Manager — Full Matrix</span>
          <div style="display:flex;gap:8px">
            <button class="wf-btn wf-btn--sm">Select All</button>
            <button class="wf-btn wf-btn--sm">Clear All</button>
            <button data-modal="bulk-permission" class="wf-btn wf-btn--sm">Bulk Apply</button>
          </div>
        </div>
          <div class="wf-card__body" style="padding:0">${WF.permissionMatrix()}</div>
        </div>
        <div class="wf-grid-2 wf-mt-16">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Legend</span></div>
            <div class="wf-card__body" style="font-size:12px;color:var(--wf-text-muted)">
              Checked = permission granted · Inherited permissions shown from parent role · Changes require Super Admin or CEO approval for executive roles.
            </div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Permission Types</span></div>
            <div class="wf-card__body" style="font-size:12px">${d().permissionTypes.join(" · ")}</div>
          </div>
        </div>
      `
    },
    {
      id: "module-permissions", label: "Module Permissions",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Module Permissions", "Tree view of module-level access by role", `
          <button data-screen="permission-matrix" class="wf-btn wf-btn--sm wf-btn--primary">Matrix View</button>
        `)}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Sales Executive — Module Tree</span></div>
            <div class="wf-card__body">${WF.permissionTree()}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">All Modules</span></div>
            <div class="wf-card__body" style="font-size:13px">
              ${d().modules.map((m) => `<div style="padding:8px 0;border-bottom:1px solid var(--wf-border-light);display:flex;justify-content:space-between">
                <span>${m}</span><button data-screen="permission-matrix" class="wf-btn wf-btn--sm">Configure</button>
              </div>`).join("")}
            </div>
          </div>
        </div>
      `
    },
    {
      id: "data-access", label: "Data Access Permissions",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Data Access Permissions", "Row-level and scope-based data visibility", exports())}
        ${filters()}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Record Access Rules</span><button data-screen="record-permissions" class="wf-btn wf-btn--sm">Record Rules</button></div>
          <div class="wf-card__body" style="padding:0">
            <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Module</th><th>Rule</th><th>Roles</th><th>Scope</th><th>Actions</th></tr></thead>
            <tbody>${d().recordPermissions.map((r) => `<tr><td>${r.module}</td><td>${r.rule}</td><td>${r.roles}</td><td style="font-size:12px">${r.scope}</td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>`).join("")}</tbody></table></div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Department Data Scoping</span></div>
          <div class="wf-card__body">${WF.reportDataTable(["Department", "View Scope", "Edit Scope", "Export"], [
            ["Sales", "Own + Team + Dept", "Own + Assigned", "Manager+"],
            ["Accounts", "All financial", "Accounts role", "Accounts+"],
            ["HR", "All employees", "HR role", "HR only"]
          ])}</div>
        </div>
      `
    },
    {
      id: "feature-access", label: "Feature Access",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Feature Access", "UI features, actions, and capability toggles per role", `
          <button data-modal="bulk-permission" class="wf-btn wf-btn--sm">Bulk Update</button>
        `)}
        <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr)">
          ${["Bulk Actions", "Advanced Filters", "Custom Reports", "Workflow Builder", "API Keys", "Data Export", "Audit Log View", "User Impersonation", "SSO Configuration"].map((f) => `
            <div class="wf-card"><div class="wf-card__body" style="padding:16px">
              <div style="font-weight:600;margin-bottom:8px">${f}</div>
              <div style="font-size:12px;color:var(--wf-text-muted);margin-bottom:12px">Sales Manager, CEO, Super Admin</div>
              <label style="font-size:13px"><input type="checkbox" checked> Enabled</label>
            </div></div>`).join("")}
        </div>
      `
    },
    {
      id: "user-assignment", label: "User Role Assignment",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("User Role Assignment", "Assign and revoke roles for employees", `
          <button data-modal="bulk-permission" class="wf-btn wf-btn--sm">Bulk Assign</button>
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Assign Role</button>
        `)}
        ${filters()}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th></th><th>Employee</th><th>Current Role</th><th>Department</th><th>City</th><th>Effective Since</th><th>Actions</th></tr></thead>
        <tbody>${d().users.map((u, i) => {
          const roles = ["Sales Executive", "Team Lead", "Sales Manager", "Operations Manager", "Accounts", "HR", "Brand Owner", "Sales Executive", "HR"];
          return `<tr><td><span class="wf-table__checkbox"></span></td><td><a href="#" data-screen="effective">${u}</a></td><td>${roles[i]}</td><td>${["Sales","Sales","Sales","Operations","Accounts","HR","Marketing","Sales","HR"][i]}</td><td>Bengaluru</td><td>2022-02-14</td><td><button class="wf-btn wf-btn--sm">Change</button><button class="wf-btn wf-btn--sm">Revoke</button></td></tr>`;
        }).join("")}</tbody></table></div>
        ${WF.pagination(248, 1, 25)}
      `
    },
    {
      id: "department-permissions", label: "Department Permissions",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Department Permissions", "Cross-department access policies", exports())}
        <div class="wf-card"><div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Department", "Default Role", "Module Access", "Data Scope", "Approvers"], d().departments.slice(0, 8).map((dept, i) => [dept, d().systemRoles[i + 3] || "—", "Scoped", "Department", "Manager"]))}</div></div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Department × Module Matrix</span></div>
          <div class="wf-card__body" style="padding:0">${WF.permissionMatrix({ modules: d().departments, columns: ["View", "Create", "Edit", "Configure"], compact: true })}</div>
        </div>
      `
    },
    {
      id: "approval-permissions", label: "Approval Permissions",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Approval Permissions", "Who can approve discounts, agreements, and workflows", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Add Rule</button>
        `)}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Approval Rights by Role</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Approval Type</th><th>Threshold</th><th>Approver Roles</th><th>Escalation</th><th>Actions</th></tr></thead>
          <tbody>
            <tr><td>Discount Approval</td><td>Up to 10%</td><td>Team Lead, Sales Manager</td><td>Operations Manager</td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>
            <tr><td>Discount Approval</td><td>10–25%</td><td>Sales Manager, Operations Manager</td><td>CEO</td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>
            <tr><td>Agreement Signing</td><td>All</td><td>Operations Manager, CEO</td><td>—</td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>
            <tr><td>Payment Verification</td><td>All</td><td>Accounts</td><td>Operations Manager</td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>
            <tr><td>Document Approval</td><td>Brand docs</td><td>Brand Owner, Operations Manager</td><td>CEO</td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>
          </tbody></table></div>
        </div>
      `
    },
    {
      id: "workflow-permissions", label: "Workflow Permissions",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Workflow Permissions", "Automation engine access and workflow administration", `
          <button data-screen="permission-matrix" class="wf-btn wf-btn--sm">Module Matrix</button>
        `)}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Role</th><th>View Workflows</th><th>Create</th><th>Edit</th><th>Activate</th><th>Delete</th><th>Test</th></tr></thead>
        <tbody>
          <tr><td>Super Admin</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td>Operations Manager</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>—</td><td>✓</td></tr>
          <tr><td>Sales Manager</td><td>✓</td><td>✓</td><td>Own</td><td>—</td><td>—</td><td>✓</td></tr>
          <tr><td>Team Lead</td><td>✓</td><td>—</td><td>—</td><td>—</td><td>—</td><td>✓</td></tr>
          <tr><td>Sales Executive</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
        </tbody></table></div>
      `
    },
    {
      id: "field-permissions", label: "Field Level Permissions",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Field Level Permissions", "Hide, view, or edit specific fields by role", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Add Field Rule</button>
        `)}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Module</th><th>Field</th><th>Role</th><th>Access</th><th>Scope</th><th>Actions</th></tr></thead>
        <tbody>${d().fieldPermissions.map((f) => `<tr><td>${f.module}</td><td>${f.field}</td><td>${f.roles}</td><td><span class="wf-badge${f.access === "Hidden" ? "" : " wf-badge--dark"}">${f.access}</span></td><td style="font-size:12px">${f.scope}</td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>`).join("")}</tbody></table></div>
      `
    },
    {
      id: "record-permissions", label: "Record Level Permissions",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Record Level Permissions", "Own, team, department, and custom record scopes", `
          <button data-screen="data-access" class="wf-btn wf-btn--sm">Data Access</button>
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Add Rule</button>
        `)}
        <div class="wf-card"><div class="wf-card__body" style="padding:0">
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Module</th><th>Rule Name</th><th>Roles</th><th>Scope Expression</th><th>Priority</th><th>Actions</th></tr></thead>
          <tbody>${d().recordPermissions.map((r, i) => `<tr><td>${r.module}</td><td>${r.rule}</td><td>${r.roles}</td><td style="font-size:12px;font-family:monospace">${r.scope}</td><td>${i + 1}</td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "custom-roles", label: "Custom Roles",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Custom Roles", "Organization-specific roles cloned from system templates", `
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ Create Custom Role</button>
        `)}
        ${WF.roleTable(d().roles.filter((r) => r.isCustom))}
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Custom vs System</span></div>
          <div class="wf-card__body">${WF.chartCard("Role Distribution", "Donut Chart", { height: 200 })}</div>
        </div>
      `
    },
    {
      id: "templates", label: "Permission Templates",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Permission Templates", "Pre-configured permission sets for rapid role deployment", `
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">Apply Template</button>
        `)}
        <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr)">
          ${d().templates.map((t) => `<div class="wf-card"><div class="wf-card__body" style="padding:20px">
            <div style="font-size:15px;font-weight:600;margin-bottom:8px">${t.name}</div>
            <div style="font-size:12px;color:var(--wf-text-muted);margin-bottom:12px">${t.description}</div>
            <div style="font-size:12px">${t.roles} roles · ${t.permissions} permissions</div>
            <button data-screen="create" class="wf-btn wf-btn--sm wf-mt-16">Use Template</button>
            <button data-screen="permission-matrix" class="wf-btn wf-btn--sm">Preview</button>
          </div></div>`).join("")}
        </div>
      `
    },
    {
      id: "clone", label: "Clone Role",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Clone Role", "Duplicate an existing role with a new name", `
          <button data-modal="clone-role" class="wf-btn wf-btn--sm wf-btn--primary">Clone Now</button>
        `)}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__body">
            <div class="wf-form__group"><label class="wf-form__label">Source Role</label><select class="wf-form__select">${d().roles.map((r) => `<option>${r.name}</option>`).join("")}</select></div>
            <div class="wf-form__group"><label class="wf-form__label">New Role Name *</label><input class="wf-form__input" placeholder="e.g. Sales Manager — Chennai"></div>
            <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Copy all permissions</label></div>
            <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Copy security policies</label></div>
            <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox"> Copy assigned users (not recommended)</label></div>
            <button data-modal="clone-role" class="wf-btn wf-btn--primary wf-mt-16">Clone Role</button>
          </div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Clones</span></div>
            <div class="wf-card__body" style="font-size:13px">
              <div style="padding:8px 0;border-bottom:1px solid var(--wf-border-light)"><strong>Sales Manager — Hyderabad</strong><br><span style="font-size:12px;color:var(--wf-text-muted)">From Sales Manager · 15 Jun 2024</span></div>
              <div style="padding:8px 0"><strong>Franchise Onboarding</strong><br><span style="font-size:12px;color:var(--wf-text-muted)">From Operations Manager · 12 Jun 2024</span></div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "comparison", label: "Permission Comparison",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Permission Comparison", "Side-by-side diff of two roles", exports())}
        <div class="wf-card wf-mb-16"><div class="wf-card__body">
          <div class="wf-form__grid" style="grid-template-columns:1fr 1fr auto">
            <div class="wf-form__group"><label class="wf-form__label">Role A</label><select class="wf-form__select"><option>Sales Manager</option>${d().roles.map((r) => `<option>${r.name}</option>`).join("")}</select></div>
            <div class="wf-form__group"><label class="wf-form__label">Role B</label><select class="wf-form__select"><option>Team Lead</option>${d().roles.map((r) => `<option>${r.name}</option>`).join("")}</select></div>
            <div class="wf-form__group" style="align-self:end"><button class="wf-btn wf-btn--primary">Compare</button></div>
          </div>
        </div></div>
        ${WF.permissionComparison("Sales Manager", "Team Lead")}
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Summary</span></div>
          <div class="wf-card__body" style="font-size:13px">
            <div><strong>36 permissions</strong> only in Sales Manager</div>
            <div><strong>0 permissions</strong> only in Team Lead</div>
            <div><strong>92 permissions</strong> shared</div>
          </div>
        </div>
      `
    },
    {
      id: "effective", label: "Effective Permissions Viewer",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Effective Permissions Viewer", "Resolved permissions after role, department, and overrides", `
          <button data-screen="user-assignment" class="wf-btn wf-btn--sm">Assignment</button>
        `)}
        <div class="wf-card wf-mb-16"><div class="wf-card__body">
          <div class="wf-form__grid">
            <div class="wf-form__group"><label class="wf-form__label">Employee</label><select class="wf-form__select">${d().users.map((u) => `<option>${u}</option>`).join("")}</select></div>
            <div class="wf-form__group"><label class="wf-form__label">Primary Role</label><select class="wf-form__select"><option>Sales Manager</option></select></div>
            <div class="wf-form__group"><label class="wf-form__label">Department</label><input class="wf-form__input" value="Sales" readonly></div>
          </div>
        </div></div>
        ${WF.effectivePermissionsPanel("Himani Bhargava", "Sales Manager")}
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Permission Sources</span></div>
          <div class="wf-card__body">${WF.reportDataTable(["Source", "Type", "Permissions"], [
            ["Sales Manager", "Primary Role", "164"],
            ["Sales Department", "Department Scope", "+12"],
            ["Bengaluru Office", "Location Policy", "+4"],
            ["Manual Override", "Deny Export — Accounts", "-1"]
          ])}</div>
        </div>
      `
    },
    {
      id: "analytics", label: "Security Analytics",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Security Analytics", "Access patterns, violations, and governance metrics", exports())}
        ${WF.periodToggle("Last 30 days")}
        ${dashKpis()}
        <div class="wf-grid-2 wf-mb-20">
          ${WF.chartCard("Failed Access Attempts", "Line Chart", { height: 280 })}
          ${WF.chartCard("Permission Changes by Role", "Stacked Bar", { height: 280, drillScreen: "audit" })}
        </div>
        <div class="wf-grid-2">
          ${WF.chartCard("Users Per Role", "Horizontal Bar", { drillScreen: "roles-list" })}
          ${WF.chartCard("Access Requests", "Area Chart", { drillScreen: "access-requests" })}
        </div>
      `
    },
    {
      id: "access-requests", label: "Access Requests",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Access Requests", "Temporary and permanent permission elevation requests", `
          <button class="wf-btn wf-btn--sm">Bulk Approve</button>
        `)}
        ${filters()}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>ID</th><th>User</th><th>Role</th><th>Module</th><th>Permission</th><th>Reason</th><th>Requested</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${d().accessRequests.map((r) => `<tr>
          <td>${r.id}</td><td>${r.user}</td><td>${r.role}</td><td>${r.module}</td><td>${r.permission}</td>
          <td style="font-size:12px">${r.reason}</td><td>${r.requested}</td>
          <td><span class="wf-badge${r.status === "Approved" ? " wf-badge--dark" : ""}">${r.status}</span></td>
          <td>${r.status === "Pending" ? '<button data-modal="access-request" class="wf-btn wf-btn--sm">Review</button>' : '<button class="wf-btn wf-btn--sm">View</button>'}</td>
        </tr>`).join("")}</tbody></table></div>
      `
    },
    {
      id: "audit", label: "Permission Audit History",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Permission Audit History", "Immutable log of all permission and role changes", exports())}
        ${filters()}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Time</th><th>Actor</th><th>Action</th><th>Target</th><th>Details</th></tr></thead>
        <tbody>${d().auditLog.map((a) => `<tr><td>${a.time}</td><td>${a.user}</td><td>${a.action}</td><td>${a.target}</td><td style="font-size:12px;color:var(--wf-text-secondary)">${a.details}</td></tr>`).join("")}</tbody></table></div>
        ${WF.pagination(1248, 1, 25)}
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Audit Timeline</span></div>
          <div class="wf-card__body">${WF.timeline(d().auditLog.map((a) => ({ title: a.action + " — " + a.target, time: a.time, user: a.user, desc: a.details })))}</div>
        </div>
      `
    },
    {
      id: "assignment-history", label: "Role Assignment History",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Role Assignment History", "Who assigned which role to whom and when", exports())}
        ${filters()}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Date</th><th>Employee</th><th>From Role</th><th>To Role</th><th>Assigned By</th><th>Reason</th></tr></thead>
        <tbody>${d().assignmentHistory.map((a) => `<tr><td>${a.date}</td><td><a href="#" data-screen="effective">${a.user}</a></td><td>${a.fromRole}</td><td>${a.toRole}</td><td>${a.by}</td><td style="font-size:12px">${a.reason}</td></tr>`).join("")}</tbody></table></div>
        ${WF.pagination(486, 1, 25)}
      `
    },
    {
      id: "timeline", label: "Security Timeline",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Security Timeline", "Chronological security and governance events", `
          <button data-screen="audit" class="wf-btn wf-btn--sm">Audit Log</button>
          <button data-screen="analytics" class="wf-btn wf-btn--sm">Analytics</button>
        `)}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Security Events</span></div>
            <div class="wf-card__body">${WF.timeline(d().timeline)}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Alerts & Incidents</span></div>
            <div class="wf-card__body">
              ${d().securityAlerts.map((a) => `<div class="wf-security-alert wf-security-alert--${a.severity.toLowerCase()}">
                <div><strong>${a.type}</strong> (${a.severity})<br><span style="font-size:12px">${a.detail}</span><br><span style="font-size:11px;color:var(--wf-text-muted)">${a.time}</span></div>
              </div>`).join("")}
            </div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Activity Feed</span><button data-screen="audit" class="wf-btn wf-btn--sm">Full Audit</button></div>
          <div class="wf-card__body">${WF.activityFeed(d().auditLog.map((a) => ({ title: a.action, user: a.user, time: a.time, desc: a.target + ": " + a.details })))}</div>
        </div>
      `
    }
  ];

  function init() {
    WF.resetViewRole(activeRole);
    WF_SPA.init({
      moduleKey: "roles",
      moduleLabel: "Role & Permission Management",
      moduleTitle: "Role & Permission Management",
      moduleHref: "index.html",
      defaultScreen: "dashboard",
      searchPlaceholder: "Search roles, permissions, users, modules…",
      modals: WF.securityModals,
      screens
    });

  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => ROLES_MODULE.init());
