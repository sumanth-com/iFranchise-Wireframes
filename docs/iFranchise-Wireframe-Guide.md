# iFranchise CRM — Wireframe Guide

**For:** Internal review (management / stakeholders)  
**Repo:** https://github.com/sumanth-com/iFranchise-Wireframes  
**What this is:** A clickable low-fidelity prototype of the full CRM. It is not the final product — it shows layout, screens, and flow so we can agree on scope before development.

---

## How to use it

1. Open the home page — you see 20 module cards.
2. Click any card to enter that module.
3. Use the **left sidebar** to move between screens inside a module.
4. Use **All Modules** (bottom of sidebar or top bar) to go back home.
5. Buttons, filters, and links respond — they open screens, modals, or show a short confirmation message (wireframe demo).

Every module has a **search bar**, **role switcher** (where relevant), and **mobile-friendly** layout.

---

## 1. Authentication (7 screens)

**Purpose:** How users sign in and recover access.

| Screen | What it is | What's inside |
|--------|------------|---------------|
| **Login** | Main sign-in page | Email, password, remember me, Microsoft/Google SSO buttons, link to forgot password |
| **Forgot Password** | Reset request | Choose email or OTP method, submit to get reset link |
| **Reset Password** | Set new password | New password, confirm password, strength meter |
| **Two-Factor Authentication** | OTP step after login | 6-digit OTP boxes, resend OTP, backup code option |
| **Session Expired** | User was logged out | Message + button to login again |
| **Account Locked** | Too many failed attempts | Lock message, contact admin, return to login |
| **Password Changed** | Success after reset | Confirmation + go to login |

---

## 2. Dashboard (8 screens)

**Purpose:** Different home pages based on who is logged in — CEO, team lead, sales, brand owner, accounts, admin.

| Screen | What it is | What's inside |
|--------|------------|---------------|
| **CEO Dashboard** | Top-level company view | KPI cards (revenue, leads, conversions), sales funnel chart, revenue trend, leads by source, team leaderboard, brand performance, recent activity, notifications, today's meetings, quick actions |
| **CEO Command Center** | Deeper executive view | Combined KPIs — pipeline, collections, approvals, marketing ROI, call metrics, state-wise performance, brand table |
| **Employee Performance** | Staff productivity | Metrics per person — leads, calls, meetings, conversion %, revenue, productivity score |
| **Team Lead Dashboard** | Manager view | Team KPIs, pipeline breakdown, follow-ups due, team member table, meetings |
| **Sales Executive Dashboard** | Individual rep view | Personal pipeline, lead status chart, my leads table, tasks, target progress |
| **Brand Owner Dashboard** | Franchise brand partner view | Brand KPIs, pipeline, enquiries by brand, documents, announcements |
| **Accounts Dashboard** | Finance team view | Revenue, collections, invoice status, GST summary, recent transactions |
| **Admin Dashboard** | IT / platform admin | User count, system health, API status, storage usage, audit logs, security alerts |

**Role switcher** at top lets you preview each dashboard without logging in as different users.

---

## 3. Lead Management (17 screens)

**Purpose:** Track franchise enquiries from first contact to conversion.

| Screen | What's inside |
|--------|---------------|
| **Lead Dashboard** | KPIs, pipeline by stage chart, monthly trend, top performers, recent activity, leads per brand |
| **All Leads** | Searchable table — filter by status, brand, city, source, assignee; import/export; bulk actions |
| **Kanban Board** | Drag-style columns — New, Contacted, Qualified, Proposal, Negotiation, Won |
| **Create / Edit Lead** | Form — name, phone, email, brand, city, budget, source, assigned executive |
| **Lead Details (Overview)** | Full lead profile, status stepper, contact info, assignment, quick actions (edit, follow-up, meeting, convert) |
| **Timeline** | Chronological events on this lead |
| **Activity Log** | System actions — who changed what |
| **Lead Assignment** | Reassign to another executive or team |
| **Follow-up** | Schedule next follow-up date and notes |
| **Schedule Meeting** | Book a meeting from the lead |
| **Meeting History** | Past and upcoming meetings for this lead |
| **Documents** | Files attached to the lead (PAN, proposals, etc.) |
| **Notes** | Internal team notes |
| **Communication** | Email/SMS/call log history |
| **Convert to Customer** | Final step — move lead into customer module |
| **Lead Archive** | Closed or dead leads |

---

## 4. Customer Management (14 screens)

**Purpose:** Manage people who became franchise customers after conversion.

| Screen | What's inside |
|--------|---------------|
| **Customer Dashboard** | Total customers, active/onboarding counts, revenue, recent sign-ups |
| **Customer List** | Table with search, filters, export |
| **Create / Edit Customer** | Full customer form |
| **Overview (Details)** | Profile, agreement status, payment status, assigned brand and executive |
| **Timeline** | Life cycle events |
| **Documents** | KYC and customer files |
| **Agreements** | Signed franchise agreements |
| **Payment History** | Invoices and payments — link to record new payment |
| **Assigned Franchise** | Which outlet/location they got |
| **Communication** | Log emails, calls, WhatsApp |
| **Notes** | Internal notes |
| **Tasks** | To-dos linked to this customer |
| **Activity Log** | Audit of changes |

---

## 5. Brand Management (17 screens)

**Purpose:** Manage franchise brands in the portfolio (Odette, Burger Co., etc.).

| Screen | What's inside |
|--------|---------------|
| **Brand Dashboard** | Brand count, revenue, open cities, top performers |
| **Brand List** | All brands with investment range, status, manager |
| **Create / Edit Brand** | Brand setup form |
| **Overview** | Brand profile, industry, category, manager |
| **Investment Details** | Investment range, fee structure summary |
| **Franchise Opportunities** | Cities open for franchise, slots, interested leads |
| **Royalty & Fee Structure** | Ongoing fees and royalty % |
| **Expansion Locations** | Where brand is expanding |
| **Required Documents** | Checklist of docs brand needs |
| **Marketing Assets** | Logos, brochures, campaign files |
| **Training & Support** | Training programs for franchisees |
| **Brand Contacts** | Key people — schedule meetings |
| **Performance Dashboard** | Revenue and outlet performance |
| **Agreements** | Brand-level legal agreements |
| **Activity Timeline** | All brand-related events |

---

## 6. Franchise Models (17 screens)

**Purpose:** Define franchise packages per brand (investment tier, ROI, territories).

| Screen | What's inside |
|--------|---------------|
| **Model Dashboard** | Published models, drafts, leads per model |
| **Model List** | All models — type, investment, ROI, status |
| **Create / Edit Model** | Model definition form |
| **Overview** | Model details, brand link, status |
| **Investment Calculator** | Estimate total investment |
| **ROI Calculator** | Return projections |
| **Requirements** | What franchisee must have |
| **Support & Training** | What company provides |
| **Documents** | Model-specific document list |
| **Territories** | City/zone availability and slots |
| **Compare Models** | Side-by-side model comparison |
| **Approval Workflow** | Draft → review → publish steps |
| **Publish / Unpublish** | Go live or take offline |
| **Archive Model** | Retire old models |

---

## 7. Meeting Management (17 screens)

**Purpose:** Schedule and track meetings with leads, customers, and internal teams.

| Screen | What's inside |
|--------|---------------|
| **Meeting Dashboard** | Today's meetings, completion rate, upcoming count |
| **Calendar** | Month/week view of meetings |
| **Meeting List** | All meetings — filter by type, status, attendee |
| **Schedule Meeting** | Form — title, date, attendees, brand, mode (online/offline) |
| **Meeting Details** | Full meeting info and status |
| **Edit Meeting** | Update meeting |
| **Agenda** | Agenda items list |
| **Participants** | Who is invited, add/remove |
| **Notes** | Meeting notes during/after |
| **Documents** | Files shared in meeting |
| **Timeline** | Meeting history |
| **Follow-ups** | Action items after meeting |
| **Outcomes** | Result — qualified, not interested, etc. |
| **Online Meeting** | Google Meet / Zoom join links |
| **Offline Meeting** | Venue, address, directions |
| **Cancel / Reschedule** | Change or cancel meeting |
| **Meeting Analytics** | Stats — completion, no-shows, conversions |

---

## 8. Approval Management (17 screens)

**Purpose:** Multi-level approvals for discounts, agreements, payments, documents.

| Screen | What's inside |
|--------|---------------|
| **Approval Dashboard** | Pending count, SLA breaches, completed today |
| **Approval Inbox** | My pending items |
| **Pending Approvals** | Full queue |
| **Approval Details** | Request summary, amount, requester, documents |
| **Multi-Level Workflow** | Step 1 → Step 2 → CEO visual flow |
| **Timeline** | When each step happened |
| **History** | Past decisions |
| **Comments** | Discussion thread on request |
| **Documents** | Supporting files — preview, download |
| **Decision** | Approve / reject / return for changes |
| **Analytics** | Approval turnaround time, bottlenecks |
| **Settings** | Configure approval rules |
| **Escalated** | Overdue items |
| **Rejected / Completed** | Closed requests |
| **Bulk Approval** | Approve many at once |
| **Audit Log** | Who approved what and when |

---

## 9. Accounts & Payments (17 screens)

**Purpose:** Money side — payments, invoices, GST, refunds, ledger.

| Screen | What's inside |
|--------|---------------|
| **Finance Dashboard** | Revenue, collections, pending dues, GST liability |
| **Payment Dashboard** | Verification queue, collections, refunds |
| **Payment List** | All payments — search and filter |
| **Payment Details** | Single payment — verify, generate invoice, refund |
| **Record Payment** | Enter new payment (cash, UPI, bank, etc.) |
| **Generate Invoice** | Create GST invoice with line items and tax |
| **Invoice List / Invoice Details** | All invoices, download PDF, send to customer |
| **GST & Tax Summary** | GSTR-ready summary, export |
| **Payment Collection** | Collection activities and follow-ups |
| **Pending Dues** | Overdue amounts — remind, collect |
| **Refund Management** | Refund requests with approval |
| **Payment Approval** | Payments waiting for accounts sign-off |
| **Customer Ledger** | Debit/credit statement per customer |
| **Financial Reports** | Revenue, GST, outstanding reports |
| **Revenue Analytics** | Trends by brand, city, month |
| **Payment Audit Log** | Every payment action logged |

---

## 10. Document Management (17 screens)

**Purpose:** Central file store — KYC, agreements, brand docs, with version control.

| Screen | What's inside |
|--------|---------------|
| **Document Dashboard** | Total docs, pending verification, expiring soon |
| **Document Library** | Folder tree and file list |
| **Upload Document** | Add new file with category and linked record |
| **Document Details** | Metadata, status, linked customer/brand |
| **Preview** | View document |
| **Edit Document** | Update metadata |
| **Version History** | v1, v2, v3 — who uploaded when |
| **Sharing** | Share link, revoke access |
| **Folder Management** | Create folders, permissions |
| **Customer / Brand / Agreement / Payment / Approval Documents** | Filtered views per type |
| **Expiry Tracker** | Docs expiring in 7/30/90 days |
| **Bulk Upload & Download** | Mass file operations |
| **Audit Log** | Document access and changes |

---

## 11. Notification Center (17 screens)

**Purpose:** All alerts — in-app, email, SMS, WhatsApp, push.

| Screen | What's inside |
|--------|---------------|
| **Notification Dashboard** | Unread count, delivery rates per channel |
| **Notification Center** | Inbox with filters (All, Unread, Approvals, Meetings, Payments) |
| **All Notifications** | Full history |
| **Notification Details** | Single notification with action button |
| **Preferences** | What you want to receive and how |
| **Email / SMS / WhatsApp / Push** | Per-channel settings and delivery stats |
| **Announcement Center** | Broadcast to all users or teams |
| **Reminder Center** | Scheduled reminders |
| **Scheduled Notifications** | Queued future sends |
| **Templates** | Reusable message templates |
| **Analytics** | Read rate, delivery success |
| **Delivery Status** | Sent, delivered, read |
| **Failed Notifications** | Retry failed sends |
| **Audit Log** | Notification system activity |

---

## 12. Reporting & Analytics (25 screens)

**Purpose:** Reports and charts for management — sales, marketing, calls, geography.

| Screen | What's inside |
|--------|---------------|
| **Executive Dashboard** | Company KPIs, revenue trend, top reports shortcut |
| **Reports Dashboard** | List of all standard and saved reports |
| **Sales / Lead Conversion / Customer Reports** | Funnel and conversion data |
| **Brand / Franchise Model Reports** | Per-brand and per-model performance |
| **Meeting / Revenue / Payment Reports** | Operational and financial reports |
| **Team Performance** | Executive and team lead rankings |
| **Geographic Analytics** | State and city breakdown |
| **KPI Dashboard** | All key numbers on one page |
| **Custom Report Builder** | Pick dimensions, metrics, chart type |
| **Scheduled Reports** | Auto-email reports weekly/monthly |
| **Report Export Center** | Download history |
| **Employee / Call / Marketing ROI Reports** | Deep dives (links to Call & Marketing modules) |
| **Lead Source / Sales Funnel / Campaign Reports** | Marketing and pipeline analytics |
| **State-wise / City-wise Reports** | Regional performance |
| **Analytics Audit Log** | Who exported what report |

---

## 13. Automation Engine (24 screens)

**Purpose:** Build workflows — when X happens, do Y automatically.

| Screen | What's inside |
|--------|---------------|
| **Automation Dashboard** | Active workflows, runs today, failures |
| **Workflow List** | All automations with status |
| **Workflow Builder** | Visual step builder — triggers, conditions, actions |
| **Create / Edit Workflow** | Setup form |
| **Workflow Details** | Steps, last run, activate/pause |
| **Trigger Library** | Events — new lead, payment received, doc uploaded |
| **Action Library** | Send email, WhatsApp, create task, update field |
| **Condition Builder** | If brand = X and city = Y then… |
| **Schedule Automation** | Time-based runs |
| **Execution History** | Past runs with success/fail |
| **Failed Executions** | Errors to fix |
| **Analytics** | Workflow performance |
| **Templates** | Pre-built workflow templates |
| **Testing** | Test run before going live |
| **Webhooks / API Manager** | Connect external systems |
| **Email / WhatsApp / SMS / Task / Approval / Notification Automation** | Channel-specific automations |
| **Audit Trail** | Changes to workflows |

---

## 14. User Management (24 screens)

**Purpose:** HR and IT — employees, org structure, access.

| Screen | What's inside |
|--------|---------------|
| **User Dashboard** | Headcount, birthdays, new joiners, quick actions |
| **User Directory** | All employees — search, bulk assign role, deactivate |
| **User Details / Full Profile** | Employment info, validation checks |
| **Create / Edit User** | Employee form |
| **Reporting Hierarchy** | Who reports to whom |
| **Departments / Teams** | Org units |
| **Organization Chart** | Visual tree |
| **Employee Documents** | ID proofs, offer letters |
| **Leave & Availability** | Leave requests, approve/reject |
| **Skills & Certifications** | Employee skills |
| **User Activity** | Login and CRM actions |
| **Login Sessions / Devices** | Active sessions, revoke |
| **User Preferences** | Notification and display settings |
| **Account Status** | Active, suspended, deactivated |
| **User Analytics** | Hiring, attrition trends |
| **Bulk Import / Export** | CSV/Excel employee data |
| **Invite User** | Email invite for new joiners |
| **Deactivate User** | Offboarding |
| **User Timeline** | Full employment history |

---

## 15. Role & Permission Management (25 screens)

**Purpose:** Who can see and do what — RBAC like Salesforce.

| Screen | What's inside |
|--------|---------------|
| **Security Dashboard** | Role count, access requests, violations |
| **Roles List** | CEO, Team Lead, Sales Executive, etc. |
| **Create / Edit Role** | Role name and base permissions |
| **Permission Matrix** | Grid — module × Create/Read/Update/Delete |
| **Module Permissions** | Tree view per module |
| **Data Access** | Row-level — own records vs team vs all |
| **Feature Access** | UI buttons and features on/off per role |
| **User Role Assignment** | Assign or revoke roles |
| **Department / Approval / Workflow Permissions** | Special rules |
| **Field Level Permissions** | Hide salary field from sales, etc. |
| **Record Level Permissions** | Scope rules per module |
| **Custom Roles** | Company-specific roles |
| **Permission Templates** | Copy-paste permission sets |
| **Clone Role** | Duplicate existing role |
| **Permission Comparison** | Diff two roles |
| **Effective Permissions** | What one user actually has |
| **Access Requests** | User asked for more access — approve/deny |
| **Security Analytics** | Permission usage stats |
| **Assignment History** | Role change log |

---

## 16. Audit & Activity Logs (25 screens)

**Purpose:** Compliance and security — see everything that happened in the system.

| Screen | What's inside |
|--------|---------------|
| **Audit Dashboard** | Events today, security alerts, failed logins |
| **Activity Timeline** | Live feed of actions |
| **Audit Log Explorer** | Search all logs with filters |
| **User Activity** | Per-user action history |
| **Login / Logout History** | Session records |
| **Failed Login Attempts** | Brute force detection |
| **Security / System Events** | Incidents and system changes |
| **Module Activity Logs** | Per-module — leads, payments, etc. |
| **Data Change History** | Before/after on field edits |
| **Version History** | Record versions |
| **Deleted Records** | Soft-deleted data |
| **Restore Records** | Bring back deleted items |
| **Export Audit Logs** | Download for compliance |
| **Compliance Reports** | GDPR, retention reports |
| **Security Dashboard / Suspicious Activity** | Risk monitoring |
| **API / Integration / Notification / Email Logs** | Technical logs |
| **Automation / Error / Database Logs** | System health |

---

## 17. System Configuration (50 screens)

**Purpose:** Admin settings — company profile, integrations, security, licensing.

**Main areas:**

| Area | Screens | What's inside |
|------|---------|---------------|
| **Company** | Dashboard, Company, Organization, Branches, Business Hours, Holidays | Legal name, address, branches, working hours |
| **Branding** | Branding, Logo, Theme | Colors, logo upload, dark/light theme |
| **Communication** | Email, SMTP, WhatsApp, SMS, Notifications | Resend, Twilio, WhatsApp API setup |
| **Storage** | Storage, File Upload | S3 limits, allowed file types |
| **Security** | Security, Password Policy, MFA, Sessions | Lockout rules, 2FA, session timeout |
| **API** | API Management, Keys, Webhooks, Integrations | API keys, webhook URLs, third-party apps |
| **Google / Calendar / Payment** | Workspace, Calendar, Razorpay/Cashfree | OAuth connections |
| **Customization** | Feature Flags, Custom Fields, Numbering, Workflow | Toggle features, ID formats (LEAD-001) |
| **Operations** | Backup, Database, Cache, Queue, Env Vars, System Logs | Server health, maintenance mode |
| **Commercial** | License, Subscription | Plan limits, billing |
| **Locale** | Localization, Currency, Timezone, Language | INR, IST, English/Hindi |
| **Compliance** | Audit Settings, Retention, GDPR, Terms | Data retention, privacy policy |
| **About** | Version info | System version and support |

---

## 18. Master Data Management (20 screens)

**Purpose:** Reference data that feeds the whole CRM — no code change needed to add a city or lead source.

| Screen | What's inside |
|--------|---------------|
| **Dashboard** | Total records, links to all entity types, recent changes |
| **Brands** | Brand names and codes |
| **Franchise Models** | Model types and tiers |
| **Success Fees / Franchise Fees / Royalty / Marketing Fees** | Fee tables |
| **Lead Sources / Campaign Sources** | Where leads come from |
| **States / Cities** | Geography master |
| **Industries / Business Categories** | Classification |
| **Meeting Types / Approval Types / Payment Types** | Dropdown values used everywhere |
| **Notification / Email / WhatsApp / Document Templates** | Template registry |

Each screen has: search, add, edit, archive, activate/deactivate.

---

## 19. Call Intelligence (15 screens)

**Purpose:** Phone calls — live monitoring, history, recordings. Built to connect with CALLYZER later.

| Screen | What's inside |
|--------|---------------|
| **Call Dashboard** | Live call count, volume chart, integration status (CALLYZER) |
| **Live Calls** | Active calls — listen, barge (supervisor) |
| **Call History** | Full log with outcome and recording link |
| **Incoming / Outgoing / Connected / Missed** | Filtered call lists |
| **Recording Library** | Play and download recordings |
| **Call Analytics** | Volume, duration, outcomes |
| **Call Performance** | Success rate, SLA |
| **Employee Call Activity** | Per-person call stats |
| **Call Timeline** | Chronological feed |
| **Daily / Weekly / Monthly Reports** | Export PDF summaries |

---

## 20. Marketing Intelligence (9 screens)

**Purpose:** Ad spend and campaign ROI. Ready to connect Meta/Google Ads later.

| Screen | What's inside |
|--------|---------------|
| **Marketing Dashboard** | Spend, CPL, ROAS, ROI, lead quality — charts |
| **Marketing Spend** | Spend by campaign and platform |
| **Lead Source Analytics** | Which channel brings best leads |
| **Campaign Performance** | Per-campaign leads, cost, conversion |
| **Funnel Performance** | Ad click → lead → qualified → deal |
| **Lost Leads Analysis** | Why leads dropped off |
| **Lead Quality** | Scoring and quality metrics |
| **ROI & ROAS** | Return on ad spend |
| **Ad Integrations** | Connect Meta, Google (marked Future) |

---

## 21. Template Management (8 screens)

**Purpose:** Reusable documents and messages with automation triggers.

| Screen | What's inside |
|--------|---------------|
| **Dashboard** | Template counts, categories, automation trigger map |
| **Agreement Templates** | Franchise agreement formats |
| **Proposal Templates** | Sales proposals |
| **Welcome Templates** | New franchisee welcome messages |
| **Email / WhatsApp Templates** | Message templates with triggers |
| **Payment Templates** | Invoice and receipt formats |
| **Customer Templates** | Onboarding documents |

Each list: edit, preview, see which automation trigger fires it.

---

# Presentation Script (for your sir)

> **Full detailed script (every screen explained):**  
> - **One file per module:** [docs/modules/](./modules/) — open `README.md` for the list  
> - **All in one file:** [iFranchise-Detailed-Presentation-Script.md](./iFranchise-Detailed-Presentation-Script.md)

*Below is a shorter summary version. Use the detailed file when presenting module by module.*

---

## Opening

> Sir, this is the iFranchise CRM wireframe — a clickable prototype, not the final software. We built every screen so you can see layout and flow before development starts. Open the link, click any module card, use the left sidebar to move between screens. All buttons work — they open the next screen or a popup. I will explain each module — what problem it solves and what you will see inside.

---

## Home Page

**Why useful:** One place to enter any part of the CRM without remembering URLs.

**What's inside:** 20 cards — Authentication, Dashboard, Leads, Customers, Brands, Meetings, Approvals, Accounts, Documents, Notifications, Analytics, Automation, Users, Roles, Audit, Settings, Master Data, Call Intelligence, Marketing Intelligence, Templates. Click a card → that module opens. "All Modules" brings you back here.

---

## 1. Authentication

**Why useful:** Controls who can enter the system. Every employee logs in here. Keeps data safe.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Login** | Daily entry point for all staff | Email, password, remember me, Microsoft/Google login, link to forgot password |
| **Forgot Password** | User forgot password — self-service reset | Pick email or OTP, submit, get reset link |
| **Reset Password** | User sets new password after reset link | New password, confirm, strength meter (weak/strong) |
| **Two-Factor (2FA)** | Extra security after password | 6-digit OTP on phone, resend OTP, backup code option |
| **Session Expired** | User idle too long — must login again | Message + "Login again" button |
| **Account Locked** | Too many wrong passwords | Lock message, contact admin, return to login |
| **Password Changed** | Confirms reset worked | Success message + go to login |

---

## 2. Dashboard

**Why useful:** First screen after login. Each role sees only what matters to them — CEO sees whole company, sales rep sees only their work.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **CEO Dashboard** | Abdul sees company health at a glance | Revenue, leads, conversion KPIs; sales funnel chart; revenue trend; leads by source; team leaderboard; top brands; recent activity; notifications; today's meetings; quick links to approvals and analytics |
| **CEO Command Center** | Deeper view for board meetings | Pipeline value, collections, pending approvals, marketing ROI, call success rate, state-wise performance, brand revenue table |
| **Employee Performance** | Track who is performing and who is not | Per person — leads, calls, meetings, conversion %, revenue, productivity score |
| **Team Lead Dashboard** | Himani manages her sales team | Team KPIs, pipeline by stage, follow-ups due today, team member table, meetings this week |
| **Sales Executive Dashboard** | Diksha sees only her own work | My leads table, lead status chart, monthly target progress, tasks, quick add lead |
| **Brand Owner Dashboard** | Akshita sees her brand only | Brand revenue, franchise pipeline, enquiries by brand, documents, send brand update |
| **Accounts Dashboard** | Fazil sees finance numbers | Collections, invoice status, GST summary, recent transactions, download GST report |
| **Admin Dashboard** | Sumanth monitors the platform | Total users, system health, API status, storage used, audit logs, security alerts |

**Tip for sir:** Use the "View as" dropdown on top to switch between roles without logging in as different users.

---

## 3. Lead Management

**Why useful:** This is where franchise enquiries live — from first call till they become a customer. Sales team works here every day.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Lead Dashboard** | Manager sees pipeline health | KPI cards, pipeline-by-stage bar chart, monthly lead vs converted trend, top performers table, recent activity feed, leads count per brand (Odette, Chai Point, etc.) |
| **All Leads** | Find and work any lead | Search box, filters (status, brand, city, source, assigned to), lead table with ID/name/phone, import/export, bulk assign |
| **Kanban Board** | Visual pipeline — drag cards between stages | Columns: New → Contacted → Qualified → Proposal → Negotiation → Won |
| **Create Lead** | Add new enquiry from website, call, or event | Form: name, phone, email, brand interest, city, budget, source, assign to executive |
| **Edit Lead** | Update lead details | Same form, pre-filled |
| **Lead Details** | Full picture of one lead | Contact info, status stepper, assigned executive, buttons for edit, follow-up, meeting, convert |
| **Timeline** | See full history of one lead | Date-wise events — created, called, meeting done, status changed |
| **Activity Log** | Audit — who changed what | System log of edits and actions |
| **Lead Assignment** | Move lead to another executive | Pick new assignee, add reason |
| **Follow-up** | Don't forget to call back | Set date, time, notes for next follow-up |
| **Schedule Meeting** | Book meeting from lead | Date, attendees, agenda link |
| **Meeting History** | All meetings for this lead | Past and upcoming meetings list |
| **Documents** | Store PAN, proposals, ID proofs | File list, upload button |
| **Notes** | Internal team notes — customer does not see | Note list, add note |
| **Communication** | Log emails, calls, WhatsApp | History of all touchpoints |
| **Convert to Customer** | Lead agreed — move to customer module | Confirmation step, creates customer record |
| **Lead Archive** | Dead or closed leads — not deleted | Search archived leads, restore if needed |

---

## 4. Customer Management

**Why useful:** After lead converts, everything about that franchisee stays here — agreements, payments, documents, tasks.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Customer Dashboard** | How many customers, how many onboarding | Total customers, active count, revenue, recent sign-ups chart |
| **Customer List** | Search all franchise customers | Table with filters, export |
| **Create / Edit Customer** | Add or update customer record | Full form — contact, brand, city, agreement status, payment status |
| **Overview** | One customer full profile | Name, phone, brand, city, sales executive, agreement status, payment status |
| **Timeline** | Customer journey events | Signed agreement, payment received, outlet opened |
| **Documents** | KYC and customer files | PAN, Aadhaar, agreements — download |
| **Agreements** | Which franchise deal they signed | Agreement ID, brand, value, signed date, status |
| **Payment History** | What they paid and what is pending | Invoice list, record new payment button |
| **Assigned Franchise** | Which outlet/location they got | Outlet name, city, opening date |
| **Communication** | All emails and calls with customer | Log communication button |
| **Notes** | Internal notes on this customer | Add note, view history |
| **Tasks** | To-dos — e.g. collect document, schedule training | Create task, assignee, due date |
| **Activity Log** | Who edited this customer record | Export log |

---

## 5. Brand Management

**Why useful:** Manages franchise brands in our portfolio — Odette, Burger Co., Chai Point, etc. Brand team and expansion team use this.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Brand Dashboard** | How all brands are performing | Brand count, total revenue, cities open, top brand table |
| **Brand List** | See all brands | Logo, ID, name, industry, investment range, status, manager |
| **Create / Edit Brand** | Onboard new brand to portfolio | Brand form — name, category, investment, manager |
| **Overview** | One brand summary | Profile, status, franchisee count |
| **Investment Details** | What investor needs to put in | Investment range, fee breakdown |
| **Franchise Opportunities** | Which cities are open | City, slots available, leads interested, view leads button |
| **Royalty & Fee Structure** | Ongoing fees after opening | Royalty %, marketing fee, success fee |
| **Expansion Locations** | Where brand is growing | Outlet list, city, revenue, opened date |
| **Required Documents** | What docs brand needs from franchisee | Document checklist, upload |
| **Marketing Assets** | Brochures, logos, campaign files | Asset library, download |
| **Training & Support** | What training brand provides | Training program list |
| **Brand Contacts** | Key people for this brand | Contact list, schedule meeting |
| **Performance Dashboard** | Revenue and growth per brand | Charts and outlet performance |
| **Agreements** | Brand-level legal agreements | Agreement list |
| **Activity Timeline** | Everything that happened on this brand | Event feed |

---

## 6. Franchise Models

**Why useful:** Defines franchise packages — e.g. "Odette Kiosk ₹15L" vs "Odette Full Store ₹40L". Sales uses this to quote investors.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Model Dashboard** | How many models live, how many drafts | KPIs, model list summary |
| **Model List** | All franchise models | ID, brand, name, type, investment, ROI, status, leads count |
| **Create / Edit Model** | Define new package | Form — brand, investment, ROI, support included |
| **Overview** | One model details | Status, brand link, description |
| **Investment Calculator** | Quote total cost to investor | Input fields, calculated total |
| **ROI Calculator** | Show expected return | Projected revenue vs investment |
| **Requirements** | What franchisee must have | Space, staff, experience checklist |
| **Support & Training** | What company gives | Support items list |
| **Documents** | Model-specific document list | Required docs, download |
| **Territories** | Which cities have slots | City, zone, status (available/reserved), reserve button |
| **Compare Models** | Help investor choose | Side-by-side comparison |
| **Approval Workflow** | Draft → review → publish | Step tracker before going live |
| **Publish / Unpublish** | Make model visible to sales or hide it | Publish button, unpublish |
| **Archive Model** | Retire old model | Archive with confirmation |

---

## 7. Meeting Management

**Why useful:** Schedule and track all meetings — with leads, customers, brand partners, internal team.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Meeting Dashboard** | Today's schedule at a glance | Meetings today, completion rate, upcoming count |
| **Calendar** | Month/week view | Calendar grid with meeting blocks |
| **Meeting List** | All meetings searchable | Filter by type, status, attendee |
| **Schedule Meeting** | Book new meeting | Title, date, time, attendees, brand, online/offline mode |
| **Meeting Details** | One meeting full info | Status, attendees, agenda, outcome |
| **Edit Meeting** | Change date or attendees | Edit form |
| **Agenda** | What to discuss | Agenda items list, add item |
| **Participants** | Who is invited | Name list, add/remove |
| **Notes** | Notes during or after meeting | Note editor, save |
| **Documents** | Files shared in meeting | Upload, preview, download |
| **Timeline** | Meeting history | Status changes, reschedules |
| **Follow-ups** | Tasks after meeting | Create follow-up, mark complete |
| **Outcomes** | Result of meeting | Qualified / not interested / proposal sent |
| **Online Meeting** | Join video call | Google Meet / Zoom link, copy link |
| **Offline Meeting** | Physical meeting | Venue address, get directions |
| **Cancel / Reschedule** | Change or cancel | Reason, new date |
| **Meeting Analytics** | How effective meetings are | Completion rate, no-shows, conversions |

---

## 8. Approval Management

**Why useful:** Discounts, agreements, payments, documents need manager sign-off. Nothing goes through without proper approval chain.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Approval Dashboard** | How many pending, any overdue | Pending count, SLA breaches, completed today |
| **Approval Inbox** | My items waiting for my action | List of requests assigned to me |
| **Pending Approvals** | Full queue | All open requests with requester, amount, date |
| **Approval Details** | Understand one request before deciding | Summary, amount, requester, attached docs, workflow step |
| **Multi-Level Workflow** | See approval chain | Step 1 Team Lead → Step 2 Manager → Step 3 CEO |
| **Timeline** | When each step happened | Date/time per approver |
| **History** | Past decisions | Approved/rejected list |
| **Comments** | Discussion on request | Comment thread, add comment |
| **Documents** | Proof attached to request | Preview, download |
| **Decision** | Take action | Approve / Reject / Return for changes buttons |
| **Analytics** | How fast approvals move | Turnaround time, bottlenecks |
| **Settings** | Configure approval rules | Discount limits per role, etc. |
| **Escalated** | Overdue — needs urgent action | Escalated items list |
| **Rejected / Completed** | Closed requests | Filter by outcome |
| **Bulk Approval** | Approve many at once | Select multiple, bulk approve |
| **Audit Log** | Who approved what, when | Immutable log |

---

## 9. Accounts & Payments

**Why useful:** All money — collections, invoices, GST, refunds. Accounts team and finance manager use this daily.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Finance Dashboard** | Company money overview | Revenue, collections, pending dues, GST liability |
| **Payment Dashboard** | Day-to-day payment operations | Verification queue, collections, refund count |
| **Payment List** | All payments in system | Search, filter, table with amount/status/customer |
| **Payment Details** | One payment — verify or refund | Customer, amount, mode, verify button, generate invoice, refund |
| **Record Payment** | Enter new payment received | Form — customer, amount, mode (UPI/cash/bank), date |
| **Generate Invoice** | Create GST bill | Line items, CGST/SGST breakdown, invoice number |
| **Invoice List / Details** | All invoices | Download PDF, send to customer, record payment |
| **GST & Tax Summary** | For GST filing | Taxable value, GST amount, export GSTR |
| **Payment Collection** | Follow up on collections | Collection activity tracker |
| **Pending Dues** | Who owes money | Overdue list, remind button, collect button |
| **Refund Management** | Customer wants money back | Refund request, approval workflow |
| **Payment Approval** | Payments needing sign-off before confirmed | Verify and approve buttons |
| **Customer Ledger** | Full statement for one customer | Debit/credit entries, running balance |
| **Financial Reports** | Download reports for management | Revenue summary, GST return, outstanding dues |
| **Revenue Analytics** | Trends — which brand/city earns most | Charts by brand, month, city |
| **Payment Audit Log** | Every payment action logged | Who verified, who generated invoice |

---

## 10. Document Management

**Why useful:** One place for all files — PAN, Aadhaar, agreements, brand docs. No more files in email or WhatsApp.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Document Dashboard** | How many docs, any expiring soon | Total docs, pending verification, expiry alerts |
| **Document Library** | Browse all files | Folder tree, file list, search |
| **Upload Document** | Add new file | Pick file, category, link to customer/brand/lead |
| **Document Details** | One file metadata | Name, type, status, linked record, uploaded by |
| **Preview** | View file without downloading | Preview panel |
| **Edit Document** | Update category or link | Edit form |
| **Version History** | Track v1, v2, v3 | Who uploaded which version, when |
| **Sharing** | Share with external party | Share link, revoke access |
| **Folder Management** | Organise files in folders | Create folder, permissions |
| **Customer / Brand / Agreement / Payment / Approval Docs** | Filtered view per type | Only docs of that category |
| **Expiry Tracker** | Docs about to expire | PAN expiring in 30 days, etc. |
| **Bulk Upload / Download** | Many files at once | ZIP upload, bulk download |
| **Audit Log** | Who viewed or changed a document | Access log |

---

## 11. Notification Center

**Why useful:** Staff get alerts for approvals, meetings, payments — via app, email, SMS, or WhatsApp. Nothing gets missed.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Notification Dashboard** | Delivery health overview | Unread count, today's notifications, failed count, read rate per channel |
| **Notification Center** | Personal inbox | Filter chips: All, Unread, Approvals, Meetings, Payments; inbox list + preview panel |
| **All Notifications** | Full history | Search and filter all past notifications |
| **Notification Details** | One alert with action | Title, message, priority, action button (e.g. "View Approval") |
| **Preferences** | User chooses what to receive | Toggle per channel and per event type |
| **Email / SMS / WhatsApp / Push** | Per-channel settings | Delivery rate, template list, test send |
| **Announcement Center** | Message whole company or team | Compose broadcast, select recipients |
| **Reminder Center** | Scheduled reminders | Follow-up reminders, payment due reminders |
| **Scheduled Notifications** | Future sends queued | Date, recipient, status |
| **Templates** | Reusable message formats | Template name, variables like {customer_name} |
| **Analytics** | Are notifications being read | Read rate, delivery success by channel |
| **Delivery Status** | Track if message reached user | Sent → Delivered → Read |
| **Failed Notifications** | Fix delivery problems | Failed list, retry button |
| **Audit Log** | Notification system activity | Who sent what, when |

---

## 12. Reporting & Analytics

**Why useful:** Management needs reports — sales, marketing, calls, revenue — without asking IT every time.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Executive Dashboard** | CEO-level KPIs | Revenue trend, top reports shortcuts |
| **Reports Dashboard** | List of all reports | Standard reports + saved custom reports, open button |
| **Sales Reports** | Pipeline and deal performance | Funnel data, tables |
| **Lead Conversion Reports** | Which sources convert best | Source vs conversion % |
| **Customer Reports** | Acquisition and retention | New customers, churn |
| **Brand / Franchise Model Reports** | Per-brand performance | Revenue, outlets, growth |
| **Meeting Reports** | Meeting productivity | Scheduled vs completed, outcomes |
| **Revenue / Payment Reports** | Financial numbers | Collections, dues, forecast |
| **Team Performance** | Rank executives | Leads, conversions, revenue per person |
| **Geographic Analytics** | City and state breakdown | Map/table by region |
| **KPI Dashboard** | All key numbers one page | KPI cards with targets |
| **Custom Report Builder** | Build own report | Pick dimensions, metrics, chart type, save |
| **Scheduled Reports** | Auto-email every week/month | Schedule name, recipients, frequency |
| **Report Export Center** | Download history | PDF/Excel exports list |
| **Employee / Call / Marketing Reports** | Deep dives | Links to detailed modules |
| **Lead Source / Funnel / Campaign Reports** | Marketing and pipeline | CPL, ROAS, funnel stages |
| **State-wise / City-wise Reports** | Regional performance | Tables by location |
| **Analytics Audit Log** | Who exported which report | Compliance log |

---

## 13. Automation Engine

**Why useful:** Repeat tasks run automatically — e.g. when payment comes, send WhatsApp + create task. Saves manual work.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Automation Dashboard** | How many workflows running | Active count, runs today, failures |
| **Workflow List** | All automations | Name, trigger, status (active/paused) |
| **Workflow Builder** | Visual flow designer | Drag triggers → conditions → actions |
| **Create / Edit Workflow** | Setup automation | Name, description, trigger event |
| **Workflow Details** | One workflow status | Steps, last run, activate/pause/test |
| **Trigger Library** | Events that start automation | New lead, payment received, doc uploaded, meeting completed |
| **Action Library** | What happens after trigger | Send email, WhatsApp, SMS, create task, update field |
| **Condition Builder** | If-then rules | If brand = Odette AND city = Bengaluru then… |
| **Schedule Automation** | Run on time schedule | Daily report at 9 AM, etc. |
| **Execution History** | Past runs | Success/fail per run |
| **Failed Executions** | What broke and why | Error message, retry |
| **Analytics** | Workflow performance | Run count, success rate |
| **Templates** | Pre-built workflows | Copy and customise |
| **Testing** | Test before going live | Run test, check log |
| **Webhooks / API Manager** | Connect external systems | Webhook URL, API keys |
| **Email / WhatsApp / SMS / Task / Approval / Notification Automation** | Channel-specific rules | Per-channel automation list |
| **Audit Trail** | Changes to workflows | Who edited what |

---

## 14. User Management

**Why useful:** HR and IT manage all employees — who works here, what department, can they login, org structure.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **User Dashboard** | Workforce snapshot | Headcount, birthdays this month, new joiners, quick actions |
| **User Directory** | All employees | Search, filter by department/city, bulk assign role |
| **User Details / Profile** | One employee record | Employee ID, designation, role, manager, leads assigned |
| **Create / Edit User** | Add or update employee | Form — name, email, phone, department, role, manager |
| **Reporting Hierarchy** | Who reports to whom | Manager → team tree |
| **Departments** | Org departments | Department name, head, employee count |
| **Teams** | Cross-functional teams | Team name, members |
| **Organization Chart** | Visual org tree | Click node → open profile |
| **Employee Documents** | HR files | ID proof, offer letter, download |
| **Leave & Availability** | Leave requests | Apply leave, manager approve/reject |
| **Skills & Certifications** | What employee knows | Skills list, add skill |
| **User Activity** | What employee did in CRM | Login, lead edits, meetings |
| **Login Sessions / Devices** | Security — active logins | Device list, revoke session |
| **User Preferences** | Personal settings | Notification prefs, language |
| **Account Status** | Active / suspended / left | Change status |
| **User Analytics** | Hiring and attrition trends | Charts |
| **Bulk Import / Export** | Many employees via Excel | CSV template, import, export |
| **Invite User** | Send email invite to join | Email, role, resend invite |
| **Deactivate User** | Employee left company | Offboard, revoke access |
| **User Timeline** | Full employment history | Joined, promoted, role changed |

---

## 15. Role & Permission Management

**Why useful:** Controls access — sales rep cannot see salary, brand owner sees only their brand. Like Salesforce permission model.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Security Dashboard** | Access control overview | Role count, pending access requests |
| **Roles List** | All roles in system | CEO, Team Lead, Sales Executive, Accounts, etc. |
| **Create / Edit Role** | Define new role | Name, description, base permissions |
| **Permission Matrix** | See all permissions in grid | Rows = modules, columns = Create/Read/Update/Delete per role |
| **Module Permissions** | Tree view per module | Expand module → see allowed actions |
| **Data Access** | Row-level security | Own records only vs team vs all |
| **Feature Access** | Hide/show UI features | Which buttons each role sees |
| **User Role Assignment** | Give or remove role from user | User list, assign role, revoke |
| **Department / Approval / Workflow Permissions** | Special rules | Cross-department access, who can approve |
| **Field Level Permissions** | Hide sensitive fields | e.g. salary hidden from sales |
| **Record Level Permissions** | Scope rules | "See only Bengaluru leads" |
| **Custom Roles** | Company-specific roles | Clone from template |
| **Permission Templates** | Quick setup | Pre-configured permission sets |
| **Clone Role** | Copy existing role | Duplicate with new name |
| **Permission Comparison** | Diff two roles | Side-by-side what differs |
| **Effective Permissions** | What one user actually has | Combined from all their roles |
| **Access Requests** | User asked for more access | Approve or deny request |
| **Security Analytics** | Permission usage stats | Unused permissions, violations |
| **Assignment History** | Role change log | Who got which role, when |

---

## 16. Audit & Activity Logs

**Why useful:** Compliance and security — see every login, edit, delete. Required for audits and investigating issues.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Audit Dashboard** | Security overview | Events today, failed logins, alerts |
| **Activity Timeline** | Live feed of actions | Real-time event stream |
| **Audit Log Explorer** | Search all logs | Filters — user, module, date, action |
| **User Activity** | One user's actions | Everything one person did |
| **Login / Logout History** | Session records | Time, IP, device |
| **Failed Login Attempts** | Possible attack | Wrong password attempts, block IP |
| **Security / System Events** | Incidents | Password changed, role modified |
| **Module Activity Logs** | Per-module logs | Leads module, payments module, etc. |
| **Data Change History** | Before and after values | Field-level diff |
| **Version History** | Record versions | v1, v2 of same record |
| **Deleted Records** | Soft-deleted data | What was deleted, by whom |
| **Restore Records** | Undo delete | Restore button |
| **Export Audit Logs** | Download for auditor | CSV/PDF export |
| **Compliance Reports** | GDPR, retention reports | Regulatory exports |
| **Security Dashboard / Suspicious Activity** | Risk monitoring | Unusual login patterns |
| **API / Integration / Email / Notification / Automation / Error / Database Logs** | Technical logs | For IT team debugging |

---

## 17. System Configuration

**Why useful:** Admin sets up company, connects email/WhatsApp/payment, security rules — without code changes.

**Main sections and what's inside:**

| Section | Why useful | What's inside |
|---------|------------|---------------|
| **Company & Organization** | Basic company info | Legal name, address, branches, business hours, holiday calendar |
| **Branding & Theme** | Look and feel | Logo upload, colours, dark/light theme |
| **Email / SMTP** | System sends emails | Resend API, from address, SMTP settings |
| **WhatsApp / SMS** | Message customers | WhatsApp Business API, Twilio SMS keys |
| **Storage & Uploads** | File limits | Max file size, allowed types, S3 storage |
| **Security** | Protect system | Password rules, MFA on/off, session timeout |
| **API Keys & Webhooks** | Developers connect | Generate API key, webhook URLs |
| **Integrations** | Third-party apps | Google Workspace, Calendar, Razorpay, Cashfree |
| **Feature Flags** | Turn features on/off | Enable beta features per company |
| **Custom Fields & Numbering** | Customise data | Add extra fields, ID format (LEAD-001) |
| **Backup / Database / Cache / Queue** | IT operations | Run backup, flush cache, queue status |
| **License & Subscription** | Plan limits | User limit, storage limit, upgrade plan |
| **Localization** | India settings | INR currency, IST timezone, English/Hindi |
| **GDPR / Retention / Terms** | Legal compliance | Data retention days, privacy policy edit |
| **About System** | Version info | CRM version, support contact |

---

## 18. Master Data Management

**Why useful:** Dropdown values and reference data — cities, lead sources, fees — admin updates without developer.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Dashboard** | Overview of all master data | Record counts, links to 19 entity types, recent changes |
| **Brands / Franchise Models** | Reference brand and model list | Name, code, category — add/edit/archive |
| **Success / Franchise / Royalty / Marketing Fees** | Fee tables used in quotes | Amount, brand, model |
| **Lead Sources / Campaign Sources** | Where leads come from | Website, Meta Ads, Referral, Trade Show |
| **States / Cities** | Geography master | State code, city tier (Tier 1/2/3) |
| **Industries / Business Categories** | Classification | F&B, Retail, etc. |
| **Meeting / Approval / Payment Types** | Dropdown values | Meeting type, approval type, payment mode |
| **Notification / Email / WhatsApp / Document Templates** | Template registry | Template name, trigger, channel |

Each screen: search, add record, edit, archive, activate/deactivate.

---

## 19. Call Intelligence

**Why useful:** Track all sales calls — live monitoring, recordings, per-agent performance. Connects to CALLYZER later.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Call Dashboard** | Call activity overview | Live call count, volume chart, CALLYZER integration status |
| **Live Calls** | Monitor calls happening now | Caller, agent, duration, listen/barge buttons |
| **Call History** | Full call log | Contact, agent, outcome, recording yes/no, details |
| **Incoming / Outgoing / Connected / Missed** | Filtered lists | Direction-specific tables |
| **Recording Library** | Play past calls | Recording ID, play, download |
| **Call Analytics** | Volume and duration trends | Charts |
| **Call Performance** | Success rate, SLA | Connect rate, conversion from call |
| **Employee Call Activity** | Per-agent stats | Calls per person, talk time |
| **Call Timeline** | Chronological feed | All call events |
| **Daily / Weekly / Monthly Reports** | Management summaries | Export PDF |

---

## 20. Marketing Intelligence

**Why useful:** Track ad spend and ROI — which campaign brings good leads. Connects to Meta/Google Ads later.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Marketing Dashboard** | Spend and ROI overview | CPL, ROAS, ROI, lead quality score, spend trend chart |
| **Marketing Spend** | Where money went | Spend by campaign and platform |
| **Lead Source Analytics** | Best channels | Leads, cost per lead, conversion % per source |
| **Campaign Performance** | Per-campaign results | Campaign name, leads, spend, ROAS |
| **Funnel Performance** | Ad → lead → deal | Funnel chart with drop-off |
| **Lost Leads Analysis** | Why leads were lost | Reason breakdown |
| **Lead Quality** | Score leads from ads | Quality score, lost lead count |
| **ROI & ROAS** | Return on ad spend | ROI %, ROAS ratio |
| **Ad Integrations** | Connect ad platforms | Meta, Google — connect button (future) |

---

## 21. Template Management

**Why useful:** Standard documents and messages — agreements, proposals, emails — with automation triggers so they send automatically.

| Screen | Why useful | What's inside |
|--------|------------|---------------|
| **Dashboard** | All templates overview | Counts, category cards, automation trigger map |
| **Agreement Templates** | Franchise legal formats | Template name, brand, format, edit/preview/triggers |
| **Proposal Templates** | Sales proposal formats | Brand, format |
| **Welcome Templates** | New franchisee welcome | Channel (email/WhatsApp) |
| **Email / WhatsApp Templates** | Message templates | Subject, body, trigger event |
| **Payment Templates** | Invoice and receipt formats | Type, format |
| **Customer Templates** | Onboarding documents | Customer lifecycle docs |

Each list shows: which automation trigger fires this template.

---

## Closing

> Sir, that covers all 21 modules. Every screen is clickable — buttons open the next screen or a popup. Data shown is sample data for demo. This wireframe is for you to review layout and flow. Please tell me which modules look correct, what to add, and what to remove. I will update before we start real development. Thank you.

---

*End of guide*
