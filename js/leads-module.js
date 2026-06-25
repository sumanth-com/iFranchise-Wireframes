/* Lead Management — Single Page Module (16 screens) */

const LEADS_MODULE = (() => {
  const b = () => LEAD_DATA.leads[0];
  let activeRole = "Team Lead";

  const roleBar = () => WF.roleSwitcher(WF.getViewRole(activeRole), LEAD_DATA.roles, { badge: "Territory & pipeline permissions active" });

  const detailTabs = () => WF.spaTabs([
    { id: "details", label: "Overview" },
    { id: "timeline", label: "Timeline" },
    { id: "activity-log", label: "Activity" },
    { id: "documents", label: "Documents" },
    { id: "followup", label: "Follow-ups" },
    { id: "meeting-history", label: "Meetings" },
    { id: "communication", label: "Communication" },
    { id: "notes", label: "Notes" }
  ], WF_SPA.getCurrent());

  const screens = [
    {
      id: "dashboard", label: "Lead Dashboard",
      render: () => {
        const d = LEAD_DATA.dashboard;
        const trend = d.monthlyTrend;
        return `
        <div class="wf-lead-dashboard">
        ${WF.pageHeader("Lead Dashboard", `Lead performance overview — ${d.period}`, `
          <button class="wf-btn wf-btn--sm" data-action="export">Export Report</button>
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ New Lead</button>
        `)}
        ${WF.leadKpiGrid(d.kpis)}
        <div class="wf-dashboard-charts wf-dashboard-charts--split">
          <div class="wf-card wf-card--chart wf-card--chart-wide">
            <div class="wf-card__header">
              <span class="wf-card__title">Pipeline by Stage</span>
              ${WF.chartFilterSelect(["Last 7 days", "Last 30 days", "Last 90 days"], "Last 30 days")}
            </div>
            <div class="wf-card__body wf-card__body--chart">${WF.verticalBarChart(d.pipelineByStage, { axisMax: 60, axisStep: 15, columns: 10 })}</div>
          </div>
          <div class="wf-card wf-card--chart wf-card--chart-narrow">
            <div class="wf-card__header">
              <span class="wf-card__title">Monthly Trend</span>
              ${WF.chartFilterSelect(["2024", "2025", "2026"], "2026")}
            </div>
            <div class="wf-card__body wf-card__body--chart">${WF.dualLineChart(trend.labels, [
              { label: "Leads", values: trend.leads },
              { label: "Converted", values: trend.converted }
            ], { axisMax: 60, axisStep: 15 })}</div>
          </div>
        </div>
        <div class="wf-grid-2 wf-lead-dashboard__split">
          <div class="wf-card wf-card--panel">
            <div class="wf-card__header">
              <span class="wf-card__title">Top Performers — ${d.period}</span>
              <button data-screen="list" class="wf-btn wf-btn--sm wf-btn--ghost">View All</button>
            </div>
            <div class="wf-card__body wf-card__body--table">${WF.leadTopPerformers(d.topPerformers)}</div>
          </div>
          <div class="wf-card wf-card--panel">
            <div class="wf-card__header">
              <span class="wf-card__title">Recent Activity</span>
              <button data-screen="activity-log" class="wf-btn wf-btn--sm wf-btn--ghost">Live Feed</button>
            </div>
            <div class="wf-card__body wf-card__body--list">${WF.leadRecentActivity(d.recentActivity)}</div>
          </div>
        </div>
        ${WF.brandLeadCards(d.brandCounts)}
        </div>
      `;
      }
    },
    {
      id: "list", label: "All Leads",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Lead List", "Search, filter, and manage all franchise leads", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button class="wf-btn wf-btn--sm" data-action="import">Import Leads</button>
          <button class="wf-btn wf-btn--sm" data-action="export">Export Leads</button>
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ Create Lead</button>
        `)}
        ${WF.leadToolbar()}
        <div class="wf-flex wf-gap-8 wf-mb-16" style="align-items:center;flex-wrap:wrap">
          ${WF.viewToggle("table")}
          ${WF.leadSortSelect()}
          <span style="font-size:12px;color:var(--wf-text-muted);margin-left:auto">186 leads · Page 1 of 8</span>
        </div>
        ${WF.leadBulkBar(4)}
        <div id="wf-data-content">${WF.leadTable(LEAD_DATA.leads)}</div>
        ${WF.loadingState()}
      `
    },
    {
      id: "kanban", label: "Lead Kanban Board",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Lead Kanban Board", "Drag-and-drop pipeline view by stage", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="list" class="wf-btn wf-btn--sm">Table View</button>
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ Create Lead</button>
        `)}
        ${WF.leadToolbar({ showImport: false })}
        <div class="wf-flex wf-gap-8 wf-mb-16" style="align-items:center;flex-wrap:wrap">
          ${WF.viewToggle("kanban")}
          ${WF.leadSortSelect()}
        </div>
        ${WF.workflowStepper(b().stage, LEAD_DATA.pipeline)}
        ${WF.leadKanbanView(LEAD_DATA.leads)}
      `
    },
    {
      id: "create", label: "Create Lead",
      breadcrumb: [{ label: "Lead List", screen: "list" }, { label: "Create Lead" }],
      render: () => `${roleBar()}${WF.pageHeader("Create Lead", "Add a new franchise enquiry to the pipeline")}<div class="wf-card"><div class="wf-card__body">${WF.leadForm(null, "create")}</div></div>`
    },
    {
      id: "details", label: "Lead Details",
      breadcrumb: [{ label: "Lead List", screen: "list" }, { label: b().name }],
      render: () => {
        const l = b();
        return `
          ${roleBar()}
          ${WF.pageHeader(l.name, l.id + " · " + l.brand + " · " + l.city, `
            <button class="wf-btn wf-btn--sm" data-modal="send-email">Contact</button>
            <button data-screen="followup" class="wf-btn wf-btn--sm">Follow-up</button>
            <button data-screen="schedule-meeting" class="wf-btn wf-btn--sm">Schedule Meeting</button>
            <button data-screen="convert" class="wf-btn wf-btn--sm wf-btn--primary">Convert</button>
            <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
            <button class="wf-btn wf-btn--sm wf-btn--danger" data-modal="archive-lead">Archive</button>
          `)}
          ${WF.workflowStepper(l.stage, LEAD_DATA.pipeline)}
          ${detailTabs()}
          <div class="wf-detail-layout">
            <div class="wf-detail-sidebar">${WF.leadProfileCard(l)}</div>
            <div>
              <div class="wf-card-grid" style="grid-template-columns:repeat(4,1fr)">
                <div class="wf-stat-card"><div class="wf-stat-card__label">Lead Score</div><div class="wf-stat-card__value">${l.score}</div><div class="wf-stat-card__change">/ 100</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Priority</div><div class="wf-stat-card__value" style="font-size:16px">${WF.esc(l.priority)}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Expected Closure</div><div class="wf-stat-card__value" style="font-size:14px">${WF.esc(l.closureDate)}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Approval</div><div class="wf-stat-card__value" style="font-size:14px">${WF.esc(l.approvalStatus)}</div></div>
              </div>
              <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Lead Profile</span><button data-screen="edit" class="wf-btn wf-btn--sm wf-btn--ghost">Edit</button></div><div class="wf-card__body">
                <div class="wf-form__grid wf-form__grid--3">
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Email</span><span class="wf-detail-info__value">${WF.esc(l.email)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Mobile</span><span class="wf-detail-info__value">${WF.esc(WF.formatPhone(l.phone))}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">City / State</span><span class="wf-detail-info__value">${WF.esc(l.city)}, ${WF.esc(l.state)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Brand Interested</span><span class="wf-detail-info__value">${WF.esc(l.brand)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Investment Budget</span><span class="wf-detail-info__value">${WF.esc(l.budget)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Business Experience</span><span class="wf-detail-info__value">${WF.esc(l.experience)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Preferred Location</span><span class="wf-detail-info__value">${WF.esc(l.preferredLocation)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Lead Source</span><span class="wf-detail-info__value">${WF.esc(l.source)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Created</span><span class="wf-detail-info__value">${WF.esc(l.created)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Assigned Executive</span><span class="wf-detail-info__value">${WF.esc(l.salesExec)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Team Lead</span><span class="wf-detail-info__value">${WF.esc(l.teamLead)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Current Stage</span><span class="wf-detail-info__value"><span class="wf-badge">${WF.esc(l.stage)}</span></span></div>
                </div>
                <p style="font-size:13px;color:var(--wf-text-secondary);margin-top:12px">${WF.esc(l.notes)}</p>
              </div></div>
              <div class="wf-grid-2">
                <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Timeline</span><button data-screen="timeline" class="wf-btn wf-btn--sm wf-btn--ghost">View All</button></div><div class="wf-card__body">${WF.timeline(LEAD_DATA.timeline.slice(0, 3))}</div></div>
                <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Open Tasks</span><button data-screen="followup" class="wf-btn wf-btn--sm wf-btn--ghost">View All</button></div><div class="wf-card__body">${LEAD_DATA.tasks.filter(t => t.status !== "Completed").map(t => `<div class="wf-task"><div class="wf-task__checkbox"></div><div class="wf-task__content"><div class="wf-task__title">${WF.esc(t.title)}</div><div class="wf-task__meta">${WF.esc(t.assignee)} · Due ${WF.esc(t.due)}</div></div></div>`).join("")}</div></div>
              </div>
              <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Approval Status</span></div><div class="wf-card__body">
                <div class="wf-table-wrap wf-table-wrap--fit" style="border:none"><table class="wf-table wf-table--fit wf-table--compact"><thead><tr><th>ID</th><th>Type</th><th>Status</th><th>Approver</th><th>Date</th></tr></thead>
                <tbody>${LEAD_DATA.approvals.map(a => `<tr><td>${WF.esc(a.id)}</td><td>${WF.esc(a.type)}</td><td><span class="wf-badge">${WF.esc(a.status)}</span></td><td>${WF.esc(a.approver)}</td><td>${WF.esc(a.date)}</td></tr>`).join("")}</tbody></table></div>
              </div></div>
            </div>
          </div>
        `;
      }
    },
    {
      id: "edit", label: "Edit Lead",
      breadcrumb: [{ label: "Lead List", screen: "list" }, { label: b().name, screen: "details" }, { label: "Edit" }],
      render: () => `${roleBar()}${WF.pageHeader("Edit Lead", b().id)}<div class="wf-card"><div class="wf-card__body">${WF.leadForm(b(), "edit")}</div></div>`
    },
    {
      id: "timeline", label: "Lead Timeline",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Timeline" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Lead Timeline", b().name + " — Complete event history")}
        ${detailTabs()}
        <div class="wf-detail-layout"><div class="wf-detail-sidebar">${WF.leadProfileCard(b())}</div>
        <div>${WF.leadToolbar({ showImport: false, filters: ["Date Range", "Event Type", "User"] })}
        <div class="wf-card"><div class="wf-card__body">${WF.timeline(LEAD_DATA.timeline)}</div></div></div></div>
      `
    },
    {
      id: "assignment", label: "Lead Assignment",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Lead Assignment", "Assign or reassign leads to sales executives and team leads", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-modal="bulk-assign" class="wf-btn wf-btn--sm wf-btn--primary">Bulk Assign</button>
        `)}
        ${WF.leadToolbar({ showImport: false, filters: ["Assigned To", "Team Lead", "City", "Brand", "Current Stage"] })}
        ${WF.leadBulkBar(4)}
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Assignment Form</span></div><div class="wf-card__body">${WF.leadAssignmentForm()}</div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Team Workload</span></div><div class="wf-card__body">${WF.miniBarChart([
            { label: "Diksha", value: 28 },
            { label: "Akshita", value: 24 },
            { label: "Fazil", value: 22 },
            { label: "Swetha", value: 19 },
            { label: "Abrar", value: 16 }
          ])}</div></div>
        </div>
        <div id="wf-data-content">${WF.leadTable(LEAD_DATA.leads.slice(0, 8))}</div>
      `
    },
    {
      id: "followup", label: "Lead Follow-up",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Lead Follow-up", "Schedule and track follow-up tasks across the pipeline", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-modal="add-task" class="wf-btn wf-btn--sm wf-btn--primary">+ Schedule Follow-up</button>
        `)}
        ${WF.leadToolbar({ showImport: false, filters: ["Status", "Priority", "Assignee", "Due Date", "Channel"] })}
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">New Follow-up — ${WF.esc(b().name)}</span></div><div class="wf-card__body">${WF.leadFollowupForm(b())}</div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Follow-up Summary</span></div>
            <div class="wf-card-grid" style="grid-template-columns:repeat(2,1fr)">
              <div class="wf-stat-card"><div class="wf-stat-card__label">Open</div><div class="wf-stat-card__value">4</div></div>
              <div class="wf-stat-card"><div class="wf-stat-card__label">Overdue</div><div class="wf-stat-card__value">2</div></div>
              <div class="wf-stat-card"><div class="wf-stat-card__label">Due Today</div><div class="wf-stat-card__value">3</div></div>
              <div class="wf-stat-card"><div class="wf-stat-card__label">Completed (MTD)</div><div class="wf-stat-card__value">38</div></div>
            </div>
          </div>
        </div>
        <div class="wf-table-wrap wf-card"><table class="wf-table"><thead><tr><th>ID</th><th>Task</th><th>Lead</th><th>Assignee</th><th>Due</th><th>Channel</th><th>Priority</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${LEAD_DATA.followups.map(f => `<tr><td>${WF.esc(f.id)}</td><td class="wf-table__cell-clip">${WF.esc(f.task)}</td><td><a href="#details" data-screen="details" class="wf-table__link">${WF.esc(b().name)}</a></td><td>${WF.esc(f.assignee)}</td><td>${WF.esc(f.due)}</td><td><span class="wf-badge wf-badge--outline">${WF.esc(f.channel)}</span></td><td><span class="wf-badge">${WF.esc(f.priority)}</span></td><td>${WF.esc(f.status)}</td><td><button class="wf-btn wf-btn--sm">Complete</button></td></tr>`).join("")}</tbody></table>${WF.pagination(LEAD_DATA.followups.length)}</div>
      `
    },
    {
      id: "schedule-meeting", label: "Schedule Meeting",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Schedule Meeting" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Schedule Meeting", "Book a meeting with " + b().name)}
        <div class="wf-card"><div class="wf-card__body">${WF.leadMeetingForm(b())}</div></div>
      `
    },
    {
      id: "meeting-history", label: "Meeting History",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Meeting History" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Meeting History", b().name + " — All scheduled and completed meetings", `
          <button data-screen="schedule-meeting" class="wf-btn wf-btn--sm wf-btn--primary">+ Schedule Meeting</button>
        `)}
        ${detailTabs()}
        ${WF.leadToolbar({ showImport: false, filters: ["Status", "Mode", "Organizer", "Date Range"] })}
        ${WF.leadMeetingTable(LEAD_DATA.meetings)}
      `
    },
    {
      id: "documents", label: "Lead Documents",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Documents" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Lead Documents", b().name, `<button class="wf-btn wf-btn--sm wf-btn--primary" data-modal="upload-document">+ Upload Document</button>`)}
        ${detailTabs()}
        <div class="wf-detail-layout"><div class="wf-detail-sidebar">${WF.leadProfileCard(b())}</div>
        <div>${WF.leadToolbar({ showImport: true, filters: ["Type", "Date Range", "Uploaded By"] })}
        <div class="wf-table-wrap wf-card"><table class="wf-table"><thead><tr><th>File Name</th><th>Type</th><th>Size</th><th>Date</th><th>Uploaded By</th><th>Actions</th></tr></thead>
        <tbody>${LEAD_DATA.documents.map(d => `<tr><td><a href="#" class="wf-table__link">${WF.esc(d.name)}</a></td><td><span class="wf-badge">${WF.esc(d.type)}</span></td><td>${WF.esc(d.size)}</td><td>${WF.esc(d.date)}</td><td>${WF.esc(d.user)}</td><td><button class="wf-btn wf-btn--sm">Download</button> <button class="wf-btn wf-btn--sm">Preview</button></td></tr>`).join("")}</tbody></table>${WF.pagination(LEAD_DATA.documents.length)}</div></div></div>
      `
    },
    {
      id: "notes", label: "Lead Notes",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Internal Notes" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Internal Notes", b().name, `<button class="wf-btn wf-btn--sm wf-btn--primary" data-modal="add-note">+ Add Note</button>`)}
        ${detailTabs()}
        <div class="wf-detail-layout"><div class="wf-detail-sidebar">${WF.leadProfileCard(b())}</div>
        <div class="wf-card"><div class="wf-card__body">${LEAD_DATA.notes.map(n => `<div class="wf-note"><div class="wf-note__header"><span class="wf-note__author">${WF.esc(n.author)}</span><span class="wf-note__time">${WF.esc(n.time)}</span></div><div class="wf-note__body">${WF.esc(n.body)}</div></div>`).join("")}</div></div></div>
      `
    },
    {
      id: "communication", label: "Communication History",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Communication" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Communication History", b().name, `
          <button class="wf-btn wf-btn--sm" data-modal="send-email">Send Email</button>
          <button class="wf-btn wf-btn--sm wf-btn--primary" data-modal="log-communication">+ Log Communication</button>
        `)}
        ${detailTabs()}
        ${WF.leadToolbar({ showImport: false, filters: ["Type", "Date Range", "Status"] })}
        <div class="wf-flex wf-gap-8 wf-mb-16" style="flex-wrap:wrap">
          <button class="wf-btn wf-btn--sm wf-btn--primary" data-comm-tab="all">All</button>
          <button class="wf-btn wf-btn--sm" data-screen="communication">WhatsApp</button>
          <button class="wf-btn wf-btn--sm" data-screen="communication">Email</button>
          <button class="wf-btn wf-btn--sm" data-screen="communication">Calls</button>
        </div>
        <div class="wf-table-wrap wf-card wf-mb-16"><table class="wf-table"><thead><tr><th>Type</th><th>Subject</th><th>Date</th><th>From</th><th>To</th><th>Status</th></tr></thead>
        <tbody>${LEAD_DATA.communications.map(c => `<tr><td><span class="wf-badge">${WF.esc(c.type)}</span></td><td>${WF.esc(c.subject)}</td><td>${WF.esc(c.date)}</td><td>${WF.esc(c.from)}</td><td>${WF.esc(c.to)}</td><td>${WF.esc(c.status)}</td></tr>`).join("")}</tbody></table>${WF.pagination(LEAD_DATA.communications.length)}</div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">WhatsApp History</span></div><div class="wf-card__body">${LEAD_DATA.whatsappHistory.map(w => `<div class="wf-note"><div class="wf-note__header"><span class="wf-note__author">${WF.esc(w.direction)}</span><span class="wf-note__time">${WF.esc(w.date)}</span></div><div class="wf-note__body">${WF.esc(w.message)} <span class="wf-badge wf-badge--outline" style="margin-left:8px">${WF.esc(w.status)}</span></div></div>`).join("")}</div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Email History</span></div><div class="wf-card__body">${LEAD_DATA.emailHistory.map(e => `<div class="wf-note"><div class="wf-note__header"><span class="wf-note__author">${WF.esc(e.subject)}</span><span class="wf-note__time">${WF.esc(e.date)}</span></div><div class="wf-note__body">From: ${WF.esc(e.from)} · ${WF.esc(e.status)}${e.attachments ? ` · ${e.attachments} attachment(s)` : ""}</div></div>`).join("")}</div></div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Call History</span></div>
          <div class="wf-table-wrap wf-table-wrap--fit" style="border:none"><table class="wf-table wf-table--fit"><thead><tr><th>Date</th><th>Direction</th><th>Duration</th><th>Outcome</th><th>Agent</th><th>Recording</th></tr></thead>
          <tbody>${LEAD_DATA.callHistory.map(c => `<tr><td>${WF.esc(c.date)}</td><td>${WF.esc(c.direction)}</td><td>${WF.esc(c.duration)}</td><td>${WF.esc(c.outcome)}</td><td>${WF.esc(c.agent)}</td><td>${c.recording === "Available" ? `<button class="wf-btn wf-btn--sm">Play</button>` : "—"}</td></tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "convert", label: "Convert to Customer",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Convert to Customer" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Convert to Customer", "Convert qualified lead to franchise customer record")}
        ${WF.workflowStepper(b().stage, LEAD_DATA.pipeline)}
        <div class="wf-card"><div class="wf-card__body">${WF.leadConvertForm(b())}</div></div>
      `
    },
    {
      id: "archive", label: "Lead Archive",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Lead Archive", "Archived, inactive, and closed leads", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button class="wf-btn wf-btn--sm" data-action="export">Export Archive</button>
        `)}
        ${WF.leadToolbar({ showImport: false, filters: ["Archived Reason", "Brand", "City", "Date Range", "Assigned To"] })}
        <div class="wf-flex wf-gap-8 wf-mb-16" style="flex-wrap:wrap">
          ${WF.leadSortSelect()}
          <span style="font-size:12px;color:var(--wf-text-muted);margin-left:auto">${LEAD_DATA.archivedLeads.length} archived leads</span>
        </div>
        <div class="wf-table-wrap wf-card"><table class="wf-table"><thead><tr>
          <th><span class="wf-table__checkbox"></span></th><th>Lead ID</th><th>Name</th><th>Brand</th><th>City</th><th>Stage</th><th>Reason</th><th>Archived Date</th><th>Executive</th><th>Actions</th>
        </tr></thead><tbody>${LEAD_DATA.archivedLeads.map(l => `
          <tr><td><span class="wf-table__checkbox"></span></td>
          <td>${WF.esc(l.id)}</td><td>${WF.esc(l.name)}</td><td>${WF.esc(l.brand)}</td><td>${WF.esc(l.city)}</td>
          <td><span class="wf-badge">${WF.esc(l.stage)}</span></td><td><span class="wf-badge wf-badge--outline">${WF.esc(l.archivedReason)}</span></td>
          <td>${WF.esc(l.archivedDate)}</td><td>${WF.esc(l.salesExec)}</td>
          <td><div class="wf-table__actions"><button class="wf-btn wf-btn--sm">Restore</button><button class="wf-btn wf-btn--sm">View</button></div></td>
        </tr>`).join("")}</tbody></table>${WF.pagination(LEAD_DATA.archivedLeads.length)}</div>
      `
    },
    {
      id: "activity-log", label: "Activity Log",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Activity Log" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Activity Log", b().name, `<button class="wf-btn wf-btn--sm" data-action="export">Export Log</button>`)}
        ${detailTabs()}
        ${WF.leadToolbar({ showImport: false, filters: ["Action", "User", "Date"] })}
        <div class="wf-table-wrap wf-card"><table class="wf-table"><thead><tr><th>Timestamp</th><th>Action</th><th>Detail</th><th>User</th><th>IP</th></tr></thead>
        <tbody>${LEAD_DATA.activityLog.map(a => `<tr><td>${WF.esc(a.time)}</td><td><span class="wf-badge">${WF.esc(a.action)}</span></td><td>${WF.esc(a.detail)}</td><td>${WF.esc(a.user)}</td><td style="font-family:var(--wf-mono);font-size:12px">${WF.esc(a.ip)}</td></tr>`).join("")}</tbody></table>${WF.pagination(LEAD_DATA.activityLog.length)}</div>
      `
    }
  ];

  function init() {
    WF_SPA.init({
      moduleKey: "leads",
      moduleLabel: "Leads",
      moduleTitle: "Lead Management",
      moduleHref: "index.html",
      defaultScreen: "dashboard",
      sidebarCreate: "create",
      screenGroups: [
        {
          label: "Overview",
          screenIds: ["dashboard", "list", "kanban", "archive"]
        },
        {
          label: "Active Lead",
          screenIds: [
            "details", "edit", "timeline", "assignment", "followup",
            "schedule-meeting", "meeting-history", "documents", "notes",
            "communication", "convert", "activity-log"
          ]
        }
      ],
      searchPlaceholder: "Search leads by name, ID, mobile, email…",
      screens,
      modals: WF.leadModals
    });
  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => LEADS_MODULE.init());
