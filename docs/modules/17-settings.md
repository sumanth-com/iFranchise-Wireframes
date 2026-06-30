# iFranchise CRM — System Configuration

## Settings Dashboard

**Why do we need it?** The admin needs a central map of all system configurations. The dashboard shows what is configured, what is not, and what may need review.

**What is inside?**
- Configuration categories: Company, Organisation, Communication, Security, Integrations, Billing, System
- Status badges per category: Configured, Needs Attention, Incomplete
- Recent settings changes (last 5 changes with who made them)
- System health summary
- Quick links to most commonly used settings
- Alert for critical settings not configured (e.g., email not set up, backup not configured)

## Company Settings

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

## Organisation Structure

**Why do we need it?** The CRM's data access, reporting, and notification rules depend on the organisational structure. This screen establishes that structure as the foundation.

**What is inside?**
- Organisation hierarchy builder: corporate → division → region → branch
- Create new organisational unit (name, type, parent unit, head)
- Activate/deactivate units
- Move units in the hierarchy
- Assign users to units
- Unit-level settings override capability

## Branches

**Why do we need it?** Each branch is a distinct operational unit with its own team, location, and potentially its own brand portfolio focus. Managing branches ensures the CRM reflects the real geographic operational structure.

**What is inside?**
- Branch list: name, city, state, address, branch manager, user count, status
- Create new branch: all details plus assignment of manager and team
- Edit branch details
- Branch-specific settings (operating hours, holiday calendar, currency if international)
- Move users between branches

## Business Hours

**Why do we need it?** Notifications should not be sent at 2 AM. SLAs should be counted only during working hours. Automations need to know when to fire. This screen tells the system what "business hours" means.

**What is inside?**
- Weekly schedule: for each day of the week, set start time and end time
- Day-off toggle per day (Sunday marked as off)
- Break times (lunch break not counted for SLA)
- Time zone selector
- Branch-specific overrides (different branches may have different hours)
- 24/7 option for certain notification types (e.g., system alerts always sent regardless of hours)

## Holiday Calendar

**Why do we need it?** Holidays affect business operations. An SLA of "respond within 2 business days" should not count a national holiday as a business day. This screen defines what counts as a holiday.

**What is inside?**
- Annual holiday list for the current and next year
- Add holiday: date, name, type (national, regional, company-declared), recurring toggle
- Import standard Indian public holidays with one click
- Branch-specific holiday overrides (Maharashtra offices have Maharashtra state holidays)
- Holiday calendar view (monthly view with holidays highlighted)

## Branding Settings

**Why do we need it?** The CRM should feel like the company's own platform, not a generic tool. Branding it with iFranchise's logo and colours creates a professional, cohesive identity that also helps with user trust and adoption.

**What is inside?**
- Company logo upload (header logo, favicon, email logo)
- Primary brand colour (used for buttons, highlights)
- Secondary brand colour
- Header background colour/image
- Login page customisation: background image, welcome message
- Email header and footer branding
- Report header customisation (company name, logo on exported PDFs)

## Logo and Assets

**Why do we need it?** Different contexts require different sizes and formats of the logo. This screen stores the authorised versions so the system always uses the right asset in the right place.

**What is inside?**
- Logo variants: full colour, monochrome, white (for dark backgrounds), transparent
- File formats: PNG, SVG, JPG
- Size variants: standard, small, large, email size
- Icon/favicon upload
- Asset usage guide: where each variant is used
- Upload new asset

## Theme Settings

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

## Email Configuration

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

## SMTP Settings

**Why do we need it?** Organisations with their own email infrastructure (e.g., a company running Microsoft Exchange or Google Workspace for Business) need to connect the CRM to their mail server for consistency and control.

**What is inside?**
- SMTP host/server address
- SMTP port
- Authentication type (TLS/SSL)
- Username and password
- Test connection button
- Outgoing server health status

## WhatsApp Settings

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

## SMS Settings

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

## Notification Settings

**Why do we need it?** Notification behaviour needs to be configured at a system level first, before individual user preferences apply. This screen sets the defaults that the entire system follows.

**What is inside?**
- Default notification channels per event type
- Quiet hours: do not send any non-critical notifications during these hours
- Batch notification settings: group multiple similar notifications into a digest
- Priority override: always send critical alerts regardless of quiet hours
- New user default preferences (what notifications new users receive by default)

## Storage Settings

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

## File Upload Settings

**Why do we need it?** Unrestricted file uploads are a security risk. This screen ensures only safe, appropriate file types are accepted and that files are scanned for malware.

**What is inside?**
- Maximum file size per upload
- Maximum total storage per user
- Allowed file types (PDF, JPG, PNG, DOCX, XLSX, etc.)
- Blocked file types (EXE, JS, etc.)
- Virus/malware scan toggle (with connected scanning service)
- Image compression settings (automatically resize large images)
- PDF password protection option

## Security Settings

**Why do we need it?** Security policies need to be set at the system level to protect all users and data. This central screen defines the security standard for the entire organisation.

**What is inside?**
- Two-factor authentication: enforce for all users, for admins only, or optional
- Session timeout duration (how long before inactivity logs out a user)
- Trusted IP ranges (only allow access from office IPs)
- IP blocking: block specific IP addresses from accessing the system
- Security event alerts: who gets notified for security events
- Data encryption settings (at rest and in transit)
- CSRF and XSS protection toggles

## Password Policy

**Why do we need it?** Weak passwords are the most common source of security breaches. This screen enforces a strong password standard across all CRM users, automatically.

**What is inside?**
- Minimum password length
- Complexity requirements: uppercase required, number required, special character required
- Password expiry: force password change every X days
- Password history: cannot reuse last X passwords
- Password strength indicator threshold (reject passwords below "Strong")
- First-time login: force password change
- Admin override: reset any user's password

## Multi-Factor Authentication (MFA)

**Why do we need it?** MFA is one of the most effective security controls available. This screen configures how MFA works across the system — making it easy to enforce for the right users.

**What is inside?**
- MFA enforcement level: All users, Admin users only, Optional for all
- MFA methods: SMS OTP, Email OTP, Authenticator App (TOTP)
- Recovery options: backup codes, email recovery
- Bypass window: allow temporary bypass for X days for new users
- Trusted device duration: how long a device is trusted before requiring MFA again
- MFA status per user (admin view)

## Session Management

**Why do we need it?** Unmanaged sessions are a security risk. Long-lived sessions on unattended computers, multiple simultaneous logins from different locations, and sessions that never expire all increase the attack surface.

**What is inside?**
- Session timeout (inactivity timeout): how many minutes before automatic logout
- Maximum session duration: absolute maximum regardless of activity
- Concurrent session limit: allow 1, 2, or unlimited simultaneous logins
- Remember me duration: how long "remember me" keeps a session active
- Session invalidation on password change
- Admin: view all active sessions across all users and terminate any

## API Settings

**Why do we need it?** The API is the interface for all external system integrations. Proper configuration ensures the API is secure, performant, and only accessible to authorised consumers.

**What is inside?**
- API version management (current supported versions)
- Default rate limit (requests per minute per API key)
- Custom rate limits per API key
- IP whitelist for API access
- API access log retention period
- Webhook timeout settings
- API deprecation schedule (when old versions will stop working)

## API Keys Management

**Why do we need it?** Every external system that accesses the CRM uses an API key. Managing these keys — who they belong to, what they can access, and revoking them when no longer needed — is essential for security.

**What is inside?**
- API key list: name, created by, created date, last used, permissions scope, status
- Create new API key: name, permissions scope, IP restriction, expiry date
- Copy key button (key shown only once on creation)
- Revoke key button (immediately disables the key)
- Usage statistics per key
- Key rotation recommendation (flag keys older than X days)

## Webhooks Settings

**Why do we need it?** Webhooks need proper security and reliability configuration — authentication, retry logic, and timeout settings — to ensure data is transferred reliably and securely.

**What is inside?**
- Default webhook authentication method (HMAC signature)
- Secret key for webhook validation
- Retry configuration: number of retries, delay between retries
- Timeout per webhook call
- Webhook log retention period
- Test webhook URL configuration
- Webhook health status overview

## Integrations Overview

**Why do we need it?** The CRM connects to many external systems. A central overview helps the admin manage all integrations at a glance.

**What is inside?**
- Integration categories: Communication, Calendar, Payment, Storage, Analytics, CRM, ERP, HR
- For each integration: logo, name, description, status (Connected, Available, Error), connect/disconnect button
- Quick health check per connected integration
- Integration logs link
- Marketplace: available integrations that can be enabled

## Google Workspace Integration

**Why do we need it?** If the company uses Google Workspace for email and productivity, integrating it with the CRM creates seamless workflows — log in with Google, sync meetings to Google Calendar, access files from Google Drive.

**What is inside?**
- Google OAuth connection setup
- Single Sign-On (SSO) with Google toggle
- Google Calendar sync: two-way sync of meetings
- Google Drive integration: store and access documents
- Gmail thread sync (optional)
- Connected accounts
- Scopes and permissions granted

## Calendar Integration

**Why do we need it?** Meetings created in the CRM should automatically appear in the executive's personal calendar so they are reminded regardless of whether they are in the CRM.

**What is inside?**
- Supported calendar platforms: Google Calendar, Microsoft Outlook, Apple Calendar
- Connection status per platform
- Sync direction: one-way (CRM to calendar) or two-way
- Sync frequency
- Calendar to sync to (if multiple calendars in the account)
- Conflict resolution settings

## Payment Gateway Settings

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

## Feature Flags

**Why do we need it?** Not all features need to be available to all users all the time. Feature flags allow controlled feature rollouts — enable a new feature for the pilot team first, then roll it out to everyone. Or disable a feature that is not yet ready.

**What is inside?**
- Feature list with toggle switches
- Feature descriptions
- User/role targeting: enable for specific users or roles only
- Gradual rollout: enable for X% of users randomly
- Feature dependencies: some features require others to be enabled first
- Feature history: when each feature was toggled and by whom

## Custom Fields

**Why do we need it?** Every business has unique data requirements. iFranchise may need to track fields specific to franchise management — like "investment source" or "preferred operational city" — that standard CRM templates do not include. Custom fields make the system fit the business perfectly.

**What is inside?**
- Select record type (Lead, Customer, Brand, Franchise Model, etc.)
- Custom field list for that record type
- Create new field: name, label, field type (text, number, dropdown, date, checkbox, file), required/optional, default value
- Field ordering (where it appears on the form)
- Visibility settings (which roles see this field)
- API field name (for integrations)
- Delete field (with data impact warning)

## Numbering Sequences

**Why do we need it?** Consistent, unique numbering is essential for traceability, legal compliance, and professional documentation. Invoice numbers must follow a specific format for GST compliance. Agreement numbers need to be unique and sequential. This screen defines all those formats.

**What is inside?**
- Record type selector (Lead, Customer, Invoice, Agreement, Payment, Meeting, etc.)
- Current format: prefix, year, month, sequence number configuration
- Format example preview
- Current counter value
- Reset sequence (with confirmation and audit log)
- Custom format builder

## Workflow Configuration

**Why do we need it?** Workflows need to be managed at a system level — setting limits on execution to prevent runaway automations, defining retry policies for failures, and configuring logging levels.

**What is inside?**
- Maximum concurrent workflow executions
- Execution timeout per workflow (maximum time before a workflow is forced to stop)
- Retry policy: how many times to retry a failed action before marking as failed
- Error notification: who gets notified for workflow failures
- Workflow log retention period
- Test environment configuration

## Automation Settings

**Why do we need it?** Automations need system-level controls separate from individual workflow configurations. Global settings ensure all automations respect business rules like quiet hours and priority levels.

**What is inside?**
- Global automation pause toggle (pause all automations for maintenance)
- Blackout periods (time windows when no automations run)
- Action rate limiting (maximum actions per minute system-wide)
- Priority settings: critical automations always run first
- Global conditions: apply to all workflows (e.g., never run automations for archived leads)

## Backup Settings

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

## Database Settings

**Why do we need it?** The database is the engine of the CRM. Proper configuration ensures good performance and stability as data volumes grow.

**What is inside?**
- Database connection details (read-only for reference)
- Connection pool size
- Query timeout configuration
- Slow query threshold (log queries slower than X milliseconds)
- Database maintenance schedule (auto-vacuum, index rebuild)
- Database size and growth chart
- Table statistics

## Cache Settings

**Why do we need it?** Caching dramatically improves CRM performance. Data that does not change frequently — like dropdown lists, user permissions, configuration values — is cached so the system does not repeatedly query the database for the same information.

**What is inside?**
- Cache provider (Redis, Memcached)
- Cache TTL (time-to-live) for different data types
- Cache usage statistics (hit rate, size)
- Flush cache button (clear all cached data)
- Cache key patterns

## Queue Settings

**Why do we need it?** Long-running tasks should not block the user interface. Queue settings ensure these tasks run efficiently in the background without affecting CRM performance.

**What is inside?**
- Queue workers count (how many parallel background processes)
- Job priority configuration
- Queue health dashboard
- Pending jobs count
- Failed jobs list
- Retry failed jobs button
- Queue pause/resume

## Environment Variables

**Why do we need it?** Technical configurations like database URLs, API endpoints, encryption keys, and environment-specific settings need to be managed securely and centrally. This screen provides that management interface.

**What is inside?**
- Variable list: key, value (masked for sensitive values), environment (development, staging, production)
- Add new variable
- Edit variable value
- Sensitive variable flag (masks the value from display)
- Variable usage audit
- Export configuration (admin only, for DevOps reference)

## System Logs (Settings)

**Why do we need it?** When troubleshooting issues or monitoring application health, the technical team needs access to the raw application logs. This screen provides that access with search and filter capabilities.

**What is inside?**
- Log level selector: Info, Warning, Error, Critical
- Log stream with timestamps and component tags
- Search logs by keyword
- Date range filter
- Download logs button
- Log retention configuration

## Maintenance Mode

**Why do we need it?** System updates and maintenance require controlled downtime. Maintenance mode prevents users from accessing the system during critical operations, preventing data corruption from mid-transaction interruptions.

**What is inside?**
- Maintenance mode toggle (on/off)
- Maintenance message customisation (what users see)
- Scheduled maintenance: set start and end time for automatic maintenance window
- Exempt users: specific admins who can still access the system during maintenance
- Countdown notification: notify all users X hours before maintenance
- Estimated duration display

## License Settings

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

## Subscription Settings

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

## Localization Settings

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

## Currency Settings

**Why do we need it?** Financial figures need to be displayed in the correct currency with proper formatting. This screen ensures consistency.

**What is inside?**
- Primary currency (INR for India)
- Currency display format (₹ symbol, INR code, lakh/crore vs million/billion)
- Secondary currencies (if multi-currency support is needed)
- Exchange rate configuration or integration
- Currency display on invoices, reports, and analytics

## Timezone Settings

**Why do we need it?** Timestamps, meeting times, and scheduled automations depend on the correct time zone. This screen ensures the system operates in the right temporal context.

**What is inside?**
- System default time zone (IST for India-based operations)
- User-level override (for international team members)
- Daylight saving time handling (not applicable for IST, but for international)
- How timestamps are displayed in logs and audit trails

## Language Settings

**Why do we need it?** If the team includes members more comfortable in regional languages, or if the platform needs to be presented in a specific language, the Language Settings make that possible.

**What is inside?**
- Default interface language
- Available language packs (installed and available for installation)
- Translation completeness percentage per language
- Language selector visibility (whether users can change their own language)
- Custom translation overrides (change specific terms to match company terminology)

## Audit Settings

**Why do we need it?** Audit logging has a storage cost. This screen lets the admin configure the right balance — logging enough for compliance and security without logging every trivial action.

**What is inside?**
- Log level by category: All Events, Important Events Only, Security Events Only, None
- Retention period: how many months to keep audit logs
- Log storage encryption
- Who can view audit logs (role restrictions)
- Real-time alerting threshold settings
- Compliance mode: ensure certain events are always logged regardless of settings

## Data Retention Settings

**Why do we need it?** Data protection laws and storage costs require defined retention policies. This screen ensures the system automatically manages data lifecycles without requiring manual cleanup.

**What is inside?**
- Retention period by data type: leads (active, inactive, archived), customers, documents, audit logs, communication logs, notifications
- Archive vs permanent delete option (archive preserves data in read-only form; delete removes it)
- Legal hold: mark certain records to never be auto-deleted regardless of retention policy
- Retention policy review reminders
- GDPR right-to-deletion compliance tools

## GDPR and Privacy Settings

**Why do we need it?** While GDPR is primarily a European regulation, India's DPDP (Digital Personal Data Protection) Act has similar requirements. Managing consent and data privacy properly protects the business from legal risk.

**What is inside?**
- Privacy policy URL
- Cookie consent configuration
- Data processing records (what data is collected, why, from whom, how long)
- Right to Access: generate a report of all data held about a specific person
- Right to Deletion: process a deletion request for a specific person's data
- Data export for subjects (send a person all data held about them)
- Consent log: when each contact gave consent for communication

## Terms and Policies

**Why do we need it?** Users of the CRM — especially franchise partners with access — must agree to usage terms. This screen stores and manages those agreements.

**What is inside?**
- Terms of Service document (upload or editor)
- Privacy Policy document
- Data Processing Agreement (for franchise partners)
- Version history of each policy
- User acceptance tracking: which users have agreed to current terms
- Force re-acceptance toggle (when terms are updated, prompt all users to accept)

## About

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
