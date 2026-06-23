/* Document Management — Mock Data */

const DOCUMENT_DATA = {
  roles: ["CEO", "Admin", "Operations Manager", "Accounts", "Sales Manager", "Sales Executive", "Brand Owner", "Customer"],
  workflow: ["Uploaded", "Pending Verification", "Verified", "Approved", "Archived"],
  altStatuses: ["Rejected"],
  categories: [
    "Lead Documents", "Customer Documents", "Brand Documents", "Franchise Model Documents",
    "Meeting Documents", "Agreement Documents", "Payment Receipts", "Invoices",
    "GST Certificates", "KYC Documents", "Legal Agreements", "Training Documents", "Marketing Assets"
  ],
  types: ["PAN", "Aadhaar", "Bank Details", "GST Certificate", "Property Documents", "Franchise Agreement", "Payment Receipt", "Invoice", "Brand Deck", "Training Manual", "Marketing Brochure", "Site Evaluation", "Legal NOC", "Other"],
  modules: ["Leads", "Customers", "Brands", "Franchise Models", "Meetings", "Agreements", "Payments", "Approvals"],
  brands: ["Odette", "Original Burger Co.", "Kasturi", "Tea Time", "Belgian Waffle Co.", "Third Wave Coffee"],
  customers: ["Rahul Sharma", "Priya Nair", "Arjun Reddy", "Sneha Verma", "Vikram Singh", "Meera Iyer"],
  cities: ["Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi", "Pune", "Kochi", "Mysuru", "Ahmedabad", "Coimbatore"],
  users: ["Abdul Syed", "Abrar", "Himani Bhargava", "Om Anil", "Sumanth", "Fazil", "Diksha", "Akshita", "Swetha"],

  documents: [
    {
      id: "DOC-2024-156", name: "PAN Card — Rahul Sharma", category: "KYC Documents", type: "PAN",
      module: "Customers", customer: "Rahul Sharma", brand: "Odette", model: "Odette Premium",
      linkedTo: "Rahul Sharma · CUS-2024-089", uploadedBy: "Abdul Syed", uploadDate: "24 Jun 2024", uploadDateRaw: "2024-06-24",
      expiryDate: "—", expiryDateRaw: "", size: "420 KB", fileType: "PDF", version: 1,
      status: "Pending Verification", verification: "Pending", approvedBy: "",
      agreement: "", payment: "", tags: ["kyc", "pan", "bengaluru"], remarks: "PAN verification pending — submitted with onboarding pack.",
      city: "Bengaluru", downloads: 3
    },
    {
      id: "DOC-2024-155", name: "Aadhaar — Priya Nair", category: "KYC Documents", type: "Aadhaar",
      module: "Customers", customer: "Priya Nair", brand: "Tea Time", model: "Tea Time Express",
      linkedTo: "Priya Nair · CUS-2024-092", uploadedBy: "Diksha", uploadDate: "23 Jun 2024", uploadDateRaw: "2024-06-23",
      expiryDate: "—", expiryDateRaw: "", size: "1.2 MB", fileType: "PDF", version: 2,
      status: "Verified", verification: "Verified", approvedBy: "Fazil",
      agreement: "", payment: "", tags: ["kyc", "aadhaar"], remarks: "v2 uploaded — clearer scan.",
      city: "Hyderabad", downloads: 5
    },
    {
      id: "DOC-2024-154", name: "Franchise Agreement — Meera Iyer", category: "Agreement Documents", type: "Franchise Agreement",
      module: "Agreements", customer: "Meera Iyer", brand: "Kasturi", model: "Kasturi Family Dining",
      linkedTo: "AGR-2024-018", uploadedBy: "Sumanth", uploadDate: "22 Jun 2024", uploadDateRaw: "2024-06-22",
      expiryDate: "22 Jun 2029", expiryDateRaw: "2029-06-22", size: "3.8 MB", fileType: "PDF", version: 3,
      status: "Approved", verification: "Verified", approvedBy: "CEO",
      agreement: "AGR-2024-018", payment: "", tags: ["agreement", "kasturi", "pune"], remarks: "Final signed agreement — CEO approved.",
      city: "Pune", downloads: 12
    },
    {
      id: "DOC-2024-153", name: "NEFT Receipt — Vikram Singh", category: "Payment Receipts", type: "Payment Receipt",
      module: "Payments", customer: "Vikram Singh", brand: "Odette", model: "Odette Premium",
      linkedTo: "PAY-2024-087", uploadedBy: "Fazil", uploadDate: "22 Jun 2024", uploadDateRaw: "2024-06-22",
      expiryDate: "—", expiryDateRaw: "", size: "280 KB", fileType: "PDF", version: 1,
      status: "Approved", verification: "Verified", approvedBy: "Fazil",
      agreement: "", payment: "PAY-2024-087", tags: ["payment", "neft"], remarks: "Security deposit receipt verified.",
      city: "Delhi", downloads: 4
    },
    {
      id: "DOC-2024-152", name: "GST Certificate — Odette Bengaluru", category: "GST Certificates", type: "GST Certificate",
      module: "Brands", customer: "", brand: "Odette", model: "",
      linkedTo: "Odette · BRD-001", uploadedBy: "Akshita", uploadDate: "20 Jun 2024", uploadDateRaw: "2024-06-20",
      expiryDate: "31 Mar 2025", expiryDateRaw: "2025-03-31", size: "650 KB", fileType: "PDF", version: 1,
      status: "Approved", verification: "Verified", approvedBy: "Accounts",
      agreement: "", payment: "", tags: ["gst", "compliance"], remarks: "GSTIN 29AABCU9603R1ZM validated.",
      city: "Bengaluru", downloads: 8
    },
    {
      id: "DOC-2024-151", name: "Site Evaluation — Indiranagar", category: "Customer Documents", type: "Site Evaluation",
      module: "Customers", customer: "Arjun Reddy", brand: "Original Burger Co.", model: "OBC Flagship",
      linkedTo: "Arjun Reddy · Site Visit", uploadedBy: "Fazil", uploadDate: "19 Jun 2024", uploadDateRaw: "2024-06-19",
      expiryDate: "19 Dec 2024", expiryDateRaw: "2024-12-19", size: "12.4 MB", fileType: "PDF", version: 1,
      status: "Verified", verification: "Verified", approvedBy: "Om Anil",
      agreement: "", payment: "", tags: ["site", "obc", "bengaluru"], remarks: "Photos and footfall report included.",
      city: "Bengaluru", downloads: 6
    },
    {
      id: "DOC-2024-148", name: "Bank Statement — Sneha Verma", category: "KYC Documents", type: "Bank Details",
      module: "Customers", customer: "Sneha Verma", brand: "Belgian Waffle Co.", model: "Belgian Waffle Express",
      linkedTo: "Sneha Verma · CUS-2024-078", uploadedBy: "Abrar", uploadDate: "15 Jun 2024", uploadDateRaw: "2024-06-15",
      expiryDate: "15 Sep 2024", expiryDateRaw: "2024-09-15", size: "2.1 MB", fileType: "PDF", version: 1,
      status: "Rejected", verification: "Rejected", approvedBy: "",
      agreement: "", payment: "", tags: ["kyc", "bank"], remarks: "Rejected — statement older than 3 months.",
      city: "Mumbai", downloads: 2
    },
    {
      id: "DOC-2024-140", name: "Brand Deck — Odette 2024", category: "Brand Documents", type: "Brand Deck",
      module: "Brands", customer: "", brand: "Odette", model: "",
      linkedTo: "Odette · Marketing", uploadedBy: "Akshita", uploadDate: "10 Jun 2024", uploadDateRaw: "2024-06-10",
      expiryDate: "10 Jun 2025", expiryDateRaw: "2025-06-10", size: "8.6 MB", fileType: "PDF", version: 4,
      status: "Approved", verification: "Verified", approvedBy: "Himani Bhargava",
      agreement: "", payment: "", tags: ["brand", "marketing", "deck"], remarks: "Q2 2024 brand presentation deck.",
      city: "Bengaluru", downloads: 24
    }
  ],

  folders: [
    { id: "root", name: "All Documents", screen: "library" },
    { id: "customers", name: "Customer Documents", count: 48, screen: "customer-docs" },
    { id: "brands", name: "Brand Documents", count: 32, screen: "brand-docs" },
    { id: "agreements", name: "Agreement Documents", count: 24, screen: "agreement-docs" },
    { id: "payments", name: "Payment Documents", count: 56, screen: "payment-docs" },
    { id: "approvals", name: "Approval Documents", count: 18, screen: "approval-docs" },
    { id: "kyc", name: "KYC Documents", count: 64, screen: "library" },
    { id: "shared", name: "Shared Documents", count: 12, screen: "shared" }
  ],

  versions: [
    { version: 3, uploadedBy: "Sumanth", date: "22 Jun 2024", size: "3.8 MB", changes: "CEO countersigned — final version", current: true },
    { version: 2, uploadedBy: "Sumanth", date: "20 Jun 2024", size: "3.6 MB", changes: "Legal revisions incorporated", current: false },
    { version: 1, uploadedBy: "Sumanth", date: "18 Jun 2024", size: "3.5 MB", changes: "Initial draft uploaded", current: false }
  ],

  shared: [
    { name: "Brand Deck — Odette 2024", sharedWith: "Rahul Sharma", permission: "View", sharedBy: "Abdul Syed", date: "24 Jun 2024" },
    { name: "ROI Calculator.xlsx", sharedWith: "Sales Team", permission: "Edit", sharedBy: "Himani Bhargava", date: "23 Jun 2024" },
    { name: "Training Manual — OBC", sharedWith: "Arjun Reddy", permission: "View", sharedBy: "Fazil", date: "20 Jun 2024" }
  ],

  expiring: [
    { id: "DOC-2024-120", name: "GST Certificate — Tea Time", expiryDate: "30 Jun 2024", daysLeft: 5, customer: "—", brand: "Tea Time" },
    { id: "DOC-2024-135", name: "Property NOC — Priya Nair", expiryDate: "02 Jul 2024", daysLeft: 7, customer: "Priya Nair", brand: "Tea Time" },
    { id: "DOC-2024-142", name: "Bank Statement — Sneha Verma", expiryDate: "15 Sep 2024", daysLeft: 82, customer: "Sneha Verma", brand: "Belgian Waffle Co." }
  ],

  expired: [
    { id: "DOC-2024-098", name: "Trade License — Kochi Outlet", expiryDate: "01 May 2024", customer: "—", brand: "Kasturi" },
    { id: "DOC-2024-105", name: "FSSAI Certificate — Mysuru", expiryDate: "15 May 2024", customer: "—", brand: "Odette" }
  ],

  timeline: [
    { time: "24 Jun 2024, 3:00 PM", title: "Document uploaded", desc: "PAN Card — Rahul Sharma uploaded by Abdul Syed.", user: "Abdul Syed" },
    { time: "24 Jun 2024, 3:01 PM", title: "Pending verification", desc: "Queued for KYC verification.", user: "System" },
    { time: "23 Jun 2024, 11:30 AM", title: "Version updated", desc: "Aadhaar — Priya Nair updated to v2.", user: "Diksha" },
    { time: "22 Jun 2024, 4:00 PM", title: "Document approved", desc: "Franchise Agreement — Meera Iyer approved by CEO.", user: "CEO" }
  ],

  auditLog: [
    { timestamp: "25 Jun 2024, 09:22:10", user: "Fazil", action: "VIEW", entity: "DOC-2024-156", details: "Opened PAN Card preview" },
    { timestamp: "24 Jun 2024, 15:01:05", user: "System", action: "UPLOAD", entity: "DOC-2024-156", details: "PAN Card uploaded — 420 KB PDF" },
    { timestamp: "24 Jun 2024, 10:15:33", user: "Abdul Syed", action: "SHARE", entity: "DOC-2024-140", details: "Shared Brand Deck with Rahul Sharma" },
    { timestamp: "23 Jun 2024, 11:30:18", user: "Diksha", action: "VERSION", entity: "DOC-2024-155", details: "Uploaded v2 — Aadhaar Priya Nair" },
    { timestamp: "22 Jun 2024, 16:00:42", user: "CEO", action: "APPROVE", entity: "DOC-2024-154", details: "Franchise Agreement approved" },
    { timestamp: "15 Jun 2024, 14:20:08", user: "Fazil", action: "REJECT", entity: "DOC-2024-148", details: "Bank Statement rejected — outdated" }
  ],

  downloadHistory: [
    { user: "Abdul Syed", date: "24 Jun 2024, 4:00 PM", action: "Download" },
    { user: "Fazil", date: "23 Jun 2024, 10:00 AM", action: "Download" },
    { user: "Himani Bhargava", date: "22 Jun 2024, 2:00 PM", action: "Preview" }
  ],

  kpis: {
    total: 284,
    pendingVerification: 18,
    approved: 198,
    expired: 6,
    expiringSoon: 12,
    storageUsed: "4.2 GB",
    storageTotal: "10 GB"
  }
};
