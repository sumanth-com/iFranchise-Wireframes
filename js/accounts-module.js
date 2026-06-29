/* Accounts & Payments — Single Page Module (17 screens) */

const ACCOUNTS_MODULE = (() => {
  const p = () => ACCOUNTS_DATA.payments[0];
  const inv = () => ACCOUNTS_DATA.invoices[0];
  let activeRole = "CEO";

  const roleBar = () => WF.roleSwitcher(WF.getViewRole(activeRole), ACCOUNTS_DATA.roles);

  const paymentTabs = (active) => WF.spaTabs([
    { id: "payment-details", label: "Overview" },
    { id: "invoice-details", label: "Invoice" },
    { id: "ledger", label: "Ledger" },
    { id: "payment-approval", label: "Approval" },
    { id: "audit", label: "Audit Log" }
  ], active);

  const pendingPayments = () => ACCOUNTS_DATA.payments.filter(x => x.verification === "Pending" || x.status === "Pending Verification");
  const overdue = () => ACCOUNTS_DATA.pendingDues.filter(x => x.status === "Overdue");

  const screens = [
    {
      id: "finance-dashboard", label: "Finance Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Finance Dashboard", "Executive financial overview — revenue, collections, and compliance", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="reports" class="wf-btn wf-btn--sm">Reports</button>
          <button data-screen="revenue-analytics" class="wf-btn wf-btn--sm wf-btn--primary">Analytics</button>
        `)}
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Today's Collections</div><div class="wf-stat-card__value">${WF.formatINR(ACCOUNTS_DATA.kpis.todayCollections)}</div><div class="wf-stat-card__change">6 transactions</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Monthly Revenue</div><div class="wf-stat-card__value">${WF.formatINR(ACCOUNTS_DATA.kpis.monthlyRevenue)}</div><div class="wf-stat-card__change">↑ 12% vs May</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Pending Payments</div><div class="wf-stat-card__value">${ACCOUNTS_DATA.kpis.pendingPayments}</div><div class="wf-stat-card__change">Awaiting verification</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Overdue Payments</div><div class="wf-stat-card__value">${ACCOUNTS_DATA.kpis.overduePayments}</div><div class="wf-stat-card__change">Requires follow-up</div></div>
        </div>
        <div class="wf-card-grid" style="grid-template-columns:repeat(4,1fr)">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Invoices Generated</div><div class="wf-stat-card__value">${ACCOUNTS_DATA.kpis.invoicesGenerated}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">GST Payable</div><div class="wf-stat-card__value" style="font-size:18px">${WF.formatINR(ACCOUNTS_DATA.kpis.gstPayable)}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Top Revenue Brand</div><div class="wf-stat-card__value" style="font-size:14px">${ACCOUNTS_DATA.kpis.topBrand}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Top Revenue City</div><div class="wf-stat-card__value" style="font-size:14px">${ACCOUNTS_DATA.kpis.topCity}</div></div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Revenue Trend</span><button data-screen="revenue-analytics" class="wf-btn wf-btn--sm">View</button></div>
            <div class="wf-card__body">${WF.chartPlaceholder("Area Chart", "Monthly Revenue (₹ Cr) Jan–Jun 2024")}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Department Collections</span></div>
            <div class="wf-card__body">${WF.chartPlaceholder("Bar Chart", "Franchise Fee · Royalty · Booking · Training")}</div>
          </div>
        </div>
        <div class="wf-card wf-dashboard-full">
          <div class="wf-card__header"><span class="wf-card__title">Recent Transactions</span><button data-screen="payment-list" class="wf-btn wf-btn--sm">All Payments</button></div>
          <div class="wf-card__body" style="padding:0">${WF.paymentTable(ACCOUNTS_DATA.payments.slice(0, 4), { showActions: false, compact: true, hidePagination: true })}</div>
        </div>
        <div class="wf-card">
          <div class="wf-card__header"><span class="wf-card__title">Pending Dues</span><button data-screen="pending-dues" class="wf-btn wf-btn--sm">View All</button></div>
          <div class="wf-card__body" style="padding:0">
            <div class="wf-table-wrap wf-table-wrap--fit" style="border:none"><table class="wf-table wf-table--fit wf-table--compact"><thead><tr><th>Customer</th><th>Amount</th><th>Due</th><th>Status</th></tr></thead>
            <tbody>${ACCOUNTS_DATA.pendingDues.slice(0, 4).map(d => `<tr>
              <td class="wf-table__cell-clip">${WF.esc(d.customer)}</td><td>${WF.formatINR(d.amount)}</td><td>${WF.esc(d.dueDate)}</td>
              <td><span class="wf-badge${d.status === "Overdue" ? " wf-badge--dark" : ""}">${WF.esc(d.status)}</span></td>
            </tr>`).join("")}</tbody></table></div>
          </div>
        </div>
      `
    },
    {
      id: "payment-dashboard", label: "Payment Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Payment Dashboard", "Payment operations — verification, collection, and status tracking", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="record-payment" class="wf-btn wf-btn--sm wf-btn--primary">+ Record Payment</button>
        `)}
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Pending Verification</div><div class="wf-stat-card__value">${pendingPayments().length}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Verified Today</div><div class="wf-stat-card__value">5</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Failed</div><div class="wf-stat-card__value">1</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Success Rate</div><div class="wf-stat-card__value">${ACCOUNTS_DATA.kpis.successRate}%</div></div>
        </div>
        <div class="wf-flex wf-gap-8 wf-mb-16" style="flex-wrap:wrap">
          <button class="wf-btn wf-btn--sm wf-btn--primary" data-screen="payment-approval">Pending Approval (2)</button>
          <button class="wf-btn wf-btn--sm" data-screen="collection">Collections</button>
          <button class="wf-btn wf-btn--sm" data-screen="refunds">Refunds (2)</button>
        </div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Awaiting Verification</span></div>
            <div class="wf-card__body" style="padding:0">${WF.paymentTable(pendingPayments())}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Payment Activity</span><button data-screen="audit" class="wf-btn wf-btn--sm">Audit Log</button></div>
            <div class="wf-card__body">${WF.timeline(ACCOUNTS_DATA.timeline)}</div>
          </div>
        </div>
      `
    },
    {
      id: "payment-list", label: "Payment List",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Payment List", "All payments — search, filter, and bulk actions", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="record-payment" class="wf-btn wf-btn--sm wf-btn--primary">+ Record Payment</button>
        `)}
        ${WF.toolbar({ filters: ["Status", "Type", "Method", "Brand", "Verification", "Date Range", "City"] })}
        <div id="wf-data-content">${WF.paymentTable(ACCOUNTS_DATA.payments)}</div>
        ${WF.loadingState()}
      `
    },
    {
      id: "payment-details", label: "Payment Details",
      breadcrumb: [{ label: "Payment List", screen: "payment-list" }, { label: p().id }],
      render: () => {
        const pay = p();
        return `
          ${roleBar()}
          ${WF.pageHeader(pay.type + " — " + pay.customer, pay.id + " · " + pay.brand + " · " + pay.city, `
            <button data-modal="verify-payment" class="wf-btn wf-btn--sm wf-btn--primary">Verify Payment</button>
            <button data-screen="generate-invoice" class="wf-btn wf-btn--sm">Generate Invoice</button>
            <button data-modal="refund" class="wf-btn wf-btn--sm wf-btn--danger">Refund</button>
          `)}
          ${WF.workflowStepper(pay.status, ACCOUNTS_DATA.workflow)}
          ${paymentTabs("payment-details")}
          <div class="wf-detail-layout">
            <div class="wf-detail-sidebar">${WF.paymentProfileCard(pay)}</div>
            <div>
              <div class="wf-card-grid" style="grid-template-columns:repeat(4,1fr)">
                <div class="wf-stat-card"><div class="wf-stat-card__label">Amount</div><div class="wf-stat-card__value" style="font-size:16px">${WF.formatINR(pay.amount)}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">GST</div><div class="wf-stat-card__value" style="font-size:16px">${WF.formatINR(pay.gst)}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Discount</div><div class="wf-stat-card__value" style="font-size:16px">${WF.formatINR(pay.discount)}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Total</div><div class="wf-stat-card__value" style="font-size:16px">${WF.formatINR(pay.amount + pay.gst - pay.discount)}</div></div>
              </div>
              <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Payment Information</span></div>
                <div class="wf-card__body">
                  <div class="wf-form__grid wf-form__grid--3">
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Payment Method</span><span class="wf-detail-info__value">${WF.esc(pay.method)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Transaction ID</span><span class="wf-detail-info__value">${WF.esc(pay.transactionId || "—")}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Reference</span><span class="wf-detail-info__value">${WF.esc(pay.reference)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Bank</span><span class="wf-detail-info__value">${WF.esc(pay.bank || "—")}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Invoice</span><span class="wf-detail-info__value"><a data-screen="invoice-details" class="wf-table__link">${WF.esc(pay.invoice)}</a></span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Verified By</span><span class="wf-detail-info__value">${WF.esc(pay.verifiedBy || "Pending")}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Payment Date</span><span class="wf-detail-info__value">${WF.esc(pay.paymentDate)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Due Date</span><span class="wf-detail-info__value">${WF.esc(pay.dueDate)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Verification</span><span class="wf-badge">${WF.esc(pay.verification)}</span></div>
                  </div>
                  <p style="font-size:13px;margin-top:16px;color:var(--wf-text-secondary)">${WF.esc(pay.remarks)}</p>
                </div>
              </div>
              <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Timeline</span><button data-screen="audit" class="wf-btn wf-btn--sm">Full Log</button></div>
                <div class="wf-card__body">${WF.timeline(ACCOUNTS_DATA.timeline.slice(0, 3))}</div>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      id: "record-payment", label: "Record Payment",
      breadcrumb: [{ label: "Payment List", screen: "payment-list" }, { label: "Record Payment" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Record Payment", "Capture a new payment — verification required before completion")}
        <div class="wf-card wf-mb-16"><div class="wf-card__body" style="font-size:13px;padding:12px 16px;background:var(--wf-surface-alt)">
          <strong>Validation:</strong> Mandatory verification · GST validation · Duplicate transaction prevention · Amount validation
        </div></div>
        <div class="wf-card"><div class="wf-card__body">${WF.paymentForm(null, "create")}</div></div>
      `
    },
    {
      id: "generate-invoice", label: "Generate Invoice",
      breadcrumb: [{ label: "Invoice List", screen: "invoice-list" }, { label: "Generate Invoice" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Generate Invoice", "Create GST-compliant invoice with tax breakdown")}
        <div class="wf-card wf-mb-16"><div class="wf-card__body" style="font-size:13px;padding:12px 16px;background:var(--wf-surface-alt)">
          <strong>Validation:</strong> GSTIN format check · Invoice number uniqueness · PAN validation
        </div></div>
        <div class="wf-card"><div class="wf-card__body">${WF.invoiceForm(null, "create")}</div></div>
      `
    },
    {
      id: "invoice-details", label: "Invoice Details",
      breadcrumb: [{ label: "Invoice List", screen: "invoice-list" }, { label: inv().number }],
      render: () => {
        const i = inv();
        return `
          ${roleBar()}
          ${WF.pageHeader("Invoice " + i.number, i.customer + " · " + i.brand + " · " + i.city, `
            <button class="wf-btn wf-btn--sm" data-action="export-pdf">Download PDF</button>
            <button class="wf-btn wf-btn--sm" data-modal="send-email">Send to Customer</button>
            <button data-screen="record-payment" class="wf-btn wf-btn--sm wf-btn--primary">Record Payment</button>
          `)}
          <div class="wf-detail-layout">
            <div class="wf-detail-sidebar">
              <div class="wf-card"><div class="wf-card__body" style="text-align:center">
                <div style="font-size:15px;font-weight:600">${WF.esc(i.number)}</div>
                <div style="font-size:22px;font-weight:700;margin:12px 0">${WF.formatINR(i.grandTotal)}</div>
                <span class="wf-badge wf-badge--dark">${WF.esc(i.status)}</span>
              </div>
              <div class="wf-card__body" style="padding-top:0">
                <div class="wf-detail-info__row"><span class="wf-detail-info__label">Date</span><span class="wf-detail-info__value">${WF.esc(i.date)}</span></div>
                <div class="wf-detail-info__row"><span class="wf-detail-info__label">Due</span><span class="wf-detail-info__value">${WF.esc(i.dueDate)}</span></div>
                <div class="wf-detail-info__row"><span class="wf-detail-info__label">GSTIN</span><span class="wf-detail-info__value">${WF.esc(i.gstin)}</span></div>
              </div></div>
            </div>
            <div>
              <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Bill To</span></div>
                <div class="wf-card__body">
                  <div style="font-size:14px;font-weight:600;margin-bottom:4px">${WF.esc(i.customer)}</div>
                  <p style="font-size:13px;color:var(--wf-text-secondary);margin:0">${WF.esc(i.address)}</p>
                  <div class="wf-form__grid wf-form__grid--3 wf-mt-16">
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">PAN</span><span class="wf-detail-info__value">${WF.esc(i.pan)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Brand</span><span class="wf-detail-info__value">${WF.esc(i.brand)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">City</span><span class="wf-detail-info__value">${WF.esc(i.city)}</span></div>
                  </div>
                </div>
              </div>
              <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Invoice Items</span></div>
                <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Description</th><th>HSN/SAC</th><th>Amount (₹)</th><th>GST (₹)</th><th>Total (₹)</th></tr></thead>
                <tbody>
                  <tr><td>Franchise Fee — ${WF.esc(i.brand)}</td><td>997331</td><td>${WF.formatINR(i.subTotal)}</td><td>${WF.formatINR(i.gst)}</td><td>${WF.formatINR(i.grandTotal)}</td></tr>
                </tbody></table></div>
              </div>
              <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Tax Breakdown</span></div>
                <div class="wf-card__body">
                  <div class="wf-form__grid wf-form__grid--3">
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Sub Total</span><span class="wf-detail-info__value">${WF.formatINR(i.subTotal)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">CGST (9%)</span><span class="wf-detail-info__value">${WF.formatINR(i.gst / 2)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">SGST (9%)</span><span class="wf-detail-info__value">${WF.formatINR(i.gst / 2)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Discount</span><span class="wf-detail-info__value">${WF.formatINR(i.discount)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Grand Total</span><span class="wf-detail-info__value" style="font-weight:700">${WF.formatINR(i.grandTotal)}</span></div>
                  </div>
                  <p style="font-size:12px;color:var(--wf-text-muted);margin-top:12px">${WF.esc(i.notes)}</p>
                </div>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      id: "invoice-list", label: "Invoice List",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Invoice List", "All invoices — GST-compliant billing records", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="generate-invoice" class="wf-btn wf-btn--sm wf-btn--primary">+ Generate Invoice</button>
        `)}
        ${WF.toolbar({ filters: ["Status", "Brand", "Customer", "Date Range", "City", "Amount Range"] })}
        <div id="wf-data-content">${WF.invoiceTable(ACCOUNTS_DATA.invoices)}</div>
      `
    },
    {
      id: "gst-summary", label: "GST & Tax Summary",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("GST & Tax Summary", "GST liability, returns, and tax compliance — " + ACCOUNTS_DATA.gstSummary.period, `
          <button class="wf-btn wf-btn--sm" data-action="export">Export GSTR</button>
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
        `)}
        ${WF.toolbar({ filters: ["Period", "State", "Brand", "Tax Type"] })}
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Taxable Value</div><div class="wf-stat-card__value" style="font-size:18px">${WF.formatINR(ACCOUNTS_DATA.gstSummary.taxableValue)}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">CGST</div><div class="wf-stat-card__value" style="font-size:18px">${WF.formatINR(ACCOUNTS_DATA.gstSummary.cgst)}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">SGST</div><div class="wf-stat-card__value" style="font-size:18px">${WF.formatINR(ACCOUNTS_DATA.gstSummary.sgst)}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">IGST</div><div class="wf-stat-card__value" style="font-size:18px">${WF.formatINR(ACCOUNTS_DATA.gstSummary.igst)}</div></div>
        </div>
        <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Total GST Payable</span><span style="font-size:20px;font-weight:700">${WF.formatINR(ACCOUNTS_DATA.gstSummary.totalGst)}</span></div>
          <div class="wf-card__body">${WF.chartPlaceholder("Stacked Bar", "CGST / SGST / IGST by Month (Jun 2024)")}</div>
        </div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">GST by Invoice</span><span class="wf-badge">${ACCOUNTS_DATA.gstSummary.invoices} invoices</span></div>
          <div class="wf-card__body" style="padding:0">${WF.invoiceTable(ACCOUNTS_DATA.invoices, { showActions: false })}</div>
        </div>
      `
    },
    {
      id: "collection", label: "Payment Collection",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Payment Collection", "Track and manage payment collection activities", `
          <button data-screen="record-payment" class="wf-btn wf-btn--sm wf-btn--primary">+ Record Payment</button>
        `)}
        ${WF.toolbar({ filters: ["Date", "Brand", "Type", "Method", "Collector", "City"] })}
        <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr)">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Collected Today</div><div class="wf-stat-card__value">${WF.formatINR(ACCOUNTS_DATA.kpis.todayCollections)}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">This Week</div><div class="wf-stat-card__value">${WF.formatINR(4820000)}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Collection Rate</div><div class="wf-stat-card__value">87%</div></div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recent Collections</span></div>
          <div class="wf-card__body" style="padding:0">${WF.paymentTable(ACCOUNTS_DATA.payments.filter(x => x.status === "Completed" || x.status === "Verified"))}</div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Collection by Payment Method</span></div>
          <div class="wf-card__body">${WF.chartPlaceholder("Pie Chart", "NEFT · UPI · Cheque · RTGS")}</div>
        </div>
      `
    },
    {
      id: "pending-dues", label: "Pending Dues",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Pending Dues", "Outstanding invoices and overdue payments", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
          <button data-screen="collection" class="wf-btn wf-btn--sm wf-btn--primary">Collect</button>
        `)}
        ${WF.toolbar({ filters: ["Status", "Brand", "City", "Due Date", "Amount"] })}
        <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr)">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Total Outstanding</div><div class="wf-stat-card__value" style="font-size:18px">${WF.formatINR(3316300)}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Overdue</div><div class="wf-stat-card__value">${overdue().length}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Due This Week</div><div class="wf-stat-card__value">2</div></div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Outstanding Dues</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th><span class="wf-table__checkbox"></span></th><th>Customer</th><th>Brand</th><th>Invoice</th><th>Amount</th><th>Due Date</th><th>Days</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>${ACCOUNTS_DATA.pendingDues.map(d => `<tr>
            <td><span class="wf-table__checkbox"></span></td>
            <td>${WF.esc(d.customer)}</td><td>${WF.esc(d.brand)}</td>
            <td><a data-screen="invoice-details" class="wf-table__link">${WF.esc(d.invoice)}</a></td>
            <td style="font-weight:600">${WF.formatINR(d.amount)}</td>
            <td>${WF.esc(d.dueDate)}</td>
            <td>${d.daysOverdue > 0 ? d.daysOverdue + " days" : "—"}</td>
            <td><span class="wf-badge${d.status === "Overdue" ? " wf-badge--dark" : ""}">${WF.esc(d.status)}</span></td>
            <td><button data-screen="record-payment" class="wf-btn wf-btn--sm">Collect</button> <button class="wf-btn wf-btn--sm">Remind</button></td>
          </tr>`).join("")}</tbody></table>${WF.pagination(24)}</div>
        </div>
      `
    },
    {
      id: "refunds", label: "Refund Management",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Refund Management", "Refund requests — approval workflow required", `
          <button data-modal="refund" class="wf-btn wf-btn--sm wf-btn--primary">+ New Refund</button>
        `)}
        ${WF.toolbar({ filters: ["Status", "Reason", "Date Range", "Brand"] })}
        <div class="wf-card wf-mb-16"><div class="wf-card__body" style="font-size:13px;padding:12px 16px;background:var(--wf-surface-alt)">
          <strong>Refund approval workflow:</strong> All refunds require Finance Manager approval before processing.
        </div></div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Refund Requests</span><span class="wf-badge">${ACCOUNTS_DATA.refunds.length} total</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Refund ID</th><th>Payment</th><th>Customer</th><th>Amount</th><th>Reason</th><th>Requested By</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>${ACCOUNTS_DATA.refunds.map(r => `<tr>
            <td>${WF.esc(r.id)}</td><td><a data-screen="payment-details" class="wf-table__link">${WF.esc(r.payment)}</a></td>
            <td>${WF.esc(r.customer)}</td><td style="font-weight:600">${WF.formatINR(r.amount)}</td>
            <td>${WF.esc(r.reason)}</td><td>${WF.esc(r.requestedBy)}</td><td>${WF.esc(r.date)}</td>
            <td><span class="wf-badge${r.status === "Completed" ? " wf-badge--dark" : ""}">${WF.esc(r.status)}</span></td>
            <td>${r.status === "Pending Approval" ? `<button data-modal="payment-approve" class="wf-btn wf-btn--sm wf-btn--primary">Approve</button>` : `<button class="wf-btn wf-btn--sm">View</button>`}</td>
          </tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "payment-approval", label: "Payment Approval",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Payment Approval", "Payments awaiting verification and approval", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
        `)}
        ${WF.toolbar({ filters: ["Type", "Amount", "Method", "Submitted By", "Date"] })}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Pending Verification & Approval</span><span class="wf-badge">${pendingPayments().length} pending</span></div>
          <div class="wf-card__body" style="padding:0">${WF.paymentTable(pendingPayments())}</div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Approval Queue</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Payment ID</th><th>Customer</th><th>Amount</th><th>Method</th><th>Submitted</th><th>Actions</th></tr></thead>
          <tbody>${pendingPayments().map(pay => `<tr>
            <td><a data-screen="payment-details" class="wf-table__link">${WF.esc(pay.id)}</a></td>
            <td>${WF.esc(pay.customer)}</td><td>${WF.formatINR(pay.amount)}</td><td>${WF.esc(pay.method)}</td>
            <td>${WF.esc(pay.paymentDate)}</td>
            <td>
              <button data-modal="verify-payment" class="wf-btn wf-btn--sm wf-btn--primary">Verify</button>
              <button data-modal="payment-approve" class="wf-btn wf-btn--sm">Approve</button>
            </td>
          </tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "ledger", label: "Customer Ledger",
      breadcrumb: [{ label: "Payment List", screen: "payment-list" }, { label: "Rahul Sharma — Ledger" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Customer Ledger", "Rahul Sharma · Odette · Bengaluru", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export Ledger</button>
          <button data-screen="record-payment" class="wf-btn wf-btn--sm wf-btn--primary">Record Payment</button>
        `)}
        ${WF.toolbar({ filters: ["Date Range", "Transaction Type", "Brand"] })}
        <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr)">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Total Debit</div><div class="wf-stat-card__value" style="font-size:18px">${WF.formatINR(1475000)}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Total Credit</div><div class="wf-stat-card__value" style="font-size:18px">${WF.formatINR(919000)}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Balance Due</div><div class="wf-stat-card__value" style="font-size:18px">${WF.formatINR(556000)}</div></div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Account Statement — Rahul Sharma</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Date</th><th>Type</th><th>Description</th><th>Reference</th><th>Debit (₹)</th><th>Credit (₹)</th><th>Balance (₹)</th></tr></thead>
          <tbody>${ACCOUNTS_DATA.ledger.map(l => `<tr>
            <td>${WF.esc(l.date)}</td><td><span class="wf-badge wf-badge--outline">${WF.esc(l.type)}</span></td>
            <td>${WF.esc(l.description)}</td><td><a data-screen="invoice-details" class="wf-table__link">${WF.esc(l.ref)}</a></td>
            <td>${l.debit ? WF.formatINR(l.debit) : "—"}</td>
            <td>${l.credit ? WF.formatINR(l.credit) : "—"}</td>
            <td style="font-weight:600">${WF.formatINR(Math.abs(l.balance))}${l.balance > 0 ? " Dr" : " Cr"}</td>
          </tr>`).join("")}</tbody></table>${WF.pagination(48)}</div>
        </div>
      `
    },
    {
      id: "reports", label: "Financial Reports",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Financial Reports", "Generate and export financial reports", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export All</button>
        `)}
        ${WF.toolbar({ filters: ["Report Type", "Period", "Brand", "City", "Format"] })}
        <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr)">
          ${["Revenue Summary", "Collection Report", "Outstanding Dues", "GST Return Summary", "Brand-wise Revenue", "City-wise Revenue", "Payment Method Analysis", "Refund Report", "Audit Summary"].map(r => `
            <div class="wf-card" style="cursor:pointer"><div class="wf-card__body" style="text-align:center;padding:24px">
              <div style="width:40px;height:40px;background:var(--wf-placeholder);border-radius:8px;margin:0 auto 12px"></div>
              <div style="font-size:13px;font-weight:600">${r}</div>
              <button class="wf-btn wf-btn--sm wf-mt-16" data-action="export">Generate</button>
            </div></div>
          `).join("")}
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recent Reports</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Report</th><th>Period</th><th>Generated</th><th>By</th><th>Actions</th></tr></thead>
          <tbody>
            <tr><td>Revenue Summary — Jun 2024</td><td>01–30 Jun 2024</td><td>25 Jun 2024</td><td>Fazil</td><td><button class="wf-btn wf-btn--sm" data-action="export-pdf">Download</button></td></tr>
            <tr><td>GST Return — May 2024</td><td>01–31 May 2024</td><td>05 Jun 2024</td><td>Fazil</td><td><button class="wf-btn wf-btn--sm" data-action="export-pdf">Download</button></td></tr>
            <tr><td>Outstanding Dues</td><td>As of 25 Jun 2024</td><td>25 Jun 2024</td><td>Finance Manager</td><td><button class="wf-btn wf-btn--sm" data-action="export-pdf">Download</button></td></tr>
          </tbody></table></div>
        </div>
      `
    },
    {
      id: "revenue-analytics", label: "Revenue Analytics",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Revenue Analytics", "Revenue trends, brand performance, and payment insights", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
        `)}
        ${WF.toolbar({ filters: ["Date Range", "Brand", "City", "Payment Type", "Compare"] })}
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">MTD Revenue</div><div class="wf-stat-card__value" style="font-size:18px">${WF.formatINR(ACCOUNTS_DATA.kpis.monthlyRevenue)}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">YoY Growth</div><div class="wf-stat-card__value">+24%</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Avg Transaction</div><div class="wf-stat-card__value" style="font-size:18px">${WF.formatINR(485000)}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Success Rate</div><div class="wf-stat-card__value">${ACCOUNTS_DATA.kpis.successRate}%</div></div>
        </div>
        <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Revenue Trend</span></div>
          <div class="wf-card__body">${WF.chartPlaceholder("Line Chart", "Monthly Revenue ₹ Cr (Jan–Jun 2024) with YoY comparison")}</div>
        </div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Revenue by Brand</span></div>
            <div class="wf-card__body">${WF.chartPlaceholder("Horizontal Bar", "Odette · OBC · Kasturi · Tea Time · BWC")}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Revenue by City</span></div>
            <div class="wf-card__body">${WF.chartPlaceholder("Bar Chart", "Bengaluru · Mumbai · Delhi · Hyderabad · Pune")}</div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Payment Type Breakdown</span></div>
          <div class="wf-card__body">${WF.chartPlaceholder("Stacked Bar", "Franchise Fee · Booking · Royalty · Security Deposit · Training")}</div>
        </div>
      `
    },
    {
      id: "audit", label: "Payment Audit Log",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Payment Audit Log", "Immutable log of all payment and invoice actions", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export Log</button>
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
        `)}
        ${WF.toolbar({ filters: ["Action", "User", "Entity", "Date Range"] })}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Audit Trail</span><span style="font-size:12px;color:var(--wf-text-muted)">248 events · Page 1 of 25</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Timestamp</th><th>User</th><th>Action</th><th>Entity</th><th>Details</th></tr></thead>
          <tbody>${ACCOUNTS_DATA.auditLog.map(l => `<tr>
            <td style="font-size:12px">${WF.esc(l.timestamp)}</td><td>${WF.esc(l.user)}</td>
            <td><span class="wf-badge wf-badge--outline">${WF.esc(l.action)}</span></td>
            <td><a data-screen="payment-details" class="wf-table__link">${WF.esc(l.entity)}</a></td>
            <td style="font-size:12px">${WF.esc(l.details)}</td>
          </tr>`).join("")}</tbody></table>${WF.pagination(248)}</div>
        </div>
      `
    }
  ];

  function init() {
    WF.resetViewRole(activeRole);
    WF_SPA.init({
      moduleKey: "accounts",
      moduleLabel: "Accounts & Payments",
      moduleTitle: "Accounts & Payments",
      moduleHref: "/",
      defaultScreen: "finance-dashboard",
      searchPlaceholder: "Search payments, invoices, customers, transaction IDs…",
      modals: WF.accountsModals,
      screens
    });

  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => ACCOUNTS_MODULE.init());
