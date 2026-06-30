# iFranchise CRM — Detailed Presentation Script for Management

---

## Opening

Sir, good morning. Today we are walking you through every screen of the iFranchise CRM system. This is a complete franchise sales and management platform built specifically for your team — from the moment a lead comes in, all the way through to franchise agreements, royalty payments, and brand performance. Every person in the company — the CEO, the sales team, the accounts team, the brand managers, and the admin — has a dedicated space in this system.

What we have built is not just a CRM. It is the entire operational backbone of iFranchise. Leads, customers, brands, franchise models, meetings, approvals, payments, documents, analytics, automation, user management, roles, audit trails — everything is connected and lives in one place.

We will go module by module, screen by screen. For each screen, we will tell you what it is, who uses it, what is on it, and what it does for the business. Please feel free to stop us at any point and ask questions.

---

# MODULE 1 — AUTHENTICATION

This module covers everything related to how users get into the system safely. There are seven screens here.

---

## Login

**What is this?** The Login screen is the entry point to the iFranchise CRM — the first screen every user sees when they open the application.

**Why do we need it?** Every employee who uses the system must prove their identity before accessing any data. This screen ensures that only authorised people can log in, protects sensitive customer and financial data, and creates a record of who accessed the system and when.

**What is inside?**
- iFranchise logo and company branding at the top
- A welcome message ("Welcome back to iFranchise CRM")
- Email address input field
- Password input field with a show/hide toggle
- A "Remember me" checkbox for trusted devices
- A "Forgot Password?" link
- A primary "Login" button
- Error messages shown inline if credentials are wrong (e.g., "Incorrect password" or "Account not found")
- A loading spinner shown while the system verifies credentials
- Footer with version number and copyright

**What to tell sir:** Sir, this is the Login screen. Every morning when Himani, Rahul, or any team member opens the CRM, this is the first thing they see. They enter their company email and password, click Login, and the system takes them straight to their personalised dashboard. If someone enters the wrong password too many times, the system automatically locks the account for security — we will show you that screen shortly as well.

---

## Forgot Password

**What is this?** The Forgot Password screen allows a user to request a password reset link when they cannot remember their password.

**Why do we need it?** Employees forget passwords regularly. Without this screen, the admin would have to manually reset every password, wasting time. This screen lets users handle it themselves in under two minutes, without bothering the IT team or admin.

**What is inside?**
- A short explanatory message ("Enter your registered email and we will send you a reset link")
- Email address input field
- A "Send Reset Link" button
- A back link to return to the Login screen
- A success state message shown after submission: "If this email is registered, you will receive a reset link shortly"
- An error state if the email field is left blank

**What to tell sir:** Sir, if someone forgets their password, they simply click "Forgot Password" on the login screen. They type their company email, click the button, and within a minute they get an email with a secure reset link. The screen does not confirm whether an email exists in the system or not — this is intentional, to prevent anyone from guessing which emails are registered.

---

## Reset Password

**What is this?** The Reset Password screen is where a user lands after clicking the secure link from the forgot-password email, allowing them to set a new password.

**Why do we need it?** Once a user requests a reset, they need a safe, guided place to enter and confirm their new password. This screen enforces password strength rules so users do not set weak passwords like "1234".

**What is inside?**
- A message confirming the reset link is valid ("You are setting a new password for youremail@company.com")
- New password input field with a strength indicator (Weak / Fair / Strong)
- Confirm new password input field
- Password rules displayed clearly (minimum 8 characters, one uppercase, one number, one special character)
- A "Set New Password" button
- Real-time validation — the confirm field turns red if it does not match
- A link to go back to Login if the user ended up here by mistake
- An expiry warning if the reset link is older than 30 minutes ("This link has expired. Please request a new one.")

**What to tell sir:** Sir, once the employee clicks the link in their email, this screen opens. They type their new password, and the system tells them in real time whether it is weak, fair, or strong. They confirm it, click the button, and their password is updated. If they wait too long and the link expires, the system tells them to request a new one. Everything is secure and time-limited.

---

## Two-Factor Authentication

**What is this?** The Two-Factor Authentication screen is an additional security step where the user must enter a one-time code sent to their phone or email, after successfully entering their password.

**Why do we need it?** Passwords alone can be stolen or guessed. Two-factor authentication (2FA) means that even if someone knows your password, they still cannot log in without your phone. For a CRM with sensitive customer data, financial records, and agreements, this is an important security layer.

**What is inside?**
- A message explaining the step: "A 6-digit code has been sent to your registered mobile number ending in XXXX"
- Six individual digit input boxes (or a single 6-digit field)
- A countdown timer showing how long the code is valid (typically 5 minutes)
- A "Verify" button
- A "Resend Code" link that becomes active after 30 seconds
- An option to choose a different verification method (e.g., email instead of SMS) if configured
- Error message if the wrong code is entered ("Incorrect code. 2 attempts remaining.")

**What to tell sir:** Sir, for users who have two-factor authentication enabled — which we recommend for managers, admins, and accounts team — after they enter their password, they get a 6-digit code on their phone. They type it here and click Verify. This means even if someone steals a password, they cannot get in without the employee's phone. This is the same technology used by banks and Gmail.

---

## Session Expired

**What is this?** The Session Expired screen appears automatically when a user's login session times out due to inactivity, prompting them to log in again.

**Why do we need it?** If an employee walks away from their computer and leaves the CRM open, we do not want their session to stay active indefinitely. After a set period of inactivity (configurable — typically 30 minutes), the system logs them out and shows this screen to protect data.

**What is inside?**
- A clear message: "Your session has expired due to inactivity"
- A sub-message explaining what happened and reassuring the user their data is safe
- An email field pre-filled with the user's email (so they do not have to type it again)
- Password input field
- A "Log In Again" button
- A link to go to the full login page if they prefer

**What to tell sir:** Sir, if Himani opens the CRM in the morning, gets busy with phone calls, and comes back two hours later, the system will have logged her out automatically. She will see this screen telling her the session expired. She just types her password — her email is already filled in — and she is back inside immediately. Her work is not lost, the system just made sure no one else could access the open browser.

---

## Account Locked

**What is this?** The Account Locked screen appears when a user has entered an incorrect password too many times, causing the system to temporarily lock their account as a security measure.

**Why do we need it?** This prevents brute-force attacks where someone tries hundreds of password combinations to break into an account. After a certain number of failed attempts (typically 5), the system locks the account and requires admin intervention or a timed cooldown period to unlock it.

**What is inside?**
- A clear warning message: "Your account has been locked"
- An explanation of why it was locked ("Too many failed login attempts")
- Information on how long until the account auto-unlocks (e.g., "Try again after 30 minutes") or instructions to contact the admin
- A "Contact Admin" link or button that opens a pre-filled email or support request
- A link to go back to the login page
- Timestamp of when the account was locked

**What to tell sir:** Sir, if someone tries to log into a team member's account five times with wrong passwords — whether by mistake or maliciously — the system locks that account and shows this screen. The real employee will know something is wrong and can contact the admin to unlock it. This protects the business from unauthorised access attempts.

---

## Password Changed

**What is this?** The Password Changed screen is a confirmation screen that appears immediately after a user successfully resets or changes their password.

**Why do we need it?** Users need a clear confirmation that their password change worked. Additionally, this screen warns them if they did not make the change — so if someone else changed their password without permission, they know immediately and can act.

**What is inside?**
- A success icon (green checkmark) and message: "Your password has been changed successfully"
- The date and time the password was changed
- The device and location from which the change was made
- A security notice: "If you did not make this change, contact your administrator immediately"
- A "Log In Now" button that takes them to the login screen
- An option to view account security settings

**What to tell sir:** Sir, after someone sets a new password, they land on this confirmation screen. It shows them the exact time the change happened and which device it was done from. If Himani sees this screen but did not change her password herself, she knows her account may have been compromised and can alert the admin right away. It is a small screen but an important security checkpoint.

---

# MODULE 2 — DASHBOARDS

The Dashboard module has eight different dashboards — one for each major role in the organisation. Each person sees a version of the system tailored to their responsibilities. This is one of the most important modules because it is what every user sees the moment they log in.

---

## CEO Dashboard

**What is this?** The CEO Dashboard is the top-level executive view of the entire iFranchise business — a single screen that shows the most important numbers across all departments.

**Why do we need it?** The CEO does not have time to click through dozens of screens to understand the health of the business. This dashboard puts every critical number in one place — total leads, total customers, revenue, active brands, franchise models sold, and team performance — so a decision can be made in seconds.

**What is inside?**
- Total leads this month vs last month with percentage change
- Total customers (active franchisees) count
- Total revenue this month, this quarter, and this year
- Number of active brands on the platform
- Number of franchise models published
- Lead-to-customer conversion rate
- Top performing sales executive this month
- Top performing brand by leads generated
- Pending approvals count (highlighted in amber if over a threshold)
- Meetings scheduled today and this week
- Geographic heat map showing lead distribution by state
- Revenue trend chart (last 12 months, bar or line graph)
- Team performance snapshot — top 5 performers ranked
- Recent activity feed (last 10 actions across the system)
- Quick action buttons: "View All Leads", "View Revenue Report", "View Team Performance"

**What to tell sir:** Sir, this is your personal dashboard. The moment you log in, you see the health of the entire business in one glance. Revenue this month, how many leads came in, how many converted, which brand is performing best, which salesperson is on top — everything is right here. You do not need to ask anyone for a report. If something looks off — say, revenue is down 15% from last month — you can click on that number and drill straight into the details.

---

## Command Center Dashboard

**What is this?** The Command Center Dashboard is the real-time operational control panel used by operations managers or senior admins to monitor live activity across the entire system.

**Why do we need it?** While the CEO dashboard shows summary numbers, the Command Center shows what is happening right now — who is logged in, what calls are active, which leads just came in, which meetings are starting, and whether any alerts or system issues require attention. It is the nerve center for day-to-day operations.

**What is inside?**
- Live user count (how many users are currently logged into the CRM)
- Real-time lead feed — new leads arriving in the last hour with source and assigned owner
- Active calls count from the call intelligence module
- Upcoming meetings in the next 2 hours — names, attendees, type
- Pending approval requests with urgency flags
- System health indicators (API status, email service, SMS service, WhatsApp service)
- Failed automation runs in the last 24 hours
- Leads with no follow-up in over 48 hours (at-risk leads counter)
- Today's tasks across all users — total count, completed, and pending
- Notifications queue — unread, failed, and pending notifications
- Recent logins with name, role, time, and device
- Quick filters to zoom into specific teams or branches

**What to tell sir:** Sir, this dashboard is for the operations team — the people who need to know what is happening right now. If five leads came in the last hour and nobody has called them yet, this screen will show that. If the WhatsApp service went down, the system health panel will show a red indicator. It is like a control room — everything that needs attention is visible in one place, in real time.

---

## Employee Performance Dashboard

**What is this?** The Employee Performance Dashboard gives managers a consolidated view of how each individual team member is performing across leads, meetings, conversions, and task completion.

**Why do we need it?** Managers need to know who on their team is hitting targets and who is struggling — without having to pull individual reports for each person. This screen makes performance review fast, fair, and data-driven.

**What is inside?**
- Dropdown to filter by time period (today, this week, this month, this quarter)
- Dropdown to filter by team or branch
- Employee cards showing: name, designation, photo, leads assigned, leads called, meetings done, conversions this month, and a performance score
- A leaderboard ranking employees by conversion rate
- Individual metrics: calls made, emails sent, meetings attended, tasks completed, leads moved to next stage
- Attendance and login activity (days logged in this month)
- Comparison chart showing each employee against their monthly target
- Highlight badges: "Top Performer", "Most Calls", "Most Meetings", "Most Conversions"
- Export button to download the performance report as PDF or Excel

**What to tell sir:** Sir, this is where the sales manager reviews the whole team without calling individual meetings. You can see at a glance that Rahul closed 8 customers this month, Priya attended 22 meetings, and Vikram has not called a single lead in the last 3 days. The system shows you who needs coaching and who deserves recognition — all in one screen.

---

## Team Lead Dashboard

**What is this?** The Team Lead Dashboard is a personalised view for team leaders that shows their own team's activity, assigned leads, meeting load, and targets.

**Why do we need it?** A team lead manages 4–8 sales executives. They need to see their team's pipeline, know which leads are stuck, track who is behind on meetings, and see how close the team is to hitting the monthly target — without seeing data from other teams.

**What is inside?**
- Monthly target progress bar for the team (e.g., "12 of 20 conversions done — 60%")
- Team member list with quick status: active today, number of leads in pipeline, meetings today
- New leads assigned to team in the last 24 hours
- Leads with no activity in 72 hours (overdue follow-ups)
- Upcoming team meetings today and tomorrow
- Pending tasks assigned to team members
- Pending approvals raised by the team
- Team conversion funnel: leads → contacted → meeting scheduled → proposal sent → converted
- Quick action: "Assign Lead", "Schedule Meeting", "View Team Reports"
- A chat or notes panel to leave instructions for team members

**What to tell sir:** Sir, the team lead sees exactly what their team needs. If they see that two leads have been sitting untouched for 3 days, they can immediately reassign them. If the team is at 60% of their monthly target with one week left, the team lead knows they need to push harder. This screen keeps the team accountable without micromanaging.

---

## Sales Executive Dashboard

**What is this?** The Sales Executive Dashboard is the personal workspace for individual sales executives — it shows their own leads, today's schedule, pending tasks, and their personal performance for the month.

**Why do we need it?** A sales executive manages 20–50 leads at any given time and needs to know exactly what to do when they sit down in the morning. This dashboard organises their day — who to call, which meetings are coming up, which leads they have not followed up on, and how they are tracking against their target.

**What is inside?**
- Personal monthly target gauge: conversions done vs target
- Today's tasks and follow-ups — a prioritised list
- Upcoming meetings today (time, lead name, type — call or in-person)
- New leads assigned to them since they last logged in
- Leads requiring immediate attention (not contacted in 48 hours, flagged as hot)
- Quick dial buttons — one-click to call a lead from the dashboard
- Recent activity: last 10 actions they took in the system
- Their personal stats for the month: calls made, emails sent, meetings done, conversions
- Their rank in the team leaderboard
- Notifications and reminders

**What to tell sir:** Sir, this is what Himani sees every morning. She can see she has 3 meetings today, 5 leads to follow up, and she is at 7 out of 10 conversions for the month. She can click any lead name directly from the dashboard and start working. It removes the confusion of "what should I do next?" and gives her a clear, focused starting point every day.

---

## Brand Owner Dashboard

**What is this?** The Brand Owner Dashboard is a dedicated view for the brand owners or brand managers who manage a specific franchise brand within the iFranchise portfolio.

**Why do we need it?** Brand owners need visibility into how their brand is performing — how many leads are interested, how many franchise locations have opened, royalty payments coming in, and marketing performance. This is their personalised view without exposing other brands' data.

**What is inside?**
- Brand name and logo at the top
- Total leads interested in this brand (this month and all time)
- Active franchisees running under this brand
- Pending franchise applications for this brand
- Royalty payments received this month vs expected
- Expansion opportunities flagged — new territories showing demand
- Marketing campaigns active for this brand
- Documents pending signature or approval for this brand
- Upcoming meetings related to this brand
- Training sessions scheduled for franchisees
- Recent franchise inquiries with lead names and contact details
- Performance comparison: this brand vs the overall portfolio average

**What to tell sir:** Sir, if we have a brand partner like, say, a food chain or an education company, this is their window into the CRM. They can see how many people have inquired about their franchise, how many have signed up, what royalties have come in this month, and how their franchisees are performing. We can give them login access and they see only their brand's data — no one else's.

---

## Accounts Dashboard

**What is this?** The Accounts Dashboard is the financial overview screen used by the accounts team to monitor all money-related activity — payments, invoices, pending dues, and revenue.

**Why do we need it?** The accounts team needs a daily snapshot of the financial health of the business. How much money came in today? Which payments are overdue? Which invoices have not been sent yet? This screen answers all those questions without needing to run a report.

**What is inside?**
- Total revenue collected this month (and comparison to last month)
- Total pending dues — number of customers and total amount
- Invoices generated this month vs invoices paid
- Payments received today (running total)
- Overdue payments — count and total value, highlighted in red
- Payments pending approval
- GST summary snapshot for the current month
- Top customers by payment value this month
- Recent payment transactions (last 10 with customer name, amount, date, status)
- Upcoming payment due dates in the next 7 days
- Quick actions: "Record Payment", "Generate Invoice", "View Pending Dues"

**What to tell sir:** Sir, the accounts team uses this dashboard every morning. They can immediately see if any large payments are overdue, how much revenue has come in this month versus last month, and which invoices are still waiting. If the total pending dues number is high, they know they need to make collection calls. It is a financial pulse check for the business.

---

## Admin Dashboard

**What is this?** The Admin Dashboard is the system administration view used by the CRM administrator to monitor user activity, system health, pending configurations, and access control.

**Why do we need it?** The admin is responsible for keeping the CRM running smoothly — managing users, configuring settings, monitoring for errors, and ensuring data integrity. This dashboard gives them a complete system overview so they can spot problems before they affect the team.

**What is inside?**
- Total active users count and users online right now
- New user accounts created this week
- Users with login issues (locked accounts, failed logins)
- Pending user invitations not yet accepted
- System health panel: email service, SMS, WhatsApp, API, database status
- Recent audit log entries (last 10 system events)
- Automation runs today — successful and failed
- Storage usage (documents, images, files) with a usage bar
- Pending approval workflows requiring admin action
- Recent settings changes (who changed what and when)
- Roles and permissions: any recent role changes
- Quick actions: "Add User", "View Audit Log", "System Settings", "View All Roles"

**What to tell sir:** Sir, this is the admin's control room. If an employee cannot log in, the admin can see it here. If the email service stopped working, this screen will show a red indicator. If someone changed a setting or deleted a record, the audit log summary shows it. The admin does not have to go through ten menus to know the system status — everything is on this one screen.

---

# MODULE 3 — LEAD MANAGEMENT

This is the heart of the sales operation. There are 17 screens in this module covering every aspect of managing a lead from arrival to conversion.

---

## Lead Dashboard

**What is this?** The Lead Dashboard is the main overview screen for the entire lead management module, showing key metrics about the lead pipeline at a glance.

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

**What to tell sir:** Sir, this is the Lead Dashboard — the starting point for Lead Management. When Himani or the sales manager opens Lead Management, this is the first screen they see. In one look they can see how many leads came in this week, which sources are performing best, how many leads are stuck without a follow-up, and what the conversion rate looks like this month. If leads from Facebook are converting at 2% but referral leads are converting at 40%, this screen tells them that story visually.

---

## All Leads (Lead List)

**What is this?** The All Leads screen is a comprehensive, searchable, filterable list of every lead in the system.

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

**What to tell sir:** Sir, this is where all the leads live. The list can have hundreds of leads and the team can filter it any way they want — show me only Facebook leads assigned to Himani that are in the "Meeting Scheduled" status from the last 30 days. Click any lead name and the full details open. The red dates on the follow-up column tell the manager immediately which leads are overdue without opening anything. The bulk select feature means a manager can reassign 20 leads to a new executive in about 10 seconds.

---

## Lead Kanban

**What is this?** The Lead Kanban screen shows all leads laid out on a visual drag-and-drop board organised by their current stage in the sales pipeline.

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

**What to tell sir:** Sir, this is the Kanban view of the pipeline. Instead of reading a list, the sales manager can see — visually — that there are 45 leads stuck in "Contacted" and only 8 have moved to "Meeting Scheduled." That tells them the team is calling leads but not converting those calls into meetings. A lead card can be dragged from "Contacted" to "Meeting Scheduled" and the system updates the status and logs the change automatically. It is a very visual, intuitive way to manage the pipeline.

---

## Create Lead

**What is this?** The Create Lead screen is a form where a new lead is manually entered into the CRM by a team member.

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

**What to tell sir:** Sir, when an executive gets a walk-in or receives a referral call, they open this form and fill in the details. Name, phone, email, which brand they are interested in, where they are from, how they heard about us — it takes about 2 minutes to fill. Once they click Save, the lead appears in the system, an automatic notification goes to the assigned executive, and the lead journey begins.

---

## Lead Details

**What is this?** The Lead Details screen is the complete profile page of a single lead, showing everything known about that person and every action taken with them.

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

**What to tell sir:** Sir, this is the full profile of one lead. If Himani is about to call a prospect, she opens this screen and she can see that this person was contacted 3 times, attended one meeting 2 weeks ago, is interested in a food brand, has a budget of 15 lakhs, and the last note says "wants to visit the store before deciding." All of that context helps her have a much better conversation. Everything is in one place — no need to check Excel, emails, or notebooks.

---

## Edit Lead

**What is this?** The Edit Lead screen is the same form as Create Lead but pre-populated with the existing lead's data, allowing any of the details to be updated.

**Why do we need it?** Lead information changes over time. A prospect who was not interested 3 months ago may now have a bigger budget. Their phone number may have changed. Their brand preference may have shifted. This screen lets the team keep lead data accurate and current.

**What is inside?**
- All the same fields as the Create Lead form, pre-filled with current data
- Visual indicators showing which fields were last updated and when
- An "Update Reason" field (optional note explaining why the update was made)
- Change history visible at the bottom (who changed what and when)
- Save Changes button
- Cancel button (reverts to the last saved version)

**What to tell sir:** Sir, if a lead's phone number changes or they decide they want to explore a different brand, the executive can open the Edit screen, update the relevant fields, and save. The system keeps a history of every change — so if a manager ever asks "why was this lead's investment range changed?", the audit trail is right there.

---

## Lead Timeline

**What is this?** The Lead Timeline screen shows a chronological, visual history of every event and interaction related to a specific lead, from creation to the present.

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

**What to tell sir:** Sir, the Timeline is like a story of the lead's journey. You can scroll through and see: lead came in on March 1st from Facebook, Himani called on March 2nd, scheduled a meeting for March 5th, meeting happened, lead asked for more time, follow-up set for March 15th — and so on. If a lead gets reassigned to Rahul, he does not start from scratch. He reads the timeline and knows exactly what has been done.

---

## Lead Assignment

**What is this?** The Lead Assignment screen is where managers can assign or reassign leads to specific sales executives, either one at a time or in bulk.

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

**What to tell sir:** Sir, when a manager wants to make sure leads are evenly distributed, they come to this screen. They can see that Rahul has 60 leads and Priya only has 20, and balance the load. Or if someone is on leave, they can select all their leads and reassign in bulk. The system automatically notifies the executive that new leads have been assigned to them.

---

## Follow-Up

**What is this?** The Follow-Up screen manages all the follow-up tasks and reminders linked to leads — what needs to be done, when, and by whom.

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

**What to tell sir:** Sir, this is the follow-up management screen. Every morning, Himani can open this and see exactly who she needs to call today. If she postpones a follow-up, the system logs that and reminds her on the new date. Managers can see all overdue follow-ups across the team — if someone has 15 overdue follow-ups, that is a red flag the manager needs to address immediately.

---

## Schedule Meeting

**What is this?** The Schedule Meeting screen is a form used to create a meeting appointment linked to a specific lead.

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

**What to tell sir:** Sir, when a lead agrees to a meeting, the executive opens this screen, fills in the date, time, location, and agenda, and clicks Save. The lead automatically gets an email and WhatsApp message confirming the meeting. The executive gets a reminder notification 30 minutes before. The meeting is logged to the lead profile, so anyone who looks at this lead later can see it in the timeline.

---

## Meeting History

**What is this?** The Meeting History screen shows all past meetings linked to a specific lead, along with their outcomes and any notes recorded.

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

**What to tell sir:** Sir, this is the full meeting history for a lead. If a prospect has had four meetings over two months, this screen shows all four with what was discussed and what came out of each one. Before the fifth meeting, the executive reads through this and knows exactly where the conversation last left off, what objections were raised, and what was promised. It makes the conversation much more informed and professional.

---

## Documents (Lead)

**What is this?** The Lead Documents screen is a dedicated document repository for a single lead, where all files related to that lead are stored and managed.

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

**What to tell sir:** Sir, any document that gets shared with or received from a lead is stored right here — attached to their profile. If the prospect sends their bank statement to show investment capacity, the executive uploads it here. If we send them a franchise brochure, that is stored here too. When the lead eventually converts, all these documents move over to the customer profile automatically.

---

## Notes (Lead)

**What is this?** The Lead Notes screen is where executives write and save internal notes about a lead — observations, conversation summaries, personal details, and any context that does not fit into a standard form field.

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

**What to tell sir:** Sir, notes are where the human intelligence of the sales process lives. Himani can write "Lead mentioned he visited the Jaipur store and was impressed — follow up with Jaipur franchisee testimonial" and this note stays attached to the lead forever. Even if the lead is reassigned six months later, that note is there. This is the kind of context that turns a cold follow-up into a warm, personalised conversation.

---

## Communication (Lead)

**What is this?** The Lead Communication screen shows a full log of all messages — emails, SMS, and WhatsApp — sent to or received from a lead through the CRM.

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

**What to tell sir:** Sir, every message ever sent to a lead from our CRM is tracked here. If Himani sent a WhatsApp to a lead last Monday with the franchise brochure, that message is visible here. If the lead replied, that reply is shown too. This prevents the situation where two executives both send the same message to the same lead, or where a lead complains they were never contacted and the team has no evidence of prior communication.

---

## Convert Lead

**What is this?** The Convert Lead screen is the process through which a qualified lead is officially converted into a customer in the CRM, marking the completion of the sales stage.

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

**What to tell sir:** Sir, when a lead is ready to sign up, the executive opens this screen. They confirm the brand, the model, the territory, the investment amount, and click Convert. The system does everything else — it marks the lead as converted, creates a new customer record, generates an invoice for the success fee, and sends notifications to the CEO and accounts team. The lead's entire history — all notes, meetings, documents — is carried over to the new customer profile automatically.

---

## Archive Lead

**What is this?** The Archive Lead screen allows a team member to remove a lead from the active pipeline without permanently deleting it, typically because the lead has gone cold, is not reachable, or is no longer interested.

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

**What to tell sir:** Sir, not all leads work out, and that is fine. When a lead clearly has no intention of going further, the executive archives them with a reason. The lead disappears from the active pipeline view but is never deleted. If the same person comes back a year later or if we want to run a revival campaign on archived leads, all the history is there. Archiving keeps the active pipeline clean and the numbers meaningful.

---

## Activity Log (Lead)

**What is this?** The Lead Activity Log is a detailed, system-generated record of every single action performed on a lead — every edit, status change, assignment, note added, document uploaded, and message sent.

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

**What to tell sir:** Sir, the Activity Log is the non-negotiable truth about what happened to a lead. If there is ever a question about who changed a lead's status, who deleted a note, or when a document was uploaded — this log has the answer. It cannot be edited or deleted. If Himani marked a lead as converted but the lead claims they never agreed, the log shows exactly what happened and when.

---

# MODULE 4 — CUSTOMERS

Once a lead converts, they become a customer. The Customers module manages every aspect of the ongoing relationship with franchisees. There are 14 screens.

---

## Customer Dashboard

**What is this?** The Customer Dashboard is the overview screen for the entire customer base, showing key statistics about active franchisees, customer health, and financial standing.

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

**What to tell sir:** Sir, this is the Customer Dashboard. The moment someone is converted from a lead, they appear here as a customer. The team can see how many franchisees we have, which ones are behind on payments, which agreements are coming up for renewal, and which customers have not been contacted in a while. It is the starting point for post-sales relationship management.

---

## Customer List

**What is this?** The Customer List is a searchable, filterable table of all customers (franchisees) in the system.

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

**What to tell sir:** Sir, this is the full list of all franchisees. If the accounts team wants to see all customers who are overdue on royalty payments, they filter by "Payment Status: Overdue" and get the list instantly. If a manager wants all franchisees under a particular brand, one click on the brand filter shows them. Clicking any name opens the full customer profile.

---

## Create Customer

**What is this?** The Create Customer screen is the form used to manually add a new customer record when a conversion does not happen automatically from the lead module.

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

**What to tell sir:** Sir, while most customer records are auto-created when a lead converts, this form exists for onboarding existing franchisees or for edge cases. The accounts and onboarding team fill this in once, and then everything — payments, meetings, agreements — flows from this record.

---

## Edit Customer

**What is this?** The Edit Customer screen allows authorised users to update any information in an existing customer's profile.

**Why do we need it?** Customer information changes — they move to a new territory, they change their contact number, they upgrade their franchise model. This screen ensures the data stays accurate throughout the franchise relationship.

**What is inside?**
- All fields from the Create Customer form, pre-populated
- Section-level editing (can edit just one section without touching others)
- Change log at the bottom showing who changed what and when
- "Reason for Update" field
- Linked franchise agreement note: "Changing the royalty rate may require a new agreement"
- Save Changes and Cancel buttons

**What to tell sir:** Sir, if a customer moves their franchise location or upgrades their model, the relationship manager updates the profile here. The system keeps a full history of every change, so if there is ever a question about "when was this royalty rate last changed and who approved it?", the answer is right here.

---

## Customer Details

**What is this?** The Customer Details screen is the complete profile page for a franchisee, showing all their business information, financial summary, agreement status, and relationship history.

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

**What to tell sir:** Sir, this is the full customer profile. If the accounts manager wants to check on a franchisee from Mumbai, they open this screen and immediately see their agreement end date, last payment date, how much they owe, and what was discussed in the last meeting. Everything is in one place — no digging through emails or spreadsheets.

---

## Customer Timeline

**What is this?** The Customer Timeline shows the chronological history of all events, interactions, and milestones in a customer's relationship with iFranchise.

**Why do we need it?** A franchisee relationship can last years. The timeline gives a complete story — from when they first became a customer, to every payment, meeting, document, and communication since then. This is critical for relationship continuity and dispute resolution.

**What is inside?**
- Vertical timeline with events from newest to oldest
- Event types: Payment Received, Meeting Done, Agreement Signed, Royalty Updated, Document Uploaded, Note Added, Communication Sent, Support Request, Escalation, Anniversary Milestone
- Each event shows: date, type, description, performed by, and linked records
- Milestone markers: 1-year anniversary, 5-year anniversary, agreement renewals
- Filter by event type or date range
- Export to PDF

**What to tell sir:** Sir, the Customer Timeline reads like the story of the franchisee's relationship with us. You can see when they signed, when they paid, when they upgraded, when they had an issue and how it was resolved. If a brand owner asks "how has this franchisee been doing over the last 2 years?", this screen answers that in seconds.

---

## Customer Documents

**What is this?** The Customer Documents screen stores all files linked to a specific customer — agreements, ID proofs, financial records, and any other relevant documents.

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

**What to tell sir:** Sir, every document related to a franchisee is stored here — signed agreements, their KYC documents, payment receipts. If a franchisee ever disputes a term, the signed agreement is right here. If a document is about to expire, the system flags it so the team can follow up before there is a lapse.

---

## Customer Agreements

**What is this?** The Customer Agreements screen shows all franchise agreements signed between iFranchise and a specific customer, with full contract details and status.

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

**What to tell sir:** Sir, all franchise agreements are managed here. When an agreement is about to expire, the system automatically flags it. The relationship manager can see at a glance which customers have active agreements, which ones are expired and need renewal, and what the key terms were. Creating a renewal agreement can be initiated right from this screen.

---

## Customer Payments

**What is this?** The Customer Payments screen shows the full payment history and upcoming dues for a specific customer, including royalties, franchise fees, and any other charges.

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

**What to tell sir:** Sir, this is the payment history for one customer. The accounts team can see every rupee paid, every invoice raised, and what is still outstanding. If royalty for March has not come in and it is April 15th, the overdue row is right there in red. One click and they can record the incoming payment, or send a payment reminder.

---

## Customer Franchise

**What is this?** The Customer Franchise screen shows the detailed operational profile of the franchisee's business — their outlet details, performance metrics, and franchise-specific information.

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

**What to tell sir:** Sir, this screen shows how the franchisee's actual business is running. Are they selling? Are they compliant with brand standards? Have they done their staff training? This operational view is important for brand owners and franchise management teams. If a franchisee is underperforming, the team can see it here and intervene early.

---

## Customer Communication

**What is this?** The Customer Communication screen shows all messages — emails, SMS, and WhatsApp — exchanged between the iFranchise team and a specific customer.

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

**What to tell sir:** Sir, just like with leads, every message to a customer is logged here. If the accounts team sent a payment reminder on the 1st of the month and the customer claims they never received it, the delivery status here shows whether it was delivered and read. Communication history protects both sides and keeps the team professional.

---

## Customer Notes

**What is this?** The Customer Notes screen is where the relationship manager and team write internal notes about a customer — observations, meeting summaries, issues, and context.

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

**What to tell sir:** Sir, the Notes screen for a customer is the informal but extremely valuable context bank. When the CEO calls a franchisee for a relationship check-in, they can glance at this screen and know the last 5 important things about that relationship. It personalises what could otherwise be a transactional conversation.

---

## Customer Tasks

**What is this?** The Customer Tasks screen manages all to-do items and action items related to a specific customer account.

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

**What to tell sir:** Sir, the Tasks screen makes sure that all the ongoing work for a customer account stays organised. If the relationship manager needs to send the renewal agreement by the 15th, remind the customer about a payment by the 10th, and schedule a quarterly review call — all three tasks are created here, assigned, and tracked. Nothing falls through the cracks.

---

## Customer Activity Log

**What is this?** The Customer Activity Log is a complete, tamper-proof record of every action taken on a customer record — every edit, payment recorded, document uploaded, note written, and message sent.

**Why do we need it?** For legal compliance and internal accountability, every action on a customer record must be traceable. This log is the definitive record for disputes, audits, and performance reviews.

**What is inside?**
- Chronological log of all system actions on this customer record
- Action type, performed by, date and time, old and new values
- Filter by action type, user, or date range
- Cannot be edited or deleted by anyone
- Export as PDF or CSV for audit purposes
- Linked to the main system audit trail

**What to tell sir:** Sir, the Activity Log for a customer is the definitive record. If someone changes a customer's royalty rate without authorisation, this log shows who did it, when, and from which device. Completely tamper-proof and always available.

---

# MODULE 5 — BRANDS

The Brands module manages all franchise brands that iFranchise works with. There are 17 screens.

---

## Brand Dashboard

**What is this?** The Brand Dashboard is the overview screen for the entire brand portfolio, showing how all brands are performing collectively.

**Why do we need it?** iFranchise likely manages multiple franchise brands. The Brand Dashboard shows the leadership team which brands are generating the most leads, which have the most active franchisees, and which are underperforming — all in one screen.

**What is inside?**
- Total active brands count
- Total leads across all brands this month
- Leads by brand — bar chart comparing all brands
- Active franchisees per brand
- Revenue by brand (franchise fees and royalties)
- Top performing brand of the month
- Brands with lowest lead volume (may need marketing push)
- New brands added this quarter
- Brands with pending approvals
- Upcoming brand-related meetings
- Quick actions: Add Brand, View All Brands

**What to tell sir:** Sir, this is the Brand Dashboard. If iFranchise has, say, 12 brands in its portfolio, this screen shows how all 12 are performing side by side. Which brand is getting the most inquiries? Which one has the most franchisees? Which brand's royalty collection is behind? All of this is visible at a glance.

---

## Brand List

**What is this?** The Brand List is a complete directory of all franchise brands managed in the iFranchise CRM.

**Why do we need it?** The team needs a central place to find and access any brand's profile quickly, especially as the portfolio grows.

**What is inside?**
- Search bar: search by brand name, category, or industry
- Filter: by industry, status (Active, Inactive, Pending Launch), country
- Brand cards or table with: logo, brand name, industry, active franchisees count, leads this month, status
- Sort by: name, performance, newest, most franchisees
- Click brand to open full Brand Details
- Add New Brand button
- Export brand list button

**What to tell sir:** Sir, this is the full list of all brands. Click on any brand card and you get the full brand profile — everything from the brand story to investment requirements, performance data, franchise models, and documents.

---

## Create Brand

**What is this?** The Create Brand screen is the form for adding a new franchise brand to the iFranchise portfolio.

**Why do we need it?** When iFranchise takes on a new brand partnership, all the brand details need to be entered into the system so it can be linked to leads, franchise models, and campaigns.

**What is inside?**
- Brand Information: name, tagline, description, founding year, website URL
- Industry and category (dropdown)
- Brand logo upload
- Brand images gallery upload
- Contact person at the brand (name, email, phone, designation)
- Business model overview
- Initial franchise fee range
- Royalty structure overview
- Marketing support offered
- Training support offered
- Exclusivity policy
- Territory availability
- Status: Draft, Active, Inactive
- Save and Publish or Save as Draft buttons

**What to tell sir:** Sir, when iFranchise signs up a new brand, the brand manager comes to this screen and fills in all the details — what the brand is, what industry it is in, what it costs to franchise, what support they provide. Once saved, this brand appears in lead forms, brand lists, and campaign materials throughout the system.

---

## Edit Brand

**What is this?** The Edit Brand screen allows authorised users to update any information about an existing brand.

**Why do we need it?** Brand details change — they may update their investment requirements, add new territories, change their royalty structure, or rebrand. This screen keeps the brand information current.

**What is inside?**
- All Create Brand fields, pre-populated
- Change history log
- Version notes field
- Publish changes button (if changes require approval, goes to approval workflow)
- Preview how the brand appears to leads and sales team

**What to tell sir:** Sir, if a brand changes its franchise fee or opens up new territories, the brand manager updates it here. If any change requires management approval before going live — say, a royalty rate change — the system can route it through an approval workflow before publishing.

---

## Brand Details

**What is this?** The Brand Details screen is the complete information page for a single brand, accessible to sales executives and managers when they need to know everything about that brand.

**Why do we need it?** Sales executives need accurate, complete brand information when talking to prospects. This screen is the authoritative source for all brand facts — model options, fees, territories, support, and performance.

**What is inside?**
- Brand overview section: name, logo, tagline, industry, status
- Key financials: franchise fee range, royalty percentage, marketing fee, success fee
- Franchise model options available for this brand
- Territory availability map or list
- Support structure: training days, operational support, marketing support
- Performance stats: total franchisees, leads this month, conversion rate, average revenue per franchisee
- Documents section: brand brochure, FDD, marketing materials
- Gallery: brand images, outlet photos
- Recent news or updates about the brand
- Contact information for the brand team

**What to tell sir:** Sir, when Himani needs to pitch a particular food brand to a prospect, she opens this page and has everything she needs — the story of the brand, the investment required, the territories available, how many existing franchisees they have, and success stories. She can also download the brand brochure from here to share with the prospect.

---

## Brand Profile

**What is this?** The Brand Profile screen is the public-facing or partner-facing version of the brand's information page, similar to Brand Details but formatted for external sharing or brand owner access.

**Why do we need it?** Brand owners need to see how their brand is presented within the iFranchise platform. This screen shows the curated profile as it appears in presentations and investor decks.

**What is inside?**
- Styled brand profile layout with logo, hero image, and tagline
- Brand story paragraph
- Why franchise this brand? — key value propositions
- Testimonials from existing franchisees
- Success metrics: number of outlets, years operating, states present
- Investment overview (non-sensitive summary)
- Contact details for inquiries
- Edit Profile button (for brand managers)
- Preview how it looks on the portal

**What to tell sir:** Sir, the Brand Profile is the polished, presentable version of the brand's information. This is what a potential franchisee sees when they are evaluating the brand. The brand owner can review and approve this profile to make sure everything is accurate and looks good.

---

## Brand Opportunities

**What is this?** The Brand Opportunities screen shows all current franchise opportunities available under a specific brand — which territories are open, which models are available, and what the expansion roadmap looks like.

**Why do we need it?** Sales executives need to know what is actually available to offer to prospects. Not all territories may be open. Some franchise models may be fully allocated. This screen shows the current openings so the team makes accurate offers.

**What is inside?**
- List of available territories for this brand
- Each territory: city/state, opportunity type (new unit, resale, expansion), status
- Available franchise models for each territory
- Estimated investment range per territory
- Market potential notes
- Leads already interested in each territory
- Mark territory as Reserved or Sold buttons
- Add New Opportunity button
- Opportunity status: Open, Reserved, Closed

**What to tell sir:** Sir, this is where we track what is actually available to sell for each brand. If Jaipur is already taken by a franchisee, the sales team needs to know that immediately so they do not promise Jaipur to another prospect. This screen keeps the territory availability current and prevents conflicts.

---

## Brand Investment

**What is this?** The Brand Investment screen shows the detailed investment requirements and financial breakdown for setting up a franchise under a specific brand.

**Why do we need it?** Prospects ask detailed questions about the investment. Sales executives need a reliable, brand-approved breakdown of every cost — franchise fee, setup cost, working capital, equipment, branding — so they give accurate figures.

**What is inside?**
- Total investment range (minimum and maximum)
- Investment breakdown table:
  - Franchise fee
  - Setup and interior cost
  - Equipment and machinery
  - Initial stock/inventory
  - Branding and signage
  - Working capital required
  - Miscellaneous and contingency
- Payment schedule: how and when each component is paid
- ROI projections (linked to the ROI calculator)
- Comparison to competitors (optional)
- Investment by model type (standard vs premium vs flagship)
- Investment document download (PDF) for sharing with prospects

**What to tell sir:** Sir, when a prospect says "how much does it cost?", the executive goes to this screen and can give a very detailed, item-by-item breakdown. The total investment, what it includes, and how it is paid over time — all clearly laid out. This builds confidence in the prospect that we have thought through every cost.

---

## Brand Royalty

**What is this?** The Brand Royalty screen shows the royalty structure and royalty collection summary for a specific brand — how much is owed, how much has been collected, and the calculation methodology.

**Why do we need it?** Royalties are the ongoing revenue stream from franchisees. This screen tracks the royalty structure, what each franchisee owes, and how collections are trending for this brand.

**What is inside?**
- Royalty structure definition: percentage of revenue, fixed monthly amount, or tiered
- Royalty rate by franchise model type
- List of all franchisees for this brand with:
  - Monthly royalty amount
  - Last payment date
  - Amount due this month
  - Outstanding balance
  - Payment status
- Total royalty collected this month vs expected
- Overdue royalties highlighted
- Royalty trend chart (last 12 months)
- Edit royalty structure button (goes to approval workflow)

**What to tell sir:** Sir, royalty collection is a key revenue stream. This screen shows the brand management team how much royalty should come in from all franchisees, how much has actually come in, and who is behind. If Brand X should have generated 12 lakhs in royalties this month and only 8 lakhs has been collected, the shortfall is visible here with names against each outstanding amount.

---

## Brand Expansion

**What is this?** The Brand Expansion screen tracks the growth plan for a brand — which new territories are targeted, the expansion timeline, and the status of each planned new franchise unit.

**Why do we need it?** Brands have growth targets. The expansion screen helps the iFranchise team and brand owners track how many new units are planned, how many are in progress, and how they are progressing against expansion goals.

**What is inside?**
- Expansion target for the current year (number of new units)
- Units opened this year vs target
- Expansion pipeline: territories in various stages (Prospecting → Agreement → Under Setup → Open)
- Each territory entry: city, state, target open date, assigned sales executive, current stage
- Geographic map showing existing units and planned expansion
- Bottlenecks: territories stuck in one stage too long
- Year-on-year expansion chart
- Export expansion plan

**What to tell sir:** Sir, this screen is the brand's growth tracker. If a brand wants to open 50 new units this year and they are at 23 by June, this screen shows where each of the remaining 27 units is in the pipeline — which are in agreement stage, which are under setup, which are stalled. The team can intervene on stalled units to keep the expansion on track.

---

## Brand Documents

**What is this?** The Brand Documents screen is the document repository for a specific brand — all files related to the brand are stored and organised here.

**Why do we need it?** Each brand generates many documents — the franchise disclosure document, training manuals, brand standards guide, marketing guidelines, agreement templates, legal documents. All of these need to be centrally stored and version-controlled.

**What is inside?**
- Document categories: Legal, Marketing, Training, Operations, Branding, Templates
- Upload, preview, download, and delete functions
- Version history for each document
- Access control: which user roles can see which documents
- Expiry tracking for time-sensitive documents (like franchising registrations)
- Search by document name

**What to tell sir:** Sir, all brand documents are stored here. When a new sales executive joins, they can download the brand's latest pitch presentation, franchise brochure, and FAQ document from here. When the brand updates their agreement template, the old version is archived and the new one is marked as current. Nothing gets lost and everyone uses the latest version.

---

## Brand Marketing

**What is this?** The Brand Marketing screen manages marketing activities associated with a specific brand — campaigns, spend, lead sources, and marketing materials.

**Why do we need it?** Marketing spend needs to be tracked per brand to understand the cost of acquiring franchisees. This screen helps marketing and brand teams manage campaigns and measure their effectiveness.

**What is inside?**
- Active marketing campaigns for this brand
- Each campaign: name, channel (Facebook, Google, Email, etc.), budget, spend, leads generated, conversions
- Marketing materials library: creatives, videos, banners
- Lead source breakdown (where leads for this brand are coming from)
- Cost per lead for each channel
- Marketing calendar
- Upcoming campaign schedule
- Campaign performance chart
- Request new campaign button

**What to tell sir:** Sir, this screen tells the brand management team exactly how their marketing money is working. If we spent 2 lakhs on Facebook ads for Brand X this month and got 120 leads, and spent 50 thousand on Google and got 40 leads, we can see the cost per lead and decide where to allocate budget next month.

---

## Brand Training

**What is this?** The Brand Training screen manages all training programs, schedules, and completion tracking for franchisees under a specific brand.

**Why do we need it?** Franchisee success depends on proper training. This screen ensures that every franchisee receives the required training, that training is documented, and that compliance with training requirements is tracked.

**What is inside?**
- Training programs list: initial training, operations training, staff training, refresher training
- Each program: name, duration, format (in-person, online, blended), required for (all, specific models)
- Franchisee training status: completed, in-progress, not started, overdue
- Training calendar: upcoming sessions with date, location, trainer, enrolled franchisees
- Training completion reports
- Training materials linked (manuals, videos, tests)
- Certifications issued (franchisees who have passed training assessments)
- Enroll franchisee in training button

**What to tell sir:** Sir, training is where brand standards get enforced. If a franchisee has not completed their mandatory operations training, this screen shows it — and the team can follow up. The brand owner can see at a glance which franchisees are trained and certified and which ones may be operating without proper knowledge.

---

## Brand Contacts

**What is this?** The Brand Contacts screen stores all key contacts at the brand organisation — the people from the brand's side who the iFranchise team coordinates with.

**Why do we need it?** iFranchise works with representatives from each brand — operations heads, legal teams, marketing teams. Having all these contacts organised under the brand profile makes coordination efficient and ensures the right person is always reachable.

**What is inside?**
- Contact list: name, designation, department, phone, email, WhatsApp
- Primary contact flag (the main point of contact)
- Notes per contact (e.g., "handles legal queries", "approves new territories")
- Communication history per contact (integrated with the communication log)
- Add contact, edit contact, deactivate contact functions

**What to tell sir:** Sir, when the sales team or legal team needs to reach someone at the brand, they come here. All contacts are listed with their roles — so the team knows to call Ramesh for territory approvals and email Sunita for training materials. Simple, organised, and no digging through email threads.

---

## Brand Performance

**What is this?** The Brand Performance screen provides a comprehensive analysis of how a brand is performing across all key metrics — leads, conversions, franchisee health, revenue, and expansion.

**Why do we need it?** Quarterly or annual brand reviews need data. This screen consolidates all performance indicators for a brand in one place so management can assess whether the brand is meeting expectations and decide on investment or support levels.

**What is inside?**
- Time period selector (monthly, quarterly, annual)
- Lead performance: total leads, source distribution, conversion rate, average days to convert
- Franchisee health: active units, compliance score average, training completion rate
- Financial performance: total franchise fees collected, royalty collected, marketing fees, total revenue
- Comparison to previous period (growth or decline indicators)
- Geographic performance: which states are performing best for this brand
- Top performing franchisee
- Lowest performing franchisee (may need intervention)
- Net Promoter Score or satisfaction data if surveys are active
- Export performance report as PDF

**What to tell sir:** Sir, this is the performance review screen for any brand. Before a quarterly review meeting with a brand partner, the iFranchise team opens this screen and prepares. It shows exactly how the brand is doing — is it growing? Are franchisees profitable? Which territories are over-performing and which need support? All the numbers are here, ready to present.

---

## Brand Agreements

**What is this?** The Brand Agreements screen manages the formal agreements between iFranchise and the brand — the partnership contracts, commission agreements, and legal terms.

**Why do we need it?** iFranchise operates as a franchise intermediary. The agreements with each brand define the commercial relationship — commission structures, exclusivity, territory rights, and obligations on both sides. These need to be tracked and renewed.

**What is inside?**
- List of all agreements with this brand:
  - Agreement type: Franchise Sales Agreement, Marketing Agreement, Exclusivity Agreement
  - Effective date and expiry date
  - Key terms summary
  - Signatory names
  - Status: Active, Expired, Under Review, Terminated
  - Renewal reminder status
- Create new agreement button
- Agreement document preview and download
- Agreement amendment history
- Renewal workflow initiation button

**What to tell sir:** Sir, just as we have agreements with franchisees, we also have agreements with the brands themselves. This screen tracks those agreements — what commissions iFranchise earns, which territories are exclusive, and when the contract needs renewal. The legal and accounts team use this to make sure all brand relationships are properly documented and current.

---

## Brand Timeline

**What is this?** The Brand Timeline shows a chronological history of all significant events related to a brand — from onboarding to every major milestone.

**Why do we need it?** Understanding the history of a brand relationship helps in reviews, renewals, and expansions. The timeline provides an easy-to-read narrative of the entire brand partnership.

**What is inside?**
- Chronological events: brand onboarding, first franchisee signed, territory expansions, agreement renewals, marketing campaign launches, performance milestones, any disputes or issues
- Each event: date, description, performed by, linked records
- Filter by event type or year
- Export as PDF

**What to tell sir:** Sir, the Brand Timeline tells the story of the brand's relationship with iFranchise from day one. If we are reviewing a brand after 3 years, the timeline shows all the milestones — when we got the first franchisee, when we expanded to new states, when the agreement was renewed, any important conversations or events. It is the institutional memory for each brand partnership.

---

# MODULE 6 — FRANCHISE MODELS

Franchise Models are the standardised packages that iFranchise offers to prospective franchisees. Each brand can have multiple models — a standard unit, a kiosk, a premium store, a master franchise. There are 17 screens in this module.

---

## Franchise Model Dashboard

**What is this?** The Franchise Model Dashboard is the overview screen for all franchise models across all brands, showing how they are performing and how leads are responding to them.

**Why do we need it?** The team needs to know which models are attracting the most interest, which are converting best, and which need to be updated or retired. This dashboard provides that performance picture.

**What is inside?**
- Total active franchise models count
- Models by brand (bar chart)
- Most inquired model this month
- Highest converting model
- Models with no inquiries in 30 days
- Average investment amount across all models
- Models pending review or approval
- Recently published models
- Models expiring or under revision
- Quick actions: Create New Model, View All Models, Compare Models

**What to tell sir:** Sir, this is the Franchise Model Dashboard. iFranchise may have 30 or 40 different franchise packages across all brands. This screen shows which ones are getting the most interest, which are converting, and which may need to be revised or repositioned. It helps the team decide where to focus their pitch.

---

## Franchise Model List

**What is this?** The Franchise Model List is the complete directory of all franchise models available in the system.

**Why do we need it?** Sales executives need to browse and find the right model for a prospect. This list lets them filter by brand, investment range, territory, and model type to quickly find matching options.

**What is inside?**
- Search by model name or brand
- Filter: by brand, by investment range (low/mid/high), by model type, by status (Active, Draft, Archived)
- Model cards or table rows: model name, brand, investment range, royalty structure, territory type, status, inquiry count this month
- Sort by: investment, popularity, conversion rate, newest
- Click to open full Model Details
- Add New Model button
- Compare selected models button (select up to 3 to compare side by side)

**What to tell sir:** Sir, this list is where the sales team browses franchise models. If a prospect says they have a budget of 10-15 lakhs and want something in the food sector, the executive filters this list by investment range and industry and gets a shortlist of suitable models immediately.

---

## Create Franchise Model

**What is this?** The Create Franchise Model screen is the form for defining a new franchise package, including all financial, operational, and legal parameters.

**Why do we need it?** Every new franchise offering needs to be formally defined in the system so the sales team can offer it accurately and so calculations (ROI, fees, royalties) are consistent.

**What is inside?**
- Basic Information: model name, brand (dropdown), model type (Unit Franchise, Area Franchise, Master Franchise, Kiosk, Express)
- Description: detailed overview of what this model offers
- Investment Structure:
  - Franchise fee
  - Setup cost range
  - Working capital required
  - Total investment range (min and max)
- Ongoing Fees:
  - Royalty type (percentage or fixed)
  - Royalty amount or percentage
  - Marketing contribution
  - Other recurring fees
- Territory Parameters:
  - Territory type (exclusive territory, non-exclusive, territory size in sq ft or km radius)
  - Minimum population requirement
- Requirements:
  - Minimum space requirement
  - Location type (high street, mall, standalone, home-based)
  - Minimum investment capital proof
  - Prior experience required (Yes/No)
- Support Provided:
  - Training days
  - Operational support description
  - Marketing support
  - Technology support
- Agreement Terms:
  - Contract duration
  - Renewal terms
  - Exit clause
- Status: Draft, Active, Archived
- Save as Draft or Publish button

**What to tell sir:** Sir, when iFranchise adds a new franchise model to its portfolio — say, a kiosk option for a coffee brand at a lower investment — the team fills in this form. Every parameter is defined: how much it costs, what royalty the franchisee pays, what territory they get, what training and support they receive. Once published, this model is available for the sales team to pitch and for leads to inquire about.

---

## Edit Franchise Model

**What is this?** The Edit Franchise Model screen allows authorised users to update the parameters of an existing franchise model.

**Why do we need it?** Investment costs change, royalty structures evolve, and territory policies get updated. This screen keeps franchise models accurate and current without creating new records unnecessarily.

**What is inside?**
- All Create Franchise Model fields pre-populated
- "Published" warning: editing an active model will affect how it appears to existing leads
- Approval required toggle: major changes (like fee changes) can be routed for approval
- Version history of previous model parameters
- Save Changes and Publish Updated Version buttons
- Archive This Model button

**What to tell sir:** Sir, if a brand increases its franchise fee or changes its royalty structure, the brand manager updates the model here. If the change is significant — like a price increase — the system can route it for management approval before the updated figure goes live across the platform.

---

## Franchise Model Details

**What is this?** The Franchise Model Details screen is the complete, in-depth profile of a single franchise model — all parameters, terms, and performance data in one place.

**Why do we need it?** Sales executives, management, and brand owners need a comprehensive view of each model — not just the headline numbers, but every term, requirement, and piece of support offered.

**What is inside?**
- Full model overview (all parameters from the create form)
- Current status and publish date
- Performance metrics: total inquiries, total conversions, conversion rate, average time to close
- Geographic breakdown: where this model has been sold (map or state list)
- Leads currently interested in this model
- Active franchisees running this model
- Linked franchise agreements
- Related documents (model brochure, agreement template, operations manual)
- Comparison button (compare this model with others from the same brand)
- Quick actions: Edit, Archive, Duplicate

**What to tell sir:** Sir, this is the full profile of one franchise model. Before a client meeting, the executive can open this screen and have every single piece of information — investment, fees, territory, support, how many people have already signed up for this model, which states it is active in. It is the complete pitch kit in digital form.

---

## Investment Calculator

**What is this?** The Investment Calculator screen is an interactive tool that calculates the total investment needed for a franchise model, broken down by component, and shows projected costs over time.

**Why do we need it?** Prospects always ask "what exactly does the total investment include?" This calculator gives a transparent, itemised breakdown so there are no surprises — the prospect knows exactly where every rupee is going before they commit.

**What is inside?**
- Model selector (pre-filled if accessed from a specific model)
- Base investment components with individual amounts:
  - Franchise fee
  - Interior and setup
  - Equipment
  - Initial inventory
  - Branding and signage
  - Staff recruitment and training
  - Working capital (3-6 months)
  - Security deposit (if applicable)
  - Miscellaneous
- Adjustable sliders for variable components
- Total investment summary
- GST calculation on applicable components
- Funding split options: own funds vs loan
- EMI calculator for financed portion
- Download calculation as PDF
- "Share with Lead" button — sends the breakdown to the prospect via email

**What to tell sir:** Sir, when a prospect asks "how much do I need to invest?", the executive opens this calculator, selects the model, and it shows a complete itemised breakdown. If the prospect wants to see a financed version — say they are taking a loan for 50% — the EMI calculator shows the monthly repayment. This level of transparency builds a lot of trust with serious investors.

---

## ROI Calculator

**What is this?** The ROI Calculator screen projects the expected return on investment for a franchisee, based on estimated revenue, costs, royalties, and the investment amount, showing a break-even timeline.

**Why do we need it?** Every serious investor wants to know "when will I get my money back?" This calculator gives them a realistic projection based on the brand's actual performance data, not just estimates pulled from thin air.

**What is inside?**
- Input fields: investment amount (auto-filled from the model), expected monthly revenue, average gross margin
- Expense inputs: rent, staff salaries, utilities, royalty, marketing contribution
- Monthly profit calculation (revenue minus all expenses including royalty)
- Break-even point: "At this revenue, you recover your investment in X months"
- 3-year and 5-year projection chart
- Best case, expected case, and conservative case scenarios
- Industry average comparison (how does this model compare to similar franchises)
- Download projection as PDF
- "Share with Lead" button

**What to tell sir:** Sir, this is one of the most powerful tools in the sales process. When a prospect sits down with our executive, this calculator shows them: "If your outlet generates 8 lakhs a month, after royalties and expenses, you will recover your investment in 18 months." With a visual chart. This makes the financial case in a way that no brochure can. It answers the most important question a franchisee investor has.

---

## Franchise Model Requirements

**What is this?** The Franchise Model Requirements screen lists all the eligibility criteria and prerequisites a franchisee candidate must meet before they can apply for this specific model.

**Why do we need it?** Not everyone who expresses interest is qualified to franchise. This screen defines the minimum requirements — financial, locational, experiential — so the sales team can quickly qualify or disqualify leads and avoid wasting time on prospects who do not meet the criteria.

**What is inside?**
- Financial requirements: minimum net worth, minimum liquid capital, proof of funds required
- Location requirements: city tier eligibility (Tier 1, 2, 3), minimum space (sq ft), location type
- Experience requirements: prior business experience, industry experience, education level
- Operational requirements: full-time commitment required, partner model allowed
- Legal requirements: GST registration, FSSAI (for food), any specific licenses
- Background check requirement (if applicable)
- Eligibility checklist: a checklist format that the sales executive can use during a qualification call
- Edit Requirements button (authorised users)

**What to tell sir:** Sir, before the sales team invests hours in nurturing a lead, they can quickly check against this requirements screen to see if the prospect qualifies. If the model requires 50 lakh liquid capital and the prospect says they only have 20 lakh, the executive knows to steer them toward a smaller model. This saves everyone time and keeps the pipeline clean with qualified prospects.

---

## Franchise Model Support

**What is this?** The Franchise Model Support screen details all the support, training, and assistance that a franchisee receives after signing up for this model.

**Why do we need it?** Support is a major deciding factor for franchise investors. They want to know they will not be left on their own after paying the franchise fee. This screen documents exactly what is included in the support package, which helps close hesitant prospects.

**What is inside?**
- Pre-opening support:
  - Site selection assistance
  - Store design and fit-out guidance
  - Equipment procurement support
  - Initial training programme (duration and curriculum)
  - Staff recruitment assistance
- Ongoing support:
  - Dedicated relationship manager contact
  - Operations support visits (frequency)
  - Technology systems provided (POS, CRM, inventory)
  - Marketing collateral and campaign support
  - Brand training refresh schedule
- Technology support:
  - Software licences provided
  - IT helpdesk access
- Support escalation process
- SLA for support response times

**What to tell sir:** Sir, support is often what closes the deal with a hesitant investor. When the prospect says "but what if I get stuck?", the executive opens this screen and walks them through exactly what they will receive — 2 weeks of initial training, a dedicated operations manager who visits every quarter, a 24-hour helpline, marketing materials provided. This turns the conversation from cost to value.

---

## Franchise Model Documents

**What is this?** The Franchise Model Documents screen stores all documentation specific to a franchise model — brochures, agreement templates, operations manuals, disclosure documents, and marketing kits.

**Why do we need it?** Each franchise model has a set of documents that sales executives need to share with prospects and franchisees need to review before signing. Centralising these here ensures everyone uses the latest version.

**What is inside?**
- Document categories: Sales Material, Legal, Operations, Training, Marketing
- Document list: name, type, version, last updated, uploaded by
- Download, preview buttons
- Version history per document
- Expiry tracking
- Access control: some documents (like agreement templates) only visible to management
- Upload new version button (auto-archives old version)
- Share with lead button

**What to tell sir:** Sir, this is the document library for this franchise model. When a prospect asks for the franchise brochure, the executive downloads it from here — the latest version, already approved and branded. Agreement templates are stored here too, so the legal team always works from the correct base document. No one sends outdated materials.

---

## Franchise Model Territory

**What is this?** The Franchise Model Territory screen manages the geographic availability and territory rules for a specific franchise model — which areas are available, which are taken, and what the exclusivity terms are.

**Why do we need it?** Territory conflicts are one of the biggest sources of franchisee disputes. This screen ensures that the team tracks exactly which territories have been allocated, which are reserved, and which are open — so the same territory is never promised to two different franchisees.

**What is inside?**
- Territory map (interactive, showing available, reserved, and taken territories)
- Territory list: state, city, zone, status (Available, Reserved, Sold, Pending)
- Exclusivity terms per territory
- Allocated franchisee name (for sold territories)
- Territory size definition (km radius, PIN codes, or district)
- Add new territory button
- Reserve territory button (during active negotiation with a prospect)
- Release territory button (if a deal falls through)
- Territory assignment history log

**What to tell sir:** Sir, this is how we prevent territory conflicts. If a prospect from Pune wants to franchise and the executive checks here and sees Pune is already sold to someone else, they immediately redirect the conversation to Nashik or Aurangabad instead. No conflict, no broken promises. If a deal is in advanced negotiation, the territory can be marked as "Reserved" to prevent another executive from offering it simultaneously.

---

## Compare Franchise Models

**What is this?** The Compare Franchise Models screen allows side-by-side comparison of two or three franchise models — either from the same brand or different brands.

**Why do we need it?** Prospects often cannot decide between two models. Sales executives need a quick, structured way to show the differences — investment, royalty, territory, support — without manually explaining each one. This screen does the comparison automatically.

**What is inside?**
- Select 2-3 models to compare (dropdown)
- Side-by-side table showing all parameters:
  - Investment amount
  - Royalty structure
  - Territory type
  - Space requirement
  - Contract duration
  - Training days
  - Support included
  - Expected ROI timeline
  - Number of active franchisees
- Highlight differences in amber (fields where models differ significantly)
- "Best value for investment" indicator (if configured)
- Print or export comparison
- Share comparison with lead

**What to tell sir:** Sir, when a prospect is comparing two models — say a kiosk at 8 lakhs versus a full store at 20 lakhs — the executive opens this comparison and they can both see the differences clearly. The kiosk has a shorter break-even period, the full store has a larger territory. The prospect can make an informed decision without confusion. This closes deals faster.

---

## Franchise Model Timeline

**What is this?** The Franchise Model Timeline shows the chronological history of changes, updates, and events related to a specific franchise model.

**Why do we need it?** Franchise models evolve over time — fees change, territory policies update, new support services are added. The timeline provides a complete audit trail of how the model has changed, which is important for legal compliance and dispute resolution.

**What is inside?**
- All events in chronological order: model creation, fee changes, territory policy updates, document updates, publishing, archiving, re-activation
- Each event: date, what changed, who made the change, old and new values
- Filter by event type or date range
- Export as PDF

**What to tell sir:** Sir, if a franchisee disputes a fee saying "when I signed up, the royalty was X, not Y," the franchise model timeline can show exactly when the royalty rate was changed and to what value. It is the legal record of the model's history.

---

## Franchise Model Workflow

**What is this?** The Franchise Model Workflow screen manages the internal approval and publication process for creating or modifying a franchise model — who needs to approve it and what stages it must pass through.

**Why do we need it?** Creating or changing a franchise model is a significant business decision that should not happen without proper review and approval. This workflow ensures that legal, finance, and management all sign off before a model goes live.

**What is inside?**
- Workflow stages: Draft → Legal Review → Finance Review → Management Approval → Published
- Current stage indicator
- Assigned reviewer for each stage
- Comments and feedback from each reviewer
- Approve and Reject buttons per stage (with mandatory comment)
- Workflow history: who approved/rejected at each stage and when
- Escalation option: if a reviewer is not responding, escalate to their manager
- Expected completion date per stage
- Notification settings

**What to tell sir:** Sir, before any franchise model is published and made available to the sales team, it has to go through this approval workflow. Legal checks the terms, finance checks the investment structure, management gives final approval. If someone in the middle rejects it with comments, the team revises and resubmits. Nothing goes live without the right sign-offs.

---

## Publish Franchise Model

**What is this?** The Publish Franchise Model screen is the final step that makes a franchise model officially active and available to the sales team and potentially to external portals.

**Why do we need it?** Publishing is a deliberate, controlled action. This screen gives a final review of all the model details before making them live, with a confirmation step to prevent accidental publishing.

**What is inside?**
- Complete summary of all model parameters (read-only preview)
- Publishing checklist: all required fields complete, documents uploaded, territory defined, workflow approved
- Publish scope: internal only (sales team can see) or external (portal/website)
- Publish date option (publish now or schedule for a future date)
- Notification list: who will be notified when this model is published
- "Confirm and Publish" button
- "Save and Return" button (if not ready)

**What to tell sir:** Sir, the Publish screen is the moment a franchise model officially goes live. The team gets one final preview of everything — all the numbers, terms, and documents — before clicking Publish. They can also schedule it to go live on a specific date, say for a brand launch event. Once published, the sales team can immediately start pitching it and leads can inquire about it.

---

## Archive Franchise Model

**What is this?** The Archive Franchise Model screen is used to deactivate a franchise model that is no longer being offered, without permanently deleting it from the system.

**Why do we need it?** Franchise models get retired — a brand may discontinue a particular model, or it may be replaced by an improved version. Archiving removes it from active sales without losing the historical data linked to it.

**What is inside?**
- Model summary with active franchisees count (warning if there are active franchisees on this model)
- Archive reason: Replaced by New Model, Brand Decision, Low Performance, Regulatory Change, Other
- Notes field
- Impact summary: "X leads are currently interested in this model. X franchisees are currently on this model."
- Options for handling existing leads: keep them linked or reassign to the replacement model
- Confirm Archive button
- View Replacement Model button

**What to tell sir:** Sir, when a brand discontinues a model, the team archives it here. The system shows how many active franchisees are still on this model so the team knows to contact them. Leads currently interested in the model can be automatically redirected to the replacement. Historical data is preserved — the franchisees who signed up under this model still have their records intact.

---

# MODULE 7 — MEETINGS

Meetings are a critical conversion tool in franchise sales. There are 17 screens managing everything from scheduling to outcome tracking.

---

## Meeting Dashboard

**What is this?** The Meeting Dashboard is the overview screen for all meetings across the organisation — scheduled, completed, and upcoming.

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

**What to tell sir:** Sir, this is the Meeting Dashboard. The sales manager can see at a glance that 32 meetings happened this week, 12 had positive outcomes, and 5 resulted in conversions. If meetings are declining, that is an early warning sign that the pipeline will slow down in 2-3 weeks. This screen helps managers stay ahead of the sales cycle.

---

## Meeting Calendar

**What is this?** The Meeting Calendar displays all scheduled meetings in a standard calendar view — day, week, and month layouts — allowing the team to manage their schedule visually.

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

**What to tell sir:** Sir, the Calendar view is what each executive checks every morning. They can see their entire week laid out — what time each meeting is, whether it is in-person or a video call, and where any gaps are. Managers can switch to team view and see everyone's schedule together, which helps with resource planning.

---

## Meeting List

**What is this?** The Meeting List is a tabular view of all meetings — past, present, and future — with filtering and search capability.

**Why do we need it?** For reporting and review purposes, the list view is more useful than the calendar. Managers can filter by date range, executive, outcome, or brand to analyse meeting patterns and follow up on specific meetings.

**What is inside?**
- Search by lead name or meeting title
- Filters: date range, assigned executive, meeting type, outcome, brand, status
- Table columns: meeting ID, lead name, date and time, type, executive, duration, outcome, follow-up status
- Click to open Meeting Details
- Bulk export button
- Sort by date, executive, or outcome
- Pagination

**What to tell sir:** Sir, the Meeting List is where the manager does their end-of-week review. They filter by "This Week" and see every meeting that happened, who conducted it, and what the outcome was. Any meeting with a positive outcome that has not been followed up on is immediately visible. It keeps the follow-through as disciplined as the meetings themselves.

---

## Schedule Meeting

**What is this?** The Schedule Meeting screen is the booking form for creating a new meeting appointment linked to a lead or customer.

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

**What to tell sir:** Sir, when an executive books a meeting, this form captures every detail — when, where, who, and what will be discussed. As soon as they click Save, the system automatically sends a calendar invite or WhatsApp confirmation to the prospect. The executive gets a reminder 30 minutes before. Nothing is forgotten and the prospect feels professionally handled from the first interaction.

---

## Meeting Details

**What is this?** The Meeting Details screen shows the complete information about a single meeting — its scheduling details, participants, agenda, status, and outcome.

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

**What to tell sir:** Sir, this is the full profile of one meeting. The executive can open it before the meeting to review the agenda, and after the meeting, fill in the outcome and any action items. This ensures that every meeting has a documented result and a clear next step. Nothing gets lost between the meeting and the follow-up.

---

## Edit Meeting

**What is this?** The Edit Meeting screen allows changes to be made to a scheduled meeting — changing the time, location, type, or participants.

**Why do we need it?** Meetings get rescheduled, locations change, participants are added or removed. This screen handles those changes cleanly, including sending updated notifications to all parties.

**What is inside?**
- All Meeting fields pre-filled, editable
- Change log showing what has been modified
- Notification settings: "Send update notification to all attendees?" with preview of the update message
- Save Changes button
- Cancellation option at the bottom of the form

**What to tell sir:** Sir, when a prospect calls to change the meeting time, the executive opens Edit Meeting, updates the time, checks the "Send update to attendee" box, and clicks Save. The prospect immediately gets a message with the new time. All of this is logged — the system records both the original scheduled time and the revised time.

---

## Meeting Agenda

**What is this?** The Meeting Agenda screen is a detailed agenda builder for a meeting, allowing the executive to structure the conversation topic by topic with time allocations.

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

**What to tell sir:** Sir, a well-structured meeting with a clear agenda converts better than a free-flowing conversation. This screen lets the executive plan the meeting: "10 minutes — Brand Overview, 15 minutes — Investment Discussion, 10 minutes — Territory Options, 15 minutes — Q&A." The prospect receives this agenda in advance and comes prepared. It signals professionalism and seriousness.

---

## Meeting Participants

**What is this?** The Meeting Participants screen manages the list of all people — internal team members and external prospects — invited to or attending a specific meeting.

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

**What to tell sir:** Sir, for larger meetings — say, a meeting where the prospect is bringing their spouse and their accountant — this screen manages all the attendees. It tracks who has confirmed, who has not responded, and after the meeting, who actually showed up. This attendance record is part of the lead's history.

---

## Meeting Notes

**What is this?** The Meeting Notes screen is where the executive records what was discussed during a meeting and any important points that came up.

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

**What to tell sir:** Sir, right after a meeting, the executive fills this screen. They write what was discussed, note any objections the prospect raised, list the action items agreed upon, and set the next step. These notes go straight into the lead's timeline and are visible to the manager. It creates accountability — the executive knows they need to deliver on whatever they wrote in "What was promised."

---

## Meeting Documents

**What is this?** The Meeting Documents screen stores all files associated with a specific meeting — brochures sent, presentations used, proposals shared, and any documents received from the prospect.

**Why do we need it?** Meetings involve exchanging a lot of material. Tracking what was shared when, and with whom, is important both for follow-up and for legal compliance (especially if documents are part of an agreement negotiation).

**What is inside?**
- Document upload area
- List of documents: name, type, uploaded by, upload date, shared with (internal or external)
- Preview, download, delete options
- Documents automatically linked to the parent lead/customer record
- Ability to share documents directly from here (email or WhatsApp link)
- Meeting recording upload field (if calls are recorded externally)

**What to tell sir:** Sir, if the executive shares a detailed franchise brochure and an investment breakdown during a meeting, those documents are uploaded here. The prospect can be sent a digital copy from this screen directly. Both the team and the lead's profile maintain a record of exactly what was presented and when.

---

## Meeting Timeline

**What is this?** The Meeting Timeline shows a chronological history of all events related to a specific meeting from scheduling through to follow-up completion.

**Why do we need it?** Meetings generate many events — the initial scheduling, any changes, reminders sent, the meeting itself, the outcome entry, the follow-up actions. The timeline captures this complete story.

**What is inside?**
- Chronological events: Meeting Created, Invite Sent, Attendee Confirmed, Meeting Started, Notes Added, Outcome Recorded, Follow-up Created
- Each event: timestamp, who performed it, description
- Filter by event type
- Export timeline

**What to tell sir:** Sir, the Meeting Timeline is the audit trail for one meeting. If a prospect later claims they were not informed about a rescheduling, the timeline shows exactly when the notification was sent and whether it was delivered. It protects the team and maintains trust with the prospect.

---

## Meeting Follow-ups

**What is this?** The Meeting Follow-ups screen manages all the action items and follow-up tasks that were created as a result of a meeting.

**Why do we need it?** A meeting without a follow-up is a meeting wasted. This screen ensures that every commitment made in a meeting — "I will send you the brochure by Thursday", "Let us schedule a site visit next week" — is captured as a task and tracked to completion.

**What is inside?**
- List of all follow-up tasks from this meeting
- Each task: title, assigned to, due date, status (Pending, In Progress, Completed, Overdue)
- Add new follow-up task button
- Mark task complete button
- Link to the relevant lead or customer
- Overdue tasks highlighted
- Completion rate: "X of Y follow-ups completed"

**What to tell sir:** Sir, this screen turns meeting outcomes into action. If the executive promised to send a proposal by Wednesday and schedule a site visit by Friday, both are listed here as tasks with due dates and owners. The manager can see if they have been done. If Wednesday comes and the proposal has not been sent, the system marks it overdue and the manager sees it immediately.

---

## Meeting Outcomes

**What is this?** The Meeting Outcomes screen captures and displays the result of a completed meeting — the outcome type, next steps, and conversion status.

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

**What to tell sir:** Sir, this outcome screen is what completes the meeting record. When the executive fills this in after every meeting, the system builds a picture over time: which types of meetings convert, what objections come up repeatedly, what the lead funnel looks like from meeting to conversion. This data helps improve the sales approach over time.

---

## Online Meeting

**What is this?** The Online Meeting screen manages the setup and details for virtual meetings conducted over video platforms like Zoom or Google Meet.

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

**What to tell sir:** Sir, when a prospect is in Delhi and our executive is in Mumbai, this screen manages the video meeting. A Zoom link is generated, sent to the prospect automatically, and the executive clicks Join Meeting when it is time. If the meeting is recorded with the prospect's consent, the recording is attached here after the call for documentation purposes.

---

## Offline Meeting

**What is this?** The Offline Meeting screen manages in-person meetings — venue details, directions, check-in management, and on-site notes.

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

**What to tell sir:** Sir, when a prospect comes to the office for an in-person meeting, this screen is how the executive prepares. They have a checklist of materials to keep ready, the meeting room is booked, directions have been sent. When the prospect arrives, check-in is marked. After the meeting, duration is recorded. These details matter for reporting and for analysing which types of meetings are most effective.

---

## Cancel and Reschedule Meeting

**What is this?** The Cancel and Reschedule Meeting screen handles the process of either cancelling a meeting or moving it to a new time, with proper notification to all parties.

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

**What to tell sir:** Sir, when a prospect needs to reschedule, the executive does not just call them and verbally agree to a new time. They come to this screen, enter the new time, and the system sends an updated confirmation to the prospect with the new details. The system logs both the original time and the change, so there is never any confusion about when the meeting actually is.

---

## Meeting Analytics

**What is this?** The Meeting Analytics screen provides a data-driven analysis of meeting patterns, performance, and outcomes across the organisation.

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

**What to tell sir:** Sir, this screen answers the strategic questions about our meeting process. How many meetings on average does it take to close a deal? Is the in-person meeting rate better than video calls? Which executive has the best meeting-to-conversion rate? If the data shows that Tuesday afternoon meetings close at twice the rate of Monday morning calls, the team can restructure their scheduling accordingly. This is evidence-based sales coaching.

---

# MODULE 8 — APPROVALS

The Approvals module manages all processes that require authorisation from a manager or senior team member before they can be executed. There are 17 screens.

---

## Approval Dashboard

**What is this?** The Approval Dashboard is the overview screen showing the status of all approval requests in the system — pending, approved, rejected, and escalated.

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

**What to tell sir:** Sir, this is the Approval Dashboard. Any time something in the system requires sign-off — a large payment, a discounted franchise fee, a territory change — it lands here. The approver can see how many things are waiting for their attention, how old each request is, and which ones are urgent. No approval request gets lost in email threads.

---

## Approval Inbox

**What is this?** The Approval Inbox is the personal queue of approval requests assigned to a specific approver, showing everything that needs their immediate attention.

**Why do we need it?** Just like an email inbox, the approval inbox is personalised. Each approver sees only the requests assigned to them, so they are not overwhelmed by requests meant for others. This makes the approval process faster and more accountable.

**What is inside?**
- List of all pending approval requests assigned to this user
- Each request: title, category, requester name, requested date, urgency level, deadline
- Sort by urgency, date, or category
- Quick approve and quick reject buttons on each row (one-click with mandatory comment)
- Mark as read (distinguishes new from reviewed requests)
- Filter: by category, by urgency, by requester
- Total count badge

**What to tell sir:** Sir, the Approval Inbox is the approver's personal to-do list for decisions. When Himani submits a request for a discount approval, it lands in her manager's inbox. The manager sees it, reviews the details, and approves or rejects with a comment. Simple, fast, and documented.

---

## Pending Approvals

**What is this?** The Pending Approvals screen shows all approval requests that have not yet been resolved, across all approvers in the system.

**Why do we need it?** Managers and admins need visibility into the overall approval backlog — not just their own inbox, but all pending approvals in the system. This screen shows the full picture so bottlenecks can be identified.

**What is inside?**
- All pending approval requests across all approvers
- Filter: by approver, category, urgency, age, department
- Each request: title, requester, assigned approver, date, urgency, days pending
- Escalate button (for requests overdue beyond threshold)
- Reassign approver button
- Bulk actions: reassign multiple requests, send reminders
- Stalled requests highlighted (pending for more than X days)

**What to tell sir:** Sir, the Pending Approvals screen is for the admin or operations manager to monitor the overall approval health. If there are 15 requests that have been pending for over 5 days, something is wrong — either the approver is overloaded, out of office, or the process is unclear. This screen makes that visible so action can be taken before delays cascade into business problems.

---

## Approval Details

**What is this?** The Approval Details screen shows the complete information about a single approval request — what is being requested, why, who requested it, all supporting information, and the decision history.

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

**What to tell sir:** Sir, when an approver opens a request, this screen gives them everything they need to make an informed decision. If it is a payment refund request, they see the customer, the original payment, the refund reason, and any supporting documents. They add their comment and click Approve. The requester gets notified immediately, and the record shows exactly who approved it, when, and with what comment.

---

## Approval Workflow

**What is this?** The Approval Workflow screen shows the defined multi-step approval process for a specific request type — who needs to approve at each stage and in what order.

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

**What to tell sir:** Sir, this screen shows the journey of an approval. Stage 1 is the team lead's review, Stage 2 is the finance manager's check, Stage 3 is the CEO's final approval. You can see which stage is complete, which is current, and which is next. If Stage 2 is taking too long, the system can flag it for escalation automatically.

---

## Approval Timeline

**What is this?** The Approval Timeline shows the complete chronological history of all events related to a specific approval request — from creation to final decision.

**Why do we need it?** For audit and compliance purposes, the complete history of any approval decision must be documented. This timeline provides that record.

**What is inside?**
- All events in order: Request Created, Assigned to Approver, Viewed by Approver, Approved/Rejected at each stage, Comments Added, Final Decision Made, Requester Notified
- Each event: timestamp, person, action description
- All comments visible in context
- Filter by event type
- Export as PDF for compliance documentation

**What to tell sir:** Sir, the Approval Timeline is the legal record of a decision. If anyone ever asks "when was this discount approved, by whom, and on what grounds?", this timeline shows every step with timestamps. It is completely tamper-proof and is the authoritative record for any audit.

---

## Approval History

**What is this?** The Approval History screen shows all resolved approval requests — approved, rejected, and withdrawn — with their final decisions and outcomes.

**Why do we need it?** Past decisions inform future ones. When a similar request comes up, the approver can check history to see how previous requests of the same type were handled. It also provides the data needed for periodic approval process reviews.

**What is inside?**
- List of all resolved approvals with filters by category, approver, date range, outcome
- Each entry: title, requester, approver, decision date, outcome (Approved/Rejected), comments
- Decision reason (recorded at time of approval or rejection)
- Average resolution time by category
- Search by requester name or request type
- Export history

**What to tell sir:** Sir, the Approval History is the archive of all past decisions. If the CEO wants to see all franchise fee discounts that were approved in the last year — who requested them, who approved them, and what the reason was — this screen shows that in seconds. It creates consistency and accountability in how decisions are made over time.

---

## Approval Comments

**What is this?** The Approval Comments screen manages the discussion thread attached to an approval request, where the requester and approver can exchange information and clarifications.

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

**What to tell sir:** Sir, the Comments section on an approval keeps all back-and-forth in one place. If the finance manager needs to ask "what is the business justification for this discount?", they type it here. The requester replies here. The approver then has all the context before making a decision. No emails, no phone calls outside the system — everything is documented.

---

## Approval Documents

**What is this?** The Approval Documents screen stores all files attached to or required for a specific approval request.

**Why do we need it?** Most approvals require supporting documents — a quotation, an agreement draft, a financial statement, a client communication. Having these attached directly to the approval request means the approver does not have to chase documents.

**What is inside?**
- Document upload area
- List of attached documents: name, type, size, uploaded by, date
- Preview and download buttons
- Required documents checklist (if the approval type has mandatory documents)
- Missing documents warning (prevents submission if required documents are absent)
- Version history for revised documents

**What to tell sir:** Sir, if the sales team submits a franchise fee discount request, they upload the client's formal request, any email communication, and a summary of the business case right here. The approver sees everything without having to ask for it separately. This speeds up the approval process significantly.

---

## Approval Decision

**What is this?** The Approval Decision screen is where the approver formally records their decision — approve, reject, or request more information — with a mandatory explanation.

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

**What to tell sir:** Sir, this is where the decision actually gets made. The approver must write a reason — they cannot just click Approve or Reject without saying why. For significant financial decisions, a PIN or digital signature may be required. This prevents accidental or unauthorised approvals and creates a clear, accountable decision record.

---

## Approval Analytics

**What is this?** The Approval Analytics screen provides data on how the approval process is performing — turnaround times, approval rates, bottlenecks, and trends.

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

**What to tell sir:** Sir, this screen helps management run the approval process better. If discounts are being rejected 60% of the time, maybe the policy needs to be clarified. If one approver is completing approvals in 2 hours and another is taking 5 days, there is a training or delegation issue. Data makes the improvement conversation specific rather than general.

---

## Approval Settings

**What is this?** The Approval Settings screen is where administrators define the rules, workflows, and thresholds for each type of approval in the system.

**Why do we need it?** Different types of approvals need different rules. A routine payment might need just one level of approval, while a territory change might need three. This screen defines those rules so the system routes approvals correctly without manual intervention.

**What is inside?**
- List of approval types (Financial, Legal, Operational, HR, Brand, Franchise Model, etc.)
- For each type: define workflow stages, assigned approvers, SLA, escalation rules
- Threshold settings: e.g., "Any discount above 10% requires CEO approval"
- Auto-approve rules: e.g., "Payments under 5,000 are auto-approved"
- Delegation settings: who can approve on behalf of an absent approver
- Email/notification templates for approval requests and decisions
- Audit settings: which approvals require digital signature

**What to tell sir:** Sir, this is where we define how the approval system works. We set up the rules once — what types of decisions need approval, who approves them, and how long they have before it escalates. After setup, the system handles routing automatically. The rules can be changed as the business grows and policies evolve.

---

## Escalated Approvals

**What is this?** The Escalated Approvals screen shows all approval requests that have been elevated to a higher authority because they were not resolved within the defined SLA or because they were manually escalated.

**Why do we need it?** Some approvals get stuck — the assigned approver is on leave, they are too busy, or they are avoiding a difficult decision. Escalation ensures that no approval waits indefinitely and business does not get blocked.

**What is inside?**
- List of all escalated approvals: title, original approver, escalated to, escalation date, days elapsed, reason
- Filter by escalated approver or category
- Original approval request details (linked)
- Escalation reason
- Resolution deadline
- Action buttons: Approve, Reject, Reassign Further
- Escalation history: every escalation step

**What to tell sir:** Sir, the Escalated screen is the safety net for stuck approvals. If an approval has been pending for 5 days and the assigned approver has not acted, the system escalates it to their manager. The manager sees it here and can either resolve it or push it up further. Business never stops waiting for one person.

---

## Rejected Approvals

**What is this?** The Rejected Approvals screen shows all requests that have been turned down, with the reason given by the approver and options for resubmission.

**Why do we need it?** Rejection is part of the approval process. The requester needs to see why their request was rejected and have the option to address the concerns and resubmit. This screen manages that loop.

**What is inside?**
- List of all rejected requests with: title, requester, rejector, date, rejection reason
- View full request details link
- Resubmit button (creates a new version of the same request with opportunity to address concerns)
- Appeal option (flags the rejection for review by a senior authority)
- Filter by category or date range

**What to tell sir:** Sir, if a discount request is rejected, the sales executive can see exactly why here. Maybe the approval says "not approved at this stage — customer needs to provide investment proof first." The executive can address that, resubmit with the proof attached, and the request goes through the approval process again. Rejection is not the end, it is a direction to get the right information.

---

## Completed Approvals

**What is this?** The Completed Approvals screen is an archive of all approval requests that have been fully resolved and actioned.

**Why do we need it?** Completed approvals provide a historical reference for past decisions. They also serve as audit evidence and help in generating compliance reports.

**What is inside?**
- List of all resolved approvals: title, requester, approver, decision date, outcome
- Search and filter by date range, category, approver, outcome
- View full details of any completed approval
- Export selected or all records
- KPI summary: total resolved this month, average time to resolve

**What to tell sir:** Sir, completed approvals are archived here permanently. At the end of the financial year, the accounts team can pull all approved payment discounts and refunds from this screen for their audit. Everything is available with full details, no need to search through old emails.

---

## Bulk Approvals

**What is this?** The Bulk Approvals screen allows an approver to review and action multiple similar approval requests at once, instead of opening each one individually.

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

**What to tell sir:** Sir, if the accounts manager needs to approve 20 routine monthly royalty payment confirmations, they select all 20, add a single approval comment like "Monthly royalty payments verified — approved in batch," and click Approve. Done in 2 minutes instead of 40 minutes. The system still records each individual approval separately in the audit trail.

---

## Approval Audit

**What is this?** The Approval Audit screen provides a complete, system-generated audit trail of every approval-related action in the system — every request created, viewed, commented on, decided, and escalated.

**Why do we need it?** Regulatory compliance, internal audits, and legal disputes may require proof of the approval process. The Audit screen provides an immutable, detailed record that cannot be altered.

**What is inside?**
- Full log of all approval-related events across the system
- Filter by user, approval type, date range, action type
- Every entry: timestamp, user, action, affected record, before/after values
- Cannot be edited, modified, or deleted by any user including admin
- Export as PDF or CSV for external auditors
- Search by approval ID, requester, or approver name

**What to tell sir:** Sir, the Approval Audit is the gold standard for compliance. If a regulator or auditor wants to see every significant financial decision made in the last year — what was approved, who approved it, on what grounds, and when — this screen generates that report. It is the source of truth that protects the business in any formal inquiry.

---

# MODULE 9 — ACCOUNTS (FINANCE)

The Accounts module manages all financial transactions, invoicing, collections, and revenue reporting. There are 17 screens.

---

## Finance Dashboard

**What is this?** The Finance Dashboard is the top-level financial overview screen for the accounts team and management, showing the complete money picture of the business.

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

**What to tell sir:** Sir, this is the Finance Dashboard. Every morning the accounts team opens this and immediately knows: how much money came in today, how much is overdue, and where the month is tracking. If the collection rate is at 72% and the month is almost over, they know they need to chase the remaining 28% urgently. All the key financial numbers in one screen.

---

## Payment Dashboard

**What is this?** The Payment Dashboard is a focused view specifically for payment management — tracking incoming payments, their status, and daily collection activity.

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

**What to tell sir:** Sir, the Payment Dashboard is the accounts executive's workstation. They start the day here — they can see who is supposed to pay today, mark who has paid, and send a reminder to those who have not. It is a live operational view of the day's financial activity.

---

## Payment List

**What is this?** The Payment List is a complete record of all payments across all customers, filterable by date, status, type, and customer.

**Why do we need it?** For reconciliation, reporting, and dispute resolution, the accounts team needs access to the full payment history with powerful search and filter capabilities.

**What is inside?**
- Search by customer name, payment reference, or invoice number
- Filter: date range, payment type, status, amount range, customer, brand
- Table columns: payment ID, customer name, brand, payment date, payment type, amount, method, reference number, invoice linked, recorded by, status
- Click to open Payment Details
- Bulk export to CSV or Excel
- Pagination
- Total amount shown for filtered view

**What to tell sir:** Sir, if the auditor asks "show me all royalty payments received from Brand X franchisees in Q3," the accounts team filters this list by payment type "Royalty," brand "X," and the date range. The full list appears, and they can export it to Excel in one click. It takes 30 seconds.

---

## Payment Details

**What is this?** The Payment Details screen shows the complete information about a single payment transaction — who paid, how much, for what, how, and when.

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

**What to tell sir:** Sir, if a customer calls to say "I paid the royalty on the 5th but my account still shows overdue," the accounts team opens the Payment Details screen, finds that payment, and can see the UTR number, who recorded it, and when. If it was recorded and the status still shows pending, there is a reconciliation issue that can be fixed immediately.

---

## Record Payment

**What is this?** The Record Payment screen is the form used by the accounts team to manually enter a payment received from a customer.

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

**What to tell sir:** Sir, when a franchisee transfers the monthly royalty to the company account, the accounts executive verifies it in the bank statement and records it here. They link it to the relevant invoice, enter the UTR number, and click Save. The customer's account is immediately updated to "Paid," the invoice is marked as paid, and a receipt is automatically sent to the franchisee. The entire process takes under 2 minutes.

---

## Generate Invoice

**What is this?** The Generate Invoice screen is where the accounts team creates a formal invoice to send to a customer for any amount due.

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

**What to tell sir:** Sir, generating an invoice is a one-minute job in this system. The accounts team selects the customer, picks the invoice type, enters the amount, and the system calculates GST, generates the invoice number, and creates a professional PDF. They click Send and it goes to the customer's email and WhatsApp instantly. No more manually creating invoices in Word or Excel.

---

## Invoice Details

**What is this?** The Invoice Details screen shows the complete information about a single invoice — all line items, tax breakdown, payment status, and history.

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

**What to tell sir:** Sir, this is the full view of one invoice. If a franchisee says "I received an incorrect invoice," the accounts team opens this screen, sees all the line items and the amount, and can issue a corrected version or a credit note from here. Every invoice detail is preserved and auditable.

---

## Invoice List

**What is this?** The Invoice List is the complete directory of all invoices generated in the system, searchable and filterable.

**Why do we need it?** For monthly reconciliation, GST filing, and collection tracking, the accounts team needs to be able to quickly see all invoices — which are paid, which are outstanding, and which are overdue.

**What is inside?**
- Search by invoice number, customer name, or amount
- Filter: date range, status (Unpaid, Paid, Overdue, Draft, Cancelled), customer, brand, payment type
- Table: invoice number, customer, issue date, due date, amount, GST amount, total, status, payment received
- Click to view Invoice Details
- Bulk export (for GST filing, accounting software import)
- Pagination

**What to tell sir:** Sir, at the end of every month, the accounts team pulls this list, filters by the current month, and exports it for their GST filing and accounting records. Everything they need for monthly reconciliation is in this one export.

---

## GST Summary

**What is this?** The GST Summary screen provides a consolidated view of all GST liabilities and input tax credits for a given period, formatted for tax filing purposes.

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

**What to tell sir:** Sir, every month the CA asks for the GST summary. Instead of preparing it manually from Excel, the accounts team opens this screen, selects the month, and clicks Export. The system generates a clean summary ready to hand to the CA for GSTR-1 filing. This alone saves hours of manual work every month.

---

## Collection Management

**What is this?** The Collection Management screen is the dedicated workspace for the collections team — tracking all overdue payments, sending reminders, and managing the collection process systematically.

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

**What to tell sir:** Sir, the Collection Management screen is how the accounts team systematically recovers overdue payments. Each customer is assigned a stage — first a friendly WhatsApp reminder, then a formal email, then a more firm notice. The collector logs every conversation. If a customer promises to pay by Thursday, that date is recorded and the system reminds the collector on Friday to check if it came through. No overdue payment falls through the cracks.

---

## Pending Dues

**What is this?** The Pending Dues screen shows all amounts owed to iFranchise that have not yet been collected, across all customers and all types.

**Why do we need it?** The accounts team and management need a clear view of how much money the business is owed, categorised by type and urgency. This is a key financial health indicator.

**What is inside?**
- Total pending dues amount (headline number)
- Breakdown by type: Franchise Fees, Royalties, Marketing Fees, Other
- Breakdown by age: 0-30 days, 31-60 days, 61-90 days, 90+ days
- Customer list with individual outstanding amounts
- Sort by: amount owed, days overdue, customer name
- Action options: Send Reminder, View Invoice, Record Payment, Escalate
- Export pending dues report

**What to tell sir:** Sir, this screen shows exactly how much money the business is waiting to collect. If 90+ days overdue is 15 lakhs, that is money that has been owed for over three months and the legal or escalation process may need to start. This screen puts that conversation in front of management clearly so decisions can be made.

---

## Refunds

**What is this?** The Refunds screen manages all refund requests and processing — when a customer is entitled to a refund and the payment needs to be reversed or returned.

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

**What to tell sir:** Sir, if a franchise deal collapses and the initial franchise fee needs to be returned to the prospect, this screen handles the entire process — from request, to approval, to actual processing. Every refund is tracked with reasons and documentation so the accounts records are always accurate and compliant.

---

## Payment Approval

**What is this?** The Payment Approval screen manages approvals specifically for large or unusual payments that require authorisation before being confirmed.

**Why do we need it?** Not all payments should be recorded without review. Large refunds, unusual charges, or payments outside normal terms should go through an approval step before being posted to accounts. This screen manages that control.

**What is inside?**
- List of payments awaiting approval: customer, type, amount, submitted by, date
- View payment details and attached proof
- Approve button with mandatory comment
- Reject button with reason
- Request more info option
- SLA indicator for each pending approval
- Approved payments history (archive)

**What to tell sir:** Sir, if a field executive records a very large payment or an unusual transaction, it does not immediately go through — it sits here for review by the accounts manager or finance head. They verify the bank proof, confirm the amount, and approve it. This is a financial control that prevents errors and unauthorised recordings.

---

## Ledger

**What is this?** The Ledger screen shows the complete financial account statement for a specific customer — all charges, all payments, running balance, and credit/debit history.

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

**What to tell sir:** Sir, if a franchisee calls and says "I think I have been overcharged this year," the accounts team opens their ledger, selects the year, and walks through every invoice and payment. The running balance shows exactly where they stand at each point in time. No confusion, no back-and-forth. The ledger is the single authoritative financial statement.

---

## Financial Reports

**What is this?** The Financial Reports screen provides a set of standard financial reports — monthly revenue, collection summaries, brand-wise revenue, and period comparisons.

**Why do we need it?** Management needs regular reports to review financial performance. Instead of manually building reports in Excel, this screen generates them on demand in a consistent, accurate format.

**What is inside?**
- Report type selector: Monthly Revenue Report, Collection Report, Outstanding Dues Report, Brand-wise Revenue, Year-to-Date Summary, Custom Date Range
- Customer or brand filter (for filtered reports)
- Generate Report button
- Report preview in the browser
- Export as PDF or Excel
- Schedule report (auto-generate and email every month)
- Historical reports archive (previously generated reports stored here)

**What to tell sir:** Sir, on the 1st of every month, the accounts manager opens this screen, clicks "Generate Monthly Revenue Report," and has a formatted, accurate revenue report in 30 seconds. They export it to PDF and it is ready to share with management. No manual compilation from spreadsheets.

---

## Revenue Analytics

**What is this?** The Revenue Analytics screen provides deep, interactive analysis of the business's revenue — by brand, by customer, by geography, by payment type, and over time.

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

**What to tell sir:** Sir, this is where the financial story of the business comes alive in charts and numbers. If royalty revenue is flat for 3 months but franchise fee revenue is growing, it tells us we are onboarding new franchisees but existing ones may not be growing their sales. These insights drive strategic decisions — whether to focus on acquisition or franchisee support.

---

## Accounts Audit

**What is this?** The Accounts Audit screen provides a complete, tamper-proof log of every financial action in the system — every payment recorded, invoice generated, amount modified, and approval decision.

**Why do we need it?** Financial records must be auditable. This screen provides the evidence trail needed for internal audits, statutory audits, and tax assessments — every financial event with who did it, when, and what the exact amounts were.

**What is inside?**
- Chronological log of all financial actions
- Filter by action type (payment recorded, invoice generated, refund processed, amount modified), user, date range
- Each entry: timestamp, user, action, affected record, old and new values
- Search by payment reference, invoice number, or customer
- Cannot be edited or deleted
- Export as PDF or CSV
- Integration with the main system audit trail

**What to tell sir:** Sir, the Accounts Audit screen is the financial records equivalent of a paper trail that cannot be destroyed. If a statutory auditor asks for all payments received in Financial Year 2025-26, this screen generates a complete, tamper-proof log. Every transaction is there, with who recorded it and when. The business is completely audit-ready at any time.

---

# MODULE 10 — DOCUMENTS

The Documents module is the central file management system for the entire iFranchise CRM. All documents across all modules — agreements, proposals, ID proofs, brochures, receipts — are stored and managed here. There are 17 screens.

---

## Document Dashboard

**What is this?** The Document Dashboard is the overview screen for the entire document management system, showing document volumes, categories, and important alerts like expiring documents.

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

**What to tell sir:** Sir, the Document Dashboard tells the team at a glance how the document management system is performing. If 25 documents are expiring in the next 30 days — like KYC proofs or insurance certificates — the team can see that here and follow up with customers before there is a compliance lapse.

---

## Document Library

**What is this?** The Document Library is the master repository of all documents stored in the CRM, searchable and organised by category, type, and ownership.

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

**What to tell sir:** Sir, this is the central library of every document in the system. If the legal team needs to find all franchise agreements from the last year, they filter by type "Agreement" and date range. If the accounts team needs all payment receipts for a specific customer, they filter by customer name and type "Receipt." Any document, findable in under 30 seconds.

---

## Upload Document

**What is this?** The Upload Document screen is where team members add new files to the CRM's document system, linking them to the appropriate records and categorising them correctly.

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

**What to tell sir:** Sir, whenever a document needs to go into the system — a signed agreement, a customer's KYC, a brand's brochure — the team uploads it here. They link it to the relevant customer or brand record, categorise it, and set an expiry date if applicable. It is in the system in under a minute, properly organised and findable by anyone who needs it.

---

## Document Details

**What is this?** The Document Details screen shows complete information about a single document — its metadata, version history, access log, and any linked records.

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

**What to tell sir:** Sir, this screen is the full profile of one document. If there is ever a question "which version of the franchise agreement was sent to this customer?", the Document Details screen shows the exact version, when it was uploaded, and who accessed it. The access log also shows if the customer's email was used to open the document.

---

## Document Preview

**What is this?** The Document Preview screen allows team members to view a document directly in the browser without downloading it.

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

**What to tell sir:** Sir, rather than downloading every document to read it, the team simply clicks Preview and reads it right in the browser. This is especially useful for quickly checking that the right version of an agreement is stored before a client meeting, without filling up the laptop with downloaded files.

---

## Edit Document

**What is this?** The Edit Document screen allows authorised users to update a document's metadata — name, type, category, expiry date, linked records, and access settings — without replacing the actual file.

**Why do we need it?** Sometimes the wrong category was assigned, or the expiry date was missed, or the document needs to be linked to an additional record. This screen handles those corrections without disrupting the document itself.

**What is inside?**
- All metadata fields pre-filled and editable
- Version note: "If you want to replace the file, use the Replace Document function instead"
- Change log at the bottom
- Save Changes button

**What to tell sir:** Sir, if a document was uploaded under the wrong customer or with the wrong expiry date, the team can correct that here without re-uploading the file. The original file stays intact, only the information about the file is updated.

---

## Document Versions

**What is this?** The Document Versions screen shows the complete version history of a document — every time it was updated or replaced, preserving all previous versions.

**Why do we need it?** Documents like agreements and proposals go through multiple revisions. The version history ensures that older versions are never lost — they are preserved for legal and audit purposes. If a dispute arises about what was agreed, the exact document version from that date is retrievable.

**What is inside?**
- Version list: version number, upload date, uploaded by, notes, file size
- Download any specific version
- Compare two versions (if text-based documents)
- Mark a version as current (if an old version needs to be reinstated)
- Restore previous version option
- Delete old versions (admin only, with confirmation)

**What to tell sir:** Sir, the version history is essential for agreement management. If a franchise agreement was revised three times before signing, all four versions are here — the original, the two revisions, and the final signed version. If a legal question arises about what terms were offered at a certain point, we pull the exact version from that date.

---

## Shared Documents

**What is this?** The Shared Documents screen tracks all documents that have been shared externally — with customers, leads, or brand partners — via secure links or email.

**Why do we need it?** When documents are shared outside the organisation, the team needs to track what was shared, with whom, when, and whether it has been accessed. This provides accountability and security for external document sharing.

**What is inside?**
- List of all shared documents with: document name, shared with (name/email), shared by, share date, access type (view only, download), expiry of share link, access count (how many times opened)
- Status: Active, Expired, Revoked
- Revoke access button (immediately deactivates the shared link)
- Extend link expiry button
- Resend link button
- Filter by: active/expired/revoked, shared by, date range

**What to tell sir:** Sir, this screen gives the team control over every document shared outside the company. If a franchise brochure was shared with 50 prospects, they can see how many opened it. If a sensitive document was accidentally shared with the wrong person, access can be revoked immediately. It is the external document security layer.

---

## Folders

**What is this?** The Folders screen allows the team to organise documents into a structured folder hierarchy — similar to a file explorer — for easier navigation of large document collections.

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

**What to tell sir:** Sir, the Folders feature lets the team organise documents the way they think about them — Brand A folder, Customer Agreements folder, Marketing Materials folder. New team members can navigate to the folder they need without having to know specific document names. It brings a familiar file system structure to the CRM.

---

## Customer Documents (Central)

**What is this?** The Customer Documents screen in the Documents module is a central view of all documents across all customers, allowing the team to see, search, and manage customer documentation at scale.

**Why do we need it?** While each customer profile has their own documents tab, sometimes the team needs to see all customer documents together — for example, to check which customers have not submitted their renewal KYC, or to audit all agreements due for renewal.

**What is inside?**
- Customer filter (view all or filter by specific customer)
- Document type filter
- Status filter (Active, Expired, Expiring, Pending)
- Table: customer name, document type, document name, upload date, expiry, status
- Bulk download option
- Send reminder to customers with missing or expiring documents
- Export customer document status report

**What to tell sir:** Sir, if the compliance team needs to check that every active franchisee has submitted their current KYC documents, they come to this screen, filter by document type "ID Proof" and status "Expired," and immediately see the list of franchisees who need to resubmit. They can send a reminder directly from this screen.

---

## Brand Documents (Central)

**What is this?** The Brand Documents screen in the Documents module provides a central view of all documents across all brands.

**Why do we need it?** Brand management requires tracking many brand-level documents across multiple brands. This screen provides a helicopter view.

**What is inside?**
- Brand filter
- Document type and status filters
- Table: brand name, document type, name, version, upload date, expiry, status
- Update required indicator (for documents that need a newer version)
- Quick access to download brand brochures and templates for sharing

**What to tell sir:** Sir, this screen lets the brand management team see the document status for all brands at once. If Brand A's franchise disclosure document was last updated 18 months ago, the system flags it here for review. Keeping brand documents current is important for regulatory compliance and for giving accurate information to prospects.

---

## Agreement Documents

**What is this?** The Agreement Documents screen centralises all franchise and business agreements across the entire CRM — all customer agreements, brand agreements, and partner agreements in one searchable view.

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

**What to tell sir:** Sir, the legal team uses this screen to manage the entire agreement portfolio. They can see at a glance how many agreements are coming up for renewal in the next 60 days and start the renewal process early. Expired agreements that have not been renewed are highlighted immediately, so no franchisee is operating without a current, signed agreement.

---

## Payment Documents

**What is this?** The Payment Documents screen centralises all financial documents — invoices, receipts, payment proofs, bank statements, and GST documents.

**Why do we need it?** For accounts reconciliation, tax compliance, and dispute resolution, the accounts team needs a dedicated view of all financial documents separate from other document types.

**What is inside?**
- Document type filter: Invoice, Receipt, Payment Proof, Bank Statement, GST Document, Credit Note
- Customer filter
- Date range filter
- Table: document name, type, customer, amount, date, linked payment, status
- Download and preview
- Bulk export for accounting purposes

**What to tell sir:** Sir, come audit time, the accounts team needs every invoice, receipt, and payment proof in one place. This screen is specifically for financial documents so they do not have to wade through agreements and brochures. They select the date range, export all financial documents, and hand it to the auditors.

---

## Approval Documents

**What is this?** The Approval Documents screen centralises all documents that were submitted as part of approval requests across the system.

**Why do we need it?** Approvals often involve supporting documents. Having a dedicated view of all approval-supporting documents helps the compliance team review decision-making and ensures documentation standards are being met.

**What is inside?**
- Filter by approval type, date, requester, outcome
- Table: document name, linked approval ID, approval type, requester, date, decision outcome
- Download and preview
- Quick link to the full approval record

**What to tell sir:** Sir, this screen is mostly used during compliance audits. If the auditor wants to see all documents submitted in support of payment discount approvals in the last year, this screen filters exactly that.

---

## Expiry Tracker

**What is this?** The Expiry Tracker screen monitors all documents that have an expiry date — agreements, licenses, ID proofs, insurance certificates — and alerts the team to documents that are expiring soon or have already expired.

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

**What to tell sir:** Sir, the Expiry Tracker is the proactive compliance tool. It automatically flags documents before they expire. If a franchisee's GST registration is expiring next month, the system alerts the relationship manager so they can remind the franchisee to renew. A small reminder prevents a major compliance problem.

---

## Bulk Document Management

**What is this?** The Bulk Document Management screen allows the team to perform actions on multiple documents at once — bulk download, bulk move to folders, bulk status updates, or bulk deletion.

**Why do we need it?** Managing documents one by one is inefficient at scale. When migrating from another system, doing year-end archiving, or cleaning up duplicate files, bulk actions save hours of work.

**What is inside?**
- Document list with checkboxes
- Select All and Deselect All
- Bulk actions: Download Selected (as ZIP), Move to Folder, Change Category, Archive, Delete (admin only)
- Preview before bulk action confirmation
- Progress bar during bulk operations
- Results summary after action: "48 documents moved, 2 failed (click to see details)"

**What to tell sir:** Sir, when we are onboarding a new branch and need to move 200 documents into the right folder structure, or when archiving all documents from a closed franchise, the bulk management screen handles it in one go. Select all, choose the action, confirm — done in minutes instead of hours.

---

## Document Audit

**What is this?** The Document Audit screen provides a complete, tamper-proof log of every action performed on every document — uploads, downloads, views, edits, deletions, and shares.

**Why do we need it?** For legal compliance and data security, all document activity must be traceable. If a sensitive document was accessed without authorisation, or if someone deleted a critical file, the audit log shows exactly what happened.

**What is inside?**
- Chronological log of all document-related actions across the system
- Each entry: timestamp, user, action (uploaded, viewed, downloaded, edited, deleted, shared, accessed via share link), document name and ID
- Filter by user, action type, document category, date range
- Cannot be edited or deleted
- Export as CSV or PDF
- IP address and device recorded for sensitive actions

**What to tell sir:** Sir, the Document Audit is the security layer over the entire file system. If a document goes missing or is found to have been accessed without permission, this log shows every access event. Every download, every view, every share — fully logged and permanently available.

---

# MODULE 11 — NOTIFICATIONS

The Notifications module manages all system notifications, alerts, and communications sent by the CRM to users and external contacts. There are 17 screens.

---

## Notification Dashboard

**What is this?** The Notification Dashboard is the overview screen showing the health and volume of all notifications sent by the system across all channels.

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

**What to tell sir:** Sir, this is the Notification Dashboard. It tells the team whether the communication systems are healthy. If the WhatsApp service has a 40% failure rate today, this screen shows that immediately and the admin can investigate. If 500 notifications were sent today and 490 were delivered, the system is working well.

---

## Notification Centre

**What is this?** The Notification Centre is the personal inbox where each user receives all their system notifications — alerts, reminders, and updates relevant to their work.

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

**What to tell sir:** Sir, every executive sees their Notification Centre as soon as they log in. If a new lead was assigned to Himani, she gets a notification here. If a meeting is starting in 30 minutes, a reminder appears. If a payment approval needs her attention, it shows up. Instead of checking multiple apps and email, everything is in one place.

---

## All Notifications

**What is this?** The All Notifications screen is a complete, searchable, filterable list of every notification the system has ever generated — for admin and management review.

**Why do we need it?** Admins and managers need to see the full notification history — not just their own notifications, but all notifications across all users and channels, for auditing, troubleshooting, and performance review.

**What is inside?**
- Search by notification title, recipient, or content
- Filter: by channel, by type, by recipient, by status (sent/delivered/read/failed), by date range
- Table: notification ID, type, channel, recipient, sent at, status, linked record
- Click to view full notification details
- Resend failed notifications button
- Export notifications list
- Total count for filtered view

**What to tell sir:** Sir, if a customer calls to say they never received their invoice email, the admin searches this screen for their name and finds every notification sent to them. They can see whether the email was sent, delivered, or failed. If it failed, they resend it from here. Complete visibility into every communication the system has sent.

---

## Notification Details

**What is this?** The Notification Details screen shows the complete information about a single notification — full content, delivery status, and recipient information.

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

**What to tell sir:** Sir, the Notification Details screen is for investigation and quality review. If the CEO wants to see exactly what email was sent to a franchisee when they signed up, this screen shows the exact email — subject, body, formatting — and confirms whether it was delivered and when it was read. Complete transparency in communications.

---

## Notification Preferences

**What is this?** The Notification Preferences screen allows each user to customise which notifications they receive, on which channels, and at what frequency.

**Why do we need it?** Different users have different information needs. A senior manager might want daily summary emails rather than individual alerts. An executive might want WhatsApp alerts for hot leads but not for routine system events. Personalisation prevents notification fatigue.

**What is inside?**
- Grouped list of all notification types
- For each type: toggle on/off, channel selector (Email, SMS, WhatsApp, Push), frequency selector (Immediate, Daily Digest, Weekly Summary)
- Important notifications: some cannot be turned off (security, approval deadlines) — shown as locked
- "Apply to all" quick set options
- Save Preferences button
- Reset to defaults button

**What to tell sir:** Sir, each team member can set up their own notification preferences. The sales executive can choose to get WhatsApp alerts only for new lead assignments and meetings. The CEO can choose a daily email digest instead of real-time pings. This means people get the information they need without being overwhelmed by notifications that are not relevant to their role.

---

## Email Notifications

**What is this?** The Email Notifications screen manages all email-based notifications — templates, sending status, and email channel configuration.

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

**What to tell sir:** Sir, this screen is specifically for managing the email communication layer. If meeting confirmation emails have a 20% open rate but payment reminder emails have an 80% open rate, that tells us something about what customers pay attention to. The bounce list tells the team whose email addresses need to be updated.

---

## SMS Notifications

**What is this?** The SMS Notifications screen manages all SMS-based notifications — templates, delivery tracking, and SMS gateway configuration.

**Why do we need it?** SMS is the most reliable channel for time-sensitive alerts. This screen ensures SMS notifications are working correctly and gives visibility into delivery rates.

**What is inside?**
- SMS notification types and their templates
- SMS delivery statistics: sent, delivered, failed
- Failed SMS list with error codes
- DND filter status (ensures SMS are not sent to DND numbers, which would cause regulatory issues)
- SMS balance (credits remaining, if using a pay-per-SMS gateway)
- SMS character count per template (important for cost management)
- Retry failed SMS button

**What to tell sir:** Sir, SMS delivery is critical for payment reminders and meeting reminders. This screen shows the team how many SMS were sent, how many went through, and how many failed — and why. DND compliance is automatically handled so the company does not violate TRAI regulations.

---

## WhatsApp Notifications

**What is this?** The WhatsApp Notifications screen manages all WhatsApp-based notifications, which are the most commonly used and responded-to channel for franchise prospect communication.

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

**What to tell sir:** Sir, WhatsApp is our most effective communication channel for leads and customers. This screen shows that meeting reminder WhatsApp messages have a 90% read rate compared to 40% for email. It also manages the compliance side — all WhatsApp templates must be approved by Meta's business API before we can send them in bulk. This screen handles that approval process.

---

## Push Notifications

**What is this?** The Push Notifications screen manages in-app and browser push notifications for CRM users.

**Why do we need it?** Push notifications are the fastest way to alert users inside the application — a new lead assigned, an approval needed, a meeting starting. This screen manages the push notification system and tracks engagement.

**What is inside?**
- Push notification types and templates
- Delivery statistics: sent, delivered, clicked
- Users who have disabled push notifications
- Browser permission status per user
- Test notification button
- Notification sound settings

**What to tell sir:** Sir, push notifications are the instant alerts that pop up on the executive's screen or mobile while they are working. When a hot lead comes in, the assigned executive's screen shows a pop-up within seconds. This screen manages all of those instant alerts and shows whether users are engaging with them.

---

## Announcements

**What is this?** The Announcements screen is where system-wide messages are created and sent to all users or specific groups — for company updates, system maintenance notices, or important business announcements.

**Why do we need it?** Sometimes the management or admin needs to communicate something to all users at once — a system downtime, a new policy, a celebratory milestone. The Announcements screen broadcasts this to all relevant users within the CRM.

**What is inside?**
- Create announcement form: title, message, urgency level, target audience (all users, specific roles, specific teams)
- Schedule announcement or send immediately
- Channel: CRM notification centre, email, or both
- Announcements history: all past announcements with date, sender, audience, and read rate
- Active announcements (shown as a banner to users)
- Expire announcement (removes it from active display)

**What to tell sir:** Sir, if the admin needs to tell the entire team that the system will be down for maintenance on Saturday morning, they create an announcement here. It appears as a banner on everyone's dashboard the moment they log in. No need to send a mass email from outside the system.

---

## Reminders

**What is this?** The Reminders screen manages all automated reminder notifications in the system — for follow-ups, meetings, payments, document expiry, and task due dates.

**Why do we need it?** Reminders are the system's way of proactively telling people what needs to be done. Instead of relying on memory or manual follow-up, the system sends reminders automatically based on configured rules.

**What is inside?**
- List of all active reminder rules: what event triggers the reminder, how many days before, which channel, recipient
- Create reminder rule button
- Edit and delete reminder rules
- Reminder history: all reminders sent, for whom, and what action resulted
- Test reminder button (to verify a new rule before activating it)
- Pause/Resume rules

**What to tell sir:** Sir, reminders run automatically without anyone having to think about them. Three days before a meeting, the executive gets a WhatsApp reminder. Two days before a payment is due, the customer gets an SMS. Seven days before a document expires, the relationship manager gets an email. These are set up once and run continuously. The team never has to remember to send reminders manually.

---

## Scheduled Notifications

**What is this?** The Scheduled Notifications screen shows all notifications that have been created but are set to be sent at a future time — allowing the team to review, edit, or cancel outgoing communications before they are sent.

**Why do we need it?** Scheduled notifications can be reviewed and corrected before they go out. If a payment reminder was scheduled to go to the wrong customer, this screen allows the admin to catch and fix it before it causes confusion.

**What is inside?**
- List of all notifications scheduled for future sending
- Each entry: type, recipient, channel, scheduled time, content preview
- Edit scheduled notification (change content, time, or recipient)
- Cancel/Delete scheduled notification
- Sort by scheduled time
- Filter by channel or type

**What to tell sir:** Sir, the Scheduled Notifications screen is like a review queue for outgoing messages. If a notification was scheduled for 11 PM by mistake, the admin can see it here and change the time before it goes out. It is the quality check layer before communications reach customers or leads.

---

## Notification Templates

**What is this?** The Notification Templates screen is where reusable templates for all notification types are stored, managed, and edited — for email, SMS, WhatsApp, and push notifications.

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

**What to tell sir:** Sir, every automated message the system sends comes from a template stored here. When a franchisee gets a "Welcome to iFranchise" email, that email was written and approved in this screen. Templates ensure that all communication is professional, on-brand, and accurate. If the management wants to update the tone of the payment reminder message, they change the template once here and it applies to all future reminders automatically.

---

## Notification Analytics

**What is this?** The Notification Analytics screen provides performance data on all notification channels — delivery rates, open rates, engagement, and trends.

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

**What to tell sir:** Sir, this screen tells the team what is working in their communication strategy. If WhatsApp reminders have a 92% read rate and email reminders have a 38% read rate, the team should focus on WhatsApp for time-sensitive communications. If the welcome email has a 10% open rate, the subject line or timing needs to be changed. Data drives better communication.

---

## Delivery Status

**What is this?** The Delivery Status screen provides a real-time view of the current status of all outgoing notifications — sent, queued, in progress, delivered, or failed.

**Why do we need it?** When a batch of notifications is triggered — say, 500 payment reminders going out simultaneously — the team needs to monitor the sending progress and catch any failures in real time.

**What is inside?**
- Live sending queue: notifications currently being sent
- Delivery status breakdown: Queued, Sending, Delivered, Failed, Read
- Real-time delivery progress for bulk sends
- Failed notifications with error details
- Retry failed notifications button
- Gateway status indicators (email server, SMS gateway, WhatsApp API)
- Throughput rate: messages per minute being processed

**What to tell sir:** Sir, when a large batch of payment reminders goes out on the 1st of the month, this screen shows the real-time sending progress. If 480 of 500 were delivered and 20 failed, the admin can see the 20 failures immediately and retry or investigate. No waiting until the end of the day to discover that reminders never went through.

---

## Failed Notifications

**What is this?** The Failed Notifications screen is a dedicated view of all notifications that failed to be delivered, with the reason for failure and options for retry or manual follow-up.

**Why do we need it?** Failed notifications mean someone did not receive an important alert — a meeting reminder, a payment notice, or an approval request. This screen ensures those failures are addressed so the communication still happens.

**What is inside?**
- List of all failed notifications: type, recipient, channel, failure timestamp, error code and reason
- Common failure reasons: Invalid phone number, Inactive email, WhatsApp not registered, Network timeout
- Retry button per notification
- Bulk retry button
- Mark as resolved (if alternate contact was made manually)
- Update recipient contact details link (to fix the underlying data issue)
- Filter by channel, date range, or failure reason

**What to tell sir:** Sir, the Failed Notifications screen is the exception handling area. If 15 WhatsApp messages failed because those numbers are not registered on WhatsApp, the team can see them here, switch to SMS for those contacts, and make sure the communication still reaches them. No important message is just abandoned because of a delivery failure.

---

## Notification Audit

**What is this?** The Notification Audit screen is the complete, tamper-proof log of every notification event in the system — every notification created, sent, delivered, read, and failed.

**Why do we need it?** For compliance and dispute resolution, the team sometimes needs to prove that a specific communication was sent and delivered. This audit log provides that evidence.

**What is inside?**
- Complete chronological log of all notification events
- Filter by event type, user, recipient, channel, date range
- Each entry: timestamp, action, recipient, channel, content reference, delivery status
- Cannot be edited or deleted
- Export as PDF or CSV

**What to tell sir:** Sir, the Notification Audit is the communication record that the system keeps permanently. If a franchisee disputes "I was never told my agreement was expiring," the audit log shows exactly when the notification was sent, through which channel, and the delivery status. It is the protection against communication disputes.

---

# MODULE 12 — ANALYTICS

The Analytics module is one of the most powerful parts of the CRM. It provides 25 screens of data analysis covering every aspect of the business — from lead conversion to team performance to revenue trends.

---

## Executive Analytics

**What is this?** The Executive Analytics screen is the highest-level strategic analytics view, designed for the CEO and leadership team, presenting the most important business metrics in a clean, decision-oriented format.

**Why do we need it?** Leadership needs a single screen that answers "how is the business doing?" with reliable, up-to-date numbers — without having to build reports or ask the team for data.

**What is inside?**
- Revenue this month vs target vs last month
- Total leads vs conversions (funnel summary)
- Active franchisees count and growth rate
- Team performance summary
- Brand performance ranking
- Geographic distribution of new business
- Key milestones (first 100 customers, highest revenue month, etc.)
- Month-on-month growth chart
- Key risks: overdue payments, expiring agreements, low-performing brands
- Export board report button

**What to tell sir:** Sir, this is your personal analytics screen. It is specifically designed for the CEO's review — no data clutter, just the key numbers that matter for strategic decisions. Revenue, growth, team performance, risk areas — all in one clean view. You can export this as a board report without any additional work.

---

## Reports Dashboard

**What is this?** The Reports Dashboard is the central hub for all generated reports in the system — standard reports, custom reports, and scheduled reports.

**Why do we need it?** Different teams need different reports at different times. The Reports Dashboard organises all available reports, shows recent generations, and allows new reports to be created or scheduled.

**What is inside?**
- Standard reports library: list of pre-built report types (Lead Report, Sales Report, Revenue Report, etc.)
- Recent reports generated by the user
- Scheduled reports (auto-generated on a schedule)
- Shared reports (reports shared with the user by others)
- Favourite reports (starred for quick access)
- Create Custom Report button
- Schedule Report button
- Export history

**What to tell sir:** Sir, the Reports Dashboard is the library for all data reports. The sales manager can find their standard weekly performance report here with one click. The accounts team finds their monthly revenue report. Reports can be scheduled to generate and email automatically every Monday morning, so the manager gets the report in their inbox without doing anything.

---

## Sales Analytics

**What is this?** The Sales Analytics screen provides a comprehensive analysis of the sales team's performance — leads handled, meetings conducted, proposals sent, and conversions achieved.

**Why do we need it?** Sales managers need data to coach their team, set targets, and identify where the sales process breaks down. This screen provides that evidence-based view of sales activity.

**What is inside?**
- Time period selector
- Total sales (conversions) this period vs previous period
- Sales by executive (bar chart and table)
- Sales by brand
- Sales by geography (state and city)
- Sales pipeline conversion rates: leads → contacted → meeting → proposal → converted
- Average sales cycle length (days from lead creation to conversion)
- Win rate by lead source
- Win rate by brand
- Win rate by executive
- Revenue generated from conversions
- Target vs actuals by executive

**What to tell sir:** Sir, this screen tells the complete sales story. Which executive is closing the most deals? Which lead source gives the best conversion rate? How long does it typically take from a lead inquiry to signing the agreement? If it takes an average of 45 days to close and the target is 30 days, the team can look at where those extra 15 days are being lost.

---

## Lead Conversion Analytics

**What is this?** The Lead Conversion Analytics screen analyses the entire lead funnel in depth — where leads come from, where they drop off, and what drives conversion.

**Why do we need it?** Understanding conversion is the core of improving sales performance. This screen answers the detailed questions: which source leads convert best? At what stage do most leads drop out? How has conversion rate changed over time?

**What is inside?**
- Lead funnel visualisation: number of leads at each stage
- Stage-by-stage drop-off rates
- Conversion rate overall and by source, brand, geography, executive
- Time in each stage analysis (where leads spend the most time)
- Lost leads analysis: reasons for loss and when in the funnel they were lost
- Won back leads: archived leads that were reactivated and later converted
- Month-on-month conversion rate trend
- Benchmark comparison: current month vs 3-month average vs best month ever
- Best converting lead sources
- Worst converting lead sources

**What to tell sir:** Sir, this screen shows exactly where leads are being lost. If 60% of leads drop out between "Contacted" and "Meeting Scheduled," that means the team is calling leads but not convincing them to come for a meeting. The problem is the phone conversation quality, not the meeting quality. This screen identifies exactly where to focus improvement efforts.

---

## Customer Analytics

**What is this?** The Customer Analytics screen analyses the franchisee customer base — retention rates, revenue per customer, geographic distribution, and customer lifecycle metrics.

**Why do we need it?** Growing the franchise network requires both acquisition and retention. This screen helps management understand the health of the existing franchisee base and identify patterns that predict success or failure.

**What is inside?**
- Total active customers and growth rate
- Customer churn rate (franchisees who terminated or did not renew)
- Average franchise tenure
- Revenue per customer (average and by brand)
- Top revenue-generating customers
- Geographic distribution of customers (state heat map)
- Customers by brand
- Renewal rate (agreements renewed vs not renewed)
- New customers vs churn rate trend
- Customer health segmentation: Healthy, At Risk, Inactive

**What to tell sir:** Sir, this screen tracks the health of the existing franchisee network. If the churn rate is increasing — more agreements terminating than renewing — that is a serious business problem. This screen makes that trend visible early, so the team can investigate and take corrective action before it becomes a crisis.

---

## Brand Analytics

**What is this?** The Brand Analytics screen provides a performance comparison of all brands in the iFranchise portfolio — lead generation, conversions, franchisee health, and revenue contribution.

**Why do we need it?** iFranchise invests different levels of effort and resources in different brands. This screen shows which brands are delivering returns and which are underperforming, enabling smarter resource allocation.

**What is inside?**
- Brand performance table: leads, conversions, conversion rate, revenue, active franchisees
- Brand ranking by performance
- Year-on-year growth by brand
- Cost per acquisition by brand (marketing spend / conversions)
- Franchisee health score per brand
- Revenue contribution by brand (pie chart)
- Leads generated per brand per month (trend)
- Brand comparison tool: select two brands to compare side by side

**What to tell sir:** Sir, this screen shows which brands are performing for iFranchise. If Brand A generates 200 leads a month and has a 15% conversion rate, and Brand B generates 50 leads with a 5% conversion rate, the analytics tell a very different story about where to invest sales energy. This is the data behind portfolio management decisions.

---

## Franchise Model Analytics

**What is this?** The Franchise Model Analytics screen analyses which franchise models are most popular, best converting, and most profitable for the business.

**Why do we need it?** With multiple models per brand, the team needs to know which models the market is responding to. Are prospects preferring the kiosk model or the full store? Which model has the fastest conversion cycle?

**What is inside?**
- Model inquiry count vs conversion count
- Conversion rate by model
- Average investment amount per model
- Revenue generated per model (franchise fees and royalties)
- Most inquired model this month
- Fastest converting model
- Model performance over time (trend chart)
- Model comparison: side-by-side metrics for up to 3 models

**What to tell sir:** Sir, this screen tells the sales team which franchise models the market wants. If the 10-lakh kiosk model gets 10 times more inquiries than the 30-lakh full store, but the full store converts at higher rates, the team can plan their pitch accordingly — use the kiosk as the entry point but try to upgrade prospects to the full store model.

---

## Meeting Analytics

**What is this?** This is the standalone Meeting Analytics screen from the Analytics module (separate from the one in the Meetings module) providing a system-wide, cross-team analysis of meeting performance.

**Why do we need it?** At the analytics level, meeting data is analysed in aggregate to identify patterns and optimise the meeting strategy across the entire organisation.

**What is inside?**
- Total meetings across all teams
- Meeting volume trend (month-on-month)
- Meeting-to-conversion rate by brand, by geography, by executive
- Meeting type effectiveness (in-person vs video vs phone conversion rates)
- Best performing days and times for meetings
- Meeting preparation score (correlation between agenda completeness and positive outcomes)
- Multi-meeting analysis (how many meetings on average before conversion by brand)

**What to tell sir:** Sir, at the analytics level, this screen answers strategic questions. Do in-person meetings convert at a higher rate than video calls? How many meetings on average does it take to close a deal for each brand? This data helps the team decide whether to invest in more in-person meeting infrastructure or whether video calls are just as effective.

---

## Revenue Analytics

**What is this?** The Revenue Analytics screen (in the Analytics module) provides a strategic, trend-based view of all revenue streams with forecasting and growth analysis.

**Why do we need it?** This screen goes beyond the monthly reports to identify revenue trends, growth trajectories, and risks to future revenue.

**What is inside?**
- Revenue trend over 24 months (line chart)
- Revenue breakdown by type: one-time fees vs recurring royalties
- Revenue predictability score (how much revenue is contracted vs uncertain)
- Seasonal patterns (months with highest and lowest revenue)
- Revenue per brand over time
- Revenue growth rate
- Forecast for next 3 months based on agreements and pipeline
- Revenue concentration risk: dependency on top 5 customers

**What to tell sir:** Sir, this analytics view looks at revenue over a longer period and asks "where is the business heading?" If recurring royalty revenue has been growing by 8% month-on-month for the last year, that is a positive trend the board wants to see. If revenue concentration shows that 60% comes from just 5 customers, that is a risk that management needs to address.

---

## Payment Analytics

**What is this?** The Payment Analytics screen analyses payment collection patterns — on-time payment rates, collection efficiency, and payment method trends.

**Why do we need it?** Collections efficiency directly affects cash flow. This screen helps the accounts team and management understand payment behaviour, identify problem customers, and improve the collection process.

**What is inside?**
- On-time payment rate (percentage of payments received by due date)
- Average days to payment after due date (by customer, by brand, by model)
- Payment method breakdown (bank transfer, cheque, online, cash)
- Collection efficiency trend
- Customers consistently paying late
- Payment seasonality (which months have higher on-time rates)
- Impact of payment reminders (before and after reminder automation)

**What to tell sir:** Sir, this screen tells the accounts team how well the collection process is working. If on-time payment rates improved from 55% to 78% after implementing automated WhatsApp reminders, that is a clear win from the automation. If certain franchisees are consistently 30+ days late every month, the team can address the root cause rather than just chasing every month.

---

## Team Analytics

**What is this?** The Team Analytics screen provides a comprehensive performance analysis of all team members — their activity levels, conversion rates, and contribution to business targets.

**Why do we need it?** Fair, data-driven performance management requires consistent measurement. This screen gives managers the data to reward high performers, coach underperformers, and make informed promotion and compensation decisions.

**What is inside?**
- Team performance scorecard (all executives ranked by a composite performance score)
- Metrics per executive: leads handled, calls made, meetings done, conversions, revenue generated
- Target attainment percentage per person
- Activity trend: week-over-week activity for each executive
- Peer comparison charts
- Performance by team and by branch
- Year-on-year individual growth
- Export performance data for HR review

**What to tell sir:** Sir, this screen makes performance management objective and fair. Every metric that matters — calls, meetings, conversions, revenue — is measured for each team member. The manager can see that Himani has the highest conversion rate but the lowest call volume, and coach accordingly. No subjectivity — just data.

---

## Geographic Analytics

**What is this?** The Geographic Analytics screen maps business performance across different states and cities — showing where leads are coming from, where conversions are happening, and where the most franchisees are located.

**Why do we need it?** Understanding geographic performance helps in marketing allocation, territory expansion planning, and identifying underserved markets with high potential.

**What is inside?**
- India map with state-level heat mapping (colour intensity showing performance)
- Metric selector: leads, conversions, franchisees, revenue, pipeline value
- State drill-down: click a state to see city-level breakdown
- Top 10 performing states table
- States with zero or minimal presence (opportunity identification)
- Geographic trend: which states are growing vs declining
- Lead source by geography
- Conversion rate by geography

**What to tell sir:** Sir, this map-based analytics screen shows where the business is concentrated and where the opportunities are. If Maharashtra generates 40% of all leads but only has 15% of franchisees, there is a strong opportunity to accelerate conversions there. If North-East India has minimal presence, it could be a whitespace for expansion.

---

## KPI Dashboard

**What is this?** The KPI Dashboard is a customisable screen where the management team defines and monitors Key Performance Indicators — the metrics that matter most for the business.

**Why do we need it?** Different businesses have different KPIs. This screen lets management define what success looks like in numbers, set targets, and track actual performance against those targets in real time.

**What is inside?**
- KPI cards: each showing the metric name, current value, target, and variance
- Traffic light colour coding: green (on target), amber (close to target), red (off target)
- KPI trend sparklines (mini charts showing direction)
- Add/remove/reorder KPI cards
- KPI threshold configuration (set warning and critical thresholds)
- Historical KPI performance
- Share KPI dashboard button

**What to tell sir:** Sir, the KPI Dashboard is your custom scorecard. You decide which 8 or 10 numbers define success this month — conversion rate, revenue, new franchisees, payment collection rate, NPS score — and this screen tracks all of them with colour coding. One look and you know if the business is on track.

---

## Custom Report Builder

**What is this?** The Custom Report Builder is a no-code report creation tool that allows any authorised user to build their own data reports without needing technical skills.

**Why do we need it?** Standard reports do not cover every business question. The Custom Report Builder lets team leads and managers build exactly the report they need — selecting data fields, filters, groupings, and visualisations — without needing IT support.

**What is inside?**
- Data source selector (Leads, Customers, Payments, Meetings, etc.)
- Field picker: drag and drop columns to include
- Filter builder: add conditions (e.g., "Brand = Brand A AND State = Maharashtra AND Date Range = Last Quarter")
- Group by option (e.g., group results by executive or by city)
- Aggregation: count, sum, average, maximum, minimum
- Sort order selection
- Chart type selector: table, bar, line, pie
- Preview report button
- Save report button (name and description)
- Schedule report option
- Share report with others

**What to tell sir:** Sir, the Custom Report Builder means the team never has to wait for IT to build a report. If the brand manager needs a report showing all Maharashtra leads interested in food brands that converted in Q2, they build it themselves in this screen — select the fields, add the filters, click Preview, and the report is ready. If they need it every quarter, they save it and schedule it.

---

## Scheduled Reports

**What is this?** The Scheduled Reports screen manages all reports that are set to generate and distribute automatically on a regular schedule.

**Why do we need it?** Management needs regular reporting without manual effort. Scheduled reports ensure that the CEO receives their weekly performance summary every Monday morning, and the accounts team gets their monthly revenue report on the 1st of every month — automatically.

**What is inside?**
- List of all scheduled reports: name, type, frequency, recipients, last sent, next send date
- Create new schedule button
- Edit schedule: change frequency, recipients, or time
- Pause/Resume schedule
- Run now button (generate the report immediately outside the schedule)
- History: all past scheduled report generations with download links
- Failure alerts: if a scheduled report failed to generate

**What to tell sir:** Sir, this screen manages automatic reporting. Once the schedule is set, reports go out without anyone having to remember. The CEO's dashboard summary goes every Monday at 8 AM. The collection report goes to the accounts head every Friday at 5 PM. No manual work, no missed reports.

---

## Export Analytics

**What is this?** The Export Analytics screen provides a centralised place to export data from any module in multiple formats — CSV, Excel, PDF — for external analysis, reporting, or sharing.

**Why do we need it?** Teams often need to take data out of the CRM into Excel for custom analysis, or share formatted reports as PDFs. This screen standardises and simplifies data export.

**What is inside?**
- Data source selector (any module)
- Filter options (apply the same filters as in-app views)
- Export format selector: CSV, Excel, PDF, JSON
- Fields selector: choose which fields to include
- Date range picker
- Export now button
- Scheduled export option (auto-export data to a folder or email at set intervals)
- Export history: previous exports with download links

**What to tell sir:** Sir, when the CA or an external consultant needs the raw data, this is where the accounts team exports it. They select the module, set the date range and filters, choose Excel format, and download a clean file. Scheduled exports can also automatically push data to external accounting software or an FTP folder every month.

---

## Employee Performance Analytics

**What is this?** The Employee Performance Analytics screen provides a detailed, data-driven analysis of individual employee performance across all measurable activities in the CRM.

**Why do we need it?** HR and management need consistent, objective data for performance reviews, incentive calculations, and promotion decisions. This screen aggregates all employee activity data into a comprehensive performance view.

**What is inside?**
- Period selector (monthly, quarterly, annual)
- Employee selector or all-team view
- Performance metrics: leads assigned, leads worked, calls made, meetings done, proposals sent, conversions, revenue attributed, tasks completed, approval turnaround time
- Performance score calculation (composite weighted score)
- Ranking and percentile
- Month-on-month trend per employee
- Peer comparison
- Performance flags: consistent high performer, improving, declining, needs support
- Export performance report for HR

**What to tell sir:** Sir, this screen is what HR and management use for quarterly reviews and annual appraisals. Every metric that a sales executive or accounts person does is measured here. The performance score gives a fair, weighted view of each person's contribution. No more subjective judgments — "Himani had a strong quarter, here is the data to prove it."

---

## Call Performance Analytics

**What is this?** The Call Performance Analytics screen analyses phone call activity across the team — call volumes, durations, outcomes, and conversion rates from calls.

**Why do we need it?** Calling is a primary sales activity. This screen measures calling effectiveness — who is making the most calls, how long those calls are, and most importantly, which calls lead to meetings and conversions.

**What is inside?**
- Total calls made this period by the team
- Calls by executive (ranking)
- Call duration analysis (average, minimum, maximum)
- Call outcome distribution: Connected, No Answer, Busy, Voicemail
- Connected-to-meeting conversion rate
- Best time of day for successful connections
- Call volume trend
- Executive comparison: calls vs meetings vs conversions
- Integration with call intelligence (if connected)

**What to tell sir:** Sir, this screen shows whether the team is calling enough and whether those calls are converting into meetings. If one executive makes 50 calls a day but only gets 2 meetings, while another makes 20 calls and gets 8 meetings, the conversion rate tells us who is more effective on the phone. This is the data for coaching conversations.

---

## Marketing ROI Analytics

**What is this?** The Marketing ROI Analytics screen measures the return on investment from all marketing activities — how much was spent on each channel and how many leads and conversions resulted.

**Why do we need it?** Marketing budgets need to be justified with data. This screen shows exactly which marketing channels and campaigns are delivering value and which are not, enabling smarter spend decisions.

**What is inside?**
- Total marketing spend this period (by channel)
- Total leads generated (by channel)
- Total conversions attributed to marketing (by channel)
- Cost per lead by channel
- Cost per conversion by channel
- Return on ad spend (revenue generated / ad spend)
- Best performing channel
- Worst performing channel
- Channel contribution to total leads (pie chart)
- Marketing ROI trend (improving or declining)

**What to tell sir:** Sir, this screen justifies every rupee spent on marketing. If Facebook ads cost 200 rupees per lead but only convert at 3%, and Google ads cost 800 rupees per lead but convert at 12%, the ROI calculation might favour Google despite the higher per-lead cost. This screen does that math automatically so the marketing budget goes where it generates the best returns.

---

## Lead Source Analytics

**What is this?** The Lead Source Analytics screen analyses the performance of different lead acquisition channels in depth.

**Why do we need it?** Different lead sources produce leads of different quality. This screen breaks down exactly how each source performs at every stage of the funnel, from lead count to final conversion.

**What is inside?**
- Total leads by source (all time and this period)
- Lead source trend (which sources are growing vs declining)
- Conversion rate by source
- Average deal value by source
- Lead quality score by source (based on conversion rates)
- Cost per lead by source (for paid sources)
- Time to conversion by source
- Geographic distribution by source
- Best lead sources ranking

**What to tell sir:** Sir, all lead sources are not equal. This screen shows that referral leads have a 35% conversion rate and website leads have a 4% rate. Even though website generates more volume, referrals generate more business per lead. This screen guides how the team invests its referral program vs digital marketing budget.

---

## Sales Funnel Analytics

**What is this?** The Sales Funnel Analytics screen provides a detailed visualisation and analysis of the entire sales funnel — from the top (new leads) to the bottom (conversions) — showing where and how quickly leads move through.

**Why do we need it?** The funnel view is essential for understanding sales efficiency. Every stage has a conversion rate and a velocity (speed). Improving either improves the overall business outcome.

**What is inside?**
- Visual funnel with stage counts and percentages
- Stage-to-stage conversion rates
- Average time spent at each stage
- Funnel velocity (total time from lead creation to conversion)
- Funnel leakage analysis (where most leads are lost)
- Comparison to previous period (is the funnel improving or degrading?)
- Funnel by brand, by executive, by geography
- Projected conversions based on current pipeline volume and conversion rates

**What to tell sir:** Sir, the Sales Funnel is the most important visualisation in the system for understanding sales health. If you have 1,000 leads at the top and 20 conversions at the bottom, the funnel shows exactly where the 980 were lost. Stage 2 to Stage 3 has a 15% conversion rate — that is the biggest drop. Fix that one stage and the entire business output improves.

---

## Campaign Performance Analytics

**What is this?** The Campaign Performance Analytics screen analyses the results of specific marketing campaigns — how many leads each campaign generated, at what cost, and how they converted.

**Why do we need it?** Campaigns are discrete marketing investments. This screen evaluates each campaign's return, helping the marketing team decide which campaigns to repeat, scale, or cancel.

**What is inside?**
- Campaign list: name, channel, start date, end date, budget, spend
- Per campaign: leads generated, leads contacted, meetings done, conversions, revenue
- CPL (cost per lead) and CPC (cost per conversion) per campaign
- Campaign performance ranking
- Campaign comparison: head-to-head comparison of two campaigns
- Best performing campaign of the period
- ROI per campaign (revenue vs spend)

**What to tell sir:** Sir, this screen evaluates each marketing campaign individually. If the January Facebook campaign spent 3 lakhs and generated 240 leads of which 18 converted — and a March Google campaign spent 2 lakhs and generated 80 leads with 15 conversions — this screen shows that the Google campaign had a better conversion rate and a higher ROI per rupee spent. The next budget decision is easy.

---

## State-Wise Analytics

**What is this?** The State-Wise Analytics screen breaks down all key business metrics by Indian state, enabling geographic performance analysis.

**Why do we need it?** Business performance varies dramatically by geography. Some states generate more leads, some convert better, some have better-performing franchisees. State-level data enables targeted strategies for each geography.

**What is inside?**
- India map view with state colour-coding
- Table view: state name with leads, conversions, franchisees, revenue, conversion rate
- State ranking by each metric
- State-wise trend (which states are growing vs declining)
- States with no presence (opportunity gaps)
- Best performing state of the month
- State comparison tool

**What to tell sir:** Sir, this screen shows the geographic business distribution across India. If Maharashtra and Karnataka dominate the lead count but Punjab and Rajasthan are showing fast growth rates, the team can send resources to those fast-growing states to capitalise before competitors do. Geography is strategy.

---

## City-Wise Analytics

**What is this?** The City-Wise Analytics screen provides the same performance analysis as the state-wise view, but at the individual city level for more granular geographic insight.

**Why do we need it?** State-level data can mask city-level patterns. A state may look average overall but have one city performing exceptionally well and three performing poorly. City-level data enables hyper-local strategy.

**What is inside?**
- City performance table: leads, conversions, franchisees, revenue by city
- Filter by state
- City ranking
- City growth rates
- Tier classification: Tier 1, 2, 3 city performance comparison
- Potential city identification: cities with high lead volume but no franchisees yet

**What to tell sir:** Sir, some of the best franchise opportunities are in Tier 2 cities — places like Indore, Surat, and Coimbatore where disposable income is rising and competition is lower. This screen shows which Tier 2 cities are generating strong inquiry volumes. The sales team can then prioritise those for conversion campaigns.

---

## Audit Analytics

**What is this?** The Audit Analytics screen provides analysis of system usage, data changes, and security events — helping the admin understand system health, user behaviour, and risk areas.

**Why do we need it?** The admin and compliance teams need data about how the system is being used, whether there are unusual patterns (like mass data exports or repeated failed logins), and whether data integrity is being maintained.

**What is inside?**
- System activity volume by user (who is the most active, who has low activity)
- Data change frequency by module
- Failed login attempts trend
- Suspicious activity alerts count
- Most commonly accessed records
- API usage volume
- Data export frequency
- Peak usage times (when the system gets most traffic)
- Compliance score: percentage of records with complete data, percentage of leads with follow-ups, etc.

**What to tell sir:** Sir, the Audit Analytics screen helps the admin monitor system health from a data governance perspective. If there are 50 failed login attempts from one IP address in an hour, that is a security alert. If one user is exporting thousands of records every day, that warrants investigation. This screen surfaces those unusual patterns so action can be taken proactively.

---

# MODULE 13 — AUTOMATION

The Automation module allows the team to build and manage automated workflows — actions that the system performs automatically based on triggers, without anyone having to do them manually. There are 24 screens.

---

## Automation Dashboard

**What is this?** The Automation Dashboard is the overview screen for all automation workflows in the system, showing how many are active, how they are performing, and whether any have failed.

**Why do we need it?** Automation is only valuable if it is working correctly. This dashboard gives the admin and operations team a health check on all automations — which are running, which have failed, and what they are collectively achieving.

**What is inside?**
- Total active automations count
- Automations run today (count of triggered executions)
- Successful automations today
- Failed automations today (with an alert badge)
- Most triggered automation this week
- Automations by category (Lead, Meeting, Payment, Notification, Approval)
- Time saved estimate (hours saved by automation this week)
- Recent automation execution feed
- Quick actions: Create Workflow, View All, View Failed

**What to tell sir:** Sir, this is the Automation Dashboard. It shows how the system is working behind the scenes. Today, 847 automated actions ran — sending reminders, updating statuses, assigning leads, notifying teams — without anyone doing any of it manually. If 12 of those failed, the dashboard shows that immediately so the admin can investigate.

---

## Workflow List

**What is this?** The Workflow List is the complete directory of all automation workflows configured in the system.

**Why do we need it?** As the team builds more automations, they need a central place to manage them all — see which are active, which are paused, and what each one does.

**What is inside?**
- Search by workflow name
- Filter: by category (Lead, Meeting, Payment, etc.), by status (Active, Paused, Draft, Archived), by creator
- Each workflow: name, category, trigger type, number of actions, last triggered, status, run count
- Click to open Workflow Details
- Toggle to activate/pause
- Duplicate workflow button
- Create new workflow button

**What to tell sir:** Sir, this list shows every automation the team has built. There might be 30 or 40 different workflows — lead assignment rules, meeting reminders, payment reminders, welcome messages, follow-up schedulers. Each one can be paused or activated from this list view without opening the full workflow builder.

---

## Workflow Builder

**What is this?** The Workflow Builder is a visual, drag-and-drop tool for creating automation workflows — defining what triggers them, what conditions apply, and what actions they perform.

**Why do we need it?** Building automations without a visual tool is technically complex and error-prone. The Workflow Builder makes it accessible to any power user — no coding required. The team can build sophisticated multi-step automations visually.

**What is inside?**
- Visual canvas with drag-and-drop elements
- Trigger block: select what starts the workflow (a new lead is created, a payment is overdue, a meeting is marked complete, etc.)
- Condition blocks: add filters (e.g., "only if lead source = Facebook" or "only if amount > 50000")
- Action blocks: define what happens (send WhatsApp, update field, assign to user, create task, send email, trigger approval, etc.)
- Delay block: wait X minutes/hours/days before the next action
- Branch block: if/else logic (different paths based on conditions)
- Loop block: repeat an action
- Preview mode: simulate the workflow without actually running it
- Save and Activate button

**What to tell sir:** Sir, this is the Workflow Builder. Think of it as designing a flowchart that the system executes automatically. For example: "When a new lead comes in from Facebook → Wait 5 minutes → Send a WhatsApp message with the brand brochure → Assign to the next available executive → Create a follow-up task for the next day." That entire sequence is built here visually and then runs automatically every time a Facebook lead arrives.

---

## Create Workflow

**What is this?** The Create Workflow screen is the starting point for building a new automation — choosing the workflow name, category, description, and then entering the Workflow Builder.

**Why do we need it?** Good workflow management starts with proper naming and categorisation. This screen ensures every automation is clearly described before building starts.

**What is inside?**
- Workflow name field
- Description field (what does this workflow do?)
- Category selector (Lead Management, Meeting, Payment, Notification, Approval, HR, Custom)
- Trigger type preview selector (choose what kind of trigger to start with)
- Tags (for easier discovery later)
- Start building button (takes user to the Workflow Builder with this metadata saved)
- Save as template option

**What to tell sir:** Sir, before building a workflow, the team gives it a clear name and description. "New Lead Auto-Welcome" or "Overdue Payment Reminder Chain" — so anyone who looks at the workflow list later immediately knows what it does. Good naming prevents confusion when managing dozens of automations.

---

## Edit Workflow

**What is this?** The Edit Workflow screen opens an existing workflow in the Workflow Builder, allowing changes to be made to the trigger, conditions, or actions.

**Why do we need it?** Business processes change. A workflow that was set up six months ago may need updating — the WhatsApp message needs to be changed, a new action needs to be added, or a condition needs to be adjusted.

**What is inside?**
- All elements of the Workflow Builder, pre-populated with the existing workflow
- Change history panel (who changed what and when)
- Impact warning: "This workflow has run X times. Editing may affect in-progress executions."
- Save Draft (test before going live) vs Save and Publish options
- Version rollback: revert to a previous version of the workflow

**What to tell sir:** Sir, as the business evolves, automations need to evolve too. If the company changes the franchise fee and the automated invoice generation needs updating, the team comes to Edit Workflow, makes the change, previews it, and publishes the new version. The old version is saved for reference.

---

## Workflow Details

**What is this?** The Workflow Details screen shows the complete configuration and performance history of a specific automation workflow.

**Why do we need it?** When a workflow is running or has run many times, the team needs to understand its full configuration, how many times it has executed, what the success rate is, and what recent executions looked like.

**What is inside?**
- Workflow name, category, status, created by, created date
- Visual summary of the workflow (simplified flow diagram)
- Execution statistics: total runs, successful, failed, in-progress
- Last execution: when it ran and what happened
- Average execution time
- Execution history list (last 20 runs with status)
- Edit, Pause, Duplicate, Archive buttons

**What to tell sir:** Sir, the Workflow Details screen is where the admin reviews how an automation is performing. If the "New Lead Welcome" workflow has run 1,200 times but 15 executions failed, this screen shows those failures. The admin can investigate why they failed and fix the workflow.

---

## Workflow Triggers

**What is this?** The Workflow Triggers screen manages all the trigger types available in the system — the events that can start an automation.

**Why do we need it?** Understanding and configuring triggers correctly is essential to automation working as intended. This screen provides a reference and configuration interface for all trigger types.

**What is inside?**
- List of all available trigger types:
  - Record created (lead, customer, meeting, payment)
  - Record updated (specific field changed)
  - Date/time reached (meeting due, payment due, agreement expiry)
  - Status changed (lead stage change, payment status change)
  - Form submitted
  - Webhook received (external event)
  - Manual trigger (a user clicks a button to start the workflow)
  - API trigger
- Configuration options per trigger type
- Active triggers across all workflows
- Test trigger button

**What to tell sir:** Sir, a trigger is what tells the system "start the workflow now." The trigger could be anything — a new lead was added, a payment is 3 days overdue, a meeting was marked as completed. This screen shows all the trigger types available and which workflows they are connected to. It is the entry point of every automation.

---

## Workflow Actions

**What is this?** The Workflow Actions screen manages all the action types available in the automation system — the things the system can do when a workflow is triggered.

**Why do we need it?** Understanding the available actions helps the team design more powerful automations. This screen catalogues every action type and its configuration.

**What is inside?**
- List of all available action types:
  - Send email
  - Send SMS
  - Send WhatsApp message
  - Send push notification
  - Assign lead to user
  - Update field value
  - Create task
  - Create follow-up
  - Schedule meeting
  - Generate invoice
  - Add tag to record
  - Trigger approval workflow
  - Webhook call (send data to external system)
  - API call
  - Wait/delay
- Configuration options and required parameters per action
- Usage: which workflows use each action type

**What to tell sir:** Sir, actions are what the automation actually does. The system can send a WhatsApp, update a record, create a task, send an email, generate an invoice, start an approval — all without anyone doing it manually. This screen shows all the possible actions. The more actions available, the more powerful the automations can be.

---

## Workflow Conditions

**What is this?** The Workflow Conditions screen manages the conditional logic within automations — the "if this, then that" rules that make workflows intelligent rather than one-size-fits-all.

**Why do we need it?** Without conditions, automations apply to every record equally. Conditions make them smart — send a WhatsApp only if the lead is from Maharashtra, assign to executive A only if they have fewer than 30 leads, generate an invoice only if the payment type is royalty.

**What is inside?**
- Condition types: equal to, not equal to, greater than, less than, contains, is empty, is not empty
- Field selector for the condition (any field in the linked record)
- Multi-condition support with AND/OR logic
- Condition groups (nested conditions)
- Condition preview: shows sample records that would pass or fail the condition
- Test condition against real data

**What to tell sir:** Sir, conditions are what make automations smart. Without them, every new lead gets the same treatment regardless of where they are from or how much they want to invest. With conditions, a lead with a 50 lakh investment budget gets a different automated response than a lead with a 5 lakh budget. The right message goes to the right person automatically.

---

## Workflow Schedule

**What is this?** The Workflow Schedule screen manages time-based automation triggers — workflows that run on a schedule rather than being triggered by a specific event.

**Why do we need it?** Some automations need to run at regular intervals — daily, weekly, monthly — regardless of whether a specific event happens. Payment reminders on the 1st of every month, weekly performance summaries, monthly compliance checks.

**What is inside?**
- List of all scheduled automations with their schedule (daily at 9 AM, every Monday, 1st of every month, etc.)
- Schedule configuration: cron-style scheduling with a friendly interface
- Time zone settings
- One-time scheduled runs (run once at a specific future time)
- Pause and resume schedule
- Run immediately button (trigger the scheduled workflow outside its schedule)
- Last run and next run timestamps

**What to tell sir:** Sir, scheduled automations are the "calendar-driven" actions. Every 1st of the month, the system automatically sends royalty invoices to all franchisees due for payment. Every Monday morning, it generates and emails the weekly lead report to each team lead. These scheduled automations run reliably without anyone having to remember.

---

## Execution History

**What is this?** The Execution History screen shows a complete log of every automation that has run — when it ran, what triggered it, what actions it performed, and whether it succeeded.

**Why do we need it?** When something goes wrong — a message was not sent, a task was not created, an assignment did not happen — the Execution History shows exactly what the automation did and where it failed. It is the debugging tool for automations.

**What is inside?**
- List of all past automation executions: workflow name, trigger event, started at, completed at, status (Success, Failed, Partial)
- Click to see execution details: each action step with success/failure status and any error message
- Filter: by workflow, by status, by date range
- Retry failed execution button
- Duration per execution
- Input data (the record that triggered the workflow)
- Output data (what the workflow created or changed)

**What to tell sir:** Sir, if a lead comes in and the expected welcome WhatsApp was never sent, the admin opens Execution History, finds that lead's execution entry, and sees exactly what happened step by step. Maybe the WhatsApp action failed because the phone number was in an invalid format. The error is right there, and the admin can fix the data and retry the execution.

---

## Failed Automations

**What is this?** The Failed Automations screen is a dedicated view of all automation executions that encountered errors, with tools for investigation and retry.

**Why do we need it?** Failed automations mean the business process did not complete as expected. A failed payment reminder means a franchisee was not contacted. A failed lead assignment means a lead is sitting without an owner. This screen ensures failures are caught and addressed.

**What is inside?**
- List of all failed executions: workflow name, failure time, trigger event, error summary
- Error detail panel: full error message, which action step failed, and why
- Retry button per failure
- Bulk retry button
- Escalate to admin option
- Filter by workflow, date range, or error type
- Common errors summary (to identify systemic issues)

**What to tell sir:** Sir, the Failed Automations screen is the early warning system for automation health. If the "Overdue Payment Reminder" workflow is failing repeatedly because the WhatsApp API is down, this screen shows 20 failed executions with the same error. The admin knows the API needs to be fixed and can manually send reminders to affected customers in the meantime.

---

## Automation Analytics

**What is this?** The Automation Analytics screen provides performance data on all automations — execution volumes, success rates, time savings, and business impact.

**Why do we need it?** Automation has a cost (setup time, maintenance) and a benefit (time saved, faster response, fewer errors). This screen quantifies both so management can evaluate the ROI of the automation investment.

**What is inside?**
- Total automations run this period
- Overall success rate
- Time saved estimate (based on average manual task time vs automated)
- Most active workflows (most executions)
- Workflows with highest failure rates
- Business impact metrics: leads responded to faster, payments collected sooner (due to automated reminders)
- Automation coverage: what percentage of key business processes are automated
- Trend: automation volume growing or flat?

**What to tell sir:** Sir, this screen shows the value of automation in concrete numbers. If the system ran 12,000 automated actions this month and each one would have taken 2 minutes manually, that is 400 hours of team time saved — equivalent to about 2.5 additional full-time employees working for free. This is the ROI of investing in automation.

---

## Automation Templates

**What is this?** The Automation Templates screen provides a library of pre-built, ready-to-use workflow templates for common business scenarios, which can be activated with minimal customisation.

**Why do we need it?** Not every team has the time or expertise to build automations from scratch. Templates provide proven, best-practice workflows that can be deployed quickly and customised as needed.

**What is inside?**
- Template library organised by category: Lead Management, Payment Collection, Meeting Management, Customer Onboarding, etc.
- Each template: name, description, what it automates, estimated setup time, preview
- Use This Template button (creates a draft workflow from the template)
- Customise before activating option
- Community templates (if applicable — shared by other users)
- Most used templates

**What to tell sir:** Sir, the Templates library means the team does not start from scratch for common automations. "New Lead Auto-Respond" or "30-Day No-Activity Lead Follow-Up" are pre-built here. They click "Use Template," customise a few fields like the WhatsApp message text and the delay duration, and it is ready to activate in under 5 minutes.

---

## Automation Testing

**What is this?** The Automation Testing screen allows the team to test a workflow before activating it, using real or simulated data, to ensure it works exactly as intended.

**Why do we need it?** A poorly configured automation can cause damage at scale — sending the wrong message to hundreds of contacts, assigning leads to the wrong person, or generating incorrect invoices. Testing before activation prevents these problems.

**What is inside?**
- Select workflow to test
- Test mode: use simulated data or select a real record from the system
- Step-by-step execution trace: shows what the workflow would do at each step without actually doing it
- Conditional logic test: shows which branch the workflow would take and why
- Test with multiple scenarios (test the happy path and edge cases)
- Test result report: did the workflow behave as expected?
- Issues found highlight with suggested fixes

**What to tell sir:** Sir, the Testing screen is the safety check before an automation goes live. Before the team activates the "Convert Lead to Customer" automation that generates an invoice and sends a welcome email, they test it with a dummy lead. They can see exactly what invoice would be generated, what email would be sent, and what fields would be updated — all without actually affecting any real data. Only after they are satisfied do they activate it.

---

## Webhooks

**What is this?** The Webhooks screen manages outgoing and incoming webhook connections — the technical integrations that allow the CRM to send and receive data from external systems in real time.

**Why do we need it?** Webhooks enable real-time integration with external systems — a lead form on the website instantly creates a lead in the CRM, or a payment confirmed in a payment gateway automatically updates the CRM record. This connectivity is what makes the CRM the hub of the business.

**What is inside?**
- Outgoing webhooks list: name, URL, event trigger, status, last triggered, success rate
- Create outgoing webhook: URL, authentication header, events to send, payload format
- Incoming webhooks list: name, endpoint URL (for external systems to send data to), status
- Test webhook button
- Webhook logs: recent payloads sent and received
- Retry failed webhook deliveries

**What to tell sir:** Sir, webhooks are how the CRM talks to other systems. When a lead fills in a form on your website, the website instantly sends that data to the CRM through a webhook, and the lead appears in the system within seconds — no manual import needed. Or when the payment gateway receives a payment, it tells the CRM instantly through a webhook so the payment record updates in real time.

---

## API Management

**What is this?** The API Management screen is where administrators manage the CRM's API connections — external systems that access or send data through the CRM's programming interface.

**Why do we need it?** Modern businesses use multiple software systems. The CRM API allows other software — accounting tools, marketing platforms, external dashboards — to read and write data. API management keeps these connections secure and monitored.

**What is inside?**
- API documentation link
- Active API integrations list
- API key management (create, revoke, rotate)
- API usage statistics: requests per day, per endpoint, by integration
- Rate limit configuration
- API error log
- Allowed IP whitelist
- API version management

**What to tell sir:** Sir, the API is like the CRM's front door for other software. If the accounting team uses a separate accounting software, it can connect to the CRM through the API to automatically pull payment data every night. This screen controls who has that access and monitors how it is being used.

---

## Email Automation

**What is this?** The Email Automation screen manages all automated email workflows — defining when emails are sent, to whom, and with what content, without manual intervention.

**Why do we need it?** Email is the formal communication backbone for customer and lead correspondence. Automating routine emails — welcome messages, invoice emails, renewal reminders, follow-up sequences — saves significant time and ensures consistency.

**What is inside?**
- List of all email automation rules
- Create email automation: trigger, recipient, email template, delay, conditions
- Email sequence builder: set up a series of emails over time (day 1, day 3, day 7)
- Performance: open rate, click rate per automated email
- Unsubscribe management
- Email suppression list

**What to tell sir:** Sir, the Email Automation screen manages all the emails the system sends automatically. When a lead is created from Facebook, they automatically receive a branded introduction email within 5 minutes. When an invoice is generated, it is automatically emailed to the customer. When an agreement is about to expire, the relationship manager gets an email reminder 30 days, 15 days, and 7 days before. None of this requires anyone to remember or manually send.

---

## WhatsApp Automation

**What is this?** The WhatsApp Automation screen manages all automated WhatsApp messages — the most impactful communication channel for franchise prospect engagement and customer communication.

**Why do we need it?** WhatsApp has the highest read and response rate of any digital channel. Automating routine WhatsApp messages — lead responses, meeting reminders, payment reminders — delivers those high engagement rates at scale without requiring manual sending.

**What is inside?**
- All WhatsApp automation rules
- Template selection (only Meta-approved templates can be used in bulk/automated sending)
- Trigger, condition, and timing configuration
- WhatsApp API status
- Message delivery monitoring
- Opt-out management (customers who have opted out of WhatsApp communication)
- Two-way conversation handling (when a customer replies)

**What to tell sir:** Sir, WhatsApp is the most effective channel we have for reaching prospects and customers. This screen automates it. When Himani creates a new lead, the prospect gets a WhatsApp within 5 minutes with a personalised brand brochure. Before a meeting, they get a reminder on WhatsApp the night before and again 30 minutes before. After a meeting, they get a follow-up message. All of this happens automatically, making every lead feel personally attended to even when the executive is handling 40 other leads simultaneously.

---

## SMS Automation

**What is this?** The SMS Automation screen manages automated SMS messages — short, direct text messages for alerts and reminders.

**Why do we need it?** SMS works even without internet and reaches numbers that may not have WhatsApp. For critical reminders — payment due, meeting scheduled — SMS provides a reliable fallback and complement to WhatsApp.

**What is inside?**
- SMS automation rules list
- Create SMS automation: trigger, recipient, message template, delay, conditions
- DND compliance check (automatic filtering of DND numbers)
- SMS delivery tracking
- Character count management (keep messages within one SMS for cost efficiency)

**What to tell sir:** Sir, SMS is the reliable fallback. Even if a customer's WhatsApp is not working or they switched phones, the SMS still reaches them. Payment reminders sent by SMS on the due date reduce late payments significantly. This screen manages all those automated SMS rules.

---

## Task Automation

**What is this?** The Task Automation screen manages workflows that automatically create tasks for team members based on system events.

**Why do we need it?** Tasks ensure follow-through on events. When a meeting is marked as completed, a follow-up task should automatically be created. When a lead reaches the "Proposal Sent" stage, a 3-day follow-up task should be auto-created. This automation ensures nothing falls through after key events.

**What is inside?**
- Task automation rules: what event triggers a task, what the task is, who it is assigned to, when it is due
- Task template library: common task types with pre-filled details
- Create task automation
- Task creation log: all tasks created by automation
- Assignment rules: assign to the record owner, specific role, or rotation

**What to tell sir:** Sir, task automation is what keeps the team accountable. After every meeting, a follow-up task is automatically created for the executive. After a payment is received, a thank-you communication task is created. These are small things but they make a huge difference in customer experience and conversion rates — and no one has to remember to create them manually.

---

## Approval Automation

**What is this?** The Approval Automation screen manages workflows that automatically trigger approval requests — initiating the approval process when certain conditions are met in the system.

**Why do we need it?** Approvals should not require someone to manually submit a request every time. When a lead is ready to convert and requires a discount, or when a payment above a threshold is recorded, the approval request should be created automatically and routed to the right person.

**What is inside?**
- Approval trigger rules: when to automatically create an approval request
- Approval type and workflow assignment
- Escalation automation: if approval is not given within X hours, auto-escalate
- Auto-approve rules: if conditions are fully met, auto-approve without human review
- Approval reminder automation: send reminders to approvers who have not acted

**What to tell sir:** Sir, approval automation means the team does not have to manually submit a request every time something needs sign-off. When an executive marks a lead as "ready to convert with 10% discount," the system automatically creates the approval request, assigns it to the team lead, sends them a WhatsApp notification, and reminds them after 2 hours if they have not acted. The approval process runs itself.

---

## Notification Automation

**What is this?** The Notification Automation screen manages automated notification rules — ensuring the right people are informed about the right events at the right time.

**Why do we need it?** With hundreds of events happening in the system daily, manual notification is impossible. This screen ensures that every significant event — a new hot lead, a failed payment, an expiring agreement — automatically notifies the relevant team member.

**What is inside?**
- Notification automation rules: event, recipients, notification type, channel, message
- Priority levels for notifications (urgent, normal, informational)
- Notification suppression rules (do not send between 10 PM and 8 AM)
- Digest vs immediate notification options
- Notification testing

**What to tell sir:** Sir, notification automation is the team's intelligence feed. When a hot lead comes in outside business hours, the senior executive gets a WhatsApp immediately — the system does not wait for morning. When a franchise agreement expires, the relationship manager and the accounts head both get notified at the same time. This screen manages all those rules, ensuring the right people always know what they need to know.

---

## Automation Audit

**What is this?** The Automation Audit screen provides a complete, tamper-proof log of all automation-related events — workflows created, modified, activated, deactivated, and every execution.

**Why do we need it?** Automation actions affect real business data. If an automation incorrectly updated 50 customer records, the audit log provides the evidence and context needed to understand what happened and reverse it.

**What is inside?**
- Log of all automation events: workflow created/modified/deleted/activated/paused, execution events
- Each entry: timestamp, user, action, workflow name, affected records
- Cannot be edited or deleted
- Filter by workflow, user, date range, action type
- Export as PDF or CSV

**What to tell sir:** Sir, the Automation Audit is the safety net for automated processes. If the team wakes up one morning and finds that 200 leads were incorrectly assigned by a misconfigured automation, this log shows exactly what the automation did, when, and to which records. With that information, the damage can be assessed and corrected. It ensures automation remains accountable, even though no human triggered it.

---

# MODULE 14 — USERS

The Users module manages everyone who has access to the iFranchise CRM — their profiles, roles, teams, permissions, and activity. There are 24 screens.

---

## User Dashboard

**What is this?** The User Dashboard is the overview screen for all user management activity — active users, recent logins, inactive accounts, and user growth.

**Why do we need it?** The admin needs a central view of the user base — who is active, who has not logged in recently, which accounts have access issues, and how the team is growing.

**What is inside?**
- Total active users count
- Users currently online
- Users who logged in today
- Inactive users (not logged in for 30+ days)
- Locked accounts count
- New users added this month
- User distribution by role (pie chart)
- User distribution by department
- Recent user activity feed
- Quick actions: Add User, View Directory, Manage Roles

**What to tell sir:** Sir, the User Dashboard gives the admin a pulse of the team. If 5 accounts have been locked today due to failed login attempts, it shows here. If 8 users have not logged in for 30 days — which may indicate they have left the company or are not using the system — it shows here too. User management starts with this overview.

---

## User Directory

**What is this?** The User Directory is the complete list of all system users — employees, executives, managers, and admins — with their roles, contact details, and status.

**Why do we need it?** With dozens of users, a searchable directory makes finding the right person fast. Managers and admins use this for reassigning leads, setting up approvals, and managing team structure.

**What is inside?**
- Search by name, email, phone, or role
- Filter: by role, by department, by branch, by status (Active, Inactive, Locked)
- User cards or table rows: photo, name, designation, department, email, phone, role, last login, status
- Click to open User Details
- Bulk actions: deactivate, export, send invitation
- Add new user button
- Export user list

**What to tell sir:** Sir, the User Directory is the company's internal phonebook within the CRM. If the accounts manager needs to know who to contact about a specific approval, they search here by role and find the right person. If the admin wants to see all branch managers across locations, they filter by role.

---

## User Details

**What is this?** The User Details screen shows the complete profile of a single user — their personal information, role, permissions, team assignment, and activity history.

**Why do we need it?** When managing a team member's access or reviewing their activity, the admin needs a comprehensive view of that user's complete profile — not just their name and role, but all the specifics of their account.

**What is inside?**
- Personal information: name, photo, email, phone, designation, date of joining
- Role and permissions (link to their specific role)
- Department and team
- Manager/supervisor
- Branch or location
- Reporting line
- Account status: Active, Inactive, Locked, Invited
- Last login date and time
- Sessions: active sessions (device, location, time)
- Tabs: Documents, Leave, Skills, Activity, Sessions, Devices, Preferences, Account Status, Timeline

**What to tell sir:** Sir, the User Details screen is the complete profile for any team member from an admin perspective. If a new executive has been onboarded and the admin needs to verify their role, branch, and manager assignment are correct, this is where they check. If an executive leaves and their account needs to be deactivated, the admin comes here.

---

## Create User

**What is this?** The Create User screen is the form for adding a new user account to the CRM system.

**Why do we need it?** Every new employee who needs CRM access must be added here. This form captures all the information needed to set up their account correctly — role, department, branch, and access level.

**What is inside?**
- Personal information: first name, last name, email, phone
- Role selector (dropdown of configured roles)
- Department and team selector
- Branch/location selector
- Manager/supervisor selector
- Employee ID (from HR system, if applicable)
- Date of joining
- Send invitation email toggle (sends login credentials to the new user)
- Temporary password or auto-generate option
- Access start date
- Save and Invite button

**What to tell sir:** Sir, when a new sales executive joins the team, the admin opens this screen, fills in their details, assigns them the "Sales Executive" role, links them to their team lead, and clicks Save and Invite. Within minutes, the new executive receives an email with their login credentials and can access the system with their role's permissions already configured.

---

## Edit User

**What is this?** The Edit User screen allows authorised admins to update any information in an existing user's profile.

**Why do we need it?** People get promoted, change departments, join different teams, or update their contact information. This screen keeps user records accurate throughout their tenure.

**What is inside?**
- All Create User fields, pre-populated
- Role change: changing role shows a warning about permission changes
- Password reset option
- Account status controls: Activate, Deactivate, Lock, Unlock
- Change history at the bottom
- Save Changes button

**What to tell sir:** Sir, when Himani is promoted from Sales Executive to Team Lead, the admin opens her user profile, changes her role from "Sales Executive" to "Team Lead," and saves. Immediately, her dashboard changes to the Team Lead view, she gains access to team performance screens, and she loses access to screens that are only for individual executives. The role change takes effect instantly.

---

## User Profile

**What is this?** The User Profile screen is the self-service view where individual users can see and update their own information — contact details, profile photo, notification preferences, and password.

**Why do we need it?** Employees should be able to manage their own basic information without bothering the admin. This screen empowers self-service while maintaining system security.

**What is inside?**
- Profile photo upload
- Personal information: name (read-only unless admin), phone (editable), email (read-only)
- Display preferences (date format, time zone, language)
- Notification preferences
- Two-factor authentication setup
- Password change section
- Active sessions viewer (see all devices currently logged in)
- Logout all devices button (for security)

**What to tell sir:** Sir, the User Profile is the employee's own page. Himani can change her profile photo, update her mobile number, turn on 2-factor authentication, and see which devices are currently logged into her account. If she sees a device she does not recognise, she can log it out from here immediately — a simple but important security feature.

---

## User Hierarchy

**What is this?** The User Hierarchy screen shows the reporting structure and management chain within the organisation as it is configured in the CRM.

**Why do we need it?** The hierarchy defines who reports to whom, which is essential for approval routing, escalations, lead assignments, and access control. This screen makes the reporting structure visible and manageable.

**What is inside?**
- Interactive reporting tree showing CEO → Directors → Managers → Team Leads → Executives
- Click on any node to view that user's profile
- Add reporting relationship
- Change manager for a user
- Visualise specific team: filter to show one team or department
- Export hierarchy as PDF or image

**What to tell sir:** Sir, the User Hierarchy screen shows the organisation chart of the CRM. When an approval needs to escalate, it follows this hierarchy — from executive to team lead to manager to director. When the system needs to notify a supervisor, it uses this hierarchy. It is the organisational backbone of the system.

---

## Departments

**What is this?** The Departments screen manages the departmental structure of the organisation within the CRM — creating, editing, and organising departments.

**Why do we need it?** Departments are used for access control, reporting, and team management. Keeping the department structure current ensures the right people see the right data and reports go to the right managers.

**What is inside?**
- List of all departments with: name, head, user count, sub-departments
- Create department button
- Edit department (name, head, parent department)
- Move users between departments
- Department performance metrics (if analytics are linked)
- Department-specific notification and approval settings

**What to tell sir:** Sir, departments help segment the organisation in the system. The Sales Department, Accounts Department, Brand Management Department — each has its own head, its own users, and its own access rules. If the system is configured to show financial reports only to the Accounts Department, this structure enforces that.

---

## Teams

**What is this?** The Teams screen manages smaller working groups within departments — typically a team lead and their direct reports.

**Why do we need it?** Teams are the operational unit for lead assignment, task management, and performance tracking. Managing teams allows for target-setting at the sub-department level.

**What is inside?**
- List of all teams: name, team lead, department, member count
- Create team button
- Edit team (rename, change lead, add/remove members)
- Team performance summary (quick metrics)
- Move member to different team
- Team-specific settings

**What to tell sir:** Sir, while departments are large structures, teams are the day-to-day working units. Himani's team of 5 sales executives is a team. This screen lets the admin create, organise, and maintain these teams. When leads are assigned through round-robin, they go to a specific team's queue.

---

## Org Chart

**What is this?** The Org Chart screen displays the entire organisational structure visually — a traditional top-down organisational chart showing all users, their roles, and reporting relationships.

**Why do we need it?** The org chart provides a quick, visual understanding of the company structure that is easy to read and share with new employees or management.

**What is inside?**
- Full org chart rendered as a tree diagram
- Zoom in/out
- Expand/collapse branches
- Filter to show specific departments or levels
- Click on a box to see the user's quick profile
- Export as PDF or image
- Print button
- "My Team" quick filter (shows the current user's direct reports and their sub-teams)

**What to tell sir:** Sir, the Org Chart is the visual version of the company structure within the CRM. A new employee can open this and immediately see how the organisation is structured, who the team leads are, and who the managers are. It can be exported and included in company documents or shared with brand partners.

---

## User Documents

**What is this?** The User Documents screen manages HR-related documents stored in the CRM for each user — employment letters, agreements, ID proofs, certificates, and performance appraisals.

**Why do we need it?** Employee documentation is part of HR compliance. Storing it in the CRM alongside the user record ensures documents are accessible to HR and management without a separate HR system.

**What is inside?**
- Document upload for the selected user
- Document categories: Employment Letter, NDA, ID Proof, Certificate, Appraisal, Training Record, Other
- Document list: name, type, upload date, expiry, status
- Download and preview
- Access control: only HR and admin can view certain documents

**What to tell sir:** Sir, every employee's important documents — their appointment letter, their NDA, their ID proof — are stored here in the system. HR can access them instantly when needed. No separate file cabinet required.

---

## Leave Management

**What is this?** The Leave Management screen tracks employee leave records within the CRM, specifically to manage lead assignment and meeting scheduling around team absences.

**Why do we need it?** When an executive is on leave, their leads need to be reassigned and their meetings need to be covered. The CRM needs to know who is absent so automation and assignment rules account for it.

**What is inside?**
- Leave record for the selected user
- Apply for leave form (from/to date, type, reason)
- Leave balance (annual, casual, sick)
- Leave history
- Pending leave requests
- Approved leave calendar
- "Out of Office" settings: automatic reassignment of leads during leave
- Leave approval workflow (leave requests go to manager for approval)

**What to tell sir:** Sir, the Leave Management feature in the CRM serves a specific operational purpose. If Himani applies for 5 days of leave and it is approved here, the system can automatically redistribute her new leads to other executives during her absence. Meetings in her calendar can show as needing reassignment. The CRM handles team absences without disrupting the business.

---

## Skills

**What is this?** The Skills screen records each user's skills, certifications, and expertise areas within the CRM.

**Why do we need it?** Matching leads to executives based on skills improves conversion. If a prospect is interested in a healthcare franchise and one executive has healthcare industry experience, the system can route that lead to them.

**What is inside?**
- Skills list for the user: skill name, proficiency level, certification (if applicable), date acquired
- Add new skill button
- Skills verification (manager can verify/endorse a skill)
- Skills search: find users who have a particular skill
- Skills-based lead routing configuration (admin only)

**What to tell sir:** Sir, if we tag executives with their brand specialisations or industry expertise, the system can intelligently assign leads. A lead interested in an IT franchise gets assigned to the executive who knows the technology sector best. This makes the initial call more credible and improves conversion rates.

---

## User Activity

**What is this?** The User Activity screen shows a detailed log of everything a specific user has done in the CRM — every screen visited, every record modified, every action taken.

**Why do we need it?** For performance management, investigation, and security, the admin needs visibility into individual user activity. This screen provides that granular view.

**What is inside?**
- Chronological log of the user's actions: date, time, action type, record affected
- Activity summary: total actions this week, most active time of day
- Module usage breakdown: how much time or activity in each module
- Login and logout events
- Records created, modified, deleted
- Exports performed
- Filter by date range or action type

**What to tell sir:** Sir, the User Activity screen is both a performance tool and a security tool. For performance, it shows whether an executive is actively working in the system — calling leads, updating records, scheduling meetings. For security, if a user's account is compromised, this log shows unusual access patterns immediately.

---

## Sessions

**What is this?** The Sessions screen shows all active and recent login sessions for a user — which devices they are logged in on, from where, and since when.

**Why do we need it?** For security, users and admins need visibility into active sessions. An unexpected session from an unknown device or location is a security alert. The ability to terminate sessions remotely is an important security control.

**What is inside?**
- Active sessions list: device type, browser, IP address, location (city/country), login time
- Session duration
- Terminate session button (admin can log out a user from a specific device)
- Logout all sessions button
- Recent session history (past 30 logins with locations and devices)

**What to tell sir:** Sir, if an executive's account is suspected to be compromised, the admin opens this screen and clicks "Terminate All Sessions." The person is immediately logged out from every device. The session history also shows if someone logged in from an unusual location — which is an early security alert.

---

## Devices

**What is this?** The Devices screen shows all devices that have been used to access the CRM under a user's account — laptops, mobile phones, tablets.

**Why do we need it?** Device management helps security compliance. Trusted devices can be remembered for faster login. Unrecognised devices can be blocked. This screen manages that device trust list.

**What is inside?**
- List of all registered devices: device name, type, operating system, browser, first access, last access, trusted status
- Mark as trusted button (skips 2FA for this device)
- Remove device (untrusts the device, requiring 2FA on next login)
- Block device (prevents login from this device entirely)

**What to tell sir:** Sir, the Devices screen shows which devices have been used to log into the system. If the team sees a device they do not recognise, they can block it from future access. Trusted personal devices like a company laptop can be marked to skip 2FA, while all other devices require it. This balances security with convenience.

---

## User Preferences

**What is this?** The User Preferences screen allows each user to customise their CRM experience — language, date format, time zone, dashboard layout, and notification settings.

**Why do we need it?** Different users have different working styles and preferences. Personalisation improves adoption and productivity.

**What is inside?**
- Language selector
- Date format (DD/MM/YYYY, MM/DD/YYYY, etc.)
- Time zone
- Currency display format
- Items per page (for lists and tables)
- Default module on login (which screen appears first after login)
- Dashboard widget visibility toggles
- Table column preferences (which columns to show/hide)
- Theme: light or dark mode

**What to tell sir:** Sir, the Preferences screen lets each person set up the system the way they like it. An executive in a different time zone can set their time zone so all timestamps are correct for them. Someone who prefers dark mode can switch to it. Small customisations make a big difference in daily comfort and adoption.

---

## Account Status

**What is this?** The Account Status screen shows and manages the status of a user's account — active, inactive, locked, pending, or suspended.

**Why do we need it?** Account status management is a core security and HR function. When someone joins, is promoted, goes on leave, or leaves the company, their account status needs to change accordingly.

**What is inside?**
- Current account status badge
- Status history: every status change with date, reason, and who made the change
- Change status buttons: Activate, Deactivate, Lock, Unlock, Suspend
- Reason field for status changes
- Date-scheduled deactivation (e.g., set to deactivate on last working day)
- Impact of deactivation: "This user owns X leads. They will be unassigned."
- Notifications: who gets notified when this account is deactivated

**What to tell sir:** Sir, when an employee's last day is confirmed, the admin schedules their account deactivation for midnight that day. The system automatically deactivates the account, unassigns their leads, and notifies the manager. All of this happens automatically at the right moment, without any manual action needed on the last day.

---

## User Analytics

**What is this?** The User Analytics screen provides aggregate data about the user base — login patterns, active user trends, feature adoption rates, and team utilisation.

**Why do we need it?** Understanding how the team uses the system helps the admin identify training needs, improve adoption, and demonstrate value to management.

**What is inside?**
- Daily/weekly active user count trend
- Feature adoption rates: which modules are most and least used
- Login frequency distribution (daily users vs weekly vs occasional)
- Peak usage hours (when most users are active)
- Users who have not used key features
- New user adoption: how quickly new users become active
- Training completion rates (if linked to a training module)

**What to tell sir:** Sir, this analytics screen shows whether the team is actually using the system. If the Analytics module has a 20% adoption rate, the admin knows to run training sessions on it. If lead management is at 95% adoption but Automation is at 10%, there is an opportunity to drive more efficiency by training the team on automation. It is the usage dashboard for the CRM itself.

---

## Bulk Import

**What is this?** The Bulk Import screen allows the admin to import a large number of user records at once from a spreadsheet, rather than creating accounts one by one.

**Why do we need it?** When setting up the CRM for the first time, or when a new branch opens with 20 new employees, creating accounts individually is impractical. Bulk import handles this at scale.

**What is inside?**
- Download template button (pre-formatted Excel or CSV template to fill in)
- Upload filled file button
- Preview of data before import (shows first 10 rows)
- Validation report: rows with errors highlighted (e.g., missing required field, duplicate email)
- Import confirmation
- Import result: "47 users imported successfully, 3 failed — view error details"
- Imported user list with send invitation option

**What to tell sir:** Sir, when we onboard a new branch with 25 new staff members, the admin fills in a simple spreadsheet template with their names, emails, roles, and teams — and uploads it here. All 25 accounts are created in one go. Send invitations in bulk and everyone has access within minutes. No creating accounts one by one.

---

## Bulk Export

**What is this?** The Bulk Export screen allows the admin to export the complete user list or specific subsets of user data for HR reporting, audits, or backup.

**Why do we need it?** HR and compliance teams regularly need user data exports — for audits, for payroll reconciliation, for access reviews. This screen makes that export fast and structured.

**What is inside?**
- Filter options: by role, department, status, date range
- Field selector: choose which user data fields to export
- Export format: CSV, Excel
- Export user activity summary option
- Schedule regular exports
- Export history

**What to tell sir:** Sir, at the end of the financial year, HR needs a complete list of all employees who had CRM access — when they were created, what role they had, when they last logged in. This export screen generates that in the right format in under a minute.

---

## Invite Users

**What is this?** The Invite Users screen allows the admin to send email invitations to new users — prompting them to set up their account and create a password.

**Why do we need it?** Rather than creating a password for a new user and sharing it (which is a security risk), the invitation system sends a secure setup link to the user's email, allowing them to create their own password securely.

**What is inside?**
- Email input (single or multiple, comma-separated)
- Role selector
- Department and team assignment
- Custom invitation message
- Invitation expiry (link valid for X days)
- Send Invitation button
- Pending invitations list: who has been invited but not yet accepted
- Resend or cancel invitation per pending user

**What to tell sir:** Sir, the invitation flow is cleaner and more secure than manually creating passwords. The admin enters the new executive's email, selects their role, and clicks Send. The executive receives a professional email with a setup link, creates their own secure password, and is in the system. Simple, secure, professional.

---

## Deactivate User

**What is this?** The Deactivate User screen guides the admin through the process of properly offboarding an employee from the CRM.

**Why do we need it?** Offboarding is a security and operational process. When someone leaves the company, their data needs to be properly handled — leads reassigned, meetings cancelled or transferred, access revoked cleanly.

**What is inside?**
- User summary: name, role, department, lead count, active meetings count
- Deactivation reason: Resigned, Terminated, Role Change, Contract Ended, Other
- Data handling options:
  - Reassign open leads (select replacement executive)
  - Reassign pending tasks
  - Cancel or transfer upcoming meetings
  - Transfer approval authority
- Deactivation date: immediate or scheduled
- Notification list: who to notify (manager, HR, accounts)
- Confirm Deactivation button

**What to tell sir:** Sir, the Deactivate User screen is the disciplined offboarding process. When an executive leaves, this screen guides the admin through every step — reassign their 35 leads to a replacement, transfer their 3 upcoming meetings, notify their manager and HR. Nothing is left floating. The account is cleanly deactivated with all responsibilities transferred. This prevents data from being stranded with an inactive account.

---

## User Timeline

**What is this?** The User Timeline shows the chronological history of all changes to a user's account — when they were created, role changes, status changes, login history, and account modifications.

**Why do we need it?** For HR compliance and security, a complete history of every change to a user's account must be maintained. The timeline provides this in a readable, chronological format.

**What is inside?**
- All account events in order: account created, invitation sent, first login, role changed (from X to Y), department changed, status changed, password reset, 2FA enabled/disabled, account deactivated
- Each event: timestamp, performed by, details
- Cannot be edited or deleted
- Export as PDF

**What to tell sir:** Sir, the User Timeline is the HR record of an employee's account journey in the CRM. If there is ever a question about when someone was given access to a particular role or when their account was deactivated, this timeline has the answer with a timestamp.

---

# MODULE 15 — ROLES AND PERMISSIONS

The Roles module is where all access control is defined. It determines who can see what, who can do what, and who can approve what. There are 25 screens.

---

## Roles Dashboard

**What is this?** The Roles Dashboard is the overview screen for the entire access control system — all roles defined, how many users are assigned to each, and a summary of the permission structure.

**Why do we need it?** Access control is a critical security and operational function. The dashboard gives the admin a quick health check — are roles properly assigned, are there any users without roles, and are permission conflicts present?

**What is inside?**
- Total roles defined
- Users by role (bar chart or pie chart)
- Users without a role assigned (urgent alert)
- Roles with no users (orphaned roles)
- Recently modified roles
- Permission conflicts summary (if any)
- Quick actions: Create Role, View All Roles, Permission Matrix

**What to tell sir:** Sir, the Roles Dashboard is where all access control starts. In a CRM with sensitive financial and customer data, it is critical that every person only sees what they need for their job — nothing more. This dashboard shows whether all users have roles assigned and whether any roles have been changed recently.

---

## Roles List

**What is this?** The Roles List is the complete directory of all roles defined in the system — from CEO to intern, each with their name, description, and user count.

**Why do we need it?** As the organisation grows, so do the number of roles. A central list makes it easy to manage, audit, and understand the role structure.

**What is inside?**
- Search by role name
- Filter: by department, by type (system-defined vs custom)
- Table: role name, description, department, user count, permissions summary, created date, last modified
- Click to view full Role Details
- Create new role button
- Clone role button (create a new role based on an existing one)
- Compare roles button

**What to tell sir:** Sir, the Roles List shows every role in the system. If management wants to see all the roles defined and understand the permission structure, this is the starting point. Clicking any role shows the full permissions assigned to it.

---

## Create Role

**What is this?** The Create Role screen is the form for defining a new role — its name, description, and all the permissions it includes.

**Why do we need it?** As the business grows, new roles emerge — a franchise operations manager, a regional sales head, a junior accounts executive. Each needs a carefully defined set of permissions tailored to their responsibilities.

**What is inside?**
- Role name field
- Description field
- Department association
- Role type: Standard (pre-defined) or Custom
- Permission assignment interface (covered in detail by the Permission Matrix screen)
- Data access level selector: own records, team records, department records, all records
- Approval authority settings
- Reporting permissions
- Save Role button

**What to tell sir:** Sir, creating a role is a deliberate, structured process. Every permission is explicitly set. When we create the "Team Lead" role, we decide exactly which modules they can access, whether they can view all team leads or only their own team's, and what they can edit versus just view. This precision prevents accidental oversharing of sensitive data.

---

## Edit Role

**What is this?** The Edit Role screen allows authorised admins to modify the permissions and settings of an existing role.

**Why do we need it?** As business processes change, role permissions need updating. A department may take on new responsibilities, or a security review may require tightening access.

**What is inside?**
- All role settings pre-filled
- Impact warning: "X users have this role. Changes will affect them immediately."
- Audit trail of previous permission changes
- Preview permission changes before saving
- Save changes and Confirm button

**What to tell sir:** Sir, modifying a role is a significant action because it affects every user who holds that role. If we tighten the "Sales Executive" role and remove access to the financial module, all 15 executives lose that access the moment we click Save. The impact warning ensures this is done with full awareness.

---

## Role Details

**What is this?** The Role Details screen shows the complete, detailed permission profile of a specific role — every permission granted, every restriction applied, and every user currently assigned to it.

**Why do we need it?** For security audits and access reviews, the team needs to see the exact permissions of any role in a readable format. This screen provides that complete view.

**What is inside?**
- Role name, description, department
- User count (with link to see the users)
- Complete permission list, organised by module:
  - Each module: Can View, Can Create, Can Edit, Can Delete
  - Data scope: own records, team, all
  - Special permissions: can approve, can export, can bulk edit
- Last modified: who changed this role and when
- Edit, Clone, and Archive buttons

**What to tell sir:** Sir, the Role Details screen is the security specification for any role. If the auditor asks "what can a Sales Executive see and do in this system?", the admin opens this screen for the Sales Executive role and it lists every permission — can view leads (own), can create leads, cannot delete leads, cannot see financial data, cannot access user management. Transparent and documented.

---

## Permission Matrix

**What is this?** The Permission Matrix is a grid view showing all roles against all modules — a comprehensive, side-by-side view of what every role can do in every part of the system.

**Why do we need it?** Managing permissions individually can miss conflicts or gaps. The matrix view shows everything at once, making it easy to spot where a role has too much access or too little.

**What is inside?**
- Rows: one per module (Leads, Customers, Accounts, Documents, etc.)
- Columns: one per role (CEO, Manager, Team Lead, Executive, Accounts, Admin, etc.)
- Cells: permission level indicator (Full Access, View Only, No Access, Custom)
- Click a cell to see detailed permissions for that role-module combination
- Export matrix as PDF for compliance documentation
- Filter: show only differences between roles

**What to tell sir:** Sir, the Permission Matrix is the one-screen summary of all access control. It shows that CEO has full access to everything, the Sales Executive can only access leads and meetings they own, and the Accounts team can access financial data but not lead management. It is the definitive access control map, extremely useful for security reviews and audits.

---

## Module Permissions

**What is this?** The Module Permissions screen allows fine-grained control over what a role can do within each specific module — not just whether they can access it, but exactly what actions they can perform within it.

**Why do we need it?** Access control needs to be granular. A user might need to view the Accounts module but not record payments. They might need to see customer records but not edit them. Module-level permissions provide that granularity.

**What is inside?**
- Module selector
- Role selector
- Permission checkboxes for the selected module-role combination:
  - View records
  - Create new records
  - Edit own records
  - Edit all records
  - Delete records
  - Export data
  - Import data
  - Bulk actions
  - Run reports
  - Access analytics
- Save permissions button

**What to tell sir:** Sir, within the Leads module, we can configure that Sales Executives can view and create leads, can edit only their own leads, cannot delete leads, and cannot export the leads list. Team Leads can edit all leads in their team. Managers can export and run reports. This level of control ensures the right data protection at every level.

---

## Data Access

**What is this?** The Data Access screen manages which data records each role can see — whether a user can see only their own records, their team's records, their department's records, or all records in the system.

**Why do we need it?** Beyond module access, data scope is critical. A sales executive should not see leads assigned to executives in another branch. An accounts manager in one region should not see another region's financial data. Data access scope enforces these boundaries.

**What is inside?**
- Role selector
- Module selector
- Data scope configuration:
  - Own records only
  - Team records
  - Department records
  - Branch records
  - All records
- Filters: additional record-level filters (e.g., only records of a specific brand, only records in their state)
- Preview: see a sample of records this role would see with current settings

**What to tell sir:** Sir, data scope is the boundary around what each person can see. A sales executive in the Pune branch should see Pune leads, not Delhi leads. The Data Access configuration enforces that. It is not enough to say "they can access the Leads module" — we also need to say "they can only access leads assigned to them or in their branch."

---

## Feature Access

**What is this?** The Feature Access screen controls access to specific features within modules — advanced features that should only be available to certain roles.

**Why do we need it?** Some features within a module should be restricted — bulk export, advanced analytics, system configuration, bulk deletion. Feature-level access prevents junior users from accidentally or intentionally misusing powerful features.

**What is inside?**
- Feature list per module: advanced features, bulk actions, settings, integrations
- Role-by-role feature toggles
- Examples of features controlled here:
  - Bulk lead export (sensitive — can be used to steal leads)
  - Delete records permanently
  - Access financial reports
  - Configure automation workflows
  - Manage API keys
  - View audit logs

**What to tell sir:** Sir, certain features are too powerful for general access. The ability to export all leads to a file, for example, could be misused. Feature Access ensures that only the sales manager can export leads, not every individual executive. This is the fine-grained security layer beneath module access.

---

## User Assignment (Roles)

**What is this?** The User Assignment screen within Roles management shows all users assigned to a specific role and allows bulk assignment or removal.

**Why do we need it?** Managing which users have which roles needs to be easy and auditable. This screen provides a clean interface for role assignment management.

**What is inside?**
- Selected role at the top with its permission summary
- Current users with this role: name, department, date assigned, assigned by
- Add users to this role button (search and select)
- Remove user from role button
- Bulk assignment: import from CSV
- Role change history: when users were added or removed

**What to tell sir:** Sir, this screen makes role assignment management simple. If 5 new sales executives have been onboarded, the admin selects them all here, clicks "Assign Sales Executive Role," and all 5 get the right permissions in one action. If someone changes roles, they are removed from this list and added to the appropriate new role.

---

## Department Permissions

**What is this?** The Department Permissions screen manages permission rules that apply at the department level — cross-cutting access rules that affect all users in a department regardless of their individual role.

**Why do we need it?** Some access rules should apply to an entire department. All members of the Accounts Department should see financial records. No one in the Sales Department should see HR documents. Department permissions enforce these broader rules.

**What is inside?**
- Department selector
- Department-level permission toggles
- Override rules: department-level permissions can override or supplement role-level permissions
- Conflicts summary: where department and role permissions may contradict

**What to tell sir:** Sir, department permissions are the broader access rules that apply to everyone in a department. Even if a user has a "Sales Executive" role, if they are in the Sales Department, they automatically get access to all sales-related resources. These are configured here and override individual role settings where needed.

---

## Approval Permissions

**What is this?** The Approval Permissions screen defines which roles can create approval requests, which can approve them, and with what authority levels.

**Why do we need it?** Approval authority is a sensitive business control. The wrong person approving large financial transactions or strategic decisions is a governance risk. This screen precisely defines approval authority by role.

**What is inside?**
- Approval type selector
- Requester roles: which roles can submit requests of this type
- Approver roles: which roles can approve requests of this type
- Approval limits: can approve up to a certain value, can approve at a certain urgency level
- Multi-level approval role assignments
- Delegate approval authority settings

**What to tell sir:** Sir, approval authority is carefully controlled here. A Team Lead can approve small discounts up to 5%. The Manager can approve up to 15%. Only the CEO can approve discounts above 15%. These limits are set here. If an executive tries to approve a 20% discount, the system will not let them — it routes to the appropriate authority automatically.

---

## Workflow Permissions

**What is this?** The Workflow Permissions screen controls who can create, edit, activate, and delete automation workflows.

**Why do we need it?** Automation workflows affect business-critical processes. Allowing anyone to create or modify automations is dangerous. This screen restricts workflow management to authorised users.

**What is inside?**
- Role-by-role permission for each workflow action: View, Create, Edit, Activate, Deactivate, Delete
- Workflow category restrictions (some categories may require higher authority)
- Test-only access (can test workflows but not activate in production)

**What to tell sir:** Sir, only the admin and the operations manager should be able to activate automations in the production system. If a junior team member could accidentally activate a poorly-configured automation that sends messages to all 500 leads, that would be a significant problem. This screen prevents that.

---

## Field Permissions

**What is this?** The Field Permissions screen controls visibility and editability of individual fields within forms and records — some fields may be visible to all, some only to managers, some only to admins.

**Why do we need it?** Not all fields should be universally visible. Salary information, sensitive customer financial details, or internal scoring fields should only be visible to authorised roles. Field-level security provides this granularity.

**What is inside?**
- Module selector
- Field list for the module
- Per field, per role: Visible, Hidden, Read-only, Editable
- Sensitive fields marked (e.g., bank account details, personal ID numbers)
- Test: preview a record as seen by each role

**What to tell sir:** Sir, field permissions mean that when Himani opens a customer record, she sees the name, phone, and franchise details — but not the bank account details or credit assessment scores that are visible to the accounts team. These are the same record, but each user sees only the fields appropriate to their role.

---

## Record Permissions

**What is this?** The Record Permissions screen manages sharing rules at the individual record level — allowing specific records to be shared with specific users outside the normal role-based rules.

**Why do we need it?** Sometimes a specific record needs to be shared with a user who would not normally have access — a VIP customer record shared with the CEO, a confidential lead shared between two specific executives. Record-level sharing handles these exceptions.

**What is inside?**
- Record search (find a specific lead, customer, or other record)
- Current access: who can currently see this record
- Share with: add specific users or roles
- Access type: view only, edit, full access
- Expiry: share until a specific date
- Sharing history: who has been given access, by whom, and when

**What to tell sir:** Sir, record-level permissions handle the edge cases. If the CEO wants to be personally involved in a high-value franchise negotiation, the admin can share that specific lead record with the CEO without giving the CEO access to all leads. Targeted, controlled sharing without changing any global settings.

---

## Custom Roles

**What is this?** The Custom Roles screen is a management interface specifically for roles that were created by the organisation as non-standard additions to the default role set.

**Why do we need it?** Every business is different. Some companies need a "Franchise Operations Auditor" role that does not fit any standard category. This screen manages those custom-built roles separately so they are easy to identify and maintain.

**What is inside?**
- List of all custom roles (separate from system-defined roles)
- Each custom role: name, creator, creation date, user count, purpose
- Full permission details per custom role
- Edit, clone, deactivate options
- Convert to template option (save as a template for future use)

**What to tell sir:** Sir, as iFranchise adds new team functions or departments that the standard roles do not cover, the admin creates custom roles. This screen is where those custom roles are managed. They work identically to system roles but are clearly identified as business-specific and can be updated more freely.

---

## Role Templates

**What is this?** The Role Templates screen provides a library of pre-defined role configurations — standard industry roles that can be used as starting points when creating new roles.

**Why do we need it?** Starting a new role from scratch is time-consuming and error-prone. Templates provide well-configured starting points that embody best practices for common roles.

**What is inside?**
- Template library: Sales Executive, Team Lead, Accounts Manager, Admin, Brand Manager, Franchise Operations, etc.
- Each template: description, included permissions, recommended data access scope
- Use as template button (creates a new role draft from the template)
- Preview permissions before using
- System templates (provided by the CRM) vs organisation templates (saved by the team)

**What to tell sir:** Sir, if iFranchise adds a new regional office and needs to set up 10 new roles, the templates library provides a fast starting point. The "Regional Sales Manager" template already has the right permissions configured — they just customise the specifics for the region and publish. Hours of manual permission configuration reduced to minutes.

---

## Clone Role

**What is this?** The Clone Role screen allows the admin to create an exact copy of an existing role as a starting point for a new, similar role.

**Why do we need it?** When a new role is very similar to an existing one with a few differences, cloning is faster than creating from scratch. This prevents duplicate work and ensures the new role starts from a solid, proven base.

**What is inside?**
- Select role to clone
- New role name and description
- Preview of cloned permissions
- Modifications section: highlight what will be different from the original
- Save new role button

**What to tell sir:** Sir, if we already have a "Senior Sales Executive" role and need to create a "Junior Sales Executive" role that is identical except for a few restrictions, the admin clones the senior role, removes the extra permissions, and saves it as the junior role. No need to build from scratch.

---

## Role Comparison

**What is this?** The Role Comparison screen allows side-by-side comparison of two or more roles — showing all permissions for each role and highlighting the differences.

**Why do we need it?** Before assigning a role to a user, or when reviewing access control, understanding the differences between similar roles is important. The comparison view makes this quick and clear.

**What is inside?**
- Select 2-3 roles to compare
- Side-by-side permission table: each row is a permission, columns are the roles
- Differences highlighted (permissions one role has that the other does not)
- Match indicator (percentage of permissions in common)
- Export comparison

**What to tell sir:** Sir, if management is debating whether to use the "Team Lead" or "Senior Executive" role for a promoted employee, the comparison screen shows exactly which extra permissions the Team Lead role includes. The decision can be made in 30 seconds based on the actual differences.

---

## Effective Permissions

**What is this?** The Effective Permissions screen calculates and displays the actual permissions a specific user has, combining their role permissions, department permissions, and any custom record-level shares.

**Why do we need it?** Permissions come from multiple sources — the role, the department, custom overrides. Sometimes these interact in unexpected ways. The Effective Permissions screen shows the final result for any specific user, resolving all conflicts.

**What is inside?**
- User selector
- Module-by-module breakdown of effective permissions
- Source indicator for each permission: "from role", "from department", "custom override"
- Conflict resolution notes (if a department permission overrides a role permission)
- Comparison with base role permissions
- "What can this user see?" simulation: browse the system as this user

**What to tell sir:** Sir, the Effective Permissions screen answers the most practical question: what can this specific person actually do in the system right now? It combines all the layers of permissions and shows the final result. If a user is complaining they cannot access something they should be able to, the admin uses this screen to investigate where the access is being blocked.

---

## Role Analytics

**What is this?** The Role Analytics screen provides data about how roles are distributed and used across the organisation.

**Why do we need it?** Understanding role distribution helps identify security risks — too many users with admin roles, roles that are barely used, or a large number of users without proper roles. Analytics surface these issues.

**What is inside?**
- User count per role (with trend)
- Roles with most users vs least users
- Users with multiple roles (potential over-privilege)
- Inactive role holders (have role but never use the associated features)
- Permission utilisation: which permissions are actually being used vs configured
- Overprivileged users: users whose assigned role gives more access than their activity suggests they need

**What to tell sir:** Sir, role analytics help with the principle of least privilege — ensuring people only have the access they actually need. If 10 employees have been given Manager-level access but none of them are using Manager-specific features, those privileges should probably be reviewed. This screen surfaces those situations.

---

## Access Requests

**What is this?** The Access Requests screen manages user requests for additional access — when a user needs a permission or module access that their current role does not provide.

**Why do we need it?** Sometimes a user needs temporary or permanent access beyond their standard role. Rather than the admin informally updating permissions, a formal request and approval process maintains governance.

**What is inside?**
- Submit access request form: what access is needed, why, for how long
- Pending access requests (for approver review)
- Approve/Reject with reason
- Temporary access option: grant access for a specific time period
- Access request history

**What to tell sir:** Sir, if an executive needs temporary access to the financial module to help reconcile a specific account, they submit a formal request here. The manager sees it, understands the reason, and approves access for 3 days. After 3 days, the access is automatically removed. This is much better than informally changing permissions and forgetting to revert them.

---

## Assignment History

**What is this?** The Assignment History screen shows a complete log of every role change across all users — who was assigned what role, when, and by whom.

**Why do we need it?** For compliance and security audits, the history of all role assignments must be documented. If a security breach occurs, understanding who had what access and when is critical.

**What is inside?**
- Chronological log: user, old role, new role, changed by, date, reason
- Filter by user, role, date range, or admin who made the change
- Cannot be edited
- Export as CSV

**What to tell sir:** Sir, the Assignment History screen is the audit trail for all access control decisions. If a security auditor asks "who had admin access to the financial module in Q3 2025?", this screen provides the complete list with timestamps. It is the accountability record for all access management decisions.

---

## Role Audit

**What is this?** The Role Audit screen provides a comprehensive, tamper-proof log of every change made to any role definition — every permission added, removed, or modified.

**Why do we need it?** Changes to role permissions are a significant security event. If someone modifies the Sales Executive role to add financial export permissions without authorisation, the audit log captures that change with the full details.

**What is inside?**
- All role change events: role created, permission added, permission removed, role cloned, role archived
- Each event: timestamp, user, role affected, what changed (old permission vs new permission)
- Cannot be edited or deleted
- Filter by role, date range, or change type
- Export for compliance review

**What to tell sir:** Sir, the Role Audit is the governance record for all access control. If the company undergoes an ISO 27001 or SOC 2 audit, this screen provides the evidence that access changes are tracked, authorised, and documented. It is the non-negotiable paper trail for information security compliance.

---

## Role Timeline

**What is this?** The Role Timeline shows the chronological evolution of a specific role — every change made to it since creation, in an easy-to-read timeline format.

**Why do we need it?** Roles evolve as business needs change. The timeline shows how a role's permissions have changed over time, which is useful for understanding how access control has evolved and for reverting unwanted changes.

**What is inside?**
- Chronological list of all events for this role: created, permission added, permission removed, users assigned, users removed, role cloned, archived
- Visual timeline layout
- Each event with details
- "View permissions at this point in time" option (see what permissions the role had on any specific date)
- Export timeline

**What to tell sir:** Sir, the Role Timeline is like a version history for the role. If someone changed the "Team Lead" role 6 months ago and removed a permission that the team leads actually need, this timeline shows when the change was made. The admin can restore the previous version of the role instantly.

---

# MODULE 16 — AUDIT

The Audit module is the comprehensive system-level tracking and compliance layer. Every action in the CRM is logged here. There are 25 screens.

---

## Audit Dashboard

**What is this?** The Audit Dashboard is the overview screen for system-wide audit activity — showing total events, security alerts, and compliance status.

**Why do we need it?** The audit trail is the business's protection against errors, misuse, and non-compliance. The dashboard gives the admin a daily health check of the audit system and any events that need attention.

**What is inside?**
- Total audit events today and this week
- Security events count (failed logins, suspicious activity)
- Data changes today
- User activity summary
- System events (errors, configuration changes)
- Compliance score (percentage of required activities that are audited)
- Recent security alerts
- Top active users today
- Quick actions: View Timeline, View Security Events, Export Audit Report

**What to tell sir:** Sir, the Audit Dashboard is the security and compliance overview. Every action taken in the system — every login, every record change, every document downloaded — is counted and categorised here. If 15 security events happened today compared to the usual 2, that is an immediate flag that something unusual is happening.

---

## Audit Timeline

**What is this?** The Audit Timeline is a chronological, real-time feed of every action occurring in the system — a live event log for the entire CRM.

**Why do we need it?** Real-time visibility into system activity is essential for security monitoring. The timeline allows the admin to see what is happening right now and catch unusual behaviour as it occurs.

**What is inside?**
- Live scrolling feed of all system events
- Each event: timestamp, user, action type, module, record affected, IP address
- Filter: by user, module, event type, date range
- Event type colour coding: normal (grey), data change (blue), security event (orange), error (red)
- Pause feed button (to review without new events pushing the view)
- Search the feed

**What to tell sir:** Sir, the Audit Timeline is the heartbeat of the system. The admin can watch in real time as users log in, create records, send messages, and make changes. If something unusual happens — a user accessing the financial module at 2 AM when they never do — it stands out immediately. It is the real-time security monitor.

---

## Audit Explorer

**What is this?** The Audit Explorer is a powerful search and filter tool for the audit database — allowing any event to be found across all time, all users, and all modules.

**Why do we need it?** When investigating an incident or responding to an audit, the team needs to find specific events quickly. The Explorer provides the search capability to find any event with precision.

**What is inside?**
- Advanced search: search by any combination of user, date, module, action type, record ID, IP address
- Full-text search across all audit log descriptions
- Saved searches (save frequently used search configurations)
- Results list with export option
- Event count for any search query
- Related events: find all events related to a specific record

**What to tell sir:** Sir, the Audit Explorer is the investigative tool. If there is a question "who accessed the customer agreement for Company X between March 1st and March 15th?", the admin uses the Explorer to find the answer in seconds. It can search billions of log entries and return precise results quickly.

---

## User Activity (Audit)

**What is this?** The User Activity screen in the Audit module shows a detailed log of all actions performed by a specific user across the entire system.

**Why do we need it?** When investigating an employee's activity — for performance review, security investigation, or a complaint — the admin needs the complete, immutable record of everything that person has done.

**What is inside?**
- User selector
- Date range filter
- Complete activity log for the selected user: every login, every page visited, every record created/edited/deleted, every export, every message sent
- Activity summary: most active time, most accessed modules
- Comparison to peer average activity
- Export user activity report

**What to tell sir:** Sir, if there is ever a question about what a specific employee has been doing in the system, this screen provides the complete, tamper-proof answer. Every click, every change, every download is logged. This protects both the company and the employee — it is an objective record that resolves disputes based on facts.

---

## Login History

**What is this?** The Login History screen shows all successful login events across all users — who logged in, when, from where, and on which device.

**Why do we need it?** Login patterns reveal a lot about system health and security. Unusual login times, locations, or devices can indicate compromised accounts or policy violations.

**What is inside?**
- Comprehensive login log: user, timestamp, IP address, location, device, browser, session duration
- Filter by user, date range, location, device type
- Successful logins vs failed attempts breakdown
- Geographic map of login locations
- Unusual login flags (first time from new location, login outside normal hours)
- Export login history

**What to tell sir:** Sir, the Login History is the attendance register for the system. It shows who logged in every day and from where. If a user's credentials are used to log in from two different cities on the same day, the system flags that as suspicious. This is the first line of security defence.

---

## Logout History

**What is this?** The Logout History screen tracks all user logout events — manual logouts, session timeouts, and forced logouts.

**Why do we need it?** Understanding logout patterns helps identify security issues. Users who never log out leave sessions open, increasing risk. Forced logouts by admin indicate security responses. This screen tracks all of these.

**What is inside?**
- Logout events: user, timestamp, logout type (manual, timeout, admin forced, system)
- Session duration per session
- Users with very long sessions (never logging out properly)
- Recent forced logout events by admin

**What to tell sir:** Sir, the Logout History completes the login picture. Together with login history, it shows the complete session picture. If the same account is logged in from two devices and neither has logged out in 3 days, that is worth investigating.

---

## Failed Login History

**What is this?** The Failed Login History screen tracks all unsuccessful login attempts — wrong passwords, locked accounts, and security blocks.

**Why do we need it?** Failed login patterns are the most important security indicator. Multiple failures against one account suggest a brute force attempt. Multiple failures from one IP address suggest an attack. This screen makes those patterns visible.

**What is inside?**
- Failed login events: attempted account (email), timestamp, IP address, failure reason, device
- Failed attempts grouped by: account, IP address, geographic location
- Brute force detection: accounts with 5+ failures in a short period highlighted
- Automatic lockout events recorded
- Geographic heat map of failed attempts
- Alert if failure rate spikes suddenly

**What to tell sir:** Sir, failed logins are the most important security signal in the system. If 200 failed login attempts occur against one account in 10 minutes from a single IP address, that is a brute force attack and the system should have locked the account after 5 attempts. This screen shows those events so the admin can block the IP address and investigate.

---

## Security Events

**What is this?** The Security Events screen shows all events flagged as security-related — unusual access patterns, policy violations, privilege escalations, and potential threats.

**Why do we need it?** Security events require immediate attention. This dedicated screen surfaces them separately from normal activity so the admin does not miss critical alerts.

**What is inside?**
- Security event list: event type, user, timestamp, severity (Low, Medium, High, Critical), status (Open, Investigating, Resolved)
- Event types: multiple failed logins, unusual access pattern, admin action outside hours, data bulk export, role permission escalation, API rate limit exceeded, suspicious IP
- Assign to investigator button
- Status update (In Progress, Resolved with notes)
- Alert notification history (was admin notified?)

**What to tell sir:** Sir, the Security Events screen is the incident management board for the CRM. Critical events — like someone attempting to bulk export all customer data — appear here with a "Critical" severity flag. The admin is immediately notified, can investigate, and mark the event as resolved once handled. Nothing gets buried.

---

## System Events

**What is this?** The System Events screen logs all technical events related to the CRM's operation — errors, configuration changes, service status changes, and maintenance events.

**Why do we need it?** Technical issues in the CRM — errors, integration failures, service disruptions — need to be tracked. The System Events log provides the technical team with the information needed to diagnose and fix problems.

**What is inside?**
- System event log: timestamp, event type, component (email service, SMS, database, API), severity, description
- Error events: full error message and stack trace
- Configuration change events: what was changed, by whom
- Service status changes: when email or WhatsApp service went down and came back
- Performance events: slow queries, high load periods
- Filter by severity or component

**What to tell sir:** Sir, the System Events screen is for the technical team. If email notifications stopped working for 2 hours yesterday, this screen shows exactly when the email service went down, what the error was, and when it was restored. It is the technical health record that enables fast diagnosis and resolution.

---

## Module Logs

**What is this?** The Module Logs screen shows a filtered audit view for a specific module — all events that occurred within Leads, Customers, Accounts, or any other single module.

**Why do we need it?** When investigating module-specific issues or conducting a module-specific compliance review, a focused view of just that module's events is more useful than the full system-wide log.

**What is inside?**
- Module selector
- Events log filtered to the selected module
- All standard audit log fields: timestamp, user, action, record, old/new values
- Summary: event count for the period, most common action, most active user in this module
- Export module log

**What to tell sir:** Sir, if the accounts team needs to audit all changes made in the Accounts module over the last quarter, they come to Module Logs, select Accounts, set the date range, and export. Clean, focused, exactly what they need for the module-specific audit.

---

## Data Changes

**What is this?** The Data Changes screen specifically tracks all record modifications — every field that was changed on any record, showing the old value and the new value.

**Why do we need it?** Data integrity is critical. This screen provides a complete record of every data modification, enabling the team to detect incorrect changes, unauthorised edits, and data corruption.

**What is inside?**
- Log of all data modification events
- Each entry: record type, record ID, field changed, old value, new value, changed by, timestamp
- Filter by module, field name, user, or date range
- Search: "show me all records where the royalty rate field was changed"
- Restoration option: restore a specific field to its previous value (admin only)

**What to tell sir:** Sir, the Data Changes screen is essential for data governance. If a franchisee's royalty rate was incorrectly changed from 8% to 5%, this screen shows exactly when it was changed, by whom, and from what value. The admin can restore it to the correct value in one click.

---

## Version History

**What is this?** The Version History screen stores complete snapshots of records at different points in time, allowing comparison between current and historical states of any record.

**Why do we need it?** Beyond tracking individual field changes, version history preserves the full state of a record at each significant change, enabling comprehensive historical comparison.

**What is inside?**
- Record selector
- Version list: date, modified by, summary of changes
- Full record snapshot for each version
- Side-by-side comparison of two versions (differences highlighted)
- Restore to previous version option (admin only, with confirmation)

**What to tell sir:** Sir, version history is the undo function for data. If a customer record was significantly changed 3 weeks ago and the team now believes those changes were incorrect, they can open the version from before the change, compare the two states side by side, and restore the old version with one click.

---

## Deleted Records

**What is this?** The Deleted Records screen is a soft-delete recycle bin — showing all records that have been deleted from the system, with the option to restore them.

**Why do we need it?** Accidental deletions happen. A lead deleted by mistake, a customer record accidentally removed — without a recycle bin, that data is lost forever. The Deleted Records screen gives the team a recovery safety net.

**What is inside?**
- List of all soft-deleted records: record type, name/ID, deleted by, deletion date, deletion reason
- Search and filter
- Preview deleted record content
- Restore button (brings the record back to active status)
- Permanent delete button (admin only — truly removes after confirmation)
- Auto-purge settings (how long before deleted records are permanently removed)

**What to tell sir:** Sir, the Deleted Records screen is the recycle bin. If Himani accidentally deletes a lead — it does not disappear immediately. It goes into this bin and can be restored within a configured period (say, 30 days). After 30 days, it is permanently purged. This simple feature has saved many businesses from data recovery crises.

---

## Restore Records

**What is this?** The Restore Records screen manages the process of recovering deleted records — with a formal workflow that includes confirmation and notification.

**Why do we need it?** Restoring a record is not always straightforward — the record may have dependencies (linked meetings, payments, tasks) that also need to be restored. This screen guides the restore process carefully.

**What is inside?**
- Select records to restore (from the Deleted Records view)
- Restore preview: what will be restored and any dependencies (linked records)
- Confirmation step: "Restoring this lead will also restore 3 associated meetings and 5 notes"
- Restore and notify option (notify the record owner that it has been restored)
- Restore history: log of all restoration actions

**What to tell sir:** Sir, the Restore screen ensures that when a record is recovered, it is brought back completely — not just the main record but everything linked to it. The team is notified, and the restoration is logged in the audit trail.

---

## Audit Export

**What is this?** The Audit Export screen allows authorised users to export audit log data for external analysis, compliance submissions, or sharing with auditors.

**Why do we need it?** External auditors, legal teams, and compliance officers need audit data in standard formats. This screen provides controlled, formatted export of audit records.

**What is inside?**
- Scope selector: select which type of audit data to export
- Date range picker
- Filter options: by user, module, event type
- Export format: CSV, Excel, PDF
- Export scope warning: "Large exports may take several minutes"
- Scheduled export: auto-export audit data to secure storage monthly
- Export history with download links

**What to tell sir:** Sir, when the statutory auditor asks for a log of all data access events in the financial year, the compliance team exports it from here. They select the date range, choose the relevant event types, and download the file. Complete, accurate, formatted for external review.

---

## Compliance Report

**What is this?** The Compliance Report screen generates structured reports showing the organisation's compliance status against defined policies and regulatory requirements.

**Why do we need it?** Compliance is not just about having logs — it is about demonstrating that processes are followed. This screen generates formatted compliance reports that show evidence of proper controls.

**What is inside?**
- Compliance framework selector (internal policy, GDPR, data protection)
- Compliance check list: each check with pass/fail status and evidence
- Overall compliance score
- Non-compliant items with recommended actions
- Generate Compliance Report button (PDF format)
- Historical compliance scores (trend)

**What to tell sir:** Sir, the Compliance Report is what the legal and compliance team uses to demonstrate that the business follows proper data governance. Before a major brand partnership review or investor due diligence, this report shows that the CRM has proper controls, proper access management, and complete audit trails. It is a significant credibility asset.

---

## Security Dashboard (Audit)

**What is this?** The Security Dashboard within the Audit module provides a real-time security posture view — combining failed logins, suspicious events, policy violations, and vulnerability indicators.

**Why do we need it?** Security is not a periodic check — it requires constant monitoring. This dashboard surfaces the current security status so the admin can respond to threats in real time.

**What is inside?**
- Current threat level indicator (Normal, Elevated, High)
- Active security alerts count
- Failed login attempts in the last 24 hours
- Unusual access patterns detected
- Users with excessive permissions (access they are not using)
- Unprotected admin accounts (no 2FA enabled)
- Recent security policy violations
- Security score (composite of multiple security factors)
- Recommended actions to improve security score

**What to tell sir:** Sir, the Security Dashboard is the continuous security health check for the CRM. It looks at multiple security factors and gives an overall score. If the score is below a threshold — perhaps too many admin accounts without 2FA, or excessive failed login attempts — the admin gets specific recommendations to fix it.

---

## Suspicious Activity

**What is this?** The Suspicious Activity screen shows events that the system has flagged as potentially suspicious based on behavioural analysis — unusual patterns that deviate from normal user behaviour.

**Why do we need it?** Not all security threats are obvious. Gradual data exfiltration, unusual access patterns, or behaviour that looks normal individually but suspicious collectively need to be detected intelligently.

**What is inside?**
- Suspicious events list: user, activity description, risk score, timestamp, status
- Risk scoring explanation: why this activity was flagged
- Context: comparison to the user's normal behaviour
- Investigate button: links to the full audit trail for that event
- Mark as legitimate (if investigated and confirmed normal)
- Mark as security incident (triggers formal incident response)
- Automated detection rules configuration

**What to tell sir:** Sir, the Suspicious Activity screen uses behavioural patterns to flag unusual events. If an executive who normally accesses 10 records a day suddenly accesses 2,000 in one hour, that is suspicious. If someone exports data at 3 AM when they usually work 9 AM to 6 PM, the system flags it. Not all flags will be genuine threats — some are legitimate — but none go unnoticed.

---

## API Logs

**What is this?** The API Logs screen shows a complete log of all API requests made to and from the CRM — external systems accessing data, integrations pushing data, and SDK interactions.

**Why do we need it?** API access can be a security vulnerability. Tracking every API call ensures that external access is legitimate, within configured limits, and not being abused.

**What is inside?**
- API call log: timestamp, API key used, endpoint accessed, HTTP method, response code, data volume
- Filter by API key, endpoint, date range, response code
- Failed API calls (4xx and 5xx errors)
- Rate limit violations
- Unusual volume alerts
- API key usage summary (which keys are most and least active)

**What to tell sir:** Sir, the API Logs screen monitors all programmatic access to the CRM. If an external system is making thousands of API calls per hour and pulling large amounts of data, the admin can see it here and investigate whether it is legitimate. It is the access control layer for machine-to-machine communication.

---

## Integration Logs

**What is this?** The Integration Logs screen tracks all data flows between the CRM and integrated external systems — email services, SMS gateways, WhatsApp APIs, payment gateways, and other connected platforms.

**Why do we need it?** Integrations can fail silently — data not syncing, messages not sending, payments not updating. This log surfaces integration failures so they can be fixed before they cause business problems.

**What is inside?**
- Integration list with status (active, failing, paused)
- Per integration: data transferred, success rate, last sync time, error count
- Error log for each integration: detailed error messages
- Retry failed sync button
- Integration health dashboard
- Alert settings for integration failures

**What to tell sir:** Sir, if the WhatsApp API integration has been failing for 2 hours, the Integration Logs screen shows exactly when it started failing and what the error is. The admin can retry immediately and knows exactly how many messages were not delivered during the failure window. This enables fast resolution and informed customer communication about any delay.

---

## Notification Logs (Audit)

**What is this?** The Notification Logs in the Audit module provide a complete, audit-grade record of all notification events — separate from the notification channel screens, this is the compliance-grade log.

**Why do we need it?** For regulatory compliance in certain jurisdictions, there may be requirements to prove that specific communications were sent. This audit-grade log serves that purpose.

**What is inside?**
- Complete notification log: all channels, all recipients, all timestamps, all delivery statuses
- Tamper-proof (cannot be modified)
- Advanced filtering and search
- Export for compliance submissions

**What to tell sir:** Sir, the Notification Logs audit record is different from the operational notification screens — this one cannot be modified and is the legally defensible record of all communications. If a regulatory body asks "did you inform franchisees about the fee change by the required date?", this log provides the evidence.

---

## Email Logs

**What is this?** The Email Logs screen provides a detailed log of all emails sent through the CRM system, including delivery confirmations, opens, and failures.

**Why do we need it?** Email is a primary communication channel and a significant source of potential compliance issues — spam complaints, unsubscribes, and delivery failures. This log tracks all email activity.

**What is inside?**
- Complete email sending log: recipient, subject, send time, delivery time, open time, click events
- Bounce management: hard bounces (invalid email) and soft bounces (temporary failure)
- Spam complaint log
- Unsubscribe events
- Email service provider status
- Domain reputation score

**What to tell sir:** Sir, the Email Logs screen shows the complete picture of every email the system has ever sent. If a customer claims they never received their invoice, the email log shows whether it was delivered, whether it was opened, and if it bounced. This is the evidence that protects the accounts team from billing disputes.

---

## Automation Logs (Audit)

**What is this?** The Automation Logs screen in the Audit module provides the audit-grade, immutable record of all automation executions — separate from the operational execution history in the Automation module.

**Why do we need it?** Since automations make system changes without direct human action, their audit trail must be especially comprehensive and tamper-proof.

**What is inside?**
- All automation execution events: triggered at, completed at, triggered by (which record/event), actions performed, records affected, by which workflow
- Cannot be edited or deleted
- Advanced filter and search
- Export for compliance review

**What to tell sir:** Sir, automation logs in the Audit module are the legally defensible record of every automated action the system has ever taken. If a customer claims an invoice was incorrectly auto-generated or a wrong message was automatically sent, this log shows the exact automation, the trigger event, and every action it took. Full accountability even for automated processes.

---

## Error Logs

**What is this?** The Error Logs screen captures all application errors, exceptions, and technical failures that occur in the CRM — essential for maintaining system reliability.

**Why do we need it?** Technical errors need to be tracked, investigated, and resolved. This log gives the technical team the raw error data needed to diagnose problems, monitor system health, and prevent recurring issues.

**What is inside?**
- Error log: timestamp, error type, severity, affected module, user (if applicable), full error message
- Error frequency (same error occurring repeatedly)
- Resolved vs open errors
- Error trend: is the error rate increasing or decreasing?
- Assigned to developer: mark errors for technical team review
- Resolution tracking

**What to tell sir:** Sir, the Error Logs screen is the technical team's alert system. If a module starts throwing errors — say, the PDF generation for invoices is failing — this screen shows every occurrence with the full technical detail. The development team can fix the issue quickly rather than waiting for user complaints to surface it.

---

## Database Logs

**What is this?** The Database Logs screen provides technical-level visibility into database activity — query performance, data backup status, and database health metrics.

**Why do we need it?** Database health directly affects CRM performance. Slow queries, approaching storage limits, or backup failures need to be caught early before they cause downtime or data loss.

**What is inside?**
- Database performance metrics: query response times, slow queries log
- Database size and growth trend
- Backup status: last successful backup, next scheduled backup, backup integrity
- Connection count: current connections vs limit
- Index health
- Replication status (if applicable)
- Alert thresholds for each metric

**What to tell sir:** Sir, the Database Logs screen is the technical underpinning of everything. If the database is 90% full and no one notices, the system starts failing. If last night's backup failed and it goes undetected, the company could lose data. This screen gives the technical team advance warning so they can take action before it becomes a crisis.

---

# MODULE 17 — SETTINGS

The Settings module is the configuration centre for the entire CRM. Every aspect of how the system behaves, looks, and connects is configured here. There are 50 screens.

---

## Settings Dashboard

**What is this?** The Settings Dashboard is the overview page of the Settings module — showing all configuration categories with quick access links and alerts for any settings that need attention.

**Why do we need it?** The admin needs a central map of all system configurations. The dashboard shows what is configured, what is not, and what may need review.

**What is inside?**
- Configuration categories: Company, Organisation, Communication, Security, Integrations, Billing, System
- Status badges per category: Configured, Needs Attention, Incomplete
- Recent settings changes (last 5 changes with who made them)
- System health summary
- Quick links to most commonly used settings
- Alert for critical settings not configured (e.g., email not set up, backup not configured)

**What to tell sir:** Sir, the Settings Dashboard is the admin's home base. It shows all configuration areas and flags anything that needs attention — if email is not configured, the system cannot send notifications. This overview makes sure nothing important is missed during setup or ongoing maintenance.

---

## Company Settings

**What is this?** The Company Settings screen stores the core business information for iFranchise — the company details that appear on invoices, emails, agreements, and reports.

**Why do we need it?** All communications and documents from the CRM must carry accurate company information. This screen is the single source for that information.

**What is inside?**
- Company name (legal name)
- Trade name / brand name
- Company type (Private Limited, LLP, Proprietorship)
- Registered address
- Operating address
- Primary phone and email
- Website URL
- Company registration number (CIN)
- GSTIN
- PAN number
- Bank account details (for invoices)
- Fiscal year start month
- Company logo upload
- Company stamp/seal image upload

**What to tell sir:** Sir, the Company Settings screen stores the official details of iFranchise as a business entity. Every invoice, agreement, and formal document generated by the CRM uses this information. If the company registers a new address or updates its GST number, this is updated once here and it reflects everywhere automatically.

---

## Organisation Structure

**What is this?** The Organisation Structure settings screen defines how the company is organised within the CRM — divisions, regions, branches, and the hierarchy of organisational units.

**Why do we need it?** The CRM's data access, reporting, and notification rules depend on the organisational structure. This screen establishes that structure as the foundation.

**What is inside?**
- Organisation hierarchy builder: corporate → division → region → branch
- Create new organisational unit (name, type, parent unit, head)
- Activate/deactivate units
- Move units in the hierarchy
- Assign users to units
- Unit-level settings override capability

**What to tell sir:** Sir, if iFranchise operates across Mumbai, Delhi, and Bangalore, each with its own team, the organisation structure defines these branches. All reporting, data access, and user assignments respect this structure. The Mumbai team sees Mumbai leads, the Delhi team sees Delhi leads. This hierarchy is defined here.

---

## Branches

**What is this?** The Branches screen manages individual branch offices — their details, location, contact information, and assigned team members.

**Why do we need it?** Each branch is a distinct operational unit with its own team, location, and potentially its own brand portfolio focus. Managing branches ensures the CRM reflects the real geographic operational structure.

**What is inside?**
- Branch list: name, city, state, address, branch manager, user count, status
- Create new branch: all details plus assignment of manager and team
- Edit branch details
- Branch-specific settings (operating hours, holiday calendar, currency if international)
- Move users between branches

**What to tell sir:** Sir, each physical office is configured as a branch. Users are assigned to branches, and lead routing can be configured to route leads to the nearest branch based on the prospect's city. Reports can be filtered by branch.

---

## Business Hours

**What is this?** The Business Hours settings screen defines the working hours for the organisation — when the team is available, which affects notification timing, automation scheduling, and SLA calculations.

**Why do we need it?** Notifications should not be sent at 2 AM. SLAs should be counted only during working hours. Automations need to know when to fire. This screen tells the system what "business hours" means.

**What is inside?**
- Weekly schedule: for each day of the week, set start time and end time
- Day-off toggle per day (Sunday marked as off)
- Break times (lunch break not counted for SLA)
- Time zone selector
- Branch-specific overrides (different branches may have different hours)
- 24/7 option for certain notification types (e.g., system alerts always sent regardless of hours)

**What to tell sir:** Sir, business hours configuration affects how the system calculates response times and when it sends messages. If an approval request comes in at 11 PM, the SLA countdown starts the next morning at 9 AM, not from 11 PM. Customers do not get WhatsApp messages at midnight unless it is a critical alert.

---

## Holiday Calendar

**What is this?** The Holiday Calendar screen manages all public and company holidays — ensuring the system does not count holidays in SLAs and does not schedule reminders on non-working days.

**Why do we need it?** Holidays affect business operations. An SLA of "respond within 2 business days" should not count a national holiday as a business day. This screen defines what counts as a holiday.

**What is inside?**
- Annual holiday list for the current and next year
- Add holiday: date, name, type (national, regional, company-declared), recurring toggle
- Import standard Indian public holidays with one click
- Branch-specific holiday overrides (Maharashtra offices have Maharashtra state holidays)
- Holiday calendar view (monthly view with holidays highlighted)

**What to tell sir:** Sir, the Holiday Calendar ensures the system behaves realistically around public holidays. If Diwali is marked here, the automated payment reminder scheduled for that day will automatically shift to the next working day. SLA counters pause. The system respects holidays without anyone having to manually pause processes.

---

## Branding Settings

**What is this?** The Branding Settings screen manages the visual identity of the CRM — the company's logo, brand colours, and how the platform is presented to users.

**Why do we need it?** The CRM should feel like the company's own platform, not a generic tool. Branding it with iFranchise's logo and colours creates a professional, cohesive identity that also helps with user trust and adoption.

**What is inside?**
- Company logo upload (header logo, favicon, email logo)
- Primary brand colour (used for buttons, highlights)
- Secondary brand colour
- Header background colour/image
- Login page customisation: background image, welcome message
- Email header and footer branding
- Report header customisation (company name, logo on exported PDFs)

**What to tell sir:** Sir, the Branding screen is where the CRM gets the iFranchise identity. The logo in the top left corner, the brand colour on buttons and highlights, the company name and logo on every invoice PDF and report — all set here. When the system is fully branded, it feels like a premium, professional iFranchise tool rather than a generic software product.

---

## Logo and Assets

**What is this?** The Logo and Assets screen is the central storage for all official brand assets used within the CRM — logos in different sizes, icons, and standard graphic files.

**Why do we need it?** Different contexts require different sizes and formats of the logo. This screen stores the authorised versions so the system always uses the right asset in the right place.

**What is inside?**
- Logo variants: full colour, monochrome, white (for dark backgrounds), transparent
- File formats: PNG, SVG, JPG
- Size variants: standard, small, large, email size
- Icon/favicon upload
- Asset usage guide: where each variant is used
- Upload new asset

**What to tell sir:** Sir, this is the brand asset repository. The designer uploads the official logo in all required formats here, and the system uses the right version in the right place — a small version in the browser tab, the full version in email headers, and the white version in dark-background reports.

---

## Theme Settings

**What is this?** The Theme Settings screen manages the visual theme of the CRM — colours, fonts, spacing, and design elements that define the overall look and feel.

**Why do we need it?** A consistent, well-designed interface reduces cognitive load and makes the team more productive. The theme can be aligned with the company's overall brand identity.

**What is inside?**
- Colour palette: primary, secondary, success, warning, danger, info colours
- Font family selector
- Font sizes for headings and body text
- Button style (rounded, square, pill)
- Card style (shadowed, bordered, flat)
- Dark mode toggle (system-wide)
- Density settings: compact, comfortable, spacious
- Preview changes before applying
- Reset to defaults button

**What to tell sir:** Sir, the Theme Settings control the visual style of the entire CRM. If the team prefers a cleaner look with more spacing, or if management wants the interface to match iFranchise's brand guidelines more closely, these adjustments are made here. A well-designed interface contributes to better adoption and reduced errors.

---

## Email Configuration

**What is this?** The Email Configuration screen sets up the email system used by the CRM — the sending address, email service provider, and default email settings.

**Why do we need it?** The CRM needs to send thousands of emails — invoices, reminders, notifications, confirmations. This screen connects the CRM to the email infrastructure so all outgoing emails are properly authenticated and delivered.

**What is inside?**
- Default from address (e.g., noreply@ifranchise.in)
- Reply-to address
- Default email signature
- Email service provider selector (Brevo, Mailgun, SendGrid, custom SMTP)
- Email sending domain and authentication (SPF, DKIM records — instructions provided)
- Daily sending limit configuration
- Bounce handling email address
- Email footer configuration (unsubscribe link, company address for CAN-SPAM compliance)

**What to tell sir:** Sir, the Email Configuration is the foundation of all email communication from the CRM. Without this being set up correctly, the system's emails would end up in spam folders or be rejected by mail servers. A properly configured sending domain with SPF and DKIM authentication ensures professional, deliverable email communication.

---

## SMTP Settings

**What is this?** The SMTP Settings screen configures the outgoing mail server details when the company uses its own mail server or a specific SMTP service for email delivery.

**Why do we need it?** Organisations with their own email infrastructure (e.g., a company running Microsoft Exchange or Google Workspace for Business) need to connect the CRM to their mail server for consistency and control.

**What is inside?**
- SMTP host/server address
- SMTP port
- Authentication type (TLS/SSL)
- Username and password
- Test connection button
- Outgoing server health status

**What to tell sir:** Sir, if iFranchise has its own email server or uses Google Workspace, this screen connects the CRM to that server so all CRM emails come from the official company domain — not from a third-party provider's domain. This maintains email deliverability and brand consistency.

---

## WhatsApp Settings

**What is this?** The WhatsApp Settings screen configures the WhatsApp Business API integration — connecting the CRM to the approved WhatsApp Business API for sending automated and manual messages.

**Why do we need it?** WhatsApp communication requires proper setup through Meta's Business API. This screen manages that connection — API credentials, phone number registration, and template management link.

**What is inside?**
- WhatsApp Business API credentials (API key, phone number ID, business account ID)
- Phone number registration status
- Connected phone number
- API health status
- Template approval status link
- Message sending limits (Meta-defined daily limits)
- Opt-out management settings
- Test message button

**What to tell sir:** Sir, WhatsApp is the most important communication channel in the system, but it requires proper API setup with Meta. This screen is where that connection is configured. Once connected, the system can send automated WhatsApp messages at scale — meeting reminders, payment reminders, welcome messages — all through the official WhatsApp Business API.

---

## SMS Settings

**What is this?** The SMS Settings screen configures the SMS gateway used for sending text messages — API credentials, sender ID, and route preferences.

**Why do we need it?** Sending SMS in India requires a registered sender ID and connection to an approved bulk SMS provider. This screen manages that configuration.

**What is inside?**
- SMS gateway provider selector
- API credentials
- Sender ID (e.g., IFRCHZ)
- Route selector: transactional vs promotional
- DND scrubbing: automatic filtering of DND numbers
- SMS balance indicator
- Low balance alert threshold
- Test SMS button

**What to tell sir:** Sir, the SMS Settings connect the CRM to an SMS gateway. The sender ID "IFRCHZ" appears on the recipient's phone so they know the message is from iFranchise. Transactional SMS (for OTPs and alerts) have higher delivery priority and can reach DND numbers. This screen manages all of that.

---

## Notification Settings

**What is this?** The Notification Settings screen defines the global rules for all system notifications — which events generate notifications, default channels, and quiet hours.

**Why do we need it?** Notification behaviour needs to be configured at a system level first, before individual user preferences apply. This screen sets the defaults that the entire system follows.

**What is inside?**
- Default notification channels per event type
- Quiet hours: do not send any non-critical notifications during these hours
- Batch notification settings: group multiple similar notifications into a digest
- Priority override: always send critical alerts regardless of quiet hours
- New user default preferences (what notifications new users receive by default)

**What to tell sir:** Sir, global notification settings ensure the system communicates appropriately. No WhatsApp messages to customers at 11 PM. No rapid-fire individual notifications when 10 records are updated at once — instead, a digest. These defaults make the system professional and respectful of people's time.

---

## Storage Settings

**What is this?** The Storage Settings screen manages where and how files are stored — local server, cloud storage (AWS S3, Azure Blob, Google Cloud), and storage policies.

**Why do we need it?** Documents in the CRM can grow to gigabytes of data. Proper storage configuration ensures scalability, security, and accessibility.

**What is inside?**
- Storage provider selector: local, AWS S3, Azure Blob, Google Cloud Storage
- Storage credentials and bucket configuration
- Storage usage dashboard (current usage and growth trend)
- Maximum file size per upload
- Allowed file types
- Automatic compression settings
- Backup storage configuration
- CDN configuration for faster file delivery

**What to tell sir:** Sir, the Storage Settings determine where all uploaded documents, images, and files are stored. For a production system, cloud storage (like AWS S3) is recommended — it scales infinitely, is always available, and has built-in redundancy. This screen connects the CRM to that storage infrastructure.

---

## File Upload Settings

**What is this?** The File Upload Settings screen configures the rules for file uploads across the CRM — allowed types, size limits, and scanning policies.

**Why do we need it?** Unrestricted file uploads are a security risk. This screen ensures only safe, appropriate file types are accepted and that files are scanned for malware.

**What is inside?**
- Maximum file size per upload
- Maximum total storage per user
- Allowed file types (PDF, JPG, PNG, DOCX, XLSX, etc.)
- Blocked file types (EXE, JS, etc.)
- Virus/malware scan toggle (with connected scanning service)
- Image compression settings (automatically resize large images)
- PDF password protection option

**What to tell sir:** Sir, file upload settings protect the system from security risks. If someone tries to upload an executable file (.EXE) pretending it is a document, the system blocks it. Files over the size limit are rejected. Uploads can be automatically scanned for viruses before being stored. These controls keep the document repository safe.

---

## Security Settings

**What is this?** The Security Settings screen manages the overall security configuration of the CRM — what security policies are enforced across the system.

**Why do we need it?** Security policies need to be set at the system level to protect all users and data. This central screen defines the security standard for the entire organisation.

**What is inside?**
- Two-factor authentication: enforce for all users, for admins only, or optional
- Session timeout duration (how long before inactivity logs out a user)
- Trusted IP ranges (only allow access from office IPs)
- IP blocking: block specific IP addresses from accessing the system
- Security event alerts: who gets notified for security events
- Data encryption settings (at rest and in transit)
- CSRF and XSS protection toggles

**What to tell sir:** Sir, the Security Settings screen defines the security posture for the entire CRM. If the company wants all admin accounts to require 2FA — and they should — it is enforced here. If the CRM should only be accessible from the office network, the IP range is configured here. Security is not optional — it is set at the system level and applies to everyone.

---

## Password Policy

**What is this?** The Password Policy screen defines the rules all users must follow when creating passwords — minimum length, complexity requirements, and rotation frequency.

**Why do we need it?** Weak passwords are the most common source of security breaches. This screen enforces a strong password standard across all CRM users, automatically.

**What is inside?**
- Minimum password length
- Complexity requirements: uppercase required, number required, special character required
- Password expiry: force password change every X days
- Password history: cannot reuse last X passwords
- Password strength indicator threshold (reject passwords below "Strong")
- First-time login: force password change
- Admin override: reset any user's password

**What to tell sir:** Sir, the Password Policy means every CRM user must have a password that meets minimum security standards. If the policy requires 10 characters with uppercase, number, and special character, the system will not accept anything weaker. Passwords expire every 90 days, forcing regular updates. This single setting dramatically reduces the risk of account compromise.

---

## Multi-Factor Authentication (MFA)

**What is this?** The MFA settings screen manages two-factor and multi-factor authentication configuration — how it is enforced, what methods are allowed, and recovery options.

**Why do we need it?** MFA is one of the most effective security controls available. This screen configures how MFA works across the system — making it easy to enforce for the right users.

**What is inside?**
- MFA enforcement level: All users, Admin users only, Optional for all
- MFA methods: SMS OTP, Email OTP, Authenticator App (TOTP)
- Recovery options: backup codes, email recovery
- Bypass window: allow temporary bypass for X days for new users
- Trusted device duration: how long a device is trusted before requiring MFA again
- MFA status per user (admin view)

**What to tell sir:** Sir, MFA is the most important security setting in the system. Even if a password is stolen, the attacker cannot log in without the second factor — the OTP on the employee's phone. This screen makes MFA easy to enforce. For financial and admin roles, enforcing MFA is non-negotiable. This screen makes that enforcement automatic.

---

## Session Management

**What is this?** The Session Management settings screen controls how user sessions behave — how long they last, how many can be active simultaneously, and what happens when they expire.

**Why do we need it?** Unmanaged sessions are a security risk. Long-lived sessions on unattended computers, multiple simultaneous logins from different locations, and sessions that never expire all increase the attack surface.

**What is inside?**
- Session timeout (inactivity timeout): how many minutes before automatic logout
- Maximum session duration: absolute maximum regardless of activity
- Concurrent session limit: allow 1, 2, or unlimited simultaneous logins
- Remember me duration: how long "remember me" keeps a session active
- Session invalidation on password change
- Admin: view all active sessions across all users and terminate any

**What to tell sir:** Sir, session management ensures the CRM is secure even when users walk away from their computers. Sessions time out after 30 minutes of inactivity. A user cannot be logged in from more than 2 devices simultaneously. If they change their password, all other sessions are invalidated. These simple rules prevent a lot of potential security incidents.

---

## API Settings

**What is this?** The API Settings screen manages the configuration and policies for the CRM's API — rate limits, access controls, and security settings for all programmatic access.

**Why do we need it?** The API is the interface for all external system integrations. Proper configuration ensures the API is secure, performant, and only accessible to authorised consumers.

**What is inside?**
- API version management (current supported versions)
- Default rate limit (requests per minute per API key)
- Custom rate limits per API key
- IP whitelist for API access
- API access log retention period
- Webhook timeout settings
- API deprecation schedule (when old versions will stop working)

**What to tell sir:** Sir, the API Settings ensure that the CRM's programming interface is secure and well-managed. Rate limits prevent any single integration from overwhelming the system. IP whitelisting ensures only trusted servers can call the API. These settings are set once and protect all integrations.

---

## API Keys Management

**What is this?** The API Keys Management screen manages all API credentials — creating new keys, monitoring usage, and revoking compromised keys.

**Why do we need it?** Every external system that accesses the CRM uses an API key. Managing these keys — who they belong to, what they can access, and revoking them when no longer needed — is essential for security.

**What is inside?**
- API key list: name, created by, created date, last used, permissions scope, status
- Create new API key: name, permissions scope, IP restriction, expiry date
- Copy key button (key shown only once on creation)
- Revoke key button (immediately disables the key)
- Usage statistics per key
- Key rotation recommendation (flag keys older than X days)

**What to tell sir:** Sir, API keys are like passwords for external systems. This screen manages all of them. If an integration partner's key is compromised, or if they are no longer working with iFranchise, the key can be revoked in one click and that system immediately loses all access. Regular key rotation is recommended as a security best practice.

---

## Webhooks Settings

**What is this?** The Webhooks Settings screen manages the global configuration for all webhooks — the real-time data connections between the CRM and external systems.

**Why do we need it?** Webhooks need proper security and reliability configuration — authentication, retry logic, and timeout settings — to ensure data is transferred reliably and securely.

**What is inside?**
- Default webhook authentication method (HMAC signature)
- Secret key for webhook validation
- Retry configuration: number of retries, delay between retries
- Timeout per webhook call
- Webhook log retention period
- Test webhook URL configuration
- Webhook health status overview

**What to tell sir:** Sir, webhook settings ensure that data flowing between the CRM and external systems is secure and reliable. The HMAC signature means the receiving system can verify that the data genuinely came from our CRM and was not tampered with in transit. Retry configuration ensures temporary failures do not result in lost data.

---

## Integrations Overview

**What is this?** The Integrations Overview screen shows all available integrations and their current status — which are connected, which are available, and which have errors.

**Why do we need it?** The CRM connects to many external systems. A central overview helps the admin manage all integrations at a glance.

**What is inside?**
- Integration categories: Communication, Calendar, Payment, Storage, Analytics, CRM, ERP, HR
- For each integration: logo, name, description, status (Connected, Available, Error), connect/disconnect button
- Quick health check per connected integration
- Integration logs link
- Marketplace: available integrations that can be enabled

**What to tell sir:** Sir, the Integrations Overview is like a control panel for all the external systems connected to the CRM. Google Calendar integration, Razorpay payment gateway, WhatsApp Business API, Zoom for video meetings — all managed from this one screen. The admin can see at a glance which integrations are working and which need attention.

---

## Google Workspace Integration

**What is this?** The Google Workspace Integration settings screen connects the CRM with Google Workspace — enabling single sign-on with Google, Google Calendar sync, and Google Drive integration.

**Why do we need it?** If the company uses Google Workspace for email and productivity, integrating it with the CRM creates seamless workflows — log in with Google, sync meetings to Google Calendar, access files from Google Drive.

**What is inside?**
- Google OAuth connection setup
- Single Sign-On (SSO) with Google toggle
- Google Calendar sync: two-way sync of meetings
- Google Drive integration: store and access documents
- Gmail thread sync (optional)
- Connected accounts
- Scopes and permissions granted

**What to tell sir:** Sir, if the iFranchise team uses Gmail and Google Calendar, the Google Workspace integration means they do not need to switch between apps. They log in to the CRM with their Google account, meetings appear automatically in Google Calendar, and documents can be stored in Google Drive. Everything works together.

---

## Calendar Integration

**What is this?** The Calendar Integration settings screen manages connections to calendar services — Google Calendar, Microsoft Outlook, and Apple Calendar — for meeting sync.

**Why do we need it?** Meetings created in the CRM should automatically appear in the executive's personal calendar so they are reminded regardless of whether they are in the CRM.

**What is inside?**
- Supported calendar platforms: Google Calendar, Microsoft Outlook, Apple Calendar
- Connection status per platform
- Sync direction: one-way (CRM to calendar) or two-way
- Sync frequency
- Calendar to sync to (if multiple calendars in the account)
- Conflict resolution settings

**What to tell sir:** Sir, calendar integration means the team does not have to manually add CRM meetings to their personal calendars. When Himani schedules a meeting with a lead in the CRM, it automatically appears in her Google Calendar with all the details — time, location, Zoom link. She just needs to check her calendar.

---

## Payment Gateway Settings

**What is this?** The Payment Gateway Settings screen configures the online payment processing integration — allowing the CRM to process and record payments through services like Razorpay, PayU, or CCAvenue.

**Why do we need it?** For online payment collection — franchise fee payments, royalties paid online — the CRM needs to be connected to a payment gateway. This screen manages that connection.

**What is inside?**
- Payment gateway selector: Razorpay, PayU, CCAvenue, Stripe, others
- API key and secret configuration
- Test mode vs Live mode toggle
- Supported payment methods: UPI, card, net banking, wallet
- Currency configuration
- Payment link generation settings
- Webhook URL for payment confirmation
- Refund configuration

**What to tell sir:** Sir, with the payment gateway connected, iFranchise can send a payment link to a franchisee who then pays their franchise fee or royalty online directly. The CRM instantly records the payment confirmation. No waiting for bank transfers to be manually verified and recorded. Faster collections, better cash flow.

---

## Feature Flags

**What is this?** The Feature Flags screen allows the admin to enable or disable specific features of the CRM without deploying code changes — turning features on or off based on the organisation's readiness or needs.

**Why do we need it?** Not all features need to be available to all users all the time. Feature flags allow controlled feature rollouts — enable a new feature for the pilot team first, then roll it out to everyone. Or disable a feature that is not yet ready.

**What is inside?**
- Feature list with toggle switches
- Feature descriptions
- User/role targeting: enable for specific users or roles only
- Gradual rollout: enable for X% of users randomly
- Feature dependencies: some features require others to be enabled first
- Feature history: when each feature was toggled and by whom

**What to tell sir:** Sir, feature flags give the admin control over what features are live at any given time. If the WhatsApp automation feature is ready for the sales team but not yet for the accounts team, it can be enabled for just the sales role. If a new analytics feature needs more testing, it can be turned on only for management until it is ready for wider use.

---

## Custom Fields

**What is this?** The Custom Fields screen allows the admin to add new data fields to any CRM record type — for capturing business-specific information that the standard CRM does not include.

**Why do we need it?** Every business has unique data requirements. iFranchise may need to track fields specific to franchise management — like "investment source" or "preferred operational city" — that standard CRM templates do not include. Custom fields make the system fit the business perfectly.

**What is inside?**
- Select record type (Lead, Customer, Brand, Franchise Model, etc.)
- Custom field list for that record type
- Create new field: name, label, field type (text, number, dropdown, date, checkbox, file), required/optional, default value
- Field ordering (where it appears on the form)
- Visibility settings (which roles see this field)
- API field name (for integrations)
- Delete field (with data impact warning)

**What to tell sir:** Sir, custom fields make the system adapt to your specific business needs rather than forcing the business to adapt to the system. If iFranchise wants to track the "previous business experience" of every lead, or capture "preferred franchise location type" (high-street vs mall vs standalone), a custom field is added here. It appears on all lead forms within minutes.

---

## Numbering Sequences

**What is this?** The Numbering Sequences screen configures the automatic number generation for all records — lead IDs, customer IDs, invoice numbers, agreement numbers, etc.

**Why do we need it?** Consistent, unique numbering is essential for traceability, legal compliance, and professional documentation. Invoice numbers must follow a specific format for GST compliance. Agreement numbers need to be unique and sequential. This screen defines all those formats.

**What is inside?**
- Record type selector (Lead, Customer, Invoice, Agreement, Payment, Meeting, etc.)
- Current format: prefix, year, month, sequence number configuration
- Format example preview
- Current counter value
- Reset sequence (with confirmation and audit log)
- Custom format builder

**What to tell sir:** Sir, the Numbering screen controls how every record in the system gets its ID. Invoice numbers like "INV-2026-001" or agreement numbers like "AGR-MUM-2026-045" — the format is defined here. For GST compliance, invoice numbers must follow a specific sequential format within a financial year. This screen ensures that happens automatically.

---

## Workflow Configuration

**What is this?** The Workflow Configuration settings screen manages global settings for all automation workflows — execution limits, error handling policies, and system-wide workflow behaviour.

**Why do we need it?** Workflows need to be managed at a system level — setting limits on execution to prevent runaway automations, defining retry policies for failures, and configuring logging levels.

**What is inside?**
- Maximum concurrent workflow executions
- Execution timeout per workflow (maximum time before a workflow is forced to stop)
- Retry policy: how many times to retry a failed action before marking as failed
- Error notification: who gets notified for workflow failures
- Workflow log retention period
- Test environment configuration

**What to tell sir:** Sir, workflow configuration sets the guardrails for automation. If a misconfigured workflow loops indefinitely, the system's execution timeout stops it after a set time. If an action fails, the retry policy defines how many times to try again before giving up and alerting the admin. These settings make the automation system robust and self-managing.

---

## Automation Settings

**What is this?** The Automation Settings screen manages the global behaviour of the automation module — global conditions, blackout periods, and automation priority.

**Why do we need it?** Automations need system-level controls separate from individual workflow configurations. Global settings ensure all automations respect business rules like quiet hours and priority levels.

**What is inside?**
- Global automation pause toggle (pause all automations for maintenance)
- Blackout periods (time windows when no automations run)
- Action rate limiting (maximum actions per minute system-wide)
- Priority settings: critical automations always run first
- Global conditions: apply to all workflows (e.g., never run automations for archived leads)

**What to tell sir:** Sir, global automation settings give the admin a master switch and master rules. During system maintenance, all automations can be paused with one click. Rate limiting prevents the system from being overwhelmed by a burst of automation triggers. Global conditions prevent automations from running on records where they should not.

---

## Backup Settings

**What is this?** The Backup Settings screen configures how and when the CRM's data is backed up — ensuring business continuity and data recovery capability.

**Why do we need it?** Data loss is catastrophic for a business. Regular, automated backups are non-negotiable. This screen configures the backup schedule, storage location, and retention policy.

**What is inside?**
- Backup frequency: daily, twice daily, weekly
- Backup time
- Backup storage: local, remote (cloud), or both
- Backup storage location credentials
- Retention policy: keep backups for X days
- Backup scope: full database, incremental
- Last successful backup: date and size
- Restore from backup option (with confirmation)
- Backup integrity check schedule

**What to tell sir:** Sir, backup configuration is the business continuity foundation. The system backs up all data every night and stores it securely in the cloud. If a catastrophic failure occurs — a server crash, ransomware attack, or accidental mass deletion — the system can be restored from the previous night's backup. The backup status screen shows the last successful backup so the admin knows the system is protected.

---

## Database Settings

**What is this?** The Database Settings screen provides technical configuration and monitoring for the CRM's underlying database — connection pool, performance tuning, and maintenance settings.

**Why do we need it?** The database is the engine of the CRM. Proper configuration ensures good performance and stability as data volumes grow.

**What is inside?**
- Database connection details (read-only for reference)
- Connection pool size
- Query timeout configuration
- Slow query threshold (log queries slower than X milliseconds)
- Database maintenance schedule (auto-vacuum, index rebuild)
- Database size and growth chart
- Table statistics

**What to tell sir:** Sir, the Database Settings are for the technical team. They ensure the database engine is configured for optimal performance as the CRM grows. As the volume of leads, customers, and records grows into the hundreds of thousands, proper database configuration keeps response times fast.

---

## Cache Settings

**What is this?** The Cache Settings screen configures the caching system that stores frequently accessed data temporarily to reduce database load and improve page load times.

**Why do we need it?** Caching dramatically improves CRM performance. Data that does not change frequently — like dropdown lists, user permissions, configuration values — is cached so the system does not repeatedly query the database for the same information.

**What is inside?**
- Cache provider (Redis, Memcached)
- Cache TTL (time-to-live) for different data types
- Cache usage statistics (hit rate, size)
- Flush cache button (clear all cached data)
- Cache key patterns

**What to tell sir:** Sir, caching is what keeps the CRM fast. Instead of querying the database every time someone loads a dropdown list of brands, the system serves it from cache in milliseconds. The cache is automatically refreshed when data changes. This invisible feature is why the system feels responsive even with large data volumes.

---

## Queue Settings

**What is this?** The Queue Settings screen manages the background job queue — the system that processes tasks asynchronously, like sending bulk emails or running large report exports.

**Why do we need it?** Long-running tasks should not block the user interface. Queue settings ensure these tasks run efficiently in the background without affecting CRM performance.

**What is inside?**
- Queue workers count (how many parallel background processes)
- Job priority configuration
- Queue health dashboard
- Pending jobs count
- Failed jobs list
- Retry failed jobs button
- Queue pause/resume

**What to tell sir:** Sir, the Queue is what makes the system respond instantly even when big tasks are happening. If the team exports a large analytics report with 50,000 records, that process runs in the background without slowing down the screens everyone else is using. The queue manages all those background tasks efficiently.

---

## Environment Variables

**What is this?** The Environment Variables screen manages system-level configuration variables — technical settings that define how the application behaves in the production environment.

**Why do we need it?** Technical configurations like database URLs, API endpoints, encryption keys, and environment-specific settings need to be managed securely and centrally. This screen provides that management interface.

**What is inside?**
- Variable list: key, value (masked for sensitive values), environment (development, staging, production)
- Add new variable
- Edit variable value
- Sensitive variable flag (masks the value from display)
- Variable usage audit
- Export configuration (admin only, for DevOps reference)

**What to tell sir:** Sir, environment variables are for the technical team — these are the configuration keys that control system behaviour at a deep level. They are kept here so changes do not require a code deployment. Sensitive values like encryption keys are masked. This is a technical administration screen that the operations team manages.

---

## System Logs (Settings)

**What is this?** The System Logs screen within Settings provides access to application-level logs — informational, warning, and error logs generated by the CRM application itself.

**Why do we need it?** When troubleshooting issues or monitoring application health, the technical team needs access to the raw application logs. This screen provides that access with search and filter capabilities.

**What is inside?**
- Log level selector: Info, Warning, Error, Critical
- Log stream with timestamps and component tags
- Search logs by keyword
- Date range filter
- Download logs button
- Log retention configuration

**What to tell sir:** Sir, system logs are the technical diary of the application. Every error, every warning, every notable event is written to the log. When something is not working as expected, the technical team looks here first. It is the starting point for any technical investigation.

---

## Maintenance Mode

**What is this?** The Maintenance Mode screen allows the admin to put the CRM into maintenance mode — displaying a maintenance message to all users while the technical team performs updates or repairs.

**Why do we need it?** System updates and maintenance require controlled downtime. Maintenance mode prevents users from accessing the system during critical operations, preventing data corruption from mid-transaction interruptions.

**What is inside?**
- Maintenance mode toggle (on/off)
- Maintenance message customisation (what users see)
- Scheduled maintenance: set start and end time for automatic maintenance window
- Exempt users: specific admins who can still access the system during maintenance
- Countdown notification: notify all users X hours before maintenance
- Estimated duration display

**What to tell sir:** Sir, when the technical team needs to upgrade the database or deploy a major update, they schedule maintenance mode. 2 hours before, all users get a notification: "System maintenance scheduled from 11 PM to 2 AM tonight." At 11 PM, the system automatically shows a maintenance screen to all users except the admin team. After the update, maintenance mode is turned off and everyone is back in.

---

## License Settings

**What is this?** The License Settings screen manages the CRM's software license — showing the current license tier, features included, user limits, and renewal information.

**Why do we need it?** The license determines what features are available and how many users can access the system. Tracking license status prevents unexpected disruptions when a license expires.

**What is inside?**
- Current license plan name and tier
- Licensed features list
- User count: current vs licensed maximum
- License expiry date and countdown
- Renewal button or contact sales link
- Feature usage vs plan limits
- Upgrade plan options
- License key

**What to tell sir:** Sir, the License Settings screen shows the current subscription tier — how many users are licensed, which features are included, and when the license expires. If the team is approaching the user limit, the admin is alerted here so the plan can be upgraded before new hires cannot get access.

---

## Subscription Settings

**What is this?** The Subscription Settings screen manages the billing and subscription details for the CRM — payment method, billing cycle, and invoices.

**Why do we need it?** The CRM is a subscription-based service and billing needs to be managed correctly to avoid service interruption.

**What is inside?**
- Current plan and pricing
- Billing cycle: monthly or annual
- Payment method: card, bank transfer
- Next billing date and amount
- Invoice history
- Upgrade/downgrade plan option
- Cancel subscription option
- Billing contact details

**What to tell sir:** Sir, the Subscription screen is where the business manages the CRM's own licensing and billing. If iFranchise upgrades from a mid-tier to an enterprise plan to get additional features or users, it is done here. Invoice history is available for the accounts team.

---

## Localization Settings

**What is this?** The Localization Settings screen configures language, region, and format preferences for the entire system.

**Why do we need it?** iFranchise may operate in different linguistic and regulatory contexts. Localization ensures the system displays information correctly for each context.

**What is inside?**
- Default language
- Available languages toggle (enable multiple languages for multilingual teams)
- Date format
- Time format (12-hour vs 24-hour)
- Number format (comma usage, decimal separator)
- First day of week (Monday vs Sunday)
- Country default
- Language override per user

**What to tell sir:** Sir, localization means the system is configured correctly for India — Indian date formats (DD/MM/YYYY), Indian number formats (lakhs and crores with appropriate separators), and Indian time zones. If iFranchise expands to other countries, language and format settings can be configured per user or region.

---

## Currency Settings

**What is this?** The Currency Settings screen configures which currencies the system supports and how they are displayed — important if iFranchise operates across multiple countries or accepts foreign investment.

**Why do we need it?** Financial figures need to be displayed in the correct currency with proper formatting. This screen ensures consistency.

**What is inside?**
- Primary currency (INR for India)
- Currency display format (₹ symbol, INR code, lakh/crore vs million/billion)
- Secondary currencies (if multi-currency support is needed)
- Exchange rate configuration or integration
- Currency display on invoices, reports, and analytics

**What to tell sir:** Sir, the currency settings ensure that all financial figures across the CRM are displayed correctly for India — amounts in rupees with proper formatting in lakhs and crores. If iFranchise ever works with international franchises, additional currencies can be added here.

---

## Timezone Settings

**What is this?** The Timezone Settings screen manages the system's primary time zone and user-level time zone overrides.

**Why do we need it?** Timestamps, meeting times, and scheduled automations depend on the correct time zone. This screen ensures the system operates in the right temporal context.

**What is inside?**
- System default time zone (IST for India-based operations)
- User-level override (for international team members)
- Daylight saving time handling (not applicable for IST, but for international)
- How timestamps are displayed in logs and audit trails

**What to tell sir:** Sir, the Timezone Settings ensure all meeting times, reminders, and timestamps are correct for India. If a meeting is scheduled for 10 AM, everyone in the team sees 10 AM in their local time zone. For a system used purely within India, this is simply set to IST and never needs to change.

---

## Language Settings

**What is this?** The Language Settings screen manages all language and translation configuration for the CRM interface — supporting multiple languages if needed.

**Why do we need it?** If the team includes members more comfortable in regional languages, or if the platform needs to be presented in a specific language, the Language Settings make that possible.

**What is inside?**
- Default interface language
- Available language packs (installed and available for installation)
- Translation completeness percentage per language
- Language selector visibility (whether users can change their own language)
- Custom translation overrides (change specific terms to match company terminology)

**What to tell sir:** Sir, language settings allow the CRM interface to be shown in Hindi or other regional languages if required. Custom translation overrides mean that if iFranchise uses a specific term (like "franchise partner" instead of "customer"), that terminology can be applied system-wide so the interface always uses the company's own vocabulary.

---

## Audit Settings

**What is this?** The Audit Settings screen configures what is tracked in the audit log — which events are logged, how long logs are retained, and who can view them.

**Why do we need it?** Audit logging has a storage cost. This screen lets the admin configure the right balance — logging enough for compliance and security without logging every trivial action.

**What is inside?**
- Log level by category: All Events, Important Events Only, Security Events Only, None
- Retention period: how many months to keep audit logs
- Log storage encryption
- Who can view audit logs (role restrictions)
- Real-time alerting threshold settings
- Compliance mode: ensure certain events are always logged regardless of settings

**What to tell sir:** Sir, audit settings balance thoroughness with storage efficiency. Security events must always be logged regardless of other settings. Financial events must always be logged for compliance. Routine record views can be set to log at a less frequent level. This configuration keeps the audit logs comprehensive without becoming unwieldy.

---

## Data Retention Settings

**What is this?** The Data Retention Settings screen manages how long different types of data are kept in the system before being automatically archived or deleted.

**Why do we need it?** Data protection laws and storage costs require defined retention policies. This screen ensures the system automatically manages data lifecycles without requiring manual cleanup.

**What is inside?**
- Retention period by data type: leads (active, inactive, archived), customers, documents, audit logs, communication logs, notifications
- Archive vs permanent delete option (archive preserves data in read-only form; delete removes it)
- Legal hold: mark certain records to never be auto-deleted regardless of retention policy
- Retention policy review reminders
- GDPR right-to-deletion compliance tools

**What to tell sir:** Sir, data retention policies ensure the system does not grow indefinitely with old, irrelevant data. Archived leads from 5 years ago with no activity are automatically moved to deep archive after 2 years. Audit logs are kept for 7 years for compliance. This policy is set once here and runs automatically — no manual data cleanup required.

---

## GDPR and Privacy Settings

**What is this?** The GDPR and Privacy Settings screen manages data privacy compliance — consent management, right to access, right to deletion, and data processing records.

**Why do we need it?** While GDPR is primarily a European regulation, India's DPDP (Digital Personal Data Protection) Act has similar requirements. Managing consent and data privacy properly protects the business from legal risk.

**What is inside?**
- Privacy policy URL
- Cookie consent configuration
- Data processing records (what data is collected, why, from whom, how long)
- Right to Access: generate a report of all data held about a specific person
- Right to Deletion: process a deletion request for a specific person's data
- Data export for subjects (send a person all data held about them)
- Consent log: when each contact gave consent for communication

**What to tell sir:** Sir, the GDPR and Privacy Settings ensure the business handles personal data responsibly. If a prospect asks "what data do you have about me?", the team can generate a complete report from here in minutes. If they ask to be deleted from the system, the deletion workflow is managed here with a full audit trail. As data protection laws in India tighten, this capability becomes increasingly important.

---

## Terms and Policies

**What is this?** The Terms and Policies screen manages the terms of service, privacy policy, and usage policies that users agree to when using the CRM.

**Why do we need it?** Users of the CRM — especially franchise partners with access — must agree to usage terms. This screen stores and manages those agreements.

**What is inside?**
- Terms of Service document (upload or editor)
- Privacy Policy document
- Data Processing Agreement (for franchise partners)
- Version history of each policy
- User acceptance tracking: which users have agreed to current terms
- Force re-acceptance toggle (when terms are updated, prompt all users to accept)

**What to tell sir:** Sir, the Terms and Policies screen stores the legal agreements that govern CRM usage. When a brand partner is given portal access, they must agree to the data processing terms. This acceptance is recorded here with a timestamp — legally documented consent.

---

## About

**What is this?** The About screen shows technical information about the current CRM installation — version number, build date, license information, and technical specifications.

**Why do we need it?** When contacting support, troubleshooting issues, or verifying that the latest version is installed, the About screen provides all the technical reference information needed.

**What is inside?**
- CRM product name and version
- Build date
- Server information
- Database version
- License holder details
- Support contact information
- Release notes link (what is new in the current version)
- Check for updates button (if auto-update is enabled)

**What to tell sir:** Sir, the About screen is the technical identity card of the system. When the support team needs to know which version of the CRM is running to help with a technical issue, this is where they look. It also shows when the last update was applied and what new features were included.

---

# MODULE 18 — MASTER DATA

Master Data is the reference data that the entire CRM depends on — the standard values and templates that populate dropdowns and forms across all modules. There are 20 items.

---

## Master Data Dashboard

**What is this?** The Master Data Dashboard is the management overview for all reference data in the system — showing how many items exist in each category and flagging any that need attention.

**Why do we need it?** Reference data needs to be kept accurate and current. Outdated lead sources, inactive franchise fee categories, or obsolete document templates cause confusion. This dashboard monitors the health of all master data.

**What is inside?**
- Count of items in each master data category
- Recently updated categories
- Categories with no active items (flag for review)
- Pending review items
- Quick access to each category

**What to tell sir:** Sir, this dashboard tells the admin whether the reference data is in order. If the "Lead Sources" category has 25 items but only 10 are active, there are 15 inactive sources cluttering the dropdowns the sales team sees. This dashboard makes that visible so cleanup can happen.

---

## Brands (Master Data)

**What is this?** The Brands master data list is the reference list of all brands available as options in lead forms, franchise model creation, and reporting filters.

**Why do we need it?** Brands listed here appear in dropdown menus throughout the CRM. Keeping this list accurate ensures forms show the right options.

**What is inside?**
- List of all brands with active/inactive status
- Add, edit, activate, deactivate brands
- Sync with the Brand module

**What to tell sir:** Sir, when the sales executive creates a new lead and selects "Brand of Interest" from a dropdown, the options come from this list. Keeping it accurate means the team always sees current, active brands.

---

## Franchise Models (Master Data)

**What is this?** The Franchise Models master list is the reference list of all active franchise models for dropdown use across the CRM.

**What is inside?** Model name, brand association, status (active/inactive), investment range.

**What to tell sir:** Sir, this list populates the franchise model dropdowns in lead forms, customer records, and reporting. When a new model is published in the Franchise Models module, it automatically appears here as an active option.

---

## Success Fees

**What is this?** The Success Fees master data defines the fee structure that iFranchise earns when a franchise is successfully sold — the rates, calculation methods, and applicable categories.

**What is inside?** Fee name, calculation method (flat amount or percentage), applicable brand, applicable model, amount/percentage, effective date.

**What to tell sir:** Sir, success fees are what iFranchise earns when a deal closes. This master data defines what those rates are for each brand and model. When a lead converts to a customer, the system automatically calculates the success fee based on this data and generates an internal record.

---

## Franchise Fees

**What is this?** The Franchise Fees master data table defines the standard franchise fee amounts for each model — the one-time upfront fee paid by the franchisee to the brand.

**What is inside?** Fee name, associated franchise model, amount, currency, GST applicability.

**What to tell sir:** Sir, franchise fees for each model are stored here and used when generating invoices and in the investment calculator. If a brand changes their franchise fee, it is updated here and immediately reflected everywhere that fee appears.

---

## Royalty Percentages

**What is this?** The Royalty Percentages master data stores the royalty rates defined for each franchise model — the ongoing percentage the franchisee pays to the brand.

**What is inside?** Model name, royalty type (percentage of revenue or fixed), rate, calculation basis, effective date.

**What to tell sir:** Sir, royalty rates are defined here for each model. When the accounts team generates monthly royalty invoices, the system pulls the rate from here. Any rate change is updated here with an effective date, maintaining historical accuracy.

---

## Marketing Fees

**What is this?** The Marketing Fees master data defines the marketing fund contributions required from franchisees — typically a percentage of revenue paid towards collective marketing.

**What is inside?** Fee name, associated model, rate, payment frequency, marketing fund association.

**What to tell sir:** Sir, many franchise models require franchisees to contribute to a central marketing fund. This master data defines those contribution rates. They appear in investment presentations and are automatically included in monthly invoicing.

---

## Lead Sources

**What is this?** The Lead Sources master list defines all the channels through which leads can enter the CRM — Facebook, Google, Referral, Exhibition, Walk-in, etc.

**What is inside?** Source name, source category, active/inactive, tracking code (for digital sources).

**What to tell sir:** Sir, when an executive creates a new lead, they select the source from this list. This is the data that powers the Lead Source Analytics charts. Keeping this list accurate and standardised ensures the analytics are meaningful and comparable over time.

---

## Campaign Sources

**What is this?** The Campaign Sources master data tracks specific marketing campaigns as lead sources — allowing lead attribution to specific campaigns rather than just broad channels.

**What is inside?** Campaign name, channel, start and end date, brand associated, status.

**What to tell sir:** Sir, while Lead Sources track channels (Facebook, Google), Campaign Sources track specific campaigns (like "January Brand X Facebook Campaign"). When a lead is tagged to a specific campaign, the marketing team can measure exactly which campaign generated that lead.

---

## States

**What is this?** The States master list contains all Indian states and union territories — used in address fields, geographic filtering, and territory management.

**What is inside?** State name, state code, active/inactive, region grouping (North, South, East, West).

**What to tell sir:** Sir, the States list is the reference for all address and territory fields across the system. It ensures standardised state data — no one can type "Maha" instead of "Maharashtra." This standardisation is essential for geographic analytics to work correctly.

---

## Cities

**What is this?** The Cities master list contains the cities within each state — used for lead addresses, franchise territory management, and geographic analytics.

**What is inside?** City name, associated state, tier classification (Tier 1/2/3), active/inactive.

**What to tell sir:** Sir, having cities as master data prevents the wild variation in how city names get entered — "Mumbai" vs "Bombay," "Bangalore" vs "Bengaluru." Standardised city data means geographic analytics are accurate. The tier classification helps in territory pricing and expansion strategy.

---

## Industries

**What is this?** The Industries master list categorises franchise brands by industry sector — Food and Beverage, Education, Healthcare, Retail, Services, etc.

**What is inside?** Industry name, active/inactive, sub-categories.

**What to tell sir:** Sir, industry categorisation helps the sales team match leads to brands. If a prospect says they are interested in the education sector, the system can filter and show all education franchise brands. Standardised industry data makes this filtering reliable.

---

## Business Categories

**What is this?** The Business Categories master data provides more granular sub-categorisation within industries — like Fast Food, Fine Dining, Cloud Kitchen within the Food and Beverage industry.

**What is inside?** Category name, parent industry, active/inactive.

**What to tell sir:** Sir, business categories allow finer segmentation. A lead interested in "cloud kitchen" models is shown different brands than one interested in "fine dining." This precision in matching improves lead quality and conversion rates.

---

## Meeting Types

**What is this?** The Meeting Types master list defines the types of meetings that can be scheduled — Initial Discovery, Follow-up, Proposal Presentation, Agreement Discussion, Site Visit, Training, etc.

**What is inside?** Meeting type name, description, default duration, active/inactive.

**What to tell sir:** Sir, standardised meeting types help in analytics and reporting. If we know that "Proposal Presentation" meetings convert at 40% while "Initial Discovery" meetings convert at 10%, the team knows to prioritise getting to proposal stage. This data is only meaningful if meeting types are consistently applied — this master list ensures that.

---

## Approval Types

**What is this?** The Approval Types master data defines all the categories of approvals in the system — Financial Discount, Territory Change, Agreement Modification, Refund, etc.

**What is inside?** Approval type name, associated workflow, SLA, required approvers.

**What to tell sir:** Sir, approval types standardise the approval process. Each type has its own workflow, SLA, and approval authority. When a request is created, selecting the type automatically routes it through the correct process.

---

## Payment Types

**What is this?** The Payment Types master data defines all the categories of payments in the system — Franchise Fee, Royalty, Marketing Fee, Success Fee, Refund, Deposit, etc.

**What is inside?** Payment type name, GL code (for accounting), GST applicability, active/inactive.

**What to tell sir:** Sir, payment types ensure all financial transactions are properly categorised. Each type can have its own GST treatment and accounting code. This standardisation makes financial reporting and GST filing accurate and consistent.

---

## Notification Templates

**What is this?** The Notification Templates master data stores reusable notification message templates for all channels and use cases.

**What is inside?** Template name, channel, message content with variable placeholders, status.

**What to tell sir:** Sir, notification templates are the approved messages for all automated communications. Every WhatsApp reminder, every SMS alert, every email notification is based on a template stored here. Templates ensure consistency, professionalism, and brand alignment in all communications.

---

## Email Templates

**What is this?** The Email Templates master data stores the complete HTML and text email templates used for all automated and semi-automated email communications.

**What is inside?** Template name, subject line, HTML body, plain text body, variables list, category, status.

**What to tell sir:** Sir, professional email templates stored here ensure that every invoice email, every welcome email, every renewal reminder looks polished and branded. The marketing or communications team maintains these templates, and the system uses the latest approved version for all automated emails.

---

## WhatsApp Templates

**What is this?** The WhatsApp Templates master data stores all Meta-approved WhatsApp message templates — the pre-approved messages that can be sent via the WhatsApp Business API.

**What is inside?** Template name, WhatsApp template ID, message content, variable count, approval status, category.

**What to tell sir:** Sir, WhatsApp templates are unique because they must be pre-approved by Meta before they can be sent in bulk. This master data tracks all approved templates with their Meta approval status. Only approved templates can be used in automated WhatsApp sends — this ensures compliance with WhatsApp's business policies.

---

## Document Templates

**What is this?** The Document Templates master data stores template files for all commonly generated documents — franchise agreements, proposals, welcome letters, payment receipts, and offer letters.

**What is inside?** Template name, document type, template file, variables list, version, last updated.

**What to tell sir:** Sir, document templates are the pre-designed, legally vetted formats for all official documents the CRM generates. When the system auto-generates a franchise agreement, it uses the template stored here. Legal has reviewed and approved these templates, so every generated document is compliant and professional. New versions can be uploaded here and all future documents use the latest version.

---

# MODULE 19 — CALL INTELLIGENCE

Call Intelligence tracks and analyses phone call activity across the sales team. There are 15 screens.

---

## Call Intelligence Dashboard

**What is this?** The Call Intelligence Dashboard is the overview of all phone call activity — call volumes, connection rates, performance by executive, and today's live call status.

**Why do we need it?** Calling is a primary sales activity. This dashboard shows managers how the team is performing on calls in real time — who is calling, who is connecting, and whether call activity is trending in the right direction.

**What is inside?**
- Total calls made today
- Connection rate today
- Average call duration today
- Calls by outcome (connected, no answer, busy, voicemail)
- Top callers today (most calls made)
- Calls currently active (live count)
- Team call target vs actuals for today
- Call trend chart (this week vs last week)

**What to tell sir:** Sir, this is the Call Intelligence Dashboard. If the team is supposed to make 200 calls today and it is 2 PM with only 80 calls made, the manager can see that immediately and push the team to accelerate. If the connection rate has dropped to 30% compared to the usual 50%, something has changed — maybe a calling time issue or a data quality problem that needs investigation.

---

## Live Calls

**What is this?** The Live Calls screen shows all phone calls currently in progress — who is calling whom, how long the call has been going, and whether the call is connected.

**Why do we need it?** Real-time visibility into active calls helps managers understand team activity at any given moment and enables them to check in if a call is running unusually long.

**What is inside?**
- Active calls count
- Per call: executive name, lead name, call duration, call status (Ringing, Connected, On Hold)
- Call duration indicators: normal (green), long (amber), very long (red)
- Quick view link to the lead's profile

**What to tell sir:** Sir, this screen shows who on the team is on a call right now. If Himani has been on a call for 45 minutes, the manager can check if that is a promising conversation or if something needs intervention. Real-time call visibility keeps the manager connected to the team's activity without being intrusive.

---

## Call History

**What is this?** The Call History screen shows a complete log of all calls made through the system — past calls with their outcomes, durations, and recorded notes.

**Why do we need it?** The historical call record is essential for performance analysis, lead follow-up context, and dispute resolution. It is the definitive record of all telephonic communication.

**What is inside?**
- Complete call log: date, time, caller, lead/customer, duration, outcome, recording link (if available)
- Filter by date range, executive, outcome, lead
- Click to view linked lead profile
- Export call history

**What to tell sir:** Sir, the Call History shows every call ever made from the system. If the manager wants to know how many calls Himani made to leads last Tuesday, this is where the answer is — with details of each call.

---

## Incoming Calls

**What is this?** The Incoming Calls screen shows all calls received by the team from leads and customers — tracking inbound call volume and ensuring they are properly handled and logged.

**Why do we need it?** Inbound calls from interested prospects are high-value leads. Tracking them ensures no call goes unnoticed and the prospect receives proper follow-up.

**What is inside?**
- Incoming call log: date, time, caller number, received by, duration, outcome, linked lead
- Missed call indicator
- Follow-up status for each incoming call
- First-time caller vs returning caller indicator

**What to tell sir:** Sir, the Incoming Calls screen tracks all calls coming in from the outside. When a prospect calls after seeing an ad, that call is captured here. If it goes to voicemail or is missed, the system creates a follow-up task automatically.

---

## Outgoing Calls

**What is this?** The Outgoing Calls screen shows all outbound calls made by the sales team — tracking calling activity per executive.

**Why do we need it?** Outbound calling is the primary lead engagement activity. Tracking it ensures targets are being met and call quality is maintained.

**What is inside?**
- Outbound call log: date, time, caller (executive), called (lead/customer), duration, outcome
- Filter by executive or date range
- Call outcome breakdown for outbound calls

**What to tell sir:** Sir, this screen tracks all the calls the team makes. The manager can see that Rahul made 35 calls today, Himani made 28, and Priya made only 12. This transparency drives accountability and enables targeted coaching.

---

## Connected Calls

**What is this?** The Connected Calls screen filters the call history to show only calls where the prospect actually answered and a conversation took place.

**Why do we need it?** Not all calls connect. The connected calls view shows genuine interactions — the conversations that actually happened — which is more meaningful for conversion analysis than total call volume.

**What is inside?**
- All connected calls: executive, lead, date, duration, notes
- Average call duration for connected calls
- Connected calls per executive this week
- Connected-to-meeting conversion rate

**What to tell sir:** Sir, connected calls are the ones that really count — when a conversation actually happened. This screen isolates those calls. If Himani made 40 calls but only 10 connected, versus Rahul who made 25 calls and 18 connected, Rahul's calling is more effective even though Himani made more attempts.

---

## Missed Calls

**What is this?** The Missed Calls screen shows all calls that went unanswered — both inbound calls the team missed and outbound calls where the prospect did not pick up.

**Why do we need it?** Missed calls are missed opportunities. This screen ensures that all missed inbound calls are followed up and that outbound call attempts are properly tracked.

**What is inside?**
- Missed call log: date, time, direction (inbound/outbound), lead name, number
- Follow-up status: was the missed call followed up?
- Callback scheduled indicator
- Unresolved missed calls highlighted

**What to tell sir:** Sir, a missed incoming call from a hot lead who found us on Google is a significant missed opportunity. This screen makes sure no inbound missed call goes without a callback. Unresolved missed calls are highlighted in red — the team knows they need to call back as soon as possible.

---

## Call Recordings

**What is this?** The Call Recordings screen manages recorded calls — storing, organising, and making accessible the audio recordings of sales calls for training and compliance purposes.

**Why do we need it?** Call recordings are powerful for sales training, quality assurance, and dispute resolution. This screen makes them accessible and organised.

**What is inside?**
- Recording list: date, executive, lead, duration, recording file
- Play recording (in-browser audio player)
- Download recording
- Transcription (if auto-transcription is enabled)
- Share recording for training
- Recording storage settings

**What to tell sir:** Sir, call recordings are a training goldmine. The sales manager can listen to how Himani handled an objection on a call and use it as a coaching example. If a franchise deal ever leads to a dispute about "what was promised on the call," the recording is the definitive record. Recordings are stored securely and only accessible to authorised users.

---

## Call Analytics

**What is this?** The Call Analytics screen provides comprehensive performance analysis of all call activity — volumes, connection rates, durations, and outcomes across the team.

**Why do we need it?** Data-driven improvement of calling strategy requires this analytics view. Which times of day have the best connection rates? Who has the best conversation-to-meeting conversion? This screen answers those questions.

**What is inside?**
- Total call volume trend (month-on-month)
- Connection rate by time of day
- Connection rate by executive
- Average call duration by executive
- Call outcome distribution (connected, voicemail, busy, no answer)
- Best calling hours heat map
- Executive call performance comparison table

**What to tell sir:** Sir, the Call Analytics screen shows that connection rates are highest between 11 AM and 1 PM, and lowest on Monday mornings. The team should schedule calling campaigns during high-connection windows. If Rahul averages 8-minute connected calls and Himani averages 3 minutes, the training conversation is about call quality, not volume.

---

## Call Performance

**What is this?** The Call Performance screen shows each executive's calling performance metrics in a leaderboard and comparative format.

**Why do we need it?** Benchmarking call performance across the team enables fair recognition of top performers and targeted coaching for those who need improvement.

**What is inside?**
- Executive leaderboard: ranked by calls made, connection rate, or conversion rate
- Individual performance cards: calls made, connected, meeting conversion rate, average duration
- Target attainment per executive
- Performance trend per executive (improving or declining)

**What to tell sir:** Sir, the Call Performance leaderboard makes it visible who is winning at calling. The executive at the top of the leaderboard becomes a reference point for the rest of the team. The manager can see who needs coaching on connection rates, who needs help converting connected calls to meetings, and who is consistently high-performing.

---

## Employee Call Activity

**What is this?** The Employee Call Activity screen shows the detailed daily call activity for each individual team member.

**Why do we need it?** Managers need to see individual daily activity to ensure targets are being met and to identify patterns in calling behaviour.

**What is inside?**
- Employee selector
- Daily call log with each call's details
- Day-by-day activity summary (calls per day over the last 30 days)
- Peak activity hours for this employee
- Comparison to team average

**What to tell sir:** Sir, this screen gives the manager a day-by-day picture of one employee's call activity. If Priya has been making 5 calls a day for the last two weeks while the team average is 25, this screen makes that visible with evidence. The manager can then have an informed conversation with Priya about her activity levels.

---

## Call Timeline

**What is this?** The Call Timeline shows all calls for a specific lead or customer in chronological order — the complete telephonic history of one relationship.

**Why do we need it?** Before calling a lead for the 8th time, the executive should know what was discussed in the previous 7 calls. The Call Timeline provides that context.

**What is inside?**
- All calls with this lead/customer, newest first
- Each call: date, who called, duration, connection status, outcome, notes
- Linked to the lead's or customer's profile
- Next call scheduled indicator

**What to tell sir:** Sir, the Call Timeline for a lead is the complete telephonic story. If the prospect has been called 7 times and the last 3 calls went to voicemail, the executive knows a different approach is needed. Having this visible prevents the team from making the same unsuccessful approach repeatedly.

---

## Daily Call Report

**What is this?** The Daily Call Report screen generates a summary report of all calling activity for a specific day — team-wide or per executive.

**Why do we need it?** Daily reporting keeps the team accountable and enables managers to stay informed without manually reviewing individual screens.

**What is inside?**
- Date selector
- Team summary: total calls, connected calls, meetings booked, call-to-meeting rate
- Individual executive summary table
- Call outcome breakdown
- Leads called for the first time today
- Export as PDF or Excel

**What to tell sir:** Sir, the Daily Call Report is the sales manager's end-of-day summary. At 5 PM, they open this screen, select today's date, and see how the team performed. Total calls, how many connected, how many meetings were booked. They can export it and include it in their daily report to management.

---

## Weekly Call Report

**What is this?** The Weekly Call Report provides a week-level aggregated view of call performance — comparing this week to last week and to targets.

**Why do we need it?** Week-over-week comparison reveals trends and patterns that daily data can obscure.

**What is inside?**
- Week selector
- Week-over-week comparison
- Performance by executive (this week vs last week)
- Best and worst performing days of the week
- Weekly target attainment
- Meeting bookings from calls this week

**What to tell sir:** Sir, the Weekly Report gives the bigger picture. If this week's calling is down 20% from last week, the manager needs to know why — was it a holiday, a morale issue, or a data quality problem? The weekly view surfaces these trends.

---

## Monthly Call Report

**What is this?** The Monthly Call Report provides a comprehensive month-level analysis of all calling activity — the definitive monthly performance summary.

**Why do we need it?** Monthly reports are used for performance reviews, target setting, and management presentations. This screen generates them automatically.

**What is inside?**
- Month selector
- Month-over-month comparison
- Individual executive monthly scorecards
- Calls to meetings to conversions funnel for the month
- Top performer of the month
- Monthly target attainment percentage
- Export as PDF for presentations

**What to tell sir:** Sir, the Monthly Call Report is what goes into the sales performance review. It shows the complete month — how many calls the team made, how many connected, how many became meetings, and how many converted. Each executive's performance is shown individually. This is the data for monthly awards, performance improvement plans, and target-setting conversations.

---

# MODULE 20 — MARKETING INTELLIGENCE

Marketing Intelligence tracks how marketing spend drives lead generation and sales. There are 9 screens.

---

## Marketing Intelligence Dashboard

**What is this?** The Marketing Intelligence Dashboard is the overview of all marketing performance — spend, lead generation, and ROI across all channels and campaigns.

**Why do we need it?** Marketing decisions need to be driven by data. This dashboard shows the marketing team and management whether the marketing investment is generating returns.

**What is inside?**
- Total marketing spend this month
- Total leads generated from marketing this month
- Cost per lead overall
- Top performing channel
- Top performing campaign
- ROI this month (revenue attributed to marketing / spend)
- Lead quality score from marketing
- Spend vs leads chart (last 6 months)
- Quick actions: View Spend, View Campaigns, View ROI

**What to tell sir:** Sir, the Marketing Intelligence Dashboard shows the return on the marketing investment in one screen. If 3 lakhs was spent this month and it generated 150 leads of which 12 converted to franchise agreements at an average of 15 lakhs each, the math strongly justifies the marketing spend. This screen makes that calculation transparent.

---

## Marketing Spend

**What is this?** The Marketing Spend screen tracks all marketing expenditure — by channel, campaign, brand, and time period.

**Why do we need it?** Understanding where the marketing budget goes and how it performs is essential for allocation decisions. This screen is the marketing budget ledger.

**What is inside?**
- Total spend this period
- Spend by channel (Facebook, Google, Events, Print, Digital, etc.)
- Spend by brand
- Spend by campaign
- Budget vs actuals (how much was planned vs how much was spent)
- Spend trend (month-on-month)
- ROI by channel and campaign

**What to tell sir:** Sir, the Marketing Spend screen tells management exactly where the marketing budget went. If 70% of the budget is going to Facebook but Facebook generates only 30% of conversions, the allocation needs to be reconsidered. This screen makes that imbalance visible.

---

## Lead Sources (Marketing)

**What is this?** The Lead Sources screen within Marketing Intelligence specifically analyses the marketing-driven lead sources in depth — beyond what the standard Lead Source Analytics shows.

**Why do we need it?** Marketing-attributed leads need deeper analysis from a marketing perspective — which digital platform, which ad creative, which campaign generated the lead.

**What is inside?**
- Marketing channel breakdown
- UTM parameter tracking (for digital campaigns)
- Source quality: conversion rate per source
- Volume and quality comparison across sources
- Source trend over time
- Cost per lead per source

**What to tell sir:** Sir, this screen is for the digital marketing team. They can see not just "Facebook" but specifically "Facebook — Retargeting Campaign — Brand A creative" as the source. This level of detail tells them which specific ad and audience generated the best leads.

---

## Campaigns

**What is this?** The Campaigns screen manages and tracks all marketing campaigns — active, past, and planned — from a marketing performance perspective.

**Why do we need it?** Each campaign is a discrete marketing investment. This screen tracks their performance comprehensively.

**What is inside?**
- All campaigns with status: Active, Completed, Planned, Paused
- Campaign details: name, channel, brand, start/end date, budget, spend, leads, conversions
- Campaign performance ranking
- Create new campaign record button
- Campaign comparison

**What to tell sir:** Sir, the Campaigns screen is the marketing team's campaign portfolio. All past campaigns show how they performed. Active campaigns show their progress. Planned campaigns help with budget forecasting. The team can see immediately which campaigns have historically performed best and replicate their approach.

---

## Conversion Funnel (Marketing)

**What is this?** The Marketing Conversion Funnel shows how marketing-generated leads progress through the sales funnel — from initial inquiry to final conversion.

**Why do we need it?** Marketing is responsible for the top of the funnel. This screen shows the marketing team how their leads perform as they move through the sales process — high lead volume with low conversion might indicate lead quality issues from the marketing side.

**What is inside?**
- Marketing-sourced leads funnel: Leads generated → Qualified → Meeting scheduled → Proposal sent → Converted
- Funnel stages by channel and campaign
- Stage conversion rates
- Comparison to non-marketing leads
- Funnel trends over time

**What to tell sir:** Sir, the Marketing Funnel helps the marketing team understand their contribution to sales outcomes, not just lead volume. If social media generates 200 leads but only 5 convert, while Google generates 50 leads and 8 convert, the marketing team needs to look at lead quality from social media — are the targeting parameters attracting the right audience?

---

## Lost Leads Analysis

**What is this?** The Lost Leads Analysis screen focuses specifically on leads that were generated by marketing but did not convert — understanding why they were lost and at which stage.

**Why do we need it?** Lost leads represent a cost with no return. Understanding why they were lost — was it price, timing, competition, wrong target audience — helps improve both marketing targeting and sales approach.

**What is inside?**
- Total lost leads this period (marketing-sourced)
- Loss reasons breakdown (Not Interested, Budget Issue, Chose Competitor, Timing, etc.)
- Loss stage: at which funnel stage they dropped off
- Source-wise loss rates
- Loss trend over time
- Recommendations: patterns suggesting targeting or messaging improvements

**What to tell sir:** Sir, if 60% of Facebook leads are lost at the "Interested" stage with reason "budget issue," that tells the marketing team that the Facebook ad is attracting people who are interested conceptually but not financially ready for the investment level. The ad targeting or messaging needs to filter for investment-ready prospects.

---

## Lead Quality

**What is this?** The Lead Quality screen scores and analyses the quality of leads generated by different marketing channels — not just volume but how well-qualified they are.

**Why do we need it?** Not all leads are equal. A lead that converts 40% of the time is 10 times more valuable than one that converts at 4%, even if they cost the same to generate. This screen measures lead quality.

**What is inside?**
- Lead quality score calculation methodology
- Quality score by channel, campaign, and creative
- Quality score over time (is the marketing attracting better or worse leads?)
- Quality vs volume tradeoff analysis
- High-quality lead profile: what characteristics define a high-quality lead?

**What to tell sir:** Sir, lead quality is the metric that separates good marketing from wasteful marketing. This screen shows that referral leads score 85 out of 100 on the quality scale while some paid channels score 40. That knowledge helps the marketing team not just generate volume but generate quality, and justifies investments in referral programs.

---

## Marketing ROI

**What is this?** The Marketing ROI screen provides the definitive return-on-investment calculation for all marketing activities — the ratio of revenue generated to money spent.

**Why do we need it?** Marketing budgets must justify themselves with business outcomes. This screen provides the board-level financial case for marketing investment.

**What is inside?**
- ROI by channel (revenue attributable / spend)
- ROI by campaign
- ROI by brand
- ROI over time (trending up or down)
- Break-even analysis (how many conversions needed to cover spend)
- Marginal ROI: what additional return each additional rupee of spend generates

**What to tell sir:** Sir, the Marketing ROI screen provides the CFO-level view of marketing performance. If every rupee spent on Google Ads generates 8 rupees in franchise fees, that is an ROI of 800% — an outstanding return that justifies increased investment. If trade exhibition spend generates a 50% ROI, it is profitable but less efficient than digital. This data drives budget allocation decisions.

---

## Marketing Integrations

**What is this?** The Marketing Integrations screen manages the connections between the CRM and external marketing platforms — Facebook Lead Ads, Google Ads, email marketing tools, and landing page builders.

**Why do we need it?** Marketing leads from external platforms need to flow automatically into the CRM without manual entry. Integration removes the delay and data entry errors from lead handling.

**What is inside?**
- Connected marketing platforms: Facebook Lead Ads, Google Ads, Mailchimp, HubSpot, Indiamart, etc.
- Connection status per platform
- Last sync time and leads received
- Field mapping configuration: how fields from each platform map to CRM fields
- Test integration button
- Webhook setup instructions for each platform

**What to tell sir:** Sir, marketing integrations mean leads from Facebook ads, Google ads, or property portals automatically appear in the CRM within seconds of the prospect submitting a form. No waiting for someone to check the ad manager and manually copy leads into a spreadsheet. The integration handles it instantly, ensuring every lead gets an immediate automated response.

---

# MODULE 21 — TEMPLATES

The Templates module manages all document and communication templates that are generated for leads and customers. There are 8 screens.

---

## Templates Dashboard

**What is this?** The Templates Dashboard is the overview of all templates in the system — agreements, proposals, emails, and other documents — showing their usage and status.

**Why do we need it?** Templates are used throughout the CRM. The dashboard shows the admin which templates are active, which are being used most, and which need updating.

**What is inside?**
- Total templates by type
- Most used templates this month
- Templates not updated in over 6 months (may need review)
- Recent template updates
- Pending template approvals
- Quick actions: Create Template, View All

**What to tell sir:** Sir, this overview shows the health of the templates library. If the franchise agreement template has not been updated in 18 months but the franchise fee changed 6 months ago, that is a problem this dashboard will flag.

---

## Agreement Template

**What is this?** The Agreement Template screen manages the master template for franchise agreements — the legal document that is auto-generated when a lead converts to a customer.

**Why do we need it?** Every franchise agreement must be consistent, legally vetted, and reflect current terms. The template ensures this consistency and enables rapid, professional agreement generation.

**What is inside?**
- Template document editor
- Variable placeholders: {{customer_name}}, {{brand_name}}, {{territory}}, {{franchise_fee}}, etc.
- Version history
- Legal approval status
- Preview with sample data
- Clause library: standard clauses that can be inserted
- Amendment rider templates
- Export as PDF preview

**What to tell sir:** Sir, the Agreement Template is the legal backbone of every franchise deal. When a lead converts, the system fills in this template with the specific customer's details — name, brand, territory, fees, dates — and generates a professional, complete agreement document in seconds. Legal has reviewed and approved the template, so every generated agreement is compliant.

---

## Proposal Template

**What is this?** The Proposal Template screen manages the franchise opportunity proposal template — the document sent to serious prospects before agreement stage.

**Why do we need it?** A well-designed proposal is often the document that seals the deal. The template ensures every proposal is professional, complete, and properly branded.

**What is inside?**
- Proposal template editor
- Sections: Executive Summary, Brand Overview, Investment Summary, ROI Projections, Support Structure, Next Steps
- Variable placeholders for personalisation
- Brand-specific customisation sections
- Version history
- Preview with sample data

**What to tell sir:** Sir, when an executive is ready to make a formal proposal to a serious prospect, they generate a proposal from this template. The system automatically fills in the prospect's name, the specific brand details, the investment figures, and the ROI projection based on the franchise model they are interested in. A professional, personalised, complete proposal — generated in 2 minutes.

---

## Welcome Letter Template

**What is this?** The Welcome Letter Template screen manages the official welcome communication sent to a lead or customer upon conversion — welcoming them to the iFranchise family.

**Why do we need it?** The moment of conversion is emotionally significant for a franchisee investor. A warm, professional welcome communication confirms their decision and sets the tone for the relationship.

**What is inside?**
- Welcome letter document template
- Variable placeholders for personalisation
- Brand-specific welcome content sections
- Signature block configuration
- PDF and email format versions
- Preview with sample data

**What to tell sir:** Sir, the Welcome Letter is the first official communication a new franchisee receives after signing up. It sets the emotional tone — "Welcome to the Brand X family, we are excited to have you as our partner in Pune." This template ensures that welcome is warm, professional, and includes all the important next steps the franchisee needs to know.

---

## Email Template Management

**What is this?** The Email Template Management screen is the central library for managing all email templates used across the CRM — for manual emails, automated notifications, and marketing communications.

**Why do we need it?** All emails should be on-brand, professionally written, and approved. This screen is the authoritative library where all email templates are managed and versioned.

**What is inside?**
- Email template list by category
- Rich HTML editor for creating and editing templates
- Variable insertion tool
- Preview in desktop and mobile views
- Version control
- Usage tracking: which automations and manual sends use each template
- A/B test versions
- Approval workflow for new templates

**What to tell sir:** Sir, this screen is where all email templates live and are managed. The communications team owns these templates, ensuring every automated email — payment reminders, meeting confirmations, welcome messages — reflects the brand voice and current business information. When the CEO's name changes (a new CEO joins), updating the email signature template here updates it in all future emails automatically.

---

## WhatsApp Template Management

**What is this?** The WhatsApp Template Management screen manages all WhatsApp Business API templates — creating, submitting to Meta for approval, and activating templates for use.

**Why do we need it?** WhatsApp templates require formal approval from Meta before they can be sent in bulk. This screen manages the entire lifecycle of WhatsApp templates — from creation to Meta approval to activation in the system.

**What is inside?**
- Template list with Meta approval status
- Create new template: category (Utility, Marketing, Authentication), language, message content with variable slots
- Submit to Meta button (sends the template for Meta review)
- Approval status tracker: Submitted, Approved, Rejected, Needs Revision
- Template preview on mobile view
- Rejection feedback from Meta (with guidelines for revision)
- Active templates available for use in automations

**What to tell sir:** Sir, WhatsApp templates have a unique process because Meta (the company behind WhatsApp) must approve every template before it can be used for bulk sending. This screen manages that process. When the team needs a new template — say, a payment reminder message — they create it here, submit it to Meta, and within 24-48 hours it is either approved or comes back with feedback. Once approved, it is instantly available for all automations and manual sends.

---

## Payment Receipt Template

**What is this?** The Payment Receipt Template screen manages the format of payment receipts automatically generated when a payment is recorded in the system.

**Why do we need it?** Payment receipts are legal financial documents. The template ensures every receipt is properly formatted with company details, GSTIN, payment breakdown, and sequential receipt numbers.

**What is inside?**
- Receipt template editor
- Required fields: receipt number, date, customer name, GSTIN, payment details, amount, GST breakdown, authorised signature
- Company header and footer
- PDF generation preview
- Version history
- Legal notice text (if required)

**What to tell sir:** Sir, every time a payment is recorded, the system can instantly generate a professional GST-compliant receipt and email it to the customer. The receipt template is designed here — the company header, the breakup of amount and tax, the receipt number, and the authorised signatory. No manual receipt creation needed.

---

## Customer Welcome Kit Template

**What is this?** The Customer Welcome Kit Template screen manages the comprehensive onboarding package sent to a new franchisee — combining multiple documents and communications into a single welcome package.

**Why do we need it?** A new franchisee has many questions and needs many documents. The Welcome Kit assembles everything into a single, structured package that makes onboarding smooth and professional.

**What is inside?**
- Welcome Kit composer: select which documents and templates to include
- Welcome letter
- Agreement summary
- Next steps checklist
- Key contact list (who to call for what)
- Brand orientation guide link
- Training schedule
- Payment schedule
- Customisation per brand (different brands may have different welcome kits)
- Generate and send button

**What to tell sir:** Sir, the Welcome Kit is the first impression of the post-sale experience. When a new franchisee signs up, within 24 hours they receive a comprehensive welcome package — the signed agreement, the next steps checklist, their training schedule, key contacts, and the brand orientation guide. All of this is assembled from this template and sent automatically when the customer record is created. A new franchisee's first experience with iFranchise is seamless and professional.

---

# CLOSING

---

## Closing Remarks

Sir, we have now walked through every module and every screen of the iFranchise CRM. Across 21 modules and over 400 screens, this system covers the entire lifecycle of the franchise sales and management business — from the moment a lead enters the system to the ongoing management of franchisee relationships, payments, and brand performance.

To summarise what this system does for the business:

For the sales team, it gives them a clear, structured daily workflow — who to call, which leads to follow up, when meetings are scheduled, and how they are tracking against targets. No more Excel sheets, no more losing leads in email threads.

For the management team, it provides complete transparency — real-time revenue numbers, team performance data, lead pipeline visibility, and geographic analysis. Strategic decisions can be made based on facts rather than gut feeling.

For the finance team, it automates invoicing, tracks payments, manages collections, calculates GST, and provides audit-ready financial records. Month-end closings that used to take a week now take a day.

For the brand management team, it tracks every brand's performance — leads, conversions, franchisee health, royalty collections, and marketing ROI — in one place, with no need for separate spreadsheets per brand.

For the operations team, it manages the entire franchise lifecycle — from agreement signing to franchisee training to territory management to renewal — with automation handling the routine steps and flags for the team to handle the exceptions.

For the compliance and legal team, it maintains a complete, tamper-proof audit trail of every action in the system, generates compliance reports on demand, and ensures every document is stored, versioned, and tracked.

And for the technology team, it provides a modern, configurable, well-integrated platform that grows with the business — with automation, API integration, custom fields, and role-based access control that can adapt to any future business requirement.

Sir, what you have seen today is not just a software product. It is a complete operational infrastructure for iFranchise — built specifically for how your business works, not forcing you to work the way a generic tool works.

Every screen we showed today exists because someone on your team needs it, uses it every day, and would be less effective without it. Together, they form a system that allows iFranchise to grow its franchise portfolio, manage its brand relationships, serve its franchisees, and scale its business — without needing to proportionally scale the team.

We are excited to take you through the live demonstration next. Thank you for your time today, sir.

---

*End of iFranchise CRM Detailed Presentation Script*

*Prepared for Management Presentation — iFranchise CRM Wireframe Review*
