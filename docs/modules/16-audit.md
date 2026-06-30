# iFranchise CRM — Audit & Activity Logs

## Audit Dashboard

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

## Audit Timeline

**Why do we need it?** Real-time visibility into system activity is essential for security monitoring. The timeline allows the admin to see what is happening right now and catch unusual behaviour as it occurs.

**What is inside?**
- Live scrolling feed of all system events
- Each event: timestamp, user, action type, module, record affected, IP address
- Filter: by user, module, event type, date range
- Event type colour coding: normal (grey), data change (blue), security event (orange), error (red)
- Pause feed button (to review without new events pushing the view)
- Search the feed

## Audit Explorer

**Why do we need it?** When investigating an incident or responding to an audit, the team needs to find specific events quickly. The Explorer provides the search capability to find any event with precision.

**What is inside?**
- Advanced search: search by any combination of user, date, module, action type, record ID, IP address
- Full-text search across all audit log descriptions
- Saved searches (save frequently used search configurations)
- Results list with export option
- Event count for any search query
- Related events: find all events related to a specific record

## User Activity (Audit)

**Why do we need it?** When investigating an employee's activity — for performance review, security investigation, or a complaint — the admin needs the complete, immutable record of everything that person has done.

**What is inside?**
- User selector
- Date range filter
- Complete activity log for the selected user: every login, every page visited, every record created/edited/deleted, every export, every message sent
- Activity summary: most active time, most accessed modules
- Comparison to peer average activity
- Export user activity report

## Login History

**Why do we need it?** Login patterns reveal a lot about system health and security. Unusual login times, locations, or devices can indicate compromised accounts or policy violations.

**What is inside?**
- Comprehensive login log: user, timestamp, IP address, location, device, browser, session duration
- Filter by user, date range, location, device type
- Successful logins vs failed attempts breakdown
- Geographic map of login locations
- Unusual login flags (first time from new location, login outside normal hours)
- Export login history

## Logout History

**Why do we need it?** Understanding logout patterns helps identify security issues. Users who never log out leave sessions open, increasing risk. Forced logouts by admin indicate security responses. This screen tracks all of these.

**What is inside?**
- Logout events: user, timestamp, logout type (manual, timeout, admin forced, system)
- Session duration per session
- Users with very long sessions (never logging out properly)
- Recent forced logout events by admin

## Failed Login History

**Why do we need it?** Failed login patterns are the most important security indicator. Multiple failures against one account suggest a brute force attempt. Multiple failures from one IP address suggest an attack. This screen makes those patterns visible.

**What is inside?**
- Failed login events: attempted account (email), timestamp, IP address, failure reason, device
- Failed attempts grouped by: account, IP address, geographic location
- Brute force detection: accounts with 5+ failures in a short period highlighted
- Automatic lockout events recorded
- Geographic heat map of failed attempts
- Alert if failure rate spikes suddenly

## Security Events

**Why do we need it?** Security events require immediate attention. This dedicated screen surfaces them separately from normal activity so the admin does not miss critical alerts.

**What is inside?**
- Security event list: event type, user, timestamp, severity (Low, Medium, High, Critical), status (Open, Investigating, Resolved)
- Event types: multiple failed logins, unusual access pattern, admin action outside hours, data bulk export, role permission escalation, API rate limit exceeded, suspicious IP
- Assign to investigator button
- Status update (In Progress, Resolved with notes)
- Alert notification history (was admin notified?)

## System Events

**Why do we need it?** Technical issues in the CRM — errors, integration failures, service disruptions — need to be tracked. The System Events log provides the technical team with the information needed to diagnose and fix problems.

**What is inside?**
- System event log: timestamp, event type, component (email service, SMS, database, API), severity, description
- Error events: full error message and stack trace
- Configuration change events: what was changed, by whom
- Service status changes: when email or WhatsApp service went down and came back
- Performance events: slow queries, high load periods
- Filter by severity or component

## Module Logs

**Why do we need it?** When investigating module-specific issues or conducting a module-specific compliance review, a focused view of just that module's events is more useful than the full system-wide log.

**What is inside?**
- Module selector
- Events log filtered to the selected module
- All standard audit log fields: timestamp, user, action, record, old/new values
- Summary: event count for the period, most common action, most active user in this module
- Export module log

## Data Changes

**Why do we need it?** Data integrity is critical. This screen provides a complete record of every data modification, enabling the team to detect incorrect changes, unauthorised edits, and data corruption.

**What is inside?**
- Log of all data modification events
- Each entry: record type, record ID, field changed, old value, new value, changed by, timestamp
- Filter by module, field name, user, or date range
- Search: "show me all records where the royalty rate field was changed"
- Restoration option: restore a specific field to its previous value (admin only)

## Version History

**Why do we need it?** Beyond tracking individual field changes, version history preserves the full state of a record at each significant change, enabling comprehensive historical comparison.

**What is inside?**
- Record selector
- Version list: date, modified by, summary of changes
- Full record snapshot for each version
- Side-by-side comparison of two versions (differences highlighted)
- Restore to previous version option (admin only, with confirmation)

## Deleted Records

**Why do we need it?** Accidental deletions happen. A lead deleted by mistake, a customer record accidentally removed — without a recycle bin, that data is lost forever. The Deleted Records screen gives the team a recovery safety net.

**What is inside?**
- List of all soft-deleted records: record type, name/ID, deleted by, deletion date, deletion reason
- Search and filter
- Preview deleted record content
- Restore button (brings the record back to active status)
- Permanent delete button (admin only — truly removes after confirmation)
- Auto-purge settings (how long before deleted records are permanently removed)

## Restore Records

**Why do we need it?** Restoring a record is not always straightforward — the record may have dependencies (linked meetings, payments, tasks) that also need to be restored. This screen guides the restore process carefully.

**What is inside?**
- Select records to restore (from the Deleted Records view)
- Restore preview: what will be restored and any dependencies (linked records)
- Confirmation step: "Restoring this lead will also restore 3 associated meetings and 5 notes"
- Restore and notify option (notify the record owner that it has been restored)
- Restore history: log of all restoration actions

## Audit Export

**Why do we need it?** External auditors, legal teams, and compliance officers need audit data in standard formats. This screen provides controlled, formatted export of audit records.

**What is inside?**
- Scope selector: select which type of audit data to export
- Date range picker
- Filter options: by user, module, event type
- Export format: CSV, Excel, PDF
- Export scope warning: "Large exports may take several minutes"
- Scheduled export: auto-export audit data to secure storage monthly
- Export history with download links

## Compliance Report

**Why do we need it?** Compliance is not just about having logs — it is about demonstrating that processes are followed. This screen generates formatted compliance reports that show evidence of proper controls.

**What is inside?**
- Compliance framework selector (internal policy, GDPR, data protection)
- Compliance check list: each check with pass/fail status and evidence
- Overall compliance score
- Non-compliant items with recommended actions
- Generate Compliance Report button (PDF format)
- Historical compliance scores (trend)

## Security Dashboard (Audit)

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

## Suspicious Activity

**Why do we need it?** Not all security threats are obvious. Gradual data exfiltration, unusual access patterns, or behaviour that looks normal individually but suspicious collectively need to be detected intelligently.

**What is inside?**
- Suspicious events list: user, activity description, risk score, timestamp, status
- Risk scoring explanation: why this activity was flagged
- Context: comparison to the user's normal behaviour
- Investigate button: links to the full audit trail for that event
- Mark as legitimate (if investigated and confirmed normal)
- Mark as security incident (triggers formal incident response)
- Automated detection rules configuration

## API Logs

**Why do we need it?** API access can be a security vulnerability. Tracking every API call ensures that external access is legitimate, within configured limits, and not being abused.

**What is inside?**
- API call log: timestamp, API key used, endpoint accessed, HTTP method, response code, data volume
- Filter by API key, endpoint, date range, response code
- Failed API calls (4xx and 5xx errors)
- Rate limit violations
- Unusual volume alerts
- API key usage summary (which keys are most and least active)

## Integration Logs

**Why do we need it?** Integrations can fail silently — data not syncing, messages not sending, payments not updating. This log surfaces integration failures so they can be fixed before they cause business problems.

**What is inside?**
- Integration list with status (active, failing, paused)
- Per integration: data transferred, success rate, last sync time, error count
- Error log for each integration: detailed error messages
- Retry failed sync button
- Integration health dashboard
- Alert settings for integration failures

## Notification Logs (Audit)

**Why do we need it?** For regulatory compliance in certain jurisdictions, there may be requirements to prove that specific communications were sent. This audit-grade log serves that purpose.

**What is inside?**
- Complete notification log: all channels, all recipients, all timestamps, all delivery statuses
- Tamper-proof (cannot be modified)
- Advanced filtering and search
- Export for compliance submissions

## Email Logs

**Why do we need it?** Email is a primary communication channel and a significant source of potential compliance issues — spam complaints, unsubscribes, and delivery failures. This log tracks all email activity.

**What is inside?**
- Complete email sending log: recipient, subject, send time, delivery time, open time, click events
- Bounce management: hard bounces (invalid email) and soft bounces (temporary failure)
- Spam complaint log
- Unsubscribe events
- Email service provider status
- Domain reputation score

## Automation Logs (Audit)

**Why do we need it?** Since automations make system changes without direct human action, their audit trail must be especially comprehensive and tamper-proof.

**What is inside?**
- All automation execution events: triggered at, completed at, triggered by (which record/event), actions performed, records affected, by which workflow
- Cannot be edited or deleted
- Advanced filter and search
- Export for compliance review

## Error Logs

**Why do we need it?** Technical errors need to be tracked, investigated, and resolved. This log gives the technical team the raw error data needed to diagnose problems, monitor system health, and prevent recurring issues.

**What is inside?**
- Error log: timestamp, error type, severity, affected module, user (if applicable), full error message
- Error frequency (same error occurring repeatedly)
- Resolved vs open errors
- Error trend: is the error rate increasing or decreasing?
- Assigned to developer: mark errors for technical team review
- Resolution tracking

## Database Logs

**Why do we need it?** Database health directly affects CRM performance. Slow queries, approaching storage limits, or backup failures need to be caught early before they cause downtime or data loss.

**What is inside?**
- Database performance metrics: query response times, slow queries log
- Database size and growth trend
- Backup status: last successful backup, next scheduled backup, backup integrity
- Connection count: current connections vs limit
- Index health
- Replication status (if applicable)
- Alert thresholds for each metric
