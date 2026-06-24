/* Dashboard Module — 8 role-based dashboards + Command Center + Employee Performance (SPA) */

const DASHBOARD_MODULE = (() => {
  const d = () => DASHBOARD_DATA;
  const ROLE_SCREENS = {
    CEO: "ceo",
    "Team Lead": "team-lead",
    "Sales Manager": "employee-performance",
    "Sales Executive": "sales-exec",
    "Brand Owner": "brand-owner",
    Accounts: "accounts",
    Admin: "admin"
  };

  const roleBar = (activeRole) => `<div class="wf-role-bar">
    <label class="wf-role-bar__label" for="wf-dashboard-role-select">View as:</label>
    <select id="wf-dashboard-role-select" class="wf-role-bar__select wf-form__select" data-dashboard-role-select aria-label="View as dashboard role">
      ${d().roles.map((r) => `<option value="${ROLE_SCREENS[r]}"${r === activeRole ? " selected" : ""}>${WF.esc(r)}</option>`).join("")}
    </select>
    <span class="wf-role-bar__badge wf-approval-badge">Role-based dashboard</span>
  </div>`;

  const dashToolbar = () => `<div class="wf-toolbar wf-mb-16">
    <div class="wf-toolbar__filters">
      ${WF.periodToggle("Monthly")}
      <input type="date" class="wf-form__input" value="2024-06-01" aria-label="From date" style="max-width:150px">
      <span style="font-size:12px;color:var(--wf-text-muted);align-self:center">to</span>
      <input type="date" class="wf-form__input" value="2024-06-30" aria-label="To date" style="max-width:150px">
      <select class="wf-filter-select" aria-label="City filter"><option>All Cities</option>${d().cities.map((c) => `<option>${c}</option>`).join("")}</select>
      <select class="wf-filter-select" aria-label="Brand filter"><option>All Brands</option>${d().brands.map((b) => `<option>${b}</option>`).join("")}</select>
    </div>
    <div class="wf-toolbar__actions">
      <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
      <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
    </div>
  </div>`;

  const kpiRow = (kpis) => `<div class="wf-card-grid">${kpis.map((k) => `
    <div class="wf-stat-card">
      <div class="wf-stat-card__label">${WF.esc(k.label)}</div>
      <div class="wf-stat-card__value"${String(k.value).length > 8 ? ' style="font-size:20px"' : ""}>${WF.esc(k.value)}</div>
      ${k.change ? `<div class="wf-stat-card__change">${WF.esc(k.change)}</div>` : ""}
    </div>
  `).join("")}</div>`;

  const progressCard = (label, pct, sub) => `<div class="wf-card"><div class="wf-card__body" style="padding:16px">
    <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:8px">
      <span style="font-weight:600">${WF.esc(label)}</span><span>${pct}%</span>
    </div>
    <div class="wf-progress"><div class="wf-progress__bar" style="width:${pct}%"></div></div>
    ${sub ? `<div style="font-size:11px;color:var(--wf-text-muted);margin-top:6px">${WF.esc(sub)}</div>` : ""}
  </div></div>`;

  const simpleTable = (headers, rows, options = {}) => {
    const { hidePagination = true } = options;
    const body = rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("");
    return `<div class="wf-table-wrap wf-table-wrap--fit">
      <table class="wf-table wf-table--fit wf-table--compact">
        <thead><tr>${headers.map((h) => `<th>${WF.esc(h)}</th>`).join("")}</tr></thead>
        <tbody>${body}</tbody>
      </table>
      ${hidePagination ? "" : WF.pagination(rows.length)}
    </div>`;
  };

  const notificationPanel = (items) => `<div class="wf-card"><div class="wf-card__header">
    <span class="wf-card__title">Notifications</span>
    <button class="wf-btn wf-btn--sm" data-modal="notifications">View All</button>
  </div><div class="wf-card__body" style="padding:0">
    ${items.map((n) => `<div class="wf-list-item">
      <div class="wf-list-item__content">
        <div class="wf-list-item__title">${WF.esc(n.title)}</div>
        <div class="wf-list-item__subtitle">${WF.esc(n.time)}</div>
      </div>
      <span class="wf-badge${n.priority === "High" ? " wf-badge--dark" : ""}">${WF.esc(n.priority)}</span>
    </div>`).join("")}
  </div></div>`;

  const calendarWidget = (meetings) => `<div class="wf-card"><div class="wf-card__header">
    <span class="wf-card__title">Calendar — Today</span>
    <button class="wf-btn wf-btn--sm" data-modal="send-email">Schedule</button>
  </div><div class="wf-card__body" style="padding:0">
    ${meetings.map((m) => `<div class="wf-list-item">
      <div class="wf-list-item__content">
        <div class="wf-list-item__title">${WF.esc(m.time)} — ${WF.esc(m.title)}</div>
        <div class="wf-list-item__subtitle">${WF.esc(m.attendee)} · ${WF.esc(m.mode)}</div>
      </div>
    </div>`).join("")}
  </div></div>`;

  const quickActions = (actions) => `<div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Quick Actions</span></div>
    <div class="wf-card__body"><div class="wf-flex wf-gap-8" style="flex-wrap:wrap">
      ${actions.map((a) => {
        if (a.action === "export") return `<button class="wf-btn wf-btn--sm" data-action="export">${WF.esc(a.label)}</button>`;
        if (a.modal) return `<button class="wf-btn wf-btn--sm" data-modal="${a.modal}">${WF.esc(a.label)}</button>`;
        return `<button class="wf-btn wf-btn--sm" data-screen="${a.screen}">${WF.esc(a.label)}</button>`;
      }).join("")}
      <button class="wf-btn wf-btn--sm wf-btn--primary" data-modal="send-email">Send Update</button>
    </div></div>
  </div>`;

  const screens = [
    {
      id: "ceo",
      label: "CEO Dashboard",
      render: () => {
        const data = d().ceo;
        return `
        ${roleBar("CEO")}
        ${WF.pageHeader("CEO Dashboard", "Company KPI overview — Abdul Syed · Chief Executive Officer", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="command-center" class="wf-btn wf-btn--sm wf-btn--primary">Command Center</button>
          <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
          <button class="wf-btn wf-btn--sm" data-modal="send-email">Executive Brief</button>
        `)}
        ${dashToolbar()}
        ${kpiRow(data.kpis)}
        <div class="wf-dashboard-charts wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Sales Funnel</span></div>
            <div class="wf-card__body"><p style="font-size:12px;color:var(--wf-text-muted);margin-bottom:12px">Lead to onboarded franchise journey — Jun 2024</p>
              ${WF.miniBarChart(data.salesFunnel)}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Revenue Trend</span></div>
            <div class="wf-card__body"><p style="font-size:12px;color:var(--wf-text-muted);margin-bottom:12px">Monthly revenue (₹ Cr) — Jan to Jun 2024</p>
              ${WF.miniLineChart(["Jan", "Feb", "Mar", "Apr", "May", "Jun"])}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Leads by Source</span></div>
            <div class="wf-card__body"><p style="font-size:12px;color:var(--wf-text-muted);margin-bottom:12px">Acquisition channels — current month</p>
              ${WF.miniBarChart(data.leadsBySource)}</div>
          </div>
        </div>
        <div class="wf-card-grid wf-card-grid--2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Franchise Conversion Rate</span></div>
            <div class="wf-card__body">
              <div style="font-size:32px;font-weight:700;margin-bottom:8px">24.2%</div>
              <div class="wf-stat-card__change">↑ 2.1% vs last quarter</div>
              <div class="wf-mt-16">${WF.miniLineChart(["Q1", "Q2", "Q3", "Q4", "Q1", "Q2"])}</div>
            </div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">City-wise Performance</span></div>
            <div class="wf-card__body"><p style="font-size:12px;color:var(--wf-text-muted);margin-bottom:12px">Converted customers by city</p>
              ${WF.miniBarChart(data.cityPerformance)}</div>
          </div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Team Performance Leaderboard</span>
            <button class="wf-btn wf-btn--sm" data-action="export">Export</button></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Executive", "Role", "Leads", "Converted", "Revenue", "Target %"],
              data.leaderboard.map((r) => [
                WF.esc(r.name),
                WF.esc(r.role),
                r.leads,
                r.converted,
                WF.esc(r.revenue),
                `<span class="wf-badge${r.pct >= 100 ? " wf-badge--dark" : ""}">${r.pct}%</span>`
              ])
            )}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Top Performing Brands</span></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Brand", "Revenue", "Outlets", "Growth"],
              data.topBrands.map((b) => [WF.esc(b.brand), WF.esc(b.revenue), b.outlets, WF.esc(b.growth)])
            )}</div>
          </div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Activities</span></div>
            <div class="wf-card__body">${WF.activityFeed(data.activities)}</div>
          </div>
          ${notificationPanel(data.notifications)}
        </div>
        <div class="wf-grid-2 wf-mb-20">
          ${calendarWidget(data.meetingsToday)}
          ${quickActions(data.quickActions)}
        </div>
      `;
      }
    },
    {
      id: "command-center",
      label: "CEO Command Center",
      render: () => {
        const cc = d().commandCenter;
        const ceo = d().ceo;
        return `
        ${roleBar("CEO")}
        ${WF.pageHeader("CEO Executive Command Center", "Consolidated view — revenue, pipeline, marketing, sales, calls, and performance", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="ceo" class="wf-btn wf-btn--sm">CEO Dashboard</button>
          <button class="wf-btn wf-btn--sm" data-action="export">Export Brief</button>
        `)}
        ${dashToolbar()}
        ${kpiRow([
          { label: "Revenue (YTD)", value: cc.revenue.ytd, change: "↑ " + cc.revenue.growth + " vs last year" },
          { label: "Pipeline Value", value: cc.pipelineValue },
          { label: "Collections (MTD)", value: cc.collections },
          { label: "Pending Approvals", value: cc.pendingApprovals, change: "Requires action" },
          { label: "Franchise Growth", value: cc.franchiseGrowth, change: "New outlets Q2" },
          { label: "Marketing ROI", value: cc.marketingRoi },
          { label: "Call Success Rate", value: cc.callMetrics.successRate, change: cc.callMetrics.connected + " connected" },
          { label: "Conversion Rate", value: "24.2%", change: "Lead to customer" }
        ])}
        <div class="wf-dashboard-charts wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Lead Funnel</span></div>
            <div class="wf-card__body">${WF.miniBarChart(ceo.salesFunnel)}</div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Revenue Trend</span></div>
            <div class="wf-card__body">${WF.miniLineChart(["Jan", "Feb", "Mar", "Apr", "May", "Jun"])}</div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Marketing Performance</span></div>
            <div class="wf-card__body">${WF.miniBarChart(ceo.leadsBySource)}</div></div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Sales Performance</span><button data-screen="employee-performance" class="wf-btn wf-btn--sm">Details</button></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(["Executive", "Revenue", "Target %"], ceo.leaderboard.slice(0, 5).map((r) => [WF.esc(r.name), WF.esc(r.revenue), r.pct + "%"]))}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Call Analytics</span><a href="../call-intelligence/index.html" class="wf-btn wf-btn--sm">Call Module →</a></div>
            <div class="wf-card__body">
              <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr)">
                <div class="wf-stat-card"><div class="wf-stat-card__label">Total Calls</div><div class="wf-stat-card__value">${cc.callMetrics.total.toLocaleString()}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Connected</div><div class="wf-stat-card__value">${cc.callMetrics.connected.toLocaleString()}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Success Rate</div><div class="wf-stat-card__value">${cc.callMetrics.successRate}</div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Brand Performance</span></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(["Brand", "Revenue", "Outlets", "Growth"], ceo.topBrands.map((b) => [WF.esc(b.brand), WF.esc(b.revenue), b.outlets, WF.esc(b.growth)]))}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">State-wise Performance</span></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(["State", "Revenue", "Leads"], cc.statePerformance.map((s) => [WF.esc(s.state), WF.esc(s.revenue), s.leads]))}</div>
          </div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Top Performers</span></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(["Employee", "Role", "Score", "Revenue"], cc.topPerformers.map((p) => [WF.esc(p.name), WF.esc(p.role), p.score, WF.esc(p.revenue)]))}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Bottom Performers</span><span class="wf-badge">Coaching</span></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(["Employee", "Role", "Score", "Revenue"], cc.bottomPerformers.map((p) => [WF.esc(p.name), WF.esc(p.role), p.score, WF.esc(p.revenue)]))}</div>
          </div>
        </div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">City-wise Performance</span></div>
          <div class="wf-card__body">${WF.miniBarChart(ceo.cityPerformance)}</div>
        </div>
      `;
      }
    },
    {
      id: "employee-performance",
      label: "Employee Performance",
      render: () => {
        const ep = d().employeePerformance;
        return `
        ${WF.roleSwitcher(WF.getViewRole("CEO"), ep.viewRoles, { badge: "Performance tracking" })}
        ${WF.pageHeader("Employee Performance Dashboard", "Leads, calls, meetings, conversions, and productivity scores", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
          <a href="../analytics/index.html#employee-performance" class="wf-btn wf-btn--sm">Full Reports →</a>
        `)}
        ${dashToolbar()}
        <div class="wf-card-grid wf-mb-20">
          ${ep.metrics.map((m) => `<div class="wf-stat-card"><div class="wf-stat-card__label">${WF.esc(m.label)}</div><div class="wf-stat-card__value">${WF.esc(m.value)}</div></div>`).join("")}
        </div>
        <div class="wf-card wf-mb-20"><div class="wf-card__header"><span class="wf-card__title">Team Performance</span></div>
          <div class="wf-card__body" style="padding:0">${simpleTable(
            ["Employee", "Leads", "Calls", "Talk Time", "Meetings", "Follow-ups", "Conv %", "Revenue", "Target", "Closures", "Activity", "Productivity"],
            ep.team.map((e) => [
              WF.esc(e.name), e.leads, e.calls, WF.esc(e.talkTime), e.meetings, e.followUps,
              WF.esc(e.conversion), WF.esc(e.revenue), WF.esc(e.target), e.closures, e.activity, e.productivity
            ])
          )}</div>
        </div>
        <div class="wf-grid-2">
          ${WF.chartCard("Activity Score Trend", "Line Chart", { height: 220 })}
          ${WF.chartCard("Productivity by Employee", "Bar Chart", { height: 220 })}
        </div>
      `;
      }
    },
    {
      id: "team-lead",
      label: "Team Lead Dashboard",
      render: () => {
        const data = d().teamLead;
        return `
        ${roleBar("Team Lead")}
        ${WF.pageHeader("Team Lead Dashboard", "Team performance — Himani Bhargava · Sales Manager", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
          <button class="wf-btn wf-btn--sm wf-btn--primary" data-modal="send-email">Team Update</button>
        `)}
        ${dashToolbar()}
        ${kpiRow(data.kpis)}
        <div class="wf-mb-20">${progressCard("Sales Target — ₹2.5 Cr", 78, "₹1.95 Cr achieved · 6 days remaining in June")}</div>
        <div class="wf-dashboard-charts wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Lead Pipeline</span></div>
            <div class="wf-card__body">${WF.miniBarChart(data.pipeline)}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Team Members</span></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Member", "Leads", "Meetings", "Target %", "Status"],
              data.members.map((m) => [
                WF.esc(m.name),
                m.leads,
                m.meetings,
                `${m.target}%`,
                `<span class="wf-badge${m.status === "Behind" ? " wf-badge--dark" : ""}">${WF.esc(m.status)}</span>`
              ])
            )}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Pending Follow-ups</span></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Lead", "Assignee", "Due", "Status"],
              data.followups.map((f) => [
                WF.esc(f.lead),
                WF.esc(f.assignee),
                WF.esc(f.due),
                `<span class="wf-badge${f.status === "Overdue" ? " wf-badge--dark" : ""}">${WF.esc(f.status)}</span>`
              ])
            )}</div>
          </div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Daily Activities</span></div>
            <div class="wf-card__body">${WF.activityFeed(data.activities)}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Comments</span></div>
            <div class="wf-card__body">${data.comments.map((c) => `
              <div style="padding:12px 0;border-bottom:1px solid var(--wf-border-light)">
                <div style="font-size:13px;font-weight:600">${WF.esc(c.author)} <span style="font-weight:400;color:var(--wf-text-muted)">· ${WF.esc(c.time)}</span></div>
                <div style="font-size:13px;margin-top:4px">${WF.esc(c.body)}</div>
              </div>
            `).join("")}</div>
          </div>
        </div>
        <div class="wf-grid-2">
          ${notificationPanel(data.notifications)}
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Escalations</span></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["ID", "Subject", "Raised By", "Priority", "Status"],
              data.escalations.map((e) => [
                WF.esc(e.id),
                WF.esc(e.subject),
                WF.esc(e.raisedBy),
                `<span class="wf-badge wf-badge--dark">${WF.esc(e.priority)}</span>`,
                WF.esc(e.status)
              ])
            )}</div>
          </div>
        </div>
      `;
      }
    },
    {
      id: "sales-exec",
      label: "Sales Executive Dashboard",
      render: () => {
        const data = d().salesExec;
        return `
        ${roleBar("Sales Executive")}
        ${WF.pageHeader("Sales Executive Dashboard", "My pipeline — Diksha · Team Lead: Himani Bhargava", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button class="wf-btn wf-btn--sm wf-btn--primary" data-modal="send-email">+ Quick Add Lead</button>
        `)}
        ${dashToolbar()}
        ${kpiRow(data.kpis)}
        <div class="wf-mb-20">${progressCard("Monthly Achievement — ₹45 L target", 85, "₹38.2 L closed · 6 days left")}</div>
        <div class="wf-dashboard-charts wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Lead Status Distribution</span></div>
            <div class="wf-card__body">${WF.miniDonut(data.leadStatus, "28")}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">My Leads</span>
            <button class="wf-btn wf-btn--sm" data-action="export">Export</button></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Lead ID", "Name", "Brand", "City", "Status", "Budget"],
              data.leads.map((l) => [
                WF.esc(l.id),
                WF.esc(l.name),
                WF.esc(l.brand),
                WF.esc(l.city),
                `<span class="wf-badge">${WF.esc(l.status)}</span>`,
                WF.esc(l.budget)
              ])
            )}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Today's Follow-ups</span></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Time", "Lead", "Type", "Note"],
              data.followups.map((f) => [WF.esc(f.time), WF.esc(f.lead), WF.esc(f.type), WF.esc(f.note)])
            )}</div>
          </div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Meetings Today</span>
            <button class="wf-btn wf-btn--sm" data-modal="send-email">Schedule</button></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Time", "Lead", "Type", "Note"],
              data.followups.map((f) => [WF.esc(f.time), WF.esc(f.lead), WF.esc(f.type), WF.esc(f.note)])
            )}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Tasks</span>
            <button class="wf-btn wf-btn--sm" data-modal="add-task">+ Add Task</button></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Task", "Due", "Status"],
              data.tasks.map((t) => [WF.esc(t.task), WF.esc(t.due), `<span class="wf-badge">${WF.esc(t.status)}</span>`])
            )}</div>
          </div>
        </div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Customers</span></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Customer", "Brand", "City", "Signed"],
              data.customers.map((c) => [WF.esc(c.name), WF.esc(c.brand), WF.esc(c.city), WF.esc(c.signed)])
            )}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Upcoming Calls</span></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["When", "Contact", "Brand", "Type"],
              data.calls.map((c) => [WF.esc(c.time), WF.esc(c.contact), WF.esc(c.brand), WF.esc(c.type)])
            )}</div>
          </div>
        </div>
      `;
      }
    },
    {
      id: "brand-owner",
      label: "Brand Owner Dashboard",
      render: () => {
        const data = d().brandOwner;
        return `
        ${roleBar("Brand Owner")}
        ${WF.pageHeader("Brand Owner Dashboard", "Brand partner overview — Akshita · Odette", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
          <button class="wf-btn wf-btn--sm wf-btn--primary" data-modal="send-email">Brand Update</button>
        `)}
        ${dashToolbar()}
        ${kpiRow(data.kpis)}
        <div class="wf-dashboard-charts wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Franchise Pipeline</span></div>
            <div class="wf-card__body">${WF.miniBarChart(data.pipeline)}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Enquiries by Brand</span></div>
            <div class="wf-card__body">${WF.miniBarChart(data.brandBreakdown)}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Upcoming Launches</span></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Outlet", "City", "Launch Date", "Status"],
              data.launches.map((l) => [
                WF.esc(l.outlet),
                WF.esc(l.city),
                WF.esc(l.date),
                `<span class="wf-badge">${WF.esc(l.status)}</span>`
              ])
            )}</div>
          </div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Documents</span>
            <button class="wf-btn wf-btn--sm" data-action="export">Download</button></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Document", "Type", "Date"],
              data.documents.map((doc) => [WF.esc(doc.name), WF.esc(doc.type), WF.esc(doc.date)])
            )}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Support Tickets</span></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Ticket", "Subject", "Status", "Priority"],
              data.tickets.map((t) => [
                WF.esc(t.id),
                WF.esc(t.subject),
                WF.esc(t.status),
                `<span class="wf-badge${t.priority === "High" ? " wf-badge--dark" : ""}">${WF.esc(t.priority)}</span>`
              ])
            )}</div>
          </div>
        </div>
        ${notificationPanel(data.notifications)}
      `;
      }
    },
    {
      id: "accounts",
      label: "Accounts Dashboard",
      render: () => {
        const data = d().accounts;
        return `
        ${roleBar("Accounts")}
        ${WF.pageHeader("Accounts Dashboard", "Finance overview — Fazil · Accounts Manager", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
          <button class="wf-btn wf-btn--sm wf-btn--primary" data-action="export-pdf">GST Report</button>
        `)}
        ${dashToolbar()}
        ${kpiRow(data.kpis)}
        <div class="wf-dashboard-charts wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Invoice Status</span></div>
            <div class="wf-card__body">${WF.miniDonut(data.invoiceStatus, "156")}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Monthly Finance Summary</span></div>
            <div class="wf-card__body">${WF.miniBarChart(data.monthlySummary)}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">GST Reports</span>
            <button class="wf-btn wf-btn--sm" data-action="export-pdf">Download</button></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Period", "Taxable Value", "GST", "Status"],
              data.gstReports.map((g) => [
                WF.esc(g.period),
                WF.esc(g.taxable),
                WF.esc(g.gst),
                `<span class="wf-badge wf-badge--dark">${WF.esc(g.status)}</span>`
              ])
            )}</div>
          </div>
        </div>
        <div class="wf-card wf-dashboard-full wf-mb-20">
          <div class="wf-card__header"><span class="wf-card__title">Recent Transactions</span>
            <button class="wf-btn wf-btn--sm" data-action="export">Export</button></div>
          <div class="wf-card__body" style="padding:0">${simpleTable(
            ["Payment ID", "Customer", "Brand", "Amount", "Date", "Status"],
            data.transactions.map((t) => [
              WF.esc(t.id),
              WF.esc(t.customer),
              WF.esc(t.brand),
              WF.esc(t.amount),
              WF.esc(t.date),
              `<span class="wf-badge${t.status === "Pending" ? "" : " wf-badge--dark"}">${WF.esc(t.status)}</span>`
            ])
          )}</div>
        </div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Refund Requests</span></div>
          <div class="wf-card__body" style="padding:0">${simpleTable(
            ["Refund ID", "Customer", "Amount", "Reason", "Status"],
            data.refunds.map((r) => [
              WF.esc(r.id),
              WF.esc(r.customer),
              WF.esc(r.amount),
              WF.esc(r.reason),
              `<span class="wf-badge">${WF.esc(r.status)}</span>`
            ])
          )}</div>
        </div>
      `;
      }
    },
    {
      id: "admin",
      label: "Admin Dashboard",
      render: () => {
        const data = d().admin;
        return `
        ${roleBar("Admin")}
        ${WF.pageHeader("Admin Dashboard", "System administration — Sumanth · Platform Admin", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button class="wf-btn wf-btn--sm" data-action="export">Export Logs</button>
          <button class="wf-btn wf-btn--sm wf-btn--primary" data-action="test-connection">Health Check</button>
        `)}
        ${dashToolbar()}
        ${kpiRow(data.kpis)}
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">System Health</span></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Service", "Status", "Uptime"],
              data.systemHealth.map((s) => [
                WF.esc(s.service),
                `<span class="wf-badge${s.status !== "Operational" ? " wf-badge--dark" : " wf-badge--dark"}">${WF.esc(s.status)}</span>`,
                WF.esc(s.uptime)
              ])
            )}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">API Status</span></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Endpoint", "Latency", "Status", "Rate"],
              data.apiStatus.map((a) => [
                WF.esc(a.endpoint),
                WF.esc(a.latency),
                `<span class="wf-badge wf-badge--dark">${a.status}</span>`,
                WF.esc(a.rate)
              ])
            )}</div>
          </div>
        </div>
        <div class="wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Storage Usage</span></div>
            <div class="wf-card__body">${data.storage.map((s) => `
              <div style="margin-bottom:16px">
                <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px">
                  <span style="font-weight:600">${WF.esc(s.name)}</span><span>${WF.esc(s.used)}</span>
                </div>
                <div class="wf-progress"><div class="wf-progress__bar" style="width:${s.pct}%"></div></div>
              </div>
            `).join("")}</div>
          </div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Audit Logs</span>
            <button class="wf-btn wf-btn--sm" data-action="export">Export</button></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Time", "User", "Action", "Entity"],
              data.auditLogs.map((l) => [WF.esc(l.time), WF.esc(l.user), WF.esc(l.action), WF.esc(l.entity)])
            )}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Security Alerts</span></div>
            <div class="wf-card__body" style="padding:0">${simpleTable(
              ["Type", "Detail", "Severity", "Time"],
              data.securityAlerts.map((a) => [
                WF.esc(a.type),
                WF.esc(a.detail),
                `<span class="wf-badge wf-badge--dark">${WF.esc(a.severity)}</span>`,
                WF.esc(a.time)
              ])
            )}</div>
          </div>
        </div>
        <div class="wf-grid-2">
          ${notificationPanel(data.notifications)}
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Users · Roles · Permissions</span></div>
            <div class="wf-card__body">
              <div class="wf-flex wf-gap-8" style="flex-wrap:wrap;margin-bottom:16px">
                <button class="wf-btn wf-btn--sm" data-modal="export">Users (248)</button>
                <button class="wf-btn wf-btn--sm" data-modal="export">Roles (14)</button>
                <button class="wf-btn wf-btn--sm" data-modal="export">Permissions Matrix</button>
              </div>
              <div style="font-size:13px;color:var(--wf-text-secondary);line-height:1.7">
                <p><strong>Database Health:</strong> Operational — replication lag 12ms</p>
                <p><strong>Last backup:</strong> 25 Jun 2024, 2:00 AM IST</p>
                <p><strong>Active sessions:</strong> 42 users online</p>
              </div>
            </div>
          </div>
        </div>
      `;
      }
    }
  ];

  function init() {
    WF_SPA.init({
      moduleKey: "dashboard",
      moduleLabel: "Dashboard",
      moduleTitle: "Executive Dashboard",
      moduleHref: "index.html",
      defaultScreen: "ceo",
      searchPlaceholder: "Search KPIs, reports, users, transactions…",
      screens
    });
  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => DASHBOARD_MODULE.init());
