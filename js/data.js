/* Mock data for Enterprise Franchise CRM wireframes */

const WF_DATA = {
  brands: [
    "Odette",
    "Original Burger Co.",
    "Kasturi",
    "Belgian Waffle Co.",
    "Chai Point"
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

  statuses: [
    "Active", "Onboarding", "Pending Agreement", "Payment Due", "Inactive"
  ],

  agreementStatuses: [
    "Signed", "Pending Signature", "Draft", "Expired", "Not Started"
  ],

  paymentStatuses: [
    "Paid", "Partial", "Overdue", "Pending", "Refunded"
  ],

  sources: [
    "Website", "Referral", "Trade Show", "Cold Call", "Social Media", "Partner"
  ],

  customers: [
    {
      id: "CUS-2024-001",
      name: "Rahul Sharma",
      email: "rahul.sharma@email.com",
      phone: "+91 98765 43210",
      altPhone: "+91 98765 43211",
      address: "42 MG Road, Indiranagar",
      city: "Bengaluru",
      state: "Karnataka",
      pin: "560038",
      experience: "5 years F&B",
      budget: "₹25–50 Lakhs",
      status: "Active",
      brand: "Odette",
      salesExec: "Abdul Syed",
      teamLead: "Himani Bhargava",
      agreementStatus: "Signed",
      paymentStatus: "Paid",
      source: "Website",
      remarks: "High priority — ready for second outlet.",
      franchise: "Odette — Indiranagar",
      created: "12 Jan 2024"
    },
    {
      id: "CUS-2024-002",
      name: "Priya Nair",
      email: "priya.nair@email.com",
      phone: "+91 87654 32109",
      altPhone: "",
      address: "15 Jubilee Hills",
      city: "Hyderabad",
      state: "Telangana",
      pin: "500033",
      experience: "3 years Retail",
      budget: "₹15–25 Lakhs",
      status: "Onboarding",
      brand: "Belgian Waffle Co.",
      salesExec: "Abrar",
      teamLead: "Om Anil",
      agreementStatus: "Pending Signature",
      paymentStatus: "Partial",
      source: "Referral",
      remarks: "Awaiting site visit confirmation.",
      franchise: "Belgian Waffle Co. — Jubilee Hills",
      created: "28 Feb 2024"
    },
    {
      id: "CUS-2024-003",
      name: "Arjun Reddy",
      email: "arjun.reddy@email.com",
      phone: "+91 76543 21098",
      altPhone: "+91 76543 21099",
      address: "8 Anna Salai",
      city: "Chennai",
      state: "Tamil Nadu",
      pin: "600002",
      experience: "7 years Hospitality",
      budget: "₹50+ Lakhs",
      status: "Pending Agreement",
      brand: "Original Burger Co.",
      salesExec: "Fazil",
      teamLead: "Sumanth",
      agreementStatus: "Draft",
      paymentStatus: "Pending",
      source: "Trade Show",
      remarks: "Interested in multi-unit deal.",
      franchise: "—",
      created: "15 Mar 2024"
    },
    {
      id: "CUS-2024-004",
      name: "Sneha Verma",
      email: "sneha.verma@email.com",
      phone: "+91 65432 10987",
      altPhone: "",
      address: "22 Bandra West",
      city: "Mumbai",
      state: "Maharashtra",
      pin: "400050",
      experience: "2 years F&B",
      budget: "₹10–15 Lakhs",
      status: "Payment Due",
      brand: "Chai Point",
      salesExec: "Diksha",
      teamLead: "Akshita",
      agreementStatus: "Signed",
      paymentStatus: "Overdue",
      source: "Social Media",
      remarks: "Follow up on overdue installment.",
      franchise: "Chai Point — Bandra",
      created: "02 Apr 2024"
    },
    {
      id: "CUS-2024-005",
      name: "Meera Iyer",
      email: "meera.iyer@email.com",
      phone: "+91 54321 09876",
      altPhone: "+91 54321 09877",
      address: "5 FC Road",
      city: "Pune",
      state: "Maharashtra",
      pin: "411004",
      experience: "4 years Retail",
      budget: "₹20–30 Lakhs",
      status: "Active",
      brand: "Kasturi",
      salesExec: "Swetha",
      teamLead: "Himani Bhargava",
      agreementStatus: "Signed",
      paymentStatus: "Paid",
      source: "Partner",
      remarks: "Excellent operational metrics.",
      franchise: "Kasturi — FC Road",
      created: "20 May 2024"
    },
    {
      id: "CUS-2024-006",
      name: "Vikram Singh",
      email: "vikram.singh@email.com",
      phone: "+91 43210 98765",
      altPhone: "",
      address: "18 Connaught Place",
      city: "Delhi",
      state: "Delhi",
      pin: "110001",
      experience: "6 years F&B",
      budget: "₹30–40 Lakhs",
      status: "Inactive",
      brand: "Odette",
      salesExec: "Abdul Syed",
      teamLead: "Om Anil",
      agreementStatus: "Expired",
      paymentStatus: "Refunded",
      source: "Cold Call",
      remarks: "Closed — relocated overseas.",
      franchise: "—",
      created: "08 Jun 2023"
    }
  ],

  timeline: [
    { time: "23 Jun 2024, 10:30 AM", title: "Agreement Signed", desc: "Franchise agreement signed digitally by Rahul Sharma.", user: "Abdul Syed" },
    { time: "20 Jun 2024, 2:00 PM", title: "Site Visit Completed", desc: "Location approved at Indiranagar, Bengaluru.", user: "Himani Bhargava" },
    { time: "15 Jun 2024, 11:00 AM", title: "Payment Received", desc: "Initial franchise fee of ₹15,00,000 received.", user: "System" },
    { time: "10 Jun 2024, 4:30 PM", title: "Meeting — Brand Presentation", desc: "Presented Odette brand deck and ROI projections.", user: "Abdul Syed" },
    { time: "05 Jun 2024, 9:00 AM", title: "Lead Converted to Customer", desc: "Lead L-2024-089 converted after qualification.", user: "Abrar" },
    { time: "01 Jun 2024, 3:15 PM", title: "Customer Created", desc: "Customer record created in CRM.", user: "Abdul Syed" }
  ],

  documents: [
    { name: "Franchise Agreement — Signed.pdf", type: "Agreement", size: "2.4 MB", date: "23 Jun 2024", user: "Abdul Syed" },
    { name: "ID Proof — Aadhaar.pdf", type: "KYC", size: "1.1 MB", date: "10 Jun 2024", user: "Rahul Sharma" },
    { name: "Bank Statement — Jun 2024.pdf", type: "Financial", size: "890 KB", date: "12 Jun 2024", user: "Rahul Sharma" },
    { name: "Site Photos — Indiranagar.zip", type: "Site Visit", size: "15.2 MB", date: "20 Jun 2024", user: "Himani Bhargava" },
    { name: "GST Certificate.pdf", type: "KYC", size: "450 KB", date: "08 Jun 2024", user: "Rahul Sharma" }
  ],

  agreements: [
    { id: "AGR-2024-001", brand: "Odette", type: "Franchise Agreement", status: "Signed", signedDate: "23 Jun 2024", expiry: "22 Jun 2029", value: "₹15,00,000" },
    { id: "AGR-2024-002", brand: "Odette", type: "NDA", status: "Signed", signedDate: "05 Jun 2024", expiry: "04 Jun 2027", value: "—" },
    { id: "AGR-2024-003", brand: "Odette", type: "Area Development", status: "Draft", signedDate: "—", expiry: "—", value: "₹25,00,000" }
  ],

  payments: [
    { id: "PAY-2024-001", date: "15 Jun 2024", type: "Franchise Fee", amount: "₹15,00,000", method: "Bank Transfer", status: "Paid", ref: "TXN-88421" },
    { id: "PAY-2024-002", date: "01 Jul 2024", type: "Royalty — Q2", amount: "₹45,000", method: "Auto Debit", status: "Paid", ref: "TXN-89102" },
    { id: "PAY-2024-003", date: "01 Oct 2024", type: "Royalty — Q3", amount: "₹48,500", method: "Auto Debit", status: "Pending", ref: "—" },
    { id: "PAY-2024-004", date: "15 Sep 2024", type: "Marketing Fund", amount: "₹25,000", method: "Cheque", status: "Paid", ref: "CHQ-4421" }
  ],

  communications: [
    { type: "Email", subject: "Agreement signing reminder", date: "22 Jun 2024, 9:00 AM", from: "Abdul Syed", to: "Rahul Sharma", status: "Delivered" },
    { type: "Call", subject: "Site visit follow-up", date: "21 Jun 2024, 3:30 PM", from: "Himani Bhargava", to: "Rahul Sharma", status: "Completed — 12 min" },
    { type: "SMS", subject: "Payment confirmation", date: "15 Jun 2024, 11:05 AM", from: "System", to: "Rahul Sharma", status: "Delivered" },
    { type: "Email", subject: "Welcome to Odette Franchise", date: "10 Jun 2024, 10:00 AM", from: "Om Anil", to: "Rahul Sharma", status: "Opened" },
    { type: "Meeting", subject: "Brand presentation — Odette", date: "10 Jun 2024, 4:30 PM", from: "Abdul Syed", to: "Rahul Sharma", status: "Completed" }
  ],

  notes: [
    { author: "Abdul Syed", time: "23 Jun 2024, 11:00 AM", body: "Customer very engaged. Discussed expansion plans for second outlet in 2025." },
    { author: "Himani Bhargava", time: "20 Jun 2024, 3:00 PM", body: "Site visit went well. Location has good footfall. Recommended for approval." },
    { author: "Om Anil", time: "10 Jun 2024, 5:00 PM", body: "Presented full brand deck. Customer asked for 48 hours to review financials." },
    { author: "Abrar", time: "05 Jun 2024, 10:00 AM", body: "Converted from lead. Strong financial background — prioritize onboarding." }
  ],

  tasks: [
    { title: "Schedule Q3 royalty collection", assignee: "Abdul Syed", due: "01 Oct 2024", priority: "High", status: "Open" },
    { title: "Send expansion proposal — Outlet 2", assignee: "Himani Bhargava", due: "30 Sep 2024", priority: "Medium", status: "In Progress" },
    { title: "Upload signed area development agreement", assignee: "Fazil", due: "15 Jul 2024", priority: "High", status: "Completed" },
    { title: "Quarterly business review call", assignee: "Om Anil", due: "05 Jul 2024", priority: "Low", status: "Open" }
  ],

  activityLog: [
    { time: "23 Jun 2024, 10:35 AM", action: "Agreement status updated", detail: "Changed from Pending Signature to Signed", user: "Abdul Syed", ip: "192.168.1.45" },
    { time: "23 Jun 2024, 10:30 AM", action: "Document uploaded", detail: "Franchise Agreement — Signed.pdf", user: "Abdul Syed", ip: "192.168.1.45" },
    { time: "20 Jun 2024, 2:15 PM", action: "Field updated", detail: "Assigned Franchise → Odette — Indiranagar", user: "Himani Bhargava", ip: "10.0.0.12" },
    { time: "15 Jun 2024, 11:10 AM", action: "Payment recorded", detail: "₹15,00,000 — Franchise Fee", user: "System", ip: "—" },
    { time: "10 Jun 2024, 4:45 PM", action: "Meeting logged", detail: "Brand Presentation — 45 min", user: "Abdul Syed", ip: "192.168.1.45" },
    { time: "05 Jun 2024, 9:05 AM", action: "Status changed", detail: "Onboarding → Active", user: "Abrar", ip: "10.0.0.8" },
    { time: "01 Jun 2024, 3:20 PM", action: "Customer created", detail: "CUS-2024-001 — Rahul Sharma", user: "Abdul Syed", ip: "192.168.1.45" }
  ]
};
