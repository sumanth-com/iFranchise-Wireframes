# iFranchise CRM — Accounts & Payments

## Finance Dashboard

**Why do we need it?** Every morning, the CFO or accounts manager needs to know the financial health of the business — what came in, what is outstanding, what is overdue, and how the month is tracking. This dashboard delivers that in seconds.

**What is inside?**
- Total revenue this month (collected)
- Total revenue this month (expected based on agreements)
- Collection rate percentage
- Outstanding dues (total amount across all customers)
- Overdue payments count and value (in red)
- New invoices generated today
- Payments received today
- Refunds processed this month
- GST payable this month
- Revenue trend (last 6 months bar chart)
- Top 5 customers by payment this month
- Upcoming payments due in next 7 days
- Payment method breakdown (bank transfer, cheque, online)
- Quick actions: Record Payment, Generate Invoice, View Pending Dues

## Payment Dashboard

**Why do we need it?** While the Finance Dashboard shows the overall picture, the Payment Dashboard is the day-to-day working screen for the collections team. They use it to track what payments are expected, what has been received, and what needs to be chased.

**What is inside?**
- Today's expected payments list (customers with due dates today)
- Payments received today with running total
- Payments yet to be confirmed (submitted but not verified)
- Upcoming payments (next 7 days) with customer names and amounts
- Overdue payments sorted by age (oldest first)
- Payment collection rate today
- Quick record payment button for each expected payment
- SMS/WhatsApp payment reminder button per customer
- Collection target vs actual for this month

## Payment List

**Why do we need it?** For reconciliation, reporting, and dispute resolution, the accounts team needs access to the full payment history with powerful search and filter capabilities.

**What is inside?**
- Search by customer name, payment reference, or invoice number
- Filter: date range, payment type, status, amount range, customer, brand
- Table columns: payment ID, customer name, brand, payment date, payment type, amount, method, reference number, invoice linked, recorded by, status
- Click to open Payment Details
- Bulk export to CSV or Excel
- Pagination
- Total amount shown for filtered view

## Payment Details

**Why do we need it?** For any payment query or dispute, the full transaction details need to be on record. This screen provides the authoritative view of a single payment with all associated information.

**What is inside?**
- Payment ID and date
- Customer name (linked to their profile)
- Payment type: Franchise Fee, Royalty, Marketing Fee, Success Fee, Refund, Other
- Amount (with GST breakdown if applicable)
- Payment method: Bank Transfer, NEFT/RTGS, Cheque, Cash, Online Gateway
- Bank reference number or UTR
- Linked invoice number
- Received by (accounts executive who recorded it)
- Approval status (if payment required approval)
- Receipt generated: Yes/No with download link
- Notes (any remarks about this payment)
- Reversal/Refund status (if the payment was later reversed)
- Activity log for this payment

## Record Payment

**Why do we need it?** Not all payments come through an automatic gateway. Bank transfers, cheques, and NEFT transfers need to be manually verified and recorded. This screen captures all the details and triggers the relevant downstream actions (mark invoice as paid, update customer balance).

**What is inside?**
- Customer selector (search and pick)
- Payment type dropdown
- Amount field
- Payment date
- Payment method dropdown (Bank Transfer, Cheque, Cash, Online)
- Bank reference number or UTR (for bank transfers)
- Cheque number and bank (for cheques)
- Linked invoice selector (which invoice is this payment for?)
- Notes
- Attachment option (upload bank statement screenshot or deposit slip)
- GST fields (if payment includes tax)
- Save and Confirm button (triggers notification to customer and updates their account)

## Generate Invoice

**Why do we need it?** Invoices are the legal financial documents that trigger payment. Without proper invoices, there is no formal record of what was charged, to whom, and when. This screen generates GST-compliant invoices that can be sent directly to customers.

**What is inside?**
- Customer selector
- Invoice type: Franchise Fee, Royalty, Marketing Fee, Success Fee, Other
- Invoice date and due date
- Line items: description, quantity, rate, amount
- Add line item button
- GST calculation: CGST + SGST or IGST (based on state)
- Total before tax, tax amount, and total amount
- Invoice number (auto-generated in the configured format)
- Payment terms: "Due within 15 days" etc.
- Notes to customer
- Signature and company details (auto-filled from settings)
- Preview invoice before sending
- Send Invoice button (email and/or WhatsApp)
- Save as Draft or Generate and Send

## Invoice Details

**Why do we need it?** For financial accuracy, tax compliance, and customer queries, every invoice needs to be accessible with full detail. This screen is the source of truth for any individual invoice.

**What is inside?**
- Invoice number, date, due date
- Customer details (name, GSTIN, address)
- iFranchise company details (name, GSTIN, address)
- Invoice line items (description, HSN code, quantity, rate, amount)
- GST breakdown: taxable amount, CGST/SGST/IGST, total
- Payment status: Unpaid, Partially Paid, Paid, Overdue
- Payment received: amount and date (if paid)
- Outstanding balance
- PDF preview and download
- Send reminder button (if overdue)
- Mark as paid button
- Credit note button (if a correction is needed)
- Activity log for this invoice

## Invoice List

**Why do we need it?** For monthly reconciliation, GST filing, and collection tracking, the accounts team needs to be able to quickly see all invoices — which are paid, which are outstanding, and which are overdue.

**What is inside?**
- Search by invoice number, customer name, or amount
- Filter: date range, status (Unpaid, Paid, Overdue, Draft, Cancelled), customer, brand, payment type
- Table: invoice number, customer, issue date, due date, amount, GST amount, total, status, payment received
- Click to view Invoice Details
- Bulk export (for GST filing, accounting software import)
- Pagination

## GST Summary

**Why do we need it?** GST compliance is mandatory. This screen calculates and summarises the GST position — what the business has collected (output GST), what it may have paid (input GST), and what the net GST payable is. This is essential for monthly or quarterly GST filing.

**What is inside?**
- Period selector (monthly, quarterly)
- Total output GST collected (from all invoices)
- Breakdown by GST type: CGST, SGST, IGST
- GSTIN of iFranchise
- Customer-wise GST summary (how much was collected from each customer)
- State-wise breakdown (for IGST vs CGST/SGST classification)
- GST payable for the period
- Export to Excel (for CA or GST software import)
- Summary in GSTR-1 format

## Collection Management

**Why do we need it?** Collecting payments from franchisees requires a structured process. Random calls and emails are ineffective and untracked. This screen gives the collections team a systematic workflow — who to contact today, what to say, and how to escalate.

**What is inside?**
- Collection queue sorted by priority (oldest overdue first, highest amount first)
- Each customer row: name, amount overdue, days overdue, last contact date, last reminder sent, assigned collector, status
- One-click: Send Reminder (WhatsApp, SMS, or email with template)
- Note field to log what was discussed when the customer was called
- Promise-to-pay date: record when the customer has promised to pay
- Escalation button (for customers not paying despite reminders)
- Collection stages: Friendly Reminder, Second Reminder, Firm Notice, Legal Notice, Escalated
- Collector performance: how many collections resolved this week
- Collection targets vs actuals

## Pending Dues

**Why do we need it?** The accounts team and management need a clear view of how much money the business is owed, categorised by type and urgency. This is a key financial health indicator.

**What is inside?**
- Total pending dues amount (headline number)
- Breakdown by type: Franchise Fees, Royalties, Marketing Fees, Other
- Breakdown by age: 0-30 days, 31-60 days, 61-90 days, 90+ days
- Customer list with individual outstanding amounts
- Sort by: amount owed, days overdue, customer name
- Action options: Send Reminder, View Invoice, Record Payment, Escalate
- Export pending dues report

## Refunds

**Why do we need it?** Refunds happen — a franchise deal falls through before it starts, an overpayment was made, or a charge was applied in error. This screen tracks refund requests, approvals, and processing.

**What is inside?**
- Refund request list: customer, refund amount, reason, request date, status (Pending, Approved, Processed, Rejected)
- Create new refund request form: customer, amount, payment reference, refund reason, bank details
- Approval status (refunds typically require approval)
- Processing confirmation: record when the refund was actually returned to the customer
- Refund receipt generation
- GST adjustment for refunds (credit note)
- Filter by status, date range, or amount
- Export refund report

## Payment Approval

**Why do we need it?** Not all payments should be recorded without review. Large refunds, unusual charges, or payments outside normal terms should go through an approval step before being posted to accounts. This screen manages that control.

**What is inside?**
- List of payments awaiting approval: customer, type, amount, submitted by, date
- View payment details and attached proof
- Approve button with mandatory comment
- Reject button with reason
- Request more info option
- SLA indicator for each pending approval
- Approved payments history (archive)

## Ledger

**Why do we need it?** The ledger is the definitive financial record of the relationship with a customer. It shows every invoice raised, every payment received, every adjustment, and the running balance at any point in time. It is the document that resolves billing disputes.

**What is inside?**
- Customer selector
- Date range selector
- Opening balance
- Ledger entries in chronological order:
  - Date
  - Description (invoice number, payment reference, adjustment)
  - Debit (amounts charged)
  - Credit (amounts received or reduced)
  - Running balance
- Closing balance
- Total debits and total credits for the period
- Export as PDF (customer statement format, suitable for sending to the customer)
- Share statement button

## Financial Reports

**Why do we need it?** Management needs regular reports to review financial performance. Instead of manually building reports in Excel, this screen generates them on demand in a consistent, accurate format.

**What is inside?**
- Report type selector: Monthly Revenue Report, Collection Report, Outstanding Dues Report, Brand-wise Revenue, Year-to-Date Summary, Custom Date Range
- Customer or brand filter (for filtered reports)
- Generate Report button
- Report preview in the browser
- Export as PDF or Excel
- Schedule report (auto-generate and email every month)
- Historical reports archive (previously generated reports stored here)

## Revenue Analytics

**Why do we need it?** While financial reports give snapshots, analytics answer the "why" questions. Why is revenue declining in Q3? Which brand contributes the most? Which states are generating the most royalty? This screen provides those answers through charts and drill-down data.

**What is inside?**
- Total revenue chart (monthly, quarterly, annual with period comparison)
- Revenue by brand (bar chart and percentage breakdown)
- Revenue by payment type (franchise fees vs royalties vs marketing fees)
- Revenue by geography (state-wise heat map)
- Customer concentration: top 10 customers by revenue contribution
- Growth rate calculation month-on-month
- Forecast: projected revenue for next month based on outstanding agreements
- Revenue per franchisee average
- Trend analysis: growing vs declining revenue categories
- Export as PDF report

## Accounts Audit

**Why do we need it?** Financial records must be auditable. This screen provides the evidence trail needed for internal audits, statutory audits, and tax assessments — every financial event with who did it, when, and what the exact amounts were.

**What is inside?**
- Chronological log of all financial actions
- Filter by action type (payment recorded, invoice generated, refund processed, amount modified), user, date range
- Each entry: timestamp, user, action, affected record, old and new values
- Search by payment reference, invoice number, or customer
- Cannot be edited or deleted
- Export as PDF or CSV
- Integration with the main system audit trail
