/* Marketing Intelligence — Single Page Module */

const MARKETING_INTELLIGENCE_MODULE = (() => {
  const d = () => MARKETING_DATA;
  const k = () => d().kpis;
  let activeRole = "CEO";

  const roleBar = () => WF.roleSwitcher(WF.getViewRole(activeRole), d().roles);
  const mktKpis = () => WF.kpiGrid([
    { label: "Marketing Spend", value: k().marketingSpend, change: "MTD · Jun 2024" },
    { label: "Cost Per Lead", value: k().costPerLead },
    { label: "Cost Per Qualified Lead", value: k().costPerQualifiedLead },
    { label: "Cost Per Deal", value: k().costPerDeal },
    { label: "Conversion Rate", value: k().conversionRate },
    { label: "ROAS", value: k().roas },
    { label: "ROI", value: k().roi },
    { label: "Lead Quality Score", value: k().leadQuality, change: `${k().lostLeads} lost leads` }
  ]);
  const filters = () => WF.toolbar({ filters: ["Date Range", "Campaign", "Lead Source", "Platform", "Brand", "City"], showImport: false });

  const integrationPanel = () => `<div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Ad Platform Integrations</span><span class="wf-badge">Future</span></div>
    <div class="wf-card__body"><div class="wf-card-grid" style="grid-template-columns:repeat(auto-fill,minmax(160px,1fr))">
      ${d().integrations.map((i) => `<div class="wf-card"><div class="wf-card__body" style="padding:16px;text-align:center">
        <div style="width:36px;height:36px;background:var(--wf-placeholder);border-radius:8px;margin:0 auto 8px"></div>
        <div style="font-size:12px;font-weight:600">${WF.esc(i.name)}</div>
        <span class="wf-badge" style="margin-top:8px;display:inline-block">${WF.esc(i.status)}</span>
        <button class="wf-btn wf-btn--sm wf-mt-8" style="display:block;margin:8px auto 0">Connect</button>
      </div></div>`).join("")}
    </div></div></div>`;

  const screens = [
    {
      id: "dashboard", label: "Marketing Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Marketing Intelligence Dashboard", "Campaign performance, lead economics, and funnel analytics", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
        `)}
        ${integrationPanel()}
        ${WF.periodToggle("Monthly")}
        ${mktKpis()}
        <div class="wf-grid-2 wf-mb-20">
          ${WF.chartCard("Marketing Spend Trend", "Area Chart", { height: 260, drillScreen: "spend" })}
          ${WF.chartCard("Funnel Performance", "Funnel Chart", { height: 260, drillScreen: "funnel" })}
        </div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Lead Sources</span><button data-screen="lead-sources" class="wf-btn wf-btn--sm">View All</button></div>
            <div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Source", "Leads", "CPL", "Conv %"], d().leadSources.slice(0, 4).map((s) => [s.source, s.leads, s.cpl, s.conversion]))}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Campaign Performance</span><button data-screen="campaigns" class="wf-btn wf-btn--sm">View All</button></div>
            <div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Campaign", "Spend", "Leads", "ROAS"], d().campaignSources.slice(0, 4).map((c) => [c.campaign, c.spend, c.leads, c.roas]))}</div>
          </div>
        </div>
      `
    },
    {
      id: "spend", label: "Marketing Spend",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Marketing Spend Analysis", "Spend allocation by channel, campaign, and period")}
        ${filters()}${WF.reportActions()}${WF.periodToggle("Monthly")}
        ${mktKpis()}
        ${WF.chartCard("Spend by Channel", "Stacked Bar Chart", { height: 280 })}
        <div class="wf-card wf-mt-16"><div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Month", "Spend", "Leads", "CPL"], d().spendByMonth.map((m) => [m.month, `₹${(m.spend / 100000).toFixed(1)} L`, m.leads, `₹${Math.round(m.spend / m.leads).toLocaleString()}`]))}</div></div>
      `
    },
    {
      id: "lead-sources", label: "Lead Source Analytics",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Lead Source Analytics", "Performance and economics by acquisition channel")}
        ${filters()}${WF.reportActions()}
        <div class="wf-card"><div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Source", "Leads", "Qualified", "Spend", "CPL", "Conversion"], d().leadSources.map((s) => [s.source, s.leads, s.qualified, s.spend, s.cpl, s.conversion]))}</div></div>
        ${WF.chartCard("Leads by Source", "Pie Chart", { height: 260 })}
      `
    },
    {
      id: "campaigns", label: "Campaign Performance",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Campaign Performance", "Campaign-level spend, leads, and ROAS")}
        ${filters()}${WF.reportActions()}
        <div class="wf-card"><div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Campaign", "Platform", "Spend", "Leads", "CPL", "ROAS"], d().campaignSources.map((c) => [c.campaign, c.platform, c.spend, c.leads, c.cpl, c.roas]))}</div></div>
        <div class="wf-grid-2 wf-mt-16">${WF.chartCard("ROAS by Campaign", "Bar Chart")}${WF.chartCard("Spend vs Leads", "Scatter Plot")}</div>
      `
    },
    {
      id: "funnel", label: "Funnel Performance",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Funnel Performance", "Marketing funnel from impression to deal")}
        ${filters()}${mktKpis()}
        <div class="wf-grid-2">
          ${WF.chartCard("Marketing Funnel", "Funnel Chart", { height: 320 })}
          ${WF.chartCard("Stage Conversion Rates", "Bar Chart", { height: 320 })}
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Stage", "Count", "Rate"], d().funnel.map((f) => [f.stage, f.count.toLocaleString(), f.rate]))}</div></div>
      `
    },
    {
      id: "lost-leads", label: "Lost Leads Analysis",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Lost Leads Analysis", "Reasons and patterns for lead loss")}
        ${filters()}
        ${WF.kpiGrid([
          { label: "Lost Leads (MTD)", value: k().lostLeads },
          { label: "Loss Rate", value: "18.2%" },
          { label: "Recoverable", value: "42", change: "Re-engagement candidates" },
          { label: "Top Reason", value: "Budget", change: "26% of losses" }
        ])}
        <div class="wf-grid-2">
          ${WF.chartCard("Loss Reasons", "Pie Chart", { height: 260 })}
          <div class="wf-card"><div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Reason", "Count", "Share"], d().lostLeads.map((l) => [l.reason, l.count, l.pct]))}</div></div>
        </div>
      `
    },
    {
      id: "lead-quality", label: "Lead Quality",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Lead Quality Scoring", "Lead quality metrics and scoring breakdown")}
        ${filters()}
        ${WF.kpiGrid([
          { label: "Quality Score", value: k().leadQuality },
          { label: "High Quality", value: "312", change: "Score ≥ 80" },
          { label: "Medium Quality", value: "486", change: "Score 50–79" },
          { label: "Low Quality", value: "226", change: "Score < 50" }
        ])}
        ${WF.chartCard("Quality Score Distribution", "Histogram", { height: 280 })}
      `
    },
    {
      id: "roi", label: "ROI & ROAS",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("ROI & ROAS Analysis", "Return on ad spend and marketing investment returns")}
        ${filters()}${WF.periodToggle("Quarterly")}
        ${WF.kpiGrid([
          { label: "ROI", value: k().roi },
          { label: "ROAS", value: k().roas },
          { label: "Revenue Attributed", value: "₹1.82 Cr" },
          { label: "Marketing Spend", value: k().marketingSpend }
        ])}
        <div class="wf-grid-2">${WF.chartCard("ROI Trend", "Line Chart")}${WF.chartCard("ROAS by Channel", "Bar Chart")}</div>
      `
    },
    {
      id: "integrations", label: "Ad Integrations",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Ad Platform Integrations", "Connect Meta Ads, Google Ads, Analytics, and tracking pixels")}
        ${integrationPanel()}
        <div class="wf-card"><div class="wf-card__body" style="font-size:13px;color:var(--wf-text-secondary);line-height:1.7">
          <p>Future integrations will sync campaign spend, impressions, clicks, and conversion data automatically.</p>
          <p>Supported platforms: Meta Ads, Google Ads, Google Analytics, Meta Pixel, Google Tag Manager.</p>
        </div></div>
      `
    }
  ];

  function init() {
    WF.resetViewRole(activeRole);
    WF_SPA.init({
      moduleKey: "marketingIntelligence",
      moduleLabel: "Marketing Intelligence",
      moduleTitle: "Marketing Intelligence",
      moduleHref: "/",
      defaultScreen: "dashboard",
      searchPlaceholder: "Search campaigns, lead sources, spend…",
      screens
    });
  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => MARKETING_INTELLIGENCE_MODULE.init());
