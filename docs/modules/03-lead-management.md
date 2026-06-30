# iFranchise CRM — Lead Management

## Lead Dashboard

**Why do we need it?** Before diving into individual leads, managers and executives need to understand the current state of the pipeline — how many leads are there, how many are hot, how many have gone cold, what is the conversion rate this month. This screen gives that picture instantly.

**What is inside?**
- Total leads in the system (all time and this month)
- New leads today and this week
- Leads by status: New, Contacted, Interested, Meeting Scheduled, Proposal Sent, Converted, Lost
- Lead source breakdown: how many came from Facebook, Google, Referral, Walk-in, Website, etc.
- Hot leads count (starred or flagged as high priority)
- Leads with no activity in 48 hours (requires attention)
- Top lead sources this month (bar chart)
- Lead-to-conversion funnel chart
- Conversion rate this month vs last month
- Average time to convert a lead (days)
- Assigned vs unassigned leads count
- Today's follow-ups due (count with a quick link to the list)
- Upcoming meetings from leads (count for today and tomorrow)
- Brand-wise lead distribution chart
- Quick action buttons: "Add Lead", "View All Leads", "View Kanban"

## All Leads (Lead List)

**Why do we need it?** This is where most of the day-to-day lead management work happens. Sales executives browse their leads, check status, and pick up where they left off. Managers can filter by team, source, or status to review the pipeline. Without this screen, leads would have no central place to live.

**What is inside?**
- A search bar to find leads by name, phone, email, or city
- Filter panel on the left or top:
  - Status filter (New, Contacted, Interested, Meeting Done, Converted, Lost, Archived)
  - Source filter (Facebook, Google, Referral, Walk-in, etc.)
  - Assigned to filter (specific executive or "My Leads")
  - Brand interest filter
  - Date range filter (created date or last activity date)
  - City and state filter
  - Investment range filter
- A sortable table of leads with columns:
  - Lead ID
  - Name (clickable — opens Lead Details)
  - Phone number (with one-click call icon)
  - Email (with one-click email icon)
  - City and State
  - Brand interest
  - Lead source
  - Status badge (colour-coded)
  - Assigned to (executive name)
  - Created date
  - Last activity date
  - Next follow-up date (shown in red if overdue)
  - Actions column: Edit, Call, Email, Schedule Meeting, Convert, Archive
- Bulk action options: reassign leads, change status in bulk, export selected
- Pagination controls (50 or 100 leads per page)
- Total count shown ("Showing 1-50 of 347 leads")
- Export button to download as CSV or Excel
- Toggle to switch to Kanban view

## Lead Kanban

**Why do we need it?** The Kanban view makes it easy to see the pipeline as a flow rather than a list. Sales executives can see where leads are getting stuck — too many in "Contacted" and not enough moving to "Meeting Scheduled" means follow-ups are not happening. They can drag a lead card from one column to another to update its status instantly.

**What is inside?**
- Columns representing each lead stage:
  - New
  - Contacted
  - Interested
  - Meeting Scheduled
  - Proposal Sent
  - Negotiation
  - Converted
  - Lost
- Lead count shown at the top of each column
- Lead cards inside each column showing:
  - Lead name
  - Phone number
  - Brand interest
  - Assigned executive
  - Days in current stage
  - Next follow-up date (in red if overdue)
  - Hot/Priority flag icon
- Drag-and-drop to move a lead from one stage to another (triggers a confirmation and logs the action)
- Click on a lead card to open the Lead Details screen
- Filter bar at the top: filter by assigned executive, brand, source, or date
- A "Compact" vs "Detailed" toggle for card size
- Add new lead button at the top of the "New" column
- Horizontal scroll for stages that do not fit on screen

## Create Lead

**Why do we need it?** Not all leads come from digital sources. Leads from walk-ins, phone calls, exhibitions, and referrals need to be entered manually. This form captures all the details needed to start the sales process.

**What is inside?**
- Section: Personal Information
  - First name and last name (required)
  - Phone number (required, with country code)
  - Alternative phone number
  - Email address
  - Date of birth (optional)
- Section: Location
  - City, State, PIN code
  - Country (default: India)
- Section: Lead Details
  - Lead source (dropdown: Facebook, Google, Referral, Walk-in, Exhibition, Website, WhatsApp, Other)
  - Campaign name (if applicable)
  - Brand of interest (dropdown of active brands)
  - Franchise model of interest (filtered by brand)
  - Investment budget range
  - Preferred territory
- Section: Assignment
  - Assign to (dropdown of active sales executives)
  - Priority level (Normal, High, Hot)
- Section: Notes
  - Initial notes or remarks from the conversation
- Submit button ("Save Lead")
- Save as Draft option
- Cancel button

## Lead Details

**Why do we need it?** When an executive picks up the phone to call a lead, they need to see everything in one place — previous conversations, notes, meeting history, documents, the lead's interests, and what stage they are in. This screen is the single source of truth for one lead.

**What is inside?**
- Lead header: name, photo (if uploaded), status badge, priority flag, assigned executive, created date
- Contact information: phone, email, city, state, brand interest, investment range
- Quick action buttons: Call, Email, WhatsApp, Schedule Meeting, Edit, Convert, Archive
- Tabs at the bottom of the page:
  - Overview: key stats (days since creation, number of calls, meetings done, last contacted)
  - Timeline: chronological activity history
  - Follow-ups: list of all scheduled and completed follow-ups
  - Meetings: all meetings linked to this lead
  - Notes: written notes from the executive
  - Documents: any files uploaded for this lead
  - Communication: all emails, SMS, and WhatsApp sent to this lead
  - Activity Log: every system action taken on this lead
- A status change dropdown at the top to quickly move the lead to the next stage
- An "Interest Score" indicator based on activity (number of meetings, responses, engagement)

## Edit Lead

**Why do we need it?** Lead information changes over time. A prospect who was not interested 3 months ago may now have a bigger budget. Their phone number may have changed. Their brand preference may have shifted. This screen lets the team keep lead data accurate and current.

**What is inside?**
- All the same fields as the Create Lead form, pre-filled with current data
- Visual indicators showing which fields were last updated and when
- An "Update Reason" field (optional note explaining why the update was made)
- Change history visible at the bottom (who changed what and when)
- Save Changes button
- Cancel button (reverts to the last saved version)

## Lead Timeline

**Why do we need it?** When multiple people interact with the same lead — or when a lead is reassigned — the new owner needs to see the complete history. The timeline gives a clear, story-like view of the lead's journey without reading through logs or multiple screens.

**What is inside?**
- A vertical timeline with events ordered from newest at top to oldest at bottom
- Each event entry shows:
  - Date and time stamp
  - Event type icon (call, email, meeting, status change, note, document, WhatsApp, reassignment)
  - Short description of what happened ("Status changed from Interested to Meeting Scheduled by Himani")
  - Who performed the action
  - Any notes or comments attached to the event
- Filter options: show only calls, show only meetings, show only status changes
- Expandable event cards — click to see full notes or email content
- Download timeline as PDF button (for management review)

## Lead Assignment

**Why do we need it?** Leads need to be handled by the right person at the right time. When a new executive joins, when an executive goes on leave, or when leads are not being followed up, the manager needs to redistribute the pipeline efficiently. This screen makes that fast and trackable.

**What is inside?**
- A split view: left side shows unassigned or selected leads, right side shows team members
- Lead list on the left with checkboxes:
  - Lead name, source, city, brand interest, current status
  - Current assignee (if already assigned)
  - Days since last activity
- Team member panel on the right:
  - Executive name and photo
  - Current lead count in their pipeline
  - Capacity indicator (how loaded they are)
  - Performance score
- Drag-and-drop or select-and-assign buttons
- Auto-assign option: system assigns based on round-robin or least-loaded logic
- Filter: show only unassigned leads, show leads by source, show leads by brand
- Assignment notes field: reason for reassignment
- Confirm button and bulk apply
- Email/notification sent to the newly assigned executive automatically

## Follow-Up

**Why do we need it?** In franchise sales, consistent follow-up is the difference between a conversion and a lost lead. This screen ensures that every lead has a next action scheduled, that no one falls through the cracks, and that managers can see which follow-ups are overdue.

**What is inside?**
- List of all follow-up tasks, filterable by:
  - Due today
  - Overdue
  - Upcoming (next 7 days)
  - Completed
  - By executive
- Each follow-up row shows:
  - Lead name (clickable)
  - Follow-up type (Call, Email, WhatsApp, In-person visit)
  - Due date and time
  - Status (Pending, Completed, Overdue, Postponed)
  - Notes about what to discuss
  - Assigned executive
- Actions per row: Mark as Done, Postpone (with new date), View Lead, Quick Call
- Add new follow-up button
- Bulk mark as done option
- Overdue count badge visible in the navigation menu
- Summary cards at the top: Overdue count, Due today, Due this week, Completed this week

## Schedule Meeting

**Why do we need it?** Meetings are the critical next step in converting a lead. This screen ensures that every meeting is properly logged — with the right details, participants, location, and reminders — so nothing gets missed or double-booked.

**What is inside?**
- Lead name and contact information (pre-filled from the linked lead)
- Meeting title
- Date picker
- Start time and end time
- Meeting type: In-person, Video Call, Phone Call
- Location (if in-person): venue address, city
- Online meeting link (if video call): auto-generate or paste Zoom/Google Meet link
- Internal participants: select executives to include
- Agenda text box: what will be discussed
- Send invite checkbox: automatically sends email/WhatsApp to the lead with meeting details
- Reminder settings: remind the lead 24 hours before, 1 hour before
- Reminder for executive: 30 minutes before
- Notes or preparation instructions
- Save Meeting button
- Cancel button

## Meeting History

**Why do we need it?** Multiple meetings often happen before a lead converts. The Meeting History gives the full picture of how many times the team has sat down with this prospect, what was discussed, and what the outcome was each time — so the next meeting can be more productive.

**What is inside?**
- Chronological list of all meetings for this lead
- Each meeting entry shows:
  - Meeting date and time
  - Meeting type (in-person, call, video)
  - Conducted by (executive name)
  - Attendees list
  - Agenda (summary)
  - Outcome: Positive, Neutral, Negative, Follow-up Required, Converted
  - Meeting duration
  - Notes recorded during or after the meeting
  - Documents shared during the meeting (linked)
  - Next step agreed upon
- Filter by outcome or date range
- "Schedule Next Meeting" quick button at the top
- Export meeting history button

## Documents (Lead)

**Why do we need it?** During the sales process, various documents get exchanged — prospect identity proofs, investment capability documents, franchise brochures, proposals, NDAs. All of these need to be attached to the lead record so they can be found quickly and are never lost.

**What is inside?**
- Document upload button (drag and drop or browse files)
- List of all uploaded documents:
  - Document name
  - Document type (ID Proof, Financial Document, Proposal, Agreement, Brochure, Other)
  - File size
  - Uploaded by
  - Upload date
  - Status (Active, Expired, Pending Review)
  - Download, Preview, and Delete actions
- Document categories filter
- Search documents by name
- Version control: if the same document is re-uploaded, previous version is retained
- Expiry date field for documents that have a validity (e.g., bank statements, ID proofs)
- Expired documents highlighted in amber

## Notes (Lead)

**Why do we need it?** A lot of important information in sales comes from conversations — "he mentioned his wife runs the finances and she needs to be in the next meeting" or "he is comparing us with Brand X." These insights cannot be captured in dropdown fields. Notes allow the team to record this context in plain text.

**What is inside?**
- A list of all saved notes, newest first
- Each note shows:
  - Date and time created
  - Written by (executive name)
  - Full text of the note
  - Tags (optional, e.g., "objection", "hot", "competitor mentioned", "family involved")
  - Edit and Delete options (only by the author or admin)
  - Pin option (pinned notes appear at the top)
- New note editor: a simple text box with formatting options (bold, bullet points, links)
- Search notes by keyword
- Filter notes by author or date range
- Notes are visible to all team members who have access to this lead

## Communication (Lead)

**Why do we need it?** When a team manages hundreds of leads, it is easy to lose track of what was communicated to whom. This screen acts as a complete communication history, preventing duplicate messages, ensuring follow-ups are timely, and allowing managers to review whether the team is communicating professionally.

**What is inside?**
- Channel tabs: All, Email, SMS, WhatsApp
- Each message entry shows:
  - Channel icon (email, SMS, WhatsApp)
  - Direction: Sent or Received
  - Date and time
  - Sender/receiver name
  - Message subject (for email) or message preview
  - Full message content (expandable)
  - Delivery status: Sent, Delivered, Read, Failed
- Compose new message button (opens a message editor)
- Filter by date range or channel
- Search messages by keyword
- Send bulk message option (with template selection)
- Automated message log (messages sent by automation rules appear here with an "Auto" tag)

## Convert Lead

**Why do we need it?** Converting a lead to a customer is a milestone event. It needs to be done formally, with the right franchise model confirmed, investment amount recorded, and a customer record created. This screen ensures the conversion is clean, data is transferred correctly, and all stakeholders are notified.

**What is inside?**
- Lead summary at the top (name, contact, current status, brand interest)
- Conversion form:
  - Brand selected (from lead profile, can be changed)
  - Franchise model selected
  - Territory agreed upon
  - Investment amount confirmed
  - Agreement type (full franchise, area franchise, master franchise)
  - Expected start date
  - Conversion date (today by default)
  - Notes about the conversion
- Agreement initiation toggle: "Create franchise agreement now?" (Yes/No)
- Customer record creation: pre-populated form for the new customer profile
- Success fee record: auto-calculate based on the franchise model's success fee structure
- Notify options: who to notify on conversion (CEO, Team Lead, Accounts)
- Confirm Conversion button
- Summary of what will happen: "This lead will be marked as Converted. A new customer record will be created. An invoice for success fees will be generated."

## Archive Lead

**Why do we need it?** Not every lead converts, and keeping dead leads in the active pipeline creates noise and inflates numbers. Archiving moves them out of the main view while preserving the data for future reference, reporting, and potential revival.

**What is inside?**
- Lead summary (name, contact, status, assigned to, created date, last activity date)
- Archive reason dropdown: Not Interested, Uncontactable, Competitor Chosen, Budget Issue, Location Unavailable, Duplicate, Other
- Archive notes text field (additional context)
- Option to set a "Revival Date": bring this lead back for follow-up after X months
- Warning message: "This lead will be removed from the active pipeline. It can be restored later."
- Confirm Archive button
- Cancel button
- Bulk archive: can be accessed from the lead list for multiple selected leads

## Activity Log (Lead)

**Why do we need it?** For accountability and compliance, every action on a lead needs to be traceable. If a lead claims they were never contacted, or if a manager wants to know why a lead was reassigned, or if there is a dispute about when a conversion happened, the activity log provides the definitive record.

**What is inside?**
- A chronological log of every event:
  - Action type (e.g., "Status Changed", "Note Added", "Document Uploaded", "Email Sent", "Lead Reassigned", "Follow-up Scheduled", "Meeting Created", "Lead Archived")
  - Who performed the action (user name and role)
  - Date and time
  - Old value and new value (for changes, e.g., "Status changed from New to Contacted")
  - IP address and device used (for security-sensitive actions)
- Filter by action type, user, or date range
- Export log as PDF or CSV
- Read-only (cannot be edited or deleted even by admin)
