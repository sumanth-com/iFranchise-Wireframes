/* Marketing Intelligence — Mock Data */

const MARKETING_DATA = {
  roles: ["CEO", "Admin", "Marketing Manager", "Sales Manager", "Team Lead"],

  integrations: [
    { name: "Meta Ads", status: "Planned", icon: "Meta" },
    { name: "Google Ads", status: "Planned", icon: "Google" },
    { name: "Google Analytics", status: "Planned", icon: "GA" },
    { name: "Meta Pixel", status: "Planned", icon: "Pixel" },
    { name: "Google Tag Manager", status: "Planned", icon: "GTM" }
  ],

  kpis: {
    marketingSpend: "₹42.8 L",
    costPerLead: "₹4,180",
    costPerQualifiedLead: "₹8,840",
    costPerDeal: "₹1.42 L",
    conversionRate: "24.2%",
    roas: "4.2x",
    roi: "320%",
    lostLeads: 186,
    leadQuality: "72/100"
  },

  leadSources: [
    { source: "Website", leads: 286, qualified: 142, spend: "₹4.2 L", cpl: "₹1,469", conversion: "28%" },
    { source: "Meta Ads", leads: 192, qualified: 86, spend: "₹12.4 L", cpl: "₹6,458", conversion: "22%" },
    { source: "Google Ads", leads: 148, qualified: 72, spend: "₹9.8 L", cpl: "₹6,622", conversion: "24%" },
    { source: "Referral", leads: 224, qualified: 168, spend: "₹2.1 L", cpl: "₹938", conversion: "38%" },
    { source: "Trade Show", leads: 98, qualified: 42, spend: "₹8.6 L", cpl: "₹8,776", conversion: "18%" }
  ],

  campaignSources: [
    { campaign: "Meta — Q2 Lead Gen", platform: "Meta", spend: "₹8.2 L", leads: 124, cpl: "₹6,613", roas: "3.8x" },
    { campaign: "Google — Franchise Search", platform: "Google", spend: "₹6.4 L", leads: 98, cpl: "₹6,531", roas: "4.1x" },
    { campaign: "LinkedIn B2B", platform: "LinkedIn", spend: "₹3.2 L", leads: 42, cpl: "₹7,619", roas: "2.9x" },
    { campaign: "Expo Mumbai 2024", platform: "Offline", spend: "₹8.6 L", leads: 86, cpl: "₹10,000", roas: "2.4x" }
  ],

  funnel: [
    { stage: "Impressions", count: 2840000, rate: "100%" },
    { stage: "Clicks", count: 42800, rate: "1.5%" },
    { stage: "Leads", count: 1024, rate: "2.4%" },
    { stage: "Qualified", count: 486, rate: "47.5%" },
    { stage: "Proposals", count: 312, rate: "64.2%" },
    { stage: "Deals", count: 248, rate: "79.5%" }
  ],

  lostLeads: [
    { reason: "Budget Mismatch", count: 48, pct: "26%" },
    { reason: "Competitor", count: 36, pct: "19%" },
    { reason: "No Response", count: 42, pct: "23%" },
    { reason: "Location Unavailable", count: 28, pct: "15%" },
    { reason: "Other", count: 32, pct: "17%" }
  ],

  spendByMonth: [
    { month: "Jan", spend: 320000, leads: 82 },
    { month: "Feb", spend: 380000, leads: 94 },
    { month: "Mar", spend: 420000, leads: 108 },
    { month: "Apr", spend: 460000, leads: 118 },
    { month: "May", spend: 510000, leads: 132 },
    { month: "Jun", spend: 428000, leads: 124 }
  ]
};
