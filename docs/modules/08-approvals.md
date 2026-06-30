# iFranchise CRM — Approval Management

## Approval Dashboard

**Why do we need it?** Approvals touch multiple departments — a payment refund, a discount offer, a franchise agreement, a royalty rate change. The dashboard gives the approvals team a single view of everything that needs their attention.

**What is inside?**
- Total pending approvals count (with urgency levels)
- Approvals by category: Financial, Legal, Operational, HR
- Overdue approvals (beyond expected resolution time)
- Approvals resolved today
- Escalated approvals
- Approval turnaround time (average hours/days to resolve)
- Upcoming approval deadlines
- Recent activity: last 10 approval actions
- Quick actions: View Inbox, View Pending, View Escalated

## Approval Inbox

**Why do we need it?** Just like an email inbox, the approval inbox is personalised. Each approver sees only the requests assigned to them, so they are not overwhelmed by requests meant for others. This makes the approval process faster and more accountable.

**What is inside?**
- List of all pending approval requests assigned to this user
- Each request: title, category, requester name, requested date, urgency level, deadline
- Sort by urgency, date, or category
- Quick approve and quick reject buttons on each row (one-click with mandatory comment)
- Mark as read (distinguishes new from reviewed requests)
- Filter: by category, by urgency, by requester
- Total count badge

## Pending Approvals

**Why do we need it?** Managers and admins need visibility into the overall approval backlog — not just their own inbox, but all pending approvals in the system. This screen shows the full picture so bottlenecks can be identified.

**What is inside?**
- All pending approval requests across all approvers
- Filter: by approver, category, urgency, age, department
- Each request: title, requester, assigned approver, date, urgency, days pending
- Escalate button (for requests overdue beyond threshold)
- Reassign approver button
- Bulk actions: reassign multiple requests, send reminders
- Stalled requests highlighted (pending for more than X days)

## Approval Details

**Why do we need it?** An approver needs all the context before making a decision. This screen presents everything in one place — no need to go to multiple screens or ask for clarification unless genuinely needed.

**What is inside?**
- Request title and category
- Requester name, designation, date and time of request
- Full description of what is being approved and why
- Supporting data: linked records (lead, customer, payment, agreement as relevant)
- Attached documents
- Financial impact (if applicable)
- Requested amount or change details
- History of the request: who has seen it, any previous approvals in a multi-stage workflow
- Comments from reviewers
- Decision form: Approve / Reject / Request More Information
- Mandatory comment field
- SLA indicator: time remaining before this approval is overdue
- Audit trail of all actions on this request

## Approval Workflow

**Why do we need it?** Some decisions require multiple approvals — a legal review, then a finance check, then management sign-off. This screen makes the workflow visible so everyone knows where a request is in the process and what comes next.

**What is inside?**
- Workflow diagram: visual flow showing all stages and approvers
- Current stage highlighted
- Stage history: who approved and when at each completed stage
- Pending stage: who needs to act next and by when
- Skip stage option (for emergency approvals with justification)
- Parallel vs sequential stage settings
- Estimated completion date based on SLAs
- Workflow type label (e.g., "Financial Approval", "Legal Review", "Management Sign-off")

## Approval Timeline

**Why do we need it?** For audit and compliance purposes, the complete history of any approval decision must be documented. This timeline provides that record.

**What is inside?**
- All events in order: Request Created, Assigned to Approver, Viewed by Approver, Approved/Rejected at each stage, Comments Added, Final Decision Made, Requester Notified
- Each event: timestamp, person, action description
- All comments visible in context
- Filter by event type
- Export as PDF for compliance documentation

## Approval History

**Why do we need it?** Past decisions inform future ones. When a similar request comes up, the approver can check history to see how previous requests of the same type were handled. It also provides the data needed for periodic approval process reviews.

**What is inside?**
- List of all resolved approvals with filters by category, approver, date range, outcome
- Each entry: title, requester, approver, decision date, outcome (Approved/Rejected), comments
- Decision reason (recorded at time of approval or rejection)
- Average resolution time by category
- Search by requester name or request type
- Export history

## Approval Comments

**Why do we need it?** Sometimes an approver needs more information before deciding. Rather than picking up the phone or sending emails outside the system, the comment thread keeps all communication about the approval in one place, attached to the request.

**What is inside?**
- Threaded comment list with oldest first
- Each comment: author, designation, timestamp, comment text
- Attachment option per comment
- Tag a person option (@mention to notify)
- Comment visibility: internal only vs visible to requester
- "Reply" to a specific comment
- New comment box with submit button
- Email notification sent to all participants when a new comment is added

## Approval Documents

**Why do we need it?** Most approvals require supporting documents — a quotation, an agreement draft, a financial statement, a client communication. Having these attached directly to the approval request means the approver does not have to chase documents.

**What is inside?**
- Document upload area
- List of attached documents: name, type, size, uploaded by, date
- Preview and download buttons
- Required documents checklist (if the approval type has mandatory documents)
- Missing documents warning (prevents submission if required documents are absent)
- Version history for revised documents

## Approval Decision

**Why do we need it?** Every approval decision must be formally recorded with the approver's identity, their reasoning, and the timestamp. This screen ensures that no decision is made casually or without documentation.

**What is inside?**
- Request summary at the top (read-only)
- Decision options: Approve, Reject, Request More Information, Escalate
- Mandatory comment field ("Reason for your decision — required")
- Conditional approval option: "Approve with conditions" (specify conditions)
- Effective date: when the approved action can take effect
- Digital signature or PIN confirmation (for high-value approvals)
- Notify requester toggle (default: Yes)
- Notify others (e.g., accounts team, legal team) toggle
- Confirm Decision button

## Approval Analytics

**Why do we need it?** If approvals are taking too long or being rejected at a high rate, it indicates a process problem. Analytics help management identify and fix these issues before they slow down the business.

**What is inside?**
- Average approval turnaround time by category
- Approval rate vs rejection rate
- Most common rejection reasons
- Approvals by approver (workload distribution)
- SLA compliance rate (percentage of approvals completed on time)
- Trend chart (approvals volume over time)
- Most frequent requesters
- Bottleneck identification: which stage in multi-step workflows takes longest
- Export analytics report

## Approval Settings

**Why do we need it?** Different types of approvals need different rules. A routine payment might need just one level of approval, while a territory change might need three. This screen defines those rules so the system routes approvals correctly without manual intervention.

**What is inside?**
- List of approval types (Financial, Legal, Operational, HR, Brand, Franchise Model, etc.)
- For each type: define workflow stages, assigned approvers, SLA, escalation rules
- Threshold settings: e.g., "Any discount above 10% requires CEO approval"
- Auto-approve rules: e.g., "Payments under 5,000 are auto-approved"
- Delegation settings: who can approve on behalf of an absent approver
- Email/notification templates for approval requests and decisions
- Audit settings: which approvals require digital signature

## Escalated Approvals

**Why do we need it?** Some approvals get stuck — the assigned approver is on leave, they are too busy, or they are avoiding a difficult decision. Escalation ensures that no approval waits indefinitely and business does not get blocked.

**What is inside?**
- List of all escalated approvals: title, original approver, escalated to, escalation date, days elapsed, reason
- Filter by escalated approver or category
- Original approval request details (linked)
- Escalation reason
- Resolution deadline
- Action buttons: Approve, Reject, Reassign Further
- Escalation history: every escalation step

## Rejected Approvals

**Why do we need it?** Rejection is part of the approval process. The requester needs to see why their request was rejected and have the option to address the concerns and resubmit. This screen manages that loop.

**What is inside?**
- List of all rejected requests with: title, requester, rejector, date, rejection reason
- View full request details link
- Resubmit button (creates a new version of the same request with opportunity to address concerns)
- Appeal option (flags the rejection for review by a senior authority)
- Filter by category or date range

## Completed Approvals

**Why do we need it?** Completed approvals provide a historical reference for past decisions. They also serve as audit evidence and help in generating compliance reports.

**What is inside?**
- List of all resolved approvals: title, requester, approver, decision date, outcome
- Search and filter by date range, category, approver, outcome
- View full details of any completed approval
- Export selected or all records
- KPI summary: total resolved this month, average time to resolve

## Bulk Approvals

**Why do we need it?** Sometimes there are many similar requests — monthly payment confirmations, a batch of standard agreement approvals, routine verifications. Approving them one by one is time-consuming. Bulk approval speeds this up dramatically.

**What is inside?**
- List of similar pending approvals that qualify for bulk action
- Checkboxes to select multiple requests
- Preview of each selected request (summary)
- Bulk Approve button with mandatory single comment that applies to all
- Bulk Reject button with mandatory reason
- Individual override: uncheck any request that needs separate review
- Confirmation dialog: "You are approving X requests. This action cannot be undone."
- Audit log entry for each approval in the batch

## Approval Audit

**Why do we need it?** Regulatory compliance, internal audits, and legal disputes may require proof of the approval process. The Audit screen provides an immutable, detailed record that cannot be altered.

**What is inside?**
- Full log of all approval-related events across the system
- Filter by user, approval type, date range, action type
- Every entry: timestamp, user, action, affected record, before/after values
- Cannot be edited, modified, or deleted by any user including admin
- Export as PDF or CSV for external auditors
- Search by approval ID, requester, or approver name
