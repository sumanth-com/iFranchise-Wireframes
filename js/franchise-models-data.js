/* Franchise Models — Mock Data */

const MODEL_DATA = {
  roles: ["CEO", "Team Lead", "Sales Executive", "Brand Owner", "Admin"],
  workflow: ["Draft", "Submitted", "Under Review", "Approved", "Published", "Archived"],
  modelTypes: ["Premium", "Express", "Kiosk", "Flagship", "Family Dining", "Mini Store", "Cloud Kitchen"],
  brands: [
    "Odette", "Original Burger Co.", "Kasturi", "Belgian Waffle Co.",
    "Tea Time", "Wow! Momo", "Third Wave Coffee", "Rolls Mania"
  ],
  cities: [
    "Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi", "Pune",
    "Kochi", "Mysuru", "Visakhapatnam", "Vijayawada", "Ahmedabad", "Coimbatore"
  ],
  users: [
    "Abdul Syed", "Abrar", "Himani Bhargava", "Om Anil",
    "Sumanth", "Fazil", "Diksha", "Akshita", "Swetha"
  ],

  models: [
    {
      id: "MDL-001", brand: "Odette", name: "Odette Premium", type: "Premium",
      description: "Full-format bakery café with dine-in, takeaway, and premium patisserie counter. Target high-footfall commercial locations.",
      investmentRange: "₹45–60 Lakhs", franchiseFee: "₹15,00,000", securityDeposit: "₹3,00,000",
      royalty: "8%", marketingFee: "2%", areaRequired: "1,200–1,800 sq ft", storeSize: "1,500 sq ft avg",
      employees: "12–15", trainingDuration: "21 days", inventoryCost: "₹5–8 Lakhs", equipmentCost: "₹12–15 Lakhs",
      roi: "22–28%", breakEven: "18–24 months", agreementDuration: "5 years", renewalTerms: "Auto-renewal with 5% fee increase",
      license: "FSSAI, Shop & Establishment, Fire NOC", status: "Published",
      preferredCities: ["Bengaluru", "Hyderabad", "Chennai", "Mumbai"],
      territories: ["East Bengaluru", "Jubilee Hills", "T Nagar", "Bandra West"],
      eligibility: "Min. 3 years F&B experience. Net worth ₹50L+. Dedicated operator required.",
      requiredDocs: "FDD, Financial statements, ID proof, Business plan",
      createdBy: "Himani Bhargava", approvedBy: "Sumanth", notes: "Flagship model — highest margin.",
      leads: 86, franchisees: 12, revenue: "₹1.8 Cr"
    },
    {
      id: "MDL-002", brand: "Odette", name: "Odette Express", type: "Express",
      description: "Compact bakery format for high streets and transit hubs. Focus on grab-and-go products.",
      investmentRange: "₹25–35 Lakhs", franchiseFee: "₹8,00,000", securityDeposit: "₹2,00,000",
      royalty: "7%", marketingFee: "2%", areaRequired: "600–900 sq ft", storeSize: "750 sq ft avg",
      employees: "6–8", trainingDuration: "14 days", inventoryCost: "₹3–4 Lakhs", equipmentCost: "₹6–8 Lakhs",
      roi: "24–30%", breakEven: "14–18 months", agreementDuration: "5 years", renewalTerms: "Standard renewal",
      license: "FSSAI, Shop & Establishment", status: "Published",
      preferredCities: ["Pune", "Mysuru", "Kochi", "Visakhapatnam"],
      territories: ["FC Road Pune", "Indiranagar", "Koramangala"],
      eligibility: "First-time entrepreneurs welcome with training support.",
      requiredDocs: "FDD, Bank statements, ID proof",
      createdBy: "Abdul Syed", approvedBy: "Om Anil", notes: "Fastest growing format.",
      leads: 124, franchisees: 18, revenue: "₹2.1 Cr"
    },
    {
      id: "MDL-003", brand: "Odette", name: "Odette Kiosk", type: "Kiosk",
      description: "Minimal footprint kiosk for malls, airports, and corporate parks.",
      investmentRange: "₹12–18 Lakhs", franchiseFee: "₹4,00,000", securityDeposit: "₹1,00,000",
      royalty: "6%", marketingFee: "1.5%", areaRequired: "150–300 sq ft", storeSize: "200 sq ft avg",
      employees: "3–4", trainingDuration: "7 days", inventoryCost: "₹1–2 Lakhs", equipmentCost: "₹3–4 Lakhs",
      roi: "28–35%", breakEven: "10–14 months", agreementDuration: "3 years", renewalTerms: "Renewable",
      license: "FSSAI", status: "Approved",
      preferredCities: ["Bengaluru", "Delhi", "Mumbai"],
      territories: ["Phoenix Mall", "Airport T1"],
      eligibility: "Ideal for investors seeking passive income model.",
      requiredDocs: "FDD, ID proof",
      createdBy: "Diksha", approvedBy: "Himani Bhargava", notes: "Pending publish — mall approvals in progress.",
      leads: 42, franchisees: 6, revenue: "₹48L"
    },
    {
      id: "MDL-004", brand: "Original Burger Co.", name: "Original Burger Co. Flagship", type: "Flagship",
      description: "Full-service burger restaurant with bar seating and delivery kitchen.",
      investmentRange: "₹40–55 Lakhs", franchiseFee: "₹12,00,000", securityDeposit: "₹2,50,000",
      royalty: "7%", marketingFee: "2%", areaRequired: "1,000–1,400 sq ft", storeSize: "1,200 sq ft",
      employees: "10–14", trainingDuration: "18 days", inventoryCost: "₹4–6 Lakhs", equipmentCost: "₹10–12 Lakhs",
      roi: "20–26%", breakEven: "16–22 months", agreementDuration: "5 years", renewalTerms: "5-year renewal",
      license: "FSSAI, Trade License", status: "Published",
      preferredCities: ["Hyderabad", "Chennai", "Bengaluru"],
      territories: ["Jubilee Hills", "Anna Salai"],
      eligibility: "F&B operators with QSR experience preferred.",
      requiredDocs: "FDD, P&L statements, Site photos",
      createdBy: "Fazil", approvedBy: "Sumanth", notes: "",
      leads: 58, franchisees: 8, revenue: "₹1.2 Cr"
    },
    {
      id: "MDL-005", brand: "Original Burger Co.", name: "Original Burger Co. Express", type: "Express",
      description: "Delivery-first cloud kitchen and compact dine-in format.",
      investmentRange: "₹20–30 Lakhs", franchiseFee: "₹6,00,000", securityDeposit: "₹1,50,000",
      royalty: "6%", marketingFee: "2%", areaRequired: "400–700 sq ft", storeSize: "550 sq ft",
      employees: "5–7", trainingDuration: "10 days", inventoryCost: "₹2–3 Lakhs", equipmentCost: "₹5–7 Lakhs",
      roi: "22–28%", breakEven: "12–16 months", agreementDuration: "5 years", renewalTerms: "Standard",
      license: "FSSAI", status: "Under Review",
      preferredCities: ["Mumbai", "Pune", "Delhi"],
      territories: ["Andheri", "Bandra"],
      eligibility: "Cloud kitchen experience a plus.",
      requiredDocs: "FDD, Kitchen layout plan",
      createdBy: "Abrar", approvedBy: "", notes: "Awaiting CEO approval on fee structure.",
      leads: 34, franchisees: 0, revenue: "—"
    },
    {
      id: "MDL-006", brand: "Kasturi", name: "Kasturi Family Dining", type: "Family Dining",
      description: "Full vegetarian South Indian restaurant with family seating and catering.",
      investmentRange: "₹30–45 Lakhs", franchiseFee: "₹8,00,000", securityDeposit: "₹2,00,000",
      royalty: "5%", marketingFee: "1.5%", areaRequired: "1,500–2,000 sq ft", storeSize: "1,800 sq ft",
      employees: "15–20", trainingDuration: "21 days", inventoryCost: "₹3–5 Lakhs", equipmentCost: "₹8–10 Lakhs",
      roi: "18–24%", breakEven: "20–26 months", agreementDuration: "7 years", renewalTerms: "7-year renewal",
      license: "FSSAI, Trade License", status: "Published",
      preferredCities: ["Chennai", "Coimbatore", "Bengaluru"],
      territories: ["T Nagar", "RS Puram"],
      eligibility: "South Indian cuisine experience required.",
      requiredDocs: "FDD, Financials, Menu approval",
      createdBy: "Swetha", approvedBy: "Om Anil", notes: "",
      leads: 45, franchisees: 14, revenue: "₹1.5 Cr"
    },
    {
      id: "MDL-007", brand: "Belgian Waffle Co.", name: "Belgian Waffle Express", type: "Express",
      description: "Waffle kiosk and compact café for malls and high streets.",
      investmentRange: "₹15–22 Lakhs", franchiseFee: "₹5,00,000", securityDeposit: "₹1,00,000",
      royalty: "7%", marketingFee: "2%", areaRequired: "300–500 sq ft", storeSize: "400 sq ft",
      employees: "4–6", trainingDuration: "7 days", inventoryCost: "₹1–2 Lakhs", equipmentCost: "₹4–5 Lakhs",
      roi: "26–32%", breakEven: "10–14 months", agreementDuration: "5 years", renewalTerms: "Renewable",
      license: "FSSAI", status: "Published",
      preferredCities: ["Mumbai", "Pune", "Ahmedabad"],
      territories: ["Linking Road", "FC Road"],
      eligibility: "No prior experience required.",
      requiredDocs: "FDD, ID proof",
      createdBy: "Akshita", approvedBy: "Himani Bhargava", notes: "Top enquiry volume.",
      leads: 156, franchisees: 22, revenue: "₹2.6 Cr"
    },
    {
      id: "MDL-008", brand: "Tea Time", name: "Tea Time Mini Store", type: "Mini Store",
      description: "Neighbourhood tea café with snacks — low investment, high footfall model.",
      investmentRange: "₹10–16 Lakhs", franchiseFee: "₹3,50,000", securityDeposit: "₹75,000",
      royalty: "5%", marketingFee: "1.5%", areaRequired: "350–500 sq ft", storeSize: "450 sq ft",
      employees: "4–5", trainingDuration: "5 days", inventoryCost: "₹80K–1.5L", equipmentCost: "₹2–3 Lakhs",
      roi: "24–30%", breakEven: "10–14 months", agreementDuration: "5 years", renewalTerms: "Standard",
      license: "FSSAI", status: "Draft",
      preferredCities: ["Delhi", "Noida", "Gurgaon"],
      territories: ["Connaught Place"],
      eligibility: "Open to first-time franchisees.",
      requiredDocs: "FDD draft",
      createdBy: "Om Anil", approvedBy: "", notes: "Draft — pricing under review.",
      leads: 0, franchisees: 0, revenue: "—"
    }
  ],

  territories: [
    { city: "Bengaluru", zone: "East Bengaluru", model: "Odette Premium", status: "Available", slots: 2 },
    { city: "Bengaluru", zone: "Indiranagar", model: "Odette Express", status: "Taken", slots: 0 },
    { city: "Hyderabad", zone: "Jubilee Hills", model: "Odette Premium", status: "Available", slots: 1 },
    { city: "Chennai", zone: "T Nagar", model: "Kasturi Family Dining", status: "Reserved", slots: 1 },
    { city: "Mumbai", zone: "Bandra West", model: "Belgian Waffle Express", status: "Available", slots: 3 },
    { city: "Pune", zone: "FC Road", model: "Odette Express", status: "Available", slots: 2 },
    { city: "Delhi", zone: "Connaught Place", model: "Tea Time Mini Store", status: "Coming Soon", slots: 2 }
  ],

  documents: [
    { name: "Franchise Disclosure Document.pdf", type: "Legal", required: true, status: "Uploaded" },
    { name: "Financial Projection Template.xlsx", type: "Financial", required: true, status: "Uploaded" },
    { name: "Operations Manual.pdf", type: "Operations", required: true, status: "Uploaded" },
    { name: "Brand Guidelines.pdf", type: "Marketing", required: false, status: "Uploaded" },
    { name: "Training Curriculum.pdf", type: "Training", required: true, status: "Pending" }
  ],

  timeline: [
    { time: "23 Jun 2024, 3:00 PM", title: "Model published", desc: "Odette Premium is now live on franchise portal.", user: "Sumanth" },
    { time: "22 Jun 2024, 11:00 AM", title: "Approval granted", desc: "CEO approved Odette Premium for publication.", user: "Sumanth" },
    { time: "20 Jun 2024, 2:30 PM", title: "Submitted for review", desc: "Himani Bhargava submitted model for approval.", user: "Himani Bhargava" },
    { time: "18 Jun 2024, 10:00 AM", title: "Financial terms updated", desc: "Royalty adjusted from 7% to 8%.", user: "Om Anil" },
    { time: "15 Jun 2024, 4:00 PM", title: "Model created", desc: "Odette Premium draft created.", user: "Himani Bhargava" }
  ],

  upcomingReviews: [
    { model: "Original Burger Co. Express", submitter: "Abrar", due: "25 Jun 2024", status: "Under Review" },
    { model: "Odette Kiosk", submitter: "Diksha", due: "28 Jun 2024", status: "Approved" },
    { model: "Tea Time Mini Store", submitter: "Om Anil", due: "30 Jun 2024", status: "Draft" }
  ],

  compareModels: ["MDL-001", "MDL-002", "MDL-003"],

  notes: [
    { author: "Himani Bhargava", time: "23 Jun 2024", body: "Premium model performing above projections in Bengaluru." },
    { author: "Sumanth", time: "22 Jun 2024", body: "Approved with condition — review royalty after 12 months." },
    { author: "Abdul Syed", time: "20 Jun 2024", body: "Express model has highest lead conversion at 22%." }
  ]
};
