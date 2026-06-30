# iFranchise CRM — Document Management

## Document Dashboard

**Why do we need it?** With hundreds of customers, leads, brands, and employees, the system manages thousands of documents. The dashboard gives the team a health check — how much storage is used, which documents are expiring, what requires attention.

**What is inside?**
- Total documents stored (count and storage size)
- Documents by category (pie chart): Agreements, ID Proofs, Financial, Marketing, Legal, Training, Other
- Documents uploaded this week
- Documents expiring in next 30 days (urgent alert list)
- Documents pending review or approval
- Recently accessed documents (last 10)
- Documents shared with external parties
- Storage usage bar (used vs total allocated)
- Quick actions: Upload Document, View Library, View Expiring

## Document Library

**Why do we need it?** With thousands of files, the team needs a powerful way to find any document quickly. The Library provides full-text search, category filtering, and sorting to locate any document in seconds.

**What is inside?**
- Search bar: search by document name, customer name, type, or tag
- Filter panel: by category, by type, by owner (lead/customer/brand), by date range, by status, by uploaded by
- Document grid or list view toggle
- Each document shows: thumbnail/icon, name, type, owner (linked record), size, uploaded date, status
- Click to open Document Details
- Upload new document button
- Bulk download option (select multiple and download as ZIP)
- Sort by: date, name, type, size, last accessed

## Upload Document

**Why do we need it?** Documents need to be added to the system in a structured way — linked to the right record, properly categorised, and with relevant metadata. This screen ensures uploads are organised, not just dumped as files.

**What is inside?**
- File upload area: drag and drop or browse (multiple files allowed)
- Document name field (auto-populated from filename, editable)
- Document type dropdown: Agreement, ID Proof, Financial, Marketing, Legal, Training, Brochure, Receipt, Other
- Link to record: search and select Customer, Lead, Brand, or Employee
- Expiry date field (for time-sensitive documents)
- Description or notes field
- Tags (keyword tags for easier searching)
- Access level: All Team, Department Only, Management Only, Specific Users
- Upload button
- Progress bar during upload

## Document Details

**Why do we need it?** When someone accesses a document, they need more than just the file — they need to know its version, who uploaded it, which records it is linked to, and whether it is the latest version. This screen provides all of that.

**What is inside?**
- Document name, type, category
- File size, format, upload date
- Uploaded by (user name and role)
- Linked records (customer, lead, brand — clickable links)
- Expiry date and status (Active, Expired, Expiring Soon)
- Version number and version history
- Tags
- Access log: who has viewed or downloaded this document and when
- Download and Preview buttons
- Replace Document button (upload a new version)
- Share button (generate a secure link for external sharing)
- Delete button (with confirmation and permission check)

## Document Preview

**Why do we need it?** Downloading every document to view it is slow and creates local file clutter. In-browser preview allows quick review without download, keeping the workflow fast and the device clean.

**What is inside?**
- Inline document viewer (PDF viewer for PDFs, image viewer for images)
- Document name and metadata in the sidebar
- Page navigation controls for multi-page documents
- Zoom in/out
- Rotate page
- Download button
- Print button
- Full-screen mode
- Page count indicator
- Back to Document Details link

## Edit Document

**Why do we need it?** Sometimes the wrong category was assigned, or the expiry date was missed, or the document needs to be linked to an additional record. This screen handles those corrections without disrupting the document itself.

**What is inside?**
- All metadata fields pre-filled and editable
- Version note: "If you want to replace the file, use the Replace Document function instead"
- Change log at the bottom
- Save Changes button

## Document Versions

**Why do we need it?** Documents like agreements and proposals go through multiple revisions. The version history ensures that older versions are never lost — they are preserved for legal and audit purposes. If a dispute arises about what was agreed, the exact document version from that date is retrievable.

**What is inside?**
- Version list: version number, upload date, uploaded by, notes, file size
- Download any specific version
- Compare two versions (if text-based documents)
- Mark a version as current (if an old version needs to be reinstated)
- Restore previous version option
- Delete old versions (admin only, with confirmation)

## Shared Documents

**Why do we need it?** When documents are shared outside the organisation, the team needs to track what was shared, with whom, when, and whether it has been accessed. This provides accountability and security for external document sharing.

**What is inside?**
- List of all shared documents with: document name, shared with (name/email), shared by, share date, access type (view only, download), expiry of share link, access count (how many times opened)
- Status: Active, Expired, Revoked
- Revoke access button (immediately deactivates the shared link)
- Extend link expiry button
- Resend link button
- Filter by: active/expired/revoked, shared by, date range

## Folders

**Why do we need it?** As documents grow into the thousands, flat lists become unnavigable. Folders provide a familiar organisational structure that teams can browse easily.

**What is inside?**
- Folder tree view on the left (expandable hierarchy)
- Document list on the right (contents of selected folder)
- Create new folder button
- Move documents to folder
- Rename folder
- Delete folder (with warning if not empty)
- Folder sharing settings (restrict which teams can access which folders)
- Breadcrumb navigation
- Search within current folder

## Customer Documents (Central)

**Why do we need it?** While each customer profile has their own documents tab, sometimes the team needs to see all customer documents together — for example, to check which customers have not submitted their renewal KYC, or to audit all agreements due for renewal.

**What is inside?**
- Customer filter (view all or filter by specific customer)
- Document type filter
- Status filter (Active, Expired, Expiring, Pending)
- Table: customer name, document type, document name, upload date, expiry, status
- Bulk download option
- Send reminder to customers with missing or expiring documents
- Export customer document status report

## Brand Documents (Central)

**Why do we need it?** Brand management requires tracking many brand-level documents across multiple brands. This screen provides a helicopter view.

**What is inside?**
- Brand filter
- Document type and status filters
- Table: brand name, document type, name, version, upload date, expiry, status
- Update required indicator (for documents that need a newer version)
- Quick access to download brand brochures and templates for sharing

## Agreement Documents

**Why do we need it?** Agreements are the most legally critical documents in the system. Having all of them in one searchable, filterable view makes contract management, renewal tracking, and legal review much faster.

**What is inside?**
- Agreement type filter (Customer Franchise Agreement, Brand Partnership Agreement, Amendment, Renewal)
- Status filter (Active, Expiring, Expired, Terminated)
- Date range filter
- Table: agreement number, party name, type, start date, end date, status, signed by, linked record
- Expiry countdown for each agreement
- Renewal reminders status
- Download and preview buttons
- Bulk export for legal team review

## Payment Documents

**Why do we need it?** For accounts reconciliation, tax compliance, and dispute resolution, the accounts team needs a dedicated view of all financial documents separate from other document types.

**What is inside?**
- Document type filter: Invoice, Receipt, Payment Proof, Bank Statement, GST Document, Credit Note
- Customer filter
- Date range filter
- Table: document name, type, customer, amount, date, linked payment, status
- Download and preview
- Bulk export for accounting purposes

## Approval Documents

**Why do we need it?** Approvals often involve supporting documents. Having a dedicated view of all approval-supporting documents helps the compliance team review decision-making and ensures documentation standards are being met.

**What is inside?**
- Filter by approval type, date, requester, outcome
- Table: document name, linked approval ID, approval type, requester, date, decision outcome
- Download and preview
- Quick link to the full approval record

## Expiry Tracker

**Why do we need it?** Expired documents create compliance and legal risks. If a franchisee's food license expired and was not renewed, the brand could face regulatory action. Proactive expiry tracking prevents these situations.

**What is inside?**
- Documents expiring today
- Documents expiring in next 7, 15, 30, 60, and 90 days
- Already expired documents (highlighted in red)
- Filter by document type, customer, brand
- Send renewal reminder button per document (alerts the relevant customer or team member)
- Mark as renewed button (with new expiry date input)
- Automated reminder settings: "Send reminder 30 days before expiry automatically"
- Export expiry report

## Bulk Document Management

**Why do we need it?** Managing documents one by one is inefficient at scale. When migrating from another system, doing year-end archiving, or cleaning up duplicate files, bulk actions save hours of work.

**What is inside?**
- Document list with checkboxes
- Select All and Deselect All
- Bulk actions: Download Selected (as ZIP), Move to Folder, Change Category, Archive, Delete (admin only)
- Preview before bulk action confirmation
- Progress bar during bulk operations
- Results summary after action: "48 documents moved, 2 failed (click to see details)"

## Document Audit

**Why do we need it?** For legal compliance and data security, all document activity must be traceable. If a sensitive document was accessed without authorisation, or if someone deleted a critical file, the audit log shows exactly what happened.

**What is inside?**
- Chronological log of all document-related actions across the system
- Each entry: timestamp, user, action (uploaded, viewed, downloaded, edited, deleted, shared, accessed via share link), document name and ID
- Filter by user, action type, document category, date range
- Cannot be edited or deleted
- Export as CSV or PDF
- IP address and device recorded for sensitive actions
