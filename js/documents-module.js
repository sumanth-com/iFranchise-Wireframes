/* Document Management — Single Page Module (17 screens) */

const DOCUMENTS_MODULE = (() => {
  const d = () => DOCUMENT_DATA.documents[0];
  let activeRole = "CEO";

  const roleBar = () => WF.roleSwitcher(WF.getViewRole(activeRole), DOCUMENT_DATA.roles);

  const docTabs = (active) => WF.spaTabs([
    { id: "details", label: "Overview" },
    { id: "preview", label: "Preview" },
    { id: "versions", label: "Versions" },
    { id: "shared", label: "Sharing" },
    { id: "audit", label: "Audit Log" }
  ], active);

  const pending = () => DOCUMENT_DATA.documents.filter(x => x.status === "Pending Verification" || x.verification === "Pending");
  const byCategory = (cat) => DOCUMENT_DATA.documents.filter(x => x.category === cat || x.category.includes(cat));

  const screens = [
    {
      id: "dashboard", label: "Document Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Document Dashboard", "Document repository overview — storage, verification, and compliance", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="upload" class="wf-btn wf-btn--sm wf-btn--primary">+ Upload</button>
        `)}
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Total Documents</div><div class="wf-stat-card__value">${DOCUMENT_DATA.kpis.total}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Pending Verification</div><div class="wf-stat-card__value">${DOCUMENT_DATA.kpis.pendingVerification}</div><div class="wf-stat-card__change">Requires action</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Approved</div><div class="wf-stat-card__value">${DOCUMENT_DATA.kpis.approved}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Expired</div><div class="wf-stat-card__value">${DOCUMENT_DATA.kpis.expired}</div></div>
        </div>
        <div class="wf-card-grid" style="grid-template-columns:repeat(4,1fr)">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Expiring Soon</div><div class="wf-stat-card__value">${DOCUMENT_DATA.kpis.expiringSoon}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Storage Used</div><div class="wf-stat-card__value" style="font-size:16px">${DOCUMENT_DATA.kpis.storageUsed}</div><div class="wf-stat-card__change">of ${DOCUMENT_DATA.kpis.storageTotal}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Most Accessed</div><div class="wf-stat-card__value" style="font-size:13px">Brand Deck — Odette</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Shared Documents</div><div class="wf-stat-card__value">12</div></div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Category Distribution</span></div>
            <div class="wf-card__body">${WF.chartPlaceholder("Donut Chart", "KYC · Agreements · Payments · Brand · Training")}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Expiring Soon</span><button data-screen="expiry" class="wf-btn wf-btn--sm">Tracker</button></div>
            <div class="wf-table-wrap wf-table-wrap--fit" style="border:none"><table class="wf-table wf-table--fit wf-table--compact"><thead><tr><th>Document</th><th>Expiry</th><th>Days Left</th></tr></thead>
            <tbody>${DOCUMENT_DATA.expiring.map(e => `<tr>
              <td class="wf-table__cell-clip">${WF.esc(e.name)}</td><td>${WF.esc(e.expiryDate)}</td>
              <td><span class="wf-badge${e.daysLeft <= 7 ? " wf-badge--dark" : ""}">${e.daysLeft} days</span></td>
            </tr>`).join("")}</tbody></table></div>
          </div>
        </div>
        <div class="wf-card wf-dashboard-full">
          <div class="wf-card__header"><span class="wf-card__title">Recent Uploads</span><button data-screen="library" class="wf-btn wf-btn--sm">Library</button></div>
          <div class="wf-card__body" style="padding:0">${WF.documentTable(DOCUMENT_DATA.documents.slice(0, 4), { showActions: false, compact: true, hidePagination: true })}</div>
        </div>
        <div class="wf-card">
          <div class="wf-card__header"><span class="wf-card__title">Recent Activity</span><button data-screen="audit" class="wf-btn wf-btn--sm">Audit Log</button></div>
          <div class="wf-card__body">${WF.timeline(DOCUMENT_DATA.timeline.slice(0, 4))}</div>
        </div>
      `
    },
    {
      id: "library", label: "Document Library",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Document Library", "Browse and manage all documents", `
          <button class="wf-btn wf-btn--sm" data-modal="bulk-download">Bulk Download</button>
          <button data-screen="upload" class="wf-btn wf-btn--sm wf-btn--primary">+ Upload</button>
        `)}
        ${WF.toolbar({ filters: ["Category", "Type", "Status", "Brand", "Customer", "Date Range", "File Type"] })}
        <div class="wf-library-layout">
          <div>${WF.folderTree(DOCUMENT_DATA.folders, "root")}</div>
          <div id="wf-data-content">${WF.documentTable(DOCUMENT_DATA.documents)}</div>
        </div>
        ${WF.loadingState()}
      `
    },
    {
      id: "upload", label: "Upload Document",
      breadcrumb: [{ label: "Document Library", screen: "library" }, { label: "Upload" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Upload Document", "Add a new document to the repository")}
        <div class="wf-card wf-mb-16"><div class="wf-card__body" style="font-size:13px;padding:12px 16px;background:var(--wf-surface-alt)">
          <strong>Validation:</strong> PDF, DOCX, XLSX, JPG, PNG only · Max 25 MB · Duplicate prevention · Version control · Permission-based access
        </div></div>
        <div class="wf-card"><div class="wf-card__body">${WF.documentForm(null, "create")}</div></div>
      `
    },
    {
      id: "details", label: "Document Details",
      breadcrumb: [{ label: "Document Library", screen: "library" }, { label: d().name }],
      render: () => {
        const doc = d();
        return `
          ${roleBar()}
          ${WF.pageHeader(doc.name, doc.id + " · " + doc.category, `
            <button data-screen="preview" class="wf-btn wf-btn--sm wf-btn--primary">Preview</button>
            <button data-modal="verify-doc" class="wf-btn wf-btn--sm">Verify</button>
            <button data-modal="approve-doc" class="wf-btn wf-btn--sm">Approve</button>
            <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
            <button class="wf-btn wf-btn--sm">Download</button>
          `)}
          ${WF.workflowStepper(doc.status, DOCUMENT_DATA.workflow)}
          ${docTabs("details")}
          <div class="wf-detail-layout">
            <div class="wf-detail-sidebar">${WF.documentProfileCard(doc)}</div>
            <div>
              <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Overview</span></div>
                <div class="wf-card__body">
                  <div class="wf-form__grid wf-form__grid--3">
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Linked To</span><span class="wf-detail-info__value">${WF.esc(doc.linkedTo)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Module</span><span class="wf-detail-info__value">${WF.esc(doc.module)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Customer</span><span class="wf-detail-info__value">${WF.esc(doc.customer || "—")}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Brand</span><span class="wf-detail-info__value">${WF.esc(doc.brand || "—")}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Uploaded By</span><span class="wf-detail-info__value">${WF.esc(doc.uploadedBy)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Upload Date</span><span class="wf-detail-info__value">${WF.esc(doc.uploadDate)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Verification</span><span class="wf-badge">${WF.esc(doc.verification)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Approved By</span><span class="wf-detail-info__value">${WF.esc(doc.approvedBy || "—")}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Downloads</span><span class="wf-detail-info__value">${doc.downloads}</span></div>
                  </div>
                  <p style="font-size:13px;margin-top:16px">${WF.esc(doc.remarks)}</p>
                  <div style="margin-top:12px">${(doc.tags || []).map(t => `<span class="wf-badge wf-badge--outline" style="margin-right:6px">${WF.esc(t)}</span>`).join("")}</div>
                </div>
              </div>
              <div class="wf-grid-2">
                <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Related Records</span></div>
                  <div class="wf-card__body">
                    ${doc.customer ? `<div class="wf-detail-info__row"><span class="wf-detail-info__label">Customer</span><span class="wf-detail-info__value">${WF.esc(doc.customer)}</span></div>` : ""}
                    ${doc.agreement ? `<div class="wf-detail-info__row"><span class="wf-detail-info__label">Agreement</span><span class="wf-detail-info__value">${WF.esc(doc.agreement)}</span></div>` : ""}
                    ${doc.payment ? `<div class="wf-detail-info__row"><span class="wf-detail-info__label">Payment</span><span class="wf-detail-info__value">${WF.esc(doc.payment)}</span></div>` : ""}
                  </div>
                </div>
                <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Internal Notes</span><button class="wf-btn wf-btn--sm">+ Add</button></div>
                  <div class="wf-card__body"><textarea class="wf-form__textarea" rows="3" placeholder="Internal notes…">${WF.esc(doc.remarks)}</textarea></div>
                </div>
              </div>
              <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Activity Timeline</span><button data-screen="audit" class="wf-btn wf-btn--sm">Full Log</button></div>
                <div class="wf-card__body">${WF.timeline(DOCUMENT_DATA.timeline.slice(0, 3))}</div>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      id: "edit", label: "Edit Document",
      breadcrumb: [{ label: "Document Library", screen: "library" }, { label: d().name, screen: "details" }, { label: "Edit" }],
      render: () => `${roleBar()}${WF.pageHeader("Edit Document", d().id)}<div class="wf-card"><div class="wf-card__body">${WF.documentForm(d(), "edit")}</div></div>`
    },
    {
      id: "preview", label: "Document Preview",
      breadcrumb: [{ label: "Document Library", screen: "library" }, { label: d().name, screen: "details" }, { label: "Preview" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Document Preview", d().name, `
          <button class="wf-btn wf-btn--sm">Download</button>
          <button data-screen="versions" class="wf-btn wf-btn--sm">Version History</button>
        `)}
        ${docTabs("preview")}
        <div class="wf-grid-2" style="grid-template-columns:1fr 280px">
          <div>${WF.documentPreview(d().name, d().fileType)}</div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Document Info</span></div>
            <div class="wf-card__body">${WF.documentProfileCard(d())}</div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Download History</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>User</th><th>Date</th><th>Action</th></tr></thead>
          <tbody>${DOCUMENT_DATA.downloadHistory.map(h => `<tr><td>${WF.esc(h.user)}</td><td>${WF.esc(h.date)}</td><td>${WF.esc(h.action)}</td></tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "versions", label: "Version History",
      breadcrumb: [{ label: "Document Library", screen: "library" }, { label: d().name, screen: "details" }, { label: "Versions" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Version History", d().name + " · Current v" + d().version, `
          <button class="wf-btn wf-btn--sm wf-btn--primary">Upload New Version</button>
        `)}
        ${docTabs("versions")}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Version Control</span><span class="wf-approval-badge">Version control active</span></div>
          <div class="wf-card__body">${WF.versionHistory(DOCUMENT_DATA.versions)}</div>
        </div>
      `
    },
    {
      id: "folders", label: "Folder Management",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Folder Management", "Organize documents into folders and categories", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ New Folder</button>
        `)}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Folder Tree</span></div>
            <div class="wf-card__body">${WF.folderTree(DOCUMENT_DATA.folders)}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Folder Details</span></div>
            <div class="wf-card__body">
              <div class="wf-form__group"><label class="wf-form__label">Folder Name</label><input class="wf-form__input" value="Customer Documents"></div>
              <div class="wf-form__group"><label class="wf-form__label">Parent Folder</label><select class="wf-form__select"><option>All Documents</option><option>Brand Documents</option></select></div>
              <div class="wf-form__group"><label class="wf-form__label">Default Category</label><select class="wf-form__select"><option>Customer Documents</option></select></div>
              <div class="wf-form__group"><label class="wf-form__label">Access Permission</label><select class="wf-form__select"><option>Sales Team + Accounts</option><option>All Users</option><option>Admin Only</option></select></div>
              <button class="wf-btn wf-btn--sm wf-btn--primary wf-mt-16">Save Folder</button>
            </div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">All Folders</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Folder</th><th>Documents</th><th>Permission</th><th>Actions</th></tr></thead>
          <tbody>${DOCUMENT_DATA.folders.filter(f => f.id !== "root").map(f => `<tr>
            <td><a data-screen="${f.screen || "library"}" class="wf-table__link">${WF.esc(f.name)}</a></td>
            <td>${f.count || "—"}</td><td>Sales + Accounts</td>
            <td><button class="wf-btn wf-btn--sm">Edit</button> <button class="wf-btn wf-btn--sm">Delete</button></td>
          </tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "shared", label: "Shared Documents",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Shared Documents", "Documents shared with users and teams", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">Share Document</button>
        `)}
        ${WF.toolbar({ filters: ["Shared With", "Permission", "Shared By", "Date"] })}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Shared With Others</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Document</th><th>Shared With</th><th>Permission</th><th>Shared By</th><th>Date</th><th>Actions</th></tr></thead>
          <tbody>${DOCUMENT_DATA.shared.map(s => `<tr>
            <td><a data-screen="details" class="wf-table__link">${WF.esc(s.name)}</a></td>
            <td>${WF.esc(s.sharedWith)}</td><td><span class="wf-badge">${WF.esc(s.permission)}</span></td>
            <td>${WF.esc(s.sharedBy)}</td><td>${WF.esc(s.date)}</td>
            <td><button class="wf-btn wf-btn--sm">Revoke</button></td>
          </tr>`).join("")}</tbody></table></div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Sharing Permissions</span></div>
          <div class="wf-card__body" style="font-size:13px;line-height:1.8">
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">View</span><span class="wf-detail-info__value">Preview and download</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Edit</span><span class="wf-detail-info__value">Upload new versions</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Admin</span><span class="wf-detail-info__value">Full control including share</span></div>
          </div>
        </div>
      `
    },
    {
      id: "customer-docs", label: "Customer Documents",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Customer Documents", "KYC, agreements, and customer-linked files", `
          <button data-screen="upload" class="wf-btn wf-btn--sm wf-btn--primary">+ Upload</button>
        `)}
        ${WF.toolbar({ filters: ["Customer", "Type", "Status", "Brand", "City"] })}
        <div id="wf-data-content">${WF.documentTable(DOCUMENT_DATA.documents.filter(x => x.customer))}</div>
      `
    },
    {
      id: "brand-docs", label: "Brand Documents",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Brand Documents", "Brand decks, marketing assets, and compliance files", `
          <button data-screen="upload" class="wf-btn wf-btn--sm wf-btn--primary">+ Upload</button>
        `)}
        ${WF.toolbar({ filters: ["Brand", "Type", "Status", "Date"] })}
        <div id="wf-data-content">${WF.documentTable(DOCUMENT_DATA.documents.filter(x => x.category === "Brand Documents" || x.brand))}</div>
      `
    },
    {
      id: "agreement-docs", label: "Agreement Documents",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Agreement Documents", "Franchise agreements, legal documents, and contracts", `
          <button data-screen="upload" class="wf-btn wf-btn--sm wf-btn--primary">+ Upload</button>
        `)}
        ${WF.toolbar({ filters: ["Customer", "Brand", "Status", "Expiry"] })}
        <div id="wf-data-content">${WF.documentTable(byCategory("Agreement"))}</div>
      `
    },
    {
      id: "payment-docs", label: "Payment Documents",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Payment Documents", "Receipts, invoices, and payment proofs", `
          <button data-screen="upload" class="wf-btn wf-btn--sm wf-btn--primary">+ Upload</button>
        `)}
        ${WF.toolbar({ filters: ["Customer", "Payment Ref", "Type", "Status"] })}
        <div id="wf-data-content">${WF.documentTable(DOCUMENT_DATA.documents.filter(x => x.category === "Payment Receipts" || x.payment))}</div>
      `
    },
    {
      id: "approval-docs", label: "Approval Documents",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Approval Documents", "Documents linked to approval workflows", `
          <button data-screen="upload" class="wf-btn wf-btn--sm wf-btn--primary">+ Upload</button>
        `)}
        ${WF.toolbar({ filters: ["Approval Type", "Status", "Submitted By"] })}
        <div class="wf-card wf-mb-16"><div class="wf-card__body" style="font-size:13px;padding:12px 16px;background:var(--wf-surface-alt)">
          Documents uploaded as supporting evidence for Approval Management workflows.
        </div></div>
        <div id="wf-data-content">${WF.documentTable(pending())}</div>
      `
    },
    {
      id: "expiry", label: "Document Expiry Tracker",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Document Expiry Tracker", "Monitor expiring and expired documents", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
        `)}
        ${WF.toolbar({ filters: ["Expiry Range", "Category", "Brand", "Customer"] })}
        <div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr)">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Expiring in 30 days</div><div class="wf-stat-card__value">${DOCUMENT_DATA.kpis.expiringSoon}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Expired</div><div class="wf-stat-card__value">${DOCUMENT_DATA.kpis.expired}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Expiry Reminders Sent</div><div class="wf-stat-card__value">8</div></div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Expiring Soon</span><span class="wf-badge">${DOCUMENT_DATA.expiring.length} documents</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Document</th><th>Customer</th><th>Brand</th><th>Expiry Date</th><th>Days Left</th><th>Actions</th></tr></thead>
          <tbody>${DOCUMENT_DATA.expiring.map(e => `<tr>
            <td><a data-screen="details" class="wf-table__link">${WF.esc(e.name)}</a></td>
            <td>${WF.esc(e.customer)}</td><td>${WF.esc(e.brand)}</td>
            <td>${WF.esc(e.expiryDate)}</td>
            <td><span class="wf-badge${e.daysLeft <= 7 ? " wf-badge--dark" : ""}">${e.daysLeft} days</span></td>
            <td><button class="wf-btn wf-btn--sm">Remind</button> <button data-screen="upload" class="wf-btn wf-btn--sm">Renew</button></td>
          </tr>`).join("")}</tbody></table></div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Expired Documents</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Document</th><th>Brand</th><th>Expired On</th><th>Actions</th></tr></thead>
          <tbody>${DOCUMENT_DATA.expired.map(e => `<tr>
            <td>${WF.esc(e.name)}</td><td>${WF.esc(e.brand)}</td><td>${WF.esc(e.expiryDate)}</td>
            <td><button data-screen="upload" class="wf-btn wf-btn--sm wf-btn--primary">Upload Renewal</button></td>
          </tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "bulk", label: "Bulk Upload & Download",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Bulk Upload & Download", "Upload or download multiple documents at once", `
          <button data-modal="bulk-upload" class="wf-btn wf-btn--sm wf-btn--primary">Bulk Upload</button>
          <button data-modal="bulk-download" class="wf-btn wf-btn--sm">Bulk Download</button>
        `)}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Bulk Upload</span></div>
            <div class="wf-card__body">
              <div class="wf-upload" style="min-height:180px"><div class="wf-upload__icon"></div><div class="wf-upload__text">Drop files here or click to browse</div></div>
              <p style="font-size:12px;color:var(--wf-text-muted);margin-top:12px">Max 25 MB per file · Duplicate prevention · Auto-categorization available</p>
              <button data-modal="bulk-upload" class="wf-btn wf-btn--primary wf-mt-16">Start Upload</button>
            </div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Bulk Download</span></div>
            <div class="wf-card__body">
              <p style="font-size:13px;margin-bottom:16px">Select documents from the library, then download as ZIP.</p>
              <div class="wf-detail-info__row"><span class="wf-detail-info__label">Selected</span><span class="wf-detail-info__value">8 documents</span></div>
              <div class="wf-detail-info__row"><span class="wf-detail-info__label">Total Size</span><span class="wf-detail-info__value">24.6 MB</span></div>
              <button data-modal="bulk-download" class="wf-btn wf-btn--primary wf-mt-16">Download ZIP</button>
            </div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Select Documents</span></div>
          <div class="wf-card__body" style="padding:0">${WF.documentTable(DOCUMENT_DATA.documents.slice(0, 6))}</div>
        </div>
      `
    },
    {
      id: "audit", label: "Document Audit Log",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Document Audit Log", "Immutable log of all document actions", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export Log</button>
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
        `)}
        ${WF.toolbar({ filters: ["Action", "User", "Entity", "Date Range"] })}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Audit Trail</span><span style="font-size:12px;color:var(--wf-text-muted)">412 events · Page 1 of 42</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Timestamp</th><th>User</th><th>Action</th><th>Entity</th><th>Details</th></tr></thead>
          <tbody>${DOCUMENT_DATA.auditLog.map(l => `<tr>
            <td style="font-size:12px">${WF.esc(l.timestamp)}</td><td>${WF.esc(l.user)}</td>
            <td><span class="wf-badge wf-badge--outline">${WF.esc(l.action)}</span></td>
            <td><a data-screen="details" class="wf-table__link">${WF.esc(l.entity)}</a></td>
            <td style="font-size:12px">${WF.esc(l.details)}</td>
          </tr>`).join("")}</tbody></table>${WF.pagination(412)}</div>
        </div>
      `
    }
  ];

  function init() {
    WF.resetViewRole(activeRole);
    WF_SPA.init({
      moduleKey: "documents",
      moduleLabel: "Document Management",
      moduleTitle: "Document Management",
      moduleHref: "index.html",
      defaultScreen: "dashboard",
      searchPlaceholder: "Search documents, customers, brands, tags…",
      modals: WF.documentModals,
      screens
    });

    document.body.addEventListener("click", (e) => {
      const folderItem = e.target.closest(".wf-folder__item");
      if (folderItem && folderItem.dataset.screen) {
        const sid = folderItem.getAttribute("data-screen");
        if (WF_SPA && sid) WF_SPA.navigate(sid);
      }
    });
  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => DOCUMENTS_MODULE.init());
