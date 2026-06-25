/* Lead Management — Mock data for Enterprise Franchise CRM wireframes */

const LEAD_DATA = {
  brands: [
    "Odette",
    "Original Burger Co.",
    "Kasturi",
    "Chai Point",
    "Wow! Momo",
    "Belgian Waffle Co."
  ],

  cities: [
    "Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Pune",
    "Delhi", "Kochi", "Mysuru", "Visakhapatnam", "Vijayawada"
  ],

  states: [
    "Karnataka", "Telangana", "Tamil Nadu", "Maharashtra",
    "Delhi", "Kerala", "Andhra Pradesh"
  ],

  users: [
    "Abdul Syed", "Abrar", "Himani Bhargava", "Om Anil",
    "Sumanth", "Fazil", "Diksha", "Akshita", "Swetha"
  ],

  sources: [
    "Website", "Referral", "Trade Show", "Cold Call",
    "Social Media", "Partner", "Google Ads", "Meta Ads", "Walk-in"
  ],

  priorities: ["Critical", "High", "Medium", "Low"],

  budgets: [
    "₹10–15 Lakhs", "₹15–25 Lakhs", "₹25–50 Lakhs", "₹50+ Lakhs"
  ],

  pipeline: [
    "New Lead",
    "Contacted",
    "Qualified",
    "Meeting Scheduled",
    "Proposal Shared",
    "Negotiation",
    "Agreement",
    "Payment",
    "Customer Converted",
    "Completed"
  ],

  roles: ["CEO", "Team Lead", "Sales Executive", "Brand Owner", "Admin"],

  leads: [
    {
      id: "LEAD-2024-089",
      name: "Rahul Sharma",
      email: "rahul.sharma@email.com",
      phone: "+91 98765 43210",
      city: "Bengaluru",
      state: "Karnataka",
      brand: "Odette",
      budget: "₹25–50 Lakhs",
      experience: "5 years F&B",
      preferredLocation: "Indiranagar, Bengaluru",
      source: "Website",
      priority: "High",
      salesExec: "Diksha",
      teamLead: "Himani Bhargava",
      stage: "Negotiation",
      score: 82,
      closureDate: "15 Jul 2024",
      notes: "Strong financial background. Interested in premium Odette outlet. Site shortlist ready.",
      approvalStatus: "Approved",
      created: "01 Jun 2024",
      archived: false
    },
    {
      id: "LEAD-2024-102",
      name: "Priya Nair",
      email: "priya.nair@email.com",
      phone: "+91 87654 32109",
      city: "Hyderabad",
      state: "Telangana",
      brand: "Belgian Waffle Co.",
      budget: "₹15–25 Lakhs",
      experience: "3 years Retail",
      preferredLocation: "Jubilee Hills, Hyderabad",
      source: "Referral",
      priority: "High",
      salesExec: "Akshita",
      teamLead: "Himani Bhargava",
      stage: "Meeting Scheduled",
      score: 74,
      closureDate: "28 Jun 2024",
      notes: "Referred by existing franchisee. Wants express format.",
      approvalStatus: "Pending",
      created: "08 Jun 2024",
      archived: false
    },
    {
      id: "LEAD-2024-115",
      name: "Arjun Reddy",
      email: "arjun.reddy@email.com",
      phone: "+91 76543 21098",
      city: "Chennai",
      state: "Tamil Nadu",
      brand: "Original Burger Co.",
      budget: "₹50+ Lakhs",
      experience: "7 years Hospitality",
      preferredLocation: "Anna Nagar, Chennai",
      source: "Trade Show",
      priority: "Critical",
      salesExec: "Fazil",
      teamLead: "Om Anil",
      stage: "Proposal Shared",
      score: 88,
      closureDate: "10 Jul 2024",
      notes: "Multi-unit interest. Evaluating 2–3 locations in Chennai.",
      approvalStatus: "Approved",
      created: "12 Jun 2024",
      archived: false
    },
    {
      id: "LEAD-2024-128",
      name: "Sneha Verma",
      email: "sneha.verma@email.com",
      phone: "+91 65432 10987",
      city: "Mumbai",
      state: "Maharashtra",
      brand: "Chai Point",
      budget: "₹10–15 Lakhs",
      experience: "2 years F&B",
      preferredLocation: "Bandra West, Mumbai",
      source: "Social Media",
      priority: "Medium",
      salesExec: "Swetha",
      teamLead: "Akshita",
      stage: "Qualified",
      score: 61,
      closureDate: "05 Aug 2024",
      notes: "First-time entrepreneur. Needs ROI walkthrough.",
      approvalStatus: "Not Required",
      created: "15 Jun 2024",
      archived: false
    },
    {
      id: "LEAD-2024-134",
      name: "Vikram Singh",
      email: "vikram.singh@email.com",
      phone: "+91 43210 98765",
      city: "Delhi",
      state: "Delhi",
      brand: "Wow! Momo",
      budget: "₹20–30 Lakhs",
      experience: "6 years F&B",
      preferredLocation: "Connaught Place, Delhi",
      source: "Google Ads",
      priority: "High",
      salesExec: "Abrar",
      teamLead: "Om Anil",
      stage: "Contacted",
      score: 55,
      closureDate: "20 Jul 2024",
      notes: "Responded to Google campaign. Requested brochure via WhatsApp.",
      approvalStatus: "Not Required",
      created: "18 Jun 2024",
      archived: false
    },
    {
      id: "LEAD-2024-141",
      name: "Meera Iyer",
      email: "meera.iyer@email.com",
      phone: "+91 54321 09876",
      city: "Pune",
      state: "Maharashtra",
      brand: "Kasturi",
      budget: "₹20–30 Lakhs",
      experience: "4 years Retail",
      preferredLocation: "FC Road, Pune",
      source: "Partner",
      priority: "Medium",
      salesExec: "Diksha",
      teamLead: "Himani Bhargava",
      stage: "New Lead",
      score: 42,
      closureDate: "30 Aug 2024",
      notes: "Inbound from partner portal. Awaiting first call.",
      approvalStatus: "Not Required",
      created: "22 Jun 2024",
      archived: false
    },
    {
      id: "LEAD-2024-148",
      name: "Karthik Menon",
      email: "karthik.menon@email.com",
      phone: "+91 99887 76655",
      city: "Kochi",
      state: "Kerala",
      brand: "Odette",
      budget: "₹25–50 Lakhs",
      experience: "8 years Hospitality",
      preferredLocation: "Marine Drive, Kochi",
      source: "Website",
      priority: "High",
      salesExec: "Sumanth",
      teamLead: "Himani Bhargava",
      stage: "Agreement",
      score: 91,
      closureDate: "02 Jul 2024",
      notes: "Legal review in progress. Agreement draft shared.",
      approvalStatus: "Approved",
      created: "25 May 2024",
      archived: false
    },
    {
      id: "LEAD-2024-152",
      name: "Ananya Desai",
      email: "ananya.desai@email.com",
      phone: "+91 88776 65544",
      city: "Mysuru",
      state: "Karnataka",
      brand: "Chai Point",
      budget: "₹15–25 Lakhs",
      experience: "1 year F&B",
      preferredLocation: "VV Mohalla, Mysuru",
      source: "Walk-in",
      priority: "Low",
      salesExec: "Akshita",
      teamLead: "Himani Bhargava",
      stage: "Payment",
      score: 79,
      closureDate: "25 Jun 2024",
      notes: "Token amount pending. NEFT expected by EOD.",
      approvalStatus: "Approved",
      created: "10 May 2024",
      archived: false
    },
    {
      id: "LEAD-2024-158",
      name: "Ravi Kumar",
      email: "ravi.kumar@email.com",
      phone: "+91 77665 54433",
      city: "Visakhapatnam",
      state: "Andhra Pradesh",
      brand: "Wow! Momo",
      budget: "₹10–15 Lakhs",
      experience: "3 years Retail",
      preferredLocation: "Beach Road, Vizag",
      source: "Meta Ads",
      priority: "Medium",
      salesExec: "Fazil",
      teamLead: "Om Anil",
      stage: "Customer Converted",
      score: 95,
      closureDate: "18 Jun 2024",
      notes: "Converted to CUS-2024-007. Onboarding initiated.",
      approvalStatus: "Approved",
      created: "02 Apr 2024",
      archived: false
    },
    {
      id: "LEAD-2024-163",
      name: "Deepa Rao",
      email: "deepa.rao@email.com",
      phone: "+91 66554 43322",
      city: "Vijayawada",
      state: "Andhra Pradesh",
      brand: "Belgian Waffle Co.",
      budget: "₹15–25 Lakhs",
      experience: "5 years F&B",
      preferredLocation: "Benz Circle, Vijayawada",
      source: "Cold Call",
      priority: "Medium",
      salesExec: "Swetha",
      teamLead: "Akshita",
      stage: "Completed",
      score: 100,
      closureDate: "01 Jun 2024",
      notes: "Fully onboarded. Outlet operational since May 2024.",
      approvalStatus: "Approved",
      created: "15 Jan 2024",
      archived: false
    }
  ],

  archivedLeads: [
    {
      id: "LEAD-2024-041",
      name: "Sanjay Patel",
      email: "sanjay.patel@email.com",
      phone: "+91 91234 56780",
      city: "Ahmedabad",
      state: "Gujarat",
      brand: "Odette",
      budget: "₹25–50 Lakhs",
      experience: "4 years Retail",
      preferredLocation: "Satellite, Ahmedabad",
      source: "Website",
      priority: "Low",
      salesExec: "Diksha",
      teamLead: "Himani Bhargava",
      stage: "Contacted",
      score: 28,
      closureDate: "—",
      notes: "Not interested — budget mismatch.",
      approvalStatus: "Not Required",
      created: "10 Mar 2024",
      archived: true,
      archivedDate: "28 Mar 2024",
      archivedReason: "Not Interested"
    },
    {
      id: "LEAD-2024-055",
      name: "Lakshmi Venkat",
      email: "lakshmi.v@email.com",
      phone: "+91 92345 67801",
      city: "Coimbatore",
      state: "Tamil Nadu",
      brand: "Kasturi",
      budget: "₹10–15 Lakhs",
      experience: "2 years F&B",
      preferredLocation: "RS Puram, Coimbatore",
      source: "Referral",
      priority: "Medium",
      salesExec: "Akshita",
      teamLead: "Himani Bhargava",
      stage: "Qualified",
      score: 45,
      closureDate: "—",
      notes: "Duplicate entry — merged with LEAD-2024-038.",
      approvalStatus: "Not Required",
      created: "05 Apr 2024",
      archived: true,
      archivedDate: "12 Apr 2024",
      archivedReason: "Duplicate"
    },
    {
      id: "LEAD-2024-067",
      name: "Imran Khan",
      email: "imran.khan@email.com",
      phone: "+91 93456 78912",
      city: "Lucknow",
      state: "Uttar Pradesh",
      brand: "Chai Point",
      budget: "₹15–25 Lakhs",
      experience: "3 years Retail",
      preferredLocation: "Hazratganj, Lucknow",
      source: "Cold Call",
      priority: "Low",
      salesExec: "Fazil",
      teamLead: "Om Anil",
      stage: "New Lead",
      score: 18,
      closureDate: "—",
      notes: "No response after 5 follow-up attempts.",
      approvalStatus: "Not Required",
      created: "20 Apr 2024",
      archived: true,
      archivedDate: "15 May 2024",
      archivedReason: "Unresponsive"
    }
  ],

  timeline: [
    { time: "24 Jun 2024, 11:30 AM", title: "Stage updated", desc: "Moved from Proposal Shared to Negotiation.", user: "Diksha" },
    { time: "23 Jun 2024, 3:00 PM", title: "Proposal sent", desc: "Odette Premium franchise proposal shared via email.", user: "Diksha" },
    { time: "20 Jun 2024, 10:00 AM", title: "Meeting completed", desc: "Brand presentation — 45 min. Customer positive on ROI.", user: "Himani Bhargava" },
    { time: "18 Jun 2024, 2:15 PM", title: "Meeting scheduled", desc: "Online meeting set for 20 Jun, 10:00 AM IST.", user: "Diksha" },
    { time: "15 Jun 2024, 9:45 AM", title: "Lead qualified", desc: "Budget and experience verified. Score updated to 74.", user: "Diksha" },
    { time: "12 Jun 2024, 4:00 PM", title: "First contact", desc: "Introductory call — 18 min. Sent brand brochure on WhatsApp.", user: "Diksha" },
    { time: "08 Jun 2024, 11:00 AM", title: "Lead assigned", desc: "Assigned to Diksha (Sales Executive). Team Lead: Himani Bhargava.", user: "Abrar" },
    { time: "01 Jun 2024, 9:30 AM", title: "Lead created", desc: "Inbound from website enquiry form — Odette Bengaluru.", user: "System" }
  ],

  followups: [
    { id: "FU-2024-0891", task: "Send revised ROI sheet — Indiranagar", assignee: "Diksha", due: "26 Jun 2024", priority: "High", status: "Open", channel: "Email" },
    { id: "FU-2024-0892", task: "Confirm site visit slot — Jubilee Hills", assignee: "Akshita", due: "25 Jun 2024", priority: "High", status: "In Progress", channel: "WhatsApp" },
    { id: "FU-2024-0893", task: "Follow up on proposal — Anna Nagar", assignee: "Fazil", due: "27 Jun 2024", priority: "Medium", status: "Open", channel: "Call" },
    { id: "FU-2024-0894", task: "Share Chai Point ROI calculator", assignee: "Swetha", due: "28 Jun 2024", priority: "Medium", status: "Open", channel: "Email" },
    { id: "FU-2024-0895", task: "WhatsApp brochure — Wow! Momo Delhi", assignee: "Abrar", due: "24 Jun 2024", priority: "Low", status: "Completed", channel: "WhatsApp" }
  ],

  meetings: [
    { id: "MTG-2024-441", title: "Brand Presentation — Odette", lead: "Rahul Sharma", brand: "Odette", date: "20 Jun 2024", start: "10:00 AM", end: "10:45 AM", mode: "Online", status: "Completed", organizer: "Diksha", outcome: "Positive — proposal requested" },
    { id: "MTG-2024-448", title: "Site Visit — Jubilee Hills", lead: "Priya Nair", brand: "Belgian Waffle Co.", date: "26 Jun 2024", start: "2:00 PM", end: "3:30 PM", mode: "Offline", status: "Scheduled", organizer: "Akshita", outcome: "—" },
    { id: "MTG-2024-452", title: "Investment Discussion — OBC", lead: "Arjun Reddy", brand: "Original Burger Co.", date: "18 Jun 2024", start: "11:00 AM", end: "12:00 PM", mode: "Online", status: "Completed", organizer: "Fazil", outcome: "Multi-unit terms discussed" },
    { id: "MTG-2024-459", title: "Discovery Call — Chai Point", lead: "Sneha Verma", brand: "Chai Point", date: "28 Jun 2024", start: "4:00 PM", end: "4:30 PM", mode: "Online", status: "Scheduled", organizer: "Swetha", outcome: "—" },
    { id: "MTG-2024-463", title: "Agreement Review — Kasturi", lead: "Meera Iyer", brand: "Kasturi", date: "15 Jun 2024", start: "3:00 PM", end: "3:45 PM", mode: "Offline", status: "Cancelled", organizer: "Diksha", outcome: "Rescheduled — lead unavailable" }
  ],

  documents: [
    { name: "Odette Franchise Proposal — Rahul Sharma.pdf", type: "Proposal", size: "3.2 MB", date: "23 Jun 2024", user: "Diksha" },
    { name: "ROI Projection — Indiranagar.xlsx", type: "Financial", size: "890 KB", date: "24 Jun 2024", user: "Diksha" },
    { name: "Site Photos — Jubilee Hills.zip", type: "Site Visit", size: "12.4 MB", date: "20 Jun 2024", user: "Akshita" },
    { name: "PAN Card — Rahul Sharma.pdf", type: "KYC", size: "420 KB", date: "12 Jun 2024", user: "Rahul Sharma" },
    { name: "Brand Brochure — Odette Premium.pdf", type: "Marketing", size: "5.1 MB", date: "12 Jun 2024", user: "Diksha" }
  ],

  notes: [
    { author: "Diksha", time: "24 Jun 2024, 11:45 AM", body: "Customer requested revised ROI with 15% higher footfall assumption for Indiranagar location." },
    { author: "Himani Bhargava", time: "20 Jun 2024, 10:50 AM", body: "Presentation went well. Rahul has F&B background — strong fit for Odette Premium format." },
    { author: "Abdul Syed", time: "15 Jun 2024, 2:00 PM", body: "CEO review — approve fast-track for high-score leads above 80 in Bengaluru market." },
    { author: "Abrar", time: "08 Jun 2024, 9:35 AM", body: "Auto-assigned based on territory rules — South India queue." }
  ],

  communications: [
    { type: "WhatsApp", subject: "Odette brochure + ROI summary", date: "24 Jun 2024, 10:15 AM", from: "Diksha", to: "Rahul Sharma", status: "Read" },
    { type: "Email", subject: "Odette Premium — Franchise Proposal", date: "23 Jun 2024, 3:00 PM", from: "Diksha", to: "Rahul Sharma", status: "Opened" },
    { type: "Call", subject: "Negotiation follow-up", date: "22 Jun 2024, 4:30 PM", from: "Diksha", to: "Rahul Sharma", status: "Completed — 22 min" },
    { type: "Email", subject: "Meeting confirmation — 20 Jun", date: "18 Jun 2024, 9:00 AM", from: "Diksha", to: "Rahul Sharma", status: "Delivered" },
    { type: "WhatsApp", subject: "Welcome message + next steps", date: "12 Jun 2024, 4:05 PM", from: "Diksha", to: "Rahul Sharma", status: "Delivered" },
    { type: "Call", subject: "Introductory call", date: "12 Jun 2024, 4:00 PM", from: "Diksha", to: "Rahul Sharma", status: "Completed — 18 min" }
  ],

  whatsappHistory: [
    { date: "24 Jun 2024, 10:15 AM", direction: "Outbound", message: "Hi Rahul, sharing the updated ROI sheet for Indiranagar. Please review.", status: "Read" },
    { date: "24 Jun 2024, 10:42 AM", direction: "Inbound", message: "Thanks Diksha. Will review tonight and revert tomorrow.", status: "Received" },
    { date: "12 Jun 2024, 4:05 PM", direction: "Outbound", message: "Welcome to iFranchise! Here is the Odette brand brochure.", status: "Delivered" }
  ],

  emailHistory: [
    { date: "23 Jun 2024, 3:00 PM", subject: "Odette Premium — Franchise Proposal", from: "Diksha", status: "Opened", attachments: 2 },
    { date: "18 Jun 2024, 9:00 AM", subject: "Meeting confirmation — Brand Presentation", from: "Diksha", status: "Delivered", attachments: 1 },
    { date: "08 Jun 2024, 11:30 AM", subject: "Thank you for your enquiry — Odette", from: "System", status: "Delivered", attachments: 0 }
  ],

  callHistory: [
    { date: "22 Jun 2024, 4:30 PM", direction: "Outbound", duration: "22 min", outcome: "Proposal discussion", agent: "Diksha", recording: "Available" },
    { date: "12 Jun 2024, 4:00 PM", direction: "Outbound", duration: "18 min", outcome: "Qualified Lead", agent: "Diksha", recording: "Available" },
    { date: "01 Jun 2024, 9:35 AM", direction: "Inbound", duration: "5 min", outcome: "Callback Scheduled", agent: "Abrar", recording: "—" }
  ],

  tasks: [
    { title: "Prepare revised ROI — Indiranagar", assignee: "Diksha", due: "26 Jun 2024", priority: "High", status: "Open" },
    { title: "Legal review — agreement draft", assignee: "Fazil", due: "28 Jun 2024", priority: "High", status: "In Progress" },
    { title: "Upload signed NDA", assignee: "Rahul Sharma", due: "25 Jun 2024", priority: "Medium", status: "Open" },
    { title: "Schedule site visit — Priya Nair", assignee: "Akshita", due: "24 Jun 2024", priority: "High", status: "Completed" }
  ],

  activityLog: [
    { time: "24 Jun 2024, 11:30 AM", action: "Stage changed", detail: "Proposal Shared → Negotiation", user: "Diksha", ip: "192.168.1.45" },
    { time: "23 Jun 2024, 3:05 PM", action: "Document uploaded", detail: "Odette Franchise Proposal — Rahul Sharma.pdf", user: "Diksha", ip: "192.168.1.45" },
    { time: "20 Jun 2024, 10:50 AM", action: "Meeting logged", detail: "Brand Presentation — Completed (45 min)", user: "Himani Bhargava", ip: "10.0.0.12" },
    { time: "15 Jun 2024, 9:50 AM", action: "Score updated", detail: "Lead score: 68 → 74", user: "Diksha", ip: "192.168.1.45" },
    { time: "08 Jun 2024, 11:00 AM", action: "Assignment changed", detail: "Assigned to Diksha · Team Lead: Himani Bhargava", user: "Abrar", ip: "10.0.0.8" },
    { time: "01 Jun 2024, 9:30 AM", action: "Lead created", detail: "LEAD-2024-089 — Rahul Sharma", user: "System", ip: "—" }
  ],

  dashboard: {
    period: "June 2026",
    kpis: [
      { label: "Total Leads", value: "247", meta: "↑ 12 this week", icon: "◎" },
      { label: "New This Month", value: "54", meta: "Jun 2026", icon: "＋" },
      { label: "Qualified", value: "62", meta: "25% qualify rate", icon: "✓" },
      { label: "Converted", value: "18", meta: "29% conv. rate", icon: "★" },
      { label: "Pipeline Value", value: "₹4.2Cr", meta: "Active pipeline", icon: "₹", small: true },
      { label: "Avg Lead Score", value: "74", meta: "+3 vs last month", icon: "◆" }
    ],
    pipelineByStage: [
      { label: "New Lead", short: "New Lead", xlabel: "New Lead", value: 42 },
      { label: "Contacted", short: "Contacted", xlabel: "Contacted", value: 38 },
      { label: "Qualified", short: "Qualified", xlabel: "Qualified", value: 35 },
      { label: "Meeting Scheduled", short: "Mtg Scheduled", xlabel: "Mtg Sched.", value: 28 },
      { label: "Proposal Shared", short: "Proposal", xlabel: "Proposal", value: 24 },
      { label: "Negotiation", short: "Negotiation", xlabel: "Negotiation", value: 18 },
      { label: "Agreement", short: "Agreement", xlabel: "Agreement", value: 14 },
      { label: "Payment", short: "Payment", xlabel: "Payment", value: 12 },
      { label: "Customer Converted", short: "Converted", xlabel: "Converted", value: 10 },
      { label: "Completed", short: "Completed", xlabel: "Completed", value: 36 }
    ],
    monthlyTrend: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      leads: [28, 35, 42, 38, 48, 55],
      converted: [5, 6, 7, 6, 9, 12]
    },
    topPerformers: [
      { name: "Diksha", initials: "DK", assigned: 38, converted: 12, rate: "32%" },
      { name: "Akshita", initials: "AK", assigned: 34, converted: 10, rate: "29%" },
      { name: "Fazil", initials: "FZ", assigned: 31, converted: 8, rate: "26%" },
      { name: "Swetha", initials: "SW", assigned: 28, converted: 7, rate: "25%" },
      { name: "Abrar", initials: "AB", assigned: 26, converted: 6, rate: "23%" }
    ],
    recentActivity: [
      { type: "stage", html: "<strong>Abdul Syed</strong> moved <strong>Deepak Rao</strong> to Payment", ago: "2 mins ago" },
      { type: "call", html: "<strong>Diksha</strong> logged a call with <strong>Rahul Sharma</strong>", ago: "18 mins ago" },
      { type: "doc", html: "<strong>Akshita</strong> uploaded proposal for <strong>Priya Nair</strong>", ago: "42 mins ago" },
      { type: "meeting", html: "<strong>Fazil</strong> scheduled meeting with <strong>Arjun Reddy</strong>", ago: "1 hr ago" },
      { type: "lead", html: "<strong>System</strong> created lead <strong>Vikram Patel</strong> — Wow! Momo", ago: "2 hrs ago" },
      { type: "stage", html: "<strong>Himani Bhargava</strong> qualified <strong>Meera Iyer</strong>", ago: "3 hrs ago" }
    ],
    brandCounts: [
      { name: "Odette", count: 34 },
      { name: "Chai Point", count: 35 },
      { name: "Wow! Momo", count: 32 },
      { name: "Belgian Waffle Co.", count: 28 },
      { name: "Original Burger Co.", count: 26 },
      { name: "Kasturi", count: 22 }
    ]
  },

  approvals: [
    { id: "APR-LEAD-038", type: "High-Value Lead Approval", status: "Approved", approver: "Abdul Syed", date: "14 Jun 2024", notes: "Approved for fast-track — score 82+" },
    { id: "APR-LEAD-041", type: "Territory Allocation", status: "Pending", approver: "Om Anil", date: "—", notes: "Awaiting brand owner sign-off for Anna Nagar" }
  ]
};
