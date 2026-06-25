/* Dashboard Module — Mock Data (Indian enterprise franchise CRM) */

const DASHBOARD_DATA = {
  roles: ["CEO", "Team Lead", "Sales Manager", "Sales Executive", "Brand Owner", "Accounts", "Admin"],
  cities: ["Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Pune", "Delhi", "Kochi", "Mysuru"],
  brands: ["Odette", "Original Burger Co.", "Kasturi", "Chai Point", "Wow! Momo"],
  users: ["Abdul Syed", "Abrar", "Himani Bhargava", "Om Anil", "Sumanth", "Fazil", "Diksha", "Akshita", "Swetha"],

  ceo: {
    kpis: [
      { label: "Total Revenue (YTD)", value: "₹18.6 Cr", change: "↑ 14% vs last year" },
      { label: "Monthly Revenue", value: "₹2.84 Cr", change: "↑ 12% vs May 2024" },
      { label: "Active Brands", value: "5", change: "Odette · OBC · Kasturi · Chai Point · Wow! Momo" },
      { label: "Active Franchise Leads", value: "1,024", change: "↑ 86 new this month" },
      { label: "Converted Customers", value: "248", change: "24.2% conversion rate" },
      { label: "Pending Approvals", value: "12", change: "4 critical · 8 standard" },
      { label: "Meetings Today", value: "18", change: "6 CEO sign-offs scheduled" },
      { label: "Collections (MTD)", value: "₹1.92 Cr", change: "↑ 9% vs target" },
      { label: "Outstanding Payments", value: "₹42.8 L", change: "18 accounts overdue" }
    ],
    salesFunnel: [
      { label: "Inquiry", value: 1024 },
      { label: "Qualified", value: 486 },
      { label: "Proposal", value: 312 },
      { label: "Negotiation", value: 168 },
      { label: "Agreement", value: 94 },
      { label: "Onboarded", value: 248 }
    ],
    leadsBySource: [
      { label: "Website", value: 286 },
      { label: "Referral", value: 224 },
      { label: "Trade Show", value: 148 },
      { label: "Social Media", value: 192 },
      { label: "Partner", value: 98 },
      { label: "Cold Call", value: 76 }
    ],
    cityPerformance: [
      { label: "Bengaluru", value: 92 },
      { label: "Hyderabad", value: 78 },
      { label: "Chennai", value: 64 },
      { label: "Mumbai", value: 58 },
      { label: "Pune", value: 42 },
      { label: "Delhi", value: 38 },
      { label: "Kochi", value: 28 },
      { label: "Mysuru", value: 18 }
    ],
    conversionTrend: [18, 20, 19, 22, 21, 24],
    leaderboard: [
      { name: "Himani Bhargava", role: "Sales Manager", leads: 45, converted: 28, revenue: "₹3.2 Cr", pct: 112 },
      { name: "Diksha", role: "Team Lead", leads: 28, converted: 16, revenue: "₹1.8 Cr", pct: 98 },
      { name: "Abrar", role: "Co-Founder", leads: 22, converted: 14, revenue: "₹1.4 Cr", pct: 94 },
      { name: "Akshita", role: "Brand Owner", leads: 12, converted: 8, revenue: "₹92 L", pct: 88 },
      { name: "Swetha", role: "Sales Executive", leads: 18, converted: 9, revenue: "₹68 L", pct: 76 }
    ],
    topBrands: [
      { brand: "Odette", revenue: "₹6.8 Cr", outlets: 42, growth: "+15%" },
      { brand: "Original Burger Co.", revenue: "₹4.2 Cr", outlets: 28, growth: "+12%" },
      { brand: "Kasturi", revenue: "₹3.1 Cr", outlets: 22, growth: "+9%" },
      { brand: "Chai Point", revenue: "₹2.4 Cr", outlets: 18, growth: "+18%" },
      { brand: "Wow! Momo", revenue: "₹2.1 Cr", outlets: 16, growth: "+22%" }
    ],
    activities: [
      { title: "Lead converted — Rahul Sharma", user: "Diksha", time: "25 Jun, 10:42 AM", desc: "Odette Premium · Bengaluru" },
      { title: "CEO approval granted", user: "Abdul Syed", time: "25 Jun, 10:15 AM", desc: "Discount approval — APR-2024-042" },
      { title: "Payment received", user: "Fazil", time: "25 Jun, 9:30 AM", desc: "₹15,00,000 · Meera Iyer · Kasturi" },
      { title: "Meeting completed", user: "Himani Bhargava", time: "24 Jun, 4:00 PM", desc: "Brand presentation — Priya Nair" },
      { title: "New franchise lead", user: "System", time: "24 Jun, 2:15 PM", desc: "Website inquiry — Wow! Momo · Pune" }
    ],
    notifications: [
      { title: "4 approvals pending CEO sign-off", time: "10 min ago", priority: "High" },
      { title: "Q2 revenue report ready", time: "1 hr ago", priority: "Medium" },
      { title: "Hyderabad expansion plan updated", time: "3 hrs ago", priority: "Low" },
      { title: "Security alert — failed login attempts", time: "Yesterday", priority: "High" }
    ],
    meetingsToday: [
      { time: "10:00 AM", title: "CEO Sign-off — Meera Iyer", attendee: "Himani Bhargava", mode: "Online" },
      { time: "11:30 AM", title: "Board Review — Q2 Performance", attendee: "Abrar", mode: "In Person" },
      { time: "2:00 PM", title: "Brand Strategy — Odette", attendee: "Akshita", mode: "Online" },
      { time: "4:30 PM", title: "Collections Review", attendee: "Fazil", mode: "Online" }
    ],
    quickActions: [
      { label: "Pending Approvals", href: "../approvals/index.html#inbox" },
      { label: "Schedule Meeting", href: "../meetings/index.html#schedule" },
      { label: "Export Report", action: "export" },
      { label: "View Analytics", href: "../analytics/index.html#dashboard" }
    ]
  },

  teamLead: {
    kpis: [
      { label: "Team Performance", value: "94%", change: "↑ 6% vs last month" },
      { label: "Assigned Leads", value: "128", change: "42 hot · 86 warm" },
      { label: "Pending Follow-ups", value: "24", change: "8 due today" },
      { label: "Meetings This Week", value: "32", change: "12 completed" },
      { label: "Sales Target", value: "₹2.5 Cr", change: "78% achieved" },
      { label: "Team Members", value: "14", change: "Bengaluru + Hyderabad" }
    ],
    pipeline: [
      { label: "New", value: 48 },
      { label: "Contacted", value: 36 },
      { label: "Qualified", value: 28 },
      { label: "Proposal", value: 18 },
      { label: "Negotiation", value: 12 },
      { label: "Won", value: 8 }
    ],
    members: [
      { name: "Diksha", leads: 28, meetings: 12, target: 82, status: "On Track" },
      { name: "Swetha", leads: 18, meetings: 8, target: 76, status: "On Track" },
      { name: "Rahul Mehta", leads: 14, meetings: 6, target: 45, status: "Behind" },
      { name: "Priya Nair", leads: 8, meetings: 4, target: 60, status: "New" }
    ],
    followups: [
      { lead: "Vikram Singh", assignee: "Diksha", due: "Today, 2:00 PM", status: "Overdue" },
      { lead: "Ananya Reddy", assignee: "Swetha", due: "Today, 4:30 PM", status: "Due" },
      { lead: "Rohit Patel", assignee: "Diksha", due: "26 Jun", status: "Scheduled" },
      { lead: "Kavya Menon", assignee: "Rahul Mehta", due: "26 Jun", status: "Scheduled" }
    ],
    activities: [
      { title: "Pipeline review completed", user: "Himani Bhargava", time: "25 Jun, 9:00 AM", desc: "Weekly team standup" },
      { title: "Lead reassigned", user: "Himani Bhargava", time: "24 Jun, 3:30 PM", desc: "3 leads → Diksha" },
      { title: "Comment on lead", user: "Diksha", time: "24 Jun, 11:00 AM", desc: "L-2024-089 — ROI shared" }
    ],
    comments: [
      { author: "Diksha", time: "25 Jun, 10:30 AM", body: "Customer ready for site visit — Odette Premium Bengaluru." },
      { author: "Swetha", time: "24 Jun, 4:15 PM", body: "Need manager approval for 10% discount — Chai Point." },
      { author: "Himani Bhargava", time: "24 Jun, 2:00 PM", body: "Great work on Pune pipeline — keep momentum." }
    ],
    escalations: [
      { id: "ESC-042", subject: "Territory overlap — Mumbai", raisedBy: "Swetha", priority: "High", status: "Open" },
      { id: "ESC-041", subject: "Delayed agreement — Chennai", raisedBy: "Diksha", priority: "Medium", status: "In Review" }
    ],
    notifications: [
      { title: "8 follow-ups due today", time: "Now", priority: "High" },
      { title: "Team target 78% — 6 days left", time: "1 hr ago", priority: "Medium" },
      { title: "New lead assigned — Wow! Momo", time: "2 hrs ago", priority: "Low" }
    ]
  },

  salesExec: {
    kpis: [
      { label: "My Leads", value: "28", change: "6 hot · 12 warm · 10 cold" },
      { label: "Today's Follow-ups", value: "5", change: "2 completed · 3 pending" },
      { label: "Meetings Today", value: "3", change: "Next at 11:00 AM" },
      { label: "Open Tasks", value: "8", change: "2 overdue" },
      { label: "Sales Target", value: "₹45 L", change: "Monthly quota" },
      { label: "Monthly Achievement", value: "₹38.2 L", change: "85% of target" }
    ],
    leadStatus: [
      { label: "New", value: 6 },
      { label: "Contacted", value: 8 },
      { label: "Qualified", value: 5 },
      { label: "Proposal", value: 4 },
      { label: "Negotiation", value: 3 },
      { label: "Won", value: 2 }
    ],
    leads: [
      { id: "L-2024-089", name: "Rahul Sharma", brand: "Odette", city: "Bengaluru", status: "Proposal", budget: "₹25–50 L" },
      { id: "L-2024-102", name: "Priya Nair", brand: "Wow! Momo", city: "Hyderabad", status: "Qualified", budget: "₹15–25 L" },
      { id: "L-2024-115", name: "Arjun Reddy", brand: "OBC", city: "Chennai", status: "Negotiation", budget: "₹50+ L" },
      { id: "L-2024-118", name: "Sneha Verma", brand: "Chai Point", city: "Mumbai", status: "Contacted", budget: "₹10–15 L" }
    ],
    followups: [
      { time: "10:00 AM", lead: "Rahul Sharma", type: "Call", note: "ROI discussion follow-up" },
      { time: "11:30 AM", lead: "Priya Nair", type: "Meeting", note: "Brand deck presentation" },
      { time: "2:00 PM", lead: "Sneha Verma", type: "Call", note: "Payment schedule" },
      { time: "4:30 PM", lead: "Arjun Reddy", type: "Site Visit", note: "Indiranagar location" }
    ],
    customers: [
      { name: "Meera Iyer", brand: "Kasturi", city: "Pune", signed: "20 May 2024" },
      { name: "Vikram Singh", brand: "Odette", city: "Delhi", signed: "08 Jun 2023" }
    ],
    calls: [
      { time: "Tomorrow, 10 AM", contact: "Kavya Menon", brand: "Odette", type: "Discovery Call" },
      { time: "27 Jun, 3 PM", contact: "Rohit Patel", brand: "Chai Point", type: "Follow-up" }
    ],
    tasks: [
      { task: "Send agreement draft", due: "Today", status: "Open" },
      { task: "Upload KYC documents", due: "26 Jun", status: "In Progress" },
      { task: "Schedule site visit", due: "27 Jun", status: "Open" }
    ]
  },

  brandOwner: {
    brand: "Odette",
    kpis: [
      { label: "Brand Overview", value: "Odette", change: "Premium bakery · 42 outlets" },
      { label: "Franchise Enquiries", value: "186", change: "↑ 24 this month" },
      { label: "Qualified Leads", value: "68", change: "36.6% qualification rate" },
      { label: "Pending Meetings", value: "9", change: "4 this week" },
      { label: "Active Agreements", value: "22", change: "6 pending signature" },
      { label: "Brand Revenue (MTD)", value: "₹68 L", change: "↑ 15% vs May" }
    ],
    pipeline: [
      { label: "Enquiry", value: 186 },
      { label: "Qualified", value: 68 },
      { label: "Site Visit", value: 42 },
      { label: "Agreement", value: 28 },
      { label: "Launched", value: 42 }
    ],
    brandBreakdown: [
      { label: "Odette", value: 186 },
      { label: "Original Burger Co.", value: 142 },
      { label: "Kasturi", value: 98 },
      { label: "Chai Point", value: 124 },
      { label: "Wow! Momo", value: 88 }
    ],
    launches: [
      { outlet: "Odette — Koramangala 5th Block", city: "Bengaluru", date: "05 Jul 2024", status: "On Track" },
      { outlet: "Wow! Momo — Hitech City", city: "Hyderabad", date: "12 Jul 2024", status: "Fit-out" },
      { outlet: "Chai Point — FC Road", city: "Pune", date: "20 Jul 2024", status: "Planning" }
    ],
    documents: [
      { name: "Brand Deck Q2 2024.pdf", type: "Marketing", date: "20 Jun 2024" },
      { name: "Operations Manual v2.1.pdf", type: "Operations", date: "15 Jun 2024" },
      { name: "Franchise Agreement Template.pdf", type: "Legal", date: "10 Jun 2024" }
    ],
    tickets: [
      { id: "TKT-088", subject: "Marketing asset request", status: "Open", priority: "Medium" },
      { id: "TKT-087", subject: "Territory clarification — Pune", status: "In Progress", priority: "High" }
    ],
    notifications: [
      { title: "New enquiry — Bengaluru", time: "30 min ago", priority: "Medium" },
      { title: "Agreement signed — Rahul Sharma", time: "2 hrs ago", priority: "Low" },
      { title: "Launch date confirmed — Koramangala", time: "Yesterday", priority: "Low" }
    ]
  },

  accounts: {
    kpis: [
      { label: "Payments Received (MTD)", value: "₹1.92 Cr", change: "↑ 9% vs target" },
      { label: "Pending Payments", value: "₹28.4 L", change: "14 awaiting verification" },
      { label: "GST Payable", value: "₹4.8 L", change: "Due 20 Jul 2024" },
      { label: "Invoices Generated", value: "156", change: "12 draft · 8 overdue" },
      { label: "Collections Rate", value: "91%", change: "↑ 3% vs last month" },
      { label: "Refund Requests", value: "3", change: "1 pending approval" }
    ],
    invoiceStatus: [
      { label: "Paid", value: 118 },
      { label: "Partial", value: 22 },
      { label: "Overdue", value: 8 },
      { label: "Draft", value: 12 },
      { label: "Cancelled", value: 4 }
    ],
    monthlySummary: [
      { label: "Franchise Fees", value: 86 },
      { label: "Royalties", value: 64 },
      { label: "Booking Amount", value: 42 },
      { label: "Training Fees", value: 18 },
      { label: "Other", value: 12 }
    ],
    gstReports: [
      { period: "May 2024", taxable: "₹2.42 Cr", gst: "₹4.36 L", status: "Filed" },
      { period: "Jun 2024", taxable: "₹2.68 Cr", gst: "₹4.82 L", status: "Draft" }
    ],
    transactions: [
      { id: "PAY-2024-198", customer: "Rahul Sharma", brand: "Odette", amount: "₹15,00,000", date: "25 Jun 2024", status: "Verified" },
      { id: "PAY-2024-197", customer: "Meera Iyer", brand: "Kasturi", amount: "₹12,00,000", date: "24 Jun 2024", status: "Verified" },
      { id: "PAY-2024-196", customer: "Sneha Verma", brand: "Chai Point", amount: "₹8,50,000", date: "23 Jun 2024", status: "Pending" },
      { id: "PAY-2024-195", customer: "Priya Nair", brand: "Wow! Momo", amount: "₹6,00,000", date: "22 Jun 2024", status: "Verified" }
    ],
    refunds: [
      { id: "REF-012", customer: "Vikram Singh", amount: "₹5,00,000", reason: "Relocation overseas", status: "Approved" },
      { id: "REF-013", customer: "Arjun Reddy", amount: "₹2,00,000", reason: "Booking cancellation", status: "Pending" }
    ]
  },

  admin: {
    kpis: [
      { label: "Total Users", value: "248", change: "231 active · 5 invited" },
      { label: "Roles Configured", value: "14", change: "2 executive · 12 operational" },
      { label: "Permission Sets", value: "248", change: "Last audit 22 Jun" },
      { label: "System Health", value: "99.2%", change: "All core services up" },
      { label: "Audit Events (24h)", value: "12,847", change: "3 security alerts" },
      { label: "Storage Used", value: "68%", change: "342 GB of 500 GB" }
    ],
    systemHealth: [
      { service: "API Gateway", status: "Operational", uptime: "99.98%" },
      { service: "Database (Primary)", status: "Operational", uptime: "99.95%" },
      { service: "Email Service", status: "Operational", uptime: "99.90%" },
      { service: "File Storage", status: "Degraded", uptime: "98.20%" },
      { service: "Background Jobs", status: "Operational", uptime: "99.99%" }
    ],
    apiStatus: [
      { endpoint: "/api/v1/leads", latency: "124ms", status: 200, rate: "1.2k/min" },
      { endpoint: "/api/v1/payments", latency: "89ms", status: 200, rate: "340/min" },
      { endpoint: "/api/v1/reports", latency: "2.4s", status: 200, rate: "42/min" }
    ],
    auditLogs: [
      { time: "10:42 AM", user: "Abdul Syed", action: "UPDATE", entity: "LEAD-089" },
      { time: "10:15 AM", user: "Sumanth", action: "EXPORT", entity: "Audit Log" },
      { time: "9:30 AM", user: "Fazil", action: "VERIFY", entity: "PAY-198" },
      { time: "8:45 AM", user: "Abrar", action: "DENIED", entity: "Roles.Configure" }
    ],
    securityAlerts: [
      { type: "Failed Login", detail: "5 attempts from 185.**.**.12", severity: "High", time: "25 Jun 10:15" },
      { type: "Permission Escalation", detail: "Abrar — Roles.Configure denied", severity: "Medium", time: "24 Jun 18:30" },
      { type: "Bulk Export", detail: "Sumanth — 2,400 audit records", severity: "Low", time: "22 Jun 17:00" }
    ],
    storage: [
      { name: "Documents", used: "186 GB", pct: 72 },
      { name: "Database", used: "98 GB", pct: 58 },
      { name: "Backups", used: "58 GB", pct: 45 }
    ],
    notifications: [
      { title: "Storage at 68% — review retention policy", time: "2 hrs ago", priority: "Medium" },
      { title: "3 failed login attempts blocked", time: "4 hrs ago", priority: "High" },
      { title: "Scheduled backup completed", time: "Yesterday", priority: "Low" }
    ]
  },

  commandCenter: {
    revenue: { ytd: "₹18.6 Cr", mtd: "₹2.84 Cr", growth: "+14%" },
    pipelineValue: "₹4.2 Cr",
    pendingApprovals: 12,
    collections: "₹1.92 Cr",
    franchiseGrowth: "+18 outlets",
    callMetrics: { total: 2846, connected: 2184, successRate: "76.7%" },
    marketingRoi: "320%",
    statePerformance: [
      { state: "Karnataka", revenue: "₹6.2 Cr", leads: 286 },
      { state: "Maharashtra", revenue: "₹4.8 Cr", leads: 224 },
      { state: "Telangana", revenue: "₹3.4 Cr", leads: 168 },
      { state: "Tamil Nadu", revenue: "₹2.8 Cr", leads: 142 }
    ],
    topPerformers: [
      { name: "Himani Bhargava", role: "Sales Manager", score: 94, revenue: "₹3.2 Cr" },
      { name: "Diksha", role: "Team Lead", score: 88, revenue: "₹1.8 Cr" },
      { name: "Abrar", role: "Co-Founder", score: 86, revenue: "₹1.4 Cr" }
    ],
    bottomPerformers: [
      { name: "New Hire — Raj", role: "Sales Executive", score: 52, revenue: "₹12 L" },
      { name: "Intern — Priya", role: "Sales Executive", score: 48, revenue: "₹8 L" }
    ]
  },

  employeePerformance: {
    viewRoles: ["CEO", "Admin", "Team Lead", "Sales Manager", "Individual Employee"],
    metrics: [
      { label: "Leads Assigned", value: "45" },
      { label: "Calls Made", value: "186" },
      { label: "Talk Time", value: "18h 24m" },
      { label: "Meetings Completed", value: "28" },
      { label: "Follow-ups Completed", value: "42" },
      { label: "Conversion Rate", value: "22%" },
      { label: "Revenue Generated", value: "₹3.2 Cr" },
      { label: "Target Achievement", value: "112%" },
      { label: "Deal Closures", value: "14" },
      { label: "Activity Score", value: "94/100" },
      { label: "Productivity Score", value: "91/100" }
    ],
    team: [
      { name: "Himani Bhargava", leads: 45, calls: 186, talkTime: "18h 24m", meetings: 28, followUps: 42, conversion: "22%", revenue: "₹3.2 Cr", target: "112%", closures: 14, activity: 94, productivity: 91 },
      { name: "Diksha", leads: 28, calls: 142, talkTime: "14h 12m", meetings: 22, followUps: 36, conversion: "19%", revenue: "₹1.8 Cr", target: "98%", closures: 9, activity: 88, productivity: 86 },
      { name: "Swetha", leads: 18, calls: 128, talkTime: "11h 48m", meetings: 16, followUps: 28, conversion: "16%", revenue: "₹68 L", target: "76%", closures: 5, activity: 82, productivity: 78 },
      { name: "Abrar", leads: 22, calls: 98, talkTime: "9h 36m", meetings: 18, followUps: 24, conversion: "21%", revenue: "₹1.4 Cr", target: "94%", closures: 8, activity: 86, productivity: 84 }
    ]
  }
};
