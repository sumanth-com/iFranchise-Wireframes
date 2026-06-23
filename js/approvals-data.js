/* Approval Management — Mock Data */

const APPROVAL_DATA = {
  roles: ["CEO", "Co-Founder", "Admin", "Operations Manager", "Sales Manager", "Team Lead", "Accounts", "Brand Owner", "Sales Executive"],
  workflow: ["Draft", "Submitted", "Manager Review", "Operations Review", "CEO Approval", "Approved"],
  altStatuses: ["Rejected", "Returned for Changes"],
  types: [
    "Lead Approval", "Discount Approval", "Customer Approval", "Meeting Approval",
    "Payment Verification", "Agreement Approval", "Brand Approval", "Franchise Model Approval",
    "Document Approval", "System Configuration Approval"
  ],
  modules: ["Leads", "Customers", "Meetings", "Payments", "Agreements", "Brands", "Franchise Models", "Documents", "System"],
  departments: ["Sales", "Operations", "Accounts", "Legal", "Marketing", "IT"],
  priorities: ["Critical", "High", "Medium", "Low"],
  brands: ["Odette", "Original Burger Co.", "Kasturi", "Belgian Waffle Co.", "Tea Time", "Third Wave Coffee"],
  cities: ["Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi", "Pune", "Kochi", "Mysuru"],
  users: ["Abdul Syed", "Abrar", "Himani Bhargava", "Om Anil", "Sumanth", "Fazil", "Diksha", "Akshita", "Swetha"],

  approvals: [
    {
      id: "APR-2024-042", type: "Discount Approval", module: "Leads",
      reference: "L-2024-089 · Rahul Sharma", requestedBy: "Abdul Syed", department: "Sales",
      priority: "High", status: "Operations Review", currentApprover: "Om Anil", level: "Level 2 of 3",
      dueDate: "26 Jun 2024", dueDateRaw: "2024-06-26", createdDate: "23 Jun 2024",
      reason: "Request 15% franchise fee discount for Odette Premium — Bengaluru territory. Customer has strong F&B background and committed site.",
      notes: "Manager approved with conditions. Requires ops sign-off on territory exclusivity.",
      brand: "Odette", city: "Bengaluru"
    },
    {
      id: "APR-2024-041", type: "Agreement Approval", module: "Agreements",
      reference: "AGR-2024-018 · Meera Iyer", requestedBy: "Himani Bhargava", department: "Sales",
      priority: "Critical", status: "CEO Approval", currentApprover: "Abdul Syed", level: "Level 3 of 3",
      dueDate: "25 Jun 2024", dueDateRaw: "2024-06-25", createdDate: "20 Jun 2024",
      reason: "Final franchise agreement for Kasturi Family Dining — Pune. All prior approvals complete.",
      notes: "Legal review completed. Payment schedule attached.",
      brand: "Kasturi", city: "Pune"
    },
    {
      id: "APR-2024-040", type: "Payment Verification", module: "Payments",
      reference: "PAY-2024-112 · Vikram Singh", requestedBy: "Fazil", department: "Accounts",
      priority: "High", status: "Manager Review", currentApprover: "Himani Bhargava", level: "Level 1 of 2",
      dueDate: "26 Jun 2024", dueDateRaw: "2024-06-26", createdDate: "24 Jun 2024",
      reason: "Verify franchise fee payment of ₹12,50,000 received via NEFT. Match against invoice INV-2024-089.",
      notes: "Bank reference: NEFT20240624001. Awaiting manager verification.",
      brand: "Odette", city: "Delhi"
    },
    {
      id: "APR-2024-039", type: "Franchise Model Approval", module: "Franchise Models",
      reference: "MDL-2024-012 · Belgian Waffle Express", requestedBy: "Diksha", department: "Operations",
      priority: "Medium", status: "Submitted", currentApprover: "Himani Bhargava", level: "Level 1 of 3",
      dueDate: "28 Jun 2024", dueDateRaw: "2024-06-28", createdDate: "24 Jun 2024",
      reason: "Publish updated Belgian Waffle Express model with revised investment range and ROI projections.",
      notes: "Model draft submitted. Financials updated per Q2 review.",
      brand: "Belgian Waffle Co.", city: "Hyderabad"
    },
    {
      id: "APR-2024-038", type: "Lead Approval", module: "Leads",
      reference: "L-2024-115 · Priya Nair", requestedBy: "Abrar", department: "Sales",
      priority: "Medium", status: "Manager Review", currentApprover: "Himani Bhargava", level: "Level 1 of 2",
      dueDate: "27 Jun 2024", dueDateRaw: "2024-06-27", createdDate: "25 Jun 2024",
      reason: "Convert qualified lead to customer. Investment capacity verified at ₹35L. Interested in Tea Time Express.",
      notes: "Discovery call completed. Ready for customer onboarding.",
      brand: "Tea Time", city: "Hyderabad"
    },
    {
      id: "APR-2024-037", type: "Meeting Approval", module: "Meetings",
      reference: "MTG-2024-009 · CEO Sign-off", requestedBy: "Sumanth", department: "Sales",
      priority: "High", status: "Approved", currentApprover: "—", level: "Completed",
      dueDate: "24 Jun 2024", dueDateRaw: "2024-06-24", createdDate: "22 Jun 2024",
      reason: "Schedule CEO approval meeting for Final Approval — Meera Iyer (Kasturi, Pune).",
      notes: "Approved by CEO on 24 Jun 2024.",
      brand: "Kasturi", city: "Pune"
    },
    {
      id: "APR-2024-036", type: "Brand Approval", module: "Brands",
      reference: "BRD-2024-006 · Third Wave Coffee", requestedBy: "Akshita", department: "Marketing",
      priority: "Medium", status: "Rejected", currentApprover: "—", level: "Rejected",
      dueDate: "23 Jun 2024", dueDateRaw: "2024-06-23", createdDate: "18 Jun 2024",
      reason: "Onboard Third Wave Coffee as new franchise brand in South India region.",
      notes: "Rejected — territory overlap with existing partner. Resubmit with revised territory map.",
      brand: "Third Wave Coffee", city: "Bengaluru"
    },
    {
      id: "APR-2024-035", type: "Document Approval", module: "Documents",
      reference: "DOC-2024-048 · Site Evaluation", requestedBy: "Fazil", department: "Operations",
      priority: "Low", status: "Returned for Changes", currentApprover: "Abdul Syed", level: "Returned",
      dueDate: "25 Jun 2024", dueDateRaw: "2024-06-25", createdDate: "21 Jun 2024",
      reason: "Approve site evaluation report for OBC Flagship — Indiranagar, Bengaluru.",
      notes: "Returned — missing landlord NOC and rent escalation clause documentation.",
      brand: "Original Burger Co.", city: "Bengaluru"
    }
  ],

  levels: [
    { level: 1, name: "Manager Review", approver: "Himani Bhargava", status: "Completed", date: "24 Jun 2024" },
    { level: 2, name: "Operations Review", approver: "Om Anil", status: "In Progress", date: "—" },
    { level: 3, name: "CEO Approval", approver: "Abdul Syed", status: "Pending", date: "—" }
  ],

  comments: [
    { author: "Himani Bhargava", role: "Team Lead", time: "24 Jun 2024, 3:45 PM", body: "Approved at manager level. Discount justified given customer's F&B experience and site readiness. Ops to confirm territory." },
    { author: "Om Anil", role: "Operations Manager", time: "25 Jun 2024, 10:20 AM", body: "Reviewing territory exclusivity clause. Will respond by EOD." },
    { author: "Abdul Syed", role: "CEO", time: "23 Jun 2024, 11:00 AM", body: "Submitted with supporting ROI analysis and customer profile." }
  ],

  documents: [
    { name: "ROI Analysis — Rahul Sharma.xlsx", type: "Financial", size: "1.2 MB", date: "23 Jun 2024" },
    { name: "Discount Justification Memo.pdf", type: "Internal", size: "340 KB", date: "23 Jun 2024" },
    { name: "Territory Map — Bengaluru.pdf", type: "Territory", size: "2.8 MB", date: "24 Jun 2024" },
    { name: "Customer Profile — Rahul Sharma.pdf", type: "Customer", size: "890 KB", date: "22 Jun 2024" }
  ],

  timeline: [
    { time: "25 Jun 2024, 10:20 AM", title: "Operations review started", desc: "Assigned to Om Anil for territory verification.", user: "System" },
    { time: "24 Jun 2024, 3:45 PM", title: "Manager approved", desc: "Himani Bhargava approved with conditions.", user: "Himani Bhargava" },
    { time: "24 Jun 2024, 9:00 AM", title: "Moved to Manager Review", desc: "Request submitted and queued for review.", user: "System" },
    { time: "23 Jun 2024, 11:00 AM", title: "Request submitted", desc: "Discount Approval submitted by Abdul Syed.", user: "Abdul Syed" },
    { time: "22 Jun 2024, 4:30 PM", title: "Draft created", desc: "Approval request drafted.", user: "Abdul Syed" }
  ],

  history: [
    { date: "25 Jun 2024", action: "In Review", actor: "Om Anil", level: "Operations Review", notes: "Territory check in progress" },
    { date: "24 Jun 2024", action: "Approved", actor: "Himani Bhargava", level: "Manager Review", notes: "Conditional approval — ops sign-off required" },
    { date: "24 Jun 2024", action: "Submitted", actor: "Abdul Syed", level: "Submitted", notes: "All documents attached" },
    { date: "22 Jun 2024", action: "Created", actor: "Abdul Syed", level: "Draft", notes: "Initial draft" }
  ],

  decisions: [
    { date: "24 Jun 2024", decision: "Approved", actor: "Himani Bhargava", level: "Manager Review", comment: "Discount justified. Proceed to operations." },
    { date: "—", decision: "Pending", actor: "Om Anil", level: "Operations Review", comment: "—" },
    { date: "—", decision: "Pending", actor: "Abdul Syed", level: "CEO Approval", comment: "—" }
  ],

  auditLog: [
    { timestamp: "25 Jun 2024, 10:20:15", user: "Om Anil", action: "VIEW", entity: "APR-2024-042", details: "Opened approval details" },
    { timestamp: "25 Jun 2024, 10:18:42", user: "System", action: "ASSIGN", entity: "APR-2024-042", details: "Assigned to Om Anil — Operations Review" },
    { timestamp: "24 Jun 2024, 15:45:33", user: "Himani Bhargava", action: "APPROVE", entity: "APR-2024-042", details: "Manager level approved" },
    { timestamp: "24 Jun 2024, 09:00:01", user: "System", action: "STATUS_CHANGE", entity: "APR-2024-042", details: "Draft → Submitted → Manager Review" },
    { timestamp: "23 Jun 2024, 11:00:22", user: "Abdul Syed", action: "CREATE", entity: "APR-2024-042", details: "Approval request created" },
    { timestamp: "23 Jun 2024, 16:30:08", user: "Abdul Syed", action: "REJECT", entity: "APR-2024-036", details: "Brand approval rejected — territory overlap" }
  ],

  escalated: [
    { id: "APR-2024-033", type: "Agreement Approval", reference: "AGR-2024-015", requestedBy: "Sumanth", priority: "Critical", status: "Escalated", currentApprover: "Abdul Syed", dueDate: "24 Jun 2024", escalatedOn: "25 Jun 2024", reason: "SLA breached — pending CEO approval 48+ hours" },
    { id: "APR-2024-031", type: "Payment Verification", reference: "PAY-2024-108", requestedBy: "Fazil", priority: "High", status: "Escalated", currentApprover: "Operations Manager", dueDate: "23 Jun 2024", escalatedOn: "25 Jun 2024", reason: "No action from assigned approver within SLA" }
  ],

  settings: {
    slaHours: { manager: 24, operations: 48, ceo: 72 },
    mandatoryDocTypes: ["Agreement Approval", "Payment Verification", "Document Approval"],
    mandatoryRejectComment: true,
    preventSkipLevels: true,
    preventDuplicates: true
  }
};
