# iFranchise CRM — Customer Management

## Customer Dashboard

**Why do we need it?** Managing existing customers is as important as acquiring new leads. This dashboard tells the team at a glance how many customers are active, which ones are overdue on payments, who has upcoming renewals, and how the overall customer portfolio is performing.

**What is inside?**
- Total active customers count
- New customers added this month
- Customers with overdue payments (count and total amount)
- Customers with expiring agreements in the next 30 and 60 days
- Customer satisfaction score (if surveys are enabled)
- Customers by brand — how many franchisees per brand
- Customers by state — geographic distribution
- Recent customer activity feed
- Upcoming customer meetings this week
- Pending tasks across all customer accounts
- Top customers by franchise fees paid
- Customers at risk (no activity in 30 days)
- Quick actions: Add Customer, View All Customers, View Agreements

## Customer List

**Why do we need it?** With dozens or hundreds of franchisees across multiple brands, the team needs a fast way to find, sort, and access any customer record. This list is the central directory for all customer information.

**What is inside?**
- Search bar: search by name, phone, email, city, franchise ID
- Filter panel:
  - Status (Active, Inactive, On Hold, Terminated)
  - Brand filter
  - Franchise model filter
  - State and city filter
  - Payment status (Up to Date, Overdue, Advance Paid)
  - Agreement status (Active, Expiring, Expired)
- Sortable table columns:
  - Customer ID
  - Name
  - Phone and Email
  - Brand
  - Franchise model
  - Territory (city/state)
  - Agreement start and end date
  - Monthly royalty amount
  - Payment status
  - Relationship manager
  - Last activity date
  - Actions: View, Edit, Record Payment, View Agreement
- Bulk actions: export, change status, reassign relationship manager
- Pagination with records per page option
- Export to CSV or Excel

## Create Customer

**Why do we need it?** Most customers are created automatically when a lead is converted. However, there are cases where an existing franchisee needs to be manually entered — for example, if the business was being managed in Excel or a different system before iFranchise CRM was set up.

**What is inside?**
- Section: Personal/Business Information
  - Full name or business name
  - Contact person name
  - Phone (primary and alternate)
  - Email address
  - Registered address
  - City, State, PIN
- Section: Franchise Information
  - Brand (dropdown)
  - Franchise model (filtered by brand)
  - Territory assigned
  - Franchise location address
  - Franchise start date
- Section: Financial Setup
  - Initial franchise fee paid
  - Royalty percentage or fixed amount
  - Payment frequency (monthly, quarterly)
  - Success fee amount
  - GST applicable (Yes/No)
- Section: Relationship Management
  - Relationship manager (dropdown)
  - Conversion source (if known)
  - Linked lead ID (if applicable)
- Notes field
- Save Customer button

## Edit Customer

**Why do we need it?** Customer information changes — they move to a new territory, they change their contact number, they upgrade their franchise model. This screen ensures the data stays accurate throughout the franchise relationship.

**What is inside?**
- All fields from the Create Customer form, pre-populated
- Section-level editing (can edit just one section without touching others)
- Change log at the bottom showing who changed what and when
- "Reason for Update" field
- Linked franchise agreement note: "Changing the royalty rate may require a new agreement"
- Save Changes and Cancel buttons

## Customer Details

**Why do we need it?** The relationship manager, accounts team, and management need a single page that shows everything about a customer — who they are, which franchise they run, what they owe, when their agreement expires, and what has been communicated with them.

**What is inside?**
- Customer header: name, franchise brand, territory, status badge, relationship manager
- Key metrics: agreement end date, next payment due, royalty amount, total paid to date
- Quick action buttons: Record Payment, View Agreement, Schedule Meeting, Send Message, Edit
- Tabs:
  - Overview: full profile snapshot
  - Timeline: all events and interactions
  - Documents: all customer documents
  - Agreements: franchise agreements for this customer
  - Payments: payment history and upcoming dues
  - Franchise: franchise-specific details and performance
  - Communication: all messages sent/received
  - Notes: internal notes about this customer
  - Tasks: pending and completed tasks for this account
  - Activity Log: every action taken on this record

## Customer Timeline

**Why do we need it?** A franchisee relationship can last years. The timeline gives a complete story — from when they first became a customer, to every payment, meeting, document, and communication since then. This is critical for relationship continuity and dispute resolution.

**What is inside?**
- Vertical timeline with events from newest to oldest
- Event types: Payment Received, Meeting Done, Agreement Signed, Royalty Updated, Document Uploaded, Note Added, Communication Sent, Support Request, Escalation, Anniversary Milestone
- Each event shows: date, type, description, performed by, and linked records
- Milestone markers: 1-year anniversary, 5-year anniversary, agreement renewals
- Filter by event type or date range
- Export to PDF

## Customer Documents

**Why do we need it?** Franchisee documentation is legally and operationally critical. Agreements, GST certificates, property documents, insurance papers — all of these need to be stored securely and retrievable on demand.

**What is inside?**
- Document upload area (drag and drop or browse)
- List of all documents with:
  - Document name and type
  - Upload date and uploaded by
  - Expiry date (for time-limited documents)
  - Status: Active, Expired, Pending Review
  - Preview, Download, and Delete buttons
- Document categories: Agreement, ID Proof, Financial, License, Branding, Other
- Search by document name
- Expiry alert: documents expiring within 30 days highlighted
- Version history for resubmitted documents
- Access control: some documents visible only to accounts or management

## Customer Agreements

**Why do we need it?** Franchise agreements are the legal foundation of the franchisee relationship. The team needs to track which agreements are active, when they expire, what the key terms are, and when renewals need to happen.

**What is inside?**
- List of all agreements for this customer:
  - Agreement number
  - Agreement type (initial, renewal, upgrade, amendment)
  - Start date and end date
  - Key terms summary: royalty rate, territory, exclusivity, minimum performance targets
  - Signed by (customer name and iFranchise signatory)
  - Status: Draft, Pending Signature, Active, Expired, Terminated
  - PDF preview and download
  - Renewal reminder status
- Create New Agreement button
- Agreement expiry countdown: "Expires in X days"
- Renewal request button (generates a new agreement workflow)

## Customer Payments

**Why do we need it?** The accounts team needs to track exactly what every franchisee has paid and what is still outstanding. This screen gives them a per-customer financial view so they can manage collections effectively.

**What is inside?**
- Payment summary cards: Total Due, Total Paid, Outstanding Balance, Next Payment Due Date
- Payment history table:
  - Payment date
  - Payment type (royalty, franchise fee, marketing fee, success fee)
  - Amount
  - Payment method (bank transfer, cheque, online)
  - Reference number
  - Invoice number (linked)
  - Recorded by
  - Status: Confirmed, Pending, Failed, Refunded
- Upcoming scheduled payments (based on agreement terms)
- Overdue payments highlighted in red
- "Record Payment" button
- "Generate Invoice" button
- Filter by payment type or date range
- Export payment history

## Customer Franchise

**Why do we need it?** Beyond the financial relationship, iFranchise needs to track how well each franchisee's outlet is actually performing — are they meeting targets, are they compliant with brand standards, are they growing?

**What is inside?**
- Outlet details: location address, opening date, outlet type (kiosk, full store, express)
- Brand compliance status: last inspection date, compliance score
- Monthly sales reported by the franchisee (if integrated)
- Royalty calculation: how royalty is computed based on reported sales
- Staff count at the outlet
- Training completion status
- Marketing campaigns the franchisee has participated in
- Performance targets vs actuals (if defined in the franchise model)
- Expansion eligibility: has this franchisee qualified to open a second unit?
- Support requests history (issues raised by the franchisee)

## Customer Communication

**Why do we need it?** Good customer management requires consistent, documented communication. This screen ensures that every conversation with a franchisee is on record, reducing misunderstandings and enabling the team to communicate professionally.

**What is inside?**
- Channel tabs: All, Email, SMS, WhatsApp
- Message list: date, channel, direction, sender, preview, delivery status
- Full message view on click
- Compose new message button
- Template selection for common messages (payment reminders, renewal notices, event invitations)
- Automated message log (e.g., payment reminders sent by automation)
- Message scheduling option (compose now, send later)
- Search messages by keyword or date

## Customer Notes

**Why do we need it?** Franchisee relationships are complex and personal. Notes capture the nuances that forms and fields cannot — "the owner is dealing with a family health issue and asked for a payment extension," or "very positive about opening a second unit in Surat." This information makes every interaction more informed.

**What is inside?**
- All notes in reverse chronological order
- Each note: date, author, full text, tags, pinned status
- Tags: Financial, Operational, Legal, Personal, Escalation, Appreciation
- Pin option for important notes
- New note editor with formatting
- Search notes by keyword
- Filter by author, date, or tag
- Notes are visible to all authorised team members

## Customer Tasks

**Why do we need it?** Managing a franchisee involves many ongoing tasks — sending a renewal notice, following up on a compliance inspection, collecting an overdue payment. The Tasks screen keeps all of these organised and assigned so nothing is forgotten.

**What is inside?**
- Task list: title, description, assigned to, due date, priority, status
- Filter: pending, completed, overdue, by assignee, by priority
- Create new task button (with title, description, assignee, due date, priority, reminder settings)
- Link task to related records (agreement, payment, meeting)
- Mark complete button
- Overdue tasks highlighted in red
- Task comments: team members can leave comments on tasks
- Recurring task option (e.g., "Check in with franchisee every month")
- Task summary at the top: Total, Pending, Overdue, Completed this month

## Customer Activity Log

**Why do we need it?** For legal compliance and internal accountability, every action on a customer record must be traceable. This log is the definitive record for disputes, audits, and performance reviews.

**What is inside?**
- Chronological log of all system actions on this customer record
- Action type, performed by, date and time, old and new values
- Filter by action type, user, or date range
- Cannot be edited or deleted by anyone
- Export as PDF or CSV for audit purposes
- Linked to the main system audit trail
