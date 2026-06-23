/* Audit & Activity Logs — Mock Data */

const AUDIT_DATA = {
  viewRoles: ["Super Admin", "CEO", "Admin", "Security Administrator", "Operations Manager", "Compliance Officer", "Team Lead", "Sales Executive (Own Activity Only)"],
  categories: [
    "Authentication", "Lead Management", "Customer Management", "Brand Management", "Franchise Models",
    "Meetings", "Approvals", "Payments", "Documents", "Notifications", "Automation", "Reports",
    "User Management", "Roles", "Settings", "System", "API", "Database"
  ],
  eventTypes: [
    "Create", "Update", "Delete", "Restore", "Login", "Logout", "Approve", "Reject",
    "Assign", "Import", "Export", "Upload", "Download", "View", "Share", "Archive"
  ],
  modules: [
    "Lead Management", "Customer Management", "Brand Management", "Accounts", "Documents",
    "Approvals", "Meetings", "Reports", "Automation", "Settings", "User Management", "Roles"
  ],
  users: ["Abdul Syed", "Abrar", "Himani Bhargava", "Om Anil", "Sumanth", "Fazil", "Diksha", "Akshita", "Swetha"],

  kpis: {
    todayActivities: 1842,
    failedLogins: 23,
    successfulLogins: 156,
    securityAlerts: 5,
    criticalEvents: 2,
    recentChanges: 384,
    automationExecutions: 412,
    apiCalls: 12840,
    databaseChanges: 89
  },

  logs: [
    {
      auditId: "AUD-2024-12847", timestamp: "25 Jun 2024, 10:42:18 AM", user: "Abdul Syed", role: "Sales Executive",
      department: "Sales", module: "Lead Management", action: "Update", recordId: "LEAD-2024-089",
      before: "status: Qualified", after: "status: Proposal Sent", reason: "Follow-up call completed",
      status: "Success", severity: "Info", ip: "103.**.**.42", device: "Laptop", browser: "Chrome 126",
      os: "Windows 11", location: "Bengaluru"
    },
    {
      auditId: "AUD-2024-12846", timestamp: "25 Jun 2024, 10:38:05 AM", user: "Himani Bhargava", role: "Sales Manager",
      department: "Sales", module: "Lead Management", action: "Assign", recordId: "LEAD-2024-092",
      before: "assigned_to: —", after: "assigned_to: Diksha", reason: "Hyderabad territory",
      status: "Success", severity: "Info", ip: "49.**.**.18", device: "MacBook", browser: "Safari 17",
      os: "macOS 14", location: "Bengaluru"
    },
    {
      auditId: "AUD-2024-12845", timestamp: "25 Jun 2024, 10:35:22 AM", user: "Unknown", role: "—",
      department: "—", module: "Authentication", action: "Login", recordId: "—",
      before: "—", after: "—", reason: "Invalid credentials",
      status: "Failed", severity: "High", ip: "185.**.**.12", device: "Unknown", browser: "—",
      os: "—", location: "Foreign"
    },
    {
      auditId: "AUD-2024-12844", timestamp: "25 Jun 2024, 10:30:11 AM", user: "Fazil", role: "Accounts",
      department: "Accounts", module: "Payments", action: "Approve", recordId: "PAY-2024-0456",
      before: "status: Pending Verification", after: "status: Verified", reason: "NEFT confirmed",
      status: "Success", severity: "Medium", ip: "59.**.**.33", device: "Laptop", browser: "Chrome 126",
      os: "Windows 11", location: "Mumbai"
    },
    {
      auditId: "AUD-2024-12843", timestamp: "25 Jun 2024, 10:28:44 AM", user: "Om Anil", role: "Operations Manager",
      department: "Operations", module: "Approvals", action: "Approve", recordId: "APR-2024-078",
      before: "status: Pending", after: "status: Approved", reason: "Discount within policy",
      status: "Success", severity: "Info", ip: "103.**.**.01", device: "Laptop", browser: "Chrome 126",
      os: "Windows 11", location: "Bengaluru"
    },
    {
      auditId: "AUD-2024-12842", timestamp: "25 Jun 2024, 10:15:33 AM", user: "Sumanth", role: "CEO",
      department: "Executive", module: "Reports", action: "Export", recordId: "RPT-Q2-2024",
      before: "—", after: "format: PDF", reason: "Board meeting",
      status: "Success", severity: "Info", ip: "103.**.**.01", device: "iPad", browser: "Safari",
      os: "iOS 17", location: "Bengaluru"
    },
    {
      auditId: "AUD-2024-12841", timestamp: "25 Jun 2024, 10:10:02 AM", user: "Swetha", role: "HR",
      department: "HR", module: "User Management", action: "Create", recordId: "EMP-2024-036",
      before: "—", after: "user: Priya Nair", reason: "New hire onboarding",
      status: "Success", severity: "Info", ip: "103.**.**.55", device: "Laptop", browser: "Chrome 126",
      os: "Windows 11", location: "Bengaluru"
    },
    {
      auditId: "AUD-2024-12840", timestamp: "25 Jun 2024, 09:55:17 AM", user: "System", role: "System",
      department: "—", module: "Automation", action: "Execute", recordId: "WF-2024-012",
      before: "—", after: "status: Success", reason: "Trigger: Lead Created",
      status: "Success", severity: "Info", ip: "—", device: "Server", browser: "—",
      os: "Linux", location: "—"
    },
    {
      auditId: "AUD-2024-12839", timestamp: "25 Jun 2024, 09:42:08 AM", user: "Akshita", role: "Brand Owner",
      department: "Marketing", module: "Documents", action: "Upload", recordId: "DOC-2024-234",
      before: "—", after: "file: brand_deck_v3.pdf", reason: "Q2 marketing update",
      status: "Success", severity: "Info", ip: "80.**.**.22", device: "Laptop", browser: "Chrome 126",
      os: "Windows 11", location: "Chennai"
    },
    {
      auditId: "AUD-2024-12838", timestamp: "25 Jun 2024, 09:30:00 AM", user: "Diksha", role: "Team Lead",
      department: "Sales", module: "Authentication", action: "Login", recordId: "—",
      before: "—", after: "session_id: sess_***", reason: "—",
      status: "Success", severity: "Info", ip: "106.**.**.77", device: "Mobile", browser: "App",
      os: "Android 14", location: "Hyderabad"
    }
  ],

  loginHistory: [
    { user: "Abdul Syed", time: "25 Jun 9:00 AM", ip: "103.**.**.42", device: "Chrome · Windows", location: "Bengaluru", status: "Success" },
    { user: "Himani Bhargava", time: "25 Jun 8:30 AM", ip: "49.**.**.18", device: "Safari · macOS", location: "Bengaluru", status: "Success" },
    { user: "Unknown", time: "25 Jun 10:35 AM", ip: "185.**.**.12", device: "—", location: "Foreign", status: "Failed" },
    { user: "Sumanth", time: "25 Jun 8:00 AM", ip: "103.**.**.01", device: "Chrome · macOS", location: "Bengaluru", status: "Success" },
    { user: "Abrar", time: "24 Jun 6:15 PM", ip: "106.**.**.88", device: "Mobile App", location: "Hyderabad", status: "Success" }
  ],

  logoutHistory: [
    { user: "Fazil", time: "24 Jun 6:00 PM", ip: "59.**.**.33", session: "4h 12m", reason: "Manual logout" },
    { user: "Diksha", time: "24 Jun 8:30 PM", ip: "106.**.**.77", session: "2h 30m", reason: "Session timeout" },
    { user: "Abdul Syed", time: "24 Jun 7:00 PM", ip: "103.**.**.42", session: "10h 0m", reason: "Manual logout" }
  ],

  failedLogins: [
    { time: "25 Jun 10:35 AM", user: "admin@franchisecrm.com", ip: "185.**.**.12", attempts: 5, reason: "Invalid password", severity: "High" },
    { time: "25 Jun 08:12 AM", user: "unknown@test.com", ip: "45.**.**.99", attempts: 3, reason: "User not found", severity: "Medium" },
    { time: "24 Jun 11:45 PM", user: "abdul.syed@franchisecrm.com", ip: "103.**.**.42", attempts: 2, reason: "MFA failed", severity: "Medium" },
    { time: "24 Jun 03:22 AM", user: "root", ip: "91.**.**.44", attempts: 12, reason: "Brute force blocked", severity: "Critical" }
  ],

  securityEvents: [
    { id: "SEC-089", type: "Brute Force Blocked", user: "—", detail: "12 failed attempts from 91.**.**.44", time: "24 Jun 03:22 AM", severity: "Critical" },
    { id: "SEC-088", type: "Permission Escalation", user: "Abrar", detail: "Attempted Roles.Configure — denied", time: "24 Jun 18:30", severity: "High" },
    { id: "SEC-087", type: "Suspicious IP", user: "—", detail: "Login attempt from foreign IP blocked", time: "25 Jun 10:35", severity: "High" },
    { id: "SEC-086", type: "MFA Bypass Attempt", user: "—", detail: "Invalid session token reuse", time: "23 Jun 22:00", severity: "Critical" },
    { id: "SEC-085", type: "Bulk Export", user: "Sumanth", detail: "Exported 2,400 audit records", time: "22 Jun 17:00", severity: "Medium" }
  ],

  systemEvents: [
    { time: "25 Jun 06:00 AM", event: "Scheduled Backup", detail: "Database backup completed — 2.4 GB", status: "Success" },
    { time: "25 Jun 02:00 AM", event: "Index Rebuild", detail: "Search index optimized", status: "Success" },
    { time: "24 Jun 11:00 PM", event: "Maintenance Window", detail: "Cache cleared, 0 errors", status: "Success" },
    { time: "24 Jun 04:15 AM", event: "Integration Sync", detail: "Razorpay webhook retry — 3 failures", status: "Warning" }
  ],

  deletedRecords: [
    { module: "Lead Management", recordId: "LEAD-2024-067", name: "Vikram Singh", deletedBy: "Himani Bhargava", deletedAt: "20 Jun 2024", reason: "Duplicate entry" },
    { module: "Customer Management", recordId: "CUS-2023-112", name: "Archived Customer", deletedBy: "Om Anil", deletedAt: "18 Jun 2024", reason: "Data cleanup" },
    { module: "Documents", recordId: "DOC-2024-198", name: "Draft Agreement v1", deletedBy: "Abdul Syed", deletedAt: "15 Jun 2024", reason: "Superseded" }
  ],

  versionHistory: [
    { recordId: "LEAD-2024-089", module: "Lead Management", version: 4, user: "Abdul Syed", time: "25 Jun 10:42 AM", change: "Status → Proposal Sent" },
    { recordId: "LEAD-2024-089", module: "Lead Management", version: 3, user: "Himani Bhargava", time: "22 Jun 2:00 PM", change: "Assigned to Abdul Syed" },
    { recordId: "CUS-2024-001", module: "Customer Management", version: 2, user: "Fazil", time: "21 Jun 11:00 AM", change: "Payment status updated" }
  ],

  apiLogs: [
    { time: "25 Jun 10:42 AM", method: "POST", endpoint: "/api/v1/leads/089", user: "Abdul Syed", status: 200, duration: "124ms" },
    { time: "25 Jun 10:35 AM", method: "GET", endpoint: "/api/v1/reports/export", user: "Sumanth", status: 200, duration: "2.4s" },
    { time: "25 Jun 10:15 AM", method: "POST", endpoint: "/api/v1/webhooks/razorpay", user: "System", status: 401, duration: "45ms" },
    { time: "25 Jun 09:30 AM", method: "PATCH", endpoint: "/api/v1/users/036", user: "Swetha", status: 200, duration: "89ms" }
  ],

  integrationLogs: [
    { integration: "SendGrid", event: "Email sent", status: "Success", time: "25 Jun 10:42 AM", detail: "Meeting reminder → abdul.syed@..." },
    { integration: "Twilio SMS", event: "SMS failed", status: "Failed", time: "25 Jun 10:35 AM", detail: "Gateway timeout" },
    { integration: "Razorpay", event: "Payment webhook", status: "Success", time: "25 Jun 10:30 AM", detail: "PAY-2024-0456 verified" },
    { integration: "WhatsApp API", event: "Message delivered", status: "Success", time: "25 Jun 09:15 AM", detail: "Payment reminder" }
  ],

  notificationLogs: [
    { id: "NOT-089", type: "Approval Required", recipient: "Om Anil", channel: "In-App", status: "Delivered", time: "25 Jun 10:20 AM" },
    { id: "NOT-088", type: "Meeting Reminder", recipient: "Abdul Syed", channel: "Push", status: "Read", time: "25 Jun 09:30 AM" },
    { id: "NOT-087", type: "Payment Received", recipient: "Fazil", channel: "Email", status: "Delivered", time: "24 Jun 2:35 PM" }
  ],

  emailLogs: [
    { to: "abdul.syed@franchisecrm.com", subject: "Meeting Reminder — Brand Presentation", status: "Delivered", time: "25 Jun 9:30 AM", opens: 1 },
    { to: "rahul@email.com", subject: "Welcome to Odette Franchise", status: "Delivered", time: "25 Jun 10:42 AM", opens: 0 },
    { to: "invalid@email", subject: "Payment Due Reminder", status: "Bounced", time: "24 Jun 10:00 AM", opens: 0 }
  ],

  automationLogs: [
    { executionId: "EX-08921", workflow: "Lead Follow-up — Odette", trigger: "Lead Created", status: "Success", duration: "0.8s", time: "25 Jun 10:42 AM" },
    { executionId: "EX-08919", workflow: "Meeting Reminder", trigger: "Meeting Scheduled", status: "Failed", duration: "2.4s", time: "25 Jun 10:35 AM" },
    { executionId: "EX-08916", workflow: "Approval Escalation", trigger: "Approval Requested", status: "Failed", duration: "3.1s", time: "25 Jun 10:15 AM" }
  ],

  errorLogs: [
    { time: "25 Jun 10:35 AM", level: "ERROR", module: "Automation", message: "SMS gateway timeout — Twilio", count: 1 },
    { time: "25 Jun 10:15 AM", level: "ERROR", module: "API", message: "Webhook 401 — invalid API key", count: 1 },
    { time: "24 Jun 04:15 AM", level: "WARN", module: "Integration", message: "Razorpay sync retry exhausted", count: 3 },
    { time: "23 Jun 22:00 PM", level: "CRITICAL", module: "Security", message: "MFA bypass attempt blocked", count: 1 }
  ],

  databaseLogs: [
    { time: "25 Jun 10:42 AM", table: "leads", operation: "UPDATE", user: "app_user", rows: 1, duration: "12ms" },
    { time: "25 Jun 10:30 AM", table: "payments", operation: "UPDATE", user: "app_user", rows: 1, duration: "8ms" },
    { time: "25 Jun 09:30 AM", table: "users", operation: "INSERT", user: "app_user", rows: 1, duration: "24ms" },
    { time: "25 Jun 06:00 AM", table: "audit_logs", operation: "INSERT", user: "system", rows: 1842, duration: "1.2s" }
  ],

  suspiciousActivity: [
    { user: "Unknown", activity: "5 failed logins in 2 min", ip: "185.**.**.12", risk: "High", time: "25 Jun 10:35 AM" },
    { user: "Abrar", activity: "Permission escalation attempt", ip: "106.**.**.88", risk: "Medium", time: "24 Jun 18:30" },
    { user: "—", activity: "Bulk data export at unusual hour", ip: "91.**.**.44", risk: "High", time: "24 Jun 03:22 AM" }
  ],

  mostActiveUsers: [
    ["Abdul Syed", 142], ["Himani Bhargava", 128], ["Diksha", 98], ["Fazil", 76], ["Om Anil", 64]
  ],

  moduleActivity: [
    ["Lead Management", 420], ["Customer Management", 312], ["Approvals", 186], ["Documents", 154], ["Automation", 412]
  ],

  complianceReports: [
    { name: "SOC 2 Access Log", period: "Q2 2024", status: "Ready", lastGenerated: "20 Jun 2024" },
    { name: "GDPR Data Access Report", period: "Jun 2024", status: "Ready", lastGenerated: "15 Jun 2024" },
    { name: "Login Audit — 90 days", period: "Mar–Jun 2024", status: "Ready", lastGenerated: "01 Jun 2024" },
    { name: "Privileged User Activity", period: "Jun 2024", status: "Pending", lastGenerated: "—" }
  ],

  timeline: [
    { title: "Lead updated — LEAD-2024-089", time: "10:42 AM", user: "Abdul Syed", desc: "Status: Proposal Sent" },
    { title: "Lead assigned — LEAD-2024-092", time: "10:38 AM", user: "Himani Bhargava", desc: "Assigned to Diksha" },
    { title: "Failed login blocked", time: "10:35 AM", user: "System", desc: "IP 185.**.**.12" },
    { title: "Payment verified — PAY-2024-0456", time: "10:30 AM", user: "Fazil", desc: "NEFT confirmed" },
    { title: "Approval completed — APR-2024-078", time: "10:28 AM", user: "Om Anil", desc: "Discount approved" },
    { title: "Report exported — Q2 2024", time: "10:15 AM", user: "Sumanth", desc: "PDF format" }
  ]
};
