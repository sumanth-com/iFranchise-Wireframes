/* System Configuration — Single Page Module (50 screens) */

const SETTINGS_MODULE = (() => {
  const d = () => CONFIG_DATA;
  const k = () => d().kpis;
  let activeRole = "Super Admin";

  const roleBar = () => WF.roleSwitcher(activeRole, d().viewRoles);
  const exports = () => WF.reportActions();

  const dashKpis = () => WF.kpiGrid([
    { label: "System Health", value: k().systemHealth },
    { label: "Storage Usage", value: k().storageUsage },
    { label: "API Usage Today", value: k().apiUsage },
    { label: "Database", value: k().databaseStatus },
    { label: "Backup", value: "OK", change: k().backupStatus, small: true },
    { label: "Security Score", value: k().securityScore + "/100" },
    { label: "Active Users", value: k().activeUsers },
    { label: "License", value: k().licenseStatus }
  ]);

  const cfg = (screenId, title, subtitle, body, actions = "") => `
    ${roleBar()}
    ${WF.pageHeader(title, subtitle, actions)}
    ${WF.configLayout(screenId, body)}
  `;

  const formCard = (content) => `<div class="wf-card"><div class="wf-card__body">${content}</div></div>`;

  const statusGrid = () => `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px">
    ${WF.statusIndicator("System", k().systemHealth)}
    ${WF.statusIndicator("Database", k().databaseStatus, "PostgreSQL 15")}
    ${WF.statusIndicator("Backup", "OK", k().backupStatus)}
    ${WF.statusIndicator("API", "Healthy", k().apiUsage + " calls")}
    ${WF.statusIndicator("Cache", "Healthy", "Redis 7.2")}
    ${WF.statusIndicator("Queue", "Healthy", "8 pending jobs")}
  </div>`;

  const screens = [
    {
      id: "dashboard", label: "System Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("System Dashboard", "Configuration overview, health metrics, and quick settings", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="maintenance" class="wf-btn wf-btn--sm">Maintenance</button>
          <button data-screen="company" class="wf-btn wf-btn--sm wf-btn--primary">Settings</button>
        `)}
        ${dashKpis()}
        ${statusGrid()}
        <div class="wf-grid-2 wf-mb-20">
          ${WF.chartCard("API Usage", "Line Chart", { height: 220, drillScreen: "api" })}
          ${WF.chartCard("Storage Trend", "Area Chart", { height: 220, drillScreen: "storage" })}
        </div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Configuration Changes</span><button data-screen="system-logs" class="wf-btn wf-btn--sm">Logs</button></div>
            <div class="wf-card__body" style="font-size:13px">${d().recentActivities.map((a) => `<div style="padding:8px 0;border-bottom:1px solid var(--wf-border-light)"><strong>${a.action}</strong><br><span style="font-size:12px;color:var(--wf-text-muted)">${a.user} · ${a.time}</span></div>`).join("")}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Quick Actions</span></div>
            <div class="wf-card__body" style="display:flex;flex-wrap:wrap;gap:8px">
              <button data-screen="feature-flags" class="wf-btn wf-btn--sm">Feature Flags</button>
              <button data-screen="integrations" class="wf-btn wf-btn--sm">Integrations</button>
              <button data-screen="backup" class="wf-btn wf-btn--sm">Backup</button>
              <button data-screen="security" class="wf-btn wf-btn--sm">Security</button>
              <button data-screen="license" class="wf-btn wf-btn--sm">License</button>
              <button data-screen="about" class="wf-btn wf-btn--sm">About</button>
            </div>
          </div>
        </div>
        ${WF.storageUsagePanel()}
      `
    },
    { id: "company", label: "Company Settings", render: () => cfg("company", "Company Settings", "Legal entity, contact, and regional defaults", formCard(WF.companySettingsForm()), `<button data-screen="organization" class="wf-btn wf-btn--sm">Organization →</button>`) },
    {
      id: "organization", label: "Organization Profile",
      render: () => cfg("organization", "Organization Profile", "Corporate structure and legal details", formCard(`<form class="wf-form" id="wf-settings-form">
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Legal Name</label><input class="wf-form__input" value="iFranchise Technologies Pvt. Ltd."></div>
          <div class="wf-form__group"><label class="wf-form__label">Trade Name</label><input class="wf-form__input" value="iFranchise"></div>
          <div class="wf-form__group"><label class="wf-form__label">CIN</label><input class="wf-form__input" value="U72900KA2019PTC123456"></div>
          <div class="wf-form__group"><label class="wf-form__label">Corporate Office</label><input class="wf-form__input" value="Bengaluru, Karnataka"></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Registered Address</label><textarea class="wf-form__textarea">${d().company.address}</textarea></div>
        </div>${WF.settingsFormFooter()}</form>`), `<button data-screen="branches" class="wf-btn wf-btn--sm">Branches</button>`)
    },
    {
      id: "branches", label: "Branch Management",
      render: () => cfg("branches", "Branch Management", "Office locations and regional operations", `
        <button class="wf-btn wf-btn--sm wf-btn--primary wf-mb-16">+ Add Branch</button>
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Branch</th><th>City</th><th>Head</th><th>Employees</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${d().branches.map((b) => `<tr><td>${b.name}</td><td>${b.city}</td><td>${b.head}</td><td>${b.employees}</td><td><span class="wf-badge wf-badge--dark">${b.status}</span></td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>`).join("")}</tbody></table></div>
      `)
    },
    {
      id: "business-hours", label: "Business Hours",
      render: () => cfg("business-hours", "Business Hours", "Operating hours for SLA and automation", formCard(`<form class="wf-form" id="wf-settings-form">
        ${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((day, i) => `<div class="wf-form__grid" style="grid-template-columns:80px 1fr 1fr auto;align-items:center;margin-bottom:8px">
          <span style="font-size:13px;font-weight:600">${day}</span>
          <input type="time" class="wf-form__input" value="${i < 5 ? "09:00" : i === 5 ? "10:00" : ""}" ${i === 6 ? "disabled" : ""}>
          <input type="time" class="wf-form__input" value="${i < 5 ? "18:00" : i === 5 ? "14:00" : ""}" ${i === 6 ? "disabled" : ""}>
          <label style="font-size:12px"><input type="checkbox"${i === 6 ? "" : " checked"}> Open</label>
        </div>`).join("")}
        ${WF.settingsFormFooter()}</form>`))
    },
    {
      id: "holidays", label: "Holiday Calendar",
      render: () => cfg("holidays", "Holiday Calendar", "National, regional, and company holidays", `
        <button class="wf-btn wf-btn--sm wf-btn--primary wf-mb-16">+ Add Holiday</button>
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Holiday</th><th>Date</th><th>Type</th><th>Actions</th></tr></thead>
        <tbody>${d().holidays.map((h) => `<tr><td>${h.name}</td><td>${h.date}</td><td>${h.type}</td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>`).join("")}</tbody></table></div>
      `)
    },
    {
      id: "branding", label: "Branding Settings",
      render: () => cfg("branding", "Branding Settings", "Brand colors, typography, and white-label options", formCard(`<form class="wf-form" id="wf-settings-form">
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Primary Color</label><input type="color" class="wf-form__input" value="#333333" style="height:38px"></div>
          <div class="wf-form__group"><label class="wf-form__label">Accent Color</label><input type="color" class="wf-form__input" value="#666666" style="height:38px"></div>
          <div class="wf-form__group"><label class="wf-form__label">Font Family</label><select class="wf-form__select"><option>Inter</option><option>System UI</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Login Page Style</label><select class="wf-form__select"><option>Split Layout</option><option>Centered</option></select></div>
        </div>${WF.settingsFormFooter()}</form>`), `<button data-screen="logo-assets" class="wf-btn wf-btn--sm">Logo & Assets</button>`)
    },
    {
      id: "logo-assets", label: "Logo & Assets",
      render: () => cfg("logo-assets", "Logo & Assets", "Upload logos, favicons, and email assets", `
        <div class="wf-grid-2">${["Primary Logo", "Logo (Dark)", "Favicon", "Email Header"].map((a) => `<div class="wf-card"><div class="wf-card__body" style="text-align:center;padding:24px">
          <div style="width:80px;height:80px;background:var(--wf-placeholder);margin:0 auto 12px;border-radius:8px"></div>
          <div style="font-size:13px;font-weight:600">${a}</div>
          <button class="wf-btn wf-btn--sm wf-mt-16">Upload</button>
        </div></div>`).join("")}</div>
      `)
    },
    {
      id: "theme", label: "Theme Management",
      render: () => cfg("theme", "Theme Management", "Light, dark, and system theme defaults", formCard(`<form class="wf-form" id="wf-settings-form">
        <div class="wf-form__group"><label class="wf-form__label">Default Theme</label><select class="wf-form__select"><option>System</option><option>Light</option><option>Dark</option></select></div>
        <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Allow user theme override</label></div>
        ${WF.settingsFormFooter()}</form>`))
    },
    { id: "email-config", label: "Email Configuration", render: () => cfg("email-config", "Email Configuration", "Outbound email settings and templates", formCard(WF.integrationPanel("Resend Email", { status: "Connected", fields: [["From Name", "iFranchise CRM"], ["From Email", "noreply@ifranchise.com"], ["Reply-To", "support@ifranchise.com"]] })), `<button data-screen="smtp" class="wf-btn wf-btn--sm">SMTP →</button>`) },
    { id: "smtp", label: "SMTP Settings", render: () => cfg("smtp", "SMTP Settings", "Custom SMTP server configuration", formCard(WF.integrationPanel("SMTP Server", { status: "Connected", fields: [["Host", "smtp.resend.com"], ["Port", "587"], ["Username", "resend"], ["Password", "••••••••"]] }))) },
    { id: "whatsapp", label: "WhatsApp Configuration", render: () => cfg("whatsapp", "WhatsApp Configuration", "WhatsApp Business API settings", formCard(WF.integrationPanel("WhatsApp Business", { status: "Connected", fields: [["Phone Number ID", "••••••"], ["Business Account ID", "••••••"], ["Access Token", "••••••••"]] }))) },
    { id: "sms", label: "SMS Gateway", render: () => cfg("sms", "SMS Gateway", "Twilio and SMS provider settings", formCard(WF.integrationPanel("Twilio SMS", { status: "Connected", fields: [["Account SID", "AC••••••"], ["Auth Token", "••••••••"], ["From Number", "+91 XXXXX XXXXX"]] }))) },
    {
      id: "notifications", label: "Notification Settings",
      render: () => cfg("notifications", "Notification Settings", "Default channels and delivery preferences", formCard(`<form class="wf-form" id="wf-settings-form">
        <div class="wf-form__section-title">Default Channels</div>
        ${["In-App", "Email", "SMS", "WhatsApp", "Push"].map((ch) => `<div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> ${ch}</label></div>`).join("")}
        <div class="wf-form__group wf-mt-16"><label class="wf-form__label">Digest Frequency</label><select class="wf-form__select"><option>Daily</option><option>Weekly</option></select></div>
        ${WF.settingsFormFooter()}</form>`))
    },
    {
      id: "storage", label: "Storage Management",
      render: () => cfg("storage", "Storage Management", "File storage quotas and usage by category", `${WF.storageUsagePanel()}<div class="wf-mt-16">${formCard(`<form class="wf-form" id="wf-settings-form"><div class="wf-form__group"><label class="wf-form__label">Total Storage Limit</label><select class="wf-form__select"><option>100 GB</option><option>250 GB</option><option>500 GB</option></select></div>${WF.settingsFormFooter()}</form>`)}</div>`, `<button data-screen="file-upload" class="wf-btn wf-btn--sm">Upload Settings</button>`)
    },
    {
      id: "file-upload", label: "File Upload Settings",
      render: () => cfg("file-upload", "File Upload Settings", "Allowed types, size limits, and virus scan", formCard(`<form class="wf-form" id="wf-settings-form">
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Max File Size</label><select class="wf-form__select"><option>10 MB</option><option>25 MB</option><option>50 MB</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Allowed Types</label><input class="wf-form__input" value="pdf, doc, docx, xls, xlsx, jpg, png"></div>
          <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Virus scan on upload</label></div>
        </div>${WF.settingsFormFooter()}</form>`))
    },
    {
      id: "security", label: "Security Settings",
      render: () => cfg("security", "Security Settings", "Platform security policies and access controls", `
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px">
          <a href="#password-policy" data-screen="password-policy" class="wf-card" style="text-decoration:none;color:inherit"><div class="wf-card__body" style="padding:16px"><strong>Password Policies</strong><div style="font-size:12px;color:var(--wf-text-muted)">Complexity, expiry, history</div></div></a>
          <a href="#mfa" data-screen="mfa" class="wf-card" style="text-decoration:none;color:inherit"><div class="wf-card__body" style="padding:16px"><strong>Multi-Factor Auth</strong><div style="font-size:12px;color:var(--wf-text-muted)">2FA enforcement by role</div></div></a>
          <a href="#sessions" data-screen="sessions" class="wf-card" style="text-decoration:none;color:inherit"><div class="wf-card__body" style="padding:16px"><strong>Session Management</strong><div style="font-size:12px;color:var(--wf-text-muted)">Timeout, concurrent sessions</div></div></a>
          <a href="#api-keys" data-screen="api-keys" class="wf-card" style="text-decoration:none;color:inherit"><div class="wf-card__body" style="padding:16px"><strong>API Keys</strong><div style="font-size:12px;color:var(--wf-text-muted)">Key rotation and scopes</div></div></a>
        </div>
        ${formCard(`<form class="wf-form" id="wf-settings-form">
          <div class="wf-form__group"><label class="wf-form__label">Allowed IP Ranges</label><textarea class="wf-form__textarea" placeholder="103.0.0.0/8&#10;49.0.0.0/8">103.0.0.0/8</textarea></div>
          <div class="wf-form__group"><label class="wf-form__label">Blocked IPs</label><textarea class="wf-form__textarea">185.**.**.0/24</textarea></div>
          ${WF.settingsFormFooter()}
        </form>`)}
      `)
    },
    {
      id: "password-policy", label: "Password Policies",
      render: () => cfg("password-policy", "Password Policies", "Password complexity and rotation rules", formCard(`<form class="wf-form" id="wf-settings-form">
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Min Length</label><input class="wf-form__input" type="number" value="12"></div>
          <div class="wf-form__group"><label class="wf-form__label">Expiry (days)</label><input class="wf-form__input" type="number" value="90"></div>
          <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Require uppercase</label></div>
          <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Require numbers</label></div>
          <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Require special chars</label></div>
          <div class="wf-form__group"><label class="wf-form__label">History (prevent reuse)</label><input class="wf-form__input" type="number" value="5"></div>
        </div>${WF.settingsFormFooter()}</form>`))
    },
    {
      id: "mfa", label: "Multi-Factor Authentication",
      render: () => cfg("mfa", "Multi-Factor Authentication", "2FA methods and enforcement by role", formCard(`<form class="wf-form" id="wf-settings-form">
        <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Require MFA for Admin roles</label></div>
        <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Require MFA for Super Admin</label></div>
        <div class="wf-form__group"><label class="wf-form__label">Allowed Methods</label><div>${["Authenticator App", "SMS", "Email"].map((m) => `<label style="margin-right:12px;font-size:13px"><input type="checkbox" checked> ${m}</label>`).join("")}</div></div>
        ${WF.settingsFormFooter()}</form>`))
    },
    {
      id: "sessions", label: "Session Management",
      render: () => cfg("sessions", "Session Management", "Session timeout and concurrent login limits", formCard(`<form class="wf-form" id="wf-settings-form">
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Session Timeout</label><select class="wf-form__select"><option>30 minutes</option><option selected>1 hour</option><option>8 hours</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Max Concurrent Sessions</label><input class="wf-form__input" type="number" value="3"></div>
          <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Force logout on password change</label></div>
        </div>${WF.settingsFormFooter()}</form>`))
    },
    {
      id: "api", label: "API Management",
      render: () => cfg("api", "API Management", "REST API configuration and rate limits", formCard(`<form class="wf-form" id="wf-settings-form">
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">API Base URL</label><input class="wf-form__input" value="https://api.franchisecrm.com/v1" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label">Rate Limit</label><select class="wf-form__select"><option>1000 req/min</option><option>5000 req/min</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Enable API documentation</label></div>
        </div>${WF.settingsFormFooter()}</form>`), `<button data-screen="api-keys" class="wf-btn wf-btn--sm">API Keys</button>`)
    },
    {
      id: "api-keys", label: "API Keys",
      render: () => cfg("api-keys", "API Keys", "Manage API keys and access scopes", `
        <button class="wf-btn wf-btn--sm wf-btn--primary wf-mb-16">+ Generate Key</button>
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Name</th><th>Key</th><th>Created</th><th>Last Used</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${d().apiKeys.map((k) => `<tr><td>${k.name}</td><td style="font-family:monospace;font-size:12px">${k.prefix}</td><td>${k.created}</td><td>${k.lastUsed}</td><td><span class="wf-badge wf-badge--dark">${k.status}</span></td><td><button class="wf-btn wf-btn--sm">Revoke</button></td></tr>`).join("")}</tbody></table></div>
      `)
    },
    {
      id: "webhooks", label: "Webhook Manager",
      render: () => cfg("webhooks", "Webhook Manager", "Outbound webhook endpoints and event subscriptions", `
        <button class="wf-btn wf-btn--sm wf-btn--primary wf-mb-16">+ Add Webhook</button>
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Name</th><th>URL</th><th>Events</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${d().webhooks.map((w) => `<tr><td>${w.name}</td><td style="font-size:12px">${w.url}</td><td style="font-size:12px">${w.events}</td><td><span class="wf-badge${w.status === "Active" ? " wf-badge--dark" : ""}">${w.status}</span></td><td><button class="wf-btn wf-btn--sm" data-action="test-connection">Test</button><button class="wf-btn wf-btn--sm">Edit</button></td></tr>`).join("")}</tbody></table></div>
      `)
    },
    {
      id: "integrations", label: "Third-Party Integrations",
      render: () => cfg("integrations", "Third-Party Integrations", "Connected services and OAuth apps", `
        <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr)">
          ${d().integrations.map((i) => `<div class="wf-card" data-screen="${i.screen}" style="cursor:pointer"><div class="wf-card__body" style="padding:16px">
            <div style="display:flex;justify-content:space-between;align-items:start"><strong>${i.name}</strong><span class="wf-badge${i.status === "Connected" ? " wf-badge--dark" : ""}">${i.status}</span></div>
            <button class="wf-btn wf-btn--sm wf-mt-16" data-screen="${i.screen}">${i.status === "Connected" ? "Configure" : "Connect"}</button>
          </div></div>`).join("")}
        </div>
      `)
    },
    { id: "google-workspace", label: "Google Workspace Integration", render: () => cfg("google-workspace", "Google Workspace", "Google Calendar, Meet, and Drive", formCard(WF.integrationPanel("Google Workspace", { status: "Connected", fields: [["Client ID", "••••.apps.googleusercontent.com"], ["Client Secret", "••••••••"], ["Scopes", "calendar, meet, drive.readonly"]] }))) },
    { id: "calendar", label: "Calendar Integration", render: () => cfg("calendar", "Calendar Integration", "Google Calendar, Outlook, and Zoom", formCard(WF.integrationPanel("Google Calendar", { status: "Connected", fields: [["Calendar ID", "primary"], ["Sync Direction", "Two-way"], ["Default Duration", "30 min"]] }))) },
    { id: "payment-gateway", label: "Payment Gateway Settings", render: () => cfg("payment-gateway", "Payment Gateway Settings", "Razorpay, Cashfree, and Stripe", formCard(WF.integrationPanel("Razorpay", { status: "Connected", fields: [["Key ID", "rzp_live_••••"], ["Key Secret", "••••••••"], ["Webhook Secret", "••••••••"]] }))) },
    {
      id: "feature-flags", label: "Feature Flags",
      render: () => cfg("feature-flags", "Feature Flags", "Enable or disable platform features", formCard(`<form class="wf-form" id="wf-settings-form">${WF.featureFlagGrid()}${WF.settingsFormFooter()}</form>`))
    },
    {
      id: "custom-fields", label: "Custom Fields",
      render: () => cfg("custom-fields", "Custom Fields", "Module-specific custom field definitions", `
        <button class="wf-btn wf-btn--sm wf-btn--primary wf-mb-16">+ Add Field</button>
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Module</th><th>Field Name</th><th>Type</th><th>Required</th><th>Actions</th></tr></thead>
        <tbody>${d().customFields.map((f) => `<tr><td>${f.module}</td><td>${f.name}</td><td>${f.type}</td><td>${f.required ? "Yes" : "No"}</td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>`).join("")}</tbody></table></div>
      `)
    },
    {
      id: "numbering", label: "Numbering Configuration",
      render: () => cfg("numbering", "Numbering Configuration", "Auto-numbering formats for entities", `
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Entity</th><th>Prefix</th><th>Format</th><th>Next Number</th><th>Actions</th></tr></thead>
        <tbody>${d().numbering.map((n) => `<tr><td>${n.entity}</td><td>${n.prefix}</td><td style="font-family:monospace;font-size:12px">${n.format}</td><td>${n.next}</td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>`).join("")}</tbody></table></div>
      `)
    },
    {
      id: "workflow-config", label: "Workflow Configuration",
      render: () => cfg("workflow-config", "Workflow Configuration", "Default approval chains and pipeline settings", formCard(`<form class="wf-form" id="wf-settings-form">
        <div class="wf-form__group"><label class="wf-form__label">Default Lead Pipeline</label><select class="wf-form__select"><option>Standard Franchise Sales</option></select></div>
        <div class="wf-form__group"><label class="wf-form__label">Approval Escalation (hours)</label><input class="wf-form__input" type="number" value="24"></div>
        ${WF.settingsFormFooter()}</form>`), `<button data-screen="automation" class="wf-btn wf-btn--sm">Automation →</button>`)
    },
    {
      id: "automation", label: "Automation Settings",
      render: () => cfg("automation", "Automation Settings", "Workflow engine limits and defaults", formCard(`<form class="wf-form" id="wf-settings-form">
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Max Active Workflows</label><input class="wf-form__input" value="100"></div>
          <div class="wf-form__group"><label class="wf-form__label">Execution Timeout</label><select class="wf-form__select"><option>30 seconds</option><option>60 seconds</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Sandbox mode for testing</label></div>
        </div>${WF.settingsFormFooter()}</form>`))
    },
    {
      id: "backup", label: "Backup & Recovery",
      render: () => cfg("backup", "Backup & Recovery", "Automated backups and restore points", `
        ${statusGrid()}
        <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Backup Schedule</span></div>
          <div class="wf-card__body"><form class="wf-form" id="wf-settings-form">
            <div class="wf-form__grid">
              <div class="wf-form__group"><label class="wf-form__label">Frequency</label><select class="wf-form__select"><option>Daily 6:00 AM IST</option><option>Weekly</option></select></div>
              <div class="wf-form__group"><label class="wf-form__label">Retention</label><select class="wf-form__select"><option>30 days</option><option>90 days</option></select></div>
            </div>${WF.settingsFormFooter()}</form></div>
        </div>
        <button class="wf-btn wf-btn--sm wf-btn--primary">Run Backup Now</button>
      `)
    },
    {
      id: "database", label: "Database Health",
      render: () => cfg("database", "Database Health", "PostgreSQL metrics and connection pool", `
        ${WF.statusIndicator("Database", k().databaseStatus, "PostgreSQL 15 · Supabase")}
        <div class="wf-grid-2 wf-mt-16">
          ${WF.chartCard("Query Performance", "Line Chart", { height: 200 })}
          ${WF.chartCard("Connection Pool", "Bar Chart", { height: 200 })}
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__body">${WF.reportDataTable(["Metric", "Value"], [["Active Connections", "24/100"], ["Avg Query Time", "12ms"], ["Disk Usage", "42 GB"], ["Last Vacuum", "24 Jun 02:00"]])}</div></div>
      `)
    },
    {
      id: "cache", label: "Cache Management",
      render: () => cfg("cache", "Cache Management", "Redis cache configuration and flush", formCard(`<form class="wf-form" id="wf-settings-form">
        ${WF.statusIndicator("Redis Cache", "Healthy", "7.2 · 256 MB used")}
        <div class="wf-form__group wf-mt-16"><label class="wf-form__label">TTL Default</label><select class="wf-form__select"><option>1 hour</option><option>24 hours</option></select></div>
        <button type="button" class="wf-btn wf-btn--sm wf-mt-16">Flush Cache</button>
        ${WF.settingsFormFooter()}
      </form>`))
    },
    {
      id: "queue", label: "Queue Management",
      render: () => cfg("queue", "Queue Management", "Background job queues and workers", `
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Queue</th><th>Pending</th><th>Processing</th><th>Failed</th><th>Actions</th></tr></thead>
        <tbody>
          <tr><td>email</td><td>3</td><td>1</td><td>0</td><td><button class="wf-btn wf-btn--sm">View</button></td></tr>
          <tr><td>automation</td><td>5</td><td>2</td><td>1</td><td><button class="wf-btn wf-btn--sm">View</button></td></tr>
          <tr><td>webhooks</td><td>0</td><td>0</td><td>2</td><td><button class="wf-btn wf-btn--sm">Retry</button></td></tr>
        </tbody></table></div>
      `)
    },
    {
      id: "env-vars", label: "Environment Variables",
      render: () => cfg("env-vars", "Environment Variables", "Secure environment configuration (masked)", `
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Key</th><th>Value</th><th>Actions</th></tr></thead>
        <tbody>${d().envVars.map((e) => `<tr><td style="font-family:monospace">${e.key}</td><td>${e.value}</td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>`).join("")}</tbody></table></div>
        <div class="wf-card wf-mt-16"><div class="wf-card__body" style="font-size:12px;color:var(--wf-text-muted)">Values are masked. Super Admin access required to view or edit.</div></div>
      `)
    },
    {
      id: "system-logs", label: "System Logs",
      render: () => cfg("system-logs", "System Logs", "Application and configuration change logs", `
        <button data-screen="dashboard" class="wf-btn wf-btn--sm wf-mb-16">← Dashboard</button>
        ${WF.activityFeed(d().recentActivities.map((a) => ({ title: a.action, user: a.user, time: a.time, desc: "Configuration change" })))}
      `, `<a href="../audit/index.html" class="wf-btn wf-btn--sm">Full Audit Module →</a>`)
    },
    {
      id: "maintenance", label: "Maintenance Mode",
      render: () => cfg("maintenance", "Maintenance Mode", "Schedule downtime and maintenance windows", formCard(`<form class="wf-form" id="wf-settings-form">
        <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox"> Enable Maintenance Mode</label></div>
        <div class="wf-form__group"><label class="wf-form__label">Message</label><textarea class="wf-form__textarea">System maintenance in progress. We'll be back shortly.</textarea></div>
        <div class="wf-form__group"><label class="wf-form__label">Allowed IPs (bypass)</label><input class="wf-form__input" value="103.**.**.0/24"></div>
        ${WF.settingsFormFooter()}
      </form>`))
    },
    {
      id: "license", label: "License Management",
      render: () => cfg("license", "License Management", "Enterprise license and seat allocation", `
        <div class="wf-card wf-mb-16"><div class="wf-card__body" style="font-size:13px;line-height:2">
          <div><strong>Plan:</strong> ${d().license.plan}</div>
          <div><strong>Seats:</strong> ${d().license.used} / ${d().license.seats}</div>
          <div><strong>Expires:</strong> ${d().license.expires}</div>
          <div><strong>Version:</strong> ${d().license.version}</div>
        </div></div>
        <button class="wf-btn wf-btn--sm">Upgrade Plan</button>
      `, `<button data-screen="subscription" class="wf-btn wf-btn--sm">Subscription</button>`)
    },
    {
      id: "subscription", label: "Subscription Management",
      render: () => cfg("subscription", "Subscription Management", "Billing cycle and payment method", formCard(`<form class="wf-form" id="wf-settings-form">
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Billing Cycle</label><select class="wf-form__select"><option>Annual</option><option>Monthly</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Next Invoice</label><input class="wf-form__input" value="01 Jul 2025" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label">Amount</label><input class="wf-form__input" value="₹12,50,000 / year" readonly></div>
        </div>${WF.settingsFormFooter()}</form>`))
    },
    {
      id: "localization", label: "Localization",
      render: () => cfg("localization", "Localization", "Regional formats, currency, and language", `
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
          <a href="#currency" data-screen="currency" class="wf-card" style="text-decoration:none;color:inherit"><div class="wf-card__body" style="padding:20px;text-align:center"><strong>Currency</strong><div style="font-size:12px;margin-top:8px">INR (₹)</div></div></a>
          <a href="#timezone" data-screen="timezone" class="wf-card" style="text-decoration:none;color:inherit"><div class="wf-card__body" style="padding:20px;text-align:center"><strong>Timezone</strong><div style="font-size:12px;margin-top:8px">Asia/Kolkata</div></div></a>
          <a href="#language" data-screen="language" class="wf-card" style="text-decoration:none;color:inherit"><div class="wf-card__body" style="padding:20px;text-align:center"><strong>Language</strong><div style="font-size:12px;margin-top:8px">English</div></div></a>
        </div>
      `)
    },
    { id: "currency", label: "Currency Settings", render: () => cfg("currency", "Currency Settings", "Default currency and formatting", formCard(`<form class="wf-form" id="wf-settings-form"><div class="wf-form__grid"><div class="wf-form__group"><label class="wf-form__label">Default Currency</label><select class="wf-form__select"><option selected>INR (₹)</option><option>USD ($)</option></select></div><div class="wf-form__group"><label class="wf-form__label">Format</label><select class="wf-form__select"><option>₹1,23,456.78</option></select></div></div>${WF.settingsFormFooter()}</form>`)) },
    { id: "timezone", label: "Timezone Settings", render: () => cfg("timezone", "Timezone Settings", "Default timezone for scheduling", formCard(`<form class="wf-form" id="wf-settings-form"><div class="wf-form__group"><label class="wf-form__label">Default Timezone</label><select class="wf-form__select"><option selected>Asia/Kolkata (IST, UTC+5:30)</option><option>UTC</option></select></div>${WF.settingsFormFooter()}</form>`)) },
    { id: "language", label: "Language Settings", render: () => cfg("language", "Language Settings", "UI language and locale", formCard(`<form class="wf-form" id="wf-settings-form"><div class="wf-form__group"><label class="wf-form__label">Default Language</label><select class="wf-form__select"><option selected>English</option><option>Hindi</option></select></div><div class="wf-form__group"><label class="wf-form__label"><input type="checkbox"> Enable multi-language UI</label></div>${WF.settingsFormFooter()}</form>`)) },
    {
      id: "audit-settings", label: "Audit Settings",
      render: () => cfg("audit-settings", "Audit Settings", "Audit log retention and export policies", formCard(`<form class="wf-form" id="wf-settings-form">
        <div class="wf-form__group"><label class="wf-form__label">Retention Period</label><select class="wf-form__select"><option>7 years</option><option>5 years</option></select></div>
        <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Immutable audit records</label></div>
        <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Log all data changes</label></div>
        ${WF.settingsFormFooter()}
      </form>`), `<a href="../audit/index.html" class="wf-btn wf-btn--sm">Audit Module →</a>`)
    },
    {
      id: "retention", label: "Data Retention Policies",
      render: () => cfg("retention", "Data Retention Policies", "Data lifecycle and auto-deletion rules", `
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>Data Type</th><th>Retention</th><th>Auto-Delete</th><th>Actions</th></tr></thead>
        <tbody>
          <tr><td>Audit Logs</td><td>7 years</td><td>No</td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>
          <tr><td>Deleted Records</td><td>90 days</td><td>Yes</td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>
          <tr><td>API Logs</td><td>1 year</td><td>Yes</td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>
          <tr><td>Session Logs</td><td>2 years</td><td>Yes</td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>
        </tbody></table></div>
      `)
    },
    {
      id: "gdpr", label: "GDPR & Privacy Settings",
      render: () => cfg("gdpr", "GDPR & Privacy Settings", "Consent, data portability, and privacy controls", formCard(`<form class="wf-form" id="wf-settings-form">
        <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Require consent on data collection</label></div>
        <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Enable data export (DSAR)</label></div>
        <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox" checked> Right to erasure workflow</label></div>
        <div class="wf-form__group"><label class="wf-form__label">DPO Contact</label><input class="wf-form__input" value="dpo@ifranchise.com"></div>
        ${WF.settingsFormFooter()}
      </form>`))
    },
    {
      id: "terms", label: "Terms & Policies",
      render: () => cfg("terms", "Terms & Policies", "Terms of service, privacy policy, and legal documents", `
        <div class="wf-card-grid" style="grid-template-columns:repeat(2,1fr)">
          ${["Terms of Service", "Privacy Policy", "Cookie Policy", "Data Processing Agreement"].map((t) => `<div class="wf-card"><div class="wf-card__body" style="padding:20px"><strong>${t}</strong><div style="font-size:12px;color:var(--wf-text-muted);margin:8px 0">Last updated: 01 Jan 2024</div><button class="wf-btn wf-btn--sm">Edit</button><button class="wf-btn wf-btn--sm">Preview</button></div></div>`).join("")}
        </div>
      `)
    },
    {
      id: "about", label: "About System",
      render: () => cfg("about", "About System", "Version, build, and environment information", `
        <div class="wf-card"><div class="wf-card__body" style="text-align:center;padding:40px">
          <div style="width:64px;height:64px;background:var(--wf-placeholder);border-radius:12px;margin:0 auto 16px"></div>
          <div style="font-size:20px;font-weight:700">FranchiseCRM</div>
          <div style="font-size:13px;color:var(--wf-text-muted);margin:8px 0">by iFranchise</div>
          <div style="font-size:14px;margin:16px 0"><strong>Version ${d().license.version}</strong> · Build 20240625.1</div>
          <div style="font-size:12px;color:var(--wf-text-muted);line-height:1.8">
            Environment: Production<br>
            Region: ap-south-1 (Mumbai)<br>
            Database: Supabase PostgreSQL 15<br>
            Stack: React · Tailwind · Shadcn · Supabase
          </div>
          <button class="wf-btn wf-btn--sm wf-mt-16">Check for Updates</button>
        </div></div>
      `)
    }
  ];

  function init() {
    WF_SPA.init({
      moduleKey: "settings",
      moduleLabel: "System Configuration",
      moduleTitle: "System Configuration",
      moduleHref: "index.html",
      defaultScreen: "dashboard",
      searchPlaceholder: "Search settings, integrations, security…",
      modals: WF.settingsModals,
      screens
    });

    document.body.addEventListener("click", (e) => {
      const roleBtn = e.target.closest("[data-role]");
      if (roleBtn && roleBtn.closest(".wf-role-bar")) {
        activeRole = roleBtn.getAttribute("data-role");
        document.querySelectorAll(".wf-role-bar [data-role]").forEach((btn) => {
          btn.classList.toggle("wf-btn--primary", btn.getAttribute("data-role") === activeRole);
        });
        const readOnly = activeRole === "Read Only Administrator";
        WF.showToast(readOnly ? "Read-only — cannot save settings" : `Viewing as ${activeRole}`);
      }
    });
  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => SETTINGS_MODULE.init());
