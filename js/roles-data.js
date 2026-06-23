/* Role & Permission Management — Mock Data */

const ROLES_DATA = {
  systemRoles: ["Super Admin", "CEO", "Co-Founder", "Operations Manager", "Sales Manager", "Team Lead", "Sales Executive", "Brand Owner", "Accounts", "HR", "Marketing", "Legal", "Support", "Read Only User"],
  viewRoles: ["Super Admin", "CEO", "Admin", "Operations Manager", "Sales Manager", "Team Lead", "HR"],
  departments: ["Sales", "Operations", "Accounts", "Marketing", "HR", "Technology", "Legal", "Support", "Executive"],
  users: ["Abdul Syed", "Abrar", "Himani Bhargava", "Om Anil", "Sumanth", "Fazil", "Diksha", "Akshita", "Swetha"],

  modules: [
    "Dashboard", "Lead Management", "Customer Management", "Brand Management", "Franchise Models",
    "Meetings", "Approvals", "Accounts", "Payments", "Documents", "Notifications", "Reports",
    "Automation", "Users", "Roles", "Audit Logs", "Settings", "API", "Storage"
  ],

  permissionTypes: [
    "View", "Create", "Edit", "Delete", "Approve", "Assign", "Import", "Export",
    "Share", "Print", "Download", "Upload", "Archive", "Restore", "Configure", "Manage"
  ],

  matrixColumns: ["View", "Create", "Edit", "Delete", "Approve", "Assign", "Export", "Import", "Configure"],

  kpis: {
    totalRoles: 18,
    customRoles: 5,
    permissionRequests: 7,
    pendingApprovals: 4,
    failedAccessAttempts: 23,
    securityAlerts: 3,
    mostUsedRole: "Sales Executive",
    recentChanges: 12
  },

  roles: [
    { id: "ROL-2019-001", name: "Super Admin", department: "Executive", users: 2, permissions: 312, parent: "—", status: "Active", isCustom: false, color: "#333333", description: "Full system access — restricted to IT security team", mfa: true, updated: "10 Jan 2024" },
    { id: "ROL-2019-002", name: "CEO", department: "Executive", users: 1, permissions: 248, parent: "Super Admin", status: "Active", isCustom: false, color: "#444444", description: "Abdul Syed — executive visibility across all modules", mfa: true, updated: "15 Mar 2024" },
    { id: "ROL-2019-002b", name: "Co-Founder", department: "Executive", users: 1, permissions: 240, parent: "Super Admin", status: "Active", isCustom: false, color: "#555555", description: "Abrar — co-founder executive access", mfa: true, updated: "15 Mar 2024" },
    { id: "ROL-2020-003", name: "Operations Manager", department: "Operations", users: 3, permissions: 186, parent: "CEO", status: "Active", isCustom: false, color: "#666666", description: "Operations, approvals, and cross-department coordination", mfa: true, updated: "20 Jun 2024" },
    { id: "ROL-2021-004", name: "Sales Manager", department: "Sales", users: 4, permissions: 164, parent: "CEO", status: "Active", isCustom: false, color: "#555555", description: "Full sales pipeline, team management, and reporting", mfa: true, updated: "25 Jun 2024" },
    { id: "ROL-2021-005", name: "Team Lead", department: "Sales", users: 8, permissions: 128, parent: "Sales Manager", status: "Active", isCustom: false, color: "#777777", description: "Team oversight, lead assignment, limited approvals", mfa: false, updated: "22 Jun 2024" },
    { id: "ROL-2021-006", name: "Sales Executive", department: "Sales", users: 42, permissions: 86, parent: "Team Lead", status: "Active", isCustom: false, color: "#888888", description: "Own leads, customers, meetings — no admin access", mfa: false, updated: "24 Jun 2024" },
    { id: "ROL-2022-007", name: "Brand Owner", department: "Marketing", users: 12, permissions: 94, parent: "Operations Manager", status: "Active", isCustom: false, color: "#999999", description: "Brand docs, franchise models, marketing assets", mfa: false, updated: "18 Jun 2024" },
    { id: "ROL-2022-008", name: "Accounts", department: "Accounts", users: 8, permissions: 112, parent: "Operations Manager", status: "Active", isCustom: false, color: "#aaaaaa", description: "Payments, invoices, financial reports", mfa: true, updated: "21 Jun 2024" },
    { id: "ROL-2023-009", name: "HR", department: "HR", users: 4, permissions: 98, parent: "Operations Manager", status: "Active", isCustom: false, color: "#bbbbbb", description: "User management, leave, employee documents", mfa: true, updated: "19 Jun 2024" },
    { id: "ROL-2023-010", name: "Read Only User", department: "—", users: 6, permissions: 42, parent: "—", status: "Active", isCustom: false, color: "#cccccc", description: "View-only access for auditors and stakeholders", mfa: false, updated: "01 Jun 2024" },
    { id: "ROL-2024-011", name: "Sales Manager — Hyderabad", department: "Sales", users: 6, permissions: 158, parent: "Sales Manager", status: "Active", isCustom: true, color: "#666666", description: "Custom role — Hyderabad region sales management", mfa: true, updated: "15 Jun 2024" },
    { id: "ROL-2024-012", name: "Franchise Onboarding", department: "Operations", users: 3, permissions: 72, parent: "Operations Manager", status: "Active", isCustom: true, color: "#777777", description: "Custom — document upload, approval workflows only", mfa: false, updated: "12 Jun 2024" }
  ],

  templates: [
    { name: "Sales Team Standard", roles: 3, permissions: 128, description: "Team Lead + Sales Executive baseline" },
    { name: "Finance & Accounts", roles: 2, permissions: 112, description: "Accounts + Read-only auditor" },
    { name: "Executive Suite", roles: 2, permissions: 248, description: "CEO (Abdul Syed) + Co-Founder (Abrar)" },
    { name: "Brand Partner Portal", roles: 1, permissions: 64, description: "Brand Owner limited access" },
    { name: "HR Onboarding Kit", roles: 2, permissions: 98, description: "HR + invite-only user setup" }
  ],

  accessRequests: [
    { id: "AR-089", user: "Himani Bhargava", role: "Sales Manager", module: "Reports", permission: "Export", reason: "Q2 pipeline report for management", requested: "25 Jun 2024", status: "Pending" },
    { id: "AR-088", user: "Diksha", role: "Team Lead", module: "Automation", permission: "Configure", reason: "Setup lead follow-up workflow", requested: "24 Jun 2024", status: "Pending" },
    { id: "AR-087", user: "Fazil", role: "Accounts", module: "Users", permission: "View", reason: "Cross-check payment approvers", requested: "23 Jun 2024", status: "Approved" },
    { id: "AR-086", user: "Diksha", role: "Team Lead", module: "Documents", permission: "Download", reason: "Agreement template for client", requested: "22 Jun 2024", status: "Rejected" }
  ],

  auditLog: [
    { time: "25 Jun 10:30", user: "Super Admin", action: "Updated permissions", target: "Sales Manager", details: "Granted Export on Reports" },
    { time: "25 Jun 09:15", user: "HR", action: "Assigned role", target: "Rahul Mehta", details: "Sales Executive" },
    { time: "24 Jun 16:00", user: "Super Admin", action: "Created custom role", target: "Franchise Onboarding", details: "12 module permissions" },
    { time: "24 Jun 14:20", user: "Abdul Syed", action: "Approved access request", target: "Fazil", details: "Users.View — permanent" },
    { time: "23 Jun 11:00", user: "Super Admin", action: "Revoked permission", target: "Read Only User", details: "Documents.Download removed" },
    { time: "22 Jun 09:30", user: "Super Admin", action: "Cloned role", target: "Sales Manager — Hyderabad", details: "From Sales Manager" }
  ],

  assignmentHistory: [
    { date: "25 Jun 2024", user: "Rahul Mehta", fromRole: "—", toRole: "Sales Executive", by: "Swetha", reason: "New hire onboarding" },
    { date: "20 Jun 2024", user: "Diksha", fromRole: "Sales Executive", toRole: "Team Lead", by: "Himani Bhargava", reason: "Promotion" },
    { date: "15 Jun 2024", user: "Abdul Syed", fromRole: "Sales Executive", toRole: "CEO", by: "Board", reason: "Promoted to Chief Executive Officer" },
    { date: "08 Jan 2024", user: "Swetha", fromRole: "—", toRole: "HR", by: "Om Anil", reason: "New hire" }
  ],

  securityAlerts: [
    { type: "Failed Login", user: "Unknown", detail: "5 failed attempts from 185.**.**.12", time: "25 Jun 10:15", severity: "High" },
    { type: "Permission Escalation", user: "Abrar", detail: "Attempted Configure on Roles module", time: "24 Jun 18:30", severity: "Medium" },
    { type: "MFA Bypass Attempt", user: "—", detail: "Session token reuse detected", time: "23 Jun 22:00", severity: "Critical" }
  ],

  usersPerRole: [
    ["Sales Executive", 42], ["Team Lead", 8], ["Brand Owner", 12], ["Accounts", 8], ["Read Only User", 6], ["Sales Manager", 4]
  ],

  permissionTree: [
    { label: "Lead Management", type: "Module", granted: true, children: [
      { label: "View Leads", granted: true },
      { label: "Create Leads", granted: true },
      { label: "Edit Own Leads", granted: true },
      { label: "Delete Leads", granted: false },
      { label: "Assign Leads", granted: true }
    ]},
    { label: "Customer Management", type: "Module", granted: true, children: [
      { label: "View Customers", granted: true },
      { label: "Create Customers", granted: true },
      { label: "Export Customers", granted: false }
    ]},
    { label: "Reports", type: "Module", granted: true, children: [
      { label: "View Reports", granted: true },
      { label: "Export Reports", granted: false },
      { label: "Schedule Reports", granted: false }
    ]}
  ],

  fieldPermissions: [
    { module: "Leads", field: "Investment Budget", roles: "Sales Executive", access: "View", scope: "Own records" },
    { module: "Leads", field: "Internal Notes", roles: "Sales Executive", access: "Hidden", scope: "—" },
    { module: "Customers", field: "Bank Details", roles: "Sales Executive", access: "Hidden", scope: "—" },
    { module: "Customers", field: "Bank Details", roles: "Accounts", access: "Edit", scope: "All" },
    { module: "Payments", field: "Transaction ID", roles: "Sales Executive", access: "View", scope: "Assigned customers" }
  ],

  recordPermissions: [
    { module: "Leads", rule: "Own records only", roles: "Sales Executive", scope: "Created by or assigned to user" },
    { module: "Leads", rule: "Team records", roles: "Team Lead", scope: "Same team + city" },
    { module: "Leads", rule: "Department records", roles: "Sales Manager", scope: "All Sales department" },
    { module: "Customers", rule: "Assigned customers", roles: "Sales Executive", scope: "sales_exec_id = current_user" },
    { module: "Documents", rule: "Brand-scoped", roles: "Brand Owner", scope: "brand_id IN user.brands" }
  ],

  timeline: [
    { title: "Permission updated — Sales Manager", time: "25 Jun 10:30", user: "Super Admin", desc: "Export granted on Reports module" },
    { title: "Access request approved", time: "24 Jun 14:20", user: "Abdul Syed", desc: "Fazil — Users.View" },
    { title: "Custom role created", time: "24 Jun 16:00", user: "Super Admin", desc: "Franchise Onboarding" },
    { title: "Failed access attempt blocked", time: "24 Jun 18:30", user: "System", desc: "Abrar — Roles.Configure denied" },
    { title: "Role cloned", time: "22 Jun 09:30", user: "Super Admin", desc: "Sales Manager — Hyderabad from Sales Manager" }
  ]
};
