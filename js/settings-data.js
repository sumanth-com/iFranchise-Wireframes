/* System Configuration — Mock Data */

const CONFIG_DATA = {
  viewRoles: ["Super Admin", "CEO", "Co-Founder", "Admin", "Operations Manager", "Security Administrator", "IT Administrator", "Accounts", "HR", "Read Only Administrator"],
  categories: ["General", "Organization", "Branding", "Communication", "Security", "Storage", "Automation", "API", "Integration", "Localization", "Compliance", "Licensing", "Performance", "Database"],

  categoryNav: [
    { label: "General", screen: "company" },
    { label: "Organization", screen: "organization" },
    { label: "Branding", screen: "branding" },
    { label: "Communication", screen: "email-config" },
    { label: "Security", screen: "security" },
    { label: "Storage", screen: "storage" },
    { label: "Automation", screen: "automation" },
    { label: "API", screen: "api" },
    { label: "Integrations", screen: "integrations" },
    { label: "Localization", screen: "localization" },
    { label: "Compliance", screen: "gdpr" },
    { label: "Licensing", screen: "license" },
    { label: "Performance", screen: "cache" },
    { label: "Database", screen: "database" }
  ],

  kpis: {
    systemHealth: "Healthy",
    storageUsage: "68%",
    apiUsage: "12.8K",
    databaseStatus: "OK",
    backupStatus: "Last: 25 Jun 06:00",
    securityScore: 92,
    activeUsers: 42,
    licenseStatus: "Enterprise",
    pendingUpdates: 2
  },

  company: {
    name: "iFranchise",
    website: "https://www.ifranchise.com",
    supportEmail: "support@ifranchise.com",
    supportPhone: "+91 80456 78900",
    gst: "29AABCI1234F1Z5",
    pan: "AABCI1234F",
    address: "Indiranagar, Bengaluru, Karnataka 560038, India",
    timezone: "Asia/Kolkata (IST)",
    currency: "INR (₹)"
  },

  branches: [
    { name: "HQ — Bengaluru", city: "Bengaluru", head: "Abdul Syed", employees: 86, status: "Active" },
    { name: "Mumbai Office", city: "Mumbai", head: "Fazil", employees: 42, status: "Active" },
    { name: "Hyderabad Office", city: "Hyderabad", head: "Himani Bhargava", employees: 38, status: "Active" },
    { name: "Chennai Office", city: "Chennai", head: "Akshita", employees: 24, status: "Active" }
  ],

  holidays: [
    { name: "Republic Day", date: "26 Jan 2025", type: "National" },
    { name: "Independence Day", date: "15 Aug 2025", type: "National" },
    { name: "Diwali", date: "20 Oct 2025", type: "Regional" },
    { name: "Company Foundation Day", date: "15 Mar 2025", type: "Company" }
  ],

  integrations: [
    { name: "Google Calendar", status: "Connected", screen: "calendar" },
    { name: "Google Meet", status: "Connected", screen: "google-workspace" },
    { name: "Microsoft Outlook", status: "Not Connected", screen: "calendar" },
    { name: "Zoom", status: "Connected", screen: "calendar" },
    { name: "WhatsApp Business", status: "Connected", screen: "whatsapp" },
    { name: "Twilio SMS", status: "Connected", screen: "sms" },
    { name: "Razorpay", status: "Connected", screen: "payment-gateway" },
    { name: "Cashfree", status: "Not Connected", screen: "payment-gateway" },
    { name: "Stripe", status: "Not Connected", screen: "payment-gateway" },
    { name: "Resend", status: "Connected", screen: "smtp" },
    { name: "Supabase", status: "Connected", screen: "api" },
    { name: "Google Maps", status: "Connected", screen: "integrations" }
  ],

  storage: [
    { name: "Documents", used: "24 GB", limit: "50 GB", pct: 48 },
    { name: "Images", used: "8.2 GB", limit: "20 GB", pct: 41 },
    { name: "Contracts", used: "4.1 GB", limit: "10 GB", pct: 41 },
    { name: "Invoices", used: "2.8 GB", limit: "10 GB", pct: 28 },
    { name: "Reports", used: "6.4 GB", limit: "15 GB", pct: 43 },
    { name: "Backups", used: "18 GB", limit: "30 GB", pct: 60 }
  ],

  featureFlags: [
    { name: "Enable AI Assistant", desc: "CRM copilot for sales and ops", enabled: true },
    { name: "Enable WhatsApp", desc: "WhatsApp Business messaging", enabled: true },
    { name: "Enable SMS", desc: "Twilio SMS notifications", enabled: true },
    { name: "Enable Payment Gateway", desc: "Razorpay online payments", enabled: true },
    { name: "Enable Customer Portal", desc: "Self-service franchisee portal", enabled: false },
    { name: "Enable Brand Owner Portal", desc: "Brand partner dashboard", enabled: true },
    { name: "Enable Automation", desc: "Workflow automation engine", enabled: true },
    { name: "Enable Reports", desc: "Analytics and reporting module", enabled: true },
    { name: "Enable Audit Logs", desc: "Immutable audit trail", enabled: true },
    { name: "Enable Notifications", desc: "Multi-channel notification center", enabled: true }
  ],

  apiKeys: [
    { name: "Production API", prefix: "fc_live_••••", created: "01 Jan 2024", lastUsed: "25 Jun 10:42", status: "Active" },
    { name: "Staging API", prefix: "fc_test_••••", created: "15 Mar 2024", lastUsed: "24 Jun 18:00", status: "Active" },
    { name: "Mobile App", prefix: "fc_mob_••••", created: "01 Jun 2024", lastUsed: "25 Jun 09:30", status: "Active" }
  ],

  webhooks: [
    { name: "Lead Sync", url: "https://api.example.com/leads", events: "lead.created, lead.updated", status: "Active" },
    { name: "Payment Callback", url: "https://payments.example.com/hook", events: "payment.received", status: "Active" },
    { name: "Slack Alerts", url: "https://hooks.slack.com/xxx", events: "approval.requested", status: "Paused" }
  ],

  customFields: [
    { module: "Leads", name: "Investment Budget", type: "Currency", required: true },
    { module: "Leads", name: "Preferred City", type: "Dropdown", required: false },
    { module: "Customers", name: "Franchise Model", type: "Lookup", required: true },
    { module: "Meetings", name: "Meeting Outcome", type: "Text", required: false }
  ],

  numbering: [
    { entity: "Lead", prefix: "LEAD", format: "LEAD-{YYYY}-{SEQ}", next: "LEAD-2024-093" },
    { entity: "Customer", prefix: "CUS", format: "CUS-{YYYY}-{SEQ}", next: "CUS-2024-042" },
    { entity: "Invoice", prefix: "INV", format: "INV-{YYYY}-{SEQ}", next: "INV-2024-156" },
    { entity: "Employee", prefix: "EMP", format: "EMP-{YYYY}-{SEQ}", next: "EMP-2024-037" }
  ],

  envVars: [
    { key: "SUPABASE_URL", value: "https://••••.supabase.co", masked: true },
    { key: "SUPABASE_ANON_KEY", value: "••••••••", masked: true },
    { key: "RAZORPAY_KEY_ID", value: "rzp_live_••••", masked: true },
    { key: "TWILIO_ACCOUNT_SID", value: "AC••••", masked: true }
  ],

  recentActivities: [
    { action: "SMTP settings updated", user: "IT Administrator", time: "25 Jun 10:00" },
    { action: "Feature flag enabled — AI Assistant", user: "Super Admin", time: "24 Jun 16:00" },
    { action: "Razorpay integration connected", user: "Fazil", time: "23 Jun 14:00" },
    { action: "Backup completed", user: "System", time: "25 Jun 06:00" }
  ],

  license: {
    plan: "Enterprise",
    seats: 250,
    used: 248,
    expires: "31 Dec 2025",
    version: "4.2.1"
  }
};
