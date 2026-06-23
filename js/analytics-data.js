/* Reporting & Analytics — Mock Data */

const ANALYTICS_DATA = {
  roles: ["CEO", "Co-Founder", "Admin", "Operations Manager", "Accounts Manager", "Sales Manager", "Team Lead", "Sales Executive", "Brand Owner"],
  brands: ["Odette", "Original Burger Co.", "Kasturi", "Tea Time", "Belgian Waffle Co.", "Third Wave Coffee"],
  cities: ["Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi", "Pune", "Kochi", "Mysuru", "Ahmedabad", "Coimbatore", "Visakhapatnam", "Vijayawada"],
  users: ["Abdul Syed", "Abrar", "Himani Bhargava", "Om Anil", "Sumanth", "Fazil", "Diksha", "Akshita", "Swetha"],
  reportTypes: ["Sales Report", "Lead Funnel", "Revenue Forecast", "Brand Growth", "Team Performance", "Payment Collection", "Meeting Productivity", "Custom"],
  dimensions: ["Brand", "City", "Sales Executive", "Department", "Franchise Model", "Lead Source", "Month"],
  metrics: ["Revenue", "Leads", "Conversions", "Deal Size", "ROI", "Meeting Success Rate", "Payment Collection"],

  kpis: {
    totalRevenue: 28450000,
    monthlyRevenue: 4820000,
    quarterlyRevenue: 12840000,
    annualRevenue: 28450000,
    totalLeads: 486,
    qualifiedLeads: 198,
    convertedCustomers: 62,
    conversionRate: 12.8,
    avgDealSize: 4580000,
    pendingPayments: 3316300,
    meetingSuccessRate: 78,
    customerSatisfaction: 4.6,
    roi: 24,
    profitMargin: 18,
    growthPct: 12,
    pipelineValue: 18600000,
    topBrand: "Odette",
    topExec: "Abdul Syed",
    topTeam: "Bengaluru Sales"
  },

  revenueByBrand: [
    ["Odette", "₹1.02 Cr", "36%", "↑ 14%"],
    ["Original Burger Co.", "₹68 L", "24%", "↑ 8%"],
    ["Kasturi", "₹52 L", "18%", "↑ 11%"],
    ["Tea Time", "₹38 L", "13%", "↑ 6%"],
    ["Belgian Waffle Co.", "₹24 L", "9%", "↑ 4%"]
  ],

  revenueByCity: [
    ["Bengaluru", "₹92 L", "32%", "↑ 15%"],
    ["Mumbai", "₹58 L", "20%", "↑ 9%"],
    ["Hyderabad", "₹42 L", "15%", "↑ 12%"],
    ["Delhi", "₹36 L", "13%", "↑ 7%"],
    ["Pune", "₹28 L", "10%", "↑ 10%"],
    ["Chennai", "₹28 L", "10%", "↑ 5%"]
  ],

  teamPerformance: [
    ["Abdul Syed", "Bengaluru", "Odette", "24", "18", "₹1.12 Cr", "83%"],
    ["Himani Bhargava", "Bengaluru", "Multi", "18", "16", "₹98 L", "89%"],
    ["Diksha", "Hyderabad", "Tea Time", "15", "11", "₹72 L", "73%"],
    ["Om Anil", "Mumbai", "OBC", "12", "10", "₹65 L", "83%"],
    ["Abrar", "Delhi", "Kasturi", "14", "9", "₹58 L", "64%"]
  ],

  leadFunnel: [
    ["New Leads", "486", "100%"],
    ["Contacted", "312", "64%"],
    ["Qualified", "198", "41%"],
    ["Proposal", "98", "20%"],
    ["Negotiation", "72", "15%"],
    ["Converted", "62", "13%"]
  ],

  scheduledReports: [
    { name: "Weekly Sales Summary", type: "Sales Report", frequency: "Weekly", recipients: "CEO, Sales Manager", format: "PDF", nextRun: "28 Jun 2024" },
    { name: "Monthly Revenue", type: "Revenue Report", frequency: "Monthly", recipients: "CEO, Accounts Manager", format: "Excel", nextRun: "01 Jul 2024" },
    { name: "Lead Funnel — Q2", type: "Lead Funnel", frequency: "Quarterly", recipients: "Sales Team", format: "PDF + Excel", nextRun: "01 Jul 2024" }
  ],

  exportHistory: [
    { report: "Q2 Revenue by Brand", format: "PDF", exportedBy: "CEO", date: "25 Jun 2024", size: "2.4 MB" },
    { report: "Team Performance — Jun", format: "Excel", exportedBy: "Sales Manager", date: "24 Jun 2024", size: "890 KB" },
    { report: "Lead Conversion Funnel", format: "CSV", exportedBy: "Himani Bhargava", date: "23 Jun 2024", size: "124 KB" }
  ],

  auditLog: [
    { timestamp: "25 Jun 2024, 11:00:15", user: "Abdul Syed", action: "EXPORT", entity: "Revenue Report", details: "PDF export — Q2 by Brand" },
    { timestamp: "25 Jun 2024, 09:30:42", user: "Sales Manager", action: "VIEW", entity: "Team Performance", details: "Opened team performance dashboard" },
    { timestamp: "24 Jun 2024, 16:45:08", user: "Admin", action: "SCHEDULE", entity: "Weekly Sales", details: "Scheduled weekly report for CEO" },
    { timestamp: "24 Jun 2024, 14:20:33", user: "Himani Bhargava", action: "EXPORT", entity: "Lead Funnel", details: "CSV export — Jun 2024" },
    { timestamp: "23 Jun 2024, 10:15:01", user: "Abdul Syed", action: "SHARE", entity: "Executive Dashboard", details: "Shared with management team" }
  ]
};
