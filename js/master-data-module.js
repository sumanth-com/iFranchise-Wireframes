/* Master Data Management — Single Page Module */

const MASTER_DATA_MODULE = (() => {
  const d = () => MASTER_DATA;
  const k = () => d().kpis;
  let activeRole = "Super Admin";

  const roleBar = () => WF.roleSwitcher(WF.getViewRole(activeRole), d().viewRoles);

  const entityScreen = (id, label, subtitle, dataKey, columns) => ({
    id,
    label,
    render: () => `
      ${roleBar()}
      ${WF.pageHeader(label, subtitle)}
      ${WF.masterDataToolbar(label)}
      ${WF.masterDataTable(d()[dataKey], columns)}
      ${WF.pagination(d()[dataKey].length)}
    `
  });

  const screens = [
    {
      id: "dashboard", label: "Master Data Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Master Data Management", "Fully configurable reference data — no code changes required", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button class="wf-btn wf-btn--sm wf-btn--primary" data-screen="brands">+ Add Record</button>
        `)}
        ${WF.kpiGrid([
          { label: "Total Records", value: k().totalRecords },
          { label: "Active", value: k().activeRecords, change: "Across all entities" },
          { label: "Archived", value: k().archivedRecords },
          { label: "Inactive", value: k().inactiveRecords },
          { label: "Entity Types", value: "19", change: "Fully configurable" },
          { label: "Last Updated", value: "Today", change: k().lastUpdated, small: true }
        ])}
        <div class="wf-card wf-mb-20"><div class="wf-card__body" style="font-size:13px;padding:12px 16px;background:var(--wf-surface-alt)">
          All business values are managed through configuration. Add, edit, archive, activate, or deactivate master records without code deployments.
        </div></div>
        <div class="wf-card-grid" style="grid-template-columns:repeat(auto-fill,minmax(200px,1fr))">
          ${d().categoryNav.filter((c) => c.screen !== "dashboard").map((c) => `
            <div class="wf-card" data-screen="${c.screen}" style="cursor:pointer">
              <div class="wf-card__body" style="padding:20px;text-align:center">
                <div style="width:40px;height:40px;background:var(--wf-placeholder);border-radius:8px;margin:0 auto 12px"></div>
                <div style="font-size:13px;font-weight:600">${WF.esc(c.label)}</div>
                <button class="wf-btn wf-btn--sm wf-mt-16" data-screen="${c.screen}">Manage</button>
              </div>
            </div>
          `).join("")}
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recent Configuration Changes</span></div>
          <div class="wf-card__body" style="font-size:13px">${d().recentChanges.map((a) => `
            <div style="padding:8px 0;border-bottom:1px solid var(--wf-border-light)">
              <strong>${WF.esc(a.action)}</strong><br>
              <span style="font-size:12px;color:var(--wf-text-muted)">${WF.esc(a.user)} · ${WF.esc(a.time)}</span>
            </div>
          `).join("")}</div>
        </div>
      `
    },
    entityScreen("brands", "Brands", "Configure brand reference data used across CRM modules", "brands", [
      { label: "Brand Name", key: "name" }, { label: "Code", key: "code" }, { label: "Category", key: "category" }
    ]),
    entityScreen("franchise-models", "Franchise Models", "Franchise model types and investment tiers", "franchiseModels", [
      { label: "Model", key: "name" }, { label: "Code", key: "code" }, { label: "Investment", key: "investment" }
    ]),
    entityScreen("success-fees", "Success Fees", "Success fee structures by brand and model", "successFees", [
      { label: "Fee Name", key: "name" }, { label: "Amount", key: "amount" }, { label: "Brand", key: "brand", clip: true }
    ]),
    entityScreen("franchise-fees", "Franchise Fees", "Initial franchise fee configurations", "franchiseFees", [
      { label: "Fee Name", key: "name" }, { label: "Amount", key: "amount" }, { label: "Model", key: "model" }
    ]),
    entityScreen("royalty-percentages", "Royalty Percentages", "Ongoing royalty rate configurations", "royaltyPercentages", [
      { label: "Royalty Name", key: "name" }, { label: "Rate", key: "percentage" }, { label: "Brand", key: "brand" }
    ]),
    entityScreen("marketing-fees", "Marketing Fees", "Marketing fund and fee structures", "marketingFees", [
      { label: "Fee Name", key: "name" }, { label: "Rate/Amount", key: "rate", clip: true }, { label: "Brand", key: "brand" }
    ]),
    entityScreen("lead-sources", "Lead Sources", "Lead acquisition channel definitions", "leadSources", [
      { label: "Source", key: "name" }, { label: "Code", key: "code" }, { label: "Channel", key: "channel" }
    ]),
    entityScreen("campaign-sources", "Campaign Sources", "Marketing campaign source tracking", "campaignSources", [
      { label: "Campaign", key: "name", clip: true }, { label: "Code", key: "code" }, { label: "Platform", key: "platform" }
    ]),
    entityScreen("states", "States", "Indian states and regional groupings", "states", [
      { label: "State", key: "name" }, { label: "Code", key: "code" }, { label: "Region", key: "region" }
    ]),
    entityScreen("cities", "Cities", "City master with state and tier classification", "cities", [
      { label: "City", key: "name" }, { label: "State", key: "state" }, { label: "Tier", key: "tier" }
    ]),
    entityScreen("industries", "Industries", "Industry vertical classifications", "industries", [
      { label: "Industry", key: "name" }, { label: "Code", key: "code" }, { label: "Segments", key: "segments" }
    ]),
    entityScreen("business-categories", "Business Categories", "Business category taxonomy within industries", "businessCategories", [
      { label: "Category", key: "name" }, { label: "Code", key: "code" }, { label: "Industry", key: "industry" }
    ]),
    entityScreen("meeting-types", "Meeting Types", "Meeting type definitions with duration and mode", "meetingTypes", [
      { label: "Type", key: "name" }, { label: "Duration", key: "duration" }, { label: "Mode", key: "mode" }
    ]),
    entityScreen("approval-types", "Approval Types", "Approval workflow type configurations", "approvalTypes", [
      { label: "Type", key: "name" }, { label: "Levels", key: "levels" }, { label: "SLA", key: "sla" }
    ]),
    entityScreen("payment-types", "Payment Types", "Payment type and GST configurations", "paymentTypes", [
      { label: "Type", key: "name" }, { label: "Code", key: "code" }, { label: "GST", key: "gst" }
    ]),
    entityScreen("notification-templates", "Notification Templates", "In-app and multi-channel notification templates", "notificationTemplates", [
      { label: "Template", key: "name" }, { label: "Channel", key: "channel" }, { label: "Trigger", key: "trigger", clip: true }
    ]),
    entityScreen("email-templates", "Email Templates", "Email template definitions with automation triggers", "emailTemplates", [
      { label: "Template", key: "name" }, { label: "Subject", key: "subject", clip: true }, { label: "Trigger", key: "trigger" }
    ]),
    entityScreen("whatsapp-templates", "WhatsApp Templates", "WhatsApp Business API approved templates", "whatsappTemplates", [
      { label: "Template", key: "name" }, { label: "Template ID", key: "templateId" }, { label: "Language", key: "language" }
    ]),
    entityScreen("document-templates", "Document Templates", "Document template library for agreements and compliance", "documentTemplates", [
      { label: "Template", key: "name" }, { label: "Type", key: "type" }, { label: "Format", key: "format" }
    ])
  ];

  function init() {
    WF.resetViewRole(activeRole);
    WF_SPA.init({
      moduleKey: "masterData",
      moduleLabel: "Master Data Management",
      moduleTitle: "Master Data Management",
      moduleHref: "/",
      defaultScreen: "dashboard",
      searchPlaceholder: "Search brands, cities, lead sources, templates…",
      screens
    });
  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => MASTER_DATA_MODULE.init());
