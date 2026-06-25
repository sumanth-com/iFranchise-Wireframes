/* Authentication — Enterprise mock data (iFranchise CRM) */

const AUTH_DATA = {
  version: "v4.2.1",
  contactEmail: "contact@ifranchise.in",
  supportPhone: "+91 80 4712 8800",
  company: "iFranchise Technologies Pvt. Ltd.",
  hq: "Bengaluru, Karnataka",

  demoUser: {
    email: "abdul.syed@ifranchise.in",
    name: "Abdul Syed",
    role: "Sales Manager — South India"
  },

  referenceUsers: [
    "Abdul Syed",
    "Abrar",
    "Himani Bhargava",
    "Om Anil",
    "Sumanth",
    "Fazil",
    "Diksha",
    "Akshita",
    "Swetha"
  ],

  lockedUser: {
    email: "fazil@ifranchise.in",
    name: "Fazil",
    attempts: 5,
    lockedAt: "25 Jun 2026, 10:42 AM IST"
  },

  session: {
    expiredAt: "25 Jun 2026, 11:15 AM IST",
    lastActivity: "Lead Dashboard — Lead Management"
  },

  backupCodes: ["8K2P-9M4L", "3R7N-1Q6W", "5T8V-2X9C", "6Y1Z-4A3B", "7D5E-8F0G"],

  passwordRules: [
    "Minimum 12 characters",
    "At least one uppercase letter",
    "At least one number",
    "At least one special character"
  ]
};
