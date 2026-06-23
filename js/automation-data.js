/* Automation Engine — Mock Data */

const AUTOMATION_DATA = {
  roles: ["CEO", "Admin", "Operations Manager", "Sales Manager", "Team Lead", "Automation Administrator", "Sales Executive (View Only)"],
  workflowStates: ["Draft", "Testing", "Active", "Paused", "Completed", "Archived"],
  brands: ["Odette", "Original Burger Co.", "Kasturi", "Tea Time", "Belgian Waffle Co.", "Third Wave Coffee"],
  cities: ["Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi", "Pune", "Kochi", "Mysuru", "Ahmedabad", "Coimbatore"],
  users: ["Abdul Syed", "Abrar", "Himani Bhargava", "Om Anil", "Sumanth", "Fazil", "Diksha", "Akshita", "Swetha"],

  triggers: [
    "Lead Created", "Lead Updated", "Lead Assigned", "Lead Status Changed",
    "Meeting Scheduled", "Meeting Completed", "Customer Created", "Customer Converted",
    "Payment Received", "Payment Due", "Document Uploaded", "Document Expired",
    "Approval Requested", "Approval Completed", "Task Created", "Task Overdue",
    "Invoice Generated", "Agreement Signed", "Login Activity", "Custom Trigger"
  ],

  actions: [
    "Send Email", "Send SMS", "Send WhatsApp", "Create Task", "Assign User",
    "Update Status", "Generate Invoice", "Notify Manager", "Create Meeting",
    "Send Reminder", "Request Approval", "Create Customer", "Move Pipeline Stage",
    "Upload Document", "Webhook Call", "API Request", "Delay", "Conditional Branch",
    "Loop", "End Workflow"
  ],

  conditions: [
    "If / Else", "AND", "OR", "Date Conditions", "Amount Conditions",
    "Status Conditions", "Department Conditions", "User Conditions",
    "Role Conditions", "City Conditions", "Brand Conditions", "Franchise Model Conditions"
  ],

  templates: [
    { name: "Lead Follow-up", trigger: "Lead Created", actions: 5, uses: 142, category: "Sales" },
    { name: "Meeting Reminder", trigger: "Meeting Scheduled", actions: 3, uses: 98, category: "Meetings" },
    { name: "Payment Reminder", trigger: "Payment Due", actions: 4, uses: 76, category: "Accounts" },
    { name: "Invoice Generation", trigger: "Invoice Generated", actions: 3, uses: 64, category: "Accounts" },
    { name: "Customer Welcome", trigger: "Customer Created", actions: 4, uses: 55, category: "Customer" },
    { name: "Document Expiry Reminder", trigger: "Document Expired", actions: 3, uses: 41, category: "Documents" },
    { name: "Agreement Approval", trigger: "Approval Requested", actions: 6, uses: 38, category: "Approvals" },
    { name: "Sales Assignment", trigger: "Lead Assigned", actions: 3, uses: 112, category: "Sales" },
    { name: "Customer Conversion", trigger: "Customer Converted", actions: 5, uses: 29, category: "Sales" },
    { name: "Executive Daily Summary", trigger: "Login Activity", actions: 2, uses: 18, category: "Reports" }
  ],

  kpis: {
    activeWorkflows: 47,
    failedExecutions: 12,
    todayExecutions: 384,
    avgExecutionTime: "1.2s",
    pendingJobs: 23,
    queuedJobs: 8,
    successRate: 96.8,
    topTrigger: "Lead Created",
    topAction: "Send Email",
    topTemplate: "Lead Follow-up"
  },

  workflows: [
    { id: "WF-2024-012", name: "Lead Follow-up — Odette Bengaluru", trigger: "Lead Created", status: "Active", brand: "Odette", city: "Bengaluru", executions: 1240, successRate: 98, owner: "Himani Bhargava", updated: "25 Jun 2024", description: "Auto follow-up for new Odette leads in Bengaluru" },
    { id: "WF-2024-011", name: "Payment Reminder — Tea Time", trigger: "Payment Due", status: "Active", brand: "Tea Time", city: "Hyderabad", executions: 456, successRate: 94, owner: "Fazil", updated: "24 Jun 2024", description: "Escalating payment reminders via Email + SMS" },
    { id: "WF-2024-010", name: "Meeting Reminder — All Brands", trigger: "Meeting Scheduled", status: "Active", brand: "All", city: "All", executions: 2100, successRate: 99, owner: "Automation Administrator", updated: "23 Jun 2024", description: "30-min and 1-hr meeting reminders" },
    { id: "WF-2024-009", name: "Document Expiry — GST", trigger: "Document Expired", status: "Paused", brand: "Kasturi", city: "Pune", executions: 89, successRate: 91, owner: "Akshita", updated: "22 Jun 2024", description: "Notify brand owners before GST expiry" },
    { id: "WF-2024-008", name: "Customer Welcome — OBC", trigger: "Customer Created", status: "Active", brand: "Original Burger Co.", city: "Mumbai", executions: 312, successRate: 97, owner: "Diksha", updated: "21 Jun 2024", description: "Welcome email + WhatsApp for new franchisees" },
    { id: "WF-2024-007", name: "Approval Escalation", trigger: "Approval Requested", status: "Testing", brand: "All", city: "All", executions: 45, successRate: 88, owner: "Om Anil", updated: "20 Jun 2024", description: "Escalate pending approvals after 24h" },
    { id: "WF-2024-006", name: "Invoice Auto-Generate", trigger: "Agreement Signed", status: "Draft", brand: "Belgian Waffle Co.", city: "Chennai", executions: 0, successRate: 0, owner: "Sumanth", updated: "19 Jun 2024", description: "Generate invoice on agreement signature" },
    { id: "WF-2024-005", name: "Sales Assignment — Hyderabad", trigger: "Lead Assigned", status: "Active", brand: "Third Wave Coffee", city: "Hyderabad", executions: 678, successRate: 95, owner: "Abrar", updated: "18 Jun 2024", description: "Round-robin assignment for Hyderabad leads" }
  ],

  executions: [
    { id: "EX-08921", workflow: "Lead Follow-up — Odette Bengaluru", trigger: "Lead Created", status: "Success", started: "25 Jun 10:42 AM", duration: "0.8s", brand: "Odette", city: "Bengaluru", error: "" },
    { id: "EX-08920", workflow: "Payment Reminder — Tea Time", trigger: "Payment Due", status: "Success", started: "25 Jun 10:38 AM", duration: "1.1s", brand: "Tea Time", city: "Hyderabad", error: "" },
    { id: "EX-08919", workflow: "Meeting Reminder — All Brands", trigger: "Meeting Scheduled", status: "Failed", started: "25 Jun 10:35 AM", duration: "2.4s", brand: "Kasturi", city: "Pune", error: "SMS gateway timeout — retry queued" },
    { id: "EX-08918", workflow: "Customer Welcome — OBC", trigger: "Customer Created", status: "Success", started: "25 Jun 10:30 AM", duration: "1.0s", brand: "Original Burger Co.", city: "Mumbai", error: "" },
    { id: "EX-08917", workflow: "Lead Follow-up — Odette Bengaluru", trigger: "Lead Created", status: "Success", started: "25 Jun 10:28 AM", duration: "0.9s", brand: "Odette", city: "Bengaluru", error: "" },
    { id: "EX-08916", workflow: "Approval Escalation", trigger: "Approval Requested", status: "Failed", started: "25 Jun 10:15 AM", duration: "3.1s", brand: "Odette", city: "Delhi", error: "Webhook 401 — invalid API key" },
    { id: "EX-08915", workflow: "Sales Assignment — Hyderabad", trigger: "Lead Assigned", status: "Success", started: "25 Jun 10:10 AM", duration: "0.6s", brand: "Third Wave Coffee", city: "Hyderabad", error: "" },
    { id: "EX-08914", workflow: "Document Expiry — GST", trigger: "Document Expired", status: "Failed", started: "25 Jun 09:55 AM", duration: "1.8s", brand: "Kasturi", city: "Pune", error: "Email validation failed — invalid recipient" }
  ],

  webhooks: [
    { id: "WH-001", name: "CRM Lead Sync", url: "https://api.example.com/leads/webhook", method: "POST", status: "Active", lastCall: "25 Jun 10:35", successRate: 98 },
    { id: "WH-002", name: "Payment Gateway Callback", url: "https://payments.example.com/callback", method: "POST", status: "Active", lastCall: "25 Jun 09:20", successRate: 100 },
    { id: "WH-003", name: "Slack Notifications", url: "https://hooks.slack.com/services/xxx", method: "POST", status: "Paused", lastCall: "20 Jun 14:00", successRate: 85 }
  ],

  apiIntegrations: [
    { id: "API-001", name: "SendGrid Email", type: "Email", status: "Connected", lastSync: "25 Jun 10:00", calls: 12400 },
    { id: "API-002", name: "Twilio SMS", type: "SMS", status: "Connected", lastSync: "25 Jun 10:00", calls: 3200 },
    { id: "API-003", name: "WhatsApp Business API", type: "WhatsApp", status: "Connected", lastSync: "25 Jun 09:45", calls: 890 },
    { id: "API-004", name: "Razorpay", type: "Payments", status: "Connected", lastSync: "24 Jun 18:00", calls: 456 },
    { id: "API-005", name: "Custom ERP", type: "REST API", status: "Error", lastSync: "22 Jun 12:00", calls: 12 }
  ],

  auditLog: [
    { time: "25 Jun 10:42", user: "Himani Bhargava", action: "Activated workflow", target: "WF-2024-012", details: "Lead Follow-up — Odette Bengaluru" },
    { time: "25 Jun 10:15", user: "Automation Administrator", action: "Test run failed", target: "WF-2024-007", details: "Webhook 401 on step 4" },
    { time: "25 Jun 09:30", user: "Sumanth", action: "Created workflow", target: "WF-2024-013", details: "Draft — Executive Daily Summary" },
    { time: "24 Jun 16:00", user: "Om Anil", action: "Paused workflow", target: "WF-2024-009", details: "Document Expiry — GST" },
    { time: "24 Jun 14:20", user: "Fazil", action: "Updated webhook", target: "WH-002", details: "Rotated API secret" },
    { time: "23 Jun 11:00", user: "Admin", action: "Imported template", target: "Lead Follow-up", details: "From template library" }
  ],

  channelAutomations: {
    email: { active: 28, sent: 12400, failed: 45, templates: 12 },
    whatsapp: { active: 14, sent: 3200, failed: 18, templates: 8 },
    sms: { active: 18, sent: 8900, failed: 32, templates: 6 },
    task: { active: 22, created: 4560, overdue: 12 },
    approval: { active: 8, pending: 15, completed: 234 },
    notification: { active: 35, sent: 18900, read: 14200 }
  }
};
