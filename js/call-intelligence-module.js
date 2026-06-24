/* Call Intelligence — Single Page Module */

const CALL_INTELLIGENCE_MODULE = (() => {
  const d = () => CALL_DATA;
  const k = () => d().kpis;
  let activeRole = "CEO";

  const roleBar = () => WF.roleSwitcher(WF.getViewRole(activeRole), d().roles);
  const callKpis = () => WF.kpiGrid([
    { label: "Total Calls", value: k().totalCalls.toLocaleString() },
    { label: "Connected Calls", value: k().connectedCalls.toLocaleString(), change: "↑ 8% vs last month" },
    { label: "Missed Calls", value: k().missedCalls, change: "↓ 12% vs last month" },
    { label: "Talk Time", value: k().talkTime },
    { label: "Avg Duration", value: k().avgDuration },
    { label: "Success Rate", value: k().successRate },
    { label: "Conversion Rate", value: k().conversionRate, change: "Calls → qualified leads" }
  ]);
  const filters = () => WF.toolbar({ filters: ["Date Range", "Agent", "Direction", "Outcome", "Brand", "City"], showImport: false });

  const integrationBanner = () => `<div class="wf-card wf-mb-16"><div class="wf-card__body" style="padding:12px 16px">
    <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:var(--wf-text-muted);margin-bottom:10px">Call Intelligence Integrations</div>
    ${d().integrations.map((int) => `<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--wf-border-light);font-size:13px">
      <div style="width:36px;height:36px;background:var(--wf-placeholder);border-radius:8px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700">CZ</div>
      <div style="flex:1;min-width:0"><strong>${WF.esc(int.name)}</strong><div style="font-size:12px;color:var(--wf-text-muted);margin-top:2px">${WF.esc(int.note)}</div></div>
      <span class="wf-badge">${WF.esc(int.status)}</span>
      <button class="wf-btn wf-btn--sm">Configure</button>
    </div>`).join("")}
  </div></div>`;

  const screens = [
    {
      id: "dashboard", label: "Call Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Call Dashboard", "Real-time call metrics and team activity overview", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="live-calls" class="wf-btn wf-btn--sm wf-btn--primary">Live Calls (${d().liveCalls.length})</button>
        `)}
        ${integrationBanner()}
        ${WF.periodToggle("Daily")}
        ${callKpis()}
        <div class="wf-grid-2 wf-mb-20">
          ${WF.chartCard("Call Volume Trend", "Line Chart", { height: 240, drillScreen: "analytics" })}
          ${WF.chartCard("Connected vs Missed", "Donut Chart", { height: 240, drillScreen: "missed-calls" })}
        </div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Live Calls</span><button data-screen="live-calls" class="wf-btn wf-btn--sm">View All</button></div>
            <div class="wf-card__body" style="padding:0"><div class="wf-table-wrap" style="border:none"><table class="wf-table wf-table--compact"><thead><tr><th>Contact</th><th>Agent</th><th>Duration</th><th>Status</th></tr></thead>
            <tbody>${d().liveCalls.map((c) => `<tr><td>${WF.esc(c.caller)}</td><td>${WF.esc(c.agent)}</td><td>${WF.esc(c.duration)}</td><td><span class="wf-badge wf-badge--dark">${WF.esc(c.status)}</span></td></tr>`).join("")}</tbody></table></div></div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Activity</span><button data-screen="timeline" class="wf-btn wf-btn--sm">Timeline</button></div>
            <div class="wf-card__body">${WF.timeline(d().timeline.slice(0, 4))}</div>
          </div>
        </div>
      `
    },
    {
      id: "live-calls", label: "Live Calls",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Live Calls", "Active and queued calls in real time")}
        ${integrationBanner()}
        <div class="wf-card-grid wf-mb-16">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Active</div><div class="wf-stat-card__value">2</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Queued</div><div class="wf-stat-card__value">1</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Ringing</div><div class="wf-stat-card__value">1</div></div>
        </div>
        <div class="wf-card"><div class="wf-card__body" style="padding:0"><div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Contact</th><th>Number</th><th>Agent</th><th>Direction</th><th>Duration</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${d().liveCalls.map((c) => `<tr><td>${WF.esc(c.caller)}</td><td>${WF.formatPhone(c.number)}</td><td>${WF.esc(c.agent)}</td><td>${WF.esc(c.direction)}</td><td>${WF.esc(c.duration)}</td><td><span class="wf-badge wf-badge--dark">${WF.esc(c.status)}</span></td><td><button class="wf-btn wf-btn--sm">Listen</button><button class="wf-btn wf-btn--sm">Barge</button></td></tr>`).join("")}</tbody></table></div></div></div>
      `
    },
    {
      id: "history", label: "Call History",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Call History", "Complete call log with outcomes and recordings")}
        ${filters()}${WF.reportActions()}
        <div class="wf-card"><div class="wf-card__body" style="padding:0"><div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Call ID</th><th>Contact</th><th>Agent</th><th>Direction</th><th>Duration</th><th>Outcome</th><th>Date</th><th>Recording</th><th>Actions</th></tr></thead>
        <tbody>${d().callHistory.map((c) => `<tr><td style="font-size:12px">${WF.esc(c.id)}</td><td>${WF.esc(c.contact)}</td><td>${WF.esc(c.agent)}</td><td>${WF.esc(c.direction)}</td><td>${WF.esc(c.duration)}</td><td><span class="wf-badge">${WF.esc(c.outcome)}</span></td><td style="font-size:12px">${WF.esc(c.date)}</td><td>${c.recording ? "Yes" : "—"}</td><td><button class="wf-btn wf-btn--sm">Details</button></td></tr>`).join("")}</tbody></table>${WF.pagination(1842)}</div></div></div>
      `
    },
    {
      id: "incoming", label: "Incoming Calls",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Incoming Calls", "Inbound call log and response metrics")}
        ${filters()}${callKpis()}
        <div class="wf-card"><div class="wf-card__body" style="padding:0"><div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Contact</th><th>Agent</th><th>Duration</th><th>Outcome</th><th>Date</th></tr></thead>
        <tbody>${d().callHistory.filter((c) => c.direction === "Inbound").map((c) => `<tr><td>${WF.esc(c.contact)}</td><td>${WF.esc(c.agent)}</td><td>${WF.esc(c.duration)}</td><td><span class="wf-badge">${WF.esc(c.outcome)}</span></td><td>${WF.esc(c.date)}</td></tr>`).join("")}</tbody></table></div></div></div>
      `
    },
    {
      id: "outgoing", label: "Outgoing Calls",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Outgoing Calls", "Outbound call activity and connect rates")}
        ${filters()}${callKpis()}
        <div class="wf-card"><div class="wf-card__body" style="padding:0"><div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Contact</th><th>Agent</th><th>Duration</th><th>Outcome</th><th>Date</th></tr></thead>
        <tbody>${d().callHistory.filter((c) => c.direction === "Outbound").map((c) => `<tr><td>${WF.esc(c.contact)}</td><td>${WF.esc(c.agent)}</td><td>${WF.esc(c.duration)}</td><td><span class="wf-badge">${WF.esc(c.outcome)}</span></td><td>${WF.esc(c.date)}</td></tr>`).join("")}</tbody></table></div></div></div>
      `
    },
    {
      id: "connected-calls", label: "Connected Calls",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Connected Calls", "Successfully connected inbound and outbound calls")}
        ${filters()}
        ${WF.kpiGrid([
          { label: "Connected Today", value: "88" },
          { label: "Inbound Connected", value: "42" },
          { label: "Outbound Connected", value: "46" },
          { label: "Avg Talk Time", value: k().avgDuration },
          { label: "Connection Rate", value: k().successRate }
        ])}
        <div class="wf-card"><div class="wf-card__body" style="padding:0"><div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Contact</th><th>Agent</th><th>Direction</th><th>Duration</th><th>Talk Time</th><th>Outcome</th><th>Date</th></tr></thead>
        <tbody>${d().callHistory.filter((c) => c.duration !== "0m 00s").map((c) => `<tr><td>${WF.esc(c.contact)}</td><td>${WF.esc(c.agent)}</td><td>${WF.esc(c.direction)}</td><td>${WF.esc(c.duration)}</td><td>${WF.esc(c.duration)}</td><td><span class="wf-badge">${WF.esc(c.outcome)}</span></td><td>${WF.esc(c.date)}</td></tr>`).join("")}</tbody></table></div></div></div>
      `
    },
    {
      id: "missed-calls", label: "Missed Calls",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Missed Calls", "Missed and unanswered calls requiring follow-up")}
        ${filters()}
        ${WF.kpiGrid([
          { label: "Missed Today", value: "14" },
          { label: "Callback Pending", value: "8" },
          { label: "Avg Response Time", value: "42 min" },
          { label: "Recovery Rate", value: "68%" }
        ])}
        <div class="wf-card"><div class="wf-card__body" style="padding:0"><div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Contact</th><th>Number</th><th>Agent</th><th>Missed At</th><th>Callback Status</th><th>Actions</th></tr></thead>
        <tbody>
          <tr><td>Vikram Patel</td><td>${WF.formatPhone("+91 98765 11111")}</td><td>Himani Bhargava</td><td>25 Jun, 9:52 AM</td><td><span class="wf-badge">Scheduled</span></td><td><button class="wf-btn wf-btn--sm wf-btn--primary">Call Back</button></td></tr>
          <tr><td>Unknown</td><td>${WF.formatPhone("+91 87654 22222")}</td><td>—</td><td>25 Jun, 8:30 AM</td><td><span class="wf-badge">Pending</span></td><td><button class="wf-btn wf-btn--sm wf-btn--primary">Call Back</button></td></tr>
        </tbody></table></div></div></div>
      `
    },
    {
      id: "recordings", label: "Call Recording Library",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Call Recording Library", "Searchable archive of call recordings")}
        ${filters()}
        <div class="wf-card"><div class="wf-card__body" style="padding:0"><div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Recording ID</th><th>Call</th><th>Contact</th><th>Agent</th><th>Duration</th><th>Size</th><th>Date</th><th>Actions</th></tr></thead>
        <tbody>${d().recordings.map((r) => `<tr><td style="font-size:12px">${WF.esc(r.id)}</td><td>${WF.esc(r.call)}</td><td>${WF.esc(r.contact)}</td><td>${WF.esc(r.agent)}</td><td>${WF.esc(r.duration)}</td><td>${WF.esc(r.size)}</td><td>${WF.esc(r.date)}</td><td><button class="wf-btn wf-btn--sm">Play</button><button class="wf-btn wf-btn--sm">Download</button></td></tr>`).join("")}</tbody></table>${WF.pagination(342)}</div></div></div>
      `
    },
    {
      id: "analytics", label: "Call Analytics",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Call Analytics", "Call volume, duration, and outcome analytics")}
        ${WF.periodToggle("Monthly")}${filters()}
        ${callKpis()}
        <div class="wf-grid-2 wf-mb-16">
          ${WF.chartCard("Call Volume by Hour", "Heatmap", { height: 260 })}
          ${WF.chartCard("Outcome Distribution", "Pie Chart", { height: 260 })}
        </div>
        ${WF.chartCard("Talk Time by Agent", "Horizontal Bar Chart", { drillScreen: "employee-activity" })}
      `
    },
    {
      id: "performance", label: "Call Performance",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Call Performance", "Success rate, conversion, and SLA metrics")}
        ${WF.periodToggle("Monthly")}${callKpis()}
        <div class="wf-grid-2">
          ${WF.chartCard("Success Rate Trend", "Line Chart", { height: 260 })}
          ${WF.chartCard("Conversion Rate Trend", "Line Chart", { height: 260 })}
        </div>
      `
    },
    {
      id: "employee-activity", label: "Employee Call Activity",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Employee Call Activity", "Per-employee call metrics and productivity")}
        ${filters()}${WF.reportActions()}
        <div class="wf-card"><div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Employee", "Total Calls", "Connected", "Talk Time", "Conversion", "Score"], d().employeeActivity.map((e) => [e.name, e.calls, e.connected, e.talkTime, e.conversion, e.score]))}</div></div>
        ${WF.chartCard("Calls by Employee", "Bar Chart", { height: 240 })}
      `
    },
    {
      id: "timeline", label: "Call Timeline",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Call Timeline", "Chronological call activity feed")}
        ${filters()}
        <div class="wf-card"><div class="wf-card__body">${WF.timeline(d().timeline)}</div></div>
      `
    },
    {
      id: "daily-report", label: "Daily Call Report",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Daily Call Report", `Call summary — ${d().dailyReport.date}`, `<button class="wf-btn wf-btn--sm" data-action="export-pdf">Export PDF</button>`)}
        ${WF.kpiGrid([
          { label: "Inbound", value: d().dailyReport.inbound },
          { label: "Outbound", value: d().dailyReport.outbound },
          { label: "Missed", value: d().dailyReport.missed },
          { label: "Connected", value: d().dailyReport.connected },
          { label: "Talk Time", value: d().dailyReport.talkTime },
          { label: "Avg Duration", value: d().dailyReport.avgDuration },
          { label: "Conversions", value: d().dailyReport.conversions }
        ])}
        <div class="wf-grid-2">${WF.chartCard("Hourly Call Volume", "Bar Chart")}${WF.chartCard("Agent Breakdown", "Stacked Bar")}</div>
      `
    },
    {
      id: "weekly-report", label: "Weekly Call Report",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Weekly Call Report", `Call summary — ${d().weeklyReport.week}`, `<button class="wf-btn wf-btn--sm" data-action="export-pdf">Export PDF</button>`)}
        ${WF.kpiGrid([
          { label: "Total Calls", value: d().weeklyReport.totalCalls.toLocaleString() },
          { label: "Connected", value: d().weeklyReport.connected.toLocaleString() },
          { label: "Missed", value: d().weeklyReport.missed },
          { label: "Talk Time", value: d().weeklyReport.talkTime },
          { label: "Success Rate", value: d().weeklyReport.successRate },
          { label: "Conversions", value: d().weeklyReport.conversions }
        ])}
        <div class="wf-grid-2">${WF.chartCard("Daily Call Volume", "Bar Chart")}${WF.chartCard("Agent Performance", "Bar Chart", { drillScreen: "employee-activity" })}</div>
      `
    },
    {
      id: "monthly-report", label: "Monthly Call Report",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Monthly Call Report", `Call summary — ${d().monthlyReport.month}`, `<button class="wf-btn wf-btn--sm" data-action="export-pdf">Export PDF</button>`)}
        ${WF.kpiGrid([
          { label: "Total Calls", value: d().monthlyReport.totalCalls.toLocaleString() },
          { label: "Connected", value: d().monthlyReport.connected.toLocaleString() },
          { label: "Missed", value: d().monthlyReport.missed },
          { label: "Talk Time", value: d().monthlyReport.talkTime },
          { label: "Success Rate", value: d().monthlyReport.successRate },
          { label: "Conversions", value: d().monthlyReport.conversions }
        ])}
        <div class="wf-grid-2">${WF.chartCard("Weekly Trend", "Line Chart")}${WF.chartCard("Top Performers", "Bar Chart", { drillScreen: "employee-activity" })}</div>
      `
    }
  ];

  function init() {
    WF.resetViewRole(activeRole);
    WF_SPA.init({
      moduleKey: "callIntelligence",
      moduleLabel: "Call Intelligence",
      moduleTitle: "Call Intelligence",
      moduleHref: "index.html",
      defaultScreen: "dashboard",
      searchPlaceholder: "Search calls, agents, recordings…",
      screens
    });
  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => CALL_INTELLIGENCE_MODULE.init());
