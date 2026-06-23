/* Customer Management — Single Page Module (14 screens) */

const CUSTOMER_MODULE = (() => {
  const b = () => WF_DATA.customers[0];
  const detailTabs = () => WF.spaTabs([
    { id: "details", label: "Overview" },
    { id: "timeline", label: "Timeline" },
    { id: "activity-log", label: "Activity" },
    { id: "communication", label: "Meetings" },
    { id: "documents", label: "Documents" },
    { id: "payments", label: "Invoices" },
    { id: "payments", label: "Payments" },
    { id: "agreements", label: "Agreements" },
    { id: "tasks", label: "Tasks" },
    { id: "notes", label: "Notes" },
    { id: "communication", label: "Communication" }
  ], WF_SPA.getCurrent());

  const screens = [
    {
      id: "dashboard", label: "Customer Dashboard",
      render: () => `
        ${WF.pageHeader("Customer Dashboard", "Overview of franchise customers and key metrics", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ Create Customer</button>
        `)}
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Total Customers</div><div class="wf-stat-card__value">248</div><div class="wf-stat-card__change">↑ 12% vs last month</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Active</div><div class="wf-stat-card__value">186</div><div class="wf-stat-card__change">75% of total</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Onboarding</div><div class="wf-stat-card__value">34</div><div class="wf-stat-card__change">↑ 8 new this week</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Payment Overdue</div><div class="wf-stat-card__value">18</div><div class="wf-stat-card__change">Requires follow-up</div></div>
        </div>
        <div class="wf-dashboard-charts">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Customers by Brand</span><button data-screen="list" class="wf-btn wf-btn--sm wf-btn--ghost">View All</button></div>
            <div class="wf-card__body">${WF.miniBarChart([
              { label: "Odette", value: 62 },
              { label: "Belgian Waffle", value: 48 },
              { label: "Chai Point", value: 41 },
              { label: "Kasturi", value: 35 },
              { label: "Burger Co.", value: 28 }
            ])}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Status Breakdown</span></div>
            <div class="wf-card__body">${WF.miniDonut([
              { label: "Active", value: 186 },
              { label: "Onboarding", value: 34 },
              { label: "Pending Agreement", value: 22 },
              { label: "Payment Due", value: 6 }
            ], "248")}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Customers by City</span><button data-screen="list" class="wf-btn wf-btn--sm wf-btn--ghost">View All</button></div>
            <div class="wf-card__body">${WF.miniBarChart([
              { label: "Bengaluru", value: 72 },
              { label: "Hyderabad", value: 54 },
              { label: "Chennai", value: 41 },
              { label: "Mumbai", value: 38 },
              { label: "Pune", value: 24 }
            ])}</div>
          </div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Customers</span><button data-screen="list" class="wf-btn wf-btn--sm">View All</button></div>
            <div class="wf-card__body" style="padding:0" id="wf-data-content">${WF.customerTable(WF_DATA.customers.slice(0, 5), { showActions: false, compact: true })}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Activity</span><button data-screen="activity-log" class="wf-btn wf-btn--sm">View Log</button></div>
            <div class="wf-card__body">${WF.timeline(WF_DATA.activityLog.slice(0, 4))}</div>
          </div>
        </div>
        <div class="wf-dashboard-charts wf-dashboard-charts--2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Customer Acquisition Trend</span></div>
            <div class="wf-card__body">${WF.miniLineChart(["Jan", "Feb", "Mar", "Apr", "May", "Jun"])}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Payment Status</span></div>
            <div class="wf-card__body">${WF.miniBarChart([
              { label: "Paid", value: 168 },
              { label: "Partial", value: 32 },
              { label: "Overdue", value: 18 },
              { label: "Pending", value: 24 },
              { label: "Refunded", value: 6 }
            ])}</div>
          </div>
        </div>
      `
    },
    {
      id: "list", label: "Customer List",
      render: () => `
        ${WF.pageHeader("Customer List", "Manage and search all franchise customers", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="create" class="wf-btn wf-btn--sm wf-btn--primary">+ Create Customer</button>
        `)}
        ${WF.toolbar()}
        <div id="wf-data-content">${WF.customerTable(WF_DATA.customers)}</div>
        ${WF.loadingState()}
      `
    },
    {
      id: "details", label: "Customer Details",
      breadcrumb: [{ label: "Customer List", screen: "list" }, { label: b().name }],
      render: () => {
        const c = b();
        return `
          ${WF.pageHeader(c.name, c.id + " · " + c.brand + " · " + c.city, `
            <button class="wf-btn wf-btn--sm" data-modal="send-email">Contact</button>
            <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
            <button class="wf-btn wf-btn--sm wf-btn--danger" data-modal="confirm-delete">Delete</button>
          `)}
          ${WF.spaTabs([
            { id: "details", label: "Overview" }, { id: "timeline", label: "Timeline" },
            { id: "activity-log", label: "Activity" }, { id: "communication", label: "Meetings" },
            { id: "documents", label: "Documents" }, { id: "payments", label: "Payments" },
            { id: "agreements", label: "Agreements" }, { id: "tasks", label: "Tasks" },
            { id: "notes", label: "Notes" }
          ], "details")}
          <div class="wf-detail-layout">
            <div class="wf-detail-sidebar">${WF.customerProfileCard(c)}</div>
            <div>
              <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr)">
                <div class="wf-stat-card"><div class="wf-stat-card__label">Agreement</div><div class="wf-stat-card__value" style="font-size:18px">${WF.esc(c.agreementStatus)}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Payment</div><div class="wf-stat-card__value" style="font-size:18px">${WF.esc(c.paymentStatus)}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Investment</div><div class="wf-stat-card__value" style="font-size:18px">${WF.esc(c.budget)}</div></div>
              </div>
              <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Customer Information</span></div><div class="wf-card__body">
                <div class="wf-form__grid wf-form__grid--3">
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Email</span><span class="wf-detail-info__value">${WF.esc(c.email)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Phone</span><span class="wf-detail-info__value">${WF.esc(c.phone)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">City</span><span class="wf-detail-info__value">${WF.esc(c.city)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Sales Executive</span><span class="wf-detail-info__value">${WF.esc(c.salesExec)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Source</span><span class="wf-detail-info__value">${WF.esc(c.source)}</span></div>
                </div>
                <p style="font-size:13px;color:var(--wf-text-secondary);margin-top:12px">${WF.esc(c.remarks)}</p>
              </div></div>
              <div class="wf-grid-2">
                <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Timeline</span><button data-screen="timeline" class="wf-btn wf-btn--sm wf-btn--ghost">View All</button></div><div class="wf-card__body">${WF.timeline(WF_DATA.timeline.slice(0, 3))}</div></div>
                <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Open Tasks</span><button data-screen="tasks" class="wf-btn wf-btn--sm wf-btn--ghost">View All</button></div><div class="wf-card__body">${WF_DATA.tasks.filter(t => t.status !== "Completed").map(t => `<div class="wf-task"><div class="wf-task__checkbox"></div><div class="wf-task__content"><div class="wf-task__title">${WF.esc(t.title)}</div><div class="wf-task__meta">${WF.esc(t.assignee)} · Due ${WF.esc(t.due)}</div></div></div>`).join("")}</div></div>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      id: "create", label: "Create Customer",
      breadcrumb: [{ label: "Customer List", screen: "list" }, { label: "Create Customer" }],
      render: () => `${WF.pageHeader("Create Customer", "Add a new franchise customer")}<div class="wf-card"><div class="wf-card__body">${WF.customerForm(null, "create")}</div></div>`
    },
    {
      id: "edit", label: "Edit Customer",
      breadcrumb: [{ label: "Customer List", screen: "list" }, { label: b().name, screen: "details" }, { label: "Edit" }],
      render: () => `${WF.pageHeader("Edit Customer", b().id)}<div class="wf-card"><div class="wf-card__body">${WF.customerForm(b(), "edit")}</div></div>`
    },
    {
      id: "timeline", label: "Customer Timeline",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Timeline" }],
      render: () => `
        ${WF.pageHeader("Customer Timeline", b().name + " — Event history")}
        ${detailTabs()}
        <div class="wf-detail-layout"><div class="wf-detail-sidebar">${WF.customerProfileCard(b())}</div>
        <div>${WF.toolbar({ showImport: false })}<div class="wf-card"><div class="wf-card__body">${WF.timeline(WF_DATA.timeline)}</div></div></div></div>
      `
    },
    {
      id: "documents", label: "Customer Documents",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Documents" }],
      render: () => `
        ${WF.pageHeader("Customer Documents", b().name)}${detailTabs()}
        <div class="wf-detail-layout"><div class="wf-detail-sidebar">${WF.customerProfileCard(b())}</div>
        <div>${WF.toolbar({ showImport: true })}
        <div class="wf-table-wrap wf-card"><table class="wf-table"><thead><tr><th>File Name</th><th>Type</th><th>Size</th><th>Date</th><th>Actions</th></tr></thead>
        <tbody>${WF_DATA.documents.map(d => `<tr><td><a href="#" class="wf-table__link">${WF.esc(d.name)}</a></td><td><span class="wf-badge">${WF.esc(d.type)}</span></td><td>${WF.esc(d.size)}</td><td>${WF.esc(d.date)}</td><td><button class="wf-btn wf-btn--sm">Download</button></td></tr>`).join("")}</tbody></table>${WF.pagination()}</div></div></div>
      `
    },
    {
      id: "agreements", label: "Customer Agreements",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Agreements" }],
      render: () => `
        ${WF.pageHeader("Customer Agreements", b().name)}${detailTabs()}
        <div class="wf-detail-layout"><div class="wf-detail-sidebar">${WF.customerProfileCard(b())}</div>
        <div>${WF.toolbar({ showImport: false })}
        <div class="wf-table-wrap wf-card"><table class="wf-table"><thead><tr><th>ID</th><th>Brand</th><th>Type</th><th>Status</th><th>Signed</th><th>Value</th><th>Actions</th></tr></thead>
        <tbody>${WF_DATA.agreements.map(a => `<tr><td>${WF.esc(a.id)}</td><td>${WF.esc(a.brand)}</td><td>${WF.esc(a.type)}</td><td><span class="wf-badge">${WF.esc(a.status)}</span></td><td>${WF.esc(a.signedDate)}</td><td>${WF.esc(a.value)}</td><td><button class="wf-btn wf-btn--sm">View</button></td></tr>`).join("")}</tbody></table>${WF.pagination()}</div></div></div>
      `
    },
    {
      id: "payments", label: "Payment History",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Payments" }],
      render: () => `
        ${WF.pageHeader("Payment History", b().name, `<button class="wf-btn wf-btn--sm wf-btn--primary">Record Payment</button>`)}
        ${detailTabs()}
        <div class="wf-card-grid" style="grid-template-columns:repeat(4,1fr)">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Total Paid</div><div class="wf-stat-card__value" style="font-size:20px">₹15,70,000</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Pending</div><div class="wf-stat-card__value" style="font-size:20px">₹48,500</div></div>
        </div>
        <div class="wf-table-wrap wf-card wf-mt-16"><table class="wf-table"><thead><tr><th>ID</th><th>Date</th><th>Type</th><th>Amount</th><th>Status</th><th>Ref</th></tr></thead>
        <tbody>${WF_DATA.payments.map(p => `<tr><td>${WF.esc(p.id)}</td><td>${WF.esc(p.date)}</td><td>${WF.esc(p.type)}</td><td>${WF.esc(p.amount)}</td><td><span class="wf-badge">${WF.esc(p.status)}</span></td><td>${WF.esc(p.ref)}</td></tr>`).join("")}</tbody></table>${WF.pagination()}</div>
      `
    },
    {
      id: "franchise", label: "Assigned Franchise",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Assigned Franchise" }],
      render: () => `
        ${WF.pageHeader("Assigned Franchise", b().name)}
        <div class="wf-detail-layout"><div class="wf-detail-sidebar">${WF.customerProfileCard(b())}</div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Odette — Indiranagar</span><span class="wf-badge wf-badge--dark">Operational</span></div>
        <div class="wf-card__body">
          <div class="wf-form__grid"><div class="wf-detail-info__row"><span class="wf-detail-info__label">Franchise ID</span><span class="wf-detail-info__value">FRN-2024-042</span></div>
          <div class="wf-detail-info__row"><span class="wf-detail-info__label">Launch Date</span><span class="wf-detail-info__value">01 Aug 2024</span></div>
          <div class="wf-detail-info__row"><span class="wf-detail-info__label">Monthly Revenue</span><span class="wf-detail-info__value">₹8,50,000</span></div></div>
          <div class="wf-chart-placeholder wf-mt-16" style="height:180px">Map Placeholder</div>
        </div></div></div>
      `
    },
    {
      id: "communication", label: "Communication History",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Communication" }],
      render: () => `
        ${WF.pageHeader("Communication History", b().name, `<button class="wf-btn wf-btn--sm wf-btn--primary" data-modal="send-email">+ Log Communication</button>`)}
        ${detailTabs()}${WF.toolbar({ showImport: false })}
        <div class="wf-table-wrap wf-card"><table class="wf-table"><thead><tr><th>Type</th><th>Subject</th><th>Date</th><th>From</th><th>Status</th></tr></thead>
        <tbody>${WF_DATA.communications.map(c => `<tr><td><span class="wf-badge">${WF.esc(c.type)}</span></td><td>${WF.esc(c.subject)}</td><td>${WF.esc(c.date)}</td><td>${WF.esc(c.from)}</td><td>${WF.esc(c.status)}</td></tr>`).join("")}</tbody></table>${WF.pagination()}</div>
      `
    },
    {
      id: "notes", label: "Internal Notes",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Notes" }],
      render: () => `
        ${WF.pageHeader("Internal Notes", b().name, `<button class="wf-btn wf-btn--sm wf-btn--primary" data-modal="add-note">+ Add Note</button>`)}
        ${detailTabs()}
        <div class="wf-card"><div class="wf-card__body">${WF_DATA.notes.map(n => `<div class="wf-note"><div class="wf-note__header"><span class="wf-note__author">${WF.esc(n.author)}</span><span class="wf-note__time">${WF.esc(n.time)}</span></div><div class="wf-note__body">${WF.esc(n.body)}</div></div>`).join("")}</div></div>
      `
    },
    {
      id: "tasks", label: "Tasks",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Tasks" }],
      render: () => `
        ${WF.pageHeader("Tasks", b().name, `<button class="wf-btn wf-btn--sm wf-btn--primary" data-modal="add-task">+ Create Task</button>`)}
        ${detailTabs()}${WF.toolbar({ showImport: false, filters: ["Status", "Priority", "Assignee"] })}
        <div class="wf-table-wrap wf-card"><table class="wf-table"><thead><tr><th>Task</th><th>Assignee</th><th>Due</th><th>Priority</th><th>Status</th></tr></thead>
        <tbody>${WF_DATA.tasks.map(t => `<tr><td>${WF.esc(t.title)}</td><td>${WF.esc(t.assignee)}</td><td>${WF.esc(t.due)}</td><td><span class="wf-badge">${WF.esc(t.priority)}</span></td><td>${WF.esc(t.status)}</td></tr>`).join("")}</tbody></table>${WF.pagination()}</div>
      `
    },
    {
      id: "activity-log", label: "Activity Log",
      breadcrumb: [{ label: b().name, screen: "details" }, { label: "Activity Log" }],
      render: () => `
        ${WF.pageHeader("Activity Log", b().name, `<button class="wf-btn wf-btn--sm" data-action="export">Export Log</button>`)}
        ${detailTabs()}${WF.toolbar({ showImport: false, filters: ["Action", "User", "Date"] })}
        <div class="wf-table-wrap wf-card"><table class="wf-table"><thead><tr><th>Timestamp</th><th>Action</th><th>Detail</th><th>User</th><th>IP</th></tr></thead>
        <tbody>${WF_DATA.activityLog.map(a => `<tr><td>${WF.esc(a.time)}</td><td><span class="wf-badge">${WF.esc(a.action)}</span></td><td>${WF.esc(a.detail)}</td><td>${WF.esc(a.user)}</td><td style="font-family:var(--wf-mono);font-size:12px">${WF.esc(a.ip)}</td></tr>`).join("")}</tbody></table>${WF.pagination()}</div>
      `
    }
  ];

  function init() {
    WF_SPA.init({
      moduleKey: "customers",
      moduleLabel: "Customers",
      moduleTitle: "Customer Management",
      moduleHref: "index.html",
      defaultScreen: "dashboard",
      searchPlaceholder: "Search customers, agreements, documents…",
      screens
    });
  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => CUSTOMER_MODULE.init());
