/* Audit & Activity Logs — Single Page Module (25 screens) */

const AUDIT_MODULE = (() => {
  const d = () => AUDIT_DATA;
  const k = () => d().kpis;
  let activeRole = "Security Administrator";

  const roleBar = () => WF.roleSwitcher(WF.getViewRole(activeRole), d().viewRoles);
  const filters = () => WF.auditToolbar();
  const exports = () => WF.reportActions();
  const sampleLog = () => d().logs[0];

  const dashKpis = () => WF.kpiGrid([
    { label: "Today's Activities", value: k().todayActivities.toLocaleString() },
    { label: "Failed Logins", value: k().failedLogins, change: "last 24h" },
    { label: "Successful Logins", value: k().successfulLogins },
    { label: "Security Alerts", value: k().securityAlerts },
    { label: "Critical Events", value: k().criticalEvents },
    { label: "Recent Changes", value: k().recentChanges },
    { label: "API Calls", value: (k().apiCalls / 1000).toFixed(1) + "K", change: "today" },
    { label: "DB Changes", value: k().databaseChanges, small: true }
  ]);

  const logScreen = (title, subtitle, logs, extra) => `
    ${roleBar()}
    ${WF.pageHeader(title, subtitle, exports())}
    ${filters()}
    ${extra || ""}
    ${WF.auditLogTable(logs)}
    ${WF.pagination(12480, 1, 50)}
  `;

  const screens = [
    {
      id: "dashboard", label: "Audit Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Audit Dashboard", "Activity overview, security metrics, and compliance monitoring", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="explorer" class="wf-btn wf-btn--sm">Log Explorer</button>
          <button data-modal="export-audit" class="wf-btn wf-btn--sm wf-btn--primary">Export Logs</button>
        `)}
        ${WF.periodToggle("Today")}
        ${dashKpis()}
        <div class="wf-grid-2 wf-mb-20">
          ${WF.chartCard("Activity Over Time", "Area Chart", { height: 240, drillScreen: "timeline" })}
          ${WF.chartCard("Events by Module", "Bar Chart", { height: 240, drillScreen: "module-logs" })}
        </div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Activity Heatmap</span><button data-screen="timeline" class="wf-btn wf-btn--sm">Timeline</button></div>
            <div class="wf-card__body">${WF.activityHeatmap()}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Most Active Users</span></div>
            <div class="wf-card__body" style="padding:0">${WF.reportDataTable(["User", "Events"], d().mostActiveUsers)}</div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recent Audit Entries</span><button data-screen="explorer" class="wf-btn wf-btn--sm">View All</button></div>
          <div class="wf-card__body" style="padding:0">${WF.auditLogTable(d().logs.slice(0, 6))}</div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Quick Actions</span></div>
          <div class="wf-card__body" style="display:flex;flex-wrap:wrap;gap:8px">
            <button data-screen="security-events" class="wf-btn wf-btn--sm">Security Events</button>
            <button data-screen="failed-login" class="wf-btn wf-btn--sm">Failed Logins</button>
            <button data-screen="data-changes" class="wf-btn wf-btn--sm">Data Changes</button>
            <button data-screen="compliance" class="wf-btn wf-btn--sm">Compliance</button>
            <button data-screen="suspicious" class="wf-btn wf-btn--sm">Suspicious Activity</button>
            <button data-screen="deleted-records" class="wf-btn wf-btn--sm">Deleted Records</button>
          </div>
        </div>
      `
    },
    {
      id: "timeline", label: "Activity Timeline",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Activity Timeline", "Chronological view of all system activity", exports())}
        ${filters()}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Today — 25 Jun 2024</span></div>
            <div class="wf-card__body">${WF.timeline(d().timeline)}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Activity Feed</span></div>
            <div class="wf-card__body">${WF.activityFeed(d().logs.slice(0, 8).map((l) => ({ title: l.action + " — " + l.module, user: l.user, time: l.timestamp.split(",")[1]?.trim() || l.timestamp, desc: l.recordId + (l.reason ? ": " + l.reason : "") })))}</div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Heatmap</span></div>
          <div class="wf-card__body">${WF.activityHeatmap()}</div>
        </div>
      `
    },
    {
      id: "explorer", label: "Audit Log Explorer",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Audit Log Explorer", "Search and filter immutable audit records", `
          <button data-modal="export-audit" class="wf-btn wf-btn--sm">Export</button>
          <button class="wf-btn wf-btn--sm wf-btn--primary">Save Filter</button>
        `)}
        ${filters()}
        <div class="wf-card wf-mb-16"><div class="wf-card__body" style="padding:0">${WF.auditLogTable(d().logs)}</div></div>
        ${WF.auditDetailPanel(sampleLog())}
        ${WF.pagination(12480, 1, 50)}
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Validation</span></div>
          <div class="wf-card__body" style="font-size:13px">
            <div class="wf-props__check wf-props__check--ok">Immutable audit records — append only</div>
            <div class="wf-props__check wf-props__check--ok">Sensitive data masked in exports</div>
            <div class="wf-props__check wf-props__check--ok">Retention policy: 7 years</div>
            <div class="wf-props__check wf-props__check--ok">Export permission validated</div>
          </div>
        </div>
      `
    },
    {
      id: "user-activity", label: "User Activity History",
      render: () => logScreen("User Activity History", "Per-user activity across all modules", d().logs, `
        <div class="wf-card wf-mb-16"><div class="wf-card__body">
          <div class="wf-form__grid">
            <div class="wf-form__group"><label class="wf-form__label">Employee</label><select class="wf-form__select">${d().users.map((u) => `<option>${u}</option>`).join("")}</select></div>
            <div class="wf-form__group"><label class="wf-form__label">Date Range</label><select class="wf-form__select"><option>Last 7 days</option><option>Last 30 days</option></select></div>
          </div>
        </div></div>`)
    },
    {
      id: "login-history", label: "Login History",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Login History", "Successful authentication events", exports())}
        ${filters()}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>User</th><th>Time</th><th>IP Address</th><th>Device</th><th>Location</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${d().loginHistory.filter((l) => l.status === "Success").map((l) => `<tr>
          <td><a href="#" data-screen="user-activity">${l.user}</a></td><td>${l.time}</td><td>${l.ip}</td><td>${l.device}</td><td>${l.location}</td>
          <td><span class="wf-badge wf-badge--dark">${l.status}</span></td><td><button data-screen="explorer" class="wf-btn wf-btn--sm">Audit</button></td>
        </tr>`).join("")}</tbody></table></div>
        ${WF.pagination(1560, 1, 50)}
      `
    },
    {
      id: "logout-history", label: "Logout History",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Logout History", "Session termination events", exports())}
        ${filters()}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>User</th><th>Time</th><th>IP</th><th>Session Duration</th><th>Reason</th></tr></thead>
        <tbody>${d().logoutHistory.map((l) => `<tr><td>${l.user}</td><td>${l.time}</td><td>${l.ip}</td><td>${l.session}</td><td>${l.reason}</td></tr>`).join("")}</tbody></table></div>
        ${WF.pagination(890, 1, 50)}
      `
    },
    {
      id: "failed-login", label: "Failed Login Attempts",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Failed Login Attempts", "Blocked and failed authentication — security review", `
          <button data-screen="suspicious" class="wf-btn wf-btn--sm">Suspicious Activity</button>
        `)}
        ${WF.errorState(k().failedLogins + " failed login attempts in the last 24 hours", "Review IP blocks, MFA failures, and brute force patterns.")}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Time</th><th>Username</th><th>IP</th><th>Attempts</th><th>Reason</th><th>Severity</th><th>Actions</th></tr></thead>
        <tbody>${d().failedLogins.map((f) => `<tr>
          <td>${f.time}</td><td>${f.user}</td><td>${f.ip}</td><td>${f.attempts}</td><td>${f.reason}</td>
          <td>${WF.severityBadge(f.severity)}</td><td><button data-screen="security-events" class="wf-btn wf-btn--sm">Investigate</button></td>
        </tr>`).join("")}</tbody></table></div>
      `
    },
    {
      id: "security-events", label: "Security Events",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Security Events", "Threat detection, access violations, and policy breaches", `
          <button data-screen="security-dashboard" class="wf-btn wf-btn--sm">Security Dashboard</button>
        `)}
        ${filters()}
        ${WF.securityEventList(d().securityEvents)}
      `
    },
    {
      id: "system-events", label: "System Events",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("System Events", "Backups, maintenance, sync jobs, and infrastructure", exports())}
        ${filters()}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Time</th><th>Event</th><th>Detail</th><th>Status</th></tr></thead>
        <tbody>${d().systemEvents.map((e) => `<tr><td>${e.time}</td><td>${e.event}</td><td style="font-size:12px">${e.detail}</td><td><span class="wf-badge${e.status === "Success" ? " wf-badge--dark" : ""}">${e.status}</span></td></tr>`).join("")}</tbody></table></div>
      `
    },
    {
      id: "module-logs", label: "Module Activity Logs",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Module Activity Logs", "Activity grouped by CRM module", exports())}
        ${filters()}
        <div class="wf-card-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:20px">
          ${d().moduleActivity.map(([m, c]) => `<div class="wf-card" style="cursor:pointer" data-screen="explorer"><div class="wf-card__body" style="padding:16px;text-align:center">
            <div style="font-size:13px;font-weight:600">${m}</div>
            <div style="font-size:24px;font-weight:700;margin:8px 0">${c}</div>
            <button class="wf-btn wf-btn--sm" data-screen="explorer">View Logs</button>
          </div></div>`).join("")}
        </div>
        ${WF.auditLogTable(d().logs)}
        ${WF.pagination(8420, 1, 50)}
      `
    },
    {
      id: "data-changes", label: "Data Change History",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Data Change History", "Before/after values for all record modifications", exports())}
        ${filters()}
        ${WF.auditLogTable(d().logs.filter((l) => ["Update", "Create", "Delete"].includes(l.action)))}
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Sample Change Detail</span></div>
          <div class="wf-card__body">${WF.auditDetailPanel(d().logs[0])}</div>
        </div>
      `
    },
    {
      id: "version-history", label: "Record Version History",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Record Version History", "Versioned snapshots of record changes", exports())}
        ${filters()}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Record ID</th><th>Module</th><th>Version</th><th>Changed By</th><th>Time</th><th>Change</th><th>Actions</th></tr></thead>
        <tbody>${d().versionHistory.map((v) => `<tr>
          <td>${v.recordId}</td><td>${v.module}</td><td>v${v.version}</td><td>${v.user}</td><td>${v.time}</td><td>${v.change}</td>
          <td><button data-screen="data-changes" class="wf-btn wf-btn--sm">Diff</button><button class="wf-btn wf-btn--sm">Restore</button></td>
        </tr>`).join("")}</tbody></table></div>
      `
    },
    {
      id: "deleted-records", label: "Deleted Records",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Deleted Records", "Soft-deleted records available for restore", `
          <button data-screen="restore-records" class="wf-btn wf-btn--sm wf-btn--primary">Restore Records</button>
        `)}
        ${filters()}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Module</th><th>Record ID</th><th>Name</th><th>Deleted By</th><th>Deleted At</th><th>Reason</th><th>Actions</th></tr></thead>
        <tbody>${d().deletedRecords.map((r) => `<tr>
          <td>${r.module}</td><td>${r.recordId}</td><td>${r.name}</td><td>${r.deletedBy}</td><td>${r.deletedAt}</td><td style="font-size:12px">${r.reason}</td>
          <td><button data-modal="restore-record" class="wf-btn wf-btn--sm">Restore</button><button data-screen="explorer" class="wf-btn wf-btn--sm">Audit</button></td>
        </tr>`).join("")}</tbody></table></div>
      `
    },
    {
      id: "restore-records", label: "Restore Records",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Restore Records", "Recover deleted records with full audit trail", `
          <button data-modal="restore-record" class="wf-btn wf-btn--sm wf-btn--primary">Restore Selected</button>
        `)}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Available for Restore</span></div>
            <div class="wf-card__body" style="padding:0">
              <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th></th><th>Record</th><th>Module</th><th>Deleted</th></tr></thead>
              <tbody>${d().deletedRecords.map((r) => `<tr><td><span class="wf-table__checkbox"></span></td><td>${r.name} (${r.recordId})</td><td>${r.module}</td><td>${r.deletedAt}</td></tr>`).join("")}</tbody></table></div>
            </div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Restore Policy</span></div>
            <div class="wf-card__body" style="font-size:13px">
              <div class="wf-props__check wf-props__check--ok">Restore action logged immutably</div>
              <div class="wf-props__check wf-props__check--ok">Permission validation required</div>
              <div class="wf-props__check wf-props__check--ok">Retention window: 90 days</div>
              <div class="wf-props__check wf-props__check--warn">Note: PII records require Compliance Officer approval</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "export", label: "Export Audit Logs",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Export Audit Logs", "CSV, PDF, and JSON exports with compliance controls", `
          <button data-modal="export-audit" class="wf-btn wf-btn--sm wf-btn--primary">Start Export</button>
        `)}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__body">
            <div class="wf-form__group"><label class="wf-form__label">Date Range</label><select class="wf-form__select"><option>Last 7 days</option><option>Last 30 days</option><option>Custom</option></select></div>
            <div class="wf-form__group"><label class="wf-form__label">Modules</label><select class="wf-form__select" multiple style="height:100px">${d().modules.map((m) => `<option>${m}</option>`).join("")}</select></div>
            <div class="wf-form__group"><label class="wf-form__label">Format</label><select class="wf-form__select"><option>CSV</option><option>PDF</option><option>JSON</option></select></div>
            <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Mask sensitive data</label></div>
            <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox"> Include before/after values</label></div>
            <button data-action="export-csv" class="wf-btn wf-btn--sm">Export CSV</button>
            <button data-action="export-pdf" class="wf-btn wf-btn--sm">Export PDF</button>
            <button data-modal="export-audit" class="wf-btn wf-btn--primary wf-mt-16">Export</button>
          </div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Export Validation</span></div>
            <div class="wf-card__body">
              <div class="wf-props__check wf-props__check--ok">Export permission validated</div>
              <div class="wf-props__check wf-props__check--ok">Sensitive data masking enabled</div>
              <div class="wf-props__check wf-props__check--ok">Date range within retention policy</div>
              <div class="wf-props__check wf-props__check--ok">Export logged in audit trail</div>
            </div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recent Exports</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Date</th><th>Exported By</th><th>Scope</th><th>Format</th><th>Records</th></tr></thead>
          <tbody>
            <tr><td>22 Jun 2024</td><td>Sumanth</td><td>Full audit — Q2</td><td>PDF</td><td>2,400</td></tr>
            <tr><td>15 Jun 2024</td><td>Compliance Officer</td><td>Login history — 90d</td><td>CSV</td><td>1,560</td></tr>
          </tbody></table></div>
        </div>
      `
    },
    {
      id: "compliance", label: "Compliance Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Compliance Reports", "SOC 2, GDPR, and regulatory audit reports", exports())}
        <div class="wf-card-grid" style="grid-template-columns:repeat(2,1fr)">
          ${d().complianceReports.map((r) => `<div class="wf-card"><div class="wf-card__body" style="padding:20px">
            <div style="font-weight:600;margin-bottom:8px">${r.name}</div>
            <div style="font-size:12px;color:var(--wf-text-muted)">Period: ${r.period}</div>
            <div style="margin:12px 0"><span class="wf-badge${r.status === "Ready" ? " wf-badge--dark" : ""}">${r.status}</span></div>
            <div style="font-size:12px">Last generated: ${r.lastGenerated}</div>
            <button class="wf-btn wf-btn--sm wf-mt-16">Generate</button>
            <button data-action="export-pdf" class="wf-btn wf-btn--sm">Download PDF</button>
          </div></div>`).join("")}
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Retention Policy</span></div>
          <div class="wf-card__body" style="font-size:13px;line-height:1.8">
            <div><strong>Audit logs:</strong> 7 years (immutable)</div>
            <div><strong>Login history:</strong> 2 years</div>
            <div><strong>Deleted records:</strong> 90 days soft-delete window</div>
            <div><strong>API logs:</strong> 1 year</div>
          </div>
        </div>
      `
    },
    {
      id: "security-dashboard", label: "Security Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Security Dashboard", "Real-time security posture and threat overview", `
          <button data-screen="security-events" class="wf-btn wf-btn--sm">All Events</button>
        `)}
        ${dashKpis()}
        <div class="wf-grid-2 wf-mb-20">
          ${WF.chartCard("Failed vs Successful Logins", "Line Chart", { height: 240, drillScreen: "failed-login" })}
          ${WF.chartCard("Security Events by Severity", "Donut Chart", { height: 240, drillScreen: "security-events" })}
        </div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Active Threats</span><button data-screen="suspicious" class="wf-btn wf-btn--sm">Investigate</button></div>
          <div class="wf-card__body">${WF.securityEventList(d().securityEvents.slice(0, 3), { compact: true })}</div>
        </div>
      `
    },
    {
      id: "suspicious", label: "Suspicious Activity",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Suspicious Activity", "Anomaly detection and risk-scored events", `
          <button data-screen="failed-login" class="wf-btn wf-btn--sm">Failed Logins</button>
        `)}
        ${WF.errorState("3 suspicious activities detected in the last 24 hours", "Review and escalate to Security Administrator.")}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>User</th><th>Activity</th><th>IP</th><th>Risk</th><th>Time</th><th>Actions</th></tr></thead>
        <tbody>${d().suspiciousActivity.map((s) => `<tr>
          <td>${s.user}</td><td>${s.activity}</td><td>${s.ip}</td><td>${WF.severityBadge(s.risk)}</td><td>${s.time}</td>
          <td><button data-screen="security-events" class="wf-btn wf-btn--sm">Investigate</button><button class="wf-btn wf-btn--sm">Block IP</button></td>
        </tr>`).join("")}</tbody></table></div>
      `
    },
    {
      id: "api-logs", label: "API Activity Logs",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("API Activity Logs", "REST API requests, responses, and latency", exports())}
        ${filters()}
        <div class="wf-kpi-grid wf-mb-16">${WF.kpiGrid([{ label: "API Calls Today", value: k().apiCalls.toLocaleString() }, { label: "Errors", value: 12 }, { label: "Avg Latency", value: "142ms" }, { label: "4xx/5xx Rate", value: "0.09%" }])}</div>
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Time</th><th>Method</th><th>Endpoint</th><th>User</th><th>Status</th><th>Duration</th></tr></thead>
        <tbody>${d().apiLogs.map((a) => `<tr><td>${a.time}</td><td><span class="wf-badge">${a.method}</span></td><td style="font-family:monospace;font-size:12px">${a.endpoint}</td><td>${a.user}</td><td><span class="wf-badge${a.status === 200 ? " wf-badge--dark" : ""}">${a.status}</span></td><td>${a.duration}</td></tr>`).join("")}</tbody></table></div>
        ${WF.pagination(12840, 1, 50)}
      `
    },
    {
      id: "integration-logs", label: "Integration Logs",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Integration Logs", "Third-party service events — SendGrid, Twilio, Razorpay", exports())}
        ${filters()}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Integration</th><th>Event</th><th>Status</th><th>Time</th><th>Detail</th></tr></thead>
        <tbody>${d().integrationLogs.map((i) => `<tr><td>${i.integration}</td><td>${i.event}</td><td><span class="wf-badge${i.status === "Success" ? " wf-badge--dark" : ""}">${i.status}</span></td><td>${i.time}</td><td style="font-size:12px">${i.detail}</td></tr>`).join("")}</tbody></table></div>
      `
    },
    {
      id: "notification-logs", label: "Notification Logs",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Notification Logs", "In-app, push, and multi-channel delivery audit", `
          <button data-screen="email-logs" class="wf-btn wf-btn--sm">Email Logs</button>
        `)}
        ${filters()}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>ID</th><th>Type</th><th>Recipient</th><th>Channel</th><th>Status</th><th>Time</th></tr></thead>
        <tbody>${d().notificationLogs.map((n) => `<tr><td>${n.id}</td><td>${n.type}</td><td>${n.recipient}</td><td>${n.channel}</td><td><span class="wf-badge wf-badge--dark">${n.status}</span></td><td>${n.time}</td></tr>`).join("")}</tbody></table></div>
      `
    },
    {
      id: "email-logs", label: "Email Logs",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Email Logs", "Outbound email delivery, opens, and bounces", exports())}
        ${filters()}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>To</th><th>Subject</th><th>Status</th><th>Time</th><th>Opens</th></tr></thead>
        <tbody>${d().emailLogs.map((e) => `<tr><td style="font-size:12px">${e.to}</td><td>${e.subject}</td><td><span class="wf-badge${e.status === "Delivered" ? " wf-badge--dark" : ""}">${e.status}</span></td><td>${e.time}</td><td>${e.opens}</td></tr>`).join("")}</tbody></table></div>
      `
    },
    {
      id: "automation-logs", label: "Automation Execution Logs",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Automation Execution Logs", "Workflow runs linked to audit trail", `
          <button data-screen="error-logs" class="wf-btn wf-btn--sm">Error Logs</button>
        `)}
        ${WF.kpiGrid([{ label: "Executions Today", value: k().automationExecutions }, { label: "Failed", value: 12 }, { label: "Success Rate", value: "96.8%" }])}
        <div class="wf-table-wrap wf-mt-16"><table class="wf-table"><thead><tr><th>Execution ID</th><th>Workflow</th><th>Trigger</th><th>Status</th><th>Duration</th><th>Time</th><th>Actions</th></tr></thead>
        <tbody>${d().automationLogs.map((a) => `<tr>
          <td>${a.executionId}</td><td>${a.workflow}</td><td>${a.trigger}</td>
          <td><span class="wf-badge${a.status === "Success" ? " wf-badge--dark" : ""}">${a.status}</span></td><td>${a.duration}</td><td>${a.time}</td>
          <td><button data-screen="explorer" class="wf-btn wf-btn--sm">Audit</button></td>
        </tr>`).join("")}</tbody></table></div>
      `
    },
    {
      id: "error-logs", label: "Error Logs",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Error Logs", "Application errors, warnings, and critical failures", exports())}
        ${filters()}
        ${WF.errorState("4 errors in the last 24 hours", "Review Automation, API, and Integration modules.")}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Time</th><th>Level</th><th>Module</th><th>Message</th><th>Count</th><th>Actions</th></tr></thead>
        <tbody>${d().errorLogs.map((e) => `<tr>
          <td>${e.time}</td><td>${WF.severityBadge(e.level)}</td><td>${e.module}</td><td style="font-size:12px">${e.message}</td><td>${e.count}</td>
          <td><button data-screen="explorer" class="wf-btn wf-btn--sm">Trace</button></td>
        </tr>`).join("")}</tbody></table></div>
      `
    },
    {
      id: "database-logs", label: "Database Activity Logs",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Database Activity Logs", "Table operations, row changes, and query audit", exports())}
        ${filters()}
        ${WF.kpiGrid([{ label: "Changes Today", value: k().databaseChanges }, { label: "INSERT", value: 42 }, { label: "UPDATE", value: 38 }, { label: "DELETE", value: 9 }])}
        <div class="wf-table-wrap wf-mt-16"><table class="wf-table"><thead><tr><th>Time</th><th>Table</th><th>Operation</th><th>User</th><th>Rows</th><th>Duration</th></tr></thead>
        <tbody>${d().databaseLogs.map((db) => `<tr><td>${db.time}</td><td style="font-family:monospace">${db.table}</td><td><span class="wf-badge">${db.operation}</span></td><td>${db.user}</td><td>${db.rows}</td><td>${db.duration}</td></tr>`).join("")}</tbody></table></div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Immutable Storage</span></div>
          <div class="wf-card__body" style="font-size:13px">All database changes are captured via triggers and stored in append-only audit tables. Records cannot be modified or deleted.</div>
        </div>
      `
    }
  ];

  function init() {
    WF.resetViewRole(activeRole);
    WF_SPA.init({
      moduleKey: "audit",
      moduleLabel: "Audit & Activity Logs",
      moduleTitle: "Audit & Activity Logs",
      moduleHref: "/",
      defaultScreen: "dashboard",
      searchPlaceholder: "Search audit logs, users, modules, events…",
      modals: WF.auditModals,
      screens
    });

  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => AUDIT_MODULE.init());
