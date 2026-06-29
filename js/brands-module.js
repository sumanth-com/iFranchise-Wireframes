/* Brand Management — Single Page Module (17 screens) */

const BRAND_MODULE = (() => {
  const b = () => BRAND_DATA.brands[0];
  const brandTabs = (active) => WF.spaTabs([
    { id: "details", label: "Overview" },
    { id: "investment", label: "Investment" },
    { id: "opportunities", label: "Requirements" },
    { id: "royalty", label: "Financial Details" },
    { id: "expansion", label: "Expansion Plan" },
    { id: "performance", label: "Franchisees" },
    { id: "expansion", label: "Open Locations" },
    { id: "opportunities", label: "Leads Interested" },
    { id: "contacts", label: "Meetings" },
    { id: "documents", label: "Documents" },
    { id: "timeline", label: "Timeline" },
    { id: "timeline", label: "Activity Log" },
    { id: "profile", label: "Notes" }
  ], active);

  const screens = [
    {
      id: "dashboard", label: "Brand Dashboard",
      render: () => `
        ${WF.pageHeader("Brand Dashboard", "Portfolio overview across all franchise brands", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ Create Brand</button>
        `)}
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Total Brands</div><div class="wf-stat-card__value">42</div><div class="wf-stat-card__change">10 active portfolios</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Brand Revenue</div><div class="wf-stat-card__value">₹52Cr</div><div class="wf-stat-card__change">↑ 14% YoY</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Interested Leads</div><div class="wf-stat-card__value">1,242</div><div class="wf-stat-card__change">↑ 86 this month</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Open Cities</div><div class="wf-stat-card__value">108</div><div class="wf-stat-card__change">Across 12 states</div></div>
        </div>
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Upcoming Launches</div><div class="wf-stat-card__value">18</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Pending Agreements</div><div class="wf-stat-card__value">24</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Franchise Growth</div><div class="wf-stat-card__value">+16%</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Monthly Enquiries</div><div class="wf-stat-card__value">342</div></div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Revenue Trend</span></div><div class="wf-card__body">${WF.chartPlaceholder("Line Chart", "Brand Revenue (6 months)")}</div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Franchise Growth</span></div><div class="wf-card__body">${WF.chartPlaceholder("Bar Chart", "New Franchisees per Quarter")}</div></div>
        </div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Top Performing Locations</span><button data-screen="performance" class="wf-btn wf-btn--sm">View All</button></div>
            <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Outlet</th><th>City</th><th>Revenue</th><th>Growth</th></tr></thead>
            <tbody>${BRAND_DATA.topLocations.map(l => `<tr><td>${WF.esc(l.outlet)}</td><td>${WF.esc(l.city)}</td><td>${WF.esc(l.revenue)}</td><td>${WF.esc(l.growth)}</td></tr>`).join("")}</tbody></table></div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Activity</span><button data-screen="timeline" class="wf-btn wf-btn--sm">View Timeline</button></div>
            <div class="wf-card__body">${WF.timeline(BRAND_DATA.timeline.slice(0, 4))}</div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Monthly Enquiries by Brand</span><button data-screen="list" class="wf-btn wf-btn--sm">All Brands</button></div>
          <div class="wf-card__body">${WF.chartPlaceholder("Stacked Bar", "Enquiries per Brand")}</div>
        </div>
      `
    },
    {
      id: "list", label: "Brand List",
      render: () => `
        ${WF.pageHeader("Brand List", "All franchise brands in the portfolio", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ Create Brand</button>
        `)}
        ${WF.toolbar({ filters: ["Status", "Industry", "Category", "Investment"] })}
        <div id="wf-data-content">${WF.brandTable(BRAND_DATA.brands)}</div>
        ${WF.loadingState()}
      `
    },
    {
      id: "details", label: "Brand Details",
      breadcrumb: [{ label: "Brand List", screen: "list" }, { label: b().name }],
      render: () => {
        const br = b();
        return `
          ${WF.pageHeader(br.name, br.id + " · " + br.industry + " · " + br.city, `
            <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
            <button data-screen="profile" class="wf-btn wf-btn--sm">Full Profile</button>
            <button class="wf-btn wf-btn--sm wf-btn--danger" data-modal="confirm-delete">Delete</button>
          `)}
          ${brandTabs("details")}
          <div class="wf-detail-layout">
            <div class="wf-detail-sidebar">${WF.brandProfileCard(br)}</div>
            <div>
              <div class="wf-card-grid" style="grid-template-columns:repeat(4,1fr)">
                <div class="wf-stat-card"><div class="wf-stat-card__label">Revenue</div><div class="wf-stat-card__value" style="font-size:18px">${WF.esc(br.revenue)}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Franchisees</div><div class="wf-stat-card__value" style="font-size:18px">${br.franchisees}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Interested Leads</div><div class="wf-stat-card__value" style="font-size:18px">${br.interestedLeads}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Open Cities</div><div class="wf-stat-card__value" style="font-size:18px">${br.openCities}</div></div>
              </div>
              <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Brand Overview</span></div><div class="wf-card__body">
                <p style="font-size:13px;margin-bottom:16px">${WF.esc(br.description)}</p>
                <div class="wf-form__grid wf-form__grid--3">
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Website</span><span class="wf-detail-info__value">${WF.esc(br.website)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Founded</span><span class="wf-detail-info__value">${WF.esc(br.established)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Founder</span><span class="wf-detail-info__value">${WF.esc(br.founder)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Investment</span><span class="wf-detail-info__value">${WF.esc(br.investmentRange)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Franchise Fee</span><span class="wf-detail-info__value">${WF.esc(br.franchiseFee)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">ROI</span><span class="wf-detail-info__value">${WF.esc(br.roi)}</span></div>
                </div>
              </div></div>
              <div class="wf-grid-2">
                <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Open Locations</span><button data-screen="expansion" class="wf-btn wf-btn--sm wf-btn--ghost">View All</button></div>
                  <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Outlet</th><th>City</th><th>Status</th></tr></thead>
                  <tbody>${BRAND_DATA.locations.slice(0, 3).map(l => `<tr><td>${WF.esc(l.outlet)}</td><td>${WF.esc(l.city)}</td><td><span class="wf-badge">${WF.esc(l.status)}</span></td></tr>`).join("")}</tbody></table></div>
                </div>
                <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Pending Agreements</span><button data-screen="agreements" class="wf-btn wf-btn--sm wf-btn--ghost">View All</button></div>
                  <div class="wf-card__body">${BRAND_DATA.agreements.filter(a => a.status !== "Signed").map(a => `<div class="wf-detail-info__row"><span class="wf-detail-info__label">${WF.esc(a.franchisee)}</span><span class="wf-detail-info__value"><span class="wf-badge">${WF.esc(a.status)}</span></span></div>`).join("")}</div>
                </div>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      id: "create", label: "Create Brand",
      breadcrumb: [{ label: "Brand List", screen: "list" }, { label: "Create Brand" }],
      render: () => `${WF.pageHeader("Create Brand", "Add a new franchise brand to the portfolio")}<div class="wf-card"><div class="wf-card__body">${WF.brandForm(null, "create")}</div></div>`
    },
    {
      id: "edit", label: "Edit Brand",
      breadcrumb: [{ label: "Brand List", screen: "list" }, { label: b().name, screen: "details" }, { label: "Edit" }],
      render: () => `${WF.pageHeader("Edit Brand", b().id)}<div class="wf-card"><div class="wf-card__body">${WF.brandForm(b(), "edit")}</div></div>`
    },
    {
      id: "profile", label: "Brand Profile",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Brand Profile" }],
      render: () => {
        const br = b();
        return `
          ${WF.pageHeader("Brand Profile", br.name + " — Complete brand information")}
          ${brandTabs("profile")}
          <div class="wf-card wf-mb-16"><div class="wf-card__body" style="text-align:center;padding:32px">
            <div class="wf-brand-logo wf-brand-logo--lg"></div>
            <h2 style="font-size:22px;margin-bottom:4px">${WF.esc(br.name)}</h2>
            <p style="color:var(--wf-text-secondary)">${WF.esc(br.category)} · ${WF.esc(br.industry)} · Est. ${WF.esc(br.established)}</p>
          </div></div>
          <div class="wf-grid-2">
            <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Company Details</span></div><div class="wf-card__body">
              <div class="wf-detail-info__row"><span class="wf-detail-info__label">Head Office</span><span class="wf-detail-info__value">${WF.esc(br.address)}, ${WF.esc(br.city)}</span></div>
              <div class="wf-detail-info__row"><span class="wf-detail-info__label">GST</span><span class="wf-detail-info__value">${WF.esc(br.gst)}</span></div>
              <div class="wf-detail-info__row"><span class="wf-detail-info__label">PAN</span><span class="wf-detail-info__value">${WF.esc(br.pan)}</span></div>
              <div class="wf-detail-info__row"><span class="wf-detail-info__label">Support</span><span class="wf-detail-info__value">${WF.esc(br.supportEmail)}</span></div>
            </div></div>
            <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Internal Notes</span></div><div class="wf-card__body">
              ${BRAND_DATA.notes.map(n => `<div class="wf-note"><div class="wf-note__header"><span class="wf-note__author">${WF.esc(n.author)}</span><span class="wf-note__time">${WF.esc(n.time)}</span></div><div class="wf-note__body">${WF.esc(n.body)}</div></div>`).join("")}
            </div></div>
          </div>
        `;
      }
    },
    {
      id: "opportunities", label: "Franchise Opportunities",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Franchise Opportunities" }],
      render: () => `
        ${WF.pageHeader("Franchise Opportunities", b().name + " — Open slots and interested leads")}
        ${brandTabs("opportunities")}${WF.toolbar({ filters: ["City", "Type", "Status"] })}
        <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:16px">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Interested Leads</div><div class="wf-stat-card__value">${b().interestedLeads}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Open Slots</div><div class="wf-stat-card__value">11</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Conversion Rate</div><div class="wf-stat-card__value">18%</div></div>
        </div>
        <div class="wf-table-wrap wf-card"><table class="wf-table"><thead><tr><th>City</th><th>Type</th><th>Investment</th><th>Slots</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${BRAND_DATA.opportunities.map(o => `<tr><td>${WF.esc(o.city)}</td><td>${WF.esc(o.type)}</td><td>${WF.esc(o.investment)}</td><td>${o.slots}</td><td><span class="wf-badge">${WF.esc(o.status)}</span></td><td><button class="wf-btn wf-btn--sm">View Leads</button></td></tr>`).join("")}</tbody></table>${WF.pagination()}</div>
      `
    },
    {
      id: "investment", label: "Investment Details",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Investment Details" }],
      render: () => {
        const br = b();
        return `
          ${WF.pageHeader("Investment Details", br.name)}${brandTabs("investment")}
          <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr)">
            <div class="wf-stat-card"><div class="wf-stat-card__label">Investment Range</div><div class="wf-stat-card__value" style="font-size:20px">${WF.esc(br.investmentRange)}</div></div>
            <div class="wf-stat-card"><div class="wf-stat-card__label">Franchise Fee</div><div class="wf-stat-card__value" style="font-size:20px">${WF.esc(br.franchiseFee)}</div></div>
            <div class="wf-stat-card"><div class="wf-stat-card__label">ROI</div><div class="wf-stat-card__value" style="font-size:20px">${WF.esc(br.roi)}</div></div>
          </div>
          <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Investment Breakdown</span></div><div class="wf-card__body">
            <div class="wf-form__grid">
              <div class="wf-detail-info__row"><span class="wf-detail-info__label">Franchise Fee</span><span class="wf-detail-info__value">${WF.esc(br.franchiseFee)}</span></div>
              <div class="wf-detail-info__row"><span class="wf-detail-info__label">Area Required</span><span class="wf-detail-info__value">${WF.esc(br.areaRequired)}</span></div>
              <div class="wf-detail-info__row"><span class="wf-detail-info__label">Initial Inventory</span><span class="wf-detail-info__value">${WF.esc(br.inventory)}</span></div>
              <div class="wf-detail-info__row"><span class="wf-detail-info__label">Break Even</span><span class="wf-detail-info__value">${WF.esc(br.breakEven)}</span></div>
              <div class="wf-detail-info__row"><span class="wf-detail-info__label">Agreement Duration</span><span class="wf-detail-info__value">${WF.esc(br.agreementDuration)}</span></div>
            </div>
            ${WF.chartPlaceholder("Pie Chart", "Investment Allocation")}
          </div></div>
        `;
      }
    },
    {
      id: "royalty", label: "Royalty & Fee Structure",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Royalty & Fees" }],
      render: () => {
        const br = b();
        return `
          ${WF.pageHeader("Royalty & Fee Structure", br.name)}${brandTabs("royalty")}
          <div class="wf-card"><div class="wf-card__body">
            <div class="wf-form__grid wf-form__grid--3">
              <div class="wf-stat-card"><div class="wf-stat-card__label">Royalty</div><div class="wf-stat-card__value">${WF.esc(br.royalty)}</div><div class="wf-stat-card__change">Of gross revenue</div></div>
              <div class="wf-stat-card"><div class="wf-stat-card__label">Marketing Fee</div><div class="wf-stat-card__value">${WF.esc(br.marketingFee)}</div><div class="wf-stat-card__change">National fund</div></div>
              <div class="wf-stat-card"><div class="wf-stat-card__label">Franchise Fee</div><div class="wf-stat-card__value" style="font-size:20px">${WF.esc(br.franchiseFee)}</div><div class="wf-stat-card__change">One-time</div></div>
            </div>
            ${WF.chartPlaceholder("Table/Chart", "Fee Schedule by Year")}
          </div></div>
        `;
      }
    },
    {
      id: "expansion", label: "Expansion Locations",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Expansion Locations" }],
      render: () => `
        ${WF.pageHeader("Expansion Locations", b().name + " — Open outlets and planned cities")}
        ${brandTabs("expansion")}${WF.toolbar({ filters: ["City", "Status", "Region"] })}
        <div class="wf-grid-2 wf-mb-16">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Expansion Map</span></div><div class="wf-card__body">${WF.chartPlaceholder("Map", "Open & Planned Cities")}</div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Target Cities</span></div><div class="wf-card__body">
            ${b().expansionCities.map(c => `<span class="wf-badge" style="margin:4px">${WF.esc(c)}</span>`).join("")}
          </div></div>
        </div>
        <div class="wf-table-wrap wf-card"><table class="wf-table"><thead><tr><th>Outlet</th><th>City</th><th>Status</th><th>Revenue</th><th>Opened</th><th>Actions</th></tr></thead>
        <tbody>${BRAND_DATA.locations.map(l => `<tr><td>${WF.esc(l.outlet)}</td><td>${WF.esc(l.city)}</td><td><span class="wf-badge">${WF.esc(l.status)}</span></td><td>${WF.esc(l.revenue)}</td><td>${WF.esc(l.opened)}</td><td><button class="wf-btn wf-btn--sm">View</button></td></tr>`).join("")}</tbody></table>${WF.pagination()}</div>
      `
    },
    {
      id: "documents", label: "Required Documents",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Documents" }],
      render: () => `
        ${WF.pageHeader("Required Documents", b().name, `<button class="wf-btn wf-btn--sm wf-btn--primary">Upload Document</button>`)}
        ${brandTabs("documents")}${WF.toolbar({ showImport: true, filters: ["Type", "Date"] })}
        <div class="wf-card wf-mb-16"><div class="wf-card__body"><strong>License Requirement:</strong> ${WF.esc(b().license)}</div></div>
        <div class="wf-table-wrap wf-card"><table class="wf-table"><thead><tr><th><span class="wf-table__checkbox"></span></th><th>File Name</th><th>Type</th><th>Size</th><th>Uploaded</th><th>Actions</th></tr></thead>
        <tbody>${BRAND_DATA.documents.map(d => `<tr><td><span class="wf-table__checkbox"></span></td><td><a href="#" class="wf-table__link">${WF.esc(d.name)}</a></td><td><span class="wf-badge">${WF.esc(d.type)}</span></td><td>${WF.esc(d.size)}</td><td>${WF.esc(d.date)}</td><td><button class="wf-btn wf-btn--sm">Download</button></td></tr>`).join("")}</tbody></table>${WF.pagination()}</div>
      `
    },
    {
      id: "marketing", label: "Marketing Assets",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Marketing Assets" }],
      render: () => `
        ${WF.pageHeader("Marketing Assets", b().name, `<button class="wf-btn wf-btn--sm">Upload Asset</button>`)}
        ${WF.toolbar({ showImport: true, filters: ["Asset Type", "Format"] })}
        <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:16px">
          ${BRAND_DATA.marketingAssets.slice(0, 3).map(a => `<div class="wf-card"><div class="wf-card__body" style="text-align:center">${WF.chartPlaceholder("Bar Chart", "Preview")}<div style="font-size:13px;font-weight:500">${WF.esc(a.name)}</div><div style="font-size:11px;color:var(--wf-text-muted)">${WF.esc(a.type)} · ${WF.esc(a.size)}</div><button class="wf-btn wf-btn--sm wf-mt-16" style="margin-top:8px">Download</button></div></div>`).join("")}
        </div>
        <div class="wf-table-wrap wf-card"><table class="wf-table"><thead><tr><th>Asset Name</th><th>Type</th><th>Format</th><th>Size</th><th>Actions</th></tr></thead>
        <tbody>${BRAND_DATA.marketingAssets.map(a => `<tr><td>${WF.esc(a.name)}</td><td><span class="wf-badge">${WF.esc(a.type)}</span></td><td>${WF.esc(a.format)}</td><td>${WF.esc(a.size)}</td><td><button class="wf-btn wf-btn--sm">Download</button></td></tr>`).join("")}</tbody></table>${WF.pagination()}</div>
      `
    },
    {
      id: "training", label: "Training & Support",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Training & Support" }],
      render: () => `
        ${WF.pageHeader("Training & Support", b().name)}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Training Program</span><span class="wf-badge wf-badge--dark">${b().training ? "Available" : "Not Available"}</span></div><div class="wf-card__body">
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Duration</span><span class="wf-detail-info__value">14 days</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Location</span><span class="wf-detail-info__value">Bengaluru HQ + On-site</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Modules</span><span class="wf-detail-info__value">Operations, Kitchen, POS, Marketing</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Required Staff</span><span class="wf-detail-info__value">${WF.esc(b().requiredStaff)}</span></div>
          </div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Ongoing Support</span><span class="wf-badge wf-badge--dark">${b().supportIncluded ? "Included" : "Add-on"}</span></div><div class="wf-card__body">
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Field Support</span><span class="wf-detail-info__value">Monthly visits</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Helpdesk</span><span class="wf-detail-info__value">${WF.esc(WF.formatPhone(b().supportPhone))}</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Inventory</span><span class="wf-detail-info__value">${WF.esc(b().inventory)}</span></div>
          </div></div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Training Materials</span></div><div class="wf-card__body">${WF.emptyState("Training portal", "Access SOPs, videos, and certification modules.", "Open Portal")}</div></div>
      `
    },
    {
      id: "contacts", label: "Brand Contacts",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Brand Contacts" }],
      render: () => `
        ${WF.pageHeader("Brand Contacts", b().name, `${WF.moduleLink(WF.MODULE_NAV.meetingsSchedule, "Schedule Meeting", { primary: true })}`)}
        ${brandTabs("contacts")}
        <div class="wf-card-grid" style="grid-template-columns:repeat(2,1fr)">
          ${BRAND_DATA.contacts.map(c => `<div class="wf-card"><div class="wf-card__body">
            <div style="display:flex;gap:12px;align-items:center;margin-bottom:12px"><div class="wf-avatar-lg" style="width:48px;height:48px;margin:0"></div><div><div style="font-weight:600">${WF.esc(c.name)}</div><div style="font-size:12px;color:var(--wf-text-muted)">${WF.esc(c.role)}</div></div></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Email</span><span class="wf-detail-info__value">${WF.esc(c.email)}</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Phone</span><span class="wf-detail-info__value">${WF.esc(WF.formatPhone(c.phone))}</span></div>
            <button class="wf-btn wf-btn--sm wf-mt-16" style="margin-top:12px" data-modal="send-email">Contact</button>
          </div></div>`).join("")}
        </div>
      `
    },
    {
      id: "performance", label: "Performance Dashboard",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Performance" }],
      render: () => `
        ${WF.pageHeader("Performance Dashboard", b().name + " — Revenue and franchise metrics")}
        ${brandTabs("performance")}
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Brand Revenue</div><div class="wf-stat-card__value">${WF.esc(b().revenue)}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Active Franchisees</div><div class="wf-stat-card__value">${b().franchisees}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Avg. Outlet Revenue</div><div class="wf-stat-card__value">₹7.8L</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Compliance Score</div><div class="wf-stat-card__value">94%</div></div>
        </div>
        <div class="wf-grid-2 wf-mt-16">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Revenue Trend</span></div><div class="wf-card__body">${WF.chartPlaceholder("Line Chart", "Monthly Revenue")}</div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Top Performing Locations</span></div>
            <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Outlet</th><th>Revenue</th><th>Growth</th></tr></thead>
            <tbody>${BRAND_DATA.topLocations.map(l => `<tr><td>${WF.esc(l.outlet)}</td><td>${WF.esc(l.revenue)}</td><td>${WF.esc(l.growth)}</td></tr>`).join("")}</tbody></table></div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Franchise Growth</span></div><div class="wf-card__body">${WF.chartPlaceholder("Bar Chart", "New Franchisees per Quarter")}</div></div>
      `
    },
    {
      id: "agreements", label: "Agreements",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Agreements" }],
      render: () => `
        ${WF.pageHeader("Brand Agreements", b().name, `<button class="wf-btn wf-btn--sm wf-btn--primary">+ New Agreement</button>`)}
        ${WF.toolbar({ showImport: false, filters: ["Status", "City", "Type"] })}
        <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:16px">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Total</div><div class="wf-stat-card__value">${BRAND_DATA.agreements.length}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Signed</div><div class="wf-stat-card__value">1</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Pending</div><div class="wf-stat-card__value">2</div></div>
        </div>
        <div class="wf-table-wrap wf-card"><table class="wf-table"><thead><tr><th>ID</th><th>Franchisee</th><th>Type</th><th>City</th><th>Status</th><th>Signed</th><th>Value</th><th>Actions</th></tr></thead>
        <tbody>${BRAND_DATA.agreements.map(a => `<tr><td>${WF.esc(a.id)}</td><td>${WF.esc(a.franchisee)}</td><td>${WF.esc(a.type)}</td><td>${WF.esc(a.city)}</td><td><span class="wf-badge${a.status === "Signed" ? " wf-badge--dark" : ""}">${WF.esc(a.status)}</span></td><td>${WF.esc(a.signed)}</td><td>${WF.esc(a.value)}</td><td><button class="wf-btn wf-btn--sm">View</button></td></tr>`).join("")}</tbody></table>${WF.pagination()}</div>
      `
    },
    {
      id: "timeline", label: "Activity Timeline",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Activity Timeline" }],
      render: () => `
        ${WF.pageHeader("Activity Timeline", b().name + " — Brand events and audit trail")}
        ${brandTabs("timeline")}${WF.toolbar({ showImport: false, showExport: true, filters: ["Event Type", "User", "Date"] })}
        <div class="wf-card"><div class="wf-card__body">${WF.timeline(BRAND_DATA.timeline)}</div></div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Activity Log</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Timestamp</th><th>Event</th><th>Detail</th><th>User</th></tr></thead>
          <tbody>${BRAND_DATA.timeline.map(t => `<tr><td>${WF.esc(t.time)}</td><td><span class="wf-badge">${WF.esc(t.title)}</span></td><td>${WF.esc(t.desc)}</td><td>${WF.esc(t.user)}</td></tr>`).join("")}</tbody></table></div>
        </div>
      `
    }
  ];

  function init() {
    WF_SPA.init({
      moduleKey: "brands",
      moduleLabel: "Brands",
      moduleTitle: "Brand Management",
      moduleHref: "/",
      defaultScreen: "dashboard",
      searchPlaceholder: "Search brands, documents, franchise opportunities…",
      modals: WF.brandModals,
      screens
    });
  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => BRAND_MODULE.init());
