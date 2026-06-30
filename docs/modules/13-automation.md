# iFranchise CRM — Automation Engine

## Automation Dashboard

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

## Workflow List

**Why do we need it?** As the team builds more automations, they need a central place to manage them all — see which are active, which are paused, and what each one does.

**What is inside?**
- Search by workflow name
- Filter: by category (Lead, Meeting, Payment, etc.), by status (Active, Paused, Draft, Archived), by creator
- Each workflow: name, category, trigger type, number of actions, last triggered, status, run count
- Click to open Workflow Details
- Toggle to activate/pause
- Duplicate workflow button
- Create new workflow button

## Workflow Builder

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

## Create Workflow

**Why do we need it?** Good workflow management starts with proper naming and categorisation. This screen ensures every automation is clearly described before building starts.

**What is inside?**
- Workflow name field
- Description field (what does this workflow do?)
- Category selector (Lead Management, Meeting, Payment, Notification, Approval, HR, Custom)
- Trigger type preview selector (choose what kind of trigger to start with)
- Tags (for easier discovery later)
- Start building button (takes user to the Workflow Builder with this metadata saved)
- Save as template option

## Edit Workflow

**Why do we need it?** Business processes change. A workflow that was set up six months ago may need updating — the WhatsApp message needs to be changed, a new action needs to be added, or a condition needs to be adjusted.

**What is inside?**
- All elements of the Workflow Builder, pre-populated with the existing workflow
- Change history panel (who changed what and when)
- Impact warning: "This workflow has run X times. Editing may affect in-progress executions."
- Save Draft (test before going live) vs Save and Publish options
- Version rollback: revert to a previous version of the workflow

## Workflow Details

**Why do we need it?** When a workflow is running or has run many times, the team needs to understand its full configuration, how many times it has executed, what the success rate is, and what recent executions looked like.

**What is inside?**
- Workflow name, category, status, created by, created date
- Visual summary of the workflow (simplified flow diagram)
- Execution statistics: total runs, successful, failed, in-progress
- Last execution: when it ran and what happened
- Average execution time
- Execution history list (last 20 runs with status)
- Edit, Pause, Duplicate, Archive buttons

## Workflow Triggers

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

## Workflow Actions

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

## Workflow Conditions

**Why do we need it?** Without conditions, automations apply to every record equally. Conditions make them smart — send a WhatsApp only if the lead is from Maharashtra, assign to executive A only if they have fewer than 30 leads, generate an invoice only if the payment type is royalty.

**What is inside?**
- Condition types: equal to, not equal to, greater than, less than, contains, is empty, is not empty
- Field selector for the condition (any field in the linked record)
- Multi-condition support with AND/OR logic
- Condition groups (nested conditions)
- Condition preview: shows sample records that would pass or fail the condition
- Test condition against real data

## Workflow Schedule

**Why do we need it?** Some automations need to run at regular intervals — daily, weekly, monthly — regardless of whether a specific event happens. Payment reminders on the 1st of every month, weekly performance summaries, monthly compliance checks.

**What is inside?**
- List of all scheduled automations with their schedule (daily at 9 AM, every Monday, 1st of every month, etc.)
- Schedule configuration: cron-style scheduling with a friendly interface
- Time zone settings
- One-time scheduled runs (run once at a specific future time)
- Pause and resume schedule
- Run immediately button (trigger the scheduled workflow outside its schedule)
- Last run and next run timestamps

## Execution History

**Why do we need it?** When something goes wrong — a message was not sent, a task was not created, an assignment did not happen — the Execution History shows exactly what the automation did and where it failed. It is the debugging tool for automations.

**What is inside?**
- List of all past automation executions: workflow name, trigger event, started at, completed at, status (Success, Failed, Partial)
- Click to see execution details: each action step with success/failure status and any error message
- Filter: by workflow, by status, by date range
- Retry failed execution button
- Duration per execution
- Input data (the record that triggered the workflow)
- Output data (what the workflow created or changed)

## Failed Automations

**Why do we need it?** Failed automations mean the business process did not complete as expected. A failed payment reminder means a franchisee was not contacted. A failed lead assignment means a lead is sitting without an owner. This screen ensures failures are caught and addressed.

**What is inside?**
- List of all failed executions: workflow name, failure time, trigger event, error summary
- Error detail panel: full error message, which action step failed, and why
- Retry button per failure
- Bulk retry button
- Escalate to admin option
- Filter by workflow, date range, or error type
- Common errors summary (to identify systemic issues)

## Automation Analytics

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

## Automation Templates

**Why do we need it?** Not every team has the time or expertise to build automations from scratch. Templates provide proven, best-practice workflows that can be deployed quickly and customised as needed.

**What is inside?**
- Template library organised by category: Lead Management, Payment Collection, Meeting Management, Customer Onboarding, etc.
- Each template: name, description, what it automates, estimated setup time, preview
- Use This Template button (creates a draft workflow from the template)
- Customise before activating option
- Community templates (if applicable — shared by other users)
- Most used templates

## Automation Testing

**Why do we need it?** A poorly configured automation can cause damage at scale — sending the wrong message to hundreds of contacts, assigning leads to the wrong person, or generating incorrect invoices. Testing before activation prevents these problems.

**What is inside?**
- Select workflow to test
- Test mode: use simulated data or select a real record from the system
- Step-by-step execution trace: shows what the workflow would do at each step without actually doing it
- Conditional logic test: shows which branch the workflow would take and why
- Test with multiple scenarios (test the happy path and edge cases)
- Test result report: did the workflow behave as expected?
- Issues found highlight with suggested fixes

## Webhooks

**Why do we need it?** Webhooks enable real-time integration with external systems — a lead form on the website instantly creates a lead in the CRM, or a payment confirmed in a payment gateway automatically updates the CRM record. This connectivity is what makes the CRM the hub of the business.

**What is inside?**
- Outgoing webhooks list: name, URL, event trigger, status, last triggered, success rate
- Create outgoing webhook: URL, authentication header, events to send, payload format
- Incoming webhooks list: name, endpoint URL (for external systems to send data to), status
- Test webhook button
- Webhook logs: recent payloads sent and received
- Retry failed webhook deliveries

## API Management

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

## Email Automation

**Why do we need it?** Email is the formal communication backbone for customer and lead correspondence. Automating routine emails — welcome messages, invoice emails, renewal reminders, follow-up sequences — saves significant time and ensures consistency.

**What is inside?**
- List of all email automation rules
- Create email automation: trigger, recipient, email template, delay, conditions
- Email sequence builder: set up a series of emails over time (day 1, day 3, day 7)
- Performance: open rate, click rate per automated email
- Unsubscribe management
- Email suppression list

## WhatsApp Automation

**Why do we need it?** WhatsApp has the highest read and response rate of any digital channel. Automating routine WhatsApp messages — lead responses, meeting reminders, payment reminders — delivers those high engagement rates at scale without requiring manual sending.

**What is inside?**
- All WhatsApp automation rules
- Template selection (only Meta-approved templates can be used in bulk/automated sending)
- Trigger, condition, and timing configuration
- WhatsApp API status
- Message delivery monitoring
- Opt-out management (customers who have opted out of WhatsApp communication)
- Two-way conversation handling (when a customer replies)

## SMS Automation

**Why do we need it?** SMS works even without internet and reaches numbers that may not have WhatsApp. For critical reminders — payment due, meeting scheduled — SMS provides a reliable fallback and complement to WhatsApp.

**What is inside?**
- SMS automation rules list
- Create SMS automation: trigger, recipient, message template, delay, conditions
- DND compliance check (automatic filtering of DND numbers)
- SMS delivery tracking
- Character count management (keep messages within one SMS for cost efficiency)

## Task Automation

**Why do we need it?** Tasks ensure follow-through on events. When a meeting is marked as completed, a follow-up task should automatically be created. When a lead reaches the "Proposal Sent" stage, a 3-day follow-up task should be auto-created. This automation ensures nothing falls through after key events.

**What is inside?**
- Task automation rules: what event triggers a task, what the task is, who it is assigned to, when it is due
- Task template library: common task types with pre-filled details
- Create task automation
- Task creation log: all tasks created by automation
- Assignment rules: assign to the record owner, specific role, or rotation

## Approval Automation

**Why do we need it?** Approvals should not require someone to manually submit a request every time. When a lead is ready to convert and requires a discount, or when a payment above a threshold is recorded, the approval request should be created automatically and routed to the right person.

**What is inside?**
- Approval trigger rules: when to automatically create an approval request
- Approval type and workflow assignment
- Escalation automation: if approval is not given within X hours, auto-escalate
- Auto-approve rules: if conditions are fully met, auto-approve without human review
- Approval reminder automation: send reminders to approvers who have not acted

## Notification Automation

**Why do we need it?** With hundreds of events happening in the system daily, manual notification is impossible. This screen ensures that every significant event — a new hot lead, a failed payment, an expiring agreement — automatically notifies the relevant team member.

**What is inside?**
- Notification automation rules: event, recipients, notification type, channel, message
- Priority levels for notifications (urgent, normal, informational)
- Notification suppression rules (do not send between 10 PM and 8 AM)
- Digest vs immediate notification options
- Notification testing

## Automation Audit

**Why do we need it?** Automation actions affect real business data. If an automation incorrectly updated 50 customer records, the audit log provides the evidence and context needed to understand what happened and reverse it.

**What is inside?**
- Log of all automation events: workflow created/modified/deleted/activated/paused, execution events
- Each entry: timestamp, user, action, workflow name, affected records
- Cannot be edited or deleted
- Filter by workflow, user, date range, action type
- Export as PDF or CSV
