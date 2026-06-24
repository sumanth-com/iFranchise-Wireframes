/* Franchise Models — Single Page Module (17 screens) */

const FRANCHISE_MODELS_MODULE = (() => {
  const m = () => MODEL_DATA.models[0];
  let activeRole = "CEO";

  const modelTabs = (active) => WF.spaTabs([
    { id: "details", label: "Overview" },
    { id: "investment-calc", label: "Investment" },
    { id: "roi-calc", label: "Financial" },
    { id: "requirements", label: "Requirements" },
    { id: "support", label: "Support" },
    { id: "training", label: "Training" },
    { id: "documents", label: "Documents" },
    { id: "territory", label: "Territories" },
    { id: "details", label: "Performance" },
    { id: "compare", label: "Leads" },
    { id: "details", label: "Franchisees" },
    { id: "timeline", label: "Timeline" },
    { id: "details", label: "Notes" },
    { id: "timeline", label: "Activity Log" }
  ], active);

  const roleBar = () => WF.roleSwitcher(WF.getViewRole(activeRole));

  const screens = [
    {
      id: "dashboard", label: "Model Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Franchise Model Dashboard", "Portfolio overview — models, approvals, and performance", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ Create Model</button>
        `)}
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Total Franchise Models</div><div class="wf-stat-card__value">48</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Published Models</div><div class="wf-stat-card__value">32</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Pending Approval</div><div class="wf-stat-card__value">6</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Archived Models</div><div class="wf-stat-card__value">4</div></div>
        </div>
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Average Investment</div><div class="wf-stat-card__value wf-stat-card__value--md">₹28L</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Average ROI</div><div class="wf-stat-card__value wf-stat-card__value--md">24%</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Most Popular Model</div><div class="wf-stat-card__value wf-stat-card__value--sm">Belgian Waffle Express</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Top Performing Brand</div><div class="wf-stat-card__value wf-stat-card__value--sm">Odette</div></div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Models by Status</span></div><div class="wf-card__body">${WF.chartPlaceholder("Donut Chart", "Draft / Published / Archived")}</div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Investment vs ROI</span></div><div class="wf-card__body">${WF.chartPlaceholder("Scatter Plot", "Investment vs ROI by Model")}</div></div>
        </div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Activity</span><button data-screen="timeline" class="wf-btn wf-btn--sm">View All</button></div>
            <div class="wf-card__body">${WF.timeline(MODEL_DATA.timeline.slice(0, 4))}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Upcoming Reviews</span><button data-screen="workflow" class="wf-btn wf-btn--sm">Workflow</button></div>
            <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Model</th><th>Due</th><th>Status</th></tr></thead>
            <tbody>${MODEL_DATA.upcomingReviews.map(r => `<tr><td>${WF.esc(r.model)}</td><td>${WF.esc(r.due)}</td><td><span class="wf-badge">${WF.esc(r.status)}</span></td></tr>`).join("")}</tbody></table></div>
          </div>
        </div>
      `
    },
    {
      id: "list", label: "Model List",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Franchise Model List", "All franchise models across brands", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="compare" class="wf-btn wf-btn--sm">Compare</button>
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ Create Model</button>
        `)}
        ${WF.toolbar({ filters: ["Status", "Brand", "Model Type", "Investment"] })}
        <div id="wf-data-content">${WF.modelTable(MODEL_DATA.models)}</div>
        ${WF.loadingState()}
      `
    },
    {
      id: "create", label: "Create Model",
      breadcrumb: [{ label: "Model List", screen: "list" }, { label: "Create Model" }],
      render: () => `${roleBar()}${WF.pageHeader("Create Franchise Model", "Define a new franchise model for a brand")}<div class="wf-card"><div class="wf-card__body">${WF.modelForm(null, "create")}</div></div>`
    },
    {
      id: "edit", label: "Edit Model",
      breadcrumb: [{ label: "Model List", screen: "list" }, { label: m().name, screen: "details" }, { label: "Edit" }],
      render: () => `${roleBar()}${WF.pageHeader("Edit Franchise Model", m().id)}<div class="wf-card"><div class="wf-card__body">${WF.modelForm(m(), "edit")}</div></div>`
    },
    {
      id: "details", label: "Model Details",
      breadcrumb: [{ label: "Model List", screen: "list" }, { label: m().name }],
      render: () => {
        const mod = m();
        return `
          ${roleBar()}
          ${WF.pageHeader(mod.name, mod.id + " · " + mod.brand + " · " + mod.type, `
            <button data-screen="compare" class="wf-btn wf-btn--sm">Compare</button>
            <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
            <button data-screen="publish" class="wf-btn wf-btn--sm wf-btn--primary">Publish</button>
            <button class="wf-btn wf-btn--sm wf-btn--danger" data-modal="confirm-delete">Delete</button>
          `)}
          ${WF.workflowStepper(mod.status, null, { targetScreen: "workflow" })}
          ${modelTabs("details")}
          <div class="wf-detail-layout">
            <div class="wf-detail-sidebar">${WF.modelProfileCard(mod)}</div>
            <div>
              <div class="wf-card-grid" style="grid-template-columns:repeat(4,1fr)">
                <div class="wf-stat-card"><div class="wf-stat-card__label">Investment</div><div class="wf-stat-card__value" style="font-size:16px">${WF.esc(mod.investmentRange)}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">ROI</div><div class="wf-stat-card__value" style="font-size:16px">${WF.esc(mod.roi)}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Interested Leads</div><div class="wf-stat-card__value">${mod.leads}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Franchisees</div><div class="wf-stat-card__value">${mod.franchisees}</div></div>
              </div>
              <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Overview</span><span class="wf-approval-badge">Approved by ${WF.esc(mod.approvedBy || "Pending")}</span></div>
                <div class="wf-card__body">
                  <p style="font-size:13px;margin-bottom:16px">${WF.esc(mod.description)}</p>
                  <div class="wf-form__grid wf-form__grid--3">
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Franchise Fee</span><span class="wf-detail-info__value">${WF.esc(mod.franchiseFee)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Royalty</span><span class="wf-detail-info__value">${WF.esc(mod.royalty)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Break-even</span><span class="wf-detail-info__value">${WF.esc(mod.breakEven)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Area Required</span><span class="wf-detail-info__value">${WF.esc(mod.areaRequired)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Employees</span><span class="wf-detail-info__value">${WF.esc(mod.employees)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Agreement</span><span class="wf-detail-info__value">${WF.esc(mod.agreementDuration)}</span></div>
                  </div>
                </div>
              </div>
              <div class="wf-grid-2">
                <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Sales Performance</span></div><div class="wf-card__body">${WF.chartPlaceholder("Revenue trend", "${WF.esc(mod.revenue)}")}</div></div>
                <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Internal Notes</span></div><div class="wf-card__body">${MODEL_DATA.notes.map(n => `<div class="wf-note"><div class="wf-note__header"><span class="wf-note__author">${WF.esc(n.author)}</span><span class="wf-note__time">${WF.esc(n.time)}</span></div><div class="wf-note__body">${WF.esc(n.body)}</div></div>`).join("")}</div></div>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      id: "compare", label: "Compare Models",
      breadcrumb: [{ label: "Model List", screen: "list" }, { label: "Compare Models" }],
      render: () => {
        const compared = MODEL_DATA.models.filter(x => MODEL_DATA.compareModels.includes(x.id));
        return `
          ${roleBar()}
          ${WF.pageHeader("Compare Franchise Models", "Side-by-side comparison of selected models", `
            <button data-screen="list" class="wf-btn wf-btn--sm">Change Selection</button>
          `)}
          ${WF.toolbar({ showImport: false, filters: ["Brand", "Type"], showExport: true })}
          <div class="wf-table-wrap wf-card"><table class="wf-table">
            <thead><tr><th>Attribute</th>${compared.map(c => `<th>${WF.esc(c.name)}</th>`).join("")}</tr></thead>
            <tbody>
              <tr><td><strong>Brand</strong></td>${compared.map(c => `<td>${WF.esc(c.brand)}</td>`).join("")}</tr>
              <tr><td><strong>Type</strong></td>${compared.map(c => `<td>${WF.esc(c.type)}</td>`).join("")}</tr>
              <tr><td><strong>Investment</strong></td>${compared.map(c => `<td>${WF.esc(c.investmentRange)}</td>`).join("")}</tr>
              <tr><td><strong>Franchise Fee</strong></td>${compared.map(c => `<td>${WF.esc(c.franchiseFee)}</td>`).join("")}</tr>
              <tr><td><strong>Royalty</strong></td>${compared.map(c => `<td>${WF.esc(c.royalty)}</td>`).join("")}</tr>
              <tr><td><strong>ROI</strong></td>${compared.map(c => `<td>${WF.esc(c.roi)}</td>`).join("")}</tr>
              <tr><td><strong>Break-even</strong></td>${compared.map(c => `<td>${WF.esc(c.breakEven)}</td>`).join("")}</tr>
              <tr><td><strong>Area</strong></td>${compared.map(c => `<td>${WF.esc(c.areaRequired)}</td>`).join("")}</tr>
              <tr><td><strong>Employees</strong></td>${compared.map(c => `<td>${WF.esc(c.employees)}</td>`).join("")}</tr>
              <tr><td><strong>Training</strong></td>${compared.map(c => `<td>${WF.esc(c.trainingDuration)}</td>`).join("")}</tr>
              <tr><td><strong>Status</strong></td>${compared.map(c => `<td><span class="wf-badge">${WF.esc(c.status)}</span></td>`).join("")}</tr>
              <tr><td><strong>Leads</strong></td>${compared.map(c => `<td>${c.leads}</td>`).join("")}</tr>
              <tr><td><strong>Franchisees</strong></td>${compared.map(c => `<td>${c.franchisees}</td>`).join("")}</tr>
            </tbody>
          </table></div>
          <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Visual Comparison</span></div><div class="wf-card__body">${WF.chartPlaceholder("Grouped Bar Chart", "Investment, Fee, ROI across models")}</div></div>
        `;
      }
    },
    {
      id: "investment-calc", label: "Investment Calculator",
      breadcrumb: [{ label: m().name, screen: "details" }, { label: "Investment Calculator" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Investment Calculator", m().name + " — Estimate total investment")}
        ${modelTabs("investment-calc")}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Input Parameters</span></div><div class="wf-card__body">
            <div class="wf-form__grid">
              <div class="wf-form__group"><label class="wf-form__label">Franchise Model</label><select class="wf-form__select">${MODEL_DATA.models.map(x => `<option${x.id === m().id ? " selected" : ""}>${WF.esc(x.name)}</option>`).join("")}</select></div>
              <div class="wf-form__group"><label class="wf-form__label">City</label><select class="wf-form__select">${MODEL_DATA.cities.map(c => `<option>${WF.esc(c)}</option>`).join("")}</select></div>
              <div class="wf-form__group"><label class="wf-form__label">Store Size (sq ft)</label><input class="wf-form__input" value="1500"></div>
              <div class="wf-form__group"><label class="wf-form__label">Fit-out Grade</label><select class="wf-form__select"><option>Standard</option><option>Premium</option><option>Economy</option></select></div>
            </div>
            <button class="wf-btn wf-btn--primary wf-mt-16" style="margin-top:16px">Calculate</button>
          </div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Investment Summary</span></div><div class="wf-card__body">
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Franchise Fee</span><span class="wf-detail-info__value">₹15,00,000</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Security Deposit</span><span class="wf-detail-info__value">₹3,00,000</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Equipment</span><span class="wf-detail-info__value">₹12,00,000</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Inventory</span><span class="wf-detail-info__value">₹5,00,000</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Fit-out</span><span class="wf-detail-info__value">₹18,00,000</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Working Capital</span><span class="wf-detail-info__value">₹4,00,000</span></div>
            <div class="wf-detail-info__row" style="font-weight:700;border-top:2px solid var(--wf-border)"><span class="wf-detail-info__label">Total Investment</span><span class="wf-detail-info__value">₹57,00,000</span></div>
            ${WF.chartPlaceholder("Pie Chart", "Investment Breakdown")}
          </div></div>
        </div>
      `
    },
    {
      id: "roi-calc", label: "ROI Calculator",
      breadcrumb: [{ label: m().name, screen: "details" }, { label: "ROI Calculator" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("ROI Calculator", m().name + " — Project returns and break-even")}
        ${modelTabs("roi-calc")}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Revenue Assumptions</span></div><div class="wf-card__body">
            <div class="wf-form__grid">
              <div class="wf-form__group"><label class="wf-form__label">Monthly Revenue</label><input class="wf-form__input" value="₹8,50,000"></div>
              <div class="wf-form__group"><label class="wf-form__label">Gross Margin %</label><input class="wf-form__input" value="65"></div>
              <div class="wf-form__group"><label class="wf-form__label">Monthly Operating Cost</label><input class="wf-form__input" value="₹4,20,000"></div>
              <div class="wf-form__group"><label class="wf-form__label">Total Investment</label><input class="wf-form__input" value="₹57,00,000"></div>
            </div>
            <button class="wf-btn wf-btn--primary" style="margin-top:16px">Calculate ROI</button>
          </div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Projected Returns</span></div><div class="wf-card__body">
            <div class="wf-card-grid" style="grid-template-columns:repeat(2,1fr);margin-bottom:16px">
              <div class="wf-stat-card"><div class="wf-stat-card__label">Expected ROI</div><div class="wf-stat-card__value">24%</div></div>
              <div class="wf-stat-card"><div class="wf-stat-card__label">Break-even</div><div class="wf-stat-card__value">20 mo</div></div>
              <div class="wf-stat-card"><div class="wf-stat-card__label">Monthly Net</div><div class="wf-stat-card__value">₹1.3L</div></div>
              <div class="wf-stat-card"><div class="wf-stat-card__label">5-Year Return</div><div class="wf-stat-card__value">₹78L</div></div>
            </div>
            ${WF.chartPlaceholder("Line Chart", "Cumulative Cash Flow")}
          </div></div>
        </div>
      `
    },
    {
      id: "territory", label: "Territory Availability",
      breadcrumb: [{ label: m().name, screen: "details" }, { label: "Territories" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Territory Availability", "Open slots and reserved zones by city")}
        ${modelTabs("territory")}
        ${WF.toolbar({ showImport: false, filters: ["City", "Model", "Status", "Brand"] })}
        <div class="wf-card-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:16px">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Available</div><div class="wf-stat-card__value">12</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Reserved</div><div class="wf-stat-card__value">4</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Taken</div><div class="wf-stat-card__value">28</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Coming Soon</div><div class="wf-stat-card__value">6</div></div>
        </div>
        <div class="wf-grid-2 wf-mb-16">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Territory Map</span></div><div class="wf-card__body">${WF.chartPlaceholder("Map", "Available territories across India")}</div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Preferred Cities — ${WF.esc(m().name)}</span></div><div class="wf-card__body">${m().preferredCities.map(c => `<span class="wf-badge" style="margin:4px">${WF.esc(c)}</span>`).join("")}</div></div>
        </div>
        <div class="wf-table-wrap wf-card"><table class="wf-table"><thead><tr><th>City</th><th>Zone</th><th>Model</th><th>Status</th><th>Slots</th><th>Actions</th></tr></thead>
        <tbody>${MODEL_DATA.territories.map(t => `<tr><td>${WF.esc(t.city)}</td><td>${WF.esc(t.zone)}</td><td>${WF.esc(t.model)}</td><td><span class="wf-badge${t.status === "Available" ? " wf-badge--dark" : ""}">${WF.esc(t.status)}</span></td><td>${t.slots}</td><td><button class="wf-btn wf-btn--sm">Reserve</button></td></tr>`).join("")}</tbody></table>${WF.pagination()}</div>
      `
    },
    {
      id: "documents", label: "Required Documents",
      breadcrumb: [{ label: m().name, screen: "details" }, { label: "Documents" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Required Documents", m().name, `<button class="wf-btn wf-btn--sm wf-btn--primary">Upload</button>`)}
        ${modelTabs("documents")}
        ${WF.toolbar({ showImport: true, filters: ["Type", "Status", "Required"] })}
        <div class="wf-card wf-mb-16"><div class="wf-card__body"><strong>Required:</strong> ${WF.esc(m().requiredDocs)}</div></div>
        <div class="wf-table-wrap wf-card"><table class="wf-table"><thead><tr><th>Document</th><th>Type</th><th>Required</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${MODEL_DATA.documents.map(d => `<tr><td><a href="#" class="wf-table__link">${WF.esc(d.name)}</a></td><td><span class="wf-badge">${WF.esc(d.type)}</span></td><td>${d.required ? "Yes" : "No"}</td><td><span class="wf-badge wf-badge--outline">${WF.esc(d.status)}</span></td><td><button class="wf-btn wf-btn--sm">Download</button></td></tr>`).join("")}</tbody></table>${WF.pagination()}</div>
      `
    },
    {
      id: "requirements", label: "Franchise Requirements",
      breadcrumb: [{ label: m().name, screen: "details" }, { label: "Requirements" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Franchise Requirements", m().name)}
        ${modelTabs("requirements")}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Space & Operations</span></div><div class="wf-card__body">
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Area Required</span><span class="wf-detail-info__value">${WF.esc(m().areaRequired)}</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Store Size</span><span class="wf-detail-info__value">${WF.esc(m().storeSize)}</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Employees</span><span class="wf-detail-info__value">${WF.esc(m().employees)}</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">License</span><span class="wf-detail-info__value">${WF.esc(m().license)}</span></div>
          </div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Eligibility Criteria</span></div><div class="wf-card__body"><p style="font-size:13px">${WF.esc(m().eligibility)}</p></div></div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Equipment & Inventory</span></div><div class="wf-card__body">
          <div class="wf-form__grid"><div class="wf-detail-info__row"><span class="wf-detail-info__label">Equipment Cost</span><span class="wf-detail-info__value">${WF.esc(m().equipmentCost)}</span></div>
          <div class="wf-detail-info__row"><span class="wf-detail-info__label">Inventory Cost</span><span class="wf-detail-info__value">${WF.esc(m().inventoryCost)}</span></div></div>
        </div></div>
      `
    },
    {
      id: "support", label: "Included Support",
      breadcrumb: [{ label: m().name, screen: "details" }, { label: "Support" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Included Support", m().name + " — Launch and ongoing support package")}
        ${modelTabs("support")}
        <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr)">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Launch Support</div><div class="wf-stat-card__value" style="font-size:16px">Included</div><div class="wf-stat-card__change">Pre-opening assistance</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Marketing Support</div><div class="wf-stat-card__value" style="font-size:16px">Included</div><div class="wf-stat-card__change">Grand opening kit</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Field Support</div><div class="wf-stat-card__value" style="font-size:16px">Monthly</div><div class="wf-stat-card__change">Area manager visits</div></div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Support Package Details</span></div><div class="wf-card__body">
          <div class="wf-detail-info__row"><span class="wf-detail-info__label">Site Selection</span><span class="wf-detail-info__value">Assisted</span></div>
          <div class="wf-detail-info__row"><span class="wf-detail-info__label">Store Design</span><span class="wf-detail-info__value">Brand-approved layouts</span></div>
          <div class="wf-detail-info__row"><span class="wf-detail-info__label">Vendor Onboarding</span><span class="wf-detail-info__value">Centralised supply chain</span></div>
          <div class="wf-detail-info__row"><span class="wf-detail-info__label">Helpdesk</span><span class="wf-detail-info__value">Mon–Sat, 9am–6pm</span></div>
          <div class="wf-detail-info__row"><span class="wf-detail-info__label">Marketing Fee</span><span class="wf-detail-info__value">${WF.esc(m().marketingFee)} of revenue</span></div>
        </div></div>
      `
    },
    {
      id: "training", label: "Training Details",
      breadcrumb: [{ label: m().name, screen: "details" }, { label: "Training" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Training Details", m().name)}
        ${modelTabs("training")}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Training Program</span></div><div class="wf-card__body">
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Duration</span><span class="wf-detail-info__value">${WF.esc(m().trainingDuration)}</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Location</span><span class="wf-detail-info__value">HQ + On-site</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Modules</span><span class="wf-detail-info__value">Operations, Kitchen, POS, HR</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Certification</span><span class="wf-detail-info__value">Required before launch</span></div>
          </div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Training Schedule</span></div><div class="wf-card__body">
            <div class="wf-timeline">
              <div class="wf-timeline__item"><div class="wf-timeline__dot"></div><div class="wf-timeline__title">Week 1 — Classroom</div><div class="wf-timeline__desc">Brand, operations, compliance</div></div>
              <div class="wf-timeline__item"><div class="wf-timeline__dot"></div><div class="wf-timeline__title">Week 2 — Kitchen Practical</div><div class="wf-timeline__desc">Hands-on production training</div></div>
              <div class="wf-timeline__item"><div class="wf-timeline__dot"></div><div class="wf-timeline__title">Week 3 — On-site</div><div class="wf-timeline__desc">Shadow existing franchisee</div></div>
            </div>
          </div></div>
        </div>
      `
    },
    {
      id: "workflow", label: "Approval Workflow",
      breadcrumb: [{ label: m().name, screen: "details" }, { label: "Approval Workflow" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Approval Workflow", m().name + " — Draft to Published pipeline", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">Submit for Review</button>
        `)}
        ${WF.workflowStepper(m().status, null, { targetScreen: "workflow" })}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Approval Chain</span></div><div class="wf-card__body">
            <div class="wf-timeline">
              <div class="wf-timeline__item"><div class="wf-timeline__dot"></div><div class="wf-timeline__time">15 Jun 2024 · Himani Bhargava</div><div class="wf-timeline__title">Draft Created</div></div>
              <div class="wf-timeline__item"><div class="wf-timeline__dot"></div><div class="wf-timeline__time">20 Jun 2024 · Himani Bhargava</div><div class="wf-timeline__title">Submitted</div></div>
              <div class="wf-timeline__item"><div class="wf-timeline__dot"></div><div class="wf-timeline__time">21 Jun 2024 · Om Anil</div><div class="wf-timeline__title">Under Review — Team Lead</div></div>
              <div class="wf-timeline__item"><div class="wf-timeline__dot"></div><div class="wf-timeline__time">22 Jun 2024 · Abdul Syed (CEO)</div><div class="wf-timeline__title">Approved</div></div>
              <div class="wf-timeline__item"><div class="wf-timeline__dot"></div><div class="wf-timeline__time">23 Jun 2024 · Admin</div><div class="wf-timeline__title">Published</div></div>
            </div>
          </div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Role Permissions</span></div><div class="wf-card__body">
            <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Role</th><th>Create</th><th>Submit</th><th>Approve</th><th>Publish</th></tr></thead>
            <tbody>
              <tr><td>Abdul Syed</td><td>—</td><td>—</td><td>Yes</td><td>Yes</td></tr>
              <tr><td>Team Lead</td><td>Yes</td><td>Yes</td><td>Yes</td><td>—</td></tr>
              <tr><td>Sales Executive</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
              <tr><td>Brand Owner</td><td>Yes</td><td>Yes</td><td>—</td><td>—</td></tr>
              <tr><td>Admin</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
            </tbody></table></div>
          </div></div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Pending Approvals</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Model</th><th>Submitter</th><th>Status</th><th>Due</th><th>Actions</th></tr></thead>
          <tbody>${MODEL_DATA.upcomingReviews.map(r => `<tr><td>${WF.esc(r.model)}</td><td>${WF.esc(r.submitter)}</td><td><span class="wf-badge">${WF.esc(r.status)}</span></td><td>${WF.esc(r.due)}</td><td><button class="wf-btn wf-btn--sm">Review</button></td></tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "publish", label: "Publish / Unpublish",
      breadcrumb: [{ label: m().name, screen: "details" }, { label: "Publish" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Publish / Unpublish Model", m().name, `
          <button class="wf-btn wf-btn--sm wf-btn--primary" data-modal="publish">Publish Model</button>
          <button class="wf-btn wf-btn--sm" data-modal="archive">Unpublish</button>
        `)}
        ${WF.workflowStepper(m().status, null, { targetScreen: "workflow" })}
        <div class="wf-card wf-mb-16"><div class="wf-card__body">
          <p style="font-size:13px;margin-bottom:16px">Control visibility of <strong>${WF.esc(m().name)}</strong> on the franchise portal and sales CRM.</p>
          <div class="wf-form__grid">
            <div class="wf-form__group"><label class="wf-form__label">Current Status</label><input class="wf-form__input" value="${WF.esc(m().status)}" readonly></div>
            <div class="wf-form__group"><label class="wf-form__label">Visibility</label><select class="wf-form__select"><option>Sales Team + Portal</option><option>Sales Team Only</option><option>Hidden</option></select></div>
            <div class="wf-form__group"><label class="wf-form__label">Publish Date</label><input type="date" class="wf-form__input" value="2024-06-23"></div>
            <div class="wf-form__group"><label class="wf-form__label">Expiry Date</label><input type="date" class="wf-form__input"></div>
          </div>
        </div>
        <div class="wf-card__footer"><button class="wf-btn wf-btn--primary" data-modal="publish">Confirm Publish</button></div></div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Publication History</span></div>
          <div class="wf-card__body">${WF.timeline([
            { time: "23 Jun 2024", title: "Published", desc: "Visible on franchise portal", user: "Admin" },
            { time: "22 Jun 2024", title: "Approved", desc: "CEO approval received", user: "Abdul Syed" }
          ])}</div>
        </div>
      `
    },
    {
      id: "timeline", label: "Activity Timeline",
      breadcrumb: [{ label: m().name, screen: "details" }, { label: "Timeline" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Activity Timeline", m().name + " — Model events and audit trail")}
        ${modelTabs("timeline")}
        ${WF.toolbar({ showExport: true, showImport: false, filters: ["Event Type", "User", "Date"] })}
        <div class="wf-card"><div class="wf-card__body">${WF.timeline(MODEL_DATA.timeline)}</div></div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Activity Log</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Timestamp</th><th>Event</th><th>Detail</th><th>User</th></tr></thead>
          <tbody>${MODEL_DATA.timeline.map(t => `<tr><td>${WF.esc(t.time)}</td><td><span class="wf-badge">${WF.esc(t.title)}</span></td><td>${WF.esc(t.desc)}</td><td>${WF.esc(t.user)}</td></tr>`).join("")}</tbody></table>${WF.pagination()}</div>
        </div>
      `
    },
    {
      id: "archive", label: "Archive Model",
      breadcrumb: [{ label: m().name, screen: "details" }, { label: "Archive" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Archive Franchise Model", m().name, `<button class="wf-btn wf-btn--sm wf-btn--danger" data-modal="archive">Archive Model</button>`)}
        <div class="wf-card wf-mb-16"><div class="wf-card__body">
          <p style="font-size:13px;margin-bottom:16px">Archiving removes this model from active sales. Existing franchisees are not affected.</p>
          ${WF.workflowStepper("Archived")}
        </div></div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Archived Models</span></div>
            <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Model</th><th>Brand</th><th>Archived</th><th>By</th></tr></thead>
            <tbody>
              <tr><td>Odette Classic</td><td>Odette</td><td>Jan 2024</td><td>Admin</td></tr>
              <tr><td>Tea Time Express</td><td>Tea Time</td><td>Mar 2024</td><td>Sumanth</td></tr>
            </tbody></table></div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Archive This Model</span></div><div class="wf-card__body">
            <div class="wf-form__group wf-mb-16"><label class="wf-form__label">Reason</label><select class="wf-form__select"><option>Replaced by new model</option><option>Brand discontinued</option><option>Low performance</option><option>Other</option></select></div>
            <div class="wf-form__group"><label class="wf-form__label">Notes</label><textarea class="wf-form__textarea" placeholder="Archive reason…"></textarea></div>
            <button class="wf-btn wf-btn--danger wf-mt-16" style="margin-top:12px" data-modal="archive">Confirm Archive</button>
          </div></div>
        </div>
        ${WF.emptyState("No archived models selected", "Select a model from the list to archive.", "View Model List", "#list")}
      `
    }
  ];

  function init() {
    WF.resetViewRole(activeRole);
    WF_SPA.init({
      moduleKey: "franchiseModels",
      moduleLabel: "Franchise Models",
      moduleTitle: "Franchise Models",
      moduleHref: "index.html",
      defaultScreen: "dashboard",
      searchPlaceholder: "Search models, brands, territories, documents…",
      modals: WF.modelModals,
      screens
    });

  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => FRANCHISE_MODELS_MODULE.init());
