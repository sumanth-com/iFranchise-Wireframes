/* Template Management — Single Page Module */

const TEMPLATES_MODULE = (() => {
  const d = () => TEMPLATE_DATA;
  const k = () => d().kpis;
  let activeRole = "Super Admin";

  const roleBar = () => WF.roleSwitcher(WF.getViewRole(activeRole), d().viewRoles);

  const templateList = (records, columns) => {
    const actionBtns = `<button class="wf-btn wf-btn--sm">Edit</button><button class="wf-btn wf-btn--sm">Preview</button><button class="wf-btn wf-btn--sm">Triggers</button>`;
    return `<div class="wf-toolbar wf-mb-16"><div class="wf-toolbar__filters"><input type="search" class="wf-form__input" placeholder="Search templates…" style="max-width:220px"><select class="wf-filter-select"><option>All Status</option><option>Active</option><option>Inactive</option></select></div>
      <div class="wf-toolbar__actions"><button class="wf-btn wf-btn--sm wf-btn--primary">+ Add Template</button><button class="wf-btn wf-btn--sm" data-action="export">Export</button></div></div>
      <div class="wf-table-wrap"><table class="wf-table wf-table--responsive"><thead><tr>${columns.map((c) => `<th>${WF.esc(c.label)}</th>`).join("")}<th>Automation Trigger</th><th>Status</th><th>Actions</th></tr></thead>
      <tbody>${records.map((r) => `<tr>${columns.map((c) => `<td${c.clip ? ' class="wf-table__cell-clip"' : ""}>${WF.esc(r[c.key] ?? "—")}</td>`).join("")}<td><code style="font-size:11px">${WF.esc(r.trigger)}</code></td><td><span class="wf-badge${r.status === "Active" ? " wf-badge--dark" : ""}">${WF.esc(r.status)}</span></td><td>${actionBtns}</td></tr>`).join("")}</tbody></table></div>`;
  };

  const entityScreen = (id, label, subtitle, dataKey, columns) => ({
    id, label,
    render: () => `
      ${roleBar()}
      ${WF.pageHeader(label, subtitle)}
      ${templateList(d()[dataKey], columns)}
    `
  });

  const screens = [
    {
      id: "dashboard", label: "Template Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Template Management", "Agreement, proposal, communication, and payment templates with automation triggers", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button class="wf-btn wf-btn--sm wf-btn--primary" data-screen="agreement">+ New Template</button>
        `)}
        ${WF.kpiGrid([
          { label: "Total Templates", value: k().totalTemplates },
          { label: "Active", value: k().activeTemplates },
          { label: "With Automation Triggers", value: k().withTriggers },
          { label: "Last Updated", value: k().lastUpdated, small: true }
        ])}
        <div class="wf-card wf-mb-20"><div class="wf-card__body" style="font-size:13px;padding:12px 16px;background:var(--wf-surface-alt)">
          Templates support automation triggers — link templates to workflow events in the Automation Engine for hands-free delivery.
        </div></div>
        <div class="wf-card-grid" style="grid-template-columns:repeat(auto-fill,minmax(180px,1fr))">
          ${d().categoryNav.filter((c) => c.screen !== "dashboard").map((c) => `
            <div class="wf-card" data-screen="${c.screen}" style="cursor:pointer"><div class="wf-card__body" style="padding:20px;text-align:center">
              <div style="width:40px;height:40px;background:var(--wf-placeholder);border-radius:8px;margin:0 auto 12px"></div>
              <div style="font-size:13px;font-weight:600">${WF.esc(c.label)} Templates</div>
              <button class="wf-btn wf-btn--sm wf-mt-16" data-screen="${c.screen}">Manage</button>
            </div></div>
          `).join("")}
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Automation Trigger Map</span><a href="/automation/dashboard" class="wf-btn wf-btn--sm">Automation Engine →</a></div>
          <div class="wf-card__body" style="padding:0">${WF.reportDataTable(["Event", "Templates", "Automations"], d().automationTriggers.map((t) => [t.event, t.templates, t.automations]))}</div>
        </div>
      `
    },
    entityScreen("agreement", "Agreement Templates", "Franchise agreement and legal document templates", "agreementTemplates", [
      { label: "Template", key: "name", clip: true }, { label: "Brand", key: "brand" }, { label: "Format", key: "format" }
    ]),
    entityScreen("proposal", "Proposal Templates", "Sales proposal and investment presentation templates", "proposalTemplates", [
      { label: "Template", key: "name", clip: true }, { label: "Brand", key: "brand" }, { label: "Format", key: "format" }
    ]),
    entityScreen("welcome", "Welcome Templates", "New franchisee welcome and onboarding templates", "welcomeTemplates", [
      { label: "Template", key: "name", clip: true }, { label: "Channel", key: "channel" }
    ]),
    entityScreen("email", "Email Templates", "Transactional and marketing email templates", "emailTemplates", [
      { label: "Template", key: "name" }, { label: "Subject", key: "subject", clip: true }
    ]),
    entityScreen("whatsapp", "WhatsApp Templates", "WhatsApp Business API message templates", "whatsappTemplates", [
      { label: "Template", key: "name" }, { label: "Template ID", key: "templateId" }
    ]),
    entityScreen("payment", "Payment Templates", "Invoice, receipt, and payment reminder templates", "paymentTemplates", [
      { label: "Template", key: "name" }, { label: "Type", key: "type" }
    ]),
    entityScreen("customer", "Customer Templates", "Customer onboarding and lifecycle document templates", "customerTemplates", [
      { label: "Template", key: "name", clip: true }, { label: "Type", key: "type" }
    ])
  ];

  function init() {
    WF.resetViewRole(activeRole);
    WF_SPA.init({
      moduleKey: "templates",
      moduleLabel: "Template Management",
      moduleTitle: "Template Management",
      moduleHref: "/",
      defaultScreen: "dashboard",
      searchPlaceholder: "Search templates, triggers, agreements…",
      screens
    });
  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => TEMPLATES_MODULE.init());
