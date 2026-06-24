/* Template Management — Mock Data */

const TEMPLATE_DATA = {
  roles: ["Super Admin", "CEO", "Admin", "Operations Manager", "Marketing Manager"],
  viewRoles: ["Super Admin", "CEO", "Admin", "Operations Manager", "Marketing Manager"],

  categoryNav: [
    { label: "Overview", screen: "dashboard" },
    { label: "Agreement", screen: "agreement" },
    { label: "Proposal", screen: "proposal" },
    { label: "Welcome", screen: "welcome" },
    { label: "Email", screen: "email" },
    { label: "WhatsApp", screen: "whatsapp" },
    { label: "Payment", screen: "payment" },
    { label: "Customer", screen: "customer" }
  ],

  kpis: {
    totalTemplates: 48,
    activeTemplates: 42,
    withTriggers: 36,
    lastUpdated: "25 Jun 2024"
  },

  agreementTemplates: [
    { name: "Standard Franchise Agreement", brand: "All Brands", format: "DOCX/PDF", trigger: "agreement.generate", status: "Active" },
    { name: "FOFO Agreement — Odette", brand: "Odette", format: "DOCX/PDF", trigger: "agreement.fofo", status: "Active" },
    { name: "Master Franchise Agreement", brand: "All Brands", format: "DOCX/PDF", trigger: "agreement.master", status: "Active" },
    { name: "NDA — Pre-Discussion", brand: "All Brands", format: "PDF", trigger: "nda.send", status: "Active" }
  ],

  proposalTemplates: [
    { name: "Standard Franchise Proposal", brand: "All Brands", format: "DOCX/PDF", trigger: "proposal.send", status: "Active" },
    { name: "Premium Brand Proposal — Odette", brand: "Odette", format: "DOCX", trigger: "proposal.premium", status: "Active" },
    { name: "QSR Investment Proposal", brand: "OBC", format: "DOCX", trigger: "proposal.qsr", status: "Active" }
  ],

  welcomeTemplates: [
    { name: "New Franchisee Welcome Kit", channel: "Email + Document", trigger: "customer.onboarded", status: "Active" },
    { name: "Welcome Email — Day 1", channel: "Email", trigger: "customer.created", status: "Active" },
    { name: "Welcome WhatsApp", channel: "WhatsApp", trigger: "customer.onboarded", status: "Active" }
  ],

  emailTemplates: [
    { name: "Lead Follow-up Email", subject: "Thank you for your interest", trigger: "lead.created", status: "Active" },
    { name: "Meeting Confirmation", subject: "Meeting Confirmed", trigger: "meeting.scheduled", status: "Active" },
    { name: "Payment Receipt", subject: "Payment Received", trigger: "payment.received", status: "Active" },
    { name: "Agreement Ready for Review", subject: "Your Agreement", trigger: "agreement.ready", status: "Active" }
  ],

  whatsappTemplates: [
    { name: "Lead Follow-up", templateId: "lead_followup_v2", trigger: "lead.followup", status: "Active" },
    { name: "Meeting Reminder", templateId: "meeting_remind_v1", trigger: "meeting.reminder", status: "Active" },
    { name: "Payment Reminder", templateId: "payment_remind_v3", trigger: "payment.overdue", status: "Active" },
    { name: "Welcome Message", templateId: "welcome_v1", trigger: "customer.onboarded", status: "Inactive" }
  ],

  paymentTemplates: [
    { name: "Invoice Template", type: "Invoice", trigger: "invoice.generate", status: "Active" },
    { name: "Payment Receipt", type: "Receipt", trigger: "payment.received", status: "Active" },
    { name: "Payment Reminder", type: "Reminder", trigger: "payment.overdue", status: "Active" },
    { name: "Refund Confirmation", type: "Refund", trigger: "payment.refunded", status: "Active" }
  ],

  customerTemplates: [
    { name: "Customer Onboarding Pack", type: "Document Bundle", trigger: "customer.onboarded", status: "Active" },
    { name: "KYC Document Checklist", type: "Checklist", trigger: "customer.kyc", status: "Active" },
    { name: "Training Schedule", type: "Schedule", trigger: "training.scheduled", status: "Active" },
    { name: "Quarterly Review", type: "Report", trigger: "review.quarterly", status: "Active" }
  ],

  automationTriggers: [
    { event: "lead.created", templates: 3, automations: 2 },
    { event: "meeting.scheduled", templates: 4, automations: 3 },
    { event: "payment.received", templates: 5, automations: 4 },
    { event: "agreement.ready", templates: 2, automations: 2 },
    { event: "customer.onboarded", templates: 6, automations: 5 }
  ]
};
