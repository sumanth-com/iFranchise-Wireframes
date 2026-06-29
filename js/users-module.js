/* User Management — Single Page Module (24 screens) */

const USERS_MODULE = (() => {
  const d = () => USER_DATA;
  const k = () => d().kpis;
  let activeRole = "HR";
  const sample = () => d().users.find((u) => u.name === "Himani Bhargava") || d().users[0];

  const roleBar = () => WF.roleSwitcher(WF.getViewRole(activeRole), d().roles);
  const filters = () => WF.toolbar({ filters: ["Department", "Role", "Status", "City", "Team", "Employment Type"], showImport: true, showExport: true });
  const exports = () => WF.reportActions();
  const statuses = () => d().userStatuses;

  const dashKpis = () => WF.kpiGrid([
    { label: "Total Employees", value: k().totalEmployees },
    { label: "Active Employees", value: k().activeEmployees, change: "93% of total" },
    { label: "On Leave", value: k().onLeave },
    { label: "Pending Invitations", value: k().pendingInvitations },
    { label: "Departments", value: k().departments },
    { label: "Teams", value: k().teams },
    { label: "Online Users", value: k().onlineUsers, change: "right now" },
    { label: "New Joiners", value: k().newJoiners, change: "this month", small: true }
  ]);

  const profileTabs = (active) => WF.spaTabs([
    { id: "profile", label: "Overview" },
    { id: "documents", label: "Documents" },
    { id: "leave", label: "Leave" },
    { id: "skills", label: "Skills" },
    { id: "activity", label: "Activity" },
    { id: "sessions", label: "Sessions" },
    { id: "devices", label: "Devices" },
    { id: "timeline", label: "Timeline" }
  ], active);

  const screens = [
    {
      id: "dashboard", label: "User Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("User Dashboard", "Workforce overview, headcount, and employee activity", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="directory" class="wf-btn wf-btn--sm">Directory</button>
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ Add Employee</button>
        `)}
        ${dashKpis()}
        <div class="wf-grid-2 wf-mb-20">
          ${WF.chartCard("Headcount by Department", "Bar Chart", { height: 240, drillScreen: "departments" })}
          ${WF.chartCard("Employee Status Distribution", "Donut Chart", { height: 240, drillScreen: "account-status" })}
        </div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Today's Birthdays (${k().todayBirthdays})</span></div>
            <div class="wf-card__body" style="font-size:13px">
              ${d().birthdays.map((b) => `<div style="padding:8px 0;border-bottom:1px solid var(--wf-border-light)"><strong>${b.name}</strong> · ${b.date} · ${b.department} <button data-screen="profile" class="wf-btn wf-btn--sm" style="float:right">View</button></div>`).join("")}
            </div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">New Joiners</span><button data-screen="directory" class="wf-btn wf-btn--sm">All</button></div>
            <div class="wf-card__body" style="font-size:13px">
              ${d().newJoiners.map((j) => `<div style="padding:8px 0;border-bottom:1px solid var(--wf-border-light)"><strong>${j.name}</strong> · ${j.date}<br><span style="font-size:12px;color:var(--wf-text-muted)">${j.department} · ${j.city}</span></div>`).join("")}
            </div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recent Activities</span><button data-screen="activity" class="wf-btn wf-btn--sm">View All</button></div>
          <div class="wf-card__body">${WF.activityFeed(d().activities.slice(0, 5))}</div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Quick Actions</span></div>
          <div class="wf-card__body" style="display:flex;flex-wrap:wrap;gap:8px">
            <button data-modal="invite-user" class="wf-btn wf-btn--sm">Invite User</button>
            <button data-screen="bulk-import" class="wf-btn wf-btn--sm">Bulk Import</button>
            <button data-screen="bulk-export" class="wf-btn wf-btn--sm">Bulk Export</button>
            <button data-screen="org-chart" class="wf-btn wf-btn--sm">Org Chart</button>
            <button data-screen="analytics" class="wf-btn wf-btn--sm">Analytics</button>
            <button data-screen="sessions" class="wf-btn wf-btn--sm">Online Users (${k().onlineUsers})</button>
          </div>
        </div>
      `
    },
    {
      id: "directory", label: "User Directory",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("User Directory", "Search and manage all employees across locations", `
          <button data-modal="bulk-import" class="wf-btn wf-btn--sm">Import</button>
          <button data-screen="bulk-export" class="wf-btn wf-btn--sm">Export</button>
          <button data-modal="invite-user" class="wf-btn wf-btn--sm">Invite</button>
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ Create User</button>
        `)}
        ${filters()}
        <div style="display:flex;gap:8px;margin-bottom:12px">
          <button class="wf-btn wf-btn--sm">Bulk Assign Role</button>
          <button class="wf-btn wf-btn--sm">Bulk Change Department</button>
          <button data-screen="deactivate" class="wf-btn wf-btn--sm">Deactivate Selected</button>
        </div>
        ${WF.userTable(d().users)}
        ${WF.pagination(k().totalEmployees, 1, 25)}
      `
    },
    {
      id: "details", label: "User Details",
      render: () => {
        const u = sample();
        return `
        ${roleBar()}
        ${WF.pageHeader(u.name, u.employeeId + " · " + u.designation, `
          <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
          <button data-screen="profile" class="wf-btn wf-btn--sm wf-btn--primary">Full Profile</button>
        `)}
        ${WF.workflowStepper(u.status, statuses())}
        <div class="wf-grid-2 wf-mt-16">
          ${WF.userProfileCard(u)}
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Employment Details</span></div>
            <div class="wf-card__body" style="font-size:13px;line-height:1.9">
              <div><strong>Role:</strong> ${u.role}</div>
              <div><strong>Employment Type:</strong> ${u.employmentType}</div>
              <div><strong>Shift:</strong> 9:00 AM – 6:00 PM</div>
              <div><strong>Salary Grade:</strong> L4</div>
              <div><strong>Leads Assigned:</strong> ${u.leads} <button data-screen="activity" class="wf-btn wf-btn--sm">View</button></div>
              <div><strong>Customers:</strong> ${u.customers}</div>
              <div><strong>Meetings (Jun):</strong> ${u.meetings}</div>
              <div><strong>Open Tasks:</strong> ${u.tasks}</div>
            </div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Validation Status</span></div>
          <div class="wf-card__body">
            <div class="wf-props__check wf-props__check--ok">Unique Employee ID verified</div>
            <div class="wf-props__check wf-props__check--ok">Email unique and verified</div>
            <div class="wf-props__check wf-props__check--ok">Phone validated (E.164)</div>
            <div class="wf-props__check wf-props__check--ok">Manager assignment valid</div>
            <div class="wf-props__check wf-props__check--ok">Role permissions configured</div>
          </div>
        </div>
      `;
      }
    },
    {
      id: "create", label: "Create User",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Create User", "Add a new employee to the organization", `
          <button data-screen="bulk-import" class="wf-btn wf-btn--sm">Bulk Import Instead</button>
        `)}
        <div class="wf-card"><div class="wf-card__body">${WF.userForm(null, "create")}</div></div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">User Status Flow</span></div>
          <div class="wf-card__body">${WF.workflowStepper("Invited", statuses())}</div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Validation Rules</span></div>
          <div class="wf-card__body" style="font-size:13px">
            <div class="wf-props__check wf-props__check--ok">Employee ID must be unique</div>
            <div class="wf-props__check wf-props__check--ok">Email must be unique across organization</div>
            <div class="wf-props__check wf-props__check--ok">Phone number format validation</div>
            <div class="wf-props__check wf-props__check--ok">Manager must exist in same or parent department</div>
            <div class="wf-props__check wf-props__check--ok">Duplicate user prevention active</div>
          </div>
        </div>
      `
    },
    {
      id: "edit", label: "Edit User",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Edit User", sample().employeeId + " · " + sample().name, `
          <button data-screen="profile" class="wf-btn wf-btn--sm">View Profile</button>
        `)}
        <div class="wf-card"><div class="wf-card__body">${WF.userForm(sample(), "edit")}</div></div>
      `
    },
    {
      id: "profile", label: "Employee Profile",
      render: () => {
        const u = d().users.find((x) => x.name === "Abdul Syed") || sample();
        return `
        ${roleBar()}
        ${WF.pageHeader(u.name, u.designation + " · " + u.team, `
          <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
          <button data-screen="hierarchy" class="wf-btn wf-btn--sm">Hierarchy</button>
          <button data-modal="send-email" class="wf-btn wf-btn--sm wf-btn--primary">Contact</button>
        `)}
        ${profileTabs("profile")}
        <div class="wf-profile-layout wf-mt-16">
          ${WF.userProfileCard(u)}
          <div>
            <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Personal Details</span></div>
              <div class="wf-card__body" style="font-size:13px;line-height:1.9">
                <div><strong>DOB:</strong> ${u.dob}</div>
                <div><strong>Address:</strong> ${u.address}</div>
                <div><strong>Emergency:</strong> ${WF.formatPhoneInText(u.emergencyContact)}</div>
                <div><strong>Languages:</strong> ${(u.languages || []).join(", ")}</div>
              </div>
            </div>
            <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Employment & Performance</span></div>
              <div class="wf-card__body">
                ${WF.kpiGrid([
                  { label: "Assigned Leads", value: u.leads },
                  { label: "Customers", value: u.customers },
                  { label: "Meetings (Jun)", value: u.meetings },
                  { label: "Open Tasks", value: u.tasks }
                ])}
              </div>
            </div>
            <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Reporting Structure</span><button data-screen="hierarchy" class="wf-btn wf-btn--sm">Full Tree</button></div>
              <div class="wf-card__body" style="font-size:13px">
                <div>CEO: Abdul Syed · Co-Founder: Abrar → Sales Manager: Himani Bhargava → <strong>${u.name}</strong></div>
                <button data-screen="org-chart" class="wf-btn wf-btn--sm wf-mt-16">View Org Chart</button>
              </div>
            </div>
          </div>
        </div>
      `;
      }
    },
    {
      id: "hierarchy", label: "Reporting Hierarchy",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Reporting Hierarchy", "Organizational reporting lines and management structure", `
          <button data-screen="org-chart" class="wf-btn wf-btn--sm">Org Chart View</button>
          <button data-screen="directory" class="wf-btn wf-btn--sm">Directory</button>
        `)}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Reporting Tree</span></div>
            <div class="wf-card__body">${WF.hierarchyTree()}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Manager Chain — Sales Executive</span></div>
            <div class="wf-card__body" style="font-size:13px;line-height:2">
              <div>Level 1: <a href="#" data-screen="profile">Himani Bhargava</a> (Sales Manager)</div>
              <div>Level 2: <a href="#" data-screen="profile">Abdul Syed</a> (CEO)</div>
              <div class="wf-mt-16"><strong>Executive:</strong> <a href="#" data-screen="profile">Abrar</a> (Co-Founder)</div>
              <div><strong>Direct Reports:</strong> None</div>
              <div><strong>Peers:</strong> <a href="#" data-screen="profile">Diksha</a></div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "departments", label: "Departments",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Departments", "Organizational departments and headcount", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Add Department</button>
        `)}
        ${WF.departmentGrid()}
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Department Summary</span></div>
          <div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Department", "Head", "Employees", "Teams", "Locations"], d().departmentStats.map((x) => [x.name, x.head, x.headcount, x.teams, "Multi-city"]))}</div>
        </div>
      `
    },
    {
      id: "teams", label: "Teams",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Teams", "Cross-functional teams within departments", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Create Team</button>
        `)}
        ${WF.teamGrid()}
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">All Teams</span><button data-screen="directory" class="wf-btn wf-btn--sm">View Members</button></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Team</th><th>Department</th><th>Lead</th><th>Members</th><th>City</th><th>Actions</th></tr></thead>
          <tbody>${d().teams.map((t) => `<tr><td>${t.name}</td><td>${t.department}</td><td>${t.lead}</td><td>${t.members}</td><td>${t.city}</td><td><button data-screen="directory" class="wf-btn wf-btn--sm">Members</button><button data-screen="org-chart" class="wf-btn wf-btn--sm">Chart</button></td></tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "org-chart", label: "Organization Chart",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Organization Chart", "Visual hierarchy — click any node for profile", `
          <button data-screen="hierarchy" class="wf-btn wf-btn--sm">Tree View</button>
          <button class="wf-btn wf-btn--sm">Export PNG</button>
        `)}
        <div class="wf-card"><div class="wf-card__body" style="padding:0;overflow:auto">${WF.orgChart()}</div></div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Legend</span></div>
          <div class="wf-card__body" style="font-size:12px;color:var(--wf-text-muted)">Click any employee node to open profile. Dashed lines indicate matrix reporting (not shown in this view).</div>
        </div>
      `
    },
    {
      id: "documents", label: "Employee Documents",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Employee Documents", "Identity proofs, employment records, and compliance docs", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Upload Document</button>
        `)}
        ${filters()}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Employee</th><th>Document</th><th>Type</th><th>Uploaded</th><th>Expiry</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${d().documents.map((doc) => `<tr>
          <td><a href="#" data-screen="profile">${doc.user}</a></td><td>${doc.name}</td><td>${doc.type}</td><td>${doc.uploaded}</td><td>${doc.expiry}</td>
          <td><span class="wf-badge${doc.status === "Verified" ? " wf-badge--dark" : ""}">${doc.status}</span></td>
          <td><button class="wf-btn wf-btn--sm">View</button><button class="wf-btn wf-btn--sm">Download</button></td>
        </tr>`).join("")}</tbody></table></div>
        ${WF.pagination(156, 1, 25)}
      `
    },
    {
      id: "leave", label: "Leave & Availability",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Leave & Availability", "Leave requests, balances, and team availability", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Apply Leave</button>
        `)}
        ${WF.kpiGrid([
          { label: "On Leave Today", value: k().onLeave },
          { label: "Pending Requests", value: 3 },
          { label: "Approved (Jun)", value: 24 },
          { label: "Available Staff", value: k().activeEmployees - k().onLeave }
        ])}
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Leave Records</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Employee</th><th>Type</th><th>From</th><th>To</th><th>Days</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>${d().leaveRecords.map((l) => `<tr>
            <td><a href="#" data-screen="profile">${l.user}</a></td><td>${l.type}</td><td>${l.from}</td><td>${l.to}</td><td>${l.days}</td>
            <td><span class="wf-badge${l.status === "Approved" ? " wf-badge--dark" : ""}">${l.status}</span></td>
            <td>${l.status === "Pending" ? '<button class="wf-btn wf-btn--sm">Approve</button><button class="wf-btn wf-btn--sm">Reject</button>' : '<button class="wf-btn wf-btn--sm">View</button>'}</td>
          </tr>`).join("")}</tbody></table></div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Team Availability — Bengaluru Sales</span></div>
          <div class="wf-card__body" style="font-size:13px">
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              ${["Himani Bhargava", "Abdul Syed", "—", "—"].map((n, i) => `<span class="wf-badge${n === "—" ? "" : " wf-badge--dark"}">${n === "—" ? "Available" : n + " — Available"}</span>`).join("")}
              <span class="wf-badge">Akshita — On Leave</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "skills", label: "Skills & Certifications",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Skills & Certifications", "Employee competencies, certifications, and languages", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Add Skill</button>
        `)}
        <div class="wf-card-grid" style="grid-template-columns:repeat(2,1fr)">
          ${d().skills.map((s) => `<div class="wf-card"><div class="wf-card__body" style="padding:20px">
            <div style="font-weight:600;margin-bottom:12px"><a href="#" data-screen="profile">${s.user}</a></div>
            <div style="font-size:13px;margin-bottom:8px"><strong>Skills:</strong> ${s.skills.join(", ")}</div>
            <div style="font-size:13px;margin-bottom:8px"><strong>Certifications:</strong> ${s.certs.length ? s.certs.join(", ") : "—"}</div>
            <div style="font-size:13px"><strong>Languages:</strong> ${s.languages.join(", ")}</div>
            <button data-screen="edit" class="wf-btn wf-btn--sm wf-mt-16">Edit</button>
          </div></div>`).join("")}
        </div>
      `
    },
    {
      id: "activity", label: "User Activity",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("User Activity", "System actions, logins, and CRM activity feed", exports())}
        ${filters()}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Activity Feed</span></div>
            <div class="wf-card__body">${WF.activityFeed(d().activities)}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Activity by Type</span></div>
            <div class="wf-card__body">${WF.chartCard("Activity Breakdown", "Bar Chart", { height: 280 })}</div>
          </div>
        </div>
      `
    },
    {
      id: "sessions", label: "Login Sessions",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("User Login Sessions", "Active and recent sessions across devices", `
          <button class="wf-btn wf-btn--sm">Revoke All Inactive</button>
        `)}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>User</th><th>Device</th><th>IP Address</th><th>Location</th><th>Started</th><th>Last Active</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${d().sessions.map((s) => `<tr>
          <td><a href="#" data-screen="profile">${s.user}</a></td><td>${s.device}</td><td>${s.ip}</td><td>${s.location}</td><td>${s.started}</td><td>${s.lastActive}</td>
          <td><span class="wf-badge${s.status === "Active" ? " wf-badge--dark" : ""}">${s.status}</span></td>
          <td>${s.status === "Active" ? '<button class="wf-btn wf-btn--sm">Revoke</button>' : "—"}</td>
        </tr>`).join("")}</tbody></table></div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Online Now (${k().onlineUsers})</span></div>
          <div class="wf-card__body" style="display:flex;flex-wrap:wrap;gap:8px">
            ${d().sessions.filter((s) => s.status === "Active").map((s) => `<span class="wf-badge wf-badge--dark">${s.user}</span>`).join("")}
          </div>
        </div>
      `
    },
    {
      id: "devices", label: "User Devices",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("User Devices", "Registered devices and trust status", `
          <button class="wf-btn wf-btn--sm">Revoke Untrusted</button>
        `)}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>User</th><th>Device</th><th>OS</th><th>Browser / App</th><th>Registered</th><th>Last Seen</th><th>Trusted</th><th>Actions</th></tr></thead>
        <tbody>${d().devices.map((dev) => `<tr>
          <td><a href="#" data-screen="profile">${dev.user}</a></td><td>${dev.type}</td><td>${dev.os}</td><td>${dev.browser}</td><td>${dev.registered}</td><td>${dev.lastSeen}</td>
          <td><span class="wf-badge${dev.trusted ? " wf-badge--dark" : ""}">${dev.trusted ? "Trusted" : "Untrusted"}</span></td>
          <td><button class="wf-btn wf-btn--sm">Revoke</button></td>
        </tr>`).join("")}</tbody></table></div>
      `
    },
    {
      id: "preferences", label: "User Preferences",
      render: () => {
        const p = d().preferences;
        return `
        ${roleBar()}
        ${WF.pageHeader("User Preferences", "Notification, display, and regional settings — Himani Bhargava", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">Save Preferences</button>
        `)}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Notifications</span></div>
            <div class="wf-card__body">
              <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Email notifications</label></div>
              <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> SMS notifications</label></div>
              <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Push notifications</label></div>
              <div class="wf-form__group"><label class="wf-form__label">Digest frequency</label><select class="wf-form__select"><option selected>${p.notifications.digest}</option><option>Weekly</option><option>Never</option></select></div>
            </div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Regional & Display</span></div>
            <div class="wf-card__body">
              <div class="wf-form__group"><label class="wf-form__label">Language</label><select class="wf-form__select"><option>${p.language}</option><option>Hindi</option></select></div>
              <div class="wf-form__group"><label class="wf-form__label">Timezone</label><select class="wf-form__select"><option>${p.timezone}</option></select></div>
              <div class="wf-form__group"><label class="wf-form__label">Date Format</label><select class="wf-form__select"><option>${p.dateFormat}</option></select></div>
              <div class="wf-form__group"><label class="wf-form__label">Theme</label><select class="wf-form__select"><option>${p.theme}</option><option>Light</option><option>Dark</option></select></div>
            </div>
          </div>
        </div>
      `;
      }
    },
    {
      id: "account-status", label: "Account Status",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Account Status", "Employee lifecycle status management", `
          <button data-screen="deactivate" class="wf-btn wf-btn--sm">Deactivate User</button>
        `)}
        ${WF.workflowStepper("Active", statuses())}
        <div class="wf-grid-2 wf-mt-16">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Status Breakdown</span></div>
            <div class="wf-card__body">${WF.reportDataTable(["Status", "Count", "Actions"], [
              ["Active", 231, "View"],
              ["On Leave", 8, "View"],
              ["Pending Verification", 3, "Review"],
              ["Invited", 2, "Resend"],
              ["Inactive", 2, "Reactivate"],
              ["Suspended", 1, "Review"],
              ["Archived", 1, "—"]
            ])}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Pending Actions</span></div>
            <div class="wf-card__body" style="font-size:13px">
              <div style="padding:8px 0;border-bottom:1px solid var(--wf-border-light)"><strong>Rahul Mehta</strong> — Pending Verification <button data-screen="details" class="wf-btn wf-btn--sm" style="float:right">Review</button></div>
              <div style="padding:8px 0;border-bottom:1px solid var(--wf-border-light)"><strong>Priya Nair</strong> — Invited <button data-modal="invite-user" class="wf-btn wf-btn--sm" style="float:right">Resend</button></div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "analytics", label: "User Analytics",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("User Analytics", "Workforce trends, attrition, and hiring metrics", exports())}
        ${WF.periodToggle("Last 12 months")}
        ${dashKpis()}
        <div class="wf-grid-2 wf-mb-20">
          ${WF.chartCard("Headcount Trend", "Line Chart", { height: 280 })}
          ${WF.chartCard("Hiring vs Attrition", "Grouped Bar", { height: 280 })}
        </div>
        <div class="wf-grid-2">
          ${WF.chartCard("Employees by City", "Bar Chart", { drillScreen: "directory" })}
          ${WF.chartCard("Role Distribution", "Pie Chart", {})}
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Department Growth</span></div>
          <div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Department", "Jan", "Jun", "Growth"], d().departmentStats.slice(0, 6).map((x, i) => [x.name, x.headcount - 10 + i, x.headcount, "+" + (10 - i)]))}</div>
        </div>
      `
    },
    {
      id: "bulk-import", label: "Bulk User Import",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Bulk User Import", "Import employees from CSV or Excel template", `
          <button data-action="confirm-bulk-import" class="wf-btn wf-btn--sm wf-btn--primary">Start Import</button>
        `)}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Upload File</span></div>
            <div class="wf-card__body">
              <div class="wf-form__group"><label class="wf-form__label">Select File</label><input type="file" class="wf-form__input" accept=".csv,.xlsx"></div>
              <button class="wf-btn wf-btn--sm">Download CSV Template</button>
              <button class="wf-btn wf-btn--sm">Download Excel Template</button>
              <div style="font-size:12px;color:var(--wf-text-muted);margin-top:16px">Max 500 rows per import. Duplicate emails will be flagged.</div>
            </div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Import Validation</span></div>
            <div class="wf-card__body">
              <div class="wf-props__check wf-props__check--ok">Unique Employee ID check</div>
              <div class="wf-props__check wf-props__check--ok">Unique Email check</div>
              <div class="wf-props__check wf-props__check--ok">Phone format validation</div>
              <div class="wf-props__check wf-props__check--ok">Department & Role validation</div>
              <div class="wf-props__check wf-props__check--ok">Manager reference validation</div>
              <div class="wf-props__check wf-props__check--ok">Duplicate user prevention</div>
            </div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recent Imports</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Date</th><th>File</th><th>Rows</th><th>Success</th><th>Failed</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>15 Jun 2024</td><td>hyderabad_sales_q2.xlsx</td><td>8</td><td>8</td><td>0</td><td><span class="wf-badge wf-badge--dark">Complete</span></td></tr>
            <tr><td>01 Jun 2024</td><td>new_hires_june.csv</td><td>3</td><td>2</td><td>1</td><td><span class="wf-badge">Partial</span></td></tr>
          </tbody></table></div>
        </div>
      `
    },
    {
      id: "bulk-export", label: "Bulk User Export",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Bulk User Export", "Export employee data for reporting and HRIS sync", exports())}
        <div class="wf-card"><div class="wf-card__body">
          <div class="wf-form__grid">
            <div class="wf-form__group"><label class="wf-form__label">Export Scope</label><select class="wf-form__select"><option>All Employees</option><option>By Department</option><option>By Team</option><option>Selected Only</option></select></div>
            <div class="wf-form__group"><label class="wf-form__label">Department</label><select class="wf-form__select">${d().departments.map((x) => `<option>${x}</option>`).join("")}</select></div>
            <div class="wf-form__group"><label class="wf-form__label">Status</label><select class="wf-form__select"><option>Active Only</option><option>All Statuses</option></select></div>
            <div class="wf-form__group"><label class="wf-form__label">Format</label><select class="wf-form__select"><option>Excel (.xlsx)</option><option>CSV</option><option>PDF Report</option></select></div>
            <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Include Fields</label>
              <div style="display:flex;flex-wrap:wrap;gap:12px;font-size:13px">
                ${["Personal Info", "Employment", "Contact", "Skills", "Documents", "Bank Details"].map((f) => `<label><input type="checkbox" checked> ${f}</label>`).join("")}
              </div>
            </div>
          </div>
          <div class="wf-form__actions" style="margin-top:20px">
            <button class="wf-btn" data-action="export-excel">Export Excel</button>
            <button class="wf-btn" data-action="export-csv">Export CSV</button>
            <button class="wf-btn wf-btn--primary" data-action="export-pdf">Export PDF</button>
          </div>
        </div></div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recent Exports</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Date</th><th>Exported By</th><th>Scope</th><th>Format</th><th>Records</th></tr></thead>
          <tbody>
            <tr><td>21 Jun 2024</td><td>Om Anil</td><td>All — Q2 Headcount</td><td>Excel</td><td>248</td></tr>
            <tr><td>10 Jun 2024</td><td>Swetha</td><td>HR — Active</td><td>CSV</td><td>231</td></tr>
          </tbody></table></div>
        </div>
      `
    },
    {
      id: "invite", label: "Invite User",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Invite User", "Send email invitation to join the organization", `
          <button data-modal="invite-user" class="wf-btn wf-btn--sm wf-btn--primary">Send Invite</button>
        `)}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__body">
            <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Email Address</label><input type="email" class="wf-form__input" placeholder="employee@company.com" value="priya.nair@franchisecrm.com"></div>
            <div class="wf-form__group"><label class="wf-form__label">Full Name</label><input class="wf-form__input" value="Priya Nair"></div>
            <div class="wf-form__group"><label class="wf-form__label">Role</label><select class="wf-form__select"><option>Sales Executive</option><option>Team Lead</option></select></div>
            <div class="wf-form__group"><label class="wf-form__label">Department</label><select class="wf-form__select"><option>Sales</option></select></div>
            <div class="wf-form__group"><label class="wf-form__label">Team</label><select class="wf-form__select"><option>Kochi Sales</option></select></div>
            <div class="wf-form__group"><label class="wf-form__label">Manager</label><select class="wf-form__select"><option>Himani Bhargava</option></select></div>
            <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Welcome Message</label><textarea class="wf-form__textarea">Welcome to iFranchise CRM! Complete your profile to get started.</textarea></div>
            <button data-modal="invite-user" class="wf-btn wf-btn--primary">Send Invitation</button>
          </div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Pending Invitations (${k().pendingInvitations})</span></div>
            <div class="wf-card__body" style="font-size:13px">
              <div style="padding:10px 0;border-bottom:1px solid var(--wf-border-light)"><strong>Priya Nair</strong><br>priya.nair@franchisecrm.com · Sent 22 Jun<br><button data-modal="invite-user" class="wf-btn wf-btn--sm wf-mt-8">Resend</button> <button class="wf-btn wf-btn--sm">Cancel</button></div>
              <div style="padding:10px 0;border-bottom:1px solid var(--wf-border-light)"><strong>Vikram Singh</strong><br>vikram@email.com · Sent 20 Jun<br><button class="wf-btn wf-btn--sm wf-mt-8">Resend</button> <button class="wf-btn wf-btn--sm">Cancel</button></div>
            </div>
          </div>
        </div>
        ${WF.workflowStepper("Invited", statuses())}
      `
    },
    {
      id: "deactivate", label: "Deactivate User",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Deactivate User", "Offboard employee and revoke system access", `
          <button data-modal="deactivate-user" class="wf-btn wf-btn--sm wf-btn--primary">Confirm Deactivation</button>
        `)}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__body">
            <div class="wf-form__group"><label class="wf-form__label">Select Employee</label><select class="wf-form__select">${d().users.filter((u) => u.status === "Active").map((u) => `<option>${u.name} (${u.employeeId})</option>`).join("")}</select></div>
            <div class="wf-form__group"><label class="wf-form__label">Reason</label><select class="wf-form__select"><option>Resignation</option><option>Termination</option><option>End of Contract</option><option>Leave of Absence</option></select></div>
            <div class="wf-form__group"><label class="wf-form__label">Effective Date</label><input type="date" class="wf-form__input" value="2024-06-30"></div>
            <div class="wf-form__group"><label class="wf-form__label">Reassign Leads To</label><select class="wf-form__select"><option>Diksha</option><option>Abrar</option><option>Abdul Syed</option></select></div>
            <div class="wf-form__group"><label class="wf-form__label">Reassign Customers To</label><select class="wf-form__select"><option>Diksha</option><option>Abdul Syed</option></select></div>
            <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Notes</label><textarea class="wf-form__textarea" placeholder="Internal offboarding notes…"></textarea></div>
            <button data-modal="deactivate-user" class="wf-btn wf-btn--primary">Deactivate User</button>
          </div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Deactivation Checklist</span></div>
            <div class="wf-card__body" style="font-size:13px">
              <label style="display:block;padding:6px 0"><input type="checkbox" checked> Revoke system access</label>
              <label style="display:block;padding:6px 0"><input type="checkbox" checked> Reassign open leads</label>
              <label style="display:block;padding:6px 0"><input type="checkbox" checked> Reassign customers</label>
              <label style="display:block;padding:6px 0"><input type="checkbox" checked> Revoke active sessions</label>
              <label style="display:block;padding:6px 0"><input type="checkbox"> Archive email forwarding</label>
              <label style="display:block;padding:6px 0"><input type="checkbox" checked> Notify manager</label>
            </div>
          </div>
        </div>
        ${WF.errorState("This action changes account status to Inactive", "User will lose CRM access immediately. Data is retained per retention policy.")}
      `
    },
    {
      id: "timeline", label: "User Timeline",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("User Timeline", "Complete lifecycle history — Abdul Syed", `
          <button data-screen="profile" class="wf-btn wf-btn--sm">View Profile</button>
          <button data-screen="activity" class="wf-btn wf-btn--sm">Activity Feed</button>
        `)}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Employee Lifecycle</span></div>
            <div class="wf-card__body">${WF.timeline(d().timeline)}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Status History</span></div>
            <div class="wf-card__body">${WF.workflowStepper("Active", statuses())}
              <div style="font-size:12px;color:var(--wf-text-muted);margin-top:16px">
                Invited → Pending Verification (2022-02-10) → Active (2022-02-14)
              </div>
            </div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recent Events</span></div>
          <div class="wf-card__body">${WF.activityFeed(d().activities.filter((a) => a.user === "Abdul Syed" || a.user === "Himani Bhargava").slice(0, 4))}</div>
        </div>
      `
    }
  ];

  function init() {
    WF.resetViewRole(activeRole);
    WF_SPA.init({
      moduleKey: "users",
      moduleLabel: "User Management",
      moduleTitle: "User Management",
      moduleHref: "/",
      defaultScreen: "dashboard",
      searchPlaceholder: "Search employees, departments, teams, roles…",
      modals: WF.userModals,
      screens
    });

  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => USERS_MODULE.init());
