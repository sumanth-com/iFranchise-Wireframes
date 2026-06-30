# iFranchise CRM — User Management

## User Dashboard

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

## User Directory

**Why do we need it?** With dozens of users, a searchable directory makes finding the right person fast. Managers and admins use this for reassigning leads, setting up approvals, and managing team structure.

**What is inside?**
- Search by name, email, phone, or role
- Filter: by role, by department, by branch, by status (Active, Inactive, Locked)
- User cards or table rows: photo, name, designation, department, email, phone, role, last login, status
- Click to open User Details
- Bulk actions: deactivate, export, send invitation
- Add new user button
- Export user list

## User Details

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

## Create User

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

## Edit User

**Why do we need it?** People get promoted, change departments, join different teams, or update their contact information. This screen keeps user records accurate throughout their tenure.

**What is inside?**
- All Create User fields, pre-populated
- Role change: changing role shows a warning about permission changes
- Password reset option
- Account status controls: Activate, Deactivate, Lock, Unlock
- Change history at the bottom
- Save Changes button

## User Profile

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

## User Hierarchy

**Why do we need it?** The hierarchy defines who reports to whom, which is essential for approval routing, escalations, lead assignments, and access control. This screen makes the reporting structure visible and manageable.

**What is inside?**
- Interactive reporting tree showing CEO → Directors → Managers → Team Leads → Executives
- Click on any node to view that user's profile
- Add reporting relationship
- Change manager for a user
- Visualise specific team: filter to show one team or department
- Export hierarchy as PDF or image

## Departments

**Why do we need it?** Departments are used for access control, reporting, and team management. Keeping the department structure current ensures the right people see the right data and reports go to the right managers.

**What is inside?**
- List of all departments with: name, head, user count, sub-departments
- Create department button
- Edit department (name, head, parent department)
- Move users between departments
- Department performance metrics (if analytics are linked)
- Department-specific notification and approval settings

## Teams

**Why do we need it?** Teams are the operational unit for lead assignment, task management, and performance tracking. Managing teams allows for target-setting at the sub-department level.

**What is inside?**
- List of all teams: name, team lead, department, member count
- Create team button
- Edit team (rename, change lead, add/remove members)
- Team performance summary (quick metrics)
- Move member to different team
- Team-specific settings

## Org Chart

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

## User Documents

**Why do we need it?** Employee documentation is part of HR compliance. Storing it in the CRM alongside the user record ensures documents are accessible to HR and management without a separate HR system.

**What is inside?**
- Document upload for the selected user
- Document categories: Employment Letter, NDA, ID Proof, Certificate, Appraisal, Training Record, Other
- Document list: name, type, upload date, expiry, status
- Download and preview
- Access control: only HR and admin can view certain documents

## Leave Management

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

## Skills

**Why do we need it?** Matching leads to executives based on skills improves conversion. If a prospect is interested in a healthcare franchise and one executive has healthcare industry experience, the system can route that lead to them.

**What is inside?**
- Skills list for the user: skill name, proficiency level, certification (if applicable), date acquired
- Add new skill button
- Skills verification (manager can verify/endorse a skill)
- Skills search: find users who have a particular skill
- Skills-based lead routing configuration (admin only)

## User Activity

**Why do we need it?** For performance management, investigation, and security, the admin needs visibility into individual user activity. This screen provides that granular view.

**What is inside?**
- Chronological log of the user's actions: date, time, action type, record affected
- Activity summary: total actions this week, most active time of day
- Module usage breakdown: how much time or activity in each module
- Login and logout events
- Records created, modified, deleted
- Exports performed
- Filter by date range or action type

## Sessions

**Why do we need it?** For security, users and admins need visibility into active sessions. An unexpected session from an unknown device or location is a security alert. The ability to terminate sessions remotely is an important security control.

**What is inside?**
- Active sessions list: device type, browser, IP address, location (city/country), login time
- Session duration
- Terminate session button (admin can log out a user from a specific device)
- Logout all sessions button
- Recent session history (past 30 logins with locations and devices)

## Devices

**Why do we need it?** Device management helps security compliance. Trusted devices can be remembered for faster login. Unrecognised devices can be blocked. This screen manages that device trust list.

**What is inside?**
- List of all registered devices: device name, type, operating system, browser, first access, last access, trusted status
- Mark as trusted button (skips 2FA for this device)
- Remove device (untrusts the device, requiring 2FA on next login)
- Block device (prevents login from this device entirely)

## User Preferences

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

## Account Status

**Why do we need it?** Account status management is a core security and HR function. When someone joins, is promoted, goes on leave, or leaves the company, their account status needs to change accordingly.

**What is inside?**
- Current account status badge
- Status history: every status change with date, reason, and who made the change
- Change status buttons: Activate, Deactivate, Lock, Unlock, Suspend
- Reason field for status changes
- Date-scheduled deactivation (e.g., set to deactivate on last working day)
- Impact of deactivation: "This user owns X leads. They will be unassigned."
- Notifications: who gets notified when this account is deactivated

## User Analytics

**Why do we need it?** Understanding how the team uses the system helps the admin identify training needs, improve adoption, and demonstrate value to management.

**What is inside?**
- Daily/weekly active user count trend
- Feature adoption rates: which modules are most and least used
- Login frequency distribution (daily users vs weekly vs occasional)
- Peak usage hours (when most users are active)
- Users who have not used key features
- New user adoption: how quickly new users become active
- Training completion rates (if linked to a training module)

## Bulk Import

**Why do we need it?** When setting up the CRM for the first time, or when a new branch opens with 20 new employees, creating accounts individually is impractical. Bulk import handles this at scale.

**What is inside?**
- Download template button (pre-formatted Excel or CSV template to fill in)
- Upload filled file button
- Preview of data before import (shows first 10 rows)
- Validation report: rows with errors highlighted (e.g., missing required field, duplicate email)
- Import confirmation
- Import result: "47 users imported successfully, 3 failed — view error details"
- Imported user list with send invitation option

## Bulk Export

**Why do we need it?** HR and compliance teams regularly need user data exports — for audits, for payroll reconciliation, for access reviews. This screen makes that export fast and structured.

**What is inside?**
- Filter options: by role, department, status, date range
- Field selector: choose which user data fields to export
- Export format: CSV, Excel
- Export user activity summary option
- Schedule regular exports
- Export history

## Invite Users

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

## Deactivate User

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

## User Timeline

**Why do we need it?** For HR compliance and security, a complete history of every change to a user's account must be maintained. The timeline provides this in a readable, chronological format.

**What is inside?**
- All account events in order: account created, invitation sent, first login, role changed (from X to Y), department changed, status changed, password reset, 2FA enabled/disabled, account deactivated
- Each event: timestamp, performed by, details
- Cannot be edited or deleted
- Export as PDF
