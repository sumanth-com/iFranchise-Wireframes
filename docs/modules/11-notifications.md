# iFranchise CRM — Notification Center

## Notification Dashboard

**Why do we need it?** The CRM sends hundreds of notifications daily — lead alerts, meeting reminders, payment confirmations, approval notifications. The dashboard tells the team whether the notification system is working, what is being sent, and whether any channel is failing.

**What is inside?**
- Total notifications sent today, this week, this month
- By channel breakdown: Email, SMS, WhatsApp, Push (bar chart)
- Delivery rate per channel (successful vs failed)
- Failed notifications count (with drill-down)
- Notifications by type: System, Lead, Meeting, Payment, Approval, Reminder, Announcement
- Scheduled notifications pending for today
- Recent notification activity feed
- Channel health indicators (green/amber/red)
- Quick actions: View All Notifications, View Failed, Notification Settings

## Notification Centre

**Why do we need it?** Every user needs a central place to see all their notifications without switching between email, WhatsApp, and SMS. The Notification Centre brings all alerts into the CRM itself so users see them the moment they log in.

**What is inside?**
- Unread notifications count badge (visible from all screens)
- List of all notifications sorted by most recent
- Each notification: icon, title, short description, timestamp, linked record (clickable)
- Read/Unread status
- Mark all as read button
- Delete notification button
- Filter by: unread only, by type, by date
- Notification grouping: Today, Yesterday, Earlier This Week, Older
- Click notification to navigate to the relevant screen

## All Notifications

**Why do we need it?** Admins and managers need to see the full notification history — not just their own notifications, but all notifications across all users and channels, for auditing, troubleshooting, and performance review.

**What is inside?**
- Search by notification title, recipient, or content
- Filter: by channel, by type, by recipient, by status (sent/delivered/read/failed), by date range
- Table: notification ID, type, channel, recipient, sent at, status, linked record
- Click to view full notification details
- Resend failed notifications button
- Export notifications list
- Total count for filtered view

## Notification Details

**Why do we need it?** When investigating a notification issue or reviewing communication quality, the team needs to see the full content of what was sent, not just a summary.

**What is inside?**
- Notification title and type
- Channel (Email, SMS, WhatsApp, Push)
- Recipient: name, email/phone
- Sent at timestamp
- Delivered at timestamp
- Read at timestamp (if applicable)
- Delivery status with status code and description
- Full notification content (email body, SMS text, WhatsApp message)
- Template used (linked)
- Triggered by: which event or automation created this notification
- Linked record (lead, customer, meeting, etc.)
- Retry button (if failed)

## Notification Preferences

**Why do we need it?** Different users have different information needs. A senior manager might want daily summary emails rather than individual alerts. An executive might want WhatsApp alerts for hot leads but not for routine system events. Personalisation prevents notification fatigue.

**What is inside?**
- Grouped list of all notification types
- For each type: toggle on/off, channel selector (Email, SMS, WhatsApp, Push), frequency selector (Immediate, Daily Digest, Weekly Summary)
- Important notifications: some cannot be turned off (security, approval deadlines) — shown as locked
- "Apply to all" quick set options
- Save Preferences button
- Reset to defaults button

## Email Notifications

**Why do we need it?** Email is the most formal communication channel. This screen manages the email notification system specifically — ensuring emails look professional, are delivered reliably, and are properly tracked.

**What is inside?**
- List of all email notification types and their templates
- Email sending statistics: sent, delivered, opened, bounced, unsubscribed
- Bounce management: customers whose emails are bouncing (update required)
- Email deliverability score
- From name and email address configuration
- Open rate and click rate per notification type
- Preview email in desktop and mobile format
- Test send button (send a test email to yourself)

## SMS Notifications

**Why do we need it?** SMS is the most reliable channel for time-sensitive alerts. This screen ensures SMS notifications are working correctly and gives visibility into delivery rates.

**What is inside?**
- SMS notification types and their templates
- SMS delivery statistics: sent, delivered, failed
- Failed SMS list with error codes
- DND filter status (ensures SMS are not sent to DND numbers, which would cause regulatory issues)
- SMS balance (credits remaining, if using a pay-per-SMS gateway)
- SMS character count per template (important for cost management)
- Retry failed SMS button

## WhatsApp Notifications

**Why do we need it?** WhatsApp is how most Indian customers communicate. This screen manages the WhatsApp Business API integration — templates, approvals, delivery tracking, and conversation management.

**What is inside?**
- WhatsApp Business API status
- Template list with approval status (WhatsApp templates must be pre-approved by Meta)
- Notification statistics: sent, delivered, read, replied
- Failed WhatsApp messages and reason
- Template submission to Meta for new templates
- Read rate per template type
- Conversation list: ongoing WhatsApp conversations (if two-way messaging is enabled)
- 24-hour session window management

## Push Notifications

**Why do we need it?** Push notifications are the fastest way to alert users inside the application — a new lead assigned, an approval needed, a meeting starting. This screen manages the push notification system and tracks engagement.

**What is inside?**
- Push notification types and templates
- Delivery statistics: sent, delivered, clicked
- Users who have disabled push notifications
- Browser permission status per user
- Test notification button
- Notification sound settings

## Announcements

**Why do we need it?** Sometimes the management or admin needs to communicate something to all users at once — a system downtime, a new policy, a celebratory milestone. The Announcements screen broadcasts this to all relevant users within the CRM.

**What is inside?**
- Create announcement form: title, message, urgency level, target audience (all users, specific roles, specific teams)
- Schedule announcement or send immediately
- Channel: CRM notification centre, email, or both
- Announcements history: all past announcements with date, sender, audience, and read rate
- Active announcements (shown as a banner to users)
- Expire announcement (removes it from active display)

## Reminders

**Why do we need it?** Reminders are the system's way of proactively telling people what needs to be done. Instead of relying on memory or manual follow-up, the system sends reminders automatically based on configured rules.

**What is inside?**
- List of all active reminder rules: what event triggers the reminder, how many days before, which channel, recipient
- Create reminder rule button
- Edit and delete reminder rules
- Reminder history: all reminders sent, for whom, and what action resulted
- Test reminder button (to verify a new rule before activating it)
- Pause/Resume rules

## Scheduled Notifications

**Why do we need it?** Scheduled notifications can be reviewed and corrected before they go out. If a payment reminder was scheduled to go to the wrong customer, this screen allows the admin to catch and fix it before it causes confusion.

**What is inside?**
- List of all notifications scheduled for future sending
- Each entry: type, recipient, channel, scheduled time, content preview
- Edit scheduled notification (change content, time, or recipient)
- Cancel/Delete scheduled notification
- Sort by scheduled time
- Filter by channel or type

## Notification Templates

**Why do we need it?** Consistent, professional communication requires well-written templates. This screen ensures that every meeting confirmation, payment reminder, and welcome message follows an approved format and tone, regardless of who triggers it.

**What is inside?**
- Template list by channel (Email, SMS, WhatsApp, Push)
- Each template: name, type, channel, status, last updated
- Template editor: full text with variable placeholders (e.g., {{customer_name}}, {{meeting_date}})
- Preview with sample data
- WhatsApp templates: submission status (Approved, Pending, Rejected by Meta)
- Create new template button
- Copy template button
- Activate/Deactivate template toggle

## Notification Analytics

**Why do we need it?** Understanding which notifications are effective helps the team improve communication strategy. High delivery but low open rate on emails might mean the subject line needs work. High WhatsApp read rate confirms it is the right channel for urgent alerts.

**What is inside?**
- Channel performance comparison: Email, SMS, WhatsApp, Push (delivery rate, open rate, response rate)
- Top performing notification types
- Worst performing notification types (low open rates)
- Trend charts: notification volume over time
- Unsubscribe rate for email notifications
- Best time of day for each notification type (based on historical open rates)
- A/B test results (if template variants were tested)
- Export analytics report

## Delivery Status

**Why do we need it?** When a batch of notifications is triggered — say, 500 payment reminders going out simultaneously — the team needs to monitor the sending progress and catch any failures in real time.

**What is inside?**
- Live sending queue: notifications currently being sent
- Delivery status breakdown: Queued, Sending, Delivered, Failed, Read
- Real-time delivery progress for bulk sends
- Failed notifications with error details
- Retry failed notifications button
- Gateway status indicators (email server, SMS gateway, WhatsApp API)
- Throughput rate: messages per minute being processed

## Failed Notifications

**Why do we need it?** Failed notifications mean someone did not receive an important alert — a meeting reminder, a payment notice, or an approval request. This screen ensures those failures are addressed so the communication still happens.

**What is inside?**
- List of all failed notifications: type, recipient, channel, failure timestamp, error code and reason
- Common failure reasons: Invalid phone number, Inactive email, WhatsApp not registered, Network timeout
- Retry button per notification
- Bulk retry button
- Mark as resolved (if alternate contact was made manually)
- Update recipient contact details link (to fix the underlying data issue)
- Filter by channel, date range, or failure reason

## Notification Audit

**Why do we need it?** For compliance and dispute resolution, the team sometimes needs to prove that a specific communication was sent and delivered. This audit log provides that evidence.

**What is inside?**
- Complete chronological log of all notification events
- Filter by event type, user, recipient, channel, date range
- Each entry: timestamp, action, recipient, channel, content reference, delivery status
- Cannot be edited or deleted
- Export as PDF or CSV
