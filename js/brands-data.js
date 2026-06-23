/* Brand Management — Mock Data */

const BRAND_DATA = {
  industries: ["Food & Beverage", "QSR", "Café", "Fine Dining", "Cloud Kitchen", "Retail"],
  categories: ["Bakery", "Burger", "South Indian", "Waffle", "Tea & Snacks", "Momos", "Rolls", "Coffee", "BBQ"],
  statuses: ["Active", "Expanding", "On Hold", "New Launch", "Inactive"],
  cities: [
    "Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi", "Pune",
    "Kochi", "Mysuru", "Vijayawada", "Visakhapatnam", "Ahmedabad", "Coimbatore"
  ],
  states: [
    "Karnataka", "Telangana", "Tamil Nadu", "Maharashtra", "Delhi",
    "Kerala", "Andhra Pradesh", "Gujarat"
  ],
  users: [
    "Abdul Syed", "Abrar", "Himani Bhargava", "Om Anil",
    "Sumanth", "Fazil", "Diksha", "Akshita", "Swetha"
  ],

  brands: [
    {
      id: "BRD-001", name: "Odette", industry: "Food & Beverage", category: "Bakery",
      description: "Premium European-inspired bakery and patisserie franchise with artisan breads, pastries, and café dining.",
      website: "https://odette.in", supportEmail: "franchise@odette.in", supportPhone: "+91 80 4567 8900",
      gst: "29AABCO1234F1Z5", pan: "AABCO1234F", address: "12 Church Street, MG Road",
      city: "Bengaluru", state: "Karnataka", pin: "560001", country: "India",
      established: "2018", founder: "Ananya Krishnan", investmentRange: "₹35–50 Lakhs",
      franchiseFee: "₹12,00,000", royalty: "8%", marketingFee: "2%",
      areaRequired: "800–1,200 sq ft", roi: "22–28%", breakEven: "18–24 months",
      agreementDuration: "5 years", training: true, supportIncluded: true,
      status: "Active", expansionCities: ["Hyderabad", "Chennai", "Pune"],
      requiredStaff: "8–12", inventory: "₹3–5 Lakhs initial", license: "FSSAI, Shop & Establishment",
      franchisees: 24, openCities: 8, interestedLeads: 142, revenue: "₹4.2 Cr",
      manager: "Himani Bhargava", notes: "Flagship brand — priority expansion in Tier-1 cities."
    },
    {
      id: "BRD-002", name: "Original Burger Co.", industry: "QSR", category: "Burger",
      description: "Gourmet burger QSR with fresh ingredients, craft sauces, and fast-casual dining experience.",
      website: "https://originalburger.co.in", supportEmail: "partner@originalburger.co.in", supportPhone: "+91 40 2345 6789",
      gst: "36AABOB5678G1Z2", pan: "AABOB5678G", address: "45 Jubilee Hills Road No. 36",
      city: "Hyderabad", state: "Telangana", pin: "500033", country: "India",
      established: "2019", founder: "Ravi Menon", investmentRange: "₹25–40 Lakhs",
      franchiseFee: "₹8,00,000", royalty: "6%", marketingFee: "2%",
      areaRequired: "600–1,000 sq ft", roi: "20–25%", breakEven: "14–20 months",
      agreementDuration: "5 years", training: true, supportIncluded: true,
      status: "Expanding", expansionCities: ["Bengaluru", "Chennai", "Mumbai"],
      requiredStaff: "6–10", inventory: "₹2–4 Lakhs initial", license: "FSSAI",
      franchisees: 18, openCities: 6, interestedLeads: 98, revenue: "₹2.8 Cr",
      manager: "Abdul Syed", notes: "Strong youth appeal — focus on mall locations."
    },
    {
      id: "BRD-003", name: "Kasturi", industry: "Food & Beverage", category: "South Indian",
      description: "Authentic South Indian vegetarian restaurant chain serving traditional meals and tiffin.",
      website: "https://kasturi.in", supportEmail: "franchise@kasturi.in", supportPhone: "+91 44 2876 5432",
      gst: "33AABCK9012H1Z8", pan: "AABCK9012H", address: "78 Anna Salai, T Nagar",
      city: "Chennai", state: "Tamil Nadu", pin: "600017", country: "India",
      established: "2015", founder: "Lakshmi Iyer", investmentRange: "₹20–35 Lakhs",
      franchiseFee: "₹6,00,000", royalty: "5%", marketingFee: "1.5%",
      areaRequired: "1,000–1,500 sq ft", roi: "18–24%", breakEven: "16–22 months",
      agreementDuration: "7 years", training: true, supportIncluded: true,
      status: "Active", expansionCities: ["Coimbatore", "Bengaluru", "Hyderabad"],
      requiredStaff: "10–15", inventory: "₹2–3 Lakhs initial", license: "FSSAI, Trade License",
      franchisees: 32, openCities: 10, interestedLeads: 76, revenue: "₹3.6 Cr",
      manager: "Swetha", notes: "Established brand with loyal customer base."
    },
    {
      id: "BRD-004", name: "Belgian Waffle Co.", industry: "QSR", category: "Waffle",
      description: "Specialty waffle kiosk and café concept with premium toppings and beverage pairings.",
      website: "https://belgianwaffle.co.in", supportEmail: "grow@belgianwaffle.co.in", supportPhone: "+91 22 6789 0123",
      gst: "27AABCB3456I1Z1", pan: "AABCB3456I", address: "23 Linking Road, Bandra West",
      city: "Mumbai", state: "Maharashtra", pin: "400050", country: "India",
      established: "2017", founder: "Priya Shah", investmentRange: "₹15–25 Lakhs",
      franchiseFee: "₹5,00,000", royalty: "7%", marketingFee: "2%",
      areaRequired: "300–500 sq ft", roi: "24–30%", breakEven: "12–16 months",
      agreementDuration: "5 years", training: true, supportIncluded: true,
      status: "Expanding", expansionCities: ["Pune", "Delhi", "Ahmedabad"],
      requiredStaff: "4–6", inventory: "₹1–2 Lakhs initial", license: "FSSAI",
      franchisees: 45, openCities: 14, interestedLeads: 186, revenue: "₹5.1 Cr",
      manager: "Diksha", notes: "High-volume kiosk model — ideal for malls and high streets."
    },
    {
      id: "BRD-005", name: "Tea Time", industry: "Café", category: "Tea & Snacks",
      description: "Neighbourhood tea café with snacks, quick bites, and comfortable seating for all-day traffic.",
      website: "https://teatime.in", supportEmail: "franchise@teatime.in", supportPhone: "+91 11 4567 8901",
      gst: "07AABCT7890J1Z4", pan: "AABCT7890J", address: "56 Connaught Place, Block C",
      city: "Delhi", state: "Delhi", pin: "110001", country: "India",
      established: "2016", founder: "Arun Malhotra", investmentRange: "₹12–20 Lakhs",
      franchiseFee: "₹4,00,000", royalty: "5%", marketingFee: "1.5%",
      areaRequired: "400–700 sq ft", roi: "20–26%", breakEven: "14–18 months",
      agreementDuration: "5 years", training: true, supportIncluded: true,
      status: "Active", expansionCities: ["Noida", "Gurgaon", "Jaipur"],
      requiredStaff: "5–8", inventory: "₹1–2 Lakhs initial", license: "FSSAI",
      franchisees: 38, openCities: 12, interestedLeads: 112, revenue: "₹3.2 Cr",
      manager: "Om Anil", notes: "Low investment entry point — strong in residential areas."
    },
    {
      id: "BRD-006", name: "Chai Point", industry: "Café", category: "Tea & Snacks",
      description: "India's leading chai-led beverage chain with snacks, delivery, and corporate catering.",
      website: "https://chaipoint.com", supportEmail: "franchise@chaipoint.com", supportPhone: "+91 80 3012 3456",
      gst: "29AABCC1234K1Z7", pan: "AABCC1234K", address: "100 Outer Ring Road, Marathahalli",
      city: "Bengaluru", state: "Karnataka", pin: "560037", country: "India",
      established: "2010", founder: "Amuleek Bijral", investmentRange: "₹30–45 Lakhs",
      franchiseFee: "₹10,00,000", royalty: "6%", marketingFee: "2.5%",
      areaRequired: "500–800 sq ft", roi: "18–22%", breakEven: "20–26 months",
      agreementDuration: "7 years", training: true, supportIncluded: true,
      status: "Active", expansionCities: ["Mumbai", "Delhi", "Hyderabad"],
      requiredStaff: "6–10", inventory: "₹2–4 Lakhs initial", license: "FSSAI, Trade License",
      franchisees: 128, openCities: 22, interestedLeads: 245, revenue: "₹12.4 Cr",
      manager: "Himani Bhargava", notes: "Market leader — selective franchise partners."
    },
    {
      id: "BRD-007", name: "Wow! Momo", industry: "QSR", category: "Momos",
      description: "India's largest momo chain with pan-Asian sides, delivery-first operations, and kiosk formats.",
      website: "https://wowmomo.com", supportEmail: "franchise@wowmomo.com", supportPhone: "+91 33 4012 3456",
      gst: "19AABCM5678L1Z0", pan: "AABCM5678L", address: "15 Park Street, Middleton Row",
      city: "Kolkata", state: "West Bengal", pin: "700016", country: "India",
      established: "2008", founder: "Sagar Daryani", investmentRange: "₹25–40 Lakhs",
      franchiseFee: "₹8,00,000", royalty: "7%", marketingFee: "2%",
      areaRequired: "400–800 sq ft", roi: "22–28%", breakEven: "15–20 months",
      agreementDuration: "5 years", training: true, supportIncluded: true,
      status: "Expanding", expansionCities: ["Bengaluru", "Pune", "Chennai"],
      requiredStaff: "6–10", inventory: "₹2–3 Lakhs initial", license: "FSSAI",
      franchisees: 62, openCities: 18, interestedLeads: 198, revenue: "₹6.8 Cr",
      manager: "Fazil", notes: "High delivery volume — cloud kitchen compatible."
    },
    {
      id: "BRD-008", name: "Rolls Mania", industry: "QSR", category: "Rolls",
      description: "Kolkata-style kathi rolls and wraps with regional flavours and quick-service format.",
      website: "https://rollsmania.in", supportEmail: "partner@rollsmania.in", supportPhone: "+91 20 6789 0123",
      gst: "27AABCR9012M1Z3", pan: "AABCR9012M", address: "34 FC Road, Deccan",
      city: "Pune", state: "Maharashtra", pin: "411004", country: "India",
      established: "2014", founder: "Debashish Roy", investmentRange: "₹15–28 Lakhs",
      franchiseFee: "₹5,50,000", royalty: "6%", marketingFee: "1.5%",
      areaRequired: "350–600 sq ft", roi: "24–30%", breakEven: "12–16 months",
      agreementDuration: "5 years", training: true, supportIncluded: true,
      status: "Active", expansionCities: ["Mumbai", "Hyderabad", "Bengaluru"],
      requiredStaff: "5–8", inventory: "₹1.5–2.5 Lakhs initial", license: "FSSAI",
      franchisees: 28, openCities: 9, interestedLeads: 84, revenue: "₹2.4 Cr",
      manager: "Abrar", notes: "Compact format — strong evening and late-night sales."
    },
    {
      id: "BRD-009", name: "Third Wave Coffee", industry: "Café", category: "Coffee",
      description: "Specialty coffee roaster and café with single-origin beans and experiential store design.",
      website: "https://thirdwavecoffeeroasters.com", supportEmail: "franchise@thirdwavecoffee.com", supportPhone: "+91 80 4123 4567",
      gst: "29AABCT3456N1Z6", pan: "AABCT3456N", address: "8 100 Feet Road, Indiranagar",
      city: "Bengaluru", state: "Karnataka", pin: "560038", country: "India",
      established: "2016", founder: "Ayush Bathwal", investmentRange: "₹40–60 Lakhs",
      franchiseFee: "₹15,00,000", royalty: "8%", marketingFee: "2%",
      areaRequired: "1,000–1,500 sq ft", roi: "16–22%", breakEven: "24–30 months",
      agreementDuration: "7 years", training: true, supportIncluded: true,
      status: "Expanding", expansionCities: ["Mumbai", "Delhi", "Hyderabad"],
      requiredStaff: "10–14", inventory: "₹4–6 Lakhs initial", license: "FSSAI, Trade License",
      franchisees: 15, openCities: 5, interestedLeads: 67, revenue: "₹1.9 Cr",
      manager: "Akshita", notes: "Premium positioning — target upscale neighbourhoods."
    },
    {
      id: "BRD-010", name: "Barbeque Nation", industry: "Fine Dining", category: "BBQ",
      description: "India's leading grill-and-barbecue dining chain with live counters and buffet format.",
      website: "https://barbequenation.com", supportEmail: "franchise@barbequenation.com", supportPhone: "+91 124 456 7890",
      gst: "06AABCB7890P1Z9", pan: "AABCB7890P", address: "Tower B, Cyber City, DLF Phase 3",
      city: "Gurgaon", state: "Haryana", pin: "122002", country: "India",
      established: "2006", founder: "Sayaji Bansal", investmentRange: "₹1.5–2.5 Cr",
      franchiseFee: "₹35,00,000", royalty: "10%", marketingFee: "3%",
      areaRequired: "4,000–6,000 sq ft", roi: "14–18%", breakEven: "30–36 months",
      agreementDuration: "10 years", training: true, supportIncluded: true,
      status: "Active", expansionCities: ["Bengaluru", "Chennai", "Pune"],
      requiredStaff: "40–60", inventory: "₹15–20 Lakhs initial", license: "FSSAI, Liquor (optional)",
      franchisees: 8, openCities: 4, interestedLeads: 34, revenue: "₹8.6 Cr",
      manager: "Sumanth", notes: "High-capital format — experienced operators only."
    }
  ],

  detailTabs: [
    { id: "details", label: "Overview" },
    { id: "investment", label: "Investment" },
    { id: "opportunities", label: "Requirements" },
    { id: "royalty", label: "Financial Details" },
    { id: "expansion", label: "Expansion Plan" },
    { id: "performance", label: "Franchisees" },
    { id: "expansion", label: "Open Locations" },
    { id: "opportunities", label: "Leads Interested" },
    { id: "contacts", label: "Meetings" },
    { id: "documents", label: "Documents" },
    { id: "timeline", label: "Timeline" },
    { id: "timeline", label: "Activity Log" },
    { id: "profile", label: "Notes" }
  ],

  opportunities: [
    { city: "Hyderabad", type: "Master Franchise", investment: "₹50–80 Lakhs", slots: 3, status: "Open" },
    { city: "Chennai", type: "Unit Franchise", investment: "₹35–50 Lakhs", slots: 5, status: "Open" },
    { city: "Pune", type: "Unit Franchise", investment: "₹35–50 Lakhs", slots: 2, status: "Closing Soon" },
    { city: "Mumbai", type: "Area Development", investment: "₹1–1.5 Cr", slots: 1, status: "Open" }
  ],

  locations: [
    { outlet: "Odette — Indiranagar", city: "Bengaluru", status: "Operational", revenue: "₹8.5L/mo", opened: "Aug 2023" },
    { outlet: "Odette — Jubilee Hills", city: "Hyderabad", status: "Operational", revenue: "₹7.2L/mo", opened: "Jan 2024" },
    { outlet: "Odette — T Nagar", city: "Chennai", status: "Under Fit-out", revenue: "—", opened: "Oct 2024" },
    { outlet: "Odette — Koregaon Park", city: "Pune", status: "Planned", revenue: "—", opened: "Q1 2025" }
  ],

  documents: [
    { name: "Franchise Disclosure Document.pdf", type: "Legal", size: "3.2 MB", date: "15 Jun 2024" },
    { name: "Brand Guidelines v3.pdf", type: "Marketing", size: "12.4 MB", date: "01 Mar 2024" },
    { name: "FSSAI Certificate.pdf", type: "Compliance", size: "890 KB", date: "10 Jan 2024" },
    { name: "Operations Manual.pdf", type: "Training", size: "8.6 MB", date: "20 Feb 2024" },
    { name: "GST Registration.pdf", type: "Compliance", size: "450 KB", date: "05 Jan 2024" }
  ],

  marketingAssets: [
    { name: "Logo Pack — Primary & Secondary.zip", type: "Logo", size: "24 MB", format: "AI, PNG, SVG" },
    { name: "Store Signage Templates.ai", type: "Signage", size: "18 MB", format: "AI, PDF" },
    { name: "Social Media Kit Q3 2024.zip", type: "Social", size: "156 MB", format: "PNG, MP4" },
    { name: "Menu Board Designs.pdf", type: "Menu", size: "6.2 MB", format: "PDF, PSD" },
    { name: "Uniform & Merchandise Guide.pdf", type: "Branding", size: "4.8 MB", format: "PDF" }
  ],

  contacts: [
    { name: "Himani Bhargava", role: "Brand Manager", email: "himani@franchisecrm.com", phone: "+91 98765 11111" },
    { name: "Abdul Syed", role: "Franchise Sales Lead", email: "abdul@franchisecrm.com", phone: "+91 98765 22222" },
    { name: "Om Anil", role: "Operations Head", email: "om@franchisecrm.com", phone: "+91 98765 33333" },
    { name: "franchise@odette.in", role: "Brand Support", email: "franchise@odette.in", phone: "+91 80 4567 8900" }
  ],

  agreements: [
    { id: "BAGR-001", franchisee: "Rahul Sharma", type: "Unit Franchise", city: "Bengaluru", status: "Signed", signed: "23 Jun 2024", value: "₹12,00,000" },
    { id: "BAGR-002", franchisee: "Priya Nair", type: "Unit Franchise", city: "Hyderabad", status: "Pending", signed: "—", value: "₹12,00,000" },
    { id: "BAGR-003", franchisee: "Arjun Reddy", type: "Area Development", city: "Chennai", status: "Draft", signed: "—", value: "₹45,00,000" }
  ],

  timeline: [
    { time: "23 Jun 2024, 2:00 PM", title: "New franchise agreement signed", desc: "Rahul Sharma — Bengaluru Indiranagar outlet.", user: "Abdul Syed" },
    { time: "20 Jun 2024, 11:00 AM", title: "Expansion city added", desc: "Pune added to expansion plan for Q1 2025.", user: "Himani Bhargava" },
    { time: "15 Jun 2024, 4:30 PM", title: "Marketing assets updated", desc: "Q3 social media kit uploaded.", user: "Diksha" },
    { time: "10 Jun 2024, 9:00 AM", title: "Training module revised", desc: "Operations manual v2.1 published.", user: "Om Anil" },
    { time: "05 Jun 2024, 3:15 PM", title: "Lead surge — Hyderabad", desc: "28 new interested leads this week.", user: "System" },
    { time: "01 Jun 2024, 10:00 AM", title: "Brand profile updated", desc: "Investment range revised to ₹35–50 Lakhs.", user: "Himani Bhargava" }
  ],

  topLocations: [
    { outlet: "Odette — Indiranagar", city: "Bengaluru", revenue: "₹8.5L", growth: "+12%" },
    { outlet: "Odette — Jubilee Hills", city: "Hyderabad", revenue: "₹7.2L", growth: "+8%" },
    { outlet: "Odette — Koramangala", city: "Bengaluru", revenue: "₹6.8L", growth: "+15%" }
  ],

  notes: [
    { author: "Himani Bhargava", time: "23 Jun 2024", body: "Chennai launch on track. Fit-out 80% complete." },
    { author: "Abdul Syed", time: "20 Jun 2024", body: "5 qualified leads in Pune — schedule site visits." },
    { author: "Om Anil", time: "15 Jun 2024", body: "Updated royalty structure approved by leadership." }
  ]
};
