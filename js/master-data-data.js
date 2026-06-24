/* Master Data Management — Mock Data */

const MASTER_DATA = {
  viewRoles: ["Super Admin", "CEO", "Admin", "Operations Manager", "IT Administrator", "Read Only Administrator"],

  categoryNav: [
    { label: "Overview", screen: "dashboard" },
    { label: "Brands", screen: "brands" },
    { label: "Franchise Models", screen: "franchise-models" },
    { label: "Success Fees", screen: "success-fees" },
    { label: "Franchise Fees", screen: "franchise-fees" },
    { label: "Royalty %", screen: "royalty-percentages" },
    { label: "Marketing Fees", screen: "marketing-fees" },
    { label: "Lead Sources", screen: "lead-sources" },
    { label: "Campaign Sources", screen: "campaign-sources" },
    { label: "States", screen: "states" },
    { label: "Cities", screen: "cities" },
    { label: "Industries", screen: "industries" },
    { label: "Business Categories", screen: "business-categories" },
    { label: "Meeting Types", screen: "meeting-types" },
    { label: "Approval Types", screen: "approval-types" },
    { label: "Payment Types", screen: "payment-types" },
    { label: "Notification Templates", screen: "notification-templates" },
    { label: "Email Templates", screen: "email-templates" },
    { label: "WhatsApp Templates", screen: "whatsapp-templates" },
    { label: "Document Templates", screen: "document-templates" }
  ],

  kpis: {
    totalRecords: 186,
    activeRecords: 168,
    archivedRecords: 12,
    inactiveRecords: 6,
    lastUpdated: "25 Jun 2024, 10:42 AM"
  },

  brands: [
    { name: "Odette", code: "ODT", category: "Premium Dining", status: "Active" },
    { name: "Original Burger Co.", code: "OBC", category: "QSR", status: "Active" },
    { name: "Kasturi", code: "KST", category: "Fine Dining", status: "Active" },
    { name: "Chai Point", code: "CHP", category: "Beverages", status: "Active" },
    { name: "Wow! Momo", code: "WMM", category: "QSR", status: "Inactive" }
  ],

  franchiseModels: [
    { name: "FOFO — Franchise Owned", code: "FOFO", investment: "₹25–50 L", status: "Active" },
    { name: "FOCO — Franchise Operated", code: "FOCO", investment: "₹15–30 L", status: "Active" },
    { name: "Master Franchise", code: "MF", investment: "₹1–2 Cr", status: "Active" },
    { name: "Area Development", code: "AD", investment: "₹50 L–1 Cr", status: "Archived" }
  ],

  successFees: [
    { name: "Standard Success Fee", amount: "₹2,50,000", brand: "All Brands", status: "Active" },
    { name: "Premium Success Fee", amount: "₹5,00,000", brand: "Odette", status: "Active" },
    { name: "QSR Success Fee", amount: "₹1,50,000", brand: "OBC · Wow! Momo", status: "Active" }
  ],

  franchiseFees: [
    { name: "FOFO Franchise Fee", amount: "₹10,00,000", model: "FOFO", status: "Active" },
    { name: "FOCO Franchise Fee", amount: "₹5,00,000", model: "FOCO", status: "Active" },
    { name: "Master Franchise Fee", amount: "₹25,00,000", model: "Master Franchise", status: "Active" }
  ],

  royaltyPercentages: [
    { name: "Standard Royalty", percentage: "8%", brand: "All Brands", status: "Active" },
    { name: "Premium Royalty", percentage: "10%", brand: "Odette", status: "Active" },
    { name: "QSR Royalty", percentage: "6%", brand: "OBC", status: "Active" }
  ],

  marketingFees: [
    { name: "National Marketing Fund", rate: "2%", brand: "All Brands", status: "Active" },
    { name: "Local Marketing Allowance", rate: "₹50,000/yr", brand: "Odette", status: "Active" },
    { name: "Digital Marketing Fee", rate: "1.5%", brand: "Chai Point", status: "Active" }
  ],

  leadSources: [
    { name: "Website Inquiry", code: "WEB", channel: "Digital", status: "Active" },
    { name: "Referral", code: "REF", channel: "Partner", status: "Active" },
    { name: "Trade Show", code: "TS", channel: "Offline", status: "Active" },
    { name: "Social Media", code: "SOC", channel: "Digital", status: "Active" },
    { name: "Cold Call", code: "CC", channel: "Outbound", status: "Active" },
    { name: "Partner Network", code: "PN", channel: "Partner", status: "Inactive" }
  ],

  campaignSources: [
    { name: "Meta Ads — Q2 Lead Gen", code: "META-Q2", platform: "Meta", status: "Active" },
    { name: "Google Search — Franchise", code: "GADS-FR", platform: "Google", status: "Active" },
    { name: "LinkedIn B2B Outreach", code: "LI-B2B", platform: "LinkedIn", status: "Active" },
    { name: "Expo 2024 — Mumbai", code: "EXPO-MUM", platform: "Offline", status: "Archived" }
  ],

  states: [
    { name: "Karnataka", code: "KA", region: "South", status: "Active" },
    { name: "Maharashtra", code: "MH", region: "West", status: "Active" },
    { name: "Telangana", code: "TS", region: "South", status: "Active" },
    { name: "Tamil Nadu", code: "TN", region: "South", status: "Active" },
    { name: "Delhi NCR", code: "DL", region: "North", status: "Active" }
  ],

  cities: [
    { name: "Bengaluru", state: "Karnataka", tier: "Tier 1", status: "Active" },
    { name: "Hyderabad", state: "Telangana", tier: "Tier 1", status: "Active" },
    { name: "Mumbai", state: "Maharashtra", tier: "Tier 1", status: "Active" },
    { name: "Chennai", state: "Tamil Nadu", tier: "Tier 1", status: "Active" },
    { name: "Pune", state: "Maharashtra", tier: "Tier 2", status: "Active" },
    { name: "Kochi", state: "Kerala", tier: "Tier 2", status: "Inactive" }
  ],

  industries: [
    { name: "Food & Beverage", code: "F&B", segments: "12", status: "Active" },
    { name: "Retail", code: "RTL", segments: "8", status: "Active" },
    { name: "Health & Wellness", code: "H&W", segments: "5", status: "Active" },
    { name: "Education", code: "EDU", segments: "4", status: "Archived" }
  ],

  businessCategories: [
    { name: "Quick Service Restaurant", code: "QSR", industry: "F&B", status: "Active" },
    { name: "Fine Dining", code: "FD", industry: "F&B", status: "Active" },
    { name: "Café & Beverages", code: "CAF", industry: "F&B", status: "Active" },
    { name: "Cloud Kitchen", code: "CK", industry: "F&B", status: "Active" }
  ],

  meetingTypes: [
    { name: "Discovery Call", duration: "30 min", mode: "Online/Offline", status: "Active" },
    { name: "Brand Presentation", duration: "60 min", mode: "Online/Offline", status: "Active" },
    { name: "Site Visit", duration: "120 min", mode: "Offline", status: "Active" },
    { name: "CEO Sign-off", duration: "45 min", mode: "Online", status: "Active" },
    { name: "Agreement Signing", duration: "60 min", mode: "Offline", status: "Active" }
  ],

  approvalTypes: [
    { name: "Discount Approval", levels: "3", sla: "24 hrs", status: "Active" },
    { name: "Agreement Approval", levels: "4", sla: "48 hrs", status: "Active" },
    { name: "Payment Waiver", levels: "2", sla: "12 hrs", status: "Active" },
    { name: "Territory Exception", levels: "3", sla: "72 hrs", status: "Active" }
  ],

  paymentTypes: [
    { name: "Franchise Fee", code: "FF", gst: "18%", status: "Active" },
    { name: "Success Fee", code: "SF", gst: "18%", status: "Active" },
    { name: "Royalty", code: "RY", gst: "18%", status: "Active" },
    { name: "Marketing Fee", code: "MF", gst: "18%", status: "Active" },
    { name: "Token Amount", code: "TK", gst: "18%", status: "Active" },
    { name: "Refund", code: "RF", gst: "—", status: "Active" }
  ],

  notificationTemplates: [
    { name: "Lead Assigned", channel: "In-App", trigger: "lead.assigned", status: "Active" },
    { name: "Approval Pending", channel: "In-App + Email", trigger: "approval.pending", status: "Active" },
    { name: "Payment Received", channel: "In-App + WhatsApp", trigger: "payment.received", status: "Active" },
    { name: "Meeting Reminder", channel: "Push + SMS", trigger: "meeting.reminder", status: "Active" }
  ],

  emailTemplates: [
    { name: "Welcome Email", subject: "Welcome to iFranchise", trigger: "customer.created", status: "Active" },
    { name: "Proposal Sent", subject: "Your Franchise Proposal", trigger: "proposal.sent", status: "Active" },
    { name: "Payment Receipt", subject: "Payment Confirmation", trigger: "payment.received", status: "Active" },
    { name: "Agreement Ready", subject: "Agreement for Review", trigger: "agreement.ready", status: "Active" }
  ],

  whatsappTemplates: [
    { name: "Lead Follow-up", templateId: "lead_followup_v2", language: "English", status: "Active" },
    { name: "Meeting Confirmation", templateId: "meeting_confirm_v1", language: "English", status: "Active" },
    { name: "Payment Reminder", templateId: "payment_remind_v3", language: "English + Hindi", status: "Active" },
    { name: "Welcome Message", templateId: "welcome_v1", language: "English", status: "Inactive" }
  ],

  documentTemplates: [
    { name: "Franchise Agreement", type: "Agreement", format: "PDF/DOCX", status: "Active" },
    { name: "NDA Template", type: "Legal", format: "PDF", status: "Active" },
    { name: "KYC Checklist", type: "Compliance", format: "PDF", status: "Active" },
    { name: "Proposal Template", type: "Sales", format: "DOCX", status: "Active" }
  ],

  recentChanges: [
    { action: "Lead Source added — Partner Network", user: "Sumanth", time: "25 Jun, 10:30 AM" },
    { action: "Royalty % updated — QSR Royalty 6%", user: "Abdul Syed", time: "24 Jun, 4:15 PM" },
    { action: "City archived — Kochi", user: "Admin", time: "24 Jun, 2:00 PM" },
    { action: "WhatsApp template activated — Welcome Message", user: "Operations", time: "23 Jun, 11:00 AM" }
  ]
};
