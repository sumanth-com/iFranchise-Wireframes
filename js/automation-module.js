/* Automation Engine — Single Page Module (24 screens) */

const AUTOMATION_MODULE = (() => {
  const d = () => AUTOMATION_DATA;
  const k = () => d().kpis;
  let activeRole = "Automation Administrator";

  const roleBar = () => WF.roleSwitcher(WF.getViewRole(activeRole), d().roles);
  const filters = () => WF.toolbar({ filters: ["Status", "Brand", "City", "Trigger", "Owner", "Workflow State"], showImport: true });
  const exports = () => WF.reportActions();
  const states = () => d().workflowStates;

  const dashKpis = () => WF.kpiGrid([
    { label: "Active Workflows", value: k().activeWorkflows, change: "of 52 total" },
    { label: "Failed Executions", value: k().failedExecutions, change: "last 24h" },
    { label: "Today's Executions", value: k().todayExecutions },
    { label: "Avg Execution Time", value: k().avgExecutionTime },
    { label: "Pending Jobs", value: k().pendingJobs },
    { label: "Queued Jobs", value: k().queuedJobs },
    { label: "Success Rate", value: k().successRate + "%" },
    { label: "Top Trigger", value: k().topTrigger, small: true }
  ]);

  const sampleWorkflow = () => d().workflows[0];

  const screens = [
    {
      id: "dashboard", label: "Automation Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Automation Dashboard", "Workflow health, execution metrics, and automation overview", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="workflow-list" class="wf-btn wf-btn--sm">All Workflows</button>
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ New Workflow</button>
        `)}
        ${WF.periodToggle("Today")}
        ${dashKpis()}
        <div class="wf-grid-2 wf-mb-20">
          ${WF.chartCard("Executions Today", "Line Chart", { height: 240, drillScreen: "execution-history", subtitle: "384 runs · 96.8% success" })}
          ${WF.chartCard("Workflow Success Rate", "Donut Chart", { height: 240, drillScreen: "analytics" })}
        </div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Top Metrics</span></div>
            <div class="wf-card__body" style="font-size:13px;line-height:2">
              <div><strong>Top Action:</strong> ${k().topAction} <button data-screen="actions" class="wf-btn wf-btn--sm" style="margin-left:8px">View</button></div>
              <div><strong>Most Used Template:</strong> ${k().topTemplate} <button data-screen="templates" class="wf-btn wf-btn--sm" style="margin-left:8px">View</button></div>
              <div><strong>Top Trigger:</strong> ${k().topTrigger} <button data-screen="triggers" class="wf-btn wf-btn--sm" style="margin-left:8px">View</button></div>
            </div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Quick Actions</span></div>
            <div class="wf-card__body" style="display:flex;flex-wrap:wrap;gap:8px">
              <button data-screen="builder" class="wf-btn wf-btn--sm">Open Builder</button>
              <button data-screen="templates" class="wf-btn wf-btn--sm">Templates</button>
              <button data-screen="failed" class="wf-btn wf-btn--sm">Failed Runs</button>
              <button data-screen="schedule" class="wf-btn wf-btn--sm">Schedule</button>
              <button data-screen="webhooks" class="wf-btn wf-btn--sm">Webhooks</button>
              <button data-screen="audit" class="wf-btn wf-btn--sm">Audit Trail</button>
            </div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recent Executions</span><button data-screen="execution-history" class="wf-btn wf-btn--sm">View All</button></div>
          <div class="wf-card__body" style="padding:0">${WF.executionTable(d().executions.slice(0, 5))}</div>
        </div>
      `
    },
    {
      id: "workflow-list", label: "Workflow List",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Workflow List", "All automation workflows across brands and cities", `
          <button data-screen="templates" class="wf-btn wf-btn--sm">From Template</button>
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ Create Workflow</button>
        `)}
        ${filters()}
        ${WF.workflowTable(d().workflows)}
        ${WF.pagination(52, 1, 25)}
      `
    },
    {
      id: "builder", label: "Workflow Builder",
      breadcrumb: [{ label: "Workflow List", screen: "workflow-list" }, { label: "Builder" }],
      render: () => WF.workflowBuilder({ workflowName: sampleWorkflow().name, status: "Draft" })
    },
    {
      id: "create", label: "Create Workflow",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Create Workflow", "Define workflow metadata before building nodes", `
          <button data-screen="templates" class="wf-btn wf-btn--sm">Use Template</button>
        `)}
        <div class="wf-card"><div class="wf-card__body">${WF.workflowForm(null, "create")}</div></div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Workflow States</span></div>
          <div class="wf-card__body">${WF.workflowStepper("Draft", states())}</div>
        </div>
      `
    },
    {
      id: "edit", label: "Edit Workflow",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Edit Workflow", sampleWorkflow().id + " · " + sampleWorkflow().name, `
          <button data-screen="builder" class="wf-btn wf-btn--sm wf-btn--primary">Open Builder</button>
        `)}
        <div class="wf-card"><div class="wf-card__body">${WF.workflowForm(sampleWorkflow(), "edit")}</div></div>
        ${WF.workflowStepper(sampleWorkflow().status, states())}
      `
    },
    {
      id: "details", label: "Workflow Details",
      render: () => {
        const w = sampleWorkflow();
        return `
        ${roleBar()}
        ${WF.pageHeader(w.name, w.id + " · " + w.trigger, `
          <button data-modal="pause-workflow" class="wf-btn wf-btn--sm">Pause</button>
          <button data-modal="test-workflow" class="wf-btn wf-btn--sm">Test</button>
          <button data-screen="builder" class="wf-btn wf-btn--sm">Edit in Builder</button>
          <button data-screen="edit" class="wf-btn wf-btn--sm wf-btn--primary">Edit</button>
        `)}
        ${WF.workflowStepper(w.status, states())}
        <div class="wf-grid-2 wf-mt-16">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Overview</span></div>
            <div class="wf-card__body" style="font-size:13px;line-height:1.8">
              <div><strong>Trigger:</strong> ${w.trigger}</div>
              <div><strong>Brand:</strong> ${w.brand} · <strong>City:</strong> ${w.city}</div>
              <div><strong>Owner:</strong> ${w.owner}</div>
              <div><strong>Executions:</strong> ${w.executions} · <strong>Success:</strong> ${w.successRate}%</div>
              <div><strong>Description:</strong> ${w.description}</div>
            </div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Validation</span><button data-action="validate-workflow" class="wf-btn wf-btn--sm">Re-validate</button></div>
            <div class="wf-card__body">
              <div class="wf-props__check wf-props__check--ok">✓ Trigger configured</div>
              <div class="wf-props__check wf-props__check--ok">✓ No infinite loops detected</div>
              <div class="wf-props__check wf-props__check--ok">✓ All actions connected</div>
              <div class="wf-props__check wf-props__check--ok">✓ Permission validation passed</div>
              <div class="wf-props__check wf-props__check--warn">⚠ API key expires in 14 days</div>
            </div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Workflow Canvas Preview</span><button data-screen="builder" class="wf-btn wf-btn--sm">Full Builder</button></div>
          <div class="wf-card__body" style="padding:0;overflow:hidden">${WF.workflowBuilder({ workflowName: w.name, status: w.status }).replace('data-screen="workflow-list"', 'data-screen="details"')}</div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recent Executions</span><button data-screen="execution-history" class="wf-btn wf-btn--sm">History</button></div>
          <div class="wf-card__body" style="padding:0">${WF.executionTable(d().executions.filter((e) => e.workflow === w.name).slice(0, 3))}</div>
        </div>
      `;
      }
    },
    {
      id: "triggers", label: "Trigger Library",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Trigger Library", "All available workflow triggers — drag into builder", `
          <button data-screen="builder" class="wf-btn wf-btn--sm wf-btn--primary">Open Builder</button>
        `)}
        ${WF.toolbar({ filters: ["Category", "Module"], showImport: false })}
        <div class="wf-card-grid" style="grid-template-columns:repeat(4,1fr)">
          ${d().triggers.map((t) => `<div class="wf-card" style="cursor:pointer"><div class="wf-card__body" style="padding:16px">
            <div style="font-size:11px;color:var(--wf-text-muted);margin-bottom:4px">TRIGGER</div>
            <div style="font-size:13px;font-weight:600;margin-bottom:8px">${t}</div>
            <button class="wf-btn wf-btn--sm" data-screen="builder">Add to Workflow</button>
          </div></div>`).join("")}
        </div>
      `
    },
    {
      id: "actions", label: "Action Library",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Action Library", "All workflow actions — configure in properties panel", `
          <button data-screen="builder" class="wf-btn wf-btn--sm wf-btn--primary">Open Builder</button>
        `)}
        ${WF.toolbar({ filters: ["Category", "Channel"], showImport: false })}
        <div class="wf-card-grid" style="grid-template-columns:repeat(4,1fr)">
          ${d().actions.map((a) => `<div class="wf-card"><div class="wf-card__body" style="padding:16px">
            <div style="font-size:11px;color:var(--wf-text-muted);margin-bottom:4px">ACTION</div>
            <div style="font-size:13px;font-weight:600;margin-bottom:8px">${a}</div>
            <button class="wf-btn wf-btn--sm" data-screen="builder">Add to Workflow</button>
          </div></div>`).join("")}
        </div>
      `
    },
    {
      id: "conditions", label: "Condition Builder",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Condition Builder", "If/Else, AND/OR logic for workflow branching", `
          <button data-screen="builder" class="wf-btn wf-btn--sm wf-btn--primary">Apply in Builder</button>
        `)}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__body">${WF.conditionBuilder()}</div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Condition Types</span></div>
            <div class="wf-card__body" style="font-size:13px">
              ${d().conditions.map((c) => `<div style="padding:6px 0;border-bottom:1px solid var(--wf-border-light)">${c}</div>`).join("")}
            </div>
          </div>
        </div>
      `
    },
    {
      id: "schedule", label: "Schedule Automation",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Schedule Automation", "Cron-based and recurring workflow schedules", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ New Schedule</button>
        `)}
        <div class="wf-card"><div class="wf-card__body">
          <div class="wf-form__grid">
            <div class="wf-form__group"><label class="wf-form__label">Workflow</label><select class="wf-form__select">${d().workflows.map((w) => `<option>${w.name}</option>`).join("")}</select></div>
            <div class="wf-form__group"><label class="wf-form__label">Schedule Type</label><select class="wf-form__select"><option>Cron</option><option>Daily</option><option>Weekly</option><option>Monthly</option><option>One-time</option></select></div>
            <div class="wf-form__group"><label class="wf-form__label">Time</label><input type="time" class="wf-form__input" value="09:00"></div>
            <div class="wf-form__group"><label class="wf-form__label">Timezone</label><select class="wf-form__select"><option>Asia/Kolkata (IST)</option></select></div>
            <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Cron Expression</label><input class="wf-form__input" value="0 9 * * 1-5" placeholder="0 9 * * 1-5"></div>
          </div>
        </div></div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Scheduled Jobs</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Workflow</th><th>Schedule</th><th>Next Run</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            <tr><td>Executive Daily Summary</td><td>Daily 9:00 AM</td><td>26 Jun 2024, 9:00 AM</td><td><span class="wf-badge wf-badge--dark">Active</span></td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>
            <tr><td>Payment Reminder — Tea Time</td><td>Weekly Mon 10:00</td><td>01 Jul 2024, 10:00 AM</td><td><span class="wf-badge wf-badge--dark">Active</span></td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>
            <tr><td>Document Expiry — GST</td><td>Monthly 1st 8:00</td><td>01 Jul 2024, 8:00 AM</td><td><span class="wf-badge">Paused</span></td><td><button class="wf-btn wf-btn--sm">Edit</button></td></tr>
          </tbody></table></div>
        </div>
      `
    },
    {
      id: "execution-history", label: "Execution History",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Workflow Execution History", "All workflow runs with timing and status", exports())}
        ${filters()}
        ${WF.executionTable(d().executions)}
        ${WF.pagination(3842, 1, 25)}
      `
    },
    {
      id: "failed", label: "Failed Executions",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Failed Executions", "Errors requiring attention — retry or fix workflow", `
          <button class="wf-btn wf-btn--sm">Bulk Retry</button>
          <button data-screen="builder" class="wf-btn wf-btn--sm">Fix in Builder</button>
        `)}
        ${WF.errorState("12 failed executions in the last 24 hours", "Review webhook credentials, email validation, and SMS gateway status.")}
        ${WF.executionTable(d().executions.filter((e) => e.status === "Failed"), { showError: true })}
        ${WF.pagination(12, 1, 25)}
      `
    },
    {
      id: "analytics", label: "Automation Analytics",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Automation Analytics", "Performance trends, success rates, and usage patterns", exports())}
        ${WF.periodToggle("Last 30 days")}
        ${dashKpis()}
        <div class="wf-grid-2 wf-mb-20">
          ${WF.chartCard("Executions Over Time", "Area Chart", { height: 280 })}
          ${WF.chartCard("Success vs Failed", "Stacked Bar", { height: 280, drillScreen: "failed" })}
        </div>
        <div class="wf-grid-2">
          ${WF.chartCard("Top Triggers", "Horizontal Bar", { drillScreen: "triggers" })}
          ${WF.chartCard("Top Actions", "Horizontal Bar", { drillScreen: "actions" })}
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">By Brand</span></div>
          <div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Brand", "Workflows", "Executions", "Success %"], d().brands.slice(0, 6).map((b, i) => [b, 3 + i, 400 + i * 120, (94 + i) + "%"]))}</div>
        </div>
      `
    },
    {
      id: "templates", label: "Automation Templates",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Automation Templates", "Pre-built workflows — customize and deploy", `
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ Blank Workflow</button>
        `)}
        <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr)">
          ${d().templates.map((t) => `<div class="wf-card"><div class="wf-card__body" style="padding:20px">
            <span class="wf-badge" style="margin-bottom:8px">${t.category}</span>
            <div style="font-size:15px;font-weight:600;margin-bottom:8px">${t.name}</div>
            <div style="font-size:12px;color:var(--wf-text-muted);margin-bottom:12px">Trigger: ${t.trigger} · ${t.actions} actions · ${t.uses} uses</div>
            <button class="wf-btn wf-btn--sm" data-screen="create">Use Template</button>
            <button class="wf-btn wf-btn--sm" data-screen="builder">Preview</button>
          </div></div>`).join("")}
        </div>
      `
    },
    {
      id: "testing", label: "Workflow Testing",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Workflow Testing", "Sandbox test runs before activation", `
          <button data-modal="test-workflow" class="wf-btn wf-btn--sm wf-btn--primary">Run Test</button>
        `)}
        ${WF.workflowStepper("Testing", states())}
        <div class="wf-grid-2 wf-mt-16">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Test Configuration</span></div>
            <div class="wf-card__body">
              <div class="wf-form__group"><label class="wf-form__label">Workflow</label><select class="wf-form__select">${d().workflows.map((w) => `<option>${w.name}</option>`).join("")}</select></div>
              <div class="wf-form__group"><label class="wf-form__label">Test Data Set</label><select class="wf-form__select"><option>Sample Lead — Rahul Sharma (Odette)</option><option>Sample Customer — Priya Nair (Tea Time)</option><option>Sample Payment — ₹12,50,000</option></select></div>
              <div class="wf-form__group"><label class="wf-form__label">Environment</label><select class="wf-form__select"><option>Sandbox (no live sends)</option><option>Staging</option></select></div>
              <button data-modal="test-workflow" class="wf-btn wf-btn--primary wf-mt-16">Run Test</button>
            </div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Test Results</span></div>
            <div class="wf-card__body">${WF.timeline([
              { title: "Trigger: Lead Created", time: "10:42:01", user: "System", desc: "Matched test lead Rahul Sharma" },
              { title: "Condition: City = Bengaluru", time: "10:42:01", user: "System", desc: "Passed" },
              { title: "Action: Send Email", time: "10:42:02", user: "System", desc: "Simulated — template Customer Welcome" },
              { title: "Action: Assign User", time: "10:42:02", user: "System", desc: "Assigned to Himani Bhargava" },
              { title: "End Workflow", time: "10:42:02", user: "System", desc: "Completed in 0.8s" }
            ])}</div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Execution Log</span><button data-screen="execution-history" class="wf-btn wf-btn--sm">Full History</button></div>
          <div class="wf-card__body" style="font-family:monospace;font-size:12px;background:var(--wf-surface-alt);padding:16px;border-radius:var(--wf-radius)">
            [10:42:01] INFO  Workflow started — WF-2024-012<br>
            [10:42:01] INFO  Condition evaluated: true<br>
            [10:42:02] INFO  Email action simulated (sandbox)<br>
            [10:42:02] INFO  Workflow completed — 0.8s
          </div>
        </div>
      `
    },
    {
      id: "webhooks", label: "Webhook Management",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Webhook Management", "Outbound webhook endpoints for workflow actions", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Add Webhook</button>
        `)}
        <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>ID</th><th>Name</th><th>URL</th><th>Method</th><th>Status</th><th>Last Call</th><th>Success</th><th>Actions</th></tr></thead>
        <tbody>${d().webhooks.map((w) => `<tr>
          <td>${w.id}</td><td>${w.name}</td><td style="font-size:12px">${w.url}</td><td>${w.method}</td>
          <td><span class="wf-badge${w.status === "Active" ? " wf-badge--dark" : ""}">${w.status}</span></td>
          <td>${w.lastCall}</td><td>${w.successRate}%</td>
          <td><button class="wf-btn wf-btn--sm">Test</button><button class="wf-btn wf-btn--sm">Edit</button></td>
        </tr>`).join("")}</tbody></table></div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Webhook Validation</span></div>
          <div class="wf-card__body">
            <div class="wf-props__check wf-props__check--ok">✓ URL format valid</div>
            <div class="wf-props__check wf-props__check--ok">✓ SSL certificate valid</div>
            <div class="wf-props__check wf-props__check--warn">⚠ WH-003 last 3 calls failed — check Slack token</div>
          </div>
        </div>
      `
    },
    {
      id: "api", label: "API Integration Manager",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("API Integration Manager", "Connected services for automation actions", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Connect API</button>
        `)}
        <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr)">
          ${d().apiIntegrations.map((a) => `<div class="wf-card"><div class="wf-card__body" style="padding:20px">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:12px">
              <div style="font-weight:600">${a.name}</div>
              <span class="wf-badge${a.status === "Connected" ? " wf-badge--dark" : ""}">${a.status}</span>
            </div>
            <div style="font-size:12px;color:var(--wf-text-muted)">${a.type} · ${a.calls.toLocaleString()} calls</div>
            <div style="font-size:12px;margin-top:8px">Last sync: ${a.lastSync}</div>
            <button class="wf-btn wf-btn--sm wf-mt-16">Configure</button>
            <button class="wf-btn wf-btn--sm">Test</button>
          </div></div>`).join("")}
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">API Validation Rules</span></div>
          <div class="wf-card__body" style="font-size:13px">
            <div class="wf-props__check wf-props__check--ok">✓ Authentication headers configured</div>
            <div class="wf-props__check wf-props__check--ok">✓ Rate limits within threshold</div>
            <div class="wf-props__check wf-props__check--warn">⚠ Custom ERP — connection error since 22 Jun</div>
          </div>
        </div>
      `
    },
    {
      id: "email", label: "Email Automation",
      render: () => channelScreen("Email Automation", "email", "Send Email", "email")
    },
    {
      id: "whatsapp", label: "WhatsApp Automation",
      render: () => channelScreen("WhatsApp Automation", "whatsapp", "Send WhatsApp", "whatsapp")
    },
    {
      id: "sms", label: "SMS Automation",
      render: () => channelScreen("SMS Automation", "sms", "Send SMS", "sms")
    },
    {
      id: "tasks", label: "Task Automation",
      render: () => channelScreen("Task Automation", "task", "Create Task", "tasks")
    },
    {
      id: "approval", label: "Approval Automation",
      render: () => channelScreen("Approval Automation", "approval", "Request Approval", "approval")
    },
    {
      id: "notification", label: "Notification Automation",
      render: () => channelScreen("Notification Automation", "notification", "Notify Manager", "notification")
    },
    {
      id: "audit", label: "Audit Trail",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Audit Trail", "All automation configuration and execution changes", exports())}
        ${filters()}
        <div class="wf-card"><div class="wf-card__body" style="padding:0">
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Time</th><th>User</th><th>Action</th><th>Target</th><th>Details</th></tr></thead>
          <tbody>${d().auditLog.map((a) => `<tr>
            <td>${a.time}</td><td>${a.user}</td><td>${a.action}</td><td>${a.target}</td><td style="font-size:12px;color:var(--wf-text-secondary)">${a.details}</td>
          </tr>`).join("")}</tbody></table></div>
        </div>
        ${WF.pagination(248, 1, 25)}
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Activity Timeline</span></div>
          <div class="wf-card__body">${WF.timeline(d().auditLog.map((a) => ({ title: a.action + " — " + a.target, time: a.time, user: a.user, desc: a.details })))}</div>
        </div>
      `
    }
  ];

  function channelScreen(title, key, actionName, screenId) {
    const ch = d().channelAutomations[key];
    const metrics = key === "email" || key === "whatsapp" || key === "sms" || key === "notification"
      ? [{ label: "Active Workflows", value: ch.active }, { label: "Sent", value: ch.sent.toLocaleString() }, { label: "Failed", value: ch.failed }, { label: "Templates", value: ch.templates }]
      : key === "task"
      ? [{ label: "Active Workflows", value: ch.active }, { label: "Tasks Created", value: ch.created.toLocaleString() }, { label: "Overdue", value: ch.overdue }]
      : [{ label: "Active Workflows", value: ch.active }, { label: "Pending", value: ch.pending }, { label: "Completed", value: ch.completed }];
    return `
      ${roleBar()}
      ${WF.pageHeader(title, "Workflows using ${actionName} action", `
        <button data-screen="actions" class="wf-btn wf-btn--sm">Action Library</button>
        <button data-screen="builder" class="wf-btn wf-btn--sm wf-btn--primary">+ New Workflow</button>
      `)}
      ${WF.kpiGrid(metrics)}
      <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Active Workflows</span></div>
        <div class="wf-card__body" style="padding:0">${WF.workflowTable(d().workflows.filter((w) => w.trigger.includes("Lead") || w.trigger.includes("Payment") || w.trigger.includes("Meeting")).slice(0, 4), { selectable: false })}</div>
      </div>
      <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Validation</span></div>
        <div class="wf-card__body">
          ${key === "email" ? '<div class="wf-props__check wf-props__check--ok">✓ Email validation — SPF/DKIM configured</div><div class="wf-props__check wf-props__check--warn">⚠ 3 templates missing subject line</div>' : ""}
          ${key === "sms" || key === "whatsapp" ? '<div class="wf-props__check wf-props__check--ok">✓ Phone validation — E.164 format</div><div class="wf-props__check wf-props__check--ok">✓ DND compliance check enabled</div>' : ""}
          ${key === "approval" ? '<div class="wf-props__check wf-props__check--ok">✓ Permission validation for approvers</div>' : ""}
          <div class="wf-props__check wf-props__check--ok">✓ API connection healthy</div>
        </div>
      </div>
    `;
  }

  function init() {
    WF.resetViewRole(activeRole);
    WF_SPA.init({
      moduleKey: "automation",
      moduleLabel: "Automation Engine",
      moduleTitle: "Automation Engine",
      moduleHref: "index.html",
      defaultScreen: "dashboard",
      searchPlaceholder: "Search workflows, triggers, executions, webhooks…",
      modals: WF.automationModals,
      screens
    });

    document.body.addEventListener("click", (e) => {
      const node = e.target.closest(".wf-node");
      if (node) {
        document.querySelectorAll(".wf-node").forEach((n) => n.classList.remove("wf-node--selected"));
        node.classList.add("wf-node--selected");
      }
    });
  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => AUTOMATION_MODULE.init());
