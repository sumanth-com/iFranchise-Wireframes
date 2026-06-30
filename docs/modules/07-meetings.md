# iFranchise CRM — Meeting Management

## Meeting Dashboard

**Why do we need it?** Managers and team leads need to see the meeting pipeline at a glance. How many meetings happened this week? How many are scheduled next week? What were the outcomes? Are there enough meetings being generated to hit conversion targets?

**What is inside?**
- Today's meetings count with a list preview
- This week's meetings count
- Meetings this month vs last month
- Outcome breakdown: Positive, Neutral, Negative, Converted, Follow-up Required
- Meetings by type: In-person, Video, Phone
- Meetings by brand
- Meeting-to-conversion rate this month
- Top meeting performers (executives with most meetings)
- Upcoming meetings in next 48 hours
- Overdue meeting follow-ups
- Quick actions: Schedule Meeting, View Calendar, View All Meetings

## Meeting Calendar

**Why do we need it?** A list view of meetings can be overwhelming. The calendar view gives an immediate sense of how full the schedule is, whether there are conflicts, and how meetings are distributed across the week.

**What is inside?**
- Calendar view toggles: Day, Week, Month
- Colour-coded meeting blocks by type (in-person, video, phone) or by executive
- Each meeting block shows: time, lead name, type icon
- Click on a block to see meeting details or edit
- Filter: view by executive (useful for managers), by brand, by meeting type
- Add Meeting button (opens Schedule Meeting form)
- Today button to snap back to current date
- Conflicts highlighted: overlapping meetings shown with a warning
- Upcoming reminder indicators on meetings within 24 hours
- Print/Export week view

## Meeting List

**Why do we need it?** For reporting and review purposes, the list view is more useful than the calendar. Managers can filter by date range, executive, outcome, or brand to analyse meeting patterns and follow up on specific meetings.

**What is inside?**
- Search by lead name or meeting title
- Filters: date range, assigned executive, meeting type, outcome, brand, status
- Table columns: meeting ID, lead name, date and time, type, executive, duration, outcome, follow-up status
- Click to open Meeting Details
- Bulk export button
- Sort by date, executive, or outcome
- Pagination

## Schedule Meeting

**Why do we need it?** Every meeting needs to be formally booked in the system — with the right time, participants, agenda, and communication sent to the prospect. This screen ensures that meetings are never just verbal commitments but properly documented appointments.

**What is inside?**
- Meeting title
- Linked lead or customer (search and select)
- Date and time picker
- Duration selector
- Meeting type: In-person, Video Call, Phone Call
- Location (for in-person): address or venue name
- Online link (for video): auto-generate or paste link
- Internal attendees: select team members
- External attendees: prospect's name and contact (pre-filled from lead)
- Agenda text box
- Pre-meeting preparation notes
- Send invite: Yes/No with message preview
- Reminder settings (for both executive and prospect)
- Repeat: one-time, recurring
- Save and Confirm button

## Meeting Details

**Why do we need it?** Before a meeting, the executive needs to review the agenda and notes. After a meeting, the team needs to see what was discussed and what the outcome was. This screen serves both purposes.

**What is inside?**
- Meeting title, date, time, duration, type
- Lead or customer linked (clickable)
- Executive conducting the meeting
- All attendees (internal and external)
- Agenda items
- Pre-meeting notes
- Meeting status: Upcoming, In Progress, Completed, Cancelled, Rescheduled
- Outcome (filled in after the meeting): Positive, Neutral, Negative, Converted, Follow-up Required
- Post-meeting notes
- Action items decided in the meeting
- Next meeting or follow-up scheduled
- Documents shared during the meeting
- Quick actions: Edit, Cancel, Reschedule, Complete (mark meeting as done), Add Outcome

## Edit Meeting

**Why do we need it?** Meetings get rescheduled, locations change, participants are added or removed. This screen handles those changes cleanly, including sending updated notifications to all parties.

**What is inside?**
- All Meeting fields pre-filled, editable
- Change log showing what has been modified
- Notification settings: "Send update notification to all attendees?" with preview of the update message
- Save Changes button
- Cancellation option at the bottom of the form

## Meeting Agenda

**Why do we need it?** A structured agenda leads to more productive meetings. This screen allows the executive to prepare the flow of the meeting, estimate time per topic, and share it with the prospect in advance so everyone comes prepared.

**What is inside?**
- Meeting title and basic details (read-only header)
- Agenda item list: add, remove, reorder items
- Each agenda item: title, description, presenter, allocated time (minutes)
- Total time calculation vs meeting duration (shows if agenda is over or under time)
- Notes space per agenda item
- Template library: pre-built agendas for common meeting types (initial discovery, follow-up, agreement discussion)
- Share agenda button: sends the agenda to all attendees
- Print agenda button

## Meeting Participants

**Why do we need it?** Some meetings involve multiple team members (a brand representative, a senior executive, a technical person) and multiple people from the prospect's side. Managing attendance and communication needs a dedicated view.

**What is inside?**
- Internal participants list: name, role, response status (Accepted, Declined, Pending)
- External participants list: prospect/customer name, contact, response status
- Add participant button (internal or external)
- Remove participant button
- Resend invite button per participant
- RSVP summary: "X of Y confirmed"
- Guest link for video meetings (unique link per external participant if needed)
- Attendance marking after the meeting (who actually attended vs who was invited)

## Meeting Notes

**Why do we need it?** Memory fades quickly after a meeting. Notes captured immediately after the meeting preserve the conversation, the prospect's questions and concerns, and any promises made — giving the entire team context for future interactions.

**What is inside?**
- Meeting reference at the top (linked meeting)
- Notes text editor with formatting
- Section prompts: "What was discussed?", "Prospect's concerns?", "What was promised?", "Prospect's interest level?"
- Action items list: add items with assignee and due date
- Next step selector: another meeting, send proposal, follow-up call, no further action
- File attachment option (attach meeting recording if available)
- Save Notes button
- Notes visibility: all team members with access to this lead or customer can see these notes

## Meeting Documents

**Why do we need it?** Meetings involve exchanging a lot of material. Tracking what was shared when, and with whom, is important both for follow-up and for legal compliance (especially if documents are part of an agreement negotiation).

**What is inside?**
- Document upload area
- List of documents: name, type, uploaded by, upload date, shared with (internal or external)
- Preview, download, delete options
- Documents automatically linked to the parent lead/customer record
- Ability to share documents directly from here (email or WhatsApp link)
- Meeting recording upload field (if calls are recorded externally)

## Meeting Timeline

**Why do we need it?** Meetings generate many events — the initial scheduling, any changes, reminders sent, the meeting itself, the outcome entry, the follow-up actions. The timeline captures this complete story.

**What is inside?**
- Chronological events: Meeting Created, Invite Sent, Attendee Confirmed, Meeting Started, Notes Added, Outcome Recorded, Follow-up Created
- Each event: timestamp, who performed it, description
- Filter by event type
- Export timeline

## Meeting Follow-ups

**Why do we need it?** A meeting without a follow-up is a meeting wasted. This screen ensures that every commitment made in a meeting — "I will send you the brochure by Thursday", "Let us schedule a site visit next week" — is captured as a task and tracked to completion.

**What is inside?**
- List of all follow-up tasks from this meeting
- Each task: title, assigned to, due date, status (Pending, In Progress, Completed, Overdue)
- Add new follow-up task button
- Mark task complete button
- Link to the relevant lead or customer
- Overdue tasks highlighted
- Completion rate: "X of Y follow-ups completed"

## Meeting Outcomes

**Why do we need it?** Outcomes need to be systematically recorded so the team can analyse what kinds of meetings lead to conversions, what objections come up most often, and how effectively the team is conducting meetings.

**What is inside?**
- Meeting summary (date, lead, executive, duration)
- Outcome type: Very Positive, Positive, Neutral, Negative, Prospect Not Interested, Converted
- Prospect interest level: 1-10 scale
- Key discussion points (brief summary)
- Objections raised by the prospect
- What was promised by the executive
- Next step agreed upon
- Next meeting scheduled (if applicable)
- Conversion triggered: Yes/No (if Yes, links to the Convert Lead screen)
- Save Outcome button

## Online Meeting

**Why do we need it?** With prospects across the country, video meetings are common. This screen handles the technical setup — generating meeting links, sending them to participants, and tracking attendance for virtual sessions.

**What is inside?**
- Integration selection: Zoom, Google Meet, Microsoft Teams (based on configured integrations)
- Auto-generated meeting link
- Meeting password (if applicable)
- Waiting room toggle
- Recording option (if permitted by policy)
- Send link to participants button
- Test link button
- Join Meeting button (for the host, opens the video platform)
- Meeting recording status and download link (post-meeting)

## Offline Meeting

**Why do we need it?** In-person meetings for franchise sales are often the most important interactions — they are where investors come to meet the team, see brand materials, and make their decision. This screen ensures the logistics are properly managed and the meeting is well-prepared.

**What is inside?**
- Meeting location: office address, conference room, or external venue
- Directions or Google Maps link (shareable)
- Check-in time (when the prospect arrived)
- Check-out time (when the meeting ended)
- Hospitality notes (tea preferences, parking details)
- On-site materials checklist: brochures, agreement documents, laptop, presentation
- Check-in confirmation: executive marks when prospect has arrived
- Visitor registration details (name, ID proof if required for office entry)
- Post-meeting: mark as completed, record time spent

## Cancel and Reschedule Meeting

**Why do we need it?** Meetings get cancelled and rescheduled regularly. Handling this through the system ensures that everyone is notified, the calendar is updated, and the reason for cancellation or reschedule is recorded.

**What is inside?**
- Meeting summary
- Action selector: Cancel or Reschedule
- If Cancelling:
  - Cancellation reason (dropdown): Prospect Requested, Executive Unavailable, Venue Issue, Other
  - Cancellation note
  - Notification to prospect: Yes/No (with message preview)
  - Future rescheduling option: "Would you like to immediately schedule a new time?"
- If Rescheduling:
  - New date and time picker
  - Updated venue/link field
  - Reason for rescheduling
  - Notification message preview to attendees
- Confirm button
- History entry: original meeting time and new time recorded

## Meeting Analytics

**Why do we need it?** Understanding how meetings drive conversions is crucial for optimising the sales process. This screen helps managers see which executives conduct the most effective meetings, what times and formats work best, and where the team needs coaching.

**What is inside?**
- Total meetings this period (with filters for month, quarter, year)
- Meetings by outcome type (donut or bar chart)
- Meetings by type (in-person vs video vs phone)
- Meeting-to-conversion rate
- Average meetings per conversion
- Top executives by meetings conducted
- Top executives by meeting-to-conversion rate
- Best performing day of week for meetings
- Best performing time of day for meetings
- Lead source breakdown: which lead sources result in the most meetings
- Brand-wise meeting performance
- Executive comparison table
- Export analytics report
