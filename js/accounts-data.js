/* Accounts & Payments — Mock Data */

const ACCOUNTS_DATA = {
  roles: ["CEO", "Co-Founder", "Accounts Team", "Finance Manager", "Admin", "Sales Manager", "Sales Executive", "Brand Owner"],
  workflow: ["Payment Initiated", "Pending Verification", "Verified", "Invoice Generated", "Completed"],
  altStatuses: ["Failed", "Refunded"],
  types: [
    "Booking Amount", "Franchise Fee", "Royalty", "Marketing Fee", "Security Deposit",
    "Training Fee", "Legal Fee", "License Fee", "Refund", "Adjustment"
  ],
  methods: ["NEFT", "RTGS", "UPI", "Cheque", "Cash", "Credit Card", "Demand Draft"],
  brands: ["Odette", "Original Burger Co.", "Kasturi", "Tea Time", "Belgian Waffle Co.", "Third Wave Coffee"],
  customers: ["Rahul Sharma", "Priya Nair", "Arjun Reddy", "Sneha Verma", "Vikram Singh", "Meera Iyer"],
  cities: ["Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi", "Pune", "Kochi", "Mysuru", "Ahmedabad", "Coimbatore"],
  users: ["Abdul Syed", "Abrar", "Himani Bhargava", "Om Anil", "Sumanth", "Fazil", "Diksha", "Akshita", "Swetha"],

  payments: [
    {
      id: "PAY-2024-089", customer: "Rahul Sharma", brand: "Odette", model: "Odette Premium",
      type: "Franchise Fee", amount: 1250000, amountRaw: 1250000, gst: 225000, gstRaw: 225000,
      discount: 0, method: "NEFT", transactionId: "NEFT20240624001", reference: "REF-ODT-089",
      bank: "HDFC Bank", upi: "", cheque: "", invoice: "INV-2024-112",
      paymentDate: "24 Jun 2024", paymentDateRaw: "2024-06-24", dueDate: "24 Jul 2024", dueDateRaw: "2024-07-24",
      status: "Pending Verification", verification: "Pending", verifiedBy: "",
      remarks: "Franchise fee — first instalment. Awaiting accounts verification.", city: "Bengaluru"
    },
    {
      id: "PAY-2024-088", customer: "Meera Iyer", brand: "Kasturi", model: "Kasturi Family Dining",
      type: "Booking Amount", amount: 250000, amountRaw: 250000, gst: 45000, gstRaw: 45000,
      discount: 0, method: "UPI", transactionId: "UPI20240623098", reference: "REF-KAS-088",
      bank: "", upi: "meera.iyer@okhdfcbank", cheque: "", invoice: "INV-2024-110",
      paymentDate: "23 Jun 2024", paymentDateRaw: "2024-06-23", dueDate: "23 Jul 2024", dueDateRaw: "2024-07-23",
      status: "Completed", verification: "Verified", verifiedBy: "Fazil",
      remarks: "Booking amount received and verified.", city: "Pune"
    },
    {
      id: "PAY-2024-087", customer: "Vikram Singh", brand: "Odette", model: "Odette Premium",
      type: "Security Deposit", amount: 500000, amountRaw: 500000, gst: 90000, gstRaw: 90000,
      discount: 25000, method: "RTGS", transactionId: "RTGS20240622087", reference: "REF-ODT-087",
      bank: "ICICI Bank", upi: "", cheque: "", invoice: "INV-2024-108",
      paymentDate: "22 Jun 2024", paymentDateRaw: "2024-06-22", dueDate: "22 Jul 2024", dueDateRaw: "2024-07-22",
      status: "Verified", verification: "Verified", verifiedBy: "Fazil",
      remarks: "Security deposit with ₹25,000 early-bird discount applied.", city: "Delhi"
    },
    {
      id: "PAY-2024-086", customer: "Priya Nair", brand: "Tea Time", model: "Tea Time Express",
      type: "Franchise Fee", amount: 885000, amountRaw: 885000, gst: 159300, gstRaw: 159300,
      discount: 0, method: "Cheque", transactionId: "", reference: "CHQ-456789",
      bank: "Axis Bank", upi: "", cheque: "456789", invoice: "INV-2024-105",
      paymentDate: "21 Jun 2024", paymentDateRaw: "2024-06-21", dueDate: "21 Jul 2024", dueDateRaw: "2024-07-21",
      status: "Pending Verification", verification: "Pending", verifiedBy: "",
      remarks: "Cheque deposit — clearance pending.", city: "Hyderabad"
    },
    {
      id: "PAY-2024-085", customer: "Arjun Reddy", brand: "Original Burger Co.", model: "OBC Flagship",
      type: "Training Fee", amount: 75000, amountRaw: 75000, gst: 13500, gstRaw: 13500,
      discount: 0, method: "UPI", transactionId: "UPI20240620085", reference: "REF-OBC-085",
      bank: "", upi: "arjun.reddy@paytm", cheque: "", invoice: "INV-2024-102",
      paymentDate: "20 Jun 2024", paymentDateRaw: "2024-06-20", dueDate: "20 Jul 2024", dueDateRaw: "2024-07-20",
      status: "Completed", verification: "Verified", verifiedBy: "Fazil",
      remarks: "Training programme fee — batch June 2024.", city: "Bengaluru"
    },
    {
      id: "PAY-2024-084", customer: "Sneha Verma", brand: "Belgian Waffle Co.", model: "Belgian Waffle Express",
      type: "Marketing Fee", amount: 150000, amountRaw: 150000, gst: 27000, gstRaw: 27000,
      discount: 0, method: "NEFT", transactionId: "NEFT20240619084", reference: "REF-BWC-084",
      bank: "SBI", upi: "", cheque: "", invoice: "INV-2024-099",
      paymentDate: "19 Jun 2024", paymentDateRaw: "2024-06-19", dueDate: "19 Jul 2024", dueDateRaw: "2024-07-19",
      status: "Failed", verification: "Failed", verifiedBy: "",
      remarks: "Transaction failed — insufficient funds. Customer notified.", city: "Mumbai"
    },
    {
      id: "PAY-2024-076", customer: "Arjun Reddy", brand: "Original Burger Co.", model: "OBC Flagship",
      type: "Refund", amount: 250000, amountRaw: 250000, gst: 0, gstRaw: 0,
      discount: 0, method: "NEFT", transactionId: "", reference: "REF-REFUND-076",
      bank: "HDFC Bank", upi: "", cheque: "", invoice: "CN-2024-012",
      paymentDate: "18 Jun 2024", paymentDateRaw: "2024-06-18", dueDate: "—", dueDateRaw: "",
      status: "Refunded", verification: "Verified", verifiedBy: "Fazil",
      remarks: "Booking amount refund — site not approved.", city: "Bengaluru"
    }
  ],

  invoices: [
    {
      number: "INV-2024-112", customer: "Rahul Sharma", brand: "Odette", date: "24 Jun 2024", dateRaw: "2024-06-24",
      subTotal: 1250000, gst: 225000, discount: 0, grandTotal: 1475000, status: "Pending",
      dueDate: "24 Jul 2024", gstin: "29AABCU9603R1ZM", pan: "AABCU9603R",
      address: "42 MG Road, Indiranagar, Bengaluru 560038", city: "Bengaluru",
      notes: "Franchise fee — instalment 1 of 3. GST @ 18%."
    },
    {
      number: "INV-2024-110", customer: "Meera Iyer", brand: "Kasturi", date: "23 Jun 2024", dateRaw: "2024-06-23",
      subTotal: 250000, gst: 45000, discount: 0, grandTotal: 295000, status: "Paid",
      dueDate: "23 Jul 2024", gstin: "27AABCM1234F1Z5", pan: "AABCM1234F",
      address: "FC Road, Pune 411004", city: "Pune", notes: "Booking amount — Kasturi Family Dining."
    },
    {
      number: "INV-2024-108", customer: "Vikram Singh", brand: "Odette", date: "22 Jun 2024", dateRaw: "2024-06-22",
      subTotal: 475000, gst: 85500, discount: 25000, grandTotal: 535500, status: "Paid",
      dueDate: "22 Jul 2024", gstin: "07AABCV5678G1Z2", pan: "AABCV5678G",
      address: "Connaught Place, New Delhi 110001", city: "Delhi", notes: "Security deposit with discount."
    },
    {
      number: "INV-2024-105", customer: "Priya Nair", brand: "Tea Time", date: "21 Jun 2024", dateRaw: "2024-06-21",
      subTotal: 885000, gst: 159300, discount: 0, grandTotal: 1044300, status: "Overdue",
      dueDate: "21 Jun 2024", gstin: "36AABCP9012H1Z8", pan: "AABCP9012H",
      address: "Banjara Hills, Hyderabad 500034", city: "Hyderabad", notes: "Franchise fee — Tea Time Express."
    }
  ],

  ledger: [
    { date: "24 Jun 2024", type: "Debit", description: "Franchise Fee — Instalment 1", ref: "INV-2024-112", debit: 1475000, credit: 0, balance: 1475000 },
    { date: "23 Jun 2024", type: "Credit", description: "Booking Amount Received", ref: "PAY-2024-088", debit: 0, credit: 295000, balance: 0 },
    { date: "22 Jun 2024", type: "Credit", description: "Security Deposit", ref: "PAY-2024-087", debit: 0, credit: 535500, balance: -295000 },
    { date: "20 Jun 2024", type: "Credit", description: "Training Fee", ref: "PAY-2024-085", debit: 0, credit: 88500, balance: -830500 }
  ],

  pendingDues: [
    { customer: "Rahul Sharma", brand: "Odette", invoice: "INV-2024-112", amount: 1475000, dueDate: "24 Jul 2024", daysOverdue: 0, status: "Due Soon" },
    { customer: "Priya Nair", brand: "Tea Time", invoice: "INV-2024-105", amount: 1044300, dueDate: "21 Jun 2024", daysOverdue: 4, status: "Overdue" },
    { customer: "Sneha Verma", brand: "Belgian Waffle Co.", invoice: "INV-2024-099", amount: 177000, dueDate: "28 Jun 2024", daysOverdue: 0, status: "Due Soon" },
    { customer: "Vikram Singh", brand: "Odette", invoice: "INV-2024-115", amount: 625000, dueDate: "15 Jul 2024", daysOverdue: 0, status: "Upcoming" }
  ],

  refunds: [
    { id: "REF-2024-012", payment: "PAY-2024-076", customer: "Arjun Reddy", amount: 250000, reason: "Site not approved", status: "Completed", requestedBy: "Himani Bhargava", date: "18 Jun 2024" },
    { id: "REF-2024-013", payment: "PAY-2024-091", customer: "Sneha Verma", amount: 100000, reason: "Overpayment adjustment", status: "Pending Approval", requestedBy: "Fazil", date: "25 Jun 2024" }
  ],

  gstSummary: {
    cgst: 845600, sgst: 845600, igst: 124000, totalGst: 1815200,
    taxableValue: 10084444, invoices: 89, period: "Jun 2024"
  },

  timeline: [
    { time: "24 Jun 2024, 2:30 PM", title: "Payment initiated", desc: "Franchise fee NEFT received — PAY-2024-089.", user: "System" },
    { time: "24 Jun 2024, 2:35 PM", title: "Pending verification", desc: "Queued for accounts team verification.", user: "System" },
    { time: "23 Jun 2024, 11:00 AM", title: "Payment verified", desc: "Booking amount PAY-2024-088 verified by Fazil.", user: "Fazil" },
    { time: "23 Jun 2024, 11:05 AM", title: "Invoice generated", desc: "INV-2024-110 created and sent to customer.", user: "System" }
  ],

  auditLog: [
    { timestamp: "25 Jun 2024, 09:15:22", user: "Fazil", action: "VIEW", entity: "PAY-2024-089", details: "Opened payment details" },
    { timestamp: "24 Jun 2024, 14:35:10", user: "System", action: "CREATE", entity: "PAY-2024-089", details: "Payment initiated — NEFT ₹12,50,000" },
    { timestamp: "24 Jun 2024, 14:36:01", user: "System", action: "STATUS", entity: "PAY-2024-089", details: "Payment Initiated → Pending Verification" },
    { timestamp: "23 Jun 2024, 11:00:45", user: "Fazil", action: "VERIFY", entity: "PAY-2024-088", details: "Payment verified — UPI match confirmed" },
    { timestamp: "23 Jun 2024, 11:05:12", user: "System", action: "INVOICE", entity: "INV-2024-110", details: "Invoice generated for PAY-2024-088" },
    { timestamp: "21 Jun 2024, 16:20:33", user: "System", action: "FAIL", entity: "PAY-2024-084", details: "Payment failed — insufficient funds" }
  ],

  kpis: {
    todayCollections: 1725000,
    monthlyRevenue: 28450000,
    pendingPayments: 14,
    overduePayments: 3,
    invoicesGenerated: 89,
    refundRequests: 2,
    gstPayable: 1815200,
    topBrand: "Odette",
    topCity: "Bengaluru",
    successRate: 94
  }
};
