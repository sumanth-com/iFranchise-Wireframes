/* Meeting Management — Mock Data */

const MEETING_DATA = {
  roles: ["CEO", "Team Lead", "Sales Executive", "Brand Owner", "Accounts", "Admin"],
  workflow: ["Scheduled", "Confirmed", "In Progress", "Completed", "Follow-up Pending", "Closed", "Cancelled"],
  types: [
    "Initial Discussion", "Discovery Call", "Brand Presentation", "Site Visit",
    "Investment Discussion", "Legal Discussion", "Agreement Review", "Final Approval"
  ],
  modes: ["Online", "Offline", "Hybrid"],
  brands: ["Odette", "Original Burger Co.", "Kasturi", "Tea Time", "Belgian Waffle Co.", "Third Wave Coffee"],
  customers: ["Rahul Sharma", "Priya Nair", "Arjun Reddy", "Sneha Verma", "Vikram Singh", "Meera Iyer"],
  cities: ["Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi", "Pune", "Kochi", "Mysuru", "Visakhapatnam", "Vijayawada"],
  users: ["Abdul Syed", "Abrar", "Himani Bhargava", "Om Anil", "Sumanth", "Fazil", "Diksha", "Akshita", "Swetha"],

  meetings: [
    {
      id: "MTG-2024-001", title: "Brand Presentation — Odette", type: "Brand Presentation",
      customer: "Rahul Sharma", brand: "Odette", model: "Odette Premium",
      date: "25 Jun 2024", dateRaw: "2024-06-25", start: "10:00", end: "11:00",
      mode: "Online", status: "Confirmed", organizer: "Abdul Syed",
      participants: ["Abdul Syed", "Himani Bhargava", "Rahul Sharma"],
      meetLink: "https://meet.google.com/abc-defg-hij", zoomLink: "",
      location: "", city: "Bengaluru", priority: "High",
      agenda: "Present Odette brand deck, ROI projections, and franchise model overview.",
      discussion: "Investment range, territory availability, timeline to launch.",
      outcome: "Customer to review financials and confirm site visit.",
      notes: "High-priority lead — prepared custom deck for Bengaluru market."
    },
    {
      id: "MTG-2024-002", title: "Discovery Call — Belgian Waffle", type: "Discovery Call",
      customer: "Priya Nair", brand: "Belgian Waffle Co.", model: "Belgian Waffle Express",
      date: "25 Jun 2024", dateRaw: "2024-06-25", start: "14:00", end: "14:45",
      mode: "Online", status: "Scheduled", organizer: "Diksha",
      participants: ["Diksha", "Priya Nair"],
      meetLink: "https://meet.google.com/xyz-uvwx-rst", zoomLink: "",
      location: "", city: "Hyderabad", priority: "Medium",
      agenda: "Understand customer background and investment capacity.",
      discussion: "Experience in F&B, preferred city, budget confirmation.",
      outcome: "Qualify lead for brand presentation.",
      notes: ""
    },
    {
      id: "MTG-2024-003", title: "Site Visit — Indiranagar", type: "Site Visit",
      customer: "Arjun Reddy", brand: "Original Burger Co.", model: "OBC Flagship",
      date: "26 Jun 2024", dateRaw: "2024-06-26", start: "11:00", end: "13:00",
      mode: "Offline", status: "Confirmed", organizer: "Himani Bhargava",
      participants: ["Himani Bhargava", "Fazil", "Arjun Reddy"],
      meetLink: "", zoomLink: "",
      location: "42 MG Road, Indiranagar, Bengaluru", city: "Bengaluru", priority: "High",
      agenda: "Evaluate proposed location footfall, accessibility, and fit-out requirements.",
      discussion: "Rent terms, landlord approval, kitchen layout.",
      outcome: "Site approval recommendation to leadership.",
      notes: "Carry site evaluation checklist."
    },
    {
      id: "MTG-2024-004", title: "Investment Discussion", type: "Investment Discussion",
      customer: "Sneha Verma", brand: "Tea Time", model: "Tea Time Express",
      date: "26 Jun 2024", dateRaw: "2024-06-26", start: "15:30", end: "16:30",
      mode: "Hybrid", status: "Scheduled", organizer: "Om Anil",
      participants: ["Om Anil", "Sneha Verma", "Accounts Team"],
      meetLink: "https://meet.google.com/hybrid-001", zoomLink: "",
      location: "FranchiseCRM Office, Bandra, Mumbai", city: "Mumbai", priority: "High",
      agenda: "Review investment breakdown, payment schedule, and financing options.",
      discussion: "Franchise fee, royalty structure, working capital.",
      outcome: "Agreement on payment milestones.",
      notes: "Accounts team to join for Q&A."
    },
    {
      id: "MTG-2024-005", title: "Agreement Review", type: "Agreement Review",
      customer: "Vikram Singh", brand: "Odette", model: "Odette Premium",
      date: "27 Jun 2024", dateRaw: "2024-06-27", start: "10:00", end: "11:30",
      mode: "Online", status: "Follow-up Pending", organizer: "Sumanth",
      participants: ["Sumanth", "Vikram Singh", "Legal Team"],
      meetLink: "", zoomLink: "https://zoom.us/j/1234567890",
      location: "", city: "Delhi", priority: "High",
      agenda: "Walk through franchise agreement clauses and answer legal queries.",
      discussion: "Territory rights, renewal terms, exit clauses.",
      outcome: "Signed agreement or revision list.",
      notes: "Legal counsel on call."
    },
    {
      id: "MTG-2024-006", title: "Final Approval — Meera Iyer", type: "Final Approval",
      customer: "Meera Iyer", brand: "Kasturi", model: "Kasturi Family Dining",
      date: "28 Jun 2024", dateRaw: "2024-06-28", start: "16:00", end: "17:00",
      mode: "Online", status: "Completed", organizer: "Himani Bhargava",
      participants: ["Himani Bhargava", "Meera Iyer", "CEO"],
      meetLink: "https://meet.google.com/final-appr", zoomLink: "",
      location: "", city: "Pune", priority: "High",
      agenda: "CEO sign-off on franchise approval.",
      discussion: "Final terms, launch timeline, onboarding schedule.",
      outcome: "Approved — move to agreement signing.",
      notes: "Meeting completed successfully."
    }
  ],

  participants: [
    { name: "Abdul Syed", role: "Sales Executive", email: "abdul@franchisecrm.com", status: "Accepted" },
    { name: "Himani Bhargava", role: "Team Lead", email: "himani@franchisecrm.com", status: "Accepted" },
    { name: "Rahul Sharma", role: "Customer", email: "rahul.sharma@email.com", status: "Accepted" },
    { name: "Om Anil", role: "Observer", email: "om@franchisecrm.com", status: "Pending" }
  ],

  documents: [
    { name: "Brand Presentation Deck.pdf", type: "Presentation", size: "4.2 MB", date: "24 Jun 2024" },
    { name: "ROI Calculator.xlsx", type: "Financial", size: "890 KB", date: "24 Jun 2024" },
    { name: "Site Photos — Indiranagar.zip", type: "Site Visit", size: "12.4 MB", date: "20 Jun 2024" },
    { name: "Meeting Minutes — 20 Jun.pdf", type: "Minutes", size: "320 KB", date: "20 Jun 2024" }
  ],

  followups: [
    { task: "Send revised agreement draft", assignee: "Sumanth", due: "26 Jun 2024", status: "Open" },
    { task: "Schedule site visit — Priya Nair", assignee: "Diksha", due: "27 Jun 2024", status: "In Progress" },
    { task: "Share payment schedule", assignee: "Accounts", due: "26 Jun 2024", status: "Completed" },
    { task: "CEO approval follow-up call", assignee: "Himani Bhargava", due: "28 Jun 2024", status: "Open" }
  ],

  outcomes: [
    { item: "Customer interested in Odette Premium model", status: "Achieved", owner: "Abdul Syed" },
    { item: "Site visit scheduled for 26 Jun", status: "Achieved", owner: "Himani Bhargava" },
    { item: "Financial documents pending from customer", status: "Pending", owner: "Rahul Sharma" },
    { item: "Agreement signing target — 30 Jun", status: "In Progress", owner: "Sumanth" }
  ],

  timeline: [
    { time: "24 Jun 2024, 4:00 PM", title: "Meeting confirmed", desc: "Rahul Sharma accepted calendar invite.", user: "System" },
    { time: "24 Jun 2024, 2:30 PM", title: "Agenda updated", desc: "Added ROI discussion section.", user: "Abdul Syed" },
    { time: "23 Jun 2024, 11:00 AM", title: "Meeting scheduled", desc: "Brand Presentation — Odette created.", user: "Abdul Syed" },
    { time: "22 Jun 2024, 3:00 PM", title: "Lead converted", desc: "Lead L-2024-089 linked to meeting.", user: "Abrar" }
  ],

  notes: [
    { author: "Abdul Syed", time: "24 Jun 2024", body: "Customer very engaged during prep call. Expect questions on royalty structure." },
    { author: "Himani Bhargava", time: "23 Jun 2024", body: "Approved custom deck for Bengaluru market data." }
  ],

  kanban: [
    { title: "Scheduled", items: ["Discovery Call — Priya", "Investment Discussion — Sneha"] },
    { title: "Confirmed", items: ["Brand Presentation — Rahul", "Site Visit — Arjun"] },
    { title: "In Progress", items: [] },
    { title: "Follow-up", items: ["Agreement Review — Vikram"] },
    { title: "Completed", items: ["Final Approval — Meera"] }
  ]
};
