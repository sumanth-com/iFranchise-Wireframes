/* User Management — Mock Data */

const USER_DATA = {
  roles: ["CEO", "Co-Founder", "Admin", "HR", "Operations Manager", "Sales Manager", "Team Lead", "Sales Executive", "Brand Owner", "Accounts"],
  userStatuses: ["Invited", "Pending Verification", "Active", "On Leave", "Inactive", "Suspended", "Archived"],
  departments: ["Sales", "Operations", "Accounts", "Marketing", "HR", "Technology", "Legal", "Support"],
  offices: ["Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi", "Pune", "Kochi", "Ahmedabad"],
  states: ["Karnataka", "Telangana", "Tamil Nadu", "Maharashtra", "Delhi", "Kerala", "Gujarat"],

  kpis: {
    totalEmployees: 248,
    activeEmployees: 231,
    onLeave: 8,
    pendingInvitations: 5,
    departments: 8,
    teams: 24,
    todayBirthdays: 3,
    newJoiners: 6,
    onlineUsers: 42
  },

  users: [
    {
      employeeId: "EMP-2019-001", name: "Abdul Syed", email: "abdul.syed@franchisecrm.com", phone: "+91 98765 10014",
      role: "CEO", department: "Executive", team: "Executive", designation: "Chief Executive Officer",
      city: "Bengaluru", state: "Karnataka", status: "Active", manager: "—", reportsTo: "—",
      joiningDate: "2019-03-15", employmentType: "Full-time", dob: "1993-11-05",
      emergencyContact: "Fatima Syed — +91 98765 10015", address: "Whitefield, Bengaluru",
      skills: ["Strategy", "Franchise Development", "Leadership"], certifications: ["Certified Franchise Executive"],
      languages: ["English", "Hindi", "Urdu", "Kannada"], bankAccount: "****6674", notes: "Founding CEO — iFranchise",
      leads: 0, customers: 0, meetings: 12, tasks: 8
    },
    {
      employeeId: "EMP-2019-002", name: "Abrar", email: "abrar@franchisecrm.com", phone: "+91 98765 10018",
      role: "Co-Founder", department: "Executive", team: "Executive", designation: "Co-Founder",
      city: "Hyderabad", state: "Telangana", status: "Active", manager: "Abdul Syed", reportsTo: "Abdul Syed",
      joiningDate: "2019-03-15", employmentType: "Full-time", dob: "1994-07-30",
      emergencyContact: "Ahmed Abrar — +91 98765 10019", address: "Gachibowli, Hyderabad",
      skills: ["Business Development", "Partnerships", "Strategy"], certifications: [],
      languages: ["English", "Hindi", "Telugu", "Urdu"], bankAccount: "****3345", notes: "Co-Founder — iFranchise",
      leads: 0, customers: 0, meetings: 18, tasks: 10
    },
    {
      employeeId: "EMP-2019-003", name: "Sumanth", email: "sumanth@franchisecrm.com", phone: "+91 98765 10001",
      role: "Operations Manager", department: "Technology", team: "Product", designation: "Director — Product & Technology",
      city: "Bengaluru", state: "Karnataka", status: "Active", manager: "Abdul Syed", reportsTo: "Abdul Syed",
      joiningDate: "2019-06-01", employmentType: "Full-time", dob: "1985-06-12",
      emergencyContact: "Priya Sumanth — +91 98765 10002", address: "Indiranagar, Bengaluru",
      skills: ["Product Strategy", "CRM", "Technology"], certifications: ["MBA — IIM Bangalore"],
      languages: ["English", "Hindi", "Kannada"], bankAccount: "****4521", notes: "Product & platform lead",
      leads: 0, customers: 0, meetings: 12, tasks: 8
    },
    {
      employeeId: "EMP-2020-003", name: "Om Anil", email: "om.anil@franchisecrm.com", phone: "+91 98765 10003",
      role: "Operations Manager", department: "Operations", team: "Operations HQ", designation: "Operations Manager",
      city: "Bengaluru", state: "Karnataka", status: "Active", manager: "Abdul Syed", reportsTo: "Abdul Syed",
      joiningDate: "2020-01-10", employmentType: "Full-time", dob: "1988-09-22",
      emergencyContact: "Anil Kumar — +91 98765 10004", address: "Koramangala, Bengaluru",
      skills: ["Operations", "Process Design", "Vendor Management"], certifications: ["Six Sigma Green Belt"],
      languages: ["English", "Hindi", "Tamil"], bankAccount: "****7832", notes: "",
      leads: 0, customers: 0, meetings: 28, tasks: 15
    },
    {
      employeeId: "EMP-2021-007", name: "Himani Bhargava", email: "himani.bhargava@franchisecrm.com", phone: "+91 98765 10007",
      role: "Sales Manager", department: "Sales", team: "Bengaluru Sales", designation: "Sales Manager — South",
      city: "Bengaluru", state: "Karnataka", status: "Active", manager: "Abdul Syed", reportsTo: "Abdul Syed",
      joiningDate: "2021-06-01", employmentType: "Full-time", dob: "1990-03-18",
      emergencyContact: "Rajesh Bhargava — +91 98765 10008", address: "HSR Layout, Bengaluru",
      skills: ["Sales Leadership", "Franchise Sales", "Negotiation"], certifications: ["Certified Franchise Executive"],
      languages: ["English", "Hindi", "Kannada"], bankAccount: "****2190", notes: "Top performer Q1 2024",
      leads: 45, customers: 28, meetings: 64, tasks: 22
    },
    {
      employeeId: "EMP-2023-022", name: "Diksha", email: "diksha@franchisecrm.com", phone: "+91 98765 10022",
      role: "Team Lead", department: "Sales", team: "Hyderabad Sales", designation: "Team Lead — Hyderabad",
      city: "Hyderabad", state: "Telangana", status: "Active", manager: "Himani Bhargava", reportsTo: "Himani Bhargava",
      joiningDate: "2023-01-15", employmentType: "Full-time", dob: "1992-12-08",
      emergencyContact: "Meena Diksha — +91 98765 10023", address: "Madhapur, Hyderabad",
      skills: ["Team Management", "Pipeline Review", "Coaching"], certifications: ["Sales Leadership Certificate"],
      languages: ["English", "Hindi", "Telugu"], bankAccount: "****8890", notes: "Promoted Jan 2024",
      leads: 28, customers: 16, meetings: 48, tasks: 20
    },
    {
      employeeId: "EMP-2021-011", name: "Fazil", email: "fazil@franchisecrm.com", phone: "+91 98765 10011",
      role: "Accounts", department: "Accounts", team: "Finance", designation: "Accounts Manager",
      city: "Mumbai", state: "Maharashtra", status: "Active", manager: "Om Anil", reportsTo: "Om Anil",
      joiningDate: "2021-09-01", employmentType: "Full-time", dob: "1989-04-14",
      emergencyContact: "Nazia Fazil — +91 98765 10012", address: "Andheri, Mumbai",
      skills: ["Accounts", "GST", "Reconciliation"], certifications: ["CA Inter"],
      languages: ["English", "Hindi", "Marathi"], bankAccount: "****5567", notes: "",
      leads: 0, customers: 0, meetings: 8, tasks: 14
    },
    {
      employeeId: "EMP-2023-025", name: "Akshita", email: "akshita@franchisecrm.com", phone: "+91 98765 10025",
      role: "Brand Owner", department: "Marketing", team: "Brand Partnerships", designation: "Brand Partnership Lead",
      city: "Chennai", state: "Tamil Nadu", status: "On Leave", manager: "Om Anil", reportsTo: "Om Anil",
      joiningDate: "2023-04-10", employmentType: "Full-time", dob: "1991-06-23",
      emergencyContact: "Ravi Akshita — +91 98765 10026", address: "Anna Nagar, Chennai",
      skills: ["Brand Management", "Partnerships"], certifications: ["Digital Marketing Pro"],
      languages: ["English", "Hindi", "Tamil"], bankAccount: "****1123", notes: "Maternity leave until 15 Jul",
      leads: 5, customers: 8, meetings: 12, tasks: 3
    },
    {
      employeeId: "EMP-2024-031", name: "Swetha", email: "swetha@franchisecrm.com", phone: "+91 98765 10031",
      role: "HR", department: "HR", team: "People Ops", designation: "HR Executive",
      city: "Bengaluru", state: "Karnataka", status: "Active", manager: "Om Anil", reportsTo: "Om Anil",
      joiningDate: "2024-01-08", employmentType: "Full-time", dob: "1995-02-14",
      emergencyContact: "Lakshmi Swetha — +91 98765 10032", address: "Jayanagar, Bengaluru",
      skills: ["Recruitment", "Onboarding", "HRIS"], certifications: ["SHRM-CP"],
      languages: ["English", "Hindi", "Kannada", "Telugu"], bankAccount: "****9987", notes: "New joiner — onboarding lead",
      leads: 0, customers: 0, meetings: 6, tasks: 11
    },
    {
      employeeId: "EMP-2024-035", name: "Rahul Mehta", email: "rahul.mehta@franchisecrm.com", phone: "+91 98765 10035",
      role: "Sales Executive", department: "Sales", team: "Pune Sales", designation: "Sales Executive",
      city: "Pune", state: "Maharashtra", status: "Pending Verification", manager: "Himani Bhargava", reportsTo: "Himani Bhargava",
      joiningDate: "2024-06-20", employmentType: "Full-time", dob: "1996-08-09",
      emergencyContact: "—", address: "Koregaon Park, Pune",
      skills: ["Inside Sales"], certifications: [], languages: ["English", "Hindi", "Marathi"],
      bankAccount: "", notes: "Awaiting document verification", leads: 0, customers: 0, meetings: 0, tasks: 2
    },
    {
      employeeId: "EMP-2024-036", name: "Priya Nair", email: "priya.nair@franchisecrm.com", phone: "+91 98765 10036",
      role: "Sales Executive", department: "Sales", team: "Kochi Sales", designation: "Sales Executive",
      city: "Kochi", state: "Kerala", status: "Invited", manager: "Himani Bhargava", reportsTo: "Himani Bhargava",
      joiningDate: "2024-07-01", employmentType: "Full-time", dob: "1997-01-20",
      emergencyContact: "—", address: "—", skills: [], certifications: [], languages: ["English", "Malayalam"],
      bankAccount: "", notes: "Invitation sent 22 Jun", leads: 0, customers: 0, meetings: 0, tasks: 0
    }
  ],

  departmentStats: [
    { name: "Sales", headcount: 86, head: "Himani Bhargava", teams: 6 },
    { name: "Operations", headcount: 42, head: "Om Anil", teams: 4 },
    { name: "Accounts", headcount: 28, head: "Fazil", teams: 2 },
    { name: "Marketing", headcount: 22, head: "Akshita", teams: 3 },
    { name: "HR", headcount: 12, head: "Swetha", teams: 1 },
    { name: "Technology", headcount: 34, head: "—", teams: 4 },
    { name: "Legal", headcount: 8, head: "—", teams: 1 },
    { name: "Support", headcount: 16, head: "—", teams: 3 }
  ],

  teams: [
    { name: "Bengaluru Sales", department: "Sales", lead: "Himani Bhargava", members: 18, city: "Bengaluru" },
    { name: "Hyderabad Sales", department: "Sales", lead: "Diksha", members: 14, city: "Hyderabad" },
    { name: "Mumbai Sales", department: "Sales", lead: "—", members: 12, city: "Mumbai" },
    { name: "Pune Sales", department: "Sales", lead: "—", members: 10, city: "Pune" },
    { name: "Operations HQ", department: "Operations", lead: "Om Anil", members: 15, city: "Bengaluru" },
    { name: "Finance", department: "Accounts", lead: "Fazil", members: 12, city: "Mumbai" },
    { name: "People Ops", department: "HR", lead: "Swetha", members: 8, city: "Bengaluru" },
    { name: "Brand Partnerships", department: "Marketing", lead: "Akshita", members: 9, city: "Chennai" }
  ],

  orgChart: {
    name: "Abdul Syed", title: "CEO",
    children: [
      { name: "Abrar", title: "Co-Founder", children: [] },
      {
        name: "Om Anil", title: "Operations Manager",
        children: [
          { name: "Fazil", title: "Accounts Manager", children: [] },
          { name: "Swetha", title: "HR Executive", children: [] },
          { name: "Akshita", title: "Brand Partnership Lead", children: [] }
        ]
      },
      {
        name: "Himani Bhargava", title: "Sales Manager",
        children: [
          { name: "Diksha", title: "Team Lead — Hyderabad", children: [] }
        ]
      },
      { name: "Sumanth", title: "Director — Product & Technology", children: [] }
    ]
  },

  hierarchy: [
    {
      name: "Abdul Syed", title: "CEO", department: "Executive",
      children: [
        { name: "Abrar", title: "Co-Founder", department: "Executive", children: [] },
        {
          name: "Om Anil", title: "Operations Manager", department: "Operations",
          children: [
            { name: "Fazil", title: "Accounts Manager", department: "Accounts", children: [] },
            { name: "Swetha", title: "HR Executive", department: "HR", children: [] },
            { name: "Akshita", title: "Brand Partnership Lead", department: "Marketing", children: [] }
          ]
        },
        {
          name: "Himani Bhargava", title: "Sales Manager", department: "Sales",
          children: [
            { name: "Diksha", title: "Team Lead", department: "Sales", children: [] }
          ]
        },
        { name: "Sumanth", title: "Director — Product & Technology", department: "Technology", children: [] }
      ]
    }
  ],

  activities: [
    { title: "Logged in from Bengaluru office", user: "Abdul Syed", time: "25 Jun, 10:42 AM", desc: "Chrome · Windows" },
    { title: "Updated lead assignment", user: "Himani Bhargava", time: "25 Jun, 10:30 AM", desc: "Reassigned 3 leads to Diksha" },
    { title: "Completed meeting — Brand Presentation", user: "Abdul Syed", time: "25 Jun, 10:15 AM", desc: "Odette · Rahul Sharma" },
    { title: "Uploaded document — GST Certificate", user: "Akshita", time: "24 Jun, 4:20 PM", desc: "Tea Time franchise docs" },
    { title: "Approved leave request", user: "Swetha", time: "24 Jun, 2:00 PM", desc: "Akshita — maternity leave" },
    { title: "New user invited", user: "Swetha", time: "22 Jun, 11:30 AM", desc: "Priya Nair — Kochi Sales" },
    { title: "Password changed", user: "Fazil", time: "22 Jun, 9:00 AM", desc: "Security policy compliance" },
    { title: "Exported user report", user: "Om Anil", time: "21 Jun, 5:45 PM", desc: "Q2 headcount summary" }
  ],

  sessions: [
    { user: "Abdul Syed", device: "Chrome · Windows", ip: "103.**.**.42", location: "Bengaluru", started: "25 Jun 9:00 AM", lastActive: "10:42 AM", status: "Active" },
    { user: "Himani Bhargava", device: "Safari · macOS", ip: "49.**.**.18", location: "Bengaluru", started: "25 Jun 8:30 AM", lastActive: "10:38 AM", status: "Active" },
    { user: "Sumanth", device: "Chrome · macOS", ip: "103.**.**.01", location: "Bengaluru", started: "25 Jun 8:00 AM", lastActive: "10:20 AM", status: "Active" },
    { user: "Diksha", device: "Mobile App · iOS", ip: "106.**.**.77", location: "Hyderabad", started: "24 Jun 6:00 PM", lastActive: "24 Jun 8:30 PM", status: "Expired" },
    { user: "Fazil", device: "Chrome · Windows", ip: "59.**.**.33", location: "Mumbai", started: "24 Jun 10:00 AM", lastActive: "24 Jun 6:00 PM", status: "Expired" }
  ],

  devices: [
    { user: "Abdul Syed", type: "Laptop", os: "Windows 11", browser: "Chrome 126", registered: "2022-03-01", lastSeen: "25 Jun 10:42 AM", trusted: true },
    { user: "Abdul Syed", type: "Mobile", os: "Android 14", browser: "FranchiseCRM App", registered: "2023-06-15", lastSeen: "24 Jun 8:00 PM", trusted: true },
    { user: "Himani Bhargava", type: "Laptop", os: "macOS 14", browser: "Safari 17", registered: "2021-06-01", lastSeen: "25 Jun 10:38 AM", trusted: true },
    { user: "Abrar", type: "Mobile", os: "iOS 17", browser: "Safari", registered: "2024-01-10", lastSeen: "23 Jun 4:00 PM", trusted: false }
  ],

  leaveRecords: [
    { user: "Akshita", type: "Maternity Leave", from: "01 Jun 2024", to: "15 Jul 2024", days: 45, status: "Approved" },
    { user: "Abdul Syed", type: "Casual Leave", from: "28 Jun 2024", to: "28 Jun 2024", days: 1, status: "Pending" },
    { user: "Swetha", type: "Sick Leave", from: "20 Jun 2024", to: "20 Jun 2024", days: 1, status: "Approved" },
    { user: "Diksha", type: "Annual Leave", from: "05 Jul 2024", to: "09 Jul 2024", days: 5, status: "Pending" }
  ],

  skills: [
    { user: "Himani Bhargava", skills: ["Sales Leadership", "Franchise Sales", "Negotiation"], certs: ["Certified Franchise Executive"], languages: ["English", "Hindi", "Kannada"] },
    { user: "Abdul Syed", skills: ["Strategy", "Leadership", "Franchise Development"], certs: ["Certified Franchise Executive"], languages: ["English", "Hindi", "Urdu", "Kannada"] },
    { user: "Diksha", skills: ["Team Management", "Pipeline Review", "Coaching"], certs: ["Sales Leadership Certificate"], languages: ["English", "Hindi", "Telugu"] },
    { user: "Swetha", skills: ["Recruitment", "Onboarding", "HRIS"], certs: ["SHRM-CP"], languages: ["English", "Hindi", "Kannada", "Telugu"] }
  ],

  documents: [
    { user: "Abdul Syed", name: "Aadhaar Card", type: "Identity", uploaded: "2022-02-14", expiry: "—", status: "Verified" },
    { user: "Abdul Syed", name: "Offer Letter", type: "Employment", uploaded: "2022-02-14", expiry: "—", status: "Verified" },
    { user: "Himani Bhargava", name: "PAN Card", type: "Identity", uploaded: "2021-06-01", expiry: "—", status: "Verified" },
    { user: "Rahul Mehta", name: "Aadhaar Card", type: "Identity", uploaded: "2024-06-20", expiry: "—", status: "Pending" },
    { user: "Akshita", name: "Maternity Leave Certificate", type: "Leave", uploaded: "28 May 2024", expiry: "—", status: "Verified" }
  ],

  timeline: [
    { title: "Appointed CEO", time: "2019-03-15", user: "Board", desc: "Abdul Syed — Chief Executive Officer" },
    { title: "Co-Founder onboarded", time: "2019-03-15", user: "System", desc: "Abrar — Co-Founder" },
    { title: "Platform launch", time: "2020-01-10", user: "Sumanth", desc: "FranchiseCRM v1.0 released" },
    { title: "Completed franchise leadership program", time: "2023-03-15", user: "Abdul Syed", desc: "Executive training" },
    { title: "Profile updated", time: "2024-01-10", user: "Abdul Syed", desc: "Emergency contact updated" },
    { title: "Device registered", time: "2023-06-15", user: "System", desc: "Mobile — Android 14" }
  ],

  preferences: {
    notifications: { email: true, sms: true, push: true, digest: "Daily" },
    language: "English",
    timezone: "Asia/Kolkata",
    dateFormat: "DD MMM YYYY",
    theme: "System"
  },

  birthdays: [
    { name: "Abdul Syed", date: "05 Nov", department: "Executive" },
    { name: "Swetha", date: "14 Feb", department: "HR" },
    { name: "Om Anil", date: "22 Sep", department: "Operations" }
  ],

  newJoiners: [
    { name: "Rahul Mehta", date: "20 Jun 2024", department: "Sales", city: "Pune" },
    { name: "Swetha", date: "08 Jan 2024", department: "HR", city: "Bengaluru" },
    { name: "Priya Nair", date: "01 Jul 2024", department: "Sales", city: "Kochi" }
  ]
};
