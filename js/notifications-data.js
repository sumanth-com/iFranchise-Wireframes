/* Notification Center — Mock Data */

const NOTIFICATION_DATA = {
  roles: ["CEO", "Co-Founder", "Admin", "Operations Manager", "Accounts", "Sales Manager", "Sales Executive", "Brand Owner", "Customer"],
  workflow: ["Created", "Queued", "Sent", "Delivered", "Read"],
  altStatuses: ["Failed"],
  channels: ["In-App", "Email", "SMS", "WhatsApp", "Push Notification"],
  types: [
    "Lead Assigned", "Lead Follow-up Reminder", "Meeting Reminder", "Meeting Cancelled",
    "Payment Received", "Payment Due", "Invoice Generated", "Approval Required",
    "Approval Completed", "Document Uploaded", "Document Expiring", "Agreement Signed",
    "Customer Converted", "Task Assigned", "System Alert", "Security Alert",
    "Maintenance Notification", "Announcement"
  ],
  priorities: ["Critical", "High", "Medium", "Low"],
  brands: ["Odette", "Original Burger Co.", "Kasturi", "Tea Time", "Belgian Waffle Co.", "Third Wave Coffee"],
  cities: ["Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi", "Pune", "Kochi", "Mysuru", "Ahmedabad", "Coimbatore"],
  users: ["Abdul Syed", "Abrar", "Himani Bhargava", "Om Anil", "Sumanth", "Fazil", "Diksha", "Akshita", "Swetha"],
  templates: ["Meeting Reminder", "Payment Due", "Approval Required", "Document Expiring", "Welcome Email", "Announcement Broadcast"],

  notifications: [
    {
      id: "NOT-2024-089", title: "Approval Required — Discount Odette", type: "Approval Required",
      message: "Discount approval for Rahul Sharma (Odette Premium, Bengaluru) requires your review.",
      priority: "High", recipient: "Om Anil", recipientRole: "Operations Manager", channel: "In-App",
      sentAt: "25 Jun 2024, 10:20 AM", status: "Delivered", read: false,
      createdBy: "System", template: "Approval Required", brand: "Odette", city: "Bengaluru",
      actionButton: "Review Approval", actionUrl: "/approvals/inbox"
    },
    {
      id: "NOT-2024-088", title: "Meeting Reminder — Brand Presentation", type: "Meeting Reminder",
      message: "Brand Presentation with Rahul Sharma starts in 30 minutes. Google Meet link attached.",
      priority: "High", recipient: "Abdul Syed", recipientRole: "CEO", channel: "Push Notification",
      sentAt: "25 Jun 2024, 9:30 AM", status: "Read", read: true,
      createdBy: "System", template: "Meeting Reminder", brand: "Odette", city: "Bengaluru",
      actionButton: "Join Meeting", actionUrl: "/meetings/online"
    },
    {
      id: "NOT-2024-087", title: "Payment Received — ₹12,50,000", type: "Payment Received",
      message: "Franchise fee payment received from Rahul Sharma via NEFT. Pending verification.",
      priority: "Medium", recipient: "Fazil", recipientRole: "Accounts", channel: "Email",
      sentAt: "24 Jun 2024, 2:35 PM", status: "Delivered", read: false,
      createdBy: "System", template: "", brand: "Odette", city: "Bengaluru",
      actionButton: "Verify Payment", actionUrl: "/accounts/payment-details"
    },
    {
      id: "NOT-2024-086", title: "Document Expiring — GST Certificate", type: "Document Expiring",
      message: "GST Certificate for Tea Time expires on 30 Jun 2024. Upload renewal document.",
      priority: "High", recipient: "Akshita", recipientRole: "Brand Owner", channel: "Email",
      sentAt: "24 Jun 2024, 9:00 AM", status: "Delivered", read: true,
      createdBy: "System", template: "Document Expiring", brand: "Tea Time", city: "Hyderabad",
      actionButton: "Upload Renewal", actionUrl: "/documents/upload"
    },
    {
      id: "NOT-2024-085", title: "Lead Assigned — Priya Nair", type: "Lead Assigned",
      message: "New qualified lead Priya Nair (Tea Time Express, Hyderabad) assigned to you.",
      priority: "Medium", recipient: "Diksha", recipientRole: "Sales Executive", channel: "In-App",
      sentAt: "23 Jun 2024, 4:15 PM", status: "Read", read: true,
      createdBy: "Himani Bhargava", template: "", brand: "Tea Time", city: "Hyderabad",
      actionButton: "View Lead", actionUrl: "/leads/details"
    },
    {
      id: "NOT-2024-084", title: "Payment Due — Priya Nair", type: "Payment Due",
      message: "Invoice INV-2024-105 (₹10,44,300) is overdue by 4 days. Follow up required.",
      priority: "High", recipient: "Diksha", recipientRole: "Sales Executive", channel: "SMS",
      sentAt: "21 Jun 2024, 10:00 AM", status: "Failed", read: false,
      createdBy: "System", template: "Payment Due", brand: "Tea Time", city: "Hyderabad",
      actionButton: "View Invoice", actionUrl: "/accounts/invoice-details"
    },
    {
      id: "NOT-2024-083", title: "Agreement Signed — Meera Iyer", type: "Agreement Signed",
      message: "Franchise agreement for Kasturi Family Dining (Pune) signed by Meera Iyer.",
      priority: "Medium", recipient: "Abdul Syed", recipientRole: "CEO", channel: "In-App",
      sentAt: "22 Jun 2024, 5:00 PM", status: "Read", read: true,
      createdBy: "System", template: "", brand: "Kasturi", city: "Pune",
      actionButton: "View Agreement", actionUrl: "/documents/agreement-docs"
    },
    {
      id: "NOT-2024-082", title: "Q2 Expansion Update", type: "Announcement",
      message: "Q2 franchise expansion targets updated. Odette: 12 new units. OBC: 8 units. Review deck attached.",
      priority: "Low", recipient: "All Users", recipientRole: "—", channel: "Email",
      sentAt: "20 Jun 2024, 11:00 AM", status: "Delivered", read: true,
      createdBy: "CEO", template: "Announcement Broadcast", brand: "—", city: "—",
      actionButton: "View Deck", actionUrl: "/documents/brand-docs"
    }
  ],

  delivery: [
    { channel: "In-App", status: "Read", sentAt: "25 Jun 10:20", deliveredAt: "25 Jun 10:20", readAt: "25 Jun 10:45", error: "" },
    { channel: "Email", status: "Delivered", sentAt: "25 Jun 10:20", deliveredAt: "25 Jun 10:21", readAt: "—", error: "" },
    { channel: "Push Notification", status: "Failed", sentAt: "25 Jun 10:20", deliveredAt: "—", readAt: "—", error: "Device token expired" }
  ],

  preferences: {
    email: { leads: true, meetings: true, payments: true, approvals: true, documents: true, announcements: true },
    sms: { meetings: true, payments: true, approvals: false, documents: false },
    whatsapp: { meetings: true, payments: true, approvals: true, documents: false },
    push: { leads: true, meetings: true, tasks: true, approvals: true }
  },

  scheduled: [
    { id: "SCH-001", title: "Meeting Reminder — Site Visit", recipient: "Himani Bhargava", channel: "SMS + Push", scheduleDate: "26 Jun 2024, 10:30 AM", status: "Queued" },
    { id: "SCH-002", title: "Payment Due — Vikram Singh", recipient: "Abdul Syed", channel: "Email", scheduleDate: "27 Jun 2024, 9:00 AM", status: "Scheduled" },
    { id: "SCH-003", title: "Document Expiry — GST Tea Time", recipient: "Akshita", channel: "Email + WhatsApp", scheduleDate: "28 Jun 2024, 8:00 AM", status: "Scheduled" }
  ],

  reminders: [
    { title: "Follow up — Priya Nair", type: "Lead Follow-up Reminder", due: "26 Jun 2024", recipient: "Diksha", status: "Pending" },
    { title: "Site Visit — Indiranagar", type: "Meeting Reminder", due: "26 Jun 2024", recipient: "Himani Bhargava", status: "Scheduled" },
    { title: "Payment collection — Sneha Verma", type: "Payment Due", due: "27 Jun 2024", recipient: "Abrar", status: "Pending" }
  ],

  announcements: [
    { title: "Q2 Expansion Update", author: "CEO", date: "20 Jun 2024", recipients: "All Users", channels: "In-App + Email", status: "Sent" },
    { title: "System Maintenance — 29 Jun", author: "Admin", date: "18 Jun 2024", recipients: "All Users", channels: "In-App + Email + SMS", status: "Sent" },
    { title: "New Brand Onboarding — Third Wave Coffee", author: "Operations Manager", date: "15 Jun 2024", recipients: "Sales Team", channels: "In-App", status: "Sent" }
  ],

  templates: [
    { name: "Meeting Reminder", type: "Meeting Reminder", channels: "Email, SMS, Push", subject: "Meeting Reminder: {{meeting_title}}", body: "Your meeting {{meeting_title}} starts in {{minutes}} minutes.", status: "Active" },
    { name: "Payment Due", type: "Payment Due", channels: "Email, SMS", subject: "Payment Due: {{invoice_number}}", body: "Invoice {{invoice_number}} of ₹{{amount}} is due on {{due_date}}.", status: "Active" },
    { name: "Approval Required", type: "Approval Required", channels: "In-App, Email", subject: "Approval Required: {{approval_type}}", body: "{{requester}} submitted {{approval_type}} for your review.", status: "Active" },
    { name: "Document Expiring", type: "Document Expiring", channels: "Email, In-App", subject: "Document Expiring: {{document_name}}", body: "{{document_name}} expires on {{expiry_date}}. Please upload renewal.", status: "Active" }
  ],

  failed: [
    { id: "NOT-2024-084", title: "Payment Due — Priya Nair", channel: "SMS", recipient: "Diksha", failedAt: "21 Jun 2024, 10:01 AM", error: "Invalid phone number format", retries: 2 },
    { id: "NOT-2024-079", title: "WhatsApp — Meeting Cancelled", channel: "WhatsApp", recipient: "Arjun Reddy", failedAt: "19 Jun 2024, 3:00 PM", error: "WhatsApp API rate limit", retries: 1 }
  ],

  timeline: [
    { time: "25 Jun 2024, 10:20 AM", title: "Notification created", desc: "Approval Required queued for Om Anil.", user: "System" },
    { time: "25 Jun 2024, 10:20 AM", title: "Sent via In-App", desc: "Delivered to Operations Manager inbox.", user: "System" },
    { time: "25 Jun 2024, 10:21 AM", title: "Email sent", desc: "Delivered to om@franchisecrm.com.", user: "System" },
    { time: "25 Jun 2024, 10:22 AM", title: "Push failed", desc: "Device token expired — retry scheduled.", user: "System" }
  ],

  auditLog: [
    { timestamp: "25 Jun 2024, 10:45:12", user: "Om Anil", action: "READ", entity: "NOT-2024-089", details: "Opened approval notification" },
    { timestamp: "25 Jun 2024, 10:20:05", user: "System", action: "SEND", entity: "NOT-2024-089", details: "Dispatched to In-App + Email + Push" },
    { timestamp: "25 Jun 2024, 10:22:18", user: "System", action: "FAIL", entity: "NOT-2024-089", details: "Push delivery failed — token expired" },
    { timestamp: "24 Jun 2024, 14:35:22", user: "System", action: "SEND", entity: "NOT-2024-087", details: "Payment received email to Fazil" },
    { timestamp: "21 Jun 2024, 10:01:33", user: "System", action: "FAIL", entity: "NOT-2024-084", details: "SMS failed — invalid number" },
    { timestamp: "20 Jun 2024, 11:00:01", user: "Abdul Syed", action: "BROADCAST", entity: "NOT-2024-082", details: "Q2 announcement sent to all users" }
  ],

  kpis: {
    unread: 24,
    today: 18,
    pendingDelivery: 6,
    failed: 3,
    readRate: 78,
    deliverySuccess: 96,
    emailRate: 98,
    smsRate: 92,
    whatsappRate: 94,
    pushRate: 88
  }
};
