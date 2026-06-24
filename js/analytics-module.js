/* Reporting & Analytics — Single Page Module (25 screens) */

const ANALYTICS_MODULE = (() => {
  const k = () => ANALYTICS_DATA.kpis;
  let activeRole = "CEO";

  const roleBar = () => WF.roleSwitcher(WF.getViewRole(activeRole), ANALYTICS_DATA.roles);
  const filters = () => WF.toolbar({ filters: ["Date Range", "Brand", "City", "Sales Executive", "Department", "Franchise Model"], showImport: false });
  const exports = () => WF.reportActions();

  const execKpis = () => WF.kpiGrid([
    { label: "Total Revenue", value: WF.formatINR(k().totalRevenue), change: "↑ " + k().growthPct + "% YoY" },
    { label: "Monthly Revenue", value: WF.formatINR(k().monthlyRevenue) },
    { label: "Qualified Leads", value: k().qualifiedLeads, change: "of " + k().totalLeads + " total" },
    { label: "Conversion Rate", value: k().conversionRate + "%" },
    { label: "Pipeline Value", value: WF.formatINR(k().pipelineValue) },
    { label: "ROI", value: k().roi + "%" },
    { label: "Profit Margin", value: k().profitMargin + "%" },
    { label: "Top Brand", value: k().topBrand, small: true }
  ]);

  const screens = [
    {
      id: "executive", label: "Executive Analytics Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Executive Analytics Dashboard", "Company-wide KPIs, revenue trends, and performance overview", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="kpi" class="wf-btn wf-btn--sm">KPI Dashboard</button>
          <button data-screen="reports-dashboard" class="wf-btn wf-btn--sm wf-btn--primary">All Reports</button>
        `)}
        ${WF.periodToggle("Monthly")}
        ${execKpis()}
        <div class="wf-grid-2 wf-mb-20">
          ${WF.chartCard("Revenue Trend", "Area Chart", { height: 280, drillScreen: "revenue", subtitle: "Jan–Jun 2024 · ₹2.84 Cr total" })}
          ${WF.chartCard("Lead Funnel", "Funnel Chart", { height: 280, drillScreen: "lead-conversion" })}
        </div>
        <div class="wf-grid-2">
          ${WF.chartCard("Revenue by Brand", "Bar Chart", { drillScreen: "brands" })}
          ${WF.chartCard("Revenue by City", "Geo Map + Bar", { drillScreen: "geographic" })}
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Top Performers</span><button data-screen="team" class="wf-btn wf-btn--sm">Team Reports</button></div>
          <div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Executive", "Team", "Revenue", "Conversion"], [
            [k().topExec, k().topTeam, "₹1.12 Cr", "83%"],
            ["Himani Bhargava", "Bengaluru Sales", "₹98 L", "89%"],
            ["Diksha", "Hyderabad", "₹72 L", "73%"]
          ])}</div>
        </div>
      `
    },
    {
      id: "reports-dashboard", label: "Reports Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Reports Dashboard", "Access all standard and custom reports", `
          <button data-screen="custom-builder" class="wf-btn wf-btn--sm wf-btn--primary">+ Custom Report</button>
        `)}
        <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr)">
          ${["Sales Reports", "Lead Conversion", "Customer Reports", "Brand Performance", "Franchise Models", "Meeting Reports", "Revenue Reports", "Payment Reports", "Team Performance", "Geographic Analytics", "KPI Dashboard", "Scheduled Reports", "Employee Performance", "Call Performance", "Marketing ROI", "Lead Source Reports", "Sales Funnel", "Campaign Performance", "State-wise Reports", "City-wise Reports"].map((r, i) => {
            const ids = ["sales", "lead-conversion", "customers", "brands", "franchise-models", "meetings", "revenue", "payments", "team", "geographic", "kpi", "scheduled", "employee-performance", "call-performance", "marketing-roi", "lead-source", "sales-funnel", "campaign-performance", "state-wise", "city-wise"];
            return `<div class="wf-card" style="cursor:pointer" data-screen="${ids[i]}"><div class="wf-card__body" style="text-align:center;padding:24px">
              <div style="width:40px;height:40px;background:var(--wf-placeholder);border-radius:8px;margin:0 auto 12px"></div>
              <div style="font-size:13px;font-weight:600">${r}</div>
              <button class="wf-btn wf-btn--sm wf-mt-16" data-screen="${ids[i]}">Open</button>
            </div></div>`;
          }).join("")}
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recently Viewed</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Report</th><th>Viewed By</th><th>Date</th><th>Actions</th></tr></thead>
          <tbody>
            <tr><td>Q2 Revenue by Brand</td><td>Abdul Syed</td><td>25 Jun 2024</td><td><button data-screen="revenue" class="wf-btn wf-btn--sm">Open</button></td></tr>
            <tr><td>Lead Funnel — Jun 2024</td><td>Himani Bhargava</td><td>24 Jun 2024</td><td><button data-screen="lead-conversion" class="wf-btn wf-btn--sm">Open</button></td></tr>
            <tr><td>Team Performance</td><td>Sales Manager</td><td>23 Jun 2024</td><td><button data-screen="team" class="wf-btn wf-btn--sm">Open</button></td></tr>
          </tbody></table></div>
        </div>
      `
    },
    {
      id: "sales", label: "Sales Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Sales Reports", "Sales funnel, pipeline, and deal performance")}
        ${filters()}${exports()}${WF.comparisonToggle("period")}
        ${WF.kpiGrid([
          { label: "Pipeline Value", value: WF.formatINR(k().pipelineValue) },
          { label: "Avg Deal Size", value: WF.formatINR(k().avgDealSize) },
          { label: "Converted Customers", value: k().convertedCustomers },
          { label: "Growth", value: k().growthPct + "%", change: "vs last quarter" }
        ])}
        <div class="wf-grid-2 wf-mb-16">
          ${WF.chartCard("Sales Funnel", "Funnel Chart", { height: 260 })}
          ${WF.chartCard("Revenue Forecast", "Forecast Line Chart", { height: 260, subtitle: "Next 6 months projection" })}
        </div>
        ${WF.chartCard("Sales by Executive", "Horizontal Bar Chart", { drillScreen: "team" })}
      `
    },
    {
      id: "lead-conversion", label: "Lead Conversion Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Lead Conversion Reports", "Lead funnel, source analysis, and conversion metrics")}
        ${filters()}${exports()}${WF.periodToggle("Monthly")}
        ${WF.kpiGrid([
          { label: "Total Leads", value: k().totalLeads },
          { label: "Qualified", value: k().qualifiedLeads },
          { label: "Converted", value: k().convertedCustomers },
          { label: "Conversion Rate", value: k().conversionRate + "%" }
        ])}
        <div class="wf-grid-2">
          ${WF.chartCard("Lead Funnel", "Funnel Chart", { height: 280 })}
          ${WF.chartCard("Conversion by Source", "Pie Chart")}
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Lead Funnel Stages</span></div>
          <div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Stage", "Count", "Conversion %"], ANALYTICS_DATA.leadFunnel)}</div>
        </div>
      `
    },
    {
      id: "customers", label: "Customer Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Customer Reports", "Customer acquisition, retention, and satisfaction")}
        ${filters()}${exports()}
        ${WF.kpiGrid([
          { label: "Total Customers", value: "248" },
          { label: "New (MTD)", value: "18", change: "↑ 12%" },
          { label: "Onboarding", value: "34" },
          { label: "Satisfaction", value: k().customerSatisfaction + "/5" }
        ])}
        <div class="wf-grid-2">
          ${WF.chartCard("Customer Acquisition Trend", "Line Chart")}
          ${WF.chartCard("Customers by Brand", "Bar Chart", { drillScreen: "brands" })}
        </div>
        ${WF.reportDataTable(["Customer", "Brand", "City", "Status", "Revenue"], [
          ["Rahul Sharma", "Odette", "Bengaluru", "Onboarding", "₹14.75 L"],
          ["Meera Iyer", "Kasturi", "Pune", "Active", "₹29.5 L"],
          ["Priya Nair", "Tea Time", "Hyderabad", "Pending", "₹10.44 L"]
        ])}
      `
    },
    {
      id: "brands", label: "Brand Performance Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Brand Performance Reports", "Revenue, growth, and franchise performance by brand")}
        ${filters()}${exports()}${WF.comparisonToggle("brand")}
        ${WF.kpiGrid([
          { label: "Top Brand", value: k().topBrand, small: true },
          { label: "Brand Revenue", value: "₹1.02 Cr", change: "Odette · 36%" },
          { label: "Active Brands", value: "6" },
          { label: "Brand Growth", value: "+14%", change: "Odette YoY" }
        ])}
        <div class="wf-grid-2 wf-mb-16">
          ${WF.chartCard("Revenue by Brand", "Bar Chart", { height: 260 })}
          ${WF.chartCard("Brand Growth Trend", "Line Chart", { height: 260 })}
        </div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Brand Performance Table</span></div>
          <div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Brand", "Revenue", "Share", "Growth"], ANALYTICS_DATA.revenueByBrand)}</div>
        </div>
      `
    },
    {
      id: "franchise-models", label: "Franchise Model Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Franchise Model Reports", "Model performance, ROI, and franchisee adoption")}
        ${filters()}${exports()}
        ${WF.kpiGrid([
          { label: "Published Models", value: "32" },
          { label: "Avg ROI", value: "24%" },
          { label: "Avg Investment", value: "₹28L" },
          { label: "Interested Leads", value: "186" }
        ])}
        <div class="wf-grid-2">
          ${WF.chartCard("Investment vs ROI", "Scatter Plot")}
          ${WF.chartCard("Models by Brand", "Stacked Bar")}
        </div>
        ${WF.reportDataTable(["Model", "Brand", "Investment", "ROI", "Leads", "Franchisees"], [
          ["Odette Premium", "Odette", "₹35–45L", "26%", "42", "18"],
          ["OBC Flagship", "Original Burger Co.", "₹28–38L", "24%", "28", "12"],
          ["Kasturi Family", "Kasturi", "₹40–55L", "22%", "24", "8"]
        ])}
      `
    },
    {
      id: "meetings", label: "Meeting Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Meeting Reports", "Meeting productivity, success rate, and outcomes")}
        ${filters()}${exports()}
        ${WF.kpiGrid([
          { label: "Total Meetings (MTD)", value: "186" },
          { label: "Success Rate", value: k().meetingSuccessRate + "%" },
          { label: "Avg Duration", value: "52 min" },
          { label: "Completed", value: "142" }
        ])}
        <div class="wf-grid-2">
          ${WF.chartCard("Meetings by Type", "Pie Chart")}
          ${WF.chartCard("Success Rate Trend", "Line Chart")}
        </div>
        ${WF.reportDataTable(["Type", "Scheduled", "Completed", "Success %"], [
          ["Brand Presentation", "48", "38", "79%"],
          ["Discovery Call", "62", "52", "84%"],
          ["Site Visit", "24", "18", "75%"],
          ["Agreement Review", "18", "16", "89%"]
        ])}
      `
    },
    {
      id: "revenue", label: "Revenue Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Revenue Reports", "Revenue breakdown, forecast, and trends")}
        ${filters()}${exports()}${WF.periodToggle("Quarterly")}
        ${WF.kpiGrid([
          { label: "Total Revenue", value: WF.formatINR(k().totalRevenue) },
          { label: "Quarterly", value: WF.formatINR(k().quarterlyRevenue) },
          { label: "Monthly", value: WF.formatINR(k().monthlyRevenue) },
          { label: "Growth", value: "+" + k().growthPct + "%" }
        ])}
        <div class="wf-grid-2 wf-mb-16">
          ${WF.chartCard("Revenue Trend", "Area Chart", { height: 280 })}
          ${WF.chartCard("Revenue Forecast", "Forecast Graph", { height: 280 })}
        </div>
        ${WF.chartCard("Revenue by Brand & City", "Heat Map", { height: 200, drillScreen: "geographic" })}
      `
    },
    {
      id: "payments", label: "Payment Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Payment Reports", "Collections, pending dues, and payment analytics")}
        ${filters()}${exports()}
        ${WF.kpiGrid([
          { label: "Collected (MTD)", value: WF.formatINR(k().monthlyRevenue) },
          { label: "Pending", value: WF.formatINR(k().pendingPayments) },
          { label: "Collection Rate", value: "87%" },
          { label: "Overdue", value: "3" }
        ])}
        <div class="wf-grid-2">
          ${WF.chartCard("Payment Collection Trend", "Line Chart")}
          ${WF.chartCard("Payments by Type", "Pie Chart")}
        </div>
        ${WF.reportDataTable(["Type", "Collected", "Pending", "Rate"], [
          ["Franchise Fee", "₹1.42 Cr", "₹28 L", "84%"],
          ["Booking Amount", "₹32 L", "₹8 L", "80%"],
          ["Royalty", "₹18 L", "₹2 L", "90%"],
          ["Security Deposit", "₹48 L", "₹12 L", "80%"]
        ])}
      `
    },
    {
      id: "team", label: "Team Performance Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Team Performance Reports", "Sales executive and team leader performance")}
        ${filters()}${exports()}${WF.comparisonToggle("period")}
        ${WF.kpiGrid([
          { label: "Top Executive", value: k().topExec, small: true },
          { label: "Top Team", value: k().topTeam, small: true },
          { label: "Team Members", value: "9" },
          { label: "Avg Conversion", value: "78%" }
        ])}
        <div class="wf-card wf-mb-16">${WF.chartCard("Revenue by Sales Executive", "Horizontal Bar Chart", { height: 260 })}</div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Employee Performance</span></div>
          <div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Executive", "City", "Brand", "Leads", "Conversions", "Revenue", "Rate %"], ANALYTICS_DATA.teamPerformance)}</div>
        </div>
      `
    },
    {
      id: "geographic", label: "Geographic Analytics",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Geographic Analytics", "City-wise revenue, expansion, and performance")}
        ${filters()}${exports()}${WF.comparisonToggle("city")}
        ${WF.kpiGrid([
          { label: "Active Cities", value: "12" },
          { label: "Top City", value: "Bengaluru" },
          { label: "City Revenue", value: "₹92 L", change: "Bengaluru · 32%" },
          { label: "Expansion Targets", value: "4", change: "Q3 2024" }
        ])}
        <div class="wf-grid-2 wf-mb-16">
          ${WF.chartCard("India Geo Map", "Geo Map — Revenue Heat", { height: 320, subtitle: "Revenue intensity by city" })}
          ${WF.chartCard("City-wise Expansion", "Bar Chart", { height: 320 })}
        </div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Revenue by City</span></div>
          <div class="wf-card__body" style="padding:0">${WF.reportDataTable(["City", "Revenue", "Share", "Growth"], ANALYTICS_DATA.revenueByCity)}</div>
        </div>
      `
    },
    {
      id: "kpi", label: "KPI Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("KPI Dashboard", "All key performance indicators at a glance", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
        `)}
        ${WF.periodToggle("Monthly")}
        ${WF.kpiGrid([
          { label: "Total Revenue", value: WF.formatINR(k().totalRevenue), change: "↑ " + k().growthPct + "%" },
          { label: "Monthly Revenue", value: WF.formatINR(k().monthlyRevenue) },
          { label: "Quarterly Revenue", value: WF.formatINR(k().quarterlyRevenue) },
          { label: "Annual Revenue", value: WF.formatINR(k().annualRevenue) },
          { label: "Total Leads", value: k().totalLeads },
          { label: "Qualified Leads", value: k().qualifiedLeads },
          { label: "Converted Customers", value: k().convertedCustomers },
          { label: "Conversion Rate", value: k().conversionRate + "%" },
          { label: "Avg Deal Size", value: WF.formatINR(k().avgDealSize) },
          { label: "Pending Payments", value: WF.formatINR(k().pendingPayments) },
          { label: "Meeting Success", value: k().meetingSuccessRate + "%" },
          { label: "Customer Satisfaction", value: k().customerSatisfaction + "/5" },
          { label: "ROI", value: k().roi + "%" },
          { label: "Profit Margin", value: k().profitMargin + "%" },
          { label: "Pipeline Value", value: WF.formatINR(k().pipelineValue) },
          { label: "Growth %", value: k().growthPct + "%" }
        ])}
        <div class="wf-grid-2 wf-mt-16">
          ${WF.chartCard("KPI Trends", "Multi-line Chart", { height: 260 })}
          ${WF.chartCard("Target vs Actual", "Bar Chart — Comparison", { height: 260 })}
        </div>
      `
    },
    {
      id: "custom-builder", label: "Custom Report Builder",
      breadcrumb: [{ label: "Reports Dashboard", screen: "reports-dashboard" }, { label: "Custom Builder" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Custom Report Builder", "Build custom reports with dimensions, metrics, and charts")}
        <div class="wf-card wf-mb-16"><div class="wf-card__body" style="font-size:13px;padding:12px 16px;background:var(--wf-surface-alt)">
          Validation: Date range · Report permissions · Filter validation · Data availability check
        </div></div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Configuration</span></div>
            <div class="wf-card__body">${WF.reportForm()}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Preview</span></div>
            <div class="wf-card__body">${WF.chartPlaceholder("Bar Chart", "Report Preview")}</div>
          </div>
        </div>
      `
    },
    {
      id: "scheduled", label: "Scheduled Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Scheduled Reports", "Automated report delivery on schedule", `
          <button data-modal="schedule-report" class="wf-btn wf-btn--sm wf-btn--primary">+ Schedule Report</button>
        `)}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Active Schedules</span><span class="wf-badge">${ANALYTICS_DATA.scheduledReports.length}</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Report</th><th>Type</th><th>Frequency</th><th>Recipients</th><th>Format</th><th>Next Run</th><th>Actions</th></tr></thead>
          <tbody>${ANALYTICS_DATA.scheduledReports.map(r => `<tr>
            <td>${WF.esc(r.name)}</td><td>${WF.esc(r.type)}</td><td>${WF.esc(r.frequency)}</td>
            <td>${WF.esc(r.recipients)}</td><td>${WF.esc(r.format)}</td><td>${WF.esc(r.nextRun)}</td>
            <td><button class="wf-btn wf-btn--sm">Edit</button> <button class="wf-btn wf-btn--sm wf-btn--danger">Pause</button></td>
          </tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "export", label: "Report Export Center",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Report Export Center", "Export history and bulk export options")}
        ${exports()}
        <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Quick Export</span></div>
          <div class="wf-card__body">
            <div class="wf-form__grid wf-form__grid--3">
              <select class="wf-form__select"><option>Executive Dashboard</option><option>Revenue Report</option><option>Lead Funnel</option><option>Team Performance</option></select>
              <select class="wf-form__select"><option>PDF</option><option>Excel</option><option>CSV</option></select>
              <button class="wf-btn wf-btn--primary" data-action="export-pdf">Export Now</button>
            </div>
          </div>
        </div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Export History</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Report</th><th>Format</th><th>Exported By</th><th>Date</th><th>Size</th><th>Actions</th></tr></thead>
          <tbody>${ANALYTICS_DATA.exportHistory.map(e => `<tr>
            <td>${WF.esc(e.report)}</td><td><span class="wf-badge wf-badge--outline">${WF.esc(e.format)}</span></td>
            <td>${WF.esc(e.exportedBy)}</td><td>${WF.esc(e.date)}</td><td>${WF.esc(e.size)}</td>
            <td><button class="wf-btn wf-btn--sm">Download</button></td>
          </tr>`).join("")}</tbody></table>${WF.pagination(24)}</div>
        </div>
      `
    },
    {
      id: "employee-performance", label: "Employee Performance Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Employee Performance Reports", "Leads, calls, meetings, conversions, revenue, and productivity scores")}
        ${filters()}${exports()}${WF.periodToggle("Monthly")}
        ${WF.kpiGrid([
          { label: "Top Performer", value: k().topExec, small: true },
          { label: "Avg Conversion", value: "78%" },
          { label: "Total Revenue", value: WF.formatINR(k().totalRevenue) },
          { label: "Target Achievement", value: "94%" }
        ])}
        <div class="wf-card wf-mb-16">${WF.chartCard("Productivity Score Trend", "Line Chart", { height: 260 })}</div>
        <div class="wf-card"><div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Executive", "Leads", "Calls", "Meetings", "Conv %", "Revenue", "Activity", "Productivity"], ANALYTICS_DATA.teamPerformance.map((t) => [t[0], t[3], "—", "—", t[6], t[5], "—", "—"]))}</div></div>
      `
    },
    {
      id: "call-performance", label: "Call Performance Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Call Performance Reports", "Call volume, connect rates, talk time, and conversion")}
        ${filters()}${exports()}
        ${WF.kpiGrid([
          { label: "Total Calls", value: "2,846" },
          { label: "Connected", value: "2,184" },
          { label: "Success Rate", value: "76.7%" },
          { label: "Call Conversion", value: "18.4%" }
        ])}
        <div class="wf-grid-2">${WF.chartCard("Call Volume Trend", "Line Chart")}${WF.chartCard("Talk Time by Agent", "Bar Chart")}</div>
        <div class="wf-card wf-mt-16"><div class="wf-card__body" style="font-size:13px;color:var(--wf-text-muted)"><a href="../call-intelligence/index.html">Open Call Intelligence module →</a> for live calls, recordings, and detailed analytics.</div></div>
      `
    },
    {
      id: "marketing-roi", label: "Marketing ROI Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Marketing ROI Reports", "Spend, CPL, ROAS, and return on marketing investment")}
        ${filters()}${exports()}${WF.periodToggle("Quarterly")}
        ${WF.kpiGrid([
          { label: "Marketing Spend", value: "₹42.8 L" },
          { label: "ROI", value: k().roi + "%" },
          { label: "ROAS", value: "4.2x" },
          { label: "Cost Per Deal", value: "₹1.42 L" }
        ])}
        <div class="wf-grid-2">${WF.chartCard("ROI Trend", "Line Chart")}${WF.chartCard("Spend vs Revenue", "Area Chart")}</div>
        <div class="wf-card wf-mt-16"><div class="wf-card__body" style="font-size:13px;color:var(--wf-text-muted)"><a href="../marketing-intelligence/index.html">Open Marketing Intelligence module →</a> for campaign and funnel analytics.</div></div>
      `
    },
    {
      id: "lead-source", label: "Lead Source Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Lead Source Reports", "Acquisition channel performance and economics")}
        ${filters()}${exports()}
        ${WF.kpiGrid([
          { label: "Total Leads", value: k().totalLeads },
          { label: "Top Source", value: "Website", change: "286 leads" },
          { label: "Best CPL", value: "₹938", change: "Referral" },
          { label: "Best Conversion", value: "38%", change: "Referral" }
        ])}
        ${WF.chartCard("Leads by Source", "Pie Chart", { height: 280 })}
        <div class="wf-card wf-mt-16"><div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Source", "Leads", "Qualified", "Conversion %"], [["Website", 286, 142, "28%"], ["Referral", 224, 168, "38%"], ["Meta Ads", 192, 86, "22%"], ["Google Ads", 148, 72, "24%"]])}</div></div>
      `
    },
    {
      id: "sales-funnel", label: "Sales Funnel Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Sales Funnel Reports", "End-to-end funnel from lead to closed deal")}
        ${filters()}${exports()}${WF.periodToggle("Monthly")}
        ${WF.kpiGrid([
          { label: "Pipeline Value", value: WF.formatINR(k().pipelineValue) },
          { label: "Conversion Rate", value: k().conversionRate + "%" },
          { label: "Avg Deal Size", value: WF.formatINR(k().avgDealSize) },
          { label: "Deals Closed", value: k().convertedCustomers }
        ])}
        <div class="wf-grid-2">${WF.chartCard("Sales Funnel", "Funnel Chart", { height: 280 })}${WF.chartCard("Stage Drop-off", "Bar Chart", { height: 280 })}</div>
        <div class="wf-card wf-mt-16"><div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Stage", "Count", "Conversion %"], ANALYTICS_DATA.leadFunnel)}</div></div>
      `
    },
    {
      id: "campaign-performance", label: "Campaign Performance Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Campaign Performance Reports", "Campaign spend, leads, CPL, and ROAS")}
        ${filters()}${exports()}
        ${WF.kpiGrid([
          { label: "Active Campaigns", value: "8" },
          { label: "Total Spend", value: "₹42.8 L" },
          { label: "Avg CPL", value: "₹4,180" },
          { label: "Best ROAS", value: "4.1x", change: "Google Search" }
        ])}
        <div class="wf-card"><div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Campaign", "Platform", "Spend", "Leads", "CPL", "ROAS"], [["Meta — Q2 Lead Gen", "Meta", "₹8.2 L", 124, "₹6,613", "3.8x"], ["Google — Franchise Search", "Google", "₹6.4 L", 98, "₹6,531", "4.1x"], ["LinkedIn B2B", "LinkedIn", "₹3.2 L", 42, "₹7,619", "2.9x"]])}</div></div>
      `
    },
    {
      id: "state-wise", label: "State-wise Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("State-wise Reports", "Revenue, leads, and expansion by state")}
        ${filters()}${exports()}${WF.comparisonToggle("state")}
        ${WF.kpiGrid([
          { label: "Active States", value: "5" },
          { label: "Top State", value: "Karnataka" },
          { label: "State Revenue", value: "₹6.2 Cr", change: "Karnataka · 33%" },
          { label: "Expansion Targets", value: "2", change: "New states Q3" }
        ])}
        ${WF.chartCard("Revenue by State", "Bar Chart", { height: 280 })}
        <div class="wf-card wf-mt-16"><div class="wf-card__body" style="padding:0">${WF.reportDataTable(["State", "Revenue", "Leads", "Customers"], [["Karnataka", "₹6.2 Cr", 286, 92], ["Maharashtra", "₹4.8 Cr", 224, 78], ["Telangana", "₹3.4 Cr", 168, 64], ["Tamil Nadu", "₹2.8 Cr", 142, 58]])}</div></div>
      `
    },
    {
      id: "city-wise", label: "City-wise Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("City-wise Reports", "City-level revenue, leads, and performance")}
        ${filters()}${exports()}${WF.comparisonToggle("city")}
        ${WF.kpiGrid([
          { label: "Active Cities", value: "12" },
          { label: "Top City", value: "Bengaluru" },
          { label: "City Revenue", value: "₹92 L", change: "Bengaluru · 32%" },
          { label: "New Cities", value: "3", change: "Q3 expansion" }
        ])}
        <div class="wf-grid-2">${WF.chartCard("India Geo Map", "Geo Map", { height: 280 })}${WF.chartCard("Revenue by City", "Bar Chart", { height: 280 })}</div>
        <div class="wf-card wf-mt-16"><div class="wf-card__body" style="padding:0">${WF.reportDataTable(["City", "Revenue", "Share", "Growth"], ANALYTICS_DATA.revenueByCity)}</div></div>
      `
    },
    {
      id: "audit", label: "Analytics Audit Log",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Analytics Audit Log", "Report access, exports, and scheduling activity", `
          <button class="wf-btn wf-btn--sm" data-action="export-csv">Export Log</button>
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
        `)}
        ${WF.toolbar({ filters: ["Action", "User", "Report", "Date Range"], showExport: false, showImport: false })}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Audit Trail</span><span style="font-size:12px;color:var(--wf-text-muted)">186 events · Page 1 of 19</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Timestamp</th><th>User</th><th>Action</th><th>Report</th><th>Details</th></tr></thead>
          <tbody>${ANALYTICS_DATA.auditLog.map(l => `<tr>
            <td style="font-size:12px">${WF.esc(l.timestamp)}</td><td>${WF.esc(l.user)}</td>
            <td><span class="wf-badge wf-badge--outline">${WF.esc(l.action)}</span></td>
            <td>${WF.esc(l.entity)}</td><td style="font-size:12px">${WF.esc(l.details)}</td>
          </tr>`).join("")}</tbody></table>${WF.pagination(186)}</div>
        </div>
      `
    }
  ];

  function init() {
    WF.resetViewRole(activeRole);
    WF_SPA.init({
      moduleKey: "analytics",
      moduleLabel: "Reporting & Analytics",
      moduleTitle: "Reporting & Analytics",
      moduleHref: "index.html",
      defaultScreen: "executive",
      searchPlaceholder: "Search reports, KPIs, brands, cities, executives…",
      modals: WF.analyticsModals,
      screens
    });

    document.body.addEventListener("click", (e) => {
      const periodBtn = e.target.closest("[data-period]");
      if (periodBtn) {
        document.querySelectorAll("[data-period]").forEach((btn) => {
          btn.classList.toggle("wf-btn--primary", btn === periodBtn);
        });
        WF.showToast(`Period: ${periodBtn.getAttribute("data-period")}`);
      }
    });
  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => ANALYTICS_MODULE.init());
