/* Enterprise Franchise CRM — Wireframe Component System */

const WF = (() => {
  const BRAND_NAME = "iFranchise CRM";
  const BRAND_MARK = "iF";

  const MODULES = {
    dashboard: { label: "Dashboard", href: "/dashboard/ceo" },
    leads: { label: "Lead Management", href: "/leads/dashboard" },
    customers: { label: "Customer Management", href: "/customers/dashboard" },
    brands: { label: "Brand Management", href: "/brands/dashboard" },
    franchiseModels: { label: "Franchise Models", href: "/franchise-models/dashboard" },
    meetings: { label: "Meeting Management", href: "/meetings/dashboard" },
    approvals: { label: "Approval Management", href: "/approvals/dashboard" },
    accounts: { label: "Accounts & Payments", href: "/accounts/finance-dashboard" },
    documents: { label: "Document Management", href: "/documents/dashboard" },
    notifications: { label: "Notification Center", href: "/notifications/dashboard" },
    analytics: { label: "Reporting & Analytics", href: "/analytics/executive" },
    automation: { label: "Automation Engine", href: "/automation/dashboard" },
    users: { label: "User Management", href: "/users/dashboard" },
    roles: { label: "Role & Permission Management", href: "/roles/dashboard" },
    audit: { label: "Audit & Activity Logs", href: "/audit/dashboard" },
    settings: { label: "System Configuration", href: "/settings/dashboard" },
    masterData: { label: "Master Data Management", href: "/master-data/dashboard" },
    callIntelligence: { label: "Call Intelligence", href: "/call-intelligence/dashboard" },
    marketingIntelligence: { label: "Marketing Intelligence", href: "/marketing-intelligence/dashboard" },
    templates: { label: "Template Management", href: "/templates/dashboard" },
    auth: { label: "Authentication", href: "/auth/login" }
  };

  const MODULE_ORDER = [
    "dashboard", "leads", "customers", "brands", "franchiseModels", "meetings",
    "approvals", "accounts", "documents", "notifications", "analytics", "automation",
    "users", "roles", "audit", "settings", "masterData", "callIntelligence",
    "marketingIntelligence", "templates", "auth"
  ];

  const MODULE_NAV = {
    notifications: "/notifications/all",
    announcements: "/notifications/announcements",
    meetingsSchedule: "/meetings/schedule",
    meetingsList: "/meetings/list",
    approvalsInbox: "/approvals/inbox",
    leadsCreate: "/leads/create",
    leadsList: "/leads/list",
    analytics: "/analytics/executive",
    analyticsReports: "/analytics/reports-dashboard",
    brands: "/brands/dashboard",
    customers: "/customers/dashboard",
    rolesMatrix: "/roles/permission-matrix"
  };

  function screenHref(screenId) {
    if (typeof WF_SPA !== "undefined" && WF_SPA.screenUrl) {
      return WF_SPA.screenUrl(screenId);
    }
    return screenId ? `#${screenId}` : "#";
  }

  const MODAL_NAV_FALLBACKS = {
    notifications: MODULE_NAV.notifications
  };

  function moduleLink(href, label, options = {}) {
    const classes = ["wf-btn", "wf-btn--sm"];
    if (options.primary) classes.push("wf-btn--primary");
    if (options.className) classes.push(options.className);
    return `<a href="${href}" class="${classes.join(" ")}">${esc(label)}</a>`;
  }

  const CUSTOMER_NAV = [
    { label: "Dashboard", href: "dashboard.html", icon: "dashboard" },
    { label: "Customer List", href: "list.html", icon: "list" },
    { label: "Create Customer", href: "create.html", icon: "add" }
  ];

  const CUSTOMER_DETAIL_TABS = [
    { label: "Overview", href: "details.html" },
    { label: "Timeline", href: "timeline.html" },
    { label: "Activity", href: "activity-log.html" },
    { label: "Meetings", href: "communication.html" },
    { label: "Documents", href: "documents.html" },
    { label: "Invoices", href: "payments.html" },
    { label: "Payments", href: "payments.html" },
    { label: "Agreements", href: "agreements.html" },
    { label: "Tasks", href: "tasks.html" },
    { label: "Notes", href: "notes.html" },
    { label: "Communication", href: "communication.html" }
  ];

  const DETAIL_SCREENS = [
    { label: "Customer Details", href: "details.html" },
    { label: "Timeline", href: "timeline.html" },
    { label: "Documents", href: "documents.html" },
    { label: "Agreements", href: "agreements.html" },
    { label: "Payment History", href: "payments.html" },
    { label: "Assigned Franchise", href: "franchise.html" },
    { label: "Communication History", href: "communication.html" },
    { label: "Internal Notes", href: "notes.html" },
    { label: "Tasks", href: "tasks.html" },
    { label: "Activity Log", href: "activity-log.html" }
  ];

  const PHONE_FORMAT = "+91 XXXXX XXXXX";

  function esc(str) {
    if (str == null) return "";
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function formatPhone(value) {
    if (value == null || value === "" || value === "—") return value == null ? "" : value;
    const str = String(value).trim();
    if (!str || str === PHONE_FORMAT) return str;
    const digits = str.replace(/\D/g, "");
    if (!digits) return str;
    let local = digits;
    if (digits.length >= 12 && digits.startsWith("91")) local = digits.slice(-10);
    else if (digits.length === 11 && digits.startsWith("0")) local = digits.slice(1);
    else if (digits.length > 10) local = digits.slice(-10);
    if (local.length !== 10) return str;
    return `+91 ${local.slice(0, 5)} ${local.slice(5)}`;
  }

  function formatPhoneInText(value) {
    if (value == null || value === "" || value === "—") return value == null ? "" : value;
    return String(value).replace(/(\+?\d[\d\s\-().]{6,}\d)/g, (match) => formatPhone(match));
  }

  function shared(key) {
    const pools = [typeof WF_DATA !== "undefined" && WF_DATA, typeof MODEL_DATA !== "undefined" && MODEL_DATA, typeof BRAND_DATA !== "undefined" && BRAND_DATA].filter(Boolean);
    for (const p of pools) {
      if (p[key] != null) return p[key];
    }
    const defaults = {
      users: ["Abdul Syed", "Abrar", "Himani Bhargava", "Om Anil", "Sumanth", "Fazil", "Diksha", "Akshita", "Swetha"],
      cities: ["Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi", "Pune"],
      states: ["Karnataka", "Telangana", "Tamil Nadu", "Maharashtra", "Delhi"],
      brands: ["Odette", "Original Burger Co.", "Kasturi", "Belgian Waffle Co.", "Chai Point"],
      statuses: ["Active", "Onboarding", "Pending", "Inactive"],
      agreementStatuses: ["Signed", "Pending Signature", "Draft", "Expired"],
      paymentStatuses: ["Paid", "Partial", "Overdue", "Pending"],
      sources: ["Website", "Referral", "Trade Show", "Cold Call"],
      customers: [{ id: "CUS-001", name: "Sample Customer", email: "sample@email.com", phone: "+91 98765 43210", city: "Bengaluru", brand: "Odette", status: "Active", agreementStatus: "Signed", paymentStatus: "Paid", salesExec: "Diksha", franchise: "—", teamLead: "Himani Bhargava", remarks: "" }]
    };
    return defaults[key] || [];
  }

  function uniqFilterOptions(items) {
    const seen = new Set();
    return (items || []).filter((item) => {
      const key = String(item || "").trim();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function customerNames() {
    if (typeof DOCUMENT_DATA !== "undefined" && DOCUMENT_DATA.customers) return DOCUMENT_DATA.customers;
    if (typeof WF_DATA !== "undefined" && WF_DATA.customers) return WF_DATA.customers.map((c) => c.name);
    return ["Rahul Sharma", "Priya Nair", "Arjun Reddy"];
  }

  function filterOptionsFor(label) {
    const users = shared("users");
    const cities = shared("cities");
    const brands = shared("brands");
    const statuses = shared("statuses");
    const sources = shared("sources");
    const dateRanges = ["Today", "Yesterday", "Last 7 days", "Last 30 days", "This month", "Last month", "This quarter", "This year", "Custom range"];
    const callAgents = typeof CALL_DATA !== "undefined"
      ? CALL_DATA.employeeActivity.map((e) => e.name)
      : users;
    const callOutcomes = typeof CALL_DATA !== "undefined"
      ? uniqFilterOptions(CALL_DATA.callHistory.map((c) => c.outcome).concat([
        "Meeting Scheduled", "Qualified Lead", "No Answer", "Proposal Sent", "Follow-up", "Callback Scheduled", "Not Interested"
      ]))
      : ["Meeting Scheduled", "Qualified Lead", "No Answer", "Proposal Sent", "Follow-up"];
    const docCategories = typeof DOCUMENT_DATA !== "undefined" ? DOCUMENT_DATA.categories : ["Customer Documents", "Brand Documents", "Agreement Documents"];
    const docTypes = typeof DOCUMENT_DATA !== "undefined" ? DOCUMENT_DATA.types : ["PAN", "Aadhaar", "Agreement", "Invoice"];
    const docStatuses = typeof DOCUMENT_DATA !== "undefined"
      ? uniqFilterOptions([...(DOCUMENT_DATA.workflow || []), ...(DOCUMENT_DATA.altStatuses || [])])
      : statuses;
    const modules = typeof DOCUMENT_DATA !== "undefined"
      ? DOCUMENT_DATA.modules
      : ["Leads", "Customers", "Brands", "Meetings", "Approvals", "Payments", "Documents"];
    const roles = typeof ROLES_DATA !== "undefined" && ROLES_DATA.systemRoles
      ? ROLES_DATA.systemRoles
      : ["CEO", "Co-Founder", "Admin", "Team Lead", "Sales Executive", "Brand Owner", "Accounts"];

    const catalog = {
      "Date Range": dateRanges,
      "Date": ["Today", "Yesterday", "Last 7 days", "Last 30 days", "This month"],
      "Due Date": ["Overdue", "Due today", "Next 7 days", "Next 30 days", "No due date"],
      "Escalated Date": dateRanges,
      "Expiry Range": ["Expired", "Expiring in 7 days", "Expiring in 30 days", "Expiring in 90 days", "No expiry"],
      "Expiry": ["Expired", "Expiring soon", "Valid", "No expiry"],
      "Agent": callAgents,
      "Direction": ["Inbound", "Outbound"],
      "Outcome": callOutcomes,
      "Brand": brands,
      "City": cities,
      "Status": uniqFilterOptions([...statuses, ...docStatuses, "Connected", "Missed", "Ringing", "Queued", "Completed", "Cancelled", "Draft", "Approved", "Rejected", "Pending", "Verified", "Published", "Archived", "Invited", "Suspended", "Read", "Unread", "Sent", "Delivered", "Failed"]),
      "Assigned To": users,
      "Assignee": users,
      "Organizer": users,
      "Approver": users,
      "Owner": users,
      "User": users,
      "Collector": users,
      "Submitted By": users,
      "Approved By": users,
      "Rejected By": users,
      "Shared By": users,
      "Sales Executive": users,
      "Recipient": uniqFilterOptions([...users, "All Sales", "All Customers", "CEO", "Accounts Team"]),
      "Category": docCategories,
      "Type": uniqFilterOptions([...docTypes, "Initial Discussion", "Discovery Call", "Brand Presentation", "Site Visit", "Payment", "Refund", "Invoice", "Agreement", "Approval Request", "Document Review", "System Alert"]),
      "File Type": ["PDF", "DOCX", "XLSX", "JPG", "PNG", "ZIP"],
      "Customer": customerNames(),
      "Priority": ["Critical", "High", "Medium", "Low"],
      "Mode": ["Online", "Offline", "Hybrid"],
      "Department": ["Sales", "Accounts", "Operations", "Marketing", "Legal", "HR", "IT", "Executive"],
      "Module": modules,
      "Permission": ["View", "Edit", "Download", "Share", "Full Access", "Admin Only"],
      "Shared With": uniqFilterOptions([...users, "Sales Team", "Accounts Team", "Brand Owners", "Customers"]),
      "Role": roles,
      "Team": ["Sales — North", "Sales — South", "Sales — West", "Accounts", "Operations", "Executive"],
      "Employment Type": ["Full-time", "Part-time", "Contract", "Intern"],
      "Industry": ["Food & Beverage", "Retail", "Education", "Healthcare", "Services", "Hospitality"],
      "Investment": ["Under ₹15 Lakhs", "₹15–25 Lakhs", "₹25–50 Lakhs", "₹50+ Lakhs"],
      "Model Type": ["Premium", "Standard", "Express", "Cloud Kitchen", "Kiosk", "Flagship"],
      "Franchise Model": ["Odette Premium", "OBC Flagship", "Kasturi Classic", "BWC Express", "Chai Point Standard"],
      "Model": ["Odette Premium", "OBC Flagship", "Kasturi Classic", "BWC Express"],
      "Region": ["South", "North", "West", "East", "Central"],
      "Campaign": typeof MARKETING_DATA !== "undefined"
        ? MARKETING_DATA.campaignSources.map((c) => c.campaign)
        : ["Meta — Q2 Lead Gen", "Google — Franchise Search", "LinkedIn B2B"],
      "Lead Source": typeof MARKETING_DATA !== "undefined"
        ? MARKETING_DATA.leadSources.map((s) => s.source)
        : sources,
      "Current Stage": typeof LEAD_DATA !== "undefined"
        ? LEAD_DATA.pipeline
        : ["New Lead", "Contacted", "Qualified", "Meeting Scheduled", "Proposal Shared", "Negotiation", "Agreement", "Payment", "Customer Converted", "Completed"],
      "Stage": typeof LEAD_DATA !== "undefined"
        ? LEAD_DATA.pipeline
        : ["New Lead", "Contacted", "Qualified", "Meeting Scheduled", "Proposal Shared", "Negotiation", "Agreement", "Payment", "Customer Converted", "Completed"],
      "Platform": ["Meta", "Google", "LinkedIn", "Website", "Offline", "Referral", "Email"],
      "Channel": ["In-App", "Email", "SMS", "WhatsApp", "Push Notification"],
      "Read/Unread": ["Read", "Unread"],
      "Method": ["NEFT", "RTGS", "UPI", "Cheque", "Cash", "Card", "Bank Transfer"],
      "Verification": ["Verified", "Pending Verification", "Rejected", "Not Submitted"],
      "Amount Range": ["Under ₹1 L", "₹1–5 L", "₹5–10 L", "₹10–25 L", "₹25 L+"],
      "Amount": ["Under ₹50 K", "₹50 K–1 L", "₹1–5 L", "₹5 L+"],
      "Period": ["Today", "This week", "This month", "This quarter", "This year", "Last month", "Last quarter"],
      "State": shared("states"),
      "Tax Type": ["GST", "IGST", "CGST + SGST", "TDS", "TCS"],
      "Transaction Type": ["Payment", "Refund", "Adjustment", "Invoice", "Credit Note"],
      "Payment Type": ["Franchise Fee", "Royalty", "Security Deposit", "Marketing Fee", "Renewal"],
      "Report Type": ["Summary", "Detailed", "Comparative", "Trend", "Executive"],
      "Format": ["PDF", "Excel", "CSV", "On-screen"],
      "Compare": ["Previous period", "Same period last year", "By brand", "By city", "No comparison"],
      "Action": ["Created", "Updated", "Deleted", "Approved", "Rejected", "Downloaded", "Shared", "Logged in", "Exported"],
      "Entity": ["Customer", "Brand", "Document", "Payment", "Approval", "Meeting", "User", "Call"],
      "Event": ["Login", "Export", "Approval", "Payment", "Upload", "Status Change"],
      "Severity": ["Critical", "High", "Medium", "Low", "Info"],
      "Trigger": ["Lead Created", "Status Changed", "Payment Received", "Document Uploaded", "Approval Pending", "Meeting Scheduled"],
      "Workflow State": ["Draft", "Active", "Paused", "Testing", "Archived"],
      "Approval Type": ["Franchise Agreement", "Payment Release", "Document Verification", "Brand Onboarding", "Territory Allocation"],
      "Payment Ref": ["PAY-2024-001", "PAY-2024-002", "INV-2024-089", "PAY-2024-045"],
      "Meeting": ["Brand Presentation — Rahul Sharma", "Site Visit — Indiranagar", "Investment Discussion — Priya Nair"],
      "Level": ["L1", "L2", "L3", "CEO", "Board"],
      "Reason": ["Incomplete documents", "Payment pending", "Customer withdrew", "Duplicate entry", "Policy violation"],
      "Required": ["Mandatory", "Optional", "Conditional"],
      "Asset Type": ["Logo", "Brochure", "Video", "Banner", "Template", "Guideline"],
      "Event Type": ["Status Change", "Note Added", "Document Uploaded", "Meeting Held", "Payment Recorded"],
      "Recipient Role": ["CEO", "Sales Executive", "Team Lead", "Accounts", "Customer", "Brand Owner"],
      "Error Type": ["Delivery Failed", "Bounced", "Timeout", "Invalid Number", "Provider Error"],
      "Retries": ["0 retries", "1 retry", "2 retries", "3+ retries"],
      "Report": ["Sales Pipeline", "Revenue Summary", "Lead Conversion", "Call Analytics", "Document Audit"]
    };

    if (catalog[label]) return catalog[label];

    if (/date|period|range/i.test(label)) return dateRanges;
    if (/user|agent|assignee|owner|organizer|approver|collector|recipient|executive/i.test(label)) return users;
    if (/brand/i.test(label)) return brands;
    if (/city/i.test(label)) return cities;
    if (/status/i.test(label)) return catalog.Status;
    if (/type/i.test(label)) return catalog.Type;

    return ["Value 1", "Value 2", "Value 3"];
  }

  function filterSelectHtml(label, customOptions) {
    const values = customOptions && customOptions.length ? customOptions : filterOptionsFor(label);
    const options = [`<option>${esc(label)}: All</option>`]
      .concat(values.map((v) => `<option>${esc(v)}</option>`))
      .join("");
    return `<select class="wf-filter-select" aria-label="Filter by ${esc(label)}">${options}</select>`;
  }

  function sidebarLogo(moduleLabel) {
    return `<a href="../index.html" class="wf-sidebar__logo" style="text-decoration:none;color:inherit">
      <div class="wf-sidebar__logo-icon" aria-hidden="true">${BRAND_MARK}</div>
      <div>
        <div class="wf-sidebar__logo-text">${BRAND_NAME}</div>
        <div class="wf-sidebar__logo-sub">${esc(moduleLabel || "")}</div>
      </div>
    </a>`;
  }

  function authLogo(subtitle) {
    const sub = subtitle ? `<div class="wf-auth__subtitle">${esc(subtitle)}</div>` : "";
    return `<div class="wf-auth__logo">
      <div class="wf-auth__logo-icon" aria-hidden="true">${BRAND_MARK}</div>
      <div class="wf-auth__title">${BRAND_NAME}</div>
      ${sub}
    </div>`;
  }

  function sidebar(activeModule, activeItem) {
    const mod = MODULES[activeModule];
    if (!mod) return "";

    let nav = `<div class="wf-sidebar__section">${mod.label}</div>
      <a href="${mod.href}" class="wf-sidebar__link wf-sidebar__link--active">
        <span class="wf-sidebar__icon"></span>${mod.label}
      </a>`;

    const exit = `<div class="wf-sidebar__exit">
      <a href="../index.html" class="wf-sidebar__link wf-sidebar__link--hub">
        <span class="wf-sidebar__hub-icon" aria-hidden="true">${bottomNavIconSvg("modules")}</span>
        <span>All Modules</span>
      </a>
    </div>`;

    return `<aside class="wf-sidebar" id="wf-sidebar">
      ${sidebarLogo(mod.label)}
      ${spaModuleSwitcher(activeModule)}
      <nav class="wf-sidebar__nav">${nav}</nav>
      ${exit}
    </aside>
    <div class="wf-sidebar-overlay" id="wf-sidebar-overlay"></div>`;
  }

  function spaModuleSwitcher(currentKey) {
    const links = MODULE_ORDER.filter((key) => MODULES[key]).map((key) => {
      const m = MODULES[key];
      const active = key === currentKey ? " wf-sidebar__link--module-active" : "";
      return `<a href="${m.href}" class="wf-sidebar__link wf-sidebar__link--module${active}">${esc(m.label)}</a>`;
    }).join("");
    return `<div class="wf-sidebar__module-switch">
      <div class="wf-sidebar__section">CRM Modules</div>
      ${links}
    </div>`;
  }

  function spaSidebar(moduleConfig) {
    const { moduleKey, moduleLabel, screens } = moduleConfig;
    const mod = MODULES[moduleKey];

    const screenLink = (s) => `<a href="${screenHref(s.id)}" data-screen="${s.id}" class="wf-sidebar__link">
        ${esc(s.label)}
      </a>`;

    let nav = "";
    if (moduleConfig.screenGroups) {
      moduleConfig.screenGroups.forEach((group) => {
        nav += `<div class="wf-sidebar__section">${esc(group.label)}</div>`;
        group.screenIds.forEach((id) => {
          const s = screens.find((sc) => sc.id === id);
          if (s) nav += screenLink(s);
        });
      });
    } else {
      nav += `<div class="wf-sidebar__section">${esc(moduleLabel)}</div>`;
      screens.forEach((s) => { nav += screenLink(s); });
    }

    const createBtn = moduleConfig.sidebarCreate
      ? `<div class="wf-sidebar__cta">
          <a href="${screenHref(moduleConfig.sidebarCreate)}" data-screen="${moduleConfig.sidebarCreate}" class="wf-sidebar__create-btn">+ Create New Lead</a>
        </div>`
      : "";

    const exit = `<div class="wf-sidebar__exit">
      <a href="../index.html" class="wf-sidebar__link wf-sidebar__link--hub">
        <span>All Modules</span>
      </a>
    </div>`;

    return `<aside class="wf-sidebar" id="wf-sidebar">
      ${sidebarLogo(mod ? mod.label : moduleLabel)}
      ${createBtn}
      ${moduleConfig.screenGroups ? "" : spaModuleSwitcher(moduleKey)}
      <nav class="wf-sidebar__nav">${nav}</nav>
      ${exit}
    </aside>
    <div class="wf-sidebar-overlay" id="wf-sidebar-overlay"></div>`;
  }

  function mobileScreenNavBar(moduleConfig, screen) {
    const crumbs = screen.breadcrumb || [{ label: screen.label }];
    let backScreen = moduleConfig.defaultScreen;
    let backLabel = moduleConfig.moduleLabel;
    if (crumbs.length > 1) {
      const prev = crumbs[crumbs.length - 2];
      if (prev.screen) backScreen = prev.screen;
      backLabel = prev.label;
    }

    const trail = crumbs.map((c, i) => {
      if (c.screen && i < crumbs.length - 1) {
        return `<a href="${screenHref(c.screen)}" data-screen="${c.screen}" class="wf-mobile-screen-nav__crumb">${esc(c.label)}</a>`;
      }
      return `<span class="wf-mobile-screen-nav__crumb wf-mobile-screen-nav__crumb--current">${esc(c.label)}</span>`;
    }).join('<span class="wf-mobile-screen-nav__sep" aria-hidden="true">›</span>');

    const backSvg = bottomNavIconSvg("back");
    return `<div class="wf-mobile-screen-nav" id="wf-mobile-screen-nav">
      <div class="wf-mobile-screen-nav__top">
        <button type="button" class="wf-mobile-screen-nav__back" data-screen="${backScreen}" aria-label="Back to ${esc(backLabel)}">
          <span aria-hidden="true">${backSvg}</span>
        </button>
        <div class="wf-mobile-screen-nav__meta">
          <div class="wf-mobile-screen-nav__module">${esc(moduleConfig.moduleLabel)}</div>
          <div class="wf-mobile-screen-nav__title">${esc(screen.label)}</div>
        </div>
      </div>
      <div class="wf-mobile-screen-nav__breadcrumb" aria-label="Breadcrumb">${trail}</div>
    </div>`;
  }

  function spaBreadcrumb(moduleLabel, moduleHref, items) {
    let crumbs = `<a href="../index.html">Home</a><span class="wf-breadcrumb__sep">/</span>
      <a href="${moduleHref}">${esc(moduleLabel)}</a>`;
    items.forEach((item, i) => {
      crumbs += `<span class="wf-breadcrumb__sep">/</span>`;
      if (item.screen && i < items.length - 1) {
        crumbs += `<a href="${screenHref(item.screen)}" data-screen="${item.screen}">${esc(item.label)}</a>`;
      } else {
        crumbs += `<span>${esc(item.label)}</span>`;
      }
    });
    return crumbs;
  }

  function spaTabs() {
    /* Sub-screens are listed in the sidebar — no duplicate tab bar in content. */
    return "";
  }

  function topbar(searchPlaceholder) {
    const placeholder = searchPlaceholder || "Search records, documents, agreements…";
    return `<header class="wf-topbar">
      <button type="button" class="wf-topbar__menu-btn" id="wf-menu-btn" aria-label="Open screen menu" aria-expanded="false" aria-controls="wf-sidebar">
        <span class="wf-topbar__menu-bar" aria-hidden="true"></span>
        <span class="wf-topbar__menu-bar" aria-hidden="true"></span>
        <span class="wf-topbar__menu-bar" aria-hidden="true"></span>
      </button>
      <a href="../index.html" class="wf-topbar__hub-btn" aria-label="All modules" title="All modules">
        <span class="wf-topbar__hub-btn-icon" aria-hidden="true">${bottomNavIconSvg("modules")}</span>
      </a>
      <div class="wf-topbar__search">
        <span class="wf-topbar__search-icon" aria-hidden="true"></span>
        <input type="search" placeholder="${esc(placeholder)}" id="wf-global-search" aria-label="Search">
      </div>
      <div class="wf-topbar__actions">
        <a href="/notifications/all" class="wf-topbar__icon-btn" title="Notifications" aria-label="Notifications"></a>
        <div class="wf-topbar__user">
          <div class="wf-topbar__avatar" aria-hidden="true"></div>
          <span>Abdul Syed</span>
        </div>
      </div>
    </header>`;
  }

  function breadcrumb(items) {
    const crumbs = items.map((item, i) => {
      const isLast = i === items.length - 1;
      const sep = i > 0 ? '<span class="wf-breadcrumb__sep">/</span>' : "";
      if (isLast || !item.href) {
        return `${sep}<span>${esc(item.label)}</span>`;
      }
      return `${sep}<a href="${item.href}">${esc(item.label)}</a>`;
    }).join("");
    return `<nav class="wf-breadcrumb" aria-label="Breadcrumb">${crumbs}</nav>`;
  }

  function pageHeader(title, subtitle, actions) {
    const actionHtml = actions ? `<div class="wf-page-header__actions">${actions}</div>` : "";
    const subHtml = subtitle ? `<div class="wf-page-header__subtitle">${esc(subtitle)}</div>` : "";
    return `<div class="wf-page-header">
      <div>
        <h1 class="wf-page-header__title">${esc(title)}</h1>
        ${subHtml}
      </div>
      ${actionHtml}
    </div>`;
  }

  function toolbar(options = {}) {
    const {
      showAdvanced = true,
      showExport = true,
      showImport = true,
      filters = ["Status", "Brand", "City", "Assigned To"]
    } = options;

    const filterHtml = filters.map((f) => {
      if (typeof f === "string") return filterSelectHtml(f);
      const label = f.label || f.name || "Filter";
      return filterSelectHtml(label, f.options);
    }).join("");

    const advBtn = showAdvanced
      ? `<button class="wf-btn wf-btn--sm" id="wf-adv-filter-toggle">Advanced Filters</button>`
      : "";

    const exportBtn = showExport
      ? `<button class="wf-btn wf-btn--sm" data-action="export">Export</button>`
      : "";

    const importBtn = showImport
      ? `<button class="wf-btn wf-btn--sm" data-action="import">Import</button>`
      : "";

    return `<div class="wf-toolbar">
      <div class="wf-toolbar__filters">
        <input type="search" class="wf-filter-input" placeholder="Search…" style="min-width:200px" id="wf-local-search">
        ${filterHtml}
        ${advBtn}
      </div>
      <div class="wf-toolbar__actions">
        ${exportBtn}
        ${importBtn}
      </div>
    </div>
    ${showAdvanced ? advancedFiltersPanel() : ""}`;
  }

  function advancedFiltersPanel() {
    return `<div class="wf-advanced-filters" id="wf-advanced-filters">
      <div class="wf-advanced-filters__grid">
        <div class="wf-form__group">
          <label class="wf-form__label">Date Range</label>
          <select class="wf-form__select"><option>Last 30 days</option><option>Last 90 days</option><option>Custom</option></select>
        </div>
        <div class="wf-form__group">
          <label class="wf-form__label">Agreement Status</label>
          <select class="wf-form__select"><option>All</option>${shared("agreementStatuses").map(s => `<option>${s}</option>`).join("")}</select>
        </div>
        <div class="wf-form__group">
          <label class="wf-form__label">Payment Status</label>
          <select class="wf-form__select"><option>All</option>${shared("paymentStatuses").map(s => `<option>${s}</option>`).join("")}</select>
        </div>
        <div class="wf-form__group">
          <label class="wf-form__label">Customer Source</label>
          <select class="wf-form__select"><option>All</option>${shared("sources").map(s => `<option>${s}</option>`).join("")}</select>
        </div>
        <div class="wf-form__group">
          <label class="wf-form__label">Investment Budget</label>
          <select class="wf-form__select"><option>All</option><option>₹10–15 Lakhs</option><option>₹15–25 Lakhs</option><option>₹25–50 Lakhs</option><option>₹50+ Lakhs</option></select>
        </div>
        <div class="wf-form__group">
          <label class="wf-form__label">Team Lead</label>
          <select class="wf-form__select"><option>All</option>${shared("users").map(u => `<option>${u}</option>`).join("")}</select>
        </div>
        <div class="wf-form__group">
          <label class="wf-form__label">Created From</label>
          <input type="date" class="wf-form__input" value="2024-01-01">
        </div>
        <div class="wf-form__group">
          <label class="wf-form__label">Created To</label>
          <input type="date" class="wf-form__input" value="2024-12-31">
        </div>
      </div>
      <div class="wf-advanced-filters__actions">
        <button class="wf-btn wf-btn--sm" id="wf-adv-filter-clear">Clear All</button>
        <button class="wf-btn wf-btn--sm wf-btn--primary" id="wf-adv-filter-apply">Apply Filters</button>
      </div>
    </div>`;
  }

  function pagination(total = 248, page = 1, perPage = 25) {
    const start = (page - 1) * perPage + 1;
    const end = Math.min(page * perPage, total);
    return `<div class="wf-pagination">
      <span>Showing ${start}–${end} of ${total} results</span>
      <div class="wf-pagination__pages">
        <button class="wf-pagination__page" aria-label="Previous">‹</button>
        <button class="wf-pagination__page wf-pagination__page--active">1</button>
        <button class="wf-pagination__page">2</button>
        <button class="wf-pagination__page">3</button>
        <button class="wf-pagination__page">…</button>
        <button class="wf-pagination__page">10</button>
        <button class="wf-pagination__page" aria-label="Next">›</button>
      </div>
    </div>`;
  }

  function customerTable(customers, options = {}) {
    const { selectable = true, showActions = true, compact = false } = options;

    if (compact) {
      const rows = customers.map((c) => `
        <tr data-customer-id="${c.id}">
          <td class="wf-table__cell-clip"><a href="#details" data-screen="details" class="wf-table__link">${esc(c.name)}</a></td>
          <td class="wf-table__cell-clip">${esc(c.brand)}</td>
          <td><span class="wf-badge">${esc(c.status)}</span></td>
          <td><span class="wf-badge wf-badge--outline">${esc(c.paymentStatus)}</span></td>
          <td class="wf-table__cell-clip">${esc(c.salesExec)}</td>
        </tr>
      `).join("");
      return `<div class="wf-table-wrap wf-table-wrap--fit">
        <table class="wf-table wf-table--fit wf-table--compact">
          <thead><tr>
            <th>Customer</th><th>Brand</th><th>Status</th><th>Payment</th><th>Assigned To</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
    }

    const rows = customers.map((c) => `
      <tr data-customer-id="${c.id}">
        ${selectable ? `<td><span class="wf-table__checkbox" role="checkbox" tabindex="0"></span></td>` : ""}
        <td class="wf-table__cell-clip"><a href="#details" data-screen="details" class="wf-table__link">${esc(c.id)}</a></td>
        <td class="wf-table__cell-clip"><a href="#details" data-screen="details" class="wf-table__link">${esc(c.name)}</a></td>
        <td class="wf-table__cell-clip">${esc(c.email)}</td>
        <td class="wf-table__cell-clip">${esc(formatPhone(c.phone))}</td>
        <td>${esc(c.city)}</td>
        <td class="wf-table__cell-clip">${esc(c.brand)}</td>
        <td><span class="wf-badge">${esc(c.status)}</span></td>
        <td><span class="wf-badge wf-badge--outline">${esc(c.agreementStatus)}</span></td>
        <td><span class="wf-badge wf-badge--outline">${esc(c.paymentStatus)}</span></td>
        <td class="wf-table__cell-clip">${esc(c.salesExec)}</td>
        ${showActions ? `<td><div class="wf-table__actions">
          <button data-screen="details" class="wf-btn wf-btn--sm">View</button>
          <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
        </div></td>` : ""}
      </tr>
    `).join("");

    return `<div class="wf-table-wrap wf-table-wrap--scroll">
      <table class="wf-table wf-table--fit">
        <thead>
          <tr>
            ${selectable ? "<th><span class='wf-table__checkbox'></span></th>" : ""}
            <th>Customer ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Brand</th>
            <th>Status</th>
            <th>Agreement</th>
            <th>Payment</th>
            <th>Assigned To</th>
            ${showActions ? "<th>Actions</th>" : ""}
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      ${pagination(customers.length > 6 ? 248 : customers.length)}
    </div>`;
  }

  function detailTabs() {
    /* Legacy customer pages — navigation via sidebar / links only. */
    return "";
  }

  function customerProfileCard(customer) {
    const c = customer || (typeof WF_DATA !== "undefined" ? WF_DATA.customers[0] : shared("customers")[0]);
    return `<div class="wf-card">
      <div class="wf-card__body" style="text-align:center">
        <div class="wf-avatar-lg"></div>
        <div style="font-size:16px;font-weight:600">${esc(c.name)}</div>
        <div style="font-size:12px;color:var(--wf-text-muted)">${esc(c.id)}</div>
        <div style="margin-top:8px"><span class="wf-badge wf-badge--dark">${esc(c.status)}</span></div>
      </div>
      <div class="wf-card__body" style="padding-top:0">
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Email</span><span class="wf-detail-info__value">${esc(c.email)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Phone</span><span class="wf-detail-info__value">${esc(formatPhone(c.phone))}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">City</span><span class="wf-detail-info__value">${esc(c.city)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Brand</span><span class="wf-detail-info__value">${esc(c.brand)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Franchise</span><span class="wf-detail-info__value">${esc(c.franchise)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Sales Exec</span><span class="wf-detail-info__value">${esc(c.salesExec)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Team Lead</span><span class="wf-detail-info__value">${esc(c.teamLead)}</span></div>
      </div>
      <div class="wf-card__footer">
        <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
        <button class="wf-btn wf-btn--sm wf-btn--primary" data-modal="send-email">Contact</button>
      </div>
    </div>`;
  }

  function customerForm(customer, mode = "create") {
    const c = customer || {};
    const isEdit = mode === "edit";
    const title = isEdit ? "Edit Customer" : "Create Customer";

    const opt = (arr, selected) => arr.map((v) =>
      `<option${v === selected ? " selected" : ""}>${esc(v)}</option>`
    ).join("");

    return `<form class="wf-form" id="wf-customer-form" data-mode="${mode}">
      <div class="wf-form__section">
        <div class="wf-form__section-title">Basic Information</div>
        <div class="wf-form__grid">
          <div class="wf-form__group">
            <label class="wf-form__label">Customer ID</label>
            <input class="wf-form__input" value="${esc(c.id || "Auto-generated")}" ${isEdit ? "" : "readonly"} placeholder="Auto-generated">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label wf-form__label--required">Full Name</label>
            <input class="wf-form__input" value="${esc(c.name || "")}" placeholder="Enter full name" required>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label wf-form__label--required">Email</label>
            <input class="wf-form__input" type="email" value="${esc(c.email || "")}" placeholder="email@example.com" required>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label wf-form__label--required">Phone</label>
            <input class="wf-form__input" type="tel" data-phone-input value="${esc(formatPhone(c.phone || ""))}" placeholder="${PHONE_FORMAT}" required>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Alternative Phone</label>
            <input class="wf-form__input" type="tel" data-phone-input value="${esc(formatPhone(c.altPhone || ""))}" placeholder="${PHONE_FORMAT}">
          </div>
          <div class="wf-form__group wf-form__group--full">
            <label class="wf-form__label">Address</label>
            <input class="wf-form__input" value="${esc(c.address || "")}" placeholder="Street address">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">City</label>
            <select class="wf-form__select">${opt(shared("cities"), c.city)}</select>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">State</label>
            <select class="wf-form__select">${opt(shared("states"), c.state)}</select>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">PIN Code</label>
            <input class="wf-form__input" value="${esc(c.pin || "")}" placeholder="6-digit PIN">
          </div>
        </div>
      </div>

      <div class="wf-form__section">
        <div class="wf-form__section-title">Business & Assignment</div>
        <div class="wf-form__grid">
          <div class="wf-form__group">
            <label class="wf-form__label">Business Experience</label>
            <input class="wf-form__input" value="${esc(c.experience || "")}" placeholder="e.g. 5 years F&B">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Investment Budget</label>
            <select class="wf-form__select">
              <option>₹10–15 Lakhs</option>
              <option>₹15–25 Lakhs</option>
              <option>₹25–50 Lakhs</option>
              <option>₹50+ Lakhs</option>
            </select>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Current Status</label>
            <select class="wf-form__select">${opt(shared("statuses"), c.status)}</select>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Assigned Brand</label>
            <select class="wf-form__select">${opt(shared("brands"), c.brand)}</select>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Assigned Sales Executive</label>
            <select class="wf-form__select">${opt(shared("users"), c.salesExec)}</select>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Assigned Team Lead</label>
            <select class="wf-form__select">${opt(shared("users"), c.teamLead)}</select>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Agreement Status</label>
            <select class="wf-form__select">${opt(shared("agreementStatuses"), c.agreementStatus)}</select>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Payment Status</label>
            <select class="wf-form__select">${opt(shared("paymentStatuses"), c.paymentStatus)}</select>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Customer Source</label>
            <select class="wf-form__select">${opt(shared("sources"), c.source)}</select>
          </div>
        </div>
      </div>

      <div class="wf-form__section">
        <div class="wf-form__section-title">Documents</div>
        <div class="wf-upload" id="wf-upload-zone">
          <div class="wf-upload__icon"></div>
          <div class="wf-upload__text">Drag & drop files here or <strong>click to browse</strong></div>
          <div class="wf-form__hint" style="margin-top:4px">PDF, JPG, PNG — Max 10 MB per file</div>
        </div>
      </div>

      <div class="wf-form__section">
        <div class="wf-form__section-title">Remarks</div>
        <div class="wf-form__group">
          <textarea class="wf-form__textarea" placeholder="Internal notes about this customer…">${esc(c.remarks || "")}</textarea>
        </div>
      </div>

      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-action="cancel-form">Cancel</button>
        ${isEdit ? `<button type="button" class="wf-btn wf-btn--danger" data-modal="confirm-delete">Delete Customer</button>` : ""}
        <button type="submit" class="wf-btn wf-btn--primary">${isEdit ? "Save Changes" : "Create Customer"}</button>
      </div>
    </form>`;
  }

  function leadAdvancedFilters() {
    const d = typeof LEAD_DATA !== "undefined" ? LEAD_DATA : {};
    const opt = (arr) => (arr || []).map((v) => `<option>${esc(v)}</option>`).join("");
    return `<div class="wf-advanced-filters" id="wf-advanced-filters">
      <div class="wf-advanced-filters__grid">
        <div class="wf-form__group"><label class="wf-form__label">Date Range</label><select class="wf-form__select"><option>Last 30 days</option><option>Last 90 days</option><option>Custom</option></select></div>
        <div class="wf-form__group"><label class="wf-form__label">Current Stage</label><select class="wf-form__select"><option>All</option>${opt(d.pipeline)}</select></div>
        <div class="wf-form__group"><label class="wf-form__label">Lead Source</label><select class="wf-form__select"><option>All</option>${opt(d.sources || shared("sources"))}</select></div>
        <div class="wf-form__group"><label class="wf-form__label">Priority</label><select class="wf-form__select"><option>All</option>${opt(d.priorities || ["Critical", "High", "Medium", "Low"])}</select></div>
        <div class="wf-form__group"><label class="wf-form__label">Investment Budget</label><select class="wf-form__select"><option>All</option>${opt(d.budgets || ["₹10–15 Lakhs", "₹15–25 Lakhs", "₹25–50 Lakhs", "₹50+ Lakhs"])}</select></div>
        <div class="wf-form__group"><label class="wf-form__label">Lead Score</label><select class="wf-form__select"><option>All</option><option>80+</option><option>60–79</option><option>Below 60</option></select></div>
        <div class="wf-form__group"><label class="wf-form__label">Team Lead</label><select class="wf-form__select"><option>All</option>${opt(d.users || shared("users"))}</select></div>
        <div class="wf-form__group"><label class="wf-form__label">Expected Closure</label><input type="date" class="wf-form__input" value="2024-07-31"></div>
      </div>
      <div class="wf-advanced-filters__actions">
        <button class="wf-btn wf-btn--sm" id="wf-adv-filter-clear">Clear All</button>
        <button class="wf-btn wf-btn--sm wf-btn--primary" id="wf-adv-filter-apply">Apply Filters</button>
      </div>
    </div>`;
  }

  function leadToolbar(options = {}) {
    const {
      showAdvanced = true,
      showExport = true,
      showImport = true,
      filters = ["Current Stage", "Brand", "City", "Priority", "Lead Source", "Assigned To"]
    } = options;
    const filterHtml = filters.map((f) => {
      if (typeof f === "string") return filterSelectHtml(f);
      const label = f.label || f.name || "Filter";
      return filterSelectHtml(label, f.options);
    }).join("");
    const advBtn = showAdvanced ? `<button class="wf-btn wf-btn--sm" id="wf-adv-filter-toggle">Advanced Filters</button>` : "";
    const exportBtn = showExport ? `<button class="wf-btn wf-btn--sm" data-action="export">Export</button>` : "";
    const importBtn = showImport ? `<button class="wf-btn wf-btn--sm" data-action="import">Import</button>` : "";
    return `<div class="wf-toolbar">
      <div class="wf-toolbar__filters">
        <input type="search" class="wf-filter-input" placeholder="Search leads…" style="min-width:200px" id="wf-local-search">
        ${filterHtml}
        ${advBtn}
      </div>
      <div class="wf-toolbar__actions">${exportBtn}${importBtn}</div>
    </div>
    ${showAdvanced ? leadAdvancedFilters() : ""}`;
  }

  function leadSortSelect() {
    return `<select class="wf-filter-select" aria-label="Sort leads">
      <option>Sort: Newest first</option>
      <option>Sort: Oldest first</option>
      <option>Sort: Lead Score (High → Low)</option>
      <option>Sort: Lead Score (Low → High)</option>
      <option>Sort: Expected Closure</option>
      <option>Sort: Priority</option>
      <option>Sort: Name (A → Z)</option>
    </select>`;
  }

  function leadBulkBar(count = 4) {
    return `<div class="wf-card wf-mb-16" style="padding:12px 16px;display:flex;flex-wrap:wrap;gap:8px;align-items:center;background:var(--wf-bg-muted, #f5f5f5)">
      <span style="font-size:13px;font-weight:600">${count} leads selected</span>
      <button class="wf-btn wf-btn--sm" data-screen="assignment">Assign</button>
      <button class="wf-btn wf-btn--sm" data-screen="followup">Schedule Follow-up</button>
      <button class="wf-btn wf-btn--sm" data-modal="bulk-assign">Bulk Assign</button>
      <button class="wf-btn wf-btn--sm" data-action="export">Export Selected</button>
      <button class="wf-btn wf-btn--sm wf-btn--danger" data-modal="archive-lead">Archive</button>
      <button class="wf-btn wf-btn--sm wf-btn--ghost" style="margin-left:auto">Clear Selection</button>
    </div>`;
  }

  function leadTable(leads, options = {}) {
    const { selectable = true, showActions = true, compact = false, hidePagination = false } = options;
    const total = leads.length > 6 ? 186 : leads.length;

    if (compact) {
      const rows = leads.map((l) => `
        <tr data-lead-id="${esc(l.id)}">
          <td class="wf-table__cell-clip"><a href="#details" data-screen="details" class="wf-table__link">${esc(l.name)}</a></td>
          <td class="wf-table__cell-clip">${esc(l.brand)}</td>
          <td><span class="wf-badge">${esc(l.stage)}</span></td>
          <td>${l.score}</td>
          <td class="wf-table__cell-clip">${esc(l.salesExec)}</td>
        </tr>
      `).join("");
      return `<div class="wf-table-wrap wf-table-wrap--fit">
        <table class="wf-table wf-table--fit wf-table--compact">
          <thead><tr><th>Lead</th><th>Brand</th><th>Stage</th><th>Score</th><th>Assigned To</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
    }

    const rows = leads.map((l) => `
      <tr data-lead-id="${esc(l.id)}">
        ${selectable ? `<td><span class="wf-table__checkbox" role="checkbox" tabindex="0"></span></td>` : ""}
        <td class="wf-table__cell-clip"><a href="#details" data-screen="details" class="wf-table__link">${esc(l.id)}</a></td>
        <td class="wf-table__cell-clip"><a href="#details" data-screen="details" class="wf-table__link">${esc(l.name)}</a></td>
        <td class="wf-table__cell-clip">${esc(l.email)}</td>
        <td class="wf-table__cell-clip">${esc(formatPhone(l.phone))}</td>
        <td>${esc(l.city)}</td>
        <td class="wf-table__cell-clip">${esc(l.brand)}</td>
        <td><span class="wf-badge">${esc(l.stage)}</span></td>
        <td><span class="wf-badge wf-badge--outline">${esc(l.priority)}</span></td>
        <td>${l.score}</td>
        <td class="wf-table__cell-clip">${esc(l.salesExec)}</td>
        ${showActions ? `<td><div class="wf-table__actions">
          <button data-screen="details" class="wf-btn wf-btn--sm">View</button>
          <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
        </div></td>` : ""}
      </tr>
    `).join("");

    return `<div class="wf-table-wrap wf-table-wrap--scroll">
      <table class="wf-table wf-table--fit">
        <thead><tr>
          ${selectable ? "<th><span class='wf-table__checkbox'></span></th>" : ""}
          <th>Lead ID</th><th>Full Name</th><th>Email</th><th>Mobile</th><th>City</th><th>Brand</th><th>Stage</th><th>Priority</th><th>Score</th><th>Executive</th>
          ${showActions ? "<th>Actions</th>" : ""}
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
      ${hidePagination ? "" : pagination(total)}
    </div>`;
  }

  function leadProfileCard(lead) {
    const l = lead || (typeof LEAD_DATA !== "undefined" ? LEAD_DATA.leads[0] : {});
    return `<div class="wf-card">
      <div class="wf-card__body" style="text-align:center">
        <div class="wf-avatar-lg"></div>
        <div style="font-size:16px;font-weight:600">${esc(l.name)}</div>
        <div style="font-size:12px;color:var(--wf-text-muted)">${esc(l.id)}</div>
        <div style="margin-top:8px"><span class="wf-badge wf-badge--dark">${esc(l.stage)}</span></div>
        <div style="margin-top:6px;font-size:13px">Score: <strong>${l.score}</strong>/100</div>
      </div>
      <div class="wf-card__body" style="padding-top:0">
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Email</span><span class="wf-detail-info__value">${esc(l.email)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Mobile</span><span class="wf-detail-info__value">${esc(formatPhone(l.phone))}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">City</span><span class="wf-detail-info__value">${esc(l.city)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Brand</span><span class="wf-detail-info__value">${esc(l.brand)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Budget</span><span class="wf-detail-info__value">${esc(l.budget)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Executive</span><span class="wf-detail-info__value">${esc(l.salesExec)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Team Lead</span><span class="wf-detail-info__value">${esc(l.teamLead)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Source</span><span class="wf-detail-info__value">${esc(l.source)}</span></div>
      </div>
      <div class="wf-card__footer">
        <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
        <button data-screen="followup" class="wf-btn wf-btn--sm">Follow-up</button>
        <button data-screen="schedule-meeting" class="wf-btn wf-btn--sm wf-btn--primary">Meeting</button>
      </div>
    </div>`;
  }

  function leadForm(lead, mode = "create") {
    const l = lead || {};
    const isEdit = mode === "edit";
    const d = typeof LEAD_DATA !== "undefined" ? LEAD_DATA : {};
    const opt = (arr, selected) => (arr || []).map((v) =>
      `<option${v === selected ? " selected" : ""}>${esc(v)}</option>`
    ).join("");

    return `<form class="wf-form" id="wf-lead-form" data-mode="${mode}">
      <div class="wf-form__section">
        <div class="wf-form__section-title">Lead Information</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Lead ID</label><input class="wf-form__input" value="${esc(l.id || "Auto-generated")}" ${isEdit ? "" : "readonly"}></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Full Name</label><input class="wf-form__input" value="${esc(l.name || "")}" required></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Mobile Number</label><input class="wf-form__input" type="tel" data-phone-input value="${esc(formatPhone(l.phone || ""))}" placeholder="${PHONE_FORMAT}" required></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Email</label><input class="wf-form__input" type="email" value="${esc(l.email || "")}" required></div>
          <div class="wf-form__group"><label class="wf-form__label">City</label><select class="wf-form__select">${opt(d.cities || shared("cities"), l.city)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">State</label><select class="wf-form__select">${opt(d.states || shared("states"), l.state)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Brand Interested</label><select class="wf-form__select">${opt(d.brands || shared("brands"), l.brand)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Investment Budget</label><select class="wf-form__select">${opt(d.budgets, l.budget)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Business Experience</label><input class="wf-form__input" value="${esc(l.experience || "")}" placeholder="e.g. 5 years F&B"></div>
          <div class="wf-form__group"><label class="wf-form__label">Preferred Location</label><input class="wf-form__input" value="${esc(l.preferredLocation || "")}" placeholder="Area, City"></div>
          <div class="wf-form__group"><label class="wf-form__label">Lead Source</label><select class="wf-form__select">${opt(d.sources || shared("sources"), l.source)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Priority</label><select class="wf-form__select">${opt(d.priorities, l.priority)}</select></div>
        </div>
      </div>
      <div class="wf-form__section">
        <div class="wf-form__section-title">Assignment & Pipeline</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Assigned Executive</label><select class="wf-form__select">${opt(d.users || shared("users"), l.salesExec)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Assigned Team Lead</label><select class="wf-form__select">${opt(d.users || shared("users"), l.teamLead)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Current Stage</label><select class="wf-form__select">${opt(d.pipeline, l.stage)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Lead Score</label><input class="wf-form__input" type="number" min="0" max="100" value="${esc(l.score != null ? l.score : "")}" placeholder="0–100"></div>
          <div class="wf-form__group"><label class="wf-form__label">Expected Closure Date</label><input type="date" class="wf-form__input" value="${esc(l.closureDateRaw || "2024-07-15")}"></div>
        </div>
      </div>
      <div class="wf-form__section">
        <div class="wf-form__section-title">Notes & Attachments</div>
        <div class="wf-form__group"><label class="wf-form__label">Notes</label><textarea class="wf-form__textarea" placeholder="Internal notes about this lead…">${esc(l.notes || "")}</textarea></div>
        <div class="wf-upload" id="wf-upload-zone">
          <div class="wf-upload__icon"></div>
          <div class="wf-upload__text">Drag & drop files here or <strong>click to browse</strong></div>
          <div class="wf-form__hint" style="margin-top:4px">PDF, JPG, PNG — Max 10 MB per file</div>
        </div>
      </div>
      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-action="cancel-form">Cancel</button>
        ${isEdit ? `<button type="button" class="wf-btn wf-btn--danger" data-modal="archive-lead">Archive Lead</button>` : ""}
        <button type="submit" class="wf-btn wf-btn--primary">${isEdit ? "Save Changes" : "Create Lead"}</button>
      </div>
    </form>`;
  }

  function leadKanbanView(leads) {
    const d = typeof LEAD_DATA !== "undefined" ? LEAD_DATA : { pipeline: [], leads: [] };
    const allLeads = leads || d.leads || [];
    const stages = d.pipeline || ["New Lead", "Contacted", "Qualified"];
    const cols = stages.map((stage) => ({
      title: stage,
      items: allLeads.filter((l) => l.stage === stage)
    })).filter((c) => c.items.length > 0 || ["New Lead", "Contacted", "Qualified", "Meeting Scheduled", "Proposal Shared", "Negotiation"].includes(c.title));

    return `<div class="wf-kanban">${cols.map((c) => `
      <div class="wf-kanban__col">
        <div class="wf-kanban__header">${esc(c.title)} <span class="wf-badge">${c.items.length}</span></div>
        ${c.items.map((l) => `
          <div class="wf-kanban__card" data-screen="details" style="cursor:pointer">
            <div style="font-weight:600;font-size:13px;margin-bottom:4px">${esc(l.name)}</div>
            <div style="font-size:11px;color:var(--wf-text-muted);margin-bottom:6px">${esc(l.id)} · ${esc(l.brand)}</div>
            <div style="font-size:11px;color:var(--wf-text-secondary)">${esc(l.city)} · Score ${l.score}</div>
            <div style="font-size:11px;margin-top:6px">${esc(l.salesExec)} · <span class="wf-badge wf-badge--outline" style="font-size:10px">${esc(l.priority)}</span></div>
          </div>
        `).join("")}
        ${c.items.length === 0 ? `<div class="wf-kanban__card" style="opacity:0.5;font-size:12px;text-align:center">No leads</div>` : ""}
      </div>
    `).join("")}</div>`;
  }

  function leadMeetingForm(lead) {
    const l = lead || (typeof LEAD_DATA !== "undefined" ? LEAD_DATA.leads[0] : {});
    const d = typeof LEAD_DATA !== "undefined" ? LEAD_DATA : {};
    const opt = (arr, sel) => (arr || []).map((v) => `<option${v === sel ? " selected" : ""}>${esc(v)}</option>`).join("");
    return `<form class="wf-form" id="wf-lead-meeting-form">
      <div class="wf-form__section"><div class="wf-form__section-title">Meeting Details</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Meeting ID</label><input class="wf-form__input" value="Auto-generated" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Meeting Title</label><input class="wf-form__input" value="Brand Presentation — ${esc(l.name)}" required></div>
          <div class="wf-form__group"><label class="wf-form__label">Lead</label><input class="wf-form__input" value="${esc(l.name)} (${esc(l.id)})" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label">Brand</label><select class="wf-form__select">${opt(d.brands, l.brand)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Meeting Type</label><select class="wf-form__select"><option>Brand Presentation</option><option>Discovery Call</option><option>Site Visit</option><option>Investment Discussion</option><option>Agreement Review</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Priority</label><select class="wf-form__select">${opt(d.priorities, l.priority)}</select></div>
        </div>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Schedule</div>
        <div class="wf-form__grid wf-form__grid--3">
          <div class="wf-form__group"><label class="wf-form__label">Meeting Date</label><input type="date" class="wf-form__input" value="2024-06-26"></div>
          <div class="wf-form__group"><label class="wf-form__label">Start Time</label><input type="time" class="wf-form__input" value="10:00"></div>
          <div class="wf-form__group"><label class="wf-form__label">End Time</label><input type="time" class="wf-form__input" value="11:00"></div>
          <div class="wf-form__group"><label class="wf-form__label">Meeting Mode</label><select class="wf-form__select"><option>Online</option><option>Offline</option><option>Hybrid</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Organizer</label><select class="wf-form__select">${opt(d.users, l.salesExec)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Reminder</label><select class="wf-form__select"><option>15 min before</option><option>30 min before</option><option>1 hour before</option></select></div>
        </div>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Location & Agenda</div>
        <div class="wf-form__grid">
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Meeting Link / Address</label><input class="wf-form__input" placeholder="Zoom link or physical address"></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Agenda</label><textarea class="wf-form__textarea" placeholder="Meeting agenda and discussion points…">1. Brand overview\n2. Investment & ROI\n3. Next steps</textarea></div>
        </div>
      </div>
      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-screen="details">Cancel</button>
        <button type="submit" class="wf-btn wf-btn--primary">Schedule Meeting</button>
      </div>
    </form>`;
  }

  function leadFollowupForm(lead) {
    const l = lead || (typeof LEAD_DATA !== "undefined" ? LEAD_DATA.leads[0] : {});
    const d = typeof LEAD_DATA !== "undefined" ? LEAD_DATA : {};
    const opt = (arr, sel) => (arr || []).map((v) => `<option${v === sel ? " selected" : ""}>${esc(v)}</option>`).join("");
    return `<form class="wf-form" id="wf-lead-followup-form">
      <div class="wf-form__grid">
        <div class="wf-form__group"><label class="wf-form__label">Lead</label><input class="wf-form__input" value="${esc(l.name)} (${esc(l.id)})" readonly></div>
        <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Follow-up Task</label><input class="wf-form__input" placeholder="e.g. Send revised ROI sheet" required></div>
        <div class="wf-form__group"><label class="wf-form__label">Assignee</label><select class="wf-form__select">${opt(d.users, l.salesExec)}</select></div>
        <div class="wf-form__group"><label class="wf-form__label">Due Date</label><input type="date" class="wf-form__input" value="2024-06-26"></div>
        <div class="wf-form__group"><label class="wf-form__label">Priority</label><select class="wf-form__select">${opt(d.priorities, "High")}</select></div>
        <div class="wf-form__group"><label class="wf-form__label">Channel</label><select class="wf-form__select"><option>Call</option><option>Email</option><option>WhatsApp</option><option>Meeting</option></select></div>
        <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Notes</label><textarea class="wf-form__textarea" placeholder="Follow-up context and talking points…"></textarea></div>
      </div>
      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-screen="details">Cancel</button>
        <button type="submit" class="wf-btn wf-btn--primary">Schedule Follow-up</button>
      </div>
    </form>`;
  }

  function leadAssignmentForm() {
    const d = typeof LEAD_DATA !== "undefined" ? LEAD_DATA : {};
    const opt = (arr) => (arr || []).map((v) => `<option>${esc(v)}</option>`).join("");
    return `<form class="wf-form" id="wf-lead-assignment-form">
      <div class="wf-form__grid">
        <div class="wf-form__group"><label class="wf-form__label">Assign To — Sales Executive</label><select class="wf-form__select">${opt(d.users)}</select></div>
        <div class="wf-form__group"><label class="wf-form__label">Assign To — Team Lead</label><select class="wf-form__select">${opt(d.users)}</select></div>
        <div class="wf-form__group"><label class="wf-form__label">Territory / Region</label><select class="wf-form__select"><option>South India</option><option>North India</option><option>West India</option><option>East India</option></select></div>
        <div class="wf-form__group"><label class="wf-form__label">Assignment Rule</label><select class="wf-form__select"><option>Manual</option><option>Round Robin</option><option>Territory Based</option><option>Load Balanced</option></select></div>
        <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Assignment Notes</label><textarea class="wf-form__textarea" placeholder="Reason for reassignment…"></textarea></div>
      </div>
      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-screen="list">Cancel</button>
        <button type="submit" class="wf-btn wf-btn--primary">Assign Leads</button>
      </div>
    </form>`;
  }

  function leadConvertForm(lead) {
    const l = lead || (typeof LEAD_DATA !== "undefined" ? LEAD_DATA.leads[0] : {});
    const d = typeof LEAD_DATA !== "undefined" ? LEAD_DATA : {};
    const opt = (arr, sel) => (arr || []).map((v) => `<option${v === sel ? " selected" : ""}>${esc(v)}</option>`).join("");
    return `<form class="wf-form" id="wf-lead-convert-form">
      <div class="wf-props__check wf-props__check--ok">Lead qualification verified — score ${l.score}/100</div>
      <div class="wf-props__check wf-props__check--ok">Stage: ${esc(l.stage)} — eligible for conversion</div>
      <div class="wf-form__section"><div class="wf-form__section-title">Customer Details (pre-filled from lead)</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Customer ID</label><input class="wf-form__input" value="Auto-generated (CUS-2024-XXX)" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label">Full Name</label><input class="wf-form__input" value="${esc(l.name)}" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label">Email</label><input class="wf-form__input" value="${esc(l.email)}" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label">Mobile</label><input class="wf-form__input" value="${esc(formatPhone(l.phone))}" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label">City</label><input class="wf-form__input" value="${esc(l.city)}" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label">Brand</label><select class="wf-form__select">${opt(d.brands, l.brand)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Investment Budget</label><input class="wf-form__input" value="${esc(l.budget)}" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label">Assigned Sales Executive</label><select class="wf-form__select">${opt(d.users, l.salesExec)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Initial Status</label><select class="wf-form__select"><option>Onboarding</option><option>Active</option><option>Pending Agreement</option></select></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Conversion Notes</label><textarea class="wf-form__textarea" placeholder="Notes for customer onboarding team…">${esc(l.notes || "")}</textarea></div>
        </div>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Transfer Options</div>
        <div class="wf-form__grid">
          <label class="wf-props__check"><input type="checkbox" checked> Copy timeline & activity log</label>
          <label class="wf-props__check"><input type="checkbox" checked> Transfer documents</label>
          <label class="wf-props__check"><input type="checkbox" checked> Transfer meeting history</label>
          <label class="wf-props__check"><input type="checkbox" checked> Transfer open tasks & follow-ups</label>
          <label class="wf-props__check"><input type="checkbox"> Archive lead record after conversion</label>
        </div>
      </div>
      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-screen="details">Cancel</button>
        <button type="button" class="wf-btn" data-modal="confirm-convert">Convert to Customer</button>
      </div>
    </form>`;
  }

  function leadMeetingTable(meetings, options = {}) {
    const { compact = false, hidePagination = false } = options;
    const rows = (meetings || []).map((m) => `
      <tr>
        <td><a href="#meeting-history" data-screen="meeting-history" class="wf-table__link">${esc(m.id)}</a></td>
        <td class="wf-table__cell-clip">${esc(m.title)}</td>
        <td class="wf-table__cell-clip">${esc(m.lead)}</td>
        <td>${esc(m.date)}</td>
        <td>${esc(m.start)} – ${esc(m.end)}</td>
        <td><span class="wf-badge">${esc(m.mode)}</span></td>
        <td><span class="wf-badge${m.status === "Completed" ? " wf-badge--dark" : ""}">${esc(m.status)}</span></td>
        <td class="wf-table__cell-clip">${esc(m.organizer)}</td>
        <td class="wf-table__cell-clip">${esc(m.outcome)}</td>
      </tr>
    `).join("");
    return `<div class="wf-table-wrap wf-table-wrap--scroll"><table class="wf-table wf-table--fit"><thead><tr>
      <th>ID</th><th>Title</th><th>Lead</th><th>Date</th><th>Time</th><th>Mode</th><th>Status</th><th>Organizer</th><th>Outcome</th>
    </tr></thead><tbody>${rows}</tbody></table>${hidePagination ? "" : pagination((meetings || []).length > 5 ? 42 : (meetings || []).length)}</div>`;
  }

  function leadModals() {
    return modals()
      .replace(/Customers/g, "Leads")
      .replace(/Customer/g, "Lead")
      .replace(/Rahul Sharma \(CUS-2024-001\)/, "Rahul Sharma (LEAD-2024-089)")
      + `
    <div class="wf-modal-overlay" id="modal-bulk-assign">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Bulk Assign Leads</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Sales Executive</label><select class="wf-form__select"><option>Diksha</option><option>Akshita</option><option>Fazil</option><option>Swetha</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Team Lead</label><select class="wf-form__select"><option>Himani Bhargava</option><option>Om Anil</option><option>Akshita</option></select></div>
          <div class="wf-form__group wf-form__group--full"><p style="font-size:13px">4 leads selected for reassignment.</p></div>
        </div></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-bulk-assign">Assign All</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-archive-lead">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Archive Lead</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <p style="font-size:13px;margin-bottom:12px">Archive <strong>Rahul Sharma (LEAD-2024-089)</strong>? Archived leads can be restored from the Lead Archive.</p>
          <div class="wf-form__group"><label class="wf-form__label">Reason</label><select class="wf-form__select"><option>Not Interested</option><option>Duplicate</option><option>Unresponsive</option><option>Budget Mismatch</option><option>Other</option></select></div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--danger" data-action="confirm-archive-lead">Archive Lead</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-confirm-convert">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Convert to Customer</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <p style="font-size:13px;margin-bottom:12px">Convert <strong>Rahul Sharma (LEAD-2024-089)</strong> to a customer record?</p>
          <div class="wf-props__check wf-props__check--ok">Timeline, documents, and meetings will be transferred</div>
          <div class="wf-props__check wf-props__check--ok">Lead stage will update to Customer Converted</div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-convert-lead">Confirm Conversion</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-import-leads">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Import Leads</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <div class="wf-upload"><div class="wf-upload__text">Upload CSV or Excel file</div><div class="wf-form__hint">Required columns: Name, Mobile, Email, City, Brand, Source</div></div>
          <div class="wf-form__group" style="margin-top:12px"><label class="wf-form__label">Assign imported leads to</label><select class="wf-form__select"><option>Round Robin — Sales Team</option><option>Diksha</option><option>Territory Based</option></select></div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-bulk-import">Start Import</button></div>
      </div>
    </div>`;
  }

  function timeline(items) {
    return `<div class="wf-timeline">
      ${items.map((item) => `
        <div class="wf-timeline__item">
          <div class="wf-timeline__dot"></div>
          <div class="wf-timeline__time">${esc(item.time)} · ${esc(item.user)}</div>
          <div class="wf-timeline__title">${esc(item.title)}</div>
          <div class="wf-timeline__desc">${esc(item.desc)}</div>
        </div>
      `).join("")}
    </div>`;
  }

  function emptyState(title, desc, actionLabel, actionHref) {
    const action = actionLabel
      ? `<a href="${actionHref || "#"}" class="wf-btn wf-btn--primary">${esc(actionLabel)}</a>`
      : "";
    return `<div class="wf-empty">
      <div class="wf-empty__icon"></div>
      <div class="wf-empty__title">${esc(title)}</div>
      <div class="wf-empty__desc">${esc(desc)}</div>
      ${action}
    </div>`;
  }

  function loadingState() {
    return `<div class="wf-loading" id="wf-loading">
      <div class="wf-loading__spinner"></div>
      <div>Loading data…</div>
    </div>`;
  }

  function errorState(title, desc) {
    return `<div class="wf-empty wf-empty--error">
      <div class="wf-empty__icon"></div>
      <div class="wf-empty__title">${esc(title || "Something went wrong")}</div>
      <div class="wf-empty__desc">${esc(desc || "Unable to load data. Please try again.")}</div>
      <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Retry</button>
    </div>`;
  }

  function modals() {
    return `
    <div class="wf-modal-overlay" id="modal-export">
      <div class="wf-modal">
        <div class="wf-modal__header">
          <span class="wf-modal__title">Export Customers</span>
          <button class="wf-modal__close" data-close-modal>&times;</button>
        </div>
        <div class="wf-modal__body">
          <div class="wf-form__group wf-mb-16">
            <label class="wf-form__label">Format</label>
            <select class="wf-form__select"><option>CSV</option><option>Excel (.xlsx)</option><option>PDF Report</option></select>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Columns</label>
            <select class="wf-form__select"><option>All columns</option><option>Selected columns</option><option>Summary only</option></select>
          </div>
        </div>
        <div class="wf-modal__footer">
          <button class="wf-btn" data-close-modal>Cancel</button>
          <button class="wf-btn wf-btn--primary" data-action="confirm-export">Export</button>
        </div>
      </div>
    </div>

    <div class="wf-modal-overlay" id="modal-import">
      <div class="wf-modal">
        <div class="wf-modal__header">
          <span class="wf-modal__title">Import Customers</span>
          <button class="wf-modal__close" data-close-modal>&times;</button>
        </div>
        <div class="wf-modal__body">
          <div class="wf-upload">
            <div class="wf-upload__icon"></div>
            <div class="wf-upload__text">Upload CSV or Excel file</div>
          </div>
          <div class="wf-form__hint" style="margin-top:12px"><a href="#">Download import template</a></div>
        </div>
        <div class="wf-modal__footer">
          <button class="wf-btn" data-close-modal>Cancel</button>
          <button class="wf-btn wf-btn--primary" data-action="confirm-import">Import</button>
        </div>
      </div>
    </div>

    <div class="wf-modal-overlay" id="modal-confirm-delete">
      <div class="wf-modal">
        <div class="wf-modal__header">
          <span class="wf-modal__title">Confirm Deletion</span>
          <button class="wf-modal__close" data-close-modal>&times;</button>
        </div>
        <div class="wf-modal__body">
          <p>Are you sure you want to delete <strong>Rahul Sharma (CUS-2024-001)</strong>? This action cannot be undone.</p>
        </div>
        <div class="wf-modal__footer">
          <button class="wf-btn" data-close-modal>Cancel</button>
          <button class="wf-btn wf-btn--danger" data-action="confirm-delete">Delete Customer</button>
        </div>
      </div>
    </div>

    <div class="wf-modal-overlay" id="modal-send-email">
      <div class="wf-modal wf-modal--lg">
        <div class="wf-modal__header">
          <span class="wf-modal__title">Send Communication</span>
          <button class="wf-modal__close" data-close-modal>&times;</button>
        </div>
        <div class="wf-modal__body">
          <div class="wf-form__grid">
            <div class="wf-form__group">
              <label class="wf-form__label">Type</label>
              <select class="wf-form__select"><option>Email</option><option>SMS</option><option>Call Log</option></select>
            </div>
            <div class="wf-form__group">
              <label class="wf-form__label">To</label>
              <input class="wf-form__input" value="rahul.sharma@email.com">
            </div>
            <div class="wf-form__group wf-form__group--full">
              <label class="wf-form__label">Subject</label>
              <input class="wf-form__input" placeholder="Enter subject">
            </div>
            <div class="wf-form__group wf-form__group--full">
              <label class="wf-form__label">Message</label>
              <textarea class="wf-form__textarea" placeholder="Type your message…"></textarea>
            </div>
          </div>
        </div>
        <div class="wf-modal__footer">
          <button class="wf-btn" data-close-modal>Cancel</button>
          <button class="wf-btn wf-btn--primary" data-action="send-comm">Send</button>
        </div>
      </div>
    </div>

    <div class="wf-modal-overlay" id="modal-add-note">
      <div class="wf-modal">
        <div class="wf-modal__header">
          <span class="wf-modal__title">Add Internal Note</span>
          <button class="wf-modal__close" data-close-modal>&times;</button>
        </div>
        <div class="wf-modal__body">
          <div class="wf-form__group">
            <label class="wf-form__label">Note</label>
            <textarea class="wf-form__textarea" placeholder="Write an internal note…" rows="5"></textarea>
          </div>
        </div>
        <div class="wf-modal__footer">
          <button class="wf-btn" data-close-modal>Cancel</button>
          <button class="wf-btn wf-btn--primary" data-action="save-note">Save Note</button>
        </div>
      </div>
    </div>

    <div class="wf-modal-overlay" id="modal-add-task">
      <div class="wf-modal">
        <div class="wf-modal__header">
          <span class="wf-modal__title">Create Task</span>
          <button class="wf-modal__close" data-close-modal>&times;</button>
        </div>
        <div class="wf-modal__body">
          <div class="wf-form__grid">
            <div class="wf-form__group wf-form__group--full">
              <label class="wf-form__label">Task Title</label>
              <input class="wf-form__input" placeholder="Enter task title">
            </div>
            <div class="wf-form__group">
              <label class="wf-form__label">Assignee</label>
              <select class="wf-form__select">${shared("users").map(u => `<option>${esc(u)}</option>`).join("")}</select>
            </div>
            <div class="wf-form__group">
              <label class="wf-form__label">Due Date</label>
              <input type="date" class="wf-form__input">
            </div>
            <div class="wf-form__group">
              <label class="wf-form__label">Priority</label>
              <select class="wf-form__select"><option>High</option><option>Medium</option><option>Low</option></select>
            </div>
          </div>
        </div>
        <div class="wf-modal__footer">
          <button class="wf-btn" data-close-modal>Cancel</button>
          <button class="wf-btn wf-btn--primary" data-action="save-task">Create Task</button>
        </div>
      </div>
    </div>

    <div class="wf-toast" id="wf-toast"></div>`;
  }

  function initPage(config) {
    const {
      activeModule = "customers",
      activeItem = "",
      activeTab = "",
      title = "Customer Management",
      breadcrumb: crumbs = [],
      content = ""
    } = config;

    document.body.innerHTML = `
      <div class="wf-app">
        ${sidebar(activeModule, activeItem)}
        <div class="wf-main">
          ${topbar()}
          <main class="wf-content">
            <div class="wf-ptr-indicator" id="wf-ptr-indicator">Pull to refresh</div>
            ${breadcrumb(crumbs)}
            ${content}
          </main>
        </div>
      </div>
      ${modals()}
    `;

    document.title = `${title} — ${BRAND_NAME}`;
    bindEvents();
  }

  function bindShellEvents() {
    if (document.body.dataset.wfShellBound) return;
    document.body.dataset.wfShellBound = "1";

    const menuBtn = document.getElementById("wf-menu-btn");
    const sidebarEl = document.getElementById("wf-sidebar");
    const overlay = document.getElementById("wf-sidebar-overlay");

    menuBtn?.addEventListener("click", () => {
      const open = !sidebarEl.classList.contains("is-open");
      sidebarEl.classList.toggle("is-open", open);
      overlay.classList.toggle("is-visible", open);
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    overlay?.addEventListener("click", () => {
      sidebarEl.classList.remove("is-open");
      overlay.classList.remove("is-visible");
      menuBtn?.setAttribute("aria-expanded", "false");
    });

    document.body.addEventListener("click", (e) => {
      const navEl = e.target.closest("[data-nav]");
      if (navEl) {
        const href = navEl.getAttribute("data-nav");
        if (href) {
          e.preventDefault();
          window.location.href = href;
          return;
        }
      }
      const modalTrigger = e.target.closest("[data-modal]");
      if (modalTrigger) {
        e.preventDefault();
        const modalId = modalTrigger.getAttribute("data-modal");
        const modalEl = document.getElementById(`modal-${modalId}`);
        if (modalEl) {
          modalEl.classList.add("is-open");
        } else if (MODAL_NAV_FALLBACKS[modalId]) {
          window.location.href = MODAL_NAV_FALLBACKS[modalId];
        }
        return;
      }
      const closeBtn = e.target.closest("[data-close-modal]");
      if (closeBtn) {
        closeBtn.closest(".wf-modal-overlay")?.classList.remove("is-open");
        return;
      }
      const exportBtn = e.target.closest('[data-action="export"]');
      if (exportBtn) { document.getElementById("modal-export")?.classList.add("is-open"); return; }
      const importBtn = e.target.closest('[data-action="import"]');
      if (importBtn) { document.getElementById("modal-import")?.classList.add("is-open"); return; }
      const confirmExport = e.target.closest('[data-action="confirm-export"]');
      if (confirmExport) { closeAllModals(); showToast("Export started — file will download shortly"); return; }
      const confirmImport = e.target.closest('[data-action="confirm-import"]');
      if (confirmImport) { closeAllModals(); showToast("Import queued — records will be processed"); return; }
      const confirmDelete = e.target.closest('[data-action="confirm-delete"]');
      if (confirmDelete) {
        closeAllModals();
        showToast("Record deleted");
        if (typeof WF_SPA !== "undefined") WF_SPA.navigate("list");
        return;
      }
      const sendComm = e.target.closest('[data-action="send-comm"]');
      if (sendComm) { closeAllModals(); showToast("Communication sent successfully"); return; }
      const saveNote = e.target.closest('[data-action="save-note"]');
      if (saveNote) { closeAllModals(); showToast("Note saved"); return; }
      const saveTask = e.target.closest('[data-action="save-task"]');
      if (saveTask) { closeAllModals(); showToast("Task created"); return; }
      const confirmPublish = e.target.closest('[data-action="confirm-publish"]');
      if (confirmPublish) { closeAllModals(); showToast("Model published successfully"); return; }
      const confirmArchive = e.target.closest('[data-action="confirm-archive"]');
      if (confirmArchive) { closeAllModals(); showToast("Model archived"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("archive"); return; }
      const confirmCancel = e.target.closest('[data-action="confirm-cancel-meeting"]');
      if (confirmCancel) { closeAllModals(); showToast("Meeting cancelled"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("list"); return; }
      const confirmReschedule = e.target.closest('[data-action="confirm-reschedule"]');
      if (confirmReschedule) { closeAllModals(); showToast("Meeting rescheduled"); return; }
      const confirmApprove = e.target.closest('[data-action="confirm-approve"]');
      if (confirmApprove) { closeAllModals(); showToast("Approval granted"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("completed"); return; }
      const confirmReject = e.target.closest('[data-action="confirm-reject"]');
      if (confirmReject) { closeAllModals(); showToast("Approval rejected"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("rejected"); return; }
      const confirmReturn = e.target.closest('[data-action="confirm-return"]');
      if (confirmReturn) { closeAllModals(); showToast("Returned for changes"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("pending"); return; }
      const confirmBulkApprove = e.target.closest('[data-action="confirm-bulk-approve"]');
      if (confirmBulkApprove) { closeAllModals(); showToast("Bulk approval completed — 5 requests approved"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("completed"); return; }
      const confirmVerifyPayment = e.target.closest('[data-action="confirm-verify-payment"]');
      if (confirmVerifyPayment) { closeAllModals(); showToast("Payment verified successfully"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("payment-details"); return; }
      const confirmRefund = e.target.closest('[data-action="confirm-refund"]');
      if (confirmRefund) { closeAllModals(); showToast("Refund request submitted for approval"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("refunds"); return; }
      const confirmPaymentApprove = e.target.closest('[data-action="confirm-payment-approve"]');
      if (confirmPaymentApprove) { closeAllModals(); showToast("Payment approved"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("payment-list"); return; }
      const confirmVerifyDoc = e.target.closest('[data-action="confirm-verify-doc"]');
      if (confirmVerifyDoc) { closeAllModals(); showToast("Document verified"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("details"); return; }
      const confirmApproveDoc = e.target.closest('[data-action="confirm-approve-doc"]');
      if (confirmApproveDoc) { closeAllModals(); showToast("Document approved"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("details"); return; }
      const confirmRejectDoc = e.target.closest('[data-action="confirm-reject-doc"]');
      if (confirmRejectDoc) { closeAllModals(); showToast("Document rejected"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("library"); return; }
      const confirmBulkUpload = e.target.closest('[data-action="confirm-bulk-upload"]');
      if (confirmBulkUpload) { closeAllModals(); showToast("Bulk upload started — 12 files queued"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("library"); return; }
      const confirmBulkDownload = e.target.closest('[data-action="confirm-bulk-download"]');
      if (confirmBulkDownload) { closeAllModals(); showToast("Bulk download started — ZIP preparing"); return; }
      const confirmDeleteDoc = e.target.closest('[data-action="confirm-delete-doc"]');
      if (confirmDeleteDoc) { closeAllModals(); showToast("Document archived"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("library"); return; }
      const markAllRead = e.target.closest('[data-action="mark-all-read"]');
      if (markAllRead) { closeAllModals(); showToast("All notifications marked as read"); return; }
      const confirmDeleteNotif = e.target.closest('[data-action="confirm-delete-notif"]');
      if (confirmDeleteNotif) { closeAllModals(); showToast("Notification deleted"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("all"); return; }
      const confirmArchiveNotif = e.target.closest('[data-action="confirm-archive-notif"]');
      if (confirmArchiveNotif) { closeAllModals(); showToast("Notification archived"); return; }
      const confirmResend = e.target.closest('[data-action="confirm-resend"]');
      if (confirmResend) { closeAllModals(); showToast("Notification resent — queued for delivery"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("delivery"); return; }
      const confirmSendAnnouncement = e.target.closest('[data-action="confirm-send-announcement"]');
      if (confirmSendAnnouncement) { closeAllModals(); showToast("Announcement sent to all recipients"); return; }
      const markRead = e.target.closest('[data-action="mark-read"]');
      if (markRead) { showToast("Marked as read"); return; }
      const exportPdf = e.target.closest('[data-action="export-pdf"]');
      if (exportPdf) { showToast("PDF export started — download will begin shortly"); return; }
      const exportExcel = e.target.closest('[data-action="export-excel"]');
      if (exportExcel) { showToast("Excel export started"); return; }
      const exportCsv = e.target.closest('[data-action="export-csv"]');
      if (exportCsv) { showToast("CSV export started"); return; }
      const printReport = e.target.closest('[data-action="print-report"]');
      if (printReport) { showToast("Opening print preview…"); return; }
      const confirmScheduleReport = e.target.closest('[data-action="confirm-schedule-report"]');
      if (confirmScheduleReport) { closeAllModals(); showToast("Report scheduled successfully"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("scheduled"); return; }
      const confirmShareReport = e.target.closest('[data-action="confirm-share-report"]');
      if (confirmShareReport) { closeAllModals(); showToast("Report shared with recipients"); return; }
      const confirmActivateWorkflow = e.target.closest('[data-action="confirm-activate-workflow"]');
      if (confirmActivateWorkflow) { closeAllModals(); showToast("Workflow activated"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("details"); return; }
      const confirmTestWorkflow = e.target.closest('[data-action="confirm-test-workflow"]');
      if (confirmTestWorkflow) { closeAllModals(); showToast("Test run started — check execution log"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("testing"); return; }
      const confirmPauseWorkflow = e.target.closest('[data-action="confirm-pause-workflow"]');
      if (confirmPauseWorkflow) { closeAllModals(); showToast("Workflow paused"); return; }
      const validateWorkflow = e.target.closest('[data-action="validate-workflow"]');
      if (validateWorkflow) { showToast("Workflow validation passed — no errors"); return; }
      const undoAction = e.target.closest('[data-action="undo"]');
      if (undoAction) { showToast("Undo"); return; }
      const redoAction = e.target.closest('[data-action="redo"]');
      if (redoAction) { showToast("Redo"); return; }
      const confirmInviteUser = e.target.closest('[data-action="confirm-invite-user"]');
      if (confirmInviteUser) { closeAllModals(); showToast("Invitation sent successfully"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("directory"); return; }
      const confirmDeactivateUser = e.target.closest('[data-action="confirm-deactivate-user"]');
      if (confirmDeactivateUser) { closeAllModals(); showToast("User deactivated"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("account-status"); return; }
      const confirmBulkImport = e.target.closest('[data-action="confirm-bulk-import"]');
      if (confirmBulkImport) { closeAllModals(); showToast("Import started — 24 users queued for processing"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("directory"); return; }
      const confirmCloneRole = e.target.closest('[data-action="confirm-clone-role"]');
      if (confirmCloneRole) { closeAllModals(); showToast("Role cloned successfully"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("details"); return; }
      const confirmAccessRequest = e.target.closest('[data-action="confirm-access-request"]');
      if (confirmAccessRequest) { closeAllModals(); showToast("Access request approved"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("access-requests"); return; }
      const confirmBulkPermission = e.target.closest('[data-action="confirm-bulk-permission"]');
      if (confirmBulkPermission) { closeAllModals(); showToast("Permissions updated for selected roles"); return; }
      const validatePermissions = e.target.closest('[data-action="validate-permissions"]');
      if (validatePermissions) { showToast("Permission validation passed — no conflicts"); return; }
      const confirmRestoreRecord = e.target.closest('[data-action="confirm-restore-record"]');
      if (confirmRestoreRecord) { closeAllModals(); showToast("Record restored successfully"); if (typeof WF_SPA !== "undefined") WF_SPA.navigate("deleted-records"); return; }
      const confirmExportAudit = e.target.closest('[data-action="confirm-export-audit"]');
      if (confirmExportAudit) { closeAllModals(); showToast("Audit export started — download will begin shortly"); return; }
      const confirmSaveSettings = e.target.closest('[data-action="confirm-save-settings"]');
      if (confirmSaveSettings) { closeAllModals(); showToast("Settings saved successfully"); return; }
      const confirmResetSettings = e.target.closest('[data-action="confirm-reset-settings"]');
      if (confirmResetSettings) { closeAllModals(); showToast("Settings reset to defaults"); return; }
      const testConnection = e.target.closest('[data-action="test-connection"]');
      if (testConnection) { showToast("Connection test successful"); return; }
      const cancelForm = e.target.closest('[data-action="cancel-form"]');
      if (cancelForm) {
        if (confirm("Discard unsaved changes?") && typeof WF_SPA !== "undefined") WF_SPA.navigate("list");
        return;
      }
    });

    document.querySelectorAll(".wf-modal-overlay").forEach((ov) => {
      ov.addEventListener("click", (e) => {
        if (e.target === ov) ov.classList.remove("is-open");
      });
    });

    if (!window.__wfResizeBound) {
      window.__wfResizeBound = true;
      let resizeTimer;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => enhanceMobileExperience(), 150);
      });
    }
  }

  function bindContentEvents() {
    const advToggle = document.getElementById("wf-adv-filter-toggle");
    const advPanel = document.getElementById("wf-advanced-filters");
    if (advToggle && advPanel && !advToggle.dataset.bound) {
      advToggle.dataset.bound = "1";
      advToggle.addEventListener("click", () => advPanel.classList.toggle("is-open"));
    }

    const advApply = document.getElementById("wf-adv-filter-apply");
    if (advApply && !advApply.dataset.bound) {
      advApply.dataset.bound = "1";
      advApply.addEventListener("click", () => {
        showToast("Filters applied");
        advPanel?.classList.remove("is-open");
      });
    }

    const advClear = document.getElementById("wf-adv-filter-clear");
    if (advClear && !advClear.dataset.bound) {
      advClear.dataset.bound = "1";
      advClear.addEventListener("click", () => {
        advPanel?.querySelectorAll("select").forEach((s) => (s.selectedIndex = 0));
        showToast("Filters cleared");
      });
    }

    const brandForm = document.getElementById("wf-brand-form");
    if (brandForm && !brandForm.dataset.bound) {
      brandForm.dataset.bound = "1";
      brandForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const mode = brandForm.getAttribute("data-mode");
        showToast(mode === "edit" ? "Brand updated successfully" : "Brand created successfully");
        if (typeof WF_SPA !== "undefined") WF_SPA.navigate(mode === "edit" ? "details" : "list");
      });
    }

    const modelForm = document.getElementById("wf-model-form");
    if (modelForm && !modelForm.dataset.bound) {
      modelForm.dataset.bound = "1";
      modelForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const mode = modelForm.getAttribute("data-mode");
        showToast(mode === "edit" ? "Model updated successfully" : "Model created successfully");
        if (typeof WF_SPA !== "undefined") WF_SPA.navigate(mode === "edit" ? "details" : "list");
      });
    }

    const meetingForm = document.getElementById("wf-meeting-form");
    if (meetingForm && !meetingForm.dataset.bound) {
      meetingForm.dataset.bound = "1";
      meetingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const mode = meetingForm.getAttribute("data-mode");
        showToast(mode === "edit" ? "Meeting updated successfully" : "Meeting scheduled successfully");
        if (typeof WF_SPA !== "undefined") WF_SPA.navigate(mode === "edit" ? "details" : "list");
      });
    }

    const paymentForm = document.getElementById("wf-payment-form");
    if (paymentForm && !paymentForm.dataset.bound) {
      paymentForm.dataset.bound = "1";
      paymentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showToast("Payment recorded — pending verification");
        if (typeof WF_SPA !== "undefined") WF_SPA.navigate("payment-details");
      });
    }

    const invoiceForm = document.getElementById("wf-invoice-form");
    if (invoiceForm && !invoiceForm.dataset.bound) {
      invoiceForm.dataset.bound = "1";
      invoiceForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showToast("Invoice generated successfully");
        if (typeof WF_SPA !== "undefined") WF_SPA.navigate("invoice-details");
      });
    }

    const documentForm = document.getElementById("wf-document-form");
    if (documentForm && !documentForm.dataset.bound) {
      documentForm.dataset.bound = "1";
      documentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const mode = documentForm.getAttribute("data-mode");
        showToast(mode === "edit" ? "Document updated" : "Document uploaded — pending verification");
        if (typeof WF_SPA !== "undefined") WF_SPA.navigate(mode === "edit" ? "details" : "details");
      });
    }

    const notificationForm = document.getElementById("wf-notification-form");
    if (notificationForm && !notificationForm.dataset.bound) {
      notificationForm.dataset.bound = "1";
      notificationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showToast("Notification scheduled successfully");
        if (typeof WF_SPA !== "undefined") WF_SPA.navigate("scheduled");
      });
    }

    const reportForm = document.getElementById("wf-report-form");
    if (reportForm && !reportForm.dataset.bound) {
      reportForm.dataset.bound = "1";
      reportForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showToast("Custom report saved");
        if (typeof WF_SPA !== "undefined") WF_SPA.navigate("reports-dashboard");
      });
    }

    const workflowForm = document.getElementById("wf-workflow-form");
    if (workflowForm && !workflowForm.dataset.bound) {
      workflowForm.dataset.bound = "1";
      workflowForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const mode = workflowForm.getAttribute("data-mode");
        showToast(mode === "edit" ? "Workflow updated successfully" : "Workflow created — open builder to add nodes");
        if (typeof WF_SPA !== "undefined") WF_SPA.navigate(mode === "edit" ? "builder" : "builder");
      });
    }

    const userForm = document.getElementById("wf-user-form");
    if (userForm && !userForm.dataset.bound) {
      userForm.dataset.bound = "1";
      userForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const mode = userForm.getAttribute("data-mode");
        showToast(mode === "edit" ? "Employee updated successfully" : "Employee created successfully");
        if (typeof WF_SPA !== "undefined") WF_SPA.navigate(mode === "edit" ? "profile" : "directory");
      });
    }

    const roleForm = document.getElementById("wf-role-form");
    if (roleForm && !roleForm.dataset.bound) {
      roleForm.dataset.bound = "1";
      roleForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const mode = roleForm.getAttribute("data-mode");
        showToast(mode === "edit" ? "Role updated successfully" : "Role created successfully");
        if (typeof WF_SPA !== "undefined") WF_SPA.navigate(mode === "edit" ? "details" : "permission-matrix");
      });
    }

    const settingsForm = document.getElementById("wf-settings-form");
    if (settingsForm && !settingsForm.dataset.bound) {
      settingsForm.dataset.bound = "1";
      settingsForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showToast("Settings saved successfully");
      });
    }

    const form = document.getElementById("wf-customer-form");
    if (form && !form.dataset.bound) {
      form.dataset.bound = "1";
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const mode = form.getAttribute("data-mode");
        showToast(mode === "edit" ? "Customer updated successfully" : "Customer created successfully");
        if (typeof WF_SPA !== "undefined") {
          WF_SPA.navigate(mode === "edit" ? "details" : "list");
        } else {
          setTimeout(() => { window.location.href = mode === "edit" ? "details.html" : "list.html"; }, 1200);
        }
      });
    }

    document.querySelectorAll(".wf-table__checkbox:not([data-bound])").forEach((cb) => {
      cb.dataset.bound = "1";
      cb.addEventListener("click", () => cb.classList.toggle("wf-badge--dark"));
    });

    document.querySelectorAll(".wf-pagination__page:not([data-bound])").forEach((page) => {
      page.dataset.bound = "1";
      page.addEventListener("click", () => {
        document.querySelectorAll(".wf-pagination__page").forEach((p) => p.classList.remove("wf-pagination__page--active"));
        if (!isNaN(page.textContent)) page.classList.add("wf-pagination__page--active");
        showToast(`Page ${page.textContent} loaded`);
      });
    });

    const uploadZone = document.getElementById("wf-upload-zone");
    if (uploadZone && !uploadZone.dataset.bound) {
      uploadZone.dataset.bound = "1";
      uploadZone.addEventListener("click", () => showToast("File picker opened (wireframe)"));
    }

    const demoLoading = document.getElementById("wf-demo-loading");
    if (demoLoading && !demoLoading.dataset.bound) {
      demoLoading.dataset.bound = "1";
      demoLoading.addEventListener("click", () => {
        const loader = document.getElementById("wf-loading");
        const table = document.getElementById("wf-data-content");
        if (loader && table) {
          table.classList.add("wf-hidden");
          loader.classList.add("is-visible");
          setTimeout(() => {
            loader.classList.remove("is-visible");
            table.classList.remove("wf-hidden");
            showToast("Data refreshed");
          }, 1500);
        } else {
          showToast("Data refreshed");
        }
      });
    }
  }

  function bindEvents() {
    bindShellEvents();
    bindContentEvents();
    bindWorkflowStepper();
    bindRoleSwitcher();
    bindInteractiveCharts();
    enhanceMobileExperience();
  }

  function activateLineChartPoint(chart, index) {
    if (!chart) return;
    const labels = JSON.parse(chart.dataset.chartLabels || "[]");
    const primary = JSON.parse(chart.dataset.chartPrimary || "[]");
    const secondary = JSON.parse(chart.dataset.chartSecondary || "[]");
    const primaryLabel = chart.dataset.primaryLabel || "Leads";
    const secondaryLabel = chart.dataset.secondaryLabel || "Converted";
    const zones = chart.querySelectorAll(".wf-dual-line-chart__zone");
    const zone = zones[index];
    if (!zone) return;

    zones.forEach((z) => z.classList.toggle("is-active", z === zone));

    chart.querySelectorAll(".wf-dual-line-chart__dot").forEach((dot, i) => {
      dot.classList.toggle("is-active", i === index);
    });

    const crosshair = chart.querySelector(".wf-dual-line-chart__crosshair");
    const tooltip = chart.querySelector(".wf-dual-line-chart__tooltip");
    const plot = chart.querySelector(".wf-dual-line-chart__plot");
    if (!crosshair || !tooltip || !plot) return;

    const plotRect = plot.getBoundingClientRect();
    const zoneRect = zone.getBoundingClientRect();
    const centerX = zoneRect.left + zoneRect.width / 2 - plotRect.left;

    crosshair.removeAttribute("hidden");
    crosshair.style.left = `${centerX}px`;

    const title = tooltip.querySelector(".wf-chart-tooltip__title");
    const rowPrimary = tooltip.querySelector(".wf-chart-tooltip__row--primary");
    const rowSecondary = tooltip.querySelector(".wf-chart-tooltip__row--secondary");
    if (title) title.textContent = labels[index] || "";
    if (rowPrimary) rowPrimary.textContent = `${primaryLabel} : ${primary[index] ?? "—"}`;
    if (rowSecondary) rowSecondary.textContent = `${secondaryLabel} : ${secondary[index] ?? "—"}`;

    tooltip.removeAttribute("hidden");
    tooltip.style.left = `${centerX}px`;
    tooltip.style.top = "6px";
  }

  function deactivateLineChart(chart) {
    if (!chart) return;
    chart.querySelectorAll(".wf-dual-line-chart__zone.is-active").forEach((z) => z.classList.remove("is-active"));
    chart.querySelectorAll(".wf-dual-line-chart__dot.is-active").forEach((d) => d.classList.remove("is-active"));
    const crosshair = chart.querySelector(".wf-dual-line-chart__crosshair");
    const tooltip = chart.querySelector(".wf-dual-line-chart__tooltip");
    if (crosshair) {
      crosshair.setAttribute("hidden", "");
      crosshair.style.left = "";
    }
    if (tooltip) {
      tooltip.setAttribute("hidden", "");
      tooltip.style.left = "";
      tooltip.style.top = "";
    }
  }

  function bindInteractiveCharts() {
    if (document.body.dataset.chartsBound) return;
    document.body.dataset.chartsBound = "1";

    document.body.addEventListener("mouseover", (e) => {
      const col = e.target.closest(".wf-vbar-chart__col");
      if (col) {
        const chart = col.closest(".wf-vbar-chart");
        chart?.querySelectorAll(".wf-vbar-chart__col").forEach((c) => c.classList.remove("is-active"));
        col.classList.add("is-active");
      }
    });

    document.body.addEventListener("mouseout", (e) => {
      const col = e.target.closest(".wf-vbar-chart__col");
      if (!col) return;
      const related = e.relatedTarget;
      const chart = col.closest(".wf-vbar-chart");
      if (!related || !col.contains(related)) {
        if (!related || !chart?.contains(related)) {
          chart?.querySelectorAll(".wf-vbar-chart__col").forEach((c) => c.classList.remove("is-active"));
        }
      }
    });

    document.body.addEventListener("mouseover", (e) => {
      const zone = e.target.closest(".wf-dual-line-chart__zone");
      if (zone) {
        activateLineChartPoint(zone.closest(".wf-dual-line-chart"), Number(zone.dataset.index));
      }
    });

    document.body.addEventListener("mouseout", (e) => {
      const zone = e.target.closest(".wf-dual-line-chart__zone");
      if (!zone) return;
      const related = e.relatedTarget;
      const chart = zone.closest(".wf-dual-line-chart");
      if (!related || !zone.contains(related)) {
        if (!related || !chart?.contains(related)) {
          deactivateLineChart(chart);
        }
      }
    });

    document.body.addEventListener("mouseleave", (e) => {
      const plot = e.target.closest(".wf-dual-line-chart__plot-wrap, .wf-dual-line-chart");
      if (!plot) return;
      const related = e.relatedTarget;
      if (!related || !plot.contains(related)) {
        deactivateLineChart(plot.closest(".wf-dual-line-chart"));
      }
    }, true);
  }

  /* ── View-as Role Switcher (RBAC wireframe preview) ──────── */

  const viewRoleState = { role: null };

  function getViewRole(fallback) {
    return viewRoleState.role || fallback || "CEO";
  }

  function setViewRole(role) {
    viewRoleState.role = role;
  }

  function resetViewRole(role) {
    viewRoleState.role = role;
  }

  function rolePermissionSummary(role) {
    const r = role || "";
    if (/super admin/i.test(r)) return "Full system access — all modules, settings, and security controls.";
    if (r === "CEO") return "Executive visibility — all modules, approvals, reports, and team performance.";
    if (/co-founder/i.test(r)) return "Executive access — nearly full permissions except destructive security changes.";
    if (r === "Admin") return "Administrative access — users, roles, configuration, and operational modules.";
    if (/security administrator/i.test(r)) return "Security & audit focus — logs, compliance, access reviews.";
    if (/it administrator/i.test(r)) return "Infrastructure access — integrations, API, database, storage.";
    if (/operations manager/i.test(r)) return "Operations scope — workflows, documents, meetings, franchise models.";
    if (/read only/i.test(r)) return "Read-only — can view settings and reports but cannot save or delete.";
    if (/sales executive/i.test(r)) return "Own records only — assigned leads, customers, and personal tasks.";
    if (r === "Team Lead") return "Team scope — team leads, pipeline, meetings, and team member records.";
    if (/brand owner/i.test(r)) return "Brand-scoped — own brand enquiries, documents, and franchise pipeline.";
    if (/accounts|finance/i.test(r)) return "Finance scope — payments, invoices, GST, collections, refunds.";
    if (r === "HR") return "People operations — users, onboarding, leave, and directory.";
    if (r === "Customer") return "Portal view — own agreements, documents, and payments only.";
    if (/automation administrator/i.test(r)) return "Workflow builder — create, test, and manage automations.";
    return "Role-based permissions filter visible actions and data on this screen.";
  }

  function applyRoleViewState(role) {
    if (!role) return;
    const readOnly = /read only|view only|own (activity|records)/i.test(role);
    document.body.classList.toggle("wf-view-readonly", readOnly);
    document.body.dataset.viewRole = role;
    document.querySelector(".wf-role-context")?.remove();
  }

  function bindWorkflowStepper() {
    if (document.body.dataset.workflowBound) return;
    document.body.dataset.workflowBound = "1";

    document.body.addEventListener("click", (e) => {
      const step = e.target.closest("[data-workflow-step]");
      if (!step) return;
      const label = step.getAttribute("data-workflow-step");
      const target = step.getAttribute("data-workflow-target");
      showToast(`Workflow: ${label}`);
      if (target && typeof WF_SPA !== "undefined" && WF_SPA.navigate) {
        WF_SPA.navigate(target);
      }
    });
  }

  function bindRoleSwitcher() {
    if (document.body.dataset.roleSwitcherBound) return;
    document.body.dataset.roleSwitcherBound = "1";

    function applyRoleChange(role) {
      setViewRole(role);

      document.querySelectorAll("[data-role-select]").forEach((sel) => {
        if (sel.value !== role) sel.value = role;
      });

      applyRoleViewState(role);

      if (typeof WF_SPA !== "undefined" && WF_SPA.getCurrent) {
        const current = WF_SPA.getCurrent();
        if (current) WF_SPA.navigate(current);
      }

      const readOnly = /read only|view only/i.test(role);
      const ownOnly = /own (activity|records)/i.test(role);
      let msg = `Now viewing as ${role}`;
      if (readOnly) msg = "Read-only mode — save and delete actions disabled";
      else if (ownOnly) msg = `Viewing own records only as ${role}`;
      showToast(msg);
    }

    document.body.addEventListener("change", (e) => {
      const roleSelect = e.target.closest("[data-role-select]");
      if (roleSelect) {
        applyRoleChange(roleSelect.value);
        return;
      }

      const dashSelect = e.target.closest("[data-dashboard-role-select]");
      if (dashSelect && typeof WF_SPA !== "undefined") {
        const screenId = dashSelect.value;
        if (screenId) WF_SPA.navigate(screenId);
      }
    });
  }

  /* ── Mobile-First Enhancements ───────────────────────────── */

  function isMobileViewport() {
    return window.matchMedia("(max-width: 768px)").matches;
  }

  function bottomNavIconSvg(kind) {
    const attrs = 'xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    const icons = {
      home: `<svg ${attrs}><path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5z"/></svg>`,
      live: `<svg ${attrs}><circle cx="12" cy="12" r="2.5"/><path d="M12 4v2M12 18v2M4 12H2M22 12h-2"/></svg>`,
      history: `<svg ${attrs}><circle cx="12" cy="12" r="9"/><path d="M12 8v4l2.5 2"/></svg>`,
      list: `<svg ${attrs}><path d="M9 6h12M9 12h12M9 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/></svg>`,
      reports: `<svg ${attrs}><path d="M6 20V10M12 20V4M18 20v-6"/></svg>`,
      calendar: `<svg ${attrs}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>`,
      menu: `<svg ${attrs}><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
      modules: `<svg ${attrs}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
      back: `<svg ${attrs}><path d="M15 6l-6 6 6 6"/></svg>`
    };
    return icons[kind] || icons.list;
  }

  function bottomNavKindForScreen(screen) {
    const id = screen.id;
    const label = (screen.label || "").toLowerCase();
    if (/^(dashboard|executive|ceo)$/.test(id) || /dashboard|overview/.test(label)) return "home";
    if (/live/.test(id) || /\blive\b/.test(label)) return "live";
    if (/history|timeline/.test(id) || /\bhistory\b/.test(label)) return "history";
    if (/calendar/.test(id)) return "calendar";
    if (/analytics|reports|kpi/.test(id) && !/employee/.test(id)) return "reports";
    if (/list|directory|library|inbox|explorer/.test(id)) return "list";
    if (/schedule|create|invite/.test(id)) return "calendar";
    return "list";
  }

  function mobileNavShortLabel(screen, usedLabels) {
    const presets = {
      dashboard: "Home",
      executive: "Overview",
      ceo: "CEO",
      "live-calls": "Live",
      history: "History",
      calendar: "Calendar",
      analytics: "Reports",
      "reports-dashboard": "Reports",
      list: "List",
      directory: "Team",
      inbox: "Inbox",
      settings: "Settings",
      recordings: "Recordings",
      performance: "Stats"
    };
    let label = presets[screen.id];
    if (!label) {
      const skip = new Set(["call", "management", "module", "modules", "center", "system", "intelligence"]);
      const words = screen.label.replace(/—/g, " ").split(/\s+/).filter(Boolean);
      const word = words.find((w) => !skip.has(w.toLowerCase()) && w.length > 2) || words[words.length - 1] || "Screen";
      label = word.length > 11 ? `${word.slice(0, 10)}…` : word;
    }
    let final = label;
    let n = 2;
    while (usedLabels.has(final.toLowerCase())) {
      final = `${label} ${n}`;
      n += 1;
    }
    usedLabels.add(final.toLowerCase());
    return final;
  }

  function pickBottomNavScreens(screens, activeId) {
    if (!screens || !screens.length) return [];
    const byId = (id) => screens.find((s) => s.id === id);
    const find = (re) => screens.find((s) => re.test(s.id) || re.test(s.label));
    const picked = [];
    const add = (s) => { if (s && !picked.some((p) => p.id === s.id)) picked.push(s); };

    add(byId("dashboard") || byId("executive") || screens[0]);
    add(byId("live-calls") || find(/\blive\b/i));
    add(byId("history") || find(/\bhistory\b/i) || byId("calendar") || find(/\blist|directory|library|inbox\b/i));
    if (picked.length < 3) add(find(/\banalytics|reports\b/i));
    for (const s of screens) {
      if (picked.length >= 3) break;
      add(s);
    }

    const active = activeId ? byId(activeId) : null;
    if (active && !picked.some((p) => p.id === active.id)) picked[2] = active;

    return picked.slice(0, 3);
  }

  function mobileBottomNav(screens, activeId) {
    const primary = pickBottomNavScreens(screens, activeId);
    const usedLabels = new Set();
    const items = primary.map((s) => {
      const active = s.id === activeId ? " wf-bottom-nav__item--active" : "";
      const kind = bottomNavKindForScreen(s);
      const label = mobileNavShortLabel(s, usedLabels);
      return `<a href="${screenHref(s.id)}" data-screen="${s.id}" class="wf-bottom-nav__item${active}" aria-label="${esc(s.label)}" aria-current="${s.id === activeId ? "page" : "false"}">
        <span class="wf-bottom-nav__icon wf-bottom-nav__icon--${kind}" aria-hidden="true">${bottomNavIconSvg(kind)}</span>
        <span class="wf-bottom-nav__label">${esc(label)}</span>
      </a>`;
    }).join("");
    return `<nav class="wf-bottom-nav" id="wf-bottom-nav" aria-label="Quick navigation">
      ${items}
      <button type="button" class="wf-bottom-nav__item" id="wf-bottom-nav-menu" aria-label="All screens">
        <span class="wf-bottom-nav__icon wf-bottom-nav__icon--menu" aria-hidden="true">${bottomNavIconSvg("menu")}</span>
        <span class="wf-bottom-nav__label">Screens</span>
      </button>
    </nav>`;
  }

  function refreshMobileBottomNav(screens, activeId) {
    const existing = document.getElementById("wf-bottom-nav");
    if (!existing || !screens) return;
    const wrap = document.createElement("div");
    wrap.innerHTML = mobileBottomNav(screens, activeId);
    const next = wrap.firstElementChild;
    if (next) {
      existing.replaceWith(next);
      bindBottomNavMenu();
    }
  }

  function updateBottomNavActive(activeId, screens) {
    const shortcutIds = screens
      ? pickBottomNavScreens(screens, activeId).map((s) => s.id)
      : [];
    const onShortcut = shortcutIds.includes(activeId);

    document.querySelectorAll(".wf-bottom-nav__item[data-screen]").forEach((el) => {
      const on = el.getAttribute("data-screen") === activeId;
      el.classList.toggle("wf-bottom-nav__item--active", on);
      el.setAttribute("aria-current", on ? "page" : "false");
    });

    const menuBtn = document.getElementById("wf-bottom-nav-menu");
    if (menuBtn) {
      const onMenu = Boolean(activeId && !onShortcut);
      menuBtn.classList.toggle("wf-bottom-nav__item--active", onMenu);
      menuBtn.setAttribute("aria-current", onMenu ? "page" : "false");
    }
  }

  function cellHtml(cell) {
    return cell ? cell.innerHTML.trim() : "";
  }

  function isSkippableHeader(text) {
    return !text || text === "☐" || text.length < 2;
  }

  function buildMobileCardsFromTable(wrap) {
    const table = wrap.querySelector("table");
    if (!table || wrap.querySelector(".wf-mobile-cards")) return;

    const headers = [...table.querySelectorAll("thead th")].map((th) => th.textContent.trim()).filter((h) => !isSkippableHeader(h));
    const rows = [...table.querySelectorAll("tbody tr")];
    if (!rows.length) return;

    const cards = rows.map((row, idx) => {
      const cells = [...row.querySelectorAll("td")];
      const offset = cells.length > headers.length ? cells.length - headers.length : 0;
      const dataCells = cells.slice(offset);

      let titleIdx = dataCells.findIndex((c) => c.querySelector("a, .wf-table__link"));
      if (titleIdx < 0) titleIdx = dataCells.findIndex((c) => cellHtml(c) && !c.querySelector(".wf-table__checkbox"));
      if (titleIdx < 0) titleIdx = 0;

      const titleCell = dataCells[titleIdx];
      const titleHtml = titleCell ? cellHtml(titleCell) : `Record ${idx + 1}`;
      const badges = dataCells.map((c) => c.querySelector(".wf-badge")).filter(Boolean).map((b) => b.outerHTML).join("");

      const detailRows = dataCells.map((cell, i) => {
        const headerIdx = i + offset;
        const label = headers[headerIdx] || headers[i] || `Field ${i + 1}`;
        if (i === titleIdx) return "";
        const val = cellHtml(cell);
        if (!val || val === "—") return "";
        return `<div class="wf-mobile-card__row"><span class="wf-mobile-card__label">${esc(label)}</span><span class="wf-mobile-card__value">${val}</span></div>`;
      }).join("");

      const actionsCell = dataCells.find((c) => c.querySelector(".wf-table__actions, .wf-btn"));
      const actionsHtml = actionsCell ? `<div class="wf-mobile-card__actions">${actionsCell.innerHTML}</div>` : "";

      return `<article class="wf-mobile-card" data-mobile-card="${idx}">
        <div class="wf-mobile-card__header" role="button" tabindex="0" aria-expanded="false">
          <div>
            <div class="wf-mobile-card__title">${titleHtml}</div>
            ${badges ? `<div class="wf-mobile-card__meta">${badges}</div>` : ""}
          </div>
          <span class="wf-mobile-card__chevron" aria-hidden="true">▾</span>
        </div>
        <div class="wf-mobile-card__body">${detailRows}${actionsHtml}</div>
      </article>`;
    }).join("");

    wrap.insertAdjacentHTML("beforeend", `<div class="wf-mobile-cards" role="list">${cards}</div>`);
  }

  function enhanceMobileTables(scope = document) {
    scope.querySelectorAll(".wf-table-wrap").forEach((wrap) => buildMobileCardsFromTable(wrap));
  }

  function bindMobileCardToggles(scope = document) {
    scope.querySelectorAll(".wf-mobile-card__header").forEach((header) => {
      if (header.dataset.bound) return;
      header.dataset.bound = "1";
      const toggle = () => {
        const card = header.closest(".wf-mobile-card");
        const open = card.classList.toggle("is-expanded");
        header.setAttribute("aria-expanded", open ? "true" : "false");
      };
      header.addEventListener("click", toggle);
      header.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      });
    });
  }

  function enhanceMobileForms(scope = document) {
    if (!isMobileViewport()) return;
    scope.querySelectorAll(".wf-form").forEach((form) => {
      if (form.classList.contains("wf-form--has-sticky-footer") || form.closest(".wf-modal")) return;
      const footer = form.querySelector(".wf-form__footer, .wf-form__actions");
      if (!footer || form.querySelector(".wf-form__sticky-footer")) return;
      const sticky = document.createElement("div");
      sticky.className = "wf-form__sticky-footer";
      sticky.innerHTML = footer.innerHTML;
      form.appendChild(sticky);
      footer.classList.add("wf-hidden");
      form.classList.add("wf-form--has-sticky-footer");
    });
  }

  function enhanceMobileFilters() {
    const panel = document.getElementById("wf-advanced-filters");
    if (!panel || panel.dataset.mobileSheet) return;
    panel.dataset.mobileSheet = "1";

    let backdrop = document.getElementById("wf-filter-sheet-backdrop");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.id = "wf-filter-sheet-backdrop";
      backdrop.className = "wf-filter-sheet-backdrop";
      backdrop.setAttribute("aria-hidden", "true");
      document.body.appendChild(backdrop);
    }

    const closeSheet = () => {
      panel.classList.remove("is-open");
      backdrop.classList.remove("is-visible");
      document.body.style.overflow = "";
    };

    const openSheet = () => {
      panel.classList.add("is-open");
      backdrop.classList.add("is-visible");
      document.body.style.overflow = "hidden";
    };

    backdrop.addEventListener("click", closeSheet);

    if (!document.getElementById("wf-filter-fab")) {
      const fab = document.createElement("button");
      fab.id = "wf-filter-fab";
      fab.className = "wf-filter-fab";
      fab.type = "button";
      fab.setAttribute("aria-label", "Open filters");
      fab.addEventListener("click", openSheet);
      document.body.appendChild(fab);
    }

    const toggle = document.getElementById("wf-adv-filter-toggle");
    if (toggle && !toggle.dataset.mobileSheetBound) {
      toggle.dataset.mobileSheetBound = "1";
      toggle.addEventListener("click", (e) => {
        if (!isMobileViewport()) return;
        e.preventDefault();
        e.stopPropagation();
        if (panel.classList.contains("is-open")) closeSheet();
        else openSheet();
      }, true);
    }

    panel.querySelector("#wf-adv-filter-apply")?.addEventListener("click", () => {
      if (isMobileViewport()) closeSheet();
    });
    panel.querySelector("#wf-adv-filter-clear")?.addEventListener("click", () => {
      if (isMobileViewport()) closeSheet();
    });
  }

  function enhanceCollapsibleWidgets(scope = document) {
    if (!isMobileViewport()) return;
    scope.querySelectorAll(".wf-card").forEach((card, i) => {
      if (card.closest(".wf-mobile-card") || card.classList.contains("wf-collapsible")) return;
      if (i > 2 && card.querySelector(".wf-card__header")) {
        card.classList.add("wf-collapsible");
        const header = card.querySelector(".wf-card__header");
        if (header && !header.dataset.collapsibleBound) {
          header.dataset.collapsibleBound = "1";
          header.addEventListener("click", () => card.classList.toggle("is-expanded"));
        }
      }
    });
  }

  function enhanceSwipeableCharts() {
    /* Desktop grids only — mobile/tablet use responsive CSS columns (no horizontal scroll). */
  }

  function enhanceMobileReports(scope = document) {
    if (!isMobileViewport()) return;
    scope.querySelectorAll(".wf-report-table").forEach((table) => {
      const wrap = table.closest(".wf-table-wrap");
      if (wrap && !wrap.dataset.mobileReport) {
        wrap.dataset.mobileReport = "1";
      }
    });
    scope.querySelectorAll(".wf-comparison-bar, .wf-period-toggle").forEach((el) => {
      el.classList.add("wf-mobile-wrap");
    });
  }

  function enhanceCalendarAgenda(scope = document) {
    const agenda = scope.querySelector(".wf-calendar-agenda");
    if (agenda && isMobileViewport()) agenda.style.display = "block";
  }

  function bindBottomNavMenu() {
    const menuBtn = document.getElementById("wf-bottom-nav-menu");
    if (!menuBtn || menuBtn.dataset.bound) return;
    menuBtn.dataset.bound = "1";
    menuBtn.addEventListener("click", () => {
      document.getElementById("wf-sidebar")?.classList.add("is-open");
      document.getElementById("wf-sidebar-overlay")?.classList.add("is-visible");
    });
  }

  function bindPullToRefresh() {
    const container = document.querySelector(".wf-content");
    if (!container || container.dataset.ptrBound || !isMobileViewport()) return;
    container.dataset.ptrBound = "1";
    let startY = 0;
    let indicator = document.getElementById("wf-ptr-indicator");
    if (!indicator) {
      indicator = document.createElement("div");
      indicator.id = "wf-ptr-indicator";
      indicator.className = "wf-ptr-indicator";
      indicator.textContent = "Pull to refresh";
      container.prepend(indicator);
    }
    container.addEventListener("touchstart", (e) => { startY = e.touches[0].clientY; }, { passive: true });
    container.addEventListener("touchmove", (e) => {
      if (container.scrollTop > 0) return;
      const pull = e.touches[0].clientY - startY;
      if (pull > 60) indicator.classList.add("is-visible");
    }, { passive: true });
    container.addEventListener("touchend", () => {
      if (indicator.classList.contains("is-visible")) {
        showToast("Refreshing…");
        setTimeout(() => showToast("Data refreshed"), 800);
      }
      indicator.classList.remove("is-visible");
    });
  }

  function enhanceMobileModals() {
    document.querySelectorAll(".wf-modal-overlay .wf-modal").forEach((modal) => {
      if (modal.querySelector(".wf-form__grid, .wf-perm-matrix-wrap")) {
        modal.classList.add("wf-modal--fullscreen-mobile");
      }
    });
  }

  function bindPhoneInputs(scope = document) {
    scope.querySelectorAll("[data-phone-input]").forEach((input) => {
      if (input.dataset.phoneBound) return;
      input.dataset.phoneBound = "1";
      input.addEventListener("blur", () => {
        const v = input.value.trim();
        if (v) input.value = formatPhone(v);
      });
    });
  }

  function enhanceMobileExperience() {
    enhanceMobileTables();
    bindMobileCardToggles();
    enhanceMobileForms();
    enhanceMobileFilters();
    enhanceCollapsibleWidgets();
    enhanceSwipeableCharts();
    enhanceMobileReports();
    enhanceCalendarAgenda();
    bindBottomNavMenu();
    bindPullToRefresh();
    bindPhoneInputs();
    if (isMobileViewport()) enhanceMobileModals();
    if (typeof WF_SPA !== "undefined" && typeof WF_SPA.getCurrent === "function") {
      const current = WF_SPA.getCurrent();
      const modConfig = typeof WF_SPA.getModuleConfig === "function" ? WF_SPA.getModuleConfig() : null;
      if (modConfig && typeof WF_SPA.syncNavChrome === "function") {
        WF_SPA.syncNavChrome();
      } else {
        updateBottomNavActive(current, modConfig ? modConfig.screens : null);
      }
    }
    applyRoleViewState(getViewRole());
  }

  function closeAllModals() {
    document.querySelectorAll(".wf-modal-overlay").forEach((m) => m.classList.remove("is-open"));
  }

  function showToast(msg) {
    const toast = document.getElementById("wf-toast");
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("is-visible");
    setTimeout(() => toast.classList.remove("is-visible"), 3000);
  }

  function brandTable(brands, options = {}) {
    const { selectable = true, showActions = true } = options;
    const rows = brands.map((b) => `
      <tr data-brand-id="${b.id}">
        ${selectable ? `<td><span class="wf-table__checkbox"></span></td>` : ""}
        <td><div class="wf-brand-logo" style="width:32px;height:32px"></div></td>
        <td><a href="#details" data-screen="details" class="wf-table__link">${esc(b.id)}</a></td>
        <td><a href="#details" data-screen="details" class="wf-table__link">${esc(b.name)}</a></td>
        <td>${esc(b.industry)}</td>
        <td>${esc(b.category)}</td>
        <td>${esc(b.investmentRange)}</td>
        <td><span class="wf-badge">${esc(b.status)}</span></td>
        <td>${b.franchisees}</td>
        <td>${b.openCities}</td>
        <td>${esc(b.manager)}</td>
        ${showActions ? `<td><div class="wf-table__actions">
          <button data-screen="details" class="wf-btn wf-btn--sm">View</button>
          <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
        </div></td>` : ""}
      </tr>
    `).join("");

    return `<div class="wf-table-wrap">
      <table class="wf-table">
        <thead>
          <tr>
            ${selectable ? "<th><span class='wf-table__checkbox'></span></th>" : ""}
            <th>Logo</th>
            <th>Brand ID</th>
            <th>Brand Name</th>
            <th>Industry</th>
            <th>Category</th>
            <th>Investment</th>
            <th>Status</th>
            <th>Franchisees</th>
            <th>Cities</th>
            <th>Manager</th>
            ${showActions ? "<th>Actions</th>" : ""}
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      ${pagination(brands.length > 6 ? 42 : brands.length)}
    </div>`;
  }

  function brandProfileCard(brand) {
    const b = brand || BRAND_DATA.brands[0];
    return `<div class="wf-card">
      <div class="wf-card__body" style="text-align:center">
        <div class="wf-brand-logo wf-brand-logo--lg"></div>
        <div style="font-size:16px;font-weight:600">${esc(b.name)}</div>
        <div style="font-size:12px;color:var(--wf-text-muted)">${esc(b.id)}</div>
        <div style="margin-top:8px"><span class="wf-badge wf-badge--dark">${esc(b.status)}</span></div>
      </div>
      <div class="wf-card__body" style="padding-top:0">
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Industry</span><span class="wf-detail-info__value">${esc(b.industry)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Category</span><span class="wf-detail-info__value">${esc(b.category)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Investment</span><span class="wf-detail-info__value">${esc(b.investmentRange)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Franchise Fee</span><span class="wf-detail-info__value">${esc(b.franchiseFee)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Franchisees</span><span class="wf-detail-info__value">${b.franchisees}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Open Cities</span><span class="wf-detail-info__value">${b.openCities}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Manager</span><span class="wf-detail-info__value">${esc(b.manager)}</span></div>
      </div>
      <div class="wf-card__footer">
        <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
        <button data-screen="profile" class="wf-btn wf-btn--sm wf-btn--primary">Full Profile</button>
      </div>
    </div>`;
  }

  function brandForm(brand, mode = "create") {
    const b = brand || {};
    const isEdit = mode === "edit";
    const opt = (arr, selected) => arr.map((v) =>
      `<option${v === selected ? " selected" : ""}>${esc(v)}</option>`
    ).join("");

    return `<form class="wf-form" id="wf-brand-form" data-mode="${mode}">
      <div class="wf-form__section">
        <div class="wf-form__section-title">Brand Identity</div>
        <div class="wf-form__grid">
          <div class="wf-form__group">
            <label class="wf-form__label">Brand Logo</label>
            <div class="wf-upload" style="padding:16px"><div class="wf-brand-logo" style="margin:0 auto"></div><div class="wf-form__hint" style="margin-top:8px;text-align:center">Upload logo</div></div>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label wf-form__label--required">Brand Name</label>
            <input class="wf-form__input" value="${esc(b.name || "")}" required>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Industry</label>
            <select class="wf-form__select">${opt(BRAND_DATA.industries, b.industry)}</select>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Category</label>
            <select class="wf-form__select">${opt(BRAND_DATA.categories, b.category)}</select>
          </div>
          <div class="wf-form__group wf-form__group--full">
            <label class="wf-form__label">Description</label>
            <textarea class="wf-form__textarea">${esc(b.description || "")}</textarea>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Website</label>
            <input class="wf-form__input" value="${esc(b.website || "")}" placeholder="https://">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Established Year</label>
            <input class="wf-form__input" value="${esc(b.established || "")}">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Founder</label>
            <input class="wf-form__input" value="${esc(b.founder || "")}">
          </div>
        </div>
      </div>
      <div class="wf-form__section">
        <div class="wf-form__section-title">Contact & Compliance</div>
        <div class="wf-form__grid">
          <div class="wf-form__group">
            <label class="wf-form__label">Support Email</label>
            <input class="wf-form__input" type="email" value="${esc(b.supportEmail || "")}">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Support Phone</label>
            <input class="wf-form__input" type="tel" data-phone-input value="${esc(formatPhone(b.supportPhone || ""))}" placeholder="${PHONE_FORMAT}">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">GST Number</label>
            <input class="wf-form__input" value="${esc(b.gst || "")}">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">PAN</label>
            <input class="wf-form__input" value="${esc(b.pan || "")}">
          </div>
          <div class="wf-form__group wf-form__group--full">
            <label class="wf-form__label">Head Office Address</label>
            <input class="wf-form__input" value="${esc(b.address || "")}">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">City</label>
            <select class="wf-form__select">${opt(BRAND_DATA.cities, b.city)}</select>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">State</label>
            <select class="wf-form__select">${opt(BRAND_DATA.states, b.state)}</select>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">PIN Code</label>
            <input class="wf-form__input" value="${esc(b.pin || "")}">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Country</label>
            <input class="wf-form__input" value="${esc(b.country || "India")}">
          </div>
        </div>
      </div>
      <div class="wf-form__section">
        <div class="wf-form__section-title">Financial & Franchise Terms</div>
        <div class="wf-form__grid wf-form__grid--3">
          <div class="wf-form__group">
            <label class="wf-form__label">Investment Range</label>
            <input class="wf-form__input" value="${esc(b.investmentRange || "")}">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Franchise Fee</label>
            <input class="wf-form__input" value="${esc(b.franchiseFee || "")}">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Royalty</label>
            <input class="wf-form__input" value="${esc(b.royalty || "")}">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Marketing Fee</label>
            <input class="wf-form__input" value="${esc(b.marketingFee || "")}">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Area Required</label>
            <input class="wf-form__input" value="${esc(b.areaRequired || "")}">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">ROI</label>
            <input class="wf-form__input" value="${esc(b.roi || "")}">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Break Even</label>
            <input class="wf-form__input" value="${esc(b.breakEven || "")}">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Agreement Duration</label>
            <input class="wf-form__input" value="${esc(b.agreementDuration || "")}">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Brand Status</label>
            <select class="wf-form__select">${opt(BRAND_DATA.statuses, b.status)}</select>
          </div>
        </div>
      </div>
      <div class="wf-form__section">
        <div class="wf-form__section-title">Operations & Requirements</div>
        <div class="wf-form__grid">
          <div class="wf-form__group">
            <label class="wf-form__label">Training Available</label>
            <select class="wf-form__select"><option${b.training ? " selected" : ""}>Yes</option><option>No</option></select>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Support Included</label>
            <select class="wf-form__select"><option${b.supportIncluded ? " selected" : ""}>Yes</option><option>No</option></select>
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Required Staff</label>
            <input class="wf-form__input" value="${esc(b.requiredStaff || "")}">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">Inventory Requirement</label>
            <input class="wf-form__input" value="${esc(b.inventory || "")}">
          </div>
          <div class="wf-form__group">
            <label class="wf-form__label">License Requirement</label>
            <input class="wf-form__input" value="${esc(b.license || "")}">
          </div>
          <div class="wf-form__group wf-form__group--full">
            <label class="wf-form__label">Expansion Cities</label>
            <input class="wf-form__input" value="${esc((b.expansionCities || []).join(", "))}" placeholder="Comma-separated cities">
          </div>
        </div>
      </div>
      <div class="wf-form__section">
        <div class="wf-form__section-title">Documents</div>
        <div class="wf-upload" id="wf-upload-zone">
          <div class="wf-upload__icon"></div>
          <div class="wf-upload__text">Drag & drop brand documents or <strong>click to browse</strong></div>
        </div>
      </div>
      <div class="wf-form__section">
        <div class="wf-form__section-title">Internal Notes</div>
        <textarea class="wf-form__textarea" placeholder="Internal notes…">${esc(b.notes || "")}</textarea>
      </div>
      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-action="cancel-form">Cancel</button>
        ${isEdit ? `<button type="button" class="wf-btn wf-btn--danger" data-modal="confirm-delete">Delete Brand</button>` : ""}
        <button type="submit" class="wf-btn wf-btn--primary">${isEdit ? "Save Changes" : "Create Brand"}</button>
      </div>
    </form>`;
  }

  function brandModals() {
    return modals().replace(/Customers/g, "Brands").replace(/Customer/g, "Brand").replace(/Rahul Sharma \(CUS-2024-001\)/, "Odette (BRD-001)");
  }

  function workflowStepper(currentStatus, steps, options = {}) {
    const workflow = steps || ((typeof MODEL_DATA !== "undefined" && MODEL_DATA.workflow) ? MODEL_DATA.workflow : ["Draft", "Submitted", "Under Review", "Approved", "Published", "Archived"]);
    const idx = workflow.indexOf(currentStatus);
    const targetScreen = options.targetScreen || "";
    const isPipeline = options.pipeline || workflow.length > 6;

    if (isPipeline) {
      const nodes = workflow.map((step, i) => {
        const done = i < idx;
        const active = i === idx;
        const target = targetScreen && (active || done) ? ` data-workflow-target="${targetScreen}"` : "";
        const line = i < workflow.length - 1
          ? `<div class="wf-workflow__line${done ? " wf-workflow__line--done" : ""}" aria-hidden="true"></div>`
          : "";
        return `<div class="wf-workflow__node">
          <button type="button" class="wf-workflow__step wf-workflow__step--pipeline" data-workflow-step="${esc(step)}"${target} aria-current="${active ? "step" : "false"}" title="${esc(step)}">
            <span class="wf-workflow__dot${done ? " wf-workflow__dot--done" : ""}${active ? " wf-workflow__dot--active" : ""}" aria-hidden="true">${done ? "" : i + 1}</span>
          </button>
          <span class="wf-workflow__label wf-workflow__label--below${active ? " wf-workflow__label--active" : ""}">${esc(step)}</span>
        </div>${line}`;
      }).join("");
      return `<div class="wf-workflow wf-workflow--pipeline" role="list" aria-label="Workflow progress"><div class="wf-workflow__track">${nodes}</div></div>`;
    }

    return `<div class="wf-workflow" role="list" aria-label="Workflow progress">${workflow.map((step, i) => {
      const done = i < idx;
      const active = i === idx;
      const line = i < workflow.length - 1 ? `<div class="wf-workflow__line${done ? " wf-workflow__line--done" : ""}" aria-hidden="true"></div>` : "";
      const target = targetScreen && (active || done) ? ` data-workflow-target="${targetScreen}"` : "";
      return `<button type="button" class="wf-workflow__step" data-workflow-step="${esc(step)}"${target} aria-current="${active ? "step" : "false"}" title="${esc(step)}">
        <span class="wf-workflow__dot${done ? " wf-workflow__dot--done" : ""}${active ? " wf-workflow__dot--active" : ""}" aria-hidden="true">${done ? "" : i + 1}</span>
        <span class="wf-workflow__label${active ? " wf-workflow__label--active" : ""}">${esc(step)}</span>
      </button>${line}`;
    }).join("")}</div>`;
  }

  function roleSwitcher(activeRole, roles, options = {}) {
    const roleList = roles || (typeof CONFIG_DATA !== "undefined" && CONFIG_DATA.viewRoles) || (typeof AUDIT_DATA !== "undefined" && AUDIT_DATA.viewRoles) || (typeof ROLES_DATA !== "undefined" && ROLES_DATA.systemRoles) || (typeof USER_DATA !== "undefined" && USER_DATA.roles) || (typeof AUTOMATION_DATA !== "undefined" && AUTOMATION_DATA.roles) || (typeof ANALYTICS_DATA !== "undefined" && ANALYTICS_DATA.roles) || (typeof NOTIFICATION_DATA !== "undefined" && NOTIFICATION_DATA.roles) || (typeof DOCUMENT_DATA !== "undefined" && DOCUMENT_DATA.roles) || (typeof ACCOUNTS_DATA !== "undefined" && ACCOUNTS_DATA.roles) || (typeof APPROVAL_DATA !== "undefined" && APPROVAL_DATA.roles) || (typeof MEETING_DATA !== "undefined" && MEETING_DATA.roles) || (typeof MODEL_DATA !== "undefined" && MODEL_DATA.roles) || ["CEO", "Team Lead", "Sales Executive", "Brand Owner", "Admin"];
    const badge = options.badge || "Role-based permissions active";
    return `<div class="wf-role-bar">
      <label class="wf-role-bar__label" for="wf-role-select">View as:</label>
      <select id="wf-role-select" class="wf-role-bar__select wf-form__select" data-role-select aria-label="View as role">
        ${roleList.map((r) => `<option value="${esc(r)}"${r === activeRole ? " selected" : ""}>${esc(r)}</option>`).join("")}
      </select>
      <span class="wf-role-bar__badge wf-approval-badge">${esc(badge)}</span>
    </div>`;
  }

  function modelTable(models, options = {}) {
    const { selectable = true, showActions = true } = options;
    const rows = models.map((m) => `
      <tr>
        ${selectable ? `<td><span class="wf-table__checkbox"></span></td>` : ""}
        <td><a href="#details" data-screen="details" class="wf-table__link">${WF.esc(m.id)}</a></td>
        <td>${WF.esc(m.brand)}</td>
        <td><a href="#details" data-screen="details" class="wf-table__link">${WF.esc(m.name)}</a></td>
        <td><span class="wf-badge wf-badge--outline">${WF.esc(m.type)}</span></td>
        <td>${WF.esc(m.investmentRange)}</td>
        <td>${WF.esc(m.roi)}</td>
        <td><span class="wf-badge${m.status === "Published" ? " wf-badge--dark" : ""}">${WF.esc(m.status)}</span></td>
        <td>${m.leads}</td>
        <td>${m.franchisees}</td>
        ${showActions ? `<td><div class="wf-table__actions">
          <button data-screen="details" class="wf-btn wf-btn--sm">View</button>
          <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
        </div></td>` : ""}
      </tr>
    `).join("");
    return `<div class="wf-table-wrap"><table class="wf-table"><thead><tr>
      ${selectable ? "<th><span class='wf-table__checkbox'></span></th>" : ""}
      <th>Model ID</th><th>Brand</th><th>Model Name</th><th>Type</th><th>Investment</th><th>ROI</th><th>Status</th><th>Leads</th><th>Franchisees</th>
      ${showActions ? "<th>Actions</th>" : ""}
    </tr></thead><tbody>${rows}</tbody></table>${pagination(models.length > 6 ? 48 : models.length)}</div>`;
  }

  function modelProfileCard(model) {
    const m = model || MODEL_DATA.models[0];
    return `<div class="wf-card">
      <div class="wf-card__body" style="text-align:center">
        <div class="wf-brand-logo wf-brand-logo--lg"></div>
        <div style="font-size:16px;font-weight:600">${esc(m.name)}</div>
        <div style="font-size:12px;color:var(--wf-text-muted)">${esc(m.id)} · ${esc(m.brand)}</div>
        <div style="margin-top:8px"><span class="wf-badge wf-badge--dark">${esc(m.status)}</span></div>
      </div>
      <div class="wf-card__body" style="padding-top:0">
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Type</span><span class="wf-detail-info__value">${esc(m.type)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Investment</span><span class="wf-detail-info__value">${esc(m.investmentRange)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Franchise Fee</span><span class="wf-detail-info__value">${esc(m.franchiseFee)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">ROI</span><span class="wf-detail-info__value">${esc(m.roi)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Created By</span><span class="wf-detail-info__value">${esc(m.createdBy)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Approved By</span><span class="wf-detail-info__value">${esc(m.approvedBy || "—")}</span></div>
      </div>
      <div class="wf-card__footer">
        <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
        <button data-screen="workflow" class="wf-btn wf-btn--sm wf-btn--primary">Workflow</button>
      </div>
    </div>`;
  }

  function modelForm(model, mode = "create") {
    const m = model || {};
    const isEdit = mode === "edit";
    const opt = (arr, sel) => arr.map((v) => `<option${v === sel ? " selected" : ""}>${esc(v)}</option>`).join("");
    return `<form class="wf-form" id="wf-model-form" data-mode="${mode}">
      <div class="wf-form__section"><div class="wf-form__section-title">Model Identity</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Model ID</label><input class="wf-form__input" value="${esc(m.id || "Auto-generated")}" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Brand</label><select class="wf-form__select">${opt(MODEL_DATA.brands, m.brand)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Model Name</label><input class="wf-form__input" value="${esc(m.name || "")}" required></div>
          <div class="wf-form__group"><label class="wf-form__label">Model Type</label><select class="wf-form__select">${opt(MODEL_DATA.modelTypes, m.type)}</select></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Description</label><textarea class="wf-form__textarea">${esc(m.description || "")}</textarea></div>
          <div class="wf-form__group"><label class="wf-form__label">Status</label><select class="wf-form__select">${opt(MODEL_DATA.workflow, m.status)}</select></div>
        </div>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Financial Terms</div>
        <div class="wf-form__grid wf-form__grid--3">
          <div class="wf-form__group"><label class="wf-form__label">Investment Range</label><input class="wf-form__input" value="${esc(m.investmentRange || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Franchise Fee</label><input class="wf-form__input" value="${esc(m.franchiseFee || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Security Deposit</label><input class="wf-form__input" value="${esc(m.securityDeposit || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Royalty %</label><input class="wf-form__input" value="${esc(m.royalty || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Marketing Fee</label><input class="wf-form__input" value="${esc(m.marketingFee || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Inventory Cost</label><input class="wf-form__input" value="${esc(m.inventoryCost || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Equipment Cost</label><input class="wf-form__input" value="${esc(m.equipmentCost || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Expected ROI</label><input class="wf-form__input" value="${esc(m.roi || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Break-even Period</label><input class="wf-form__input" value="${esc(m.breakEven || "")}"></div>
        </div>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Operations & Space</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Area Required</label><input class="wf-form__input" value="${esc(m.areaRequired || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Store Size</label><input class="wf-form__input" value="${esc(m.storeSize || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Number of Employees</label><input class="wf-form__input" value="${esc(m.employees || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Training Duration</label><input class="wf-form__input" value="${esc(m.trainingDuration || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Launch Support</label><select class="wf-form__select"><option>Yes</option><option>No</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Marketing Support</label><select class="wf-form__select"><option>Yes</option><option>No</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">License Requirements</label><input class="wf-form__input" value="${esc(m.license || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Agreement Duration</label><input class="wf-form__input" value="${esc(m.agreementDuration || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Renewal Terms</label><input class="wf-form__input" value="${esc(m.renewalTerms || "")}"></div>
        </div>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Territory & Eligibility</div>
        <div class="wf-form__grid">
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Preferred Cities</label><input class="wf-form__input" value="${esc((m.preferredCities || []).join(", "))}"></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Available Territories</label><input class="wf-form__input" value="${esc((m.territories || []).join(", "))}"></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Eligibility Criteria</label><textarea class="wf-form__textarea">${esc(m.eligibility || "")}</textarea></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Required Documents</label><input class="wf-form__input" value="${esc(m.requiredDocs || "")}"></div>
        </div>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Approval & Notes</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Created By</label><select class="wf-form__select">${opt(MODEL_DATA.users, m.createdBy)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Approved By</label><select class="wf-form__select"><option>—</option>${opt(MODEL_DATA.users, m.approvedBy)}</select></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Internal Notes</label><textarea class="wf-form__textarea">${esc(m.notes || "")}</textarea></div>
        </div>
        <div class="wf-upload wf-mt-16" id="wf-upload-zone"><div class="wf-upload__icon"></div><div class="wf-upload__text">Upload supporting documents</div></div>
      </div>
      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-action="cancel-form">Cancel</button>
        ${isEdit ? `<button type="button" class="wf-btn wf-btn--danger" data-modal="confirm-delete">Delete Model</button>` : ""}
        <button type="submit" class="wf-btn wf-btn--primary">${isEdit ? "Save Changes" : "Create Model"}</button>
      </div>
    </form>`;
  }

  function modelModals() {
    return modals()
      .replace(/Customers/g, "Franchise Models")
      .replace(/Customer/g, "Model")
      .replace(/Rahul Sharma \(CUS-2024-001\)/, "Odette Premium (MDL-001)")
      + `
    <div class="wf-modal-overlay" id="modal-publish">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Publish Franchise Model</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><p>Publish <strong>Odette Premium</strong> to make it visible to sales team and franchise portal?</p></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-publish">Publish</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-archive">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Archive Franchise Model</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><p>Archive this model? It will no longer be available for new franchisees.</p></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--danger" data-action="confirm-archive">Archive</button></div>
      </div>
    </div>`;
  }

  function calendarView(activeView) {
    const views = ["Day", "Week", "Month"];
    const agendaItems = (typeof MEETING_DATA !== "undefined" ? MEETING_DATA.meetings : []).slice(0, 5);
    const agendaHtml = agendaItems.length ? agendaItems.map((m) => `
      <div class="wf-list-item" data-screen="details">
        <div class="wf-list-item__content">
          <div class="wf-list-item__title">${esc(m.title || m.subject || "Meeting")}</div>
          <div class="wf-list-item__subtitle">${esc(m.date || m.scheduledDate || "")} · ${esc(m.mode || "")} · ${esc(m.status || "")}</div>
        </div>
        <span class="wf-badge">${esc(m.status || "Scheduled")}</span>
      </div>
    `).join("") : `
      <div class="wf-list-item" data-screen="details">
        <div class="wf-list-item__content">
          <div class="wf-list-item__title">Brand Presentation — Rahul Sharma</div>
          <div class="wf-list-item__subtitle">25 Jun 2024, 10:00 AM · Online</div>
        </div>
      </div>
      <div class="wf-list-item" data-screen="details">
        <div class="wf-list-item__content">
          <div class="wf-list-item__title">Site Visit — Arjun Reddy</div>
          <div class="wf-list-item__subtitle">26 Jun 2024, 2:00 PM · In Person</div>
        </div>
      </div>`;
    return `<div class="wf-calendar-toolbar">
      <div class="wf-view-toggle">${views.map((v) => `<button type="button" class="wf-btn wf-btn--sm${v === activeView ? " wf-btn--primary" : ""}" data-cal-view="${v.toLowerCase()}">${v}</button>`).join("")}</div>
      <div class="wf-flex wf-gap-8" style="margin-left:auto">
        <button class="wf-btn wf-btn--sm" aria-label="Previous">‹ Prev</button>
        <span style="font-size:13px;font-weight:600;padding:6px 12px">June 2024</span>
        <button class="wf-btn wf-btn--sm" aria-label="Next">Next ›</button>
        <button class="wf-btn wf-btn--sm">Today</button>
      </div>
    </div>
    <div class="wf-calendar-grid wf-chart-placeholder" style="height:420px;margin-top:12px">${activeView || "Week"} Calendar View — Meeting blocks by time slot</div>
    <div class="wf-calendar-agenda wf-card wf-mt-16" style="display:none">
      <div class="wf-card__header"><span class="wf-card__title">Agenda</span><span style="font-size:12px;color:var(--wf-text-muted)">Swipe for day navigation</span></div>
      <div class="wf-card__body" style="padding:0">${agendaHtml}</div>
    </div>`;
  }

  function kanbanView(columns) {
    const cols = columns || [
      { title: "Scheduled", items: ["Brand Presentation — Rahul", "Discovery Call — Priya"] },
      { title: "Confirmed", items: ["Site Visit — Arjun", "Investment Discussion — Sneha"] },
      { title: "In Progress", items: ["Agreement Review — Vikram"] },
      { title: "Follow-up", items: ["Legal Discussion — Meera"] }
    ];
    return `<div class="wf-kanban">${cols.map((c) => `
      <div class="wf-kanban__col">
        <div class="wf-kanban__header">${esc(c.title)} <span class="wf-badge">${c.items.length}</span></div>
        ${c.items.map((item) => `<div class="wf-kanban__card" data-screen="details">${esc(item)}</div>`).join("")}
      </div>
    `).join("")}</div>`;
  }

  function viewToggle(active) {
    return `<div class="wf-view-toggle">
      <button type="button" class="wf-btn wf-btn--sm${active === "table" ? " wf-btn--primary" : ""}" data-list-view="table">Table</button>
      <button type="button" class="wf-btn wf-btn--sm${active === "kanban" ? " wf-btn--primary" : ""}" data-list-view="kanban">Kanban</button>
      <button type="button" class="wf-btn wf-btn--sm${active === "timeline" ? " wf-btn--primary" : ""}" data-list-view="timeline">Timeline</button>
    </div>`;
  }

  function meetingTable(meetings, options = {}) {
    const { compact = false, hidePagination = false } = options;
    if (compact) {
      const rows = meetings.map((m) => `
        <tr>
          <td class="wf-table__cell-clip"><a href="#details" data-screen="details" class="wf-table__link">${esc(m.title)}</a></td>
          <td class="wf-table__cell-clip">${esc(m.customer)}</td>
          <td>${esc(m.start)}</td>
          <td><span class="wf-badge">${esc(m.status)}</span></td>
        </tr>
      `).join("");
      return `<div class="wf-table-wrap wf-table-wrap--fit"><table class="wf-table wf-table--fit wf-table--compact"><thead><tr>
        <th>Title</th><th>Customer</th><th>Time</th><th>Status</th>
      </tr></thead><tbody>${rows}</tbody></table></div>`;
    }
    const rows = meetings.map((m) => `
      <tr>
        <td><span class="wf-table__checkbox"></span></td>
        <td><a href="#details" data-screen="details" class="wf-table__link">${esc(m.id)}</a></td>
        <td><a href="#details" data-screen="details" class="wf-table__link">${esc(m.title)}</a></td>
        <td><span class="wf-badge wf-badge--outline">${esc(m.type)}</span></td>
        <td>${esc(m.customer)}</td>
        <td>${esc(m.brand)}</td>
        <td>${esc(m.date)}</td>
        <td>${esc(m.start)} – ${esc(m.end)}</td>
        <td><span class="wf-badge">${esc(m.mode)}</span></td>
        <td><span class="wf-badge${m.status === "Completed" ? " wf-badge--dark" : ""}">${esc(m.status)}</span></td>
        <td>${esc(m.organizer)}</td>
        <td><div class="wf-table__actions">
          <button data-screen="details" class="wf-btn wf-btn--sm">View</button>
          <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
        </div></td>
      </tr>
    `).join("");
    return `<div class="wf-table-wrap wf-table-wrap--scroll"><table class="wf-table wf-table--fit"><thead><tr>
      <th><span class="wf-table__checkbox"></span></th>
      <th>ID</th><th>Title</th><th>Type</th><th>Customer</th><th>Brand</th><th>Date</th><th>Time</th><th>Mode</th><th>Status</th><th>Organizer</th><th>Actions</th>
    </tr></thead><tbody>${rows}</tbody></table>${hidePagination ? "" : pagination(meetings.length > 6 ? 86 : meetings.length)}</div>`;
  }

  function meetingProfileCard(meeting) {
    const m = meeting || (typeof MEETING_DATA !== "undefined" ? MEETING_DATA.meetings[0] : {});
    return `<div class="wf-card">
      <div class="wf-card__body" style="text-align:center">
        <div class="wf-avatar-lg" aria-hidden="true"></div>
        <div style="font-size:15px;font-weight:600">${esc(m.title)}</div>
        <div style="font-size:12px;color:var(--wf-text-muted)">${esc(m.id)}</div>
        <div style="margin-top:8px"><span class="wf-badge wf-badge--dark">${esc(m.status)}</span></div>
      </div>
      <div class="wf-card__body" style="padding-top:0">
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Date</span><span class="wf-detail-info__value">${esc(m.date)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Time</span><span class="wf-detail-info__value">${esc(m.start)} – ${esc(m.end)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Mode</span><span class="wf-detail-info__value">${esc(m.mode)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Customer</span><span class="wf-detail-info__value">${esc(m.customer)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Organizer</span><span class="wf-detail-info__value">${esc(m.organizer)}</span></div>
      </div>
      <div class="wf-card__footer">
        <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
        <button data-screen="online" class="wf-btn wf-btn--sm wf-btn--primary">Join</button>
      </div>
    </div>`;
  }

  function meetingForm(meeting, mode) {
    const m = meeting || {};
    const isEdit = mode === "edit";
    const d = typeof MEETING_DATA !== "undefined" ? MEETING_DATA : { types: [], brands: [], customers: [], users: [], workflow: [], modes: ["Online", "Offline", "Hybrid"] };
    const opt = (arr, sel) => (arr || []).map((v) => `<option${v === sel ? " selected" : ""}>${esc(v)}</option>`).join("");
    return `<form class="wf-form" id="wf-meeting-form" data-mode="${mode || "create"}">
      <div class="wf-form__section"><div class="wf-form__section-title">Meeting Details</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Meeting ID</label><input class="wf-form__input" value="${esc(m.id || "Auto-generated")}" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Meeting Title</label><input class="wf-form__input" value="${esc(m.title || "")}" required></div>
          <div class="wf-form__group"><label class="wf-form__label">Meeting Type</label><select class="wf-form__select">${opt(d.types, m.type)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Priority</label><select class="wf-form__select"><option>High</option><option>Medium</option><option>Low</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Lead</label><input class="wf-form__input" placeholder="Optional lead reference"></div>
          <div class="wf-form__group"><label class="wf-form__label">Customer</label><select class="wf-form__select">${opt(d.customers, m.customer)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Brand</label><select class="wf-form__select">${opt(d.brands, m.brand)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Franchise Model</label><input class="wf-form__input" value="${esc(m.model || "Odette Premium")}"></div>
        </div>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Schedule</div>
        <div class="wf-form__grid wf-form__grid--3">
          <div class="wf-form__group"><label class="wf-form__label">Meeting Date</label><input type="date" class="wf-form__input" value="${esc(m.dateRaw || "2024-06-25")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Start Time</label><input type="time" class="wf-form__input" value="${esc(m.start || "10:00")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">End Time</label><input type="time" class="wf-form__input" value="${esc(m.end || "11:00")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Time Zone</label><select class="wf-form__select"><option>IST (UTC+5:30)</option><option>UTC</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Meeting Mode</label><select class="wf-form__select">${opt(d.modes, m.mode)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Reminder</label><select class="wf-form__select"><option>15 min before</option><option>30 min before</option><option>1 hour before</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Status</label><select class="wf-form__select">${opt(d.workflow, m.status)}</select></div>
        </div>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Location & Links</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Google Meet Link</label><input class="wf-form__input" value="${esc(m.meetLink || "")}" placeholder="https://meet.google.com/..."></div>
          <div class="wf-form__group"><label class="wf-form__label">Zoom Link</label><input class="wf-form__input" value="${esc(m.zoomLink || "")}" placeholder="https://zoom.us/..."></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Meeting Location</label><input class="wf-form__input" value="${esc(m.location || "")}" placeholder="Address for offline meetings"></div>
        </div>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">People & Content</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Organizer</label><select class="wf-form__select">${opt(d.users, m.organizer)}</select></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Participants</label><input class="wf-form__input" value="${esc((m.participants || []).join(", "))}"></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Agenda</label><textarea class="wf-form__textarea">${esc(m.agenda || "")}</textarea></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Discussion Points</label><textarea class="wf-form__textarea">${esc(m.discussion || "")}</textarea></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Expected Outcome</label><input class="wf-form__input" value="${esc(m.outcome || "")}"></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Internal Notes</label><textarea class="wf-form__textarea">${esc(m.notes || "")}</textarea></div>
        </div>
        <div class="wf-upload wf-mt-16" id="wf-upload-zone"><div class="wf-upload__icon"></div><div class="wf-upload__text">Upload attachments</div></div>
      </div>
      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-action="cancel-form">Cancel</button>
        ${isEdit ? `<button type="button" class="wf-btn wf-btn--danger" data-modal="cancel-meeting">Cancel Meeting</button>` : ""}
        <button type="submit" class="wf-btn wf-btn--primary">${isEdit ? "Save Changes" : "Schedule Meeting"}</button>
      </div>
    </form>`;
  }

  function meetingModals() {
    return modals()
      .replace(/Customers/g, "Meetings")
      .replace(/Customer/g, "Meeting")
      .replace(/Rahul Sharma \(CUS-2024-001\)/, "Brand Presentation — Rahul Sharma (MTG-001)")
      + `
    <div class="wf-modal-overlay" id="modal-cancel-meeting">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Cancel Meeting</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <p>Cancel <strong>Brand Presentation — Rahul Sharma</strong>?</p>
          <div class="wf-form__group wf-mt-16"><label class="wf-form__label">Reason</label><select class="wf-form__select"><option>Customer unavailable</option><option>Rescheduled</option><option>No show</option><option>Other</option></select></div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Keep Meeting</button><button class="wf-btn wf-btn--danger" data-action="confirm-cancel-meeting">Cancel Meeting</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-reschedule">
      <div class="wf-modal wf-modal--lg"><div class="wf-modal__header"><span class="wf-modal__title">Reschedule Meeting</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">New Date</label><input type="date" class="wf-form__input"></div>
          <div class="wf-form__group"><label class="wf-form__label">Start Time</label><input type="time" class="wf-form__input"></div>
          <div class="wf-form__group"><label class="wf-form__label">End Time</label><input type="time" class="wf-form__input"></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Notify Participants</label><select class="wf-form__select"><option>Email + SMS</option><option>Email only</option></select></div>
        </div></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-reschedule">Reschedule</button></div>
      </div>
    </div>`;
  }

  function approvalTable(approvals, options = {}) {
    const { selectable = true, showActions = true, screen = "details", compact = false, hidePagination = false } = options;

    if (compact) {
      const rows = (approvals || []).map((a) => `
        <tr>
          <td class="wf-table__cell-clip"><span class="wf-badge wf-badge--outline">${esc(a.type)}</span></td>
          <td class="wf-table__cell-clip"><a href="#${screen}" data-screen="${screen}" class="wf-table__link">${esc(a.reference)}</a></td>
          <td><span class="wf-badge">${esc(a.status)}</span></td>
          <td class="wf-table__cell-clip">${esc(a.currentApprover)}</td>
          <td>${esc(a.dueDate)}</td>
        </tr>
      `).join("");
      return `<div class="wf-table-wrap wf-table-wrap--fit"><table class="wf-table wf-table--fit wf-table--compact"><thead><tr>
        <th>Type</th><th>Reference</th><th>Status</th><th>Approver</th><th>Due</th>
      </tr></thead><tbody>${rows || `<tr><td colspan="5">${emptyState("No approvals found", "Try adjusting your filters")}</td></tr>`}</tbody></table></div>`;
    }

    const rows = (approvals || []).map((a) => `
      <tr>
        ${selectable ? `<td><span class="wf-table__checkbox"></span></td>` : ""}
        <td><a href="#${screen}" data-screen="${screen}" class="wf-table__link">${esc(a.id)}</a></td>
        <td><span class="wf-badge wf-badge--outline">${esc(a.type)}</span></td>
        <td>${esc(a.module)}</td>
        <td><a href="#${screen}" data-screen="${screen}" class="wf-table__link">${esc(a.reference)}</a></td>
        <td>${esc(a.requestedBy)}</td>
        <td>${esc(a.department)}</td>
        <td><span class="wf-badge${a.priority === "High" || a.priority === "Critical" ? " wf-badge--dark" : ""}">${esc(a.priority)}</span></td>
        <td><span class="wf-badge${a.status === "Approved" ? " wf-badge--dark" : a.status === "Rejected" ? "" : ""}">${esc(a.status)}</span></td>
        <td>${esc(a.currentApprover)}</td>
        <td>${esc(a.dueDate)}</td>
        ${showActions ? `<td><div class="wf-table__actions">
          <button data-screen="${screen}" class="wf-btn wf-btn--sm">View</button>
          ${a.status === "Manager Review" || a.status === "Operations Review" || a.status === "CEO Approval" ? `<button data-screen="decision" class="wf-btn wf-btn--sm wf-btn--primary">Decide</button>` : ""}
        </div></td>` : ""}
      </tr>
    `).join("");
    const count = (approvals || []).length;
    return `<div class="wf-table-wrap wf-table-wrap--scroll"><table class="wf-table wf-table--fit"><thead><tr>
      ${selectable ? "<th><span class='wf-table__checkbox'></span></th>" : ""}
      <th>Approval ID</th><th>Type</th><th>Module</th><th>Reference</th><th>Requested By</th><th>Department</th><th>Priority</th><th>Status</th><th>Current Approver</th><th>Due Date</th>
      ${showActions ? "<th>Actions</th>" : ""}
    </tr></thead><tbody>${rows || `<tr><td colspan="12">${emptyState("No approvals found", "Try adjusting your filters")}</td></tr>`}</tbody></table>${hidePagination ? "" : pagination(count > 6 ? 124 : count)}</div>`;
  }

  function approvalProfileCard(approval) {
    const a = approval || (typeof APPROVAL_DATA !== "undefined" ? APPROVAL_DATA.approvals[0] : {});
    return `<div class="wf-card">
      <div class="wf-card__body" style="text-align:center">
        <div class="wf-avatar-lg" aria-hidden="true"></div>
        <div style="font-size:15px;font-weight:600">${esc(a.type)}</div>
        <div style="font-size:12px;color:var(--wf-text-muted)">${esc(a.id)}</div>
        <div style="margin-top:8px"><span class="wf-badge wf-badge--dark">${esc(a.status)}</span></div>
      </div>
      <div class="wf-card__body" style="padding-top:0">
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Reference</span><span class="wf-detail-info__value">${esc(a.reference)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Requested By</span><span class="wf-detail-info__value">${esc(a.requestedBy)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Priority</span><span class="wf-detail-info__value">${esc(a.priority)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Due Date</span><span class="wf-detail-info__value">${esc(a.dueDate)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Level</span><span class="wf-detail-info__value">${esc(a.level)}</span></div>
      </div>
      <div class="wf-card__footer">
        <button data-screen="decision" class="wf-btn wf-btn--sm wf-btn--primary">Take Action</button>
        <button data-screen="comments" class="wf-btn wf-btn--sm">Comment</button>
      </div>
    </div>`;
  }

  function approvalForm(approval) {
    const a = approval || {};
    const d = typeof APPROVAL_DATA !== "undefined" ? APPROVAL_DATA : { types: [], modules: [], users: [], departments: [], workflow: [], priorities: ["High", "Medium", "Low"] };
    const opt = (arr, sel) => (arr || []).map((v) => `<option${v === sel ? " selected" : ""}>${esc(v)}</option>`).join("");
    return `<form class="wf-form" id="wf-approval-form" data-mode="view">
      <div class="wf-form__section"><div class="wf-form__section-title">Approval Request</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Approval ID</label><input class="wf-form__input" value="${esc(a.id || "Auto-generated")}" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Approval Type</label><select class="wf-form__select">${opt(d.types, a.type)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Module</label><select class="wf-form__select">${opt(d.modules, a.module)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Reference Number</label><input class="wf-form__input" value="${esc(a.reference || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Requested By</label><select class="wf-form__select">${opt(d.users, a.requestedBy)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Department</label><select class="wf-form__select">${opt(d.departments, a.department)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Priority</label><select class="wf-form__select">${opt(d.priorities || ["Critical", "High", "Medium", "Low"], a.priority)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Approval Status</label><select class="wf-form__select">${opt(d.workflow, a.status)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Current Approver</label><input class="wf-form__input" value="${esc(a.currentApprover || "")}" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label">Approval Level</label><input class="wf-form__input" value="${esc(a.level || "")}" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label">Due Date</label><input type="date" class="wf-form__input" value="${esc(a.dueDateRaw || "2024-06-28")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Created Date</label><input class="wf-form__input" value="${esc(a.createdDate || "")}" readonly></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label wf-form__label--required">Reason</label><textarea class="wf-form__textarea">${esc(a.reason || "")}</textarea></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Internal Notes</label><textarea class="wf-form__textarea">${esc(a.notes || "")}</textarea></div>
        </div>
        <div class="wf-upload wf-mt-16"><div class="wf-upload__icon"></div><div class="wf-upload__text">Upload supporting documents (required for Agreement & Payment approvals)</div></div>
      </div>
    </form>`;
  }

  function approvalLevels(levels, currentLevel) {
    const items = levels || [
      { level: 1, name: "Manager Review", approver: "Himani Bhargava", status: "Completed" },
      { level: 2, name: "Operations Review", approver: "Om Anil", status: "In Progress" },
      { level: 3, name: "CEO Approval", approver: "Abdul Syed", status: "Pending" }
    ];
    return `<div class="wf-approval-levels">${items.map((l) => {
      const done = l.status === "Completed" || l.status === "Approved";
      const active = l.status === "In Progress" || l.name === currentLevel;
      return `<div class="wf-approval-level${done ? " wf-approval-level--done" : ""}${active ? " wf-approval-level--active" : ""}">
        <div class="wf-approval-level__num">${done ? "" : l.level}</div>
        <div class="wf-approval-level__body">
          <div class="wf-approval-level__title">${esc(l.name)}</div>
          <div class="wf-approval-level__meta">${esc(l.approver)} · <span class="wf-badge">${esc(l.status)}</span></div>
        </div>
      </div>`;
    }).join("")}</div>`;
  }

  function approvalModals() {
    return modals()
      .replace(/Customers/g, "Approvals")
      .replace(/Customer/g, "Approval")
      .replace(/Rahul Sharma \(CUS-2024-001\)/, "Discount Approval — Odette (APR-2024-042)")
      + `
    <div class="wf-modal-overlay" id="modal-approve">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Approve Request</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <p>Approve <strong>Discount Approval — Odette Bengaluru</strong>?</p>
          <div class="wf-form__group wf-mt-16"><label class="wf-form__label">Comments (optional)</label><textarea class="wf-form__textarea" placeholder="Add approval notes…"></textarea></div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-approve">Approve</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-reject">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Reject Request</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <p>Reject <strong>Discount Approval — Odette Bengaluru</strong>?</p>
          <div class="wf-form__group wf-mt-16"><label class="wf-form__label wf-form__label--required">Rejection Reason</label><textarea class="wf-form__textarea" placeholder="Mandatory comment required for rejection…" required></textarea></div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--danger" data-action="confirm-reject">Reject</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-return">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Return for Changes</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <p>Return <strong>Discount Approval — Odette Bengaluru</strong> to requester?</p>
          <div class="wf-form__group wf-mt-16"><label class="wf-form__label wf-form__label--required">Change Request Notes</label><textarea class="wf-form__textarea" placeholder="Describe required changes…" required></textarea></div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-return">Return</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-bulk-approve">
      <div class="wf-modal wf-modal--lg"><div class="wf-modal__header"><span class="wf-modal__title">Bulk Approve</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <p>Approve <strong>5 selected requests</strong>? Levels cannot be skipped.</p>
          <div class="wf-table-wrap" style="border:none;margin-top:12px"><table class="wf-table"><thead><tr><th>ID</th><th>Type</th><th>Reference</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>APR-2024-038</td><td>Lead Approval</td><td>L-2024-112</td><td>Manager Review</td></tr>
            <tr><td>APR-2024-039</td><td>Meeting Approval</td><td>MTG-2024-008</td><td>Manager Review</td></tr>
            <tr><td>APR-2024-040</td><td>Document Approval</td><td>DOC-2024-055</td><td>Operations Review</td></tr>
          </tbody></table></div>
          <div class="wf-form__group wf-mt-16"><label class="wf-form__label">Bulk Comment</label><textarea class="wf-form__textarea" placeholder="Optional comment applied to all…"></textarea></div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-bulk-approve">Approve All</button></div>
      </div>
    </div>`;
  }

  function formatINR(amount) {
    if (amount == null) return "—";
    const n = typeof amount === "number" ? amount : parseFloat(String(amount).replace(/[^\d.]/g, ""));
    if (isNaN(n)) return esc(amount);
    return "₹" + n.toLocaleString("en-IN");
  }

  function paymentTable(payments, options = {}) {
    const { selectable = true, showActions = true, screen = "payment-details", compact = false, hidePagination = false } = options;

    if (compact) {
      const rows = (payments || []).map((p) => `
        <tr>
          <td class="wf-table__cell-clip">${esc(p.customer)}</td>
          <td><span class="wf-badge wf-badge--outline">${esc(p.type)}</span></td>
          <td style="font-weight:600">${formatINR(p.amount)}</td>
          <td><span class="wf-badge${p.status === "Completed" || p.status === "Verified" ? " wf-badge--dark" : ""}">${esc(p.status)}</span></td>
        </tr>
      `).join("");
      return `<div class="wf-table-wrap wf-table-wrap--fit"><table class="wf-table wf-table--fit wf-table--compact"><thead><tr>
        <th>Customer</th><th>Type</th><th>Amount</th><th>Status</th>
      </tr></thead><tbody>${rows || `<tr><td colspan="4" style="text-align:center;padding:24px;color:var(--wf-text-muted)">No payments found</td></tr>`}</tbody></table></div>`;
    }

    const rows = (payments || []).map((p) => `
      <tr>
        ${selectable ? `<td><span class="wf-table__checkbox"></span></td>` : ""}
        <td><a href="#${screen}" data-screen="${screen}" class="wf-table__link">${esc(p.id)}</a></td>
        <td>${esc(p.customer)}</td>
        <td>${esc(p.brand)}</td>
        <td><span class="wf-badge wf-badge--outline">${esc(p.type)}</span></td>
        <td style="font-weight:600">${formatINR(p.amount)}</td>
        <td>${formatINR(p.gst)}</td>
        <td><span class="wf-badge">${esc(p.method)}</span></td>
        <td>${esc(p.paymentDate)}</td>
        <td><span class="wf-badge${p.status === "Completed" || p.status === "Verified" ? " wf-badge--dark" : ""}">${esc(p.status)}</span></td>
        <td><span class="wf-badge wf-badge--outline">${esc(p.verification)}</span></td>
        ${showActions ? `<td><div class="wf-table__actions">
          <button data-screen="${screen}" class="wf-btn wf-btn--sm">View</button>
          ${p.verification === "Pending" ? `<button data-modal="verify-payment" class="wf-btn wf-btn--sm wf-btn--primary">Verify</button>` : ""}
        </div></td>` : ""}
      </tr>
    `).join("");
    const count = (payments || []).length;
    return `<div class="wf-table-wrap wf-table-wrap--scroll"><table class="wf-table wf-table--fit"><thead><tr>
      ${selectable ? "<th><span class='wf-table__checkbox'></span></th>" : ""}
      <th>Payment ID</th><th>Customer</th><th>Brand</th><th>Type</th><th>Amount</th><th>GST</th><th>Method</th><th>Date</th><th>Status</th><th>Verification</th>
      ${showActions ? "<th>Actions</th>" : ""}
    </tr></thead><tbody>${rows || `<tr><td colspan="12" style="text-align:center;padding:24px;color:var(--wf-text-muted)">No payments found</td></tr>`}</tbody></table>${hidePagination ? "" : pagination(count > 6 ? 156 : count)}</div>`;
  }

  function invoiceTable(invoices, options = {}) {
    const { selectable = true, showActions = true, screen = "invoice-details" } = options;
    const rows = (invoices || []).map((inv) => `
      <tr>
        ${selectable ? `<td><span class="wf-table__checkbox"></span></td>` : ""}
        <td><a href="#${screen}" data-screen="${screen}" class="wf-table__link">${esc(inv.number)}</a></td>
        <td>${esc(inv.customer)}</td>
        <td>${esc(inv.brand)}</td>
        <td>${esc(inv.date)}</td>
        <td style="font-weight:600">${formatINR(inv.subTotal)}</td>
        <td>${formatINR(inv.gst)}</td>
        <td style="font-weight:600">${formatINR(inv.grandTotal)}</td>
        <td><span class="wf-badge${inv.status === "Paid" ? " wf-badge--dark" : ""}">${esc(inv.status)}</span></td>
        <td>${esc(inv.dueDate)}</td>
        ${showActions ? `<td><div class="wf-table__actions">
          <button data-screen="${screen}" class="wf-btn wf-btn--sm">View</button>
          <button class="wf-btn wf-btn--sm">Download</button>
        </div></td>` : ""}
      </tr>
    `).join("");
    const count = (invoices || []).length;
    return `<div class="wf-table-wrap"><table class="wf-table"><thead><tr>
      ${selectable ? "<th><span class='wf-table__checkbox'></span></th>" : ""}
      <th>Invoice No.</th><th>Customer</th><th>Brand</th><th>Date</th><th>Sub Total</th><th>GST</th><th>Grand Total</th><th>Status</th><th>Due Date</th>
      ${showActions ? "<th>Actions</th>" : ""}
    </tr></thead><tbody>${rows}</tbody></table>${pagination(count > 6 ? 89 : count)}</div>`;
  }

  function paymentProfileCard(payment) {
    const p = payment || (typeof ACCOUNTS_DATA !== "undefined" ? ACCOUNTS_DATA.payments[0] : {});
    return `<div class="wf-card">
      <div class="wf-card__body" style="text-align:center">
        <div class="wf-avatar-lg" aria-hidden="true"></div>
        <div style="font-size:18px;font-weight:700">${formatINR(p.amount)}</div>
        <div style="font-size:12px;color:var(--wf-text-muted)">${esc(p.id)}</div>
        <div style="margin-top:8px"><span class="wf-badge wf-badge--dark">${esc(p.status)}</span></div>
      </div>
      <div class="wf-card__body" style="padding-top:0">
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Customer</span><span class="wf-detail-info__value">${esc(p.customer)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Type</span><span class="wf-detail-info__value">${esc(p.type)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Method</span><span class="wf-detail-info__value">${esc(p.method)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Date</span><span class="wf-detail-info__value">${esc(p.paymentDate)}</span></div>
      </div>
      <div class="wf-card__footer">
        <button data-screen="invoice-details" class="wf-btn wf-btn--sm">Invoice</button>
        <button data-modal="verify-payment" class="wf-btn wf-btn--sm wf-btn--primary">Verify</button>
      </div>
    </div>`;
  }

  function paymentForm(payment, mode) {
    const p = payment || {};
    const d = typeof ACCOUNTS_DATA !== "undefined" ? ACCOUNTS_DATA : { customers: [], brands: [], types: [], methods: [], users: [], workflow: [] };
    const opt = (arr, sel) => (arr || []).map((v) => `<option${v === sel ? " selected" : ""}>${esc(v)}</option>`).join("");
    return `<form class="wf-form" id="wf-payment-form" data-mode="${mode || "create"}">
      <div class="wf-form__section"><div class="wf-form__section-title">Payment Details</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Payment ID</label><input class="wf-form__input" value="${esc(p.id || "Auto-generated")}" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Customer</label><select class="wf-form__select">${opt(d.customers, p.customer)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Brand</label><select class="wf-form__select">${opt(d.brands, p.brand)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Franchise Model</label><input class="wf-form__input" value="${esc(p.model || "Odette Premium")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Invoice Number</label><input class="wf-form__input" value="${esc(p.invoice || "")}" placeholder="INV-2024-XXX"></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Payment Type</label><select class="wf-form__select">${opt(d.types, p.type)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Amount (₹)</label><input class="wf-form__input" type="number" value="${esc(p.amountRaw || "")}" placeholder="1250000"></div>
          <div class="wf-form__group"><label class="wf-form__label">GST (₹)</label><input class="wf-form__input" type="number" value="${esc(p.gstRaw || "")}" placeholder="225000"></div>
          <div class="wf-form__group"><label class="wf-form__label">Discount (₹)</label><input class="wf-form__input" type="number" value="${esc(p.discount || "0")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Payment Method</label><select class="wf-form__select">${opt(d.methods, p.method)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Transaction ID</label><input class="wf-form__input" value="${esc(p.transactionId || "")}" placeholder="NEFT / UPI / Cheque ref"></div>
          <div class="wf-form__group"><label class="wf-form__label">Reference Number</label><input class="wf-form__input" value="${esc(p.reference || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Bank Name</label><input class="wf-form__input" value="${esc(p.bank || "")}" placeholder="HDFC Bank"></div>
          <div class="wf-form__group"><label class="wf-form__label">UPI ID</label><input class="wf-form__input" value="${esc(p.upi || "")}" placeholder="customer@upi"></div>
          <div class="wf-form__group"><label class="wf-form__label">Cheque Number</label><input class="wf-form__input" value="${esc(p.cheque || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Payment Date</label><input type="date" class="wf-form__input" value="${esc(p.paymentDateRaw || "2024-06-25")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Due Date</label><input type="date" class="wf-form__input" value="${esc(p.dueDateRaw || "2024-07-25")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Payment Status</label><select class="wf-form__select">${opt(d.workflow, p.status)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Verification Status</label><select class="wf-form__select"><option>Pending</option><option>Verified</option><option>Failed</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Verified By</label><select class="wf-form__select">${opt(d.users, p.verifiedBy)}</select></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Remarks</label><textarea class="wf-form__textarea">${esc(p.remarks || "")}</textarea></div>
        </div>
        <div class="wf-upload wf-mt-16"><div class="wf-upload__icon"></div><div class="wf-upload__text">Upload supporting documents (bank receipt, cheque copy)</div></div>
      </div>
      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-action="cancel-form">Cancel</button>
        <button type="submit" class="wf-btn wf-btn--primary">Record Payment</button>
      </div>
    </form>`;
  }

  function invoiceForm(invoice, mode) {
    const inv = invoice || {};
    const d = typeof ACCOUNTS_DATA !== "undefined" ? ACCOUNTS_DATA : { customers: [], brands: [] };
    const opt = (arr, sel) => (arr || []).map((v) => `<option${v === sel ? " selected" : ""}>${esc(v)}</option>`).join("");
    return `<form class="wf-form" id="wf-invoice-form" data-mode="${mode || "create"}">
      <div class="wf-form__section"><div class="wf-form__section-title">Invoice Details</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Invoice Number</label><input class="wf-form__input" value="${esc(inv.number || "Auto-generated")}" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label">Invoice Date</label><input type="date" class="wf-form__input" value="${esc(inv.dateRaw || "2024-06-25")}"></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Customer</label><select class="wf-form__select">${opt(d.customers, inv.customer)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Brand</label><select class="wf-form__select">${opt(d.brands, inv.brand)}</select></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Billing Address</label><textarea class="wf-form__textarea">${esc(inv.address || "42 MG Road, Indiranagar, Bengaluru 560038")}</textarea></div>
          <div class="wf-form__group"><label class="wf-form__label">GST Number</label><input class="wf-form__input" value="${esc(inv.gstin || "29AABCU9603R1ZM")}" placeholder="15-digit GSTIN"></div>
          <div class="wf-form__group"><label class="wf-form__label">PAN</label><input class="wf-form__input" value="${esc(inv.pan || "AABCU9603R")}" placeholder="10-character PAN"></div>
        </div>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Invoice Items</div>
        <div class="wf-table-wrap" style="border:none;margin-bottom:16px"><table class="wf-table"><thead><tr><th>Description</th><th>HSN/SAC</th><th>Qty</th><th>Rate (₹)</th><th>Amount (₹)</th></tr></thead>
        <tbody>
          <tr><td>Franchise Fee — Odette Premium</td><td>997331</td><td>1</td><td>10,59,322</td><td>10,59,322</td></tr>
          <tr><td>Security Deposit</td><td>997331</td><td>1</td><td>1,90,678</td><td>1,90,678</td></tr>
        </tbody></table></div>
        <button type="button" class="wf-btn wf-btn--sm">+ Add Line Item</button>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Tax Breakdown</div>
        <div class="wf-form__grid wf-form__grid--3">
          <div class="wf-detail-info__row"><span class="wf-detail-info__label">Sub Total</span><span class="wf-detail-info__value">₹12,50,000</span></div>
          <div class="wf-detail-info__row"><span class="wf-detail-info__label">CGST (9%)</span><span class="wf-detail-info__value">₹1,12,500</span></div>
          <div class="wf-detail-info__row"><span class="wf-detail-info__label">SGST (9%)</span><span class="wf-detail-info__value">₹1,12,500</span></div>
          <div class="wf-detail-info__row"><span class="wf-detail-info__label">Discount</span><span class="wf-detail-info__value">₹0</span></div>
          <div class="wf-detail-info__row"><span class="wf-detail-info__label">Grand Total</span><span class="wf-detail-info__value" style="font-weight:700">₹14,75,000</span></div>
          <div class="wf-form__group"><label class="wf-form__label">Payment Terms</label><select class="wf-form__select"><option>Net 30</option><option>Net 15</option><option>Due on Receipt</option></select></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Notes</label><textarea class="wf-form__textarea" placeholder="Invoice notes…">${esc(inv.notes || "")}</textarea></div>
        </div>
      </div>
      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-action="cancel-form">Cancel</button>
        <button type="submit" class="wf-btn wf-btn--primary">Generate Invoice</button>
      </div>
    </form>`;
  }

  function accountsModals() {
    return modals()
      .replace(/Customers/g, "Payments")
      .replace(/Customer/g, "Payment")
      .replace(/Rahul Sharma \(CUS-2024-001\)/, "Franchise Fee — Rahul Sharma (PAY-2024-089)")
      + `
    <div class="wf-modal-overlay" id="modal-verify-payment">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Verify Payment</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <p>Verify payment <strong>PAY-2024-089 · ₹12,50,000</strong> from Rahul Sharma?</p>
          <div class="wf-form__group wf-mt-16"><label class="wf-form__label">Transaction ID Match</label><select class="wf-form__select"><option>Confirmed — NEFT20240624001</option><option>Mismatch — investigate</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Remarks</label><textarea class="wf-form__textarea" placeholder="Verification notes…"></textarea></div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-verify-payment">Verify Payment</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-refund">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Process Refund</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <p>Submit refund request for <strong>PAY-2024-076 · ₹2,50,000</strong>?</p>
          <div class="wf-form__grid">
            <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Refund Amount (₹)</label><input class="wf-form__input" value="250000"></div>
            <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Reason</label><select class="wf-form__select"><option>Agreement cancelled</option><option>Overpayment</option><option>Booking forfeiture reversal</option><option>Other</option></select></div>
            <div class="wf-form__group wf-form__group--full"><label class="wf-form__label wf-form__label--required">Remarks</label><textarea class="wf-form__textarea" placeholder="Mandatory for refund approval…"></textarea></div>
          </div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--danger" data-action="confirm-refund">Submit Refund</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-payment-approve">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Approve Payment</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <p>Approve payment verification for <strong>PAY-2024-092 · ₹8,85,000</strong>?</p>
          <div class="wf-form__group wf-mt-16"><label class="wf-form__label">Approver Notes</label><textarea class="wf-form__textarea"></textarea></div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-payment-approve">Approve</button></div>
      </div>
    </div>`;
  }

  function documentTable(documents, options = {}) {
    const { selectable = true, showActions = true, screen = "details", compact = false, hidePagination = false } = options;

    if (compact) {
      const rows = (documents || []).map((d) => `
        <tr>
          <td class="wf-table__cell-clip"><a href="#${screen}" data-screen="${screen}" class="wf-table__link">${esc(d.name)}</a></td>
          <td><span class="wf-badge wf-badge--outline">${esc(d.category)}</span></td>
          <td><span class="wf-badge${d.status === "Approved" ? " wf-badge--dark" : ""}">${esc(d.status)}</span></td>
          <td>${esc(d.uploadDate)}</td>
        </tr>
      `).join("");
      return `<div class="wf-table-wrap wf-table-wrap--fit"><table class="wf-table wf-table--fit wf-table--compact"><thead><tr>
        <th>Name</th><th>Category</th><th>Status</th><th>Date</th>
      </tr></thead><tbody>${rows || `<tr><td colspan="4" style="text-align:center;padding:24px;color:var(--wf-text-muted)">No documents found</td></tr>`}</tbody></table></div>`;
    }

    const rows = (documents || []).map((d) => `
      <tr>
        ${selectable ? `<td><span class="wf-table__checkbox"></span></td>` : ""}
        <td><span class="wf-doc-icon wf-doc-icon--${esc((d.fileType || "pdf").toLowerCase())}"></span></td>
        <td><a href="#${screen}" data-screen="${screen}" class="wf-table__link">${esc(d.name)}</a></td>
        <td><span class="wf-badge wf-badge--outline">${esc(d.category)}</span></td>
        <td>${esc(d.type)}</td>
        <td>${esc(d.linkedTo || "—")}</td>
        <td>${esc(d.uploadedBy)}</td>
        <td>${esc(d.uploadDate)}</td>
        <td>${esc(d.size)}</td>
        <td>v${esc(d.version)}</td>
        <td><span class="wf-badge${d.status === "Approved" ? " wf-badge--dark" : ""}">${esc(d.status)}</span></td>
        <td>${esc(d.expiryDate || "—")}</td>
        ${showActions ? `<td><div class="wf-table__actions">
          <button data-screen="${screen}" class="wf-btn wf-btn--sm">View</button>
          <button data-screen="preview" class="wf-btn wf-btn--sm">Preview</button>
          <button class="wf-btn wf-btn--sm">Download</button>
        </div></td>` : ""}
      </tr>
    `).join("");
    const count = (documents || []).length;
    const paginationHtml = hidePagination ? "" : pagination(count > 6 ? 284 : count);
    return `<div class="wf-table-block">
      <div class="wf-table-wrap wf-table-wrap--scroll"><table class="wf-table wf-table--fit"><thead><tr>
      ${selectable ? "<th><span class='wf-table__checkbox'></span></th>" : ""}
      <th></th><th>Name</th><th>Category</th><th>Type</th><th>Linked To</th><th>Uploaded By</th><th>Date</th><th>Size</th><th>Ver</th><th>Status</th><th>Expiry</th>
      ${showActions ? "<th>Actions</th>" : ""}
    </tr></thead><tbody>${rows || `<tr><td colspan="14" style="text-align:center;padding:24px;color:var(--wf-text-muted)">No documents found</td></tr>`}</tbody></table></div>
    ${paginationHtml}
    </div>`;
  }

  function documentProfileCard(doc) {
    const d = doc || (typeof DOCUMENT_DATA !== "undefined" ? DOCUMENT_DATA.documents[0] : {});
    return `<div class="wf-card">
      <div class="wf-card__body" style="text-align:center">
        <div class="wf-doc-icon wf-doc-icon--${esc((d.fileType || "pdf").toLowerCase())}" style="width:56px;height:56px;margin:0 auto 12px"></div>
        <div style="font-size:14px;font-weight:600">${esc(d.name)}</div>
        <div style="font-size:12px;color:var(--wf-text-muted)">${esc(d.id)}</div>
        <div style="margin-top:8px"><span class="wf-badge wf-badge--dark">${esc(d.status)}</span></div>
      </div>
      <div class="wf-card__body" style="padding-top:0">
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Category</span><span class="wf-detail-info__value">${esc(d.category)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Type</span><span class="wf-detail-info__value">${esc(d.type)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Size</span><span class="wf-detail-info__value">${esc(d.size)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Version</span><span class="wf-detail-info__value">v${esc(d.version)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Expiry</span><span class="wf-detail-info__value">${esc(d.expiryDate || "—")}</span></div>
      </div>
      <div class="wf-card__footer">
        <button data-screen="preview" class="wf-btn wf-btn--sm wf-btn--primary">Preview</button>
        <button class="wf-btn wf-btn--sm">Download</button>
      </div>
    </div>`;
  }

  function documentForm(doc, mode) {
    const d = doc || {};
    const isEdit = mode === "edit";
    const data = typeof DOCUMENT_DATA !== "undefined" ? DOCUMENT_DATA : { categories: [], types: [], modules: [], brands: [], customers: [], users: [], workflow: [] };
    const opt = (arr, sel) => (arr || []).map((v) => `<option${v === sel ? " selected" : ""}>${esc(v)}</option>`).join("");
    return `<form class="wf-form" id="wf-document-form" data-mode="${mode || "create"}">
      <div class="wf-form__section"><div class="wf-form__section-title">Document Information</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Document ID</label><input class="wf-form__input" value="${esc(d.id || "Auto-generated")}" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Document Name</label><input class="wf-form__input" value="${esc(d.name || "")}" required></div>
          <div class="wf-form__group"><label class="wf-form__label">Document Category</label><select class="wf-form__select">${opt(data.categories, d.category)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Document Type</label><select class="wf-form__select">${opt(data.types, d.type)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Linked Module</label><select class="wf-form__select">${opt(data.modules, d.module)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Customer</label><select class="wf-form__select"><option>—</option>${opt(data.customers, d.customer)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Brand</label><select class="wf-form__select"><option>—</option>${opt(data.brands, d.brand)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Franchise Model</label><input class="wf-form__input" value="${esc(d.model || "")}" placeholder="Optional"></div>
          <div class="wf-form__group"><label class="wf-form__label">Agreement Ref</label><input class="wf-form__input" value="${esc(d.agreement || "")}" placeholder="AGR-2024-XXX"></div>
          <div class="wf-form__group"><label class="wf-form__label">Payment Ref</label><input class="wf-form__input" value="${esc(d.payment || "")}" placeholder="PAY-2024-XXX"></div>
          <div class="wf-form__group"><label class="wf-form__label">Uploaded By</label><select class="wf-form__select">${opt(data.users, d.uploadedBy)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Upload Date</label><input type="date" class="wf-form__input" value="${esc(d.uploadDateRaw || "2024-06-25")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Expiry Date</label><input type="date" class="wf-form__input" value="${esc(d.expiryDateRaw || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Status</label><select class="wf-form__select">${opt(data.workflow, d.status)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Verification</label><select class="wf-form__select"><option>Pending</option><option>Verified</option><option>Rejected</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Approved By</label><input class="wf-form__input" value="${esc(d.approvedBy || "")}" readonly></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Tags</label><input class="wf-form__input" value="${esc((d.tags || []).join(", "))}" placeholder="kyc, bengaluru, odette"></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Remarks</label><textarea class="wf-form__textarea">${esc(d.remarks || "")}</textarea></div>
        </div>
        ${isEdit ? "" : `<div class="wf-upload wf-mt-16" id="wf-upload-zone"><div class="wf-upload__icon"></div><div class="wf-upload__text">Drag & drop files — PDF, DOCX, XLSX, JPG, PNG (max 25 MB)</div></div>`}
      </div>
      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-action="cancel-form">Cancel</button>
        ${isEdit ? `<button type="button" class="wf-btn wf-btn--danger" data-modal="delete-doc">Archive</button>` : ""}
        <button type="submit" class="wf-btn wf-btn--primary">${isEdit ? "Save Changes" : "Upload Document"}</button>
      </div>
    </form>`;
  }

  function folderTree(folders, activeId) {
    const items = folders || [
      { id: "root", name: "All Documents", children: [
        { id: "customers", name: "Customer Documents", count: 48 },
        { id: "brands", name: "Brand Documents", count: 32 },
        { id: "agreements", name: "Agreements", count: 24 },
        { id: "payments", name: "Payment Receipts", count: 56 }
      ]}
    ];
    const render = (items, depth = 0) => items.map((f) => `
      <div class="wf-folder__item${f.id === activeId ? " wf-folder__item--active" : ""}" style="padding-left:${12 + depth * 16}px" data-screen="${f.screen || "library"}">
        <span class="wf-folder__icon"></span>
        <span class="wf-folder__name">${esc(f.name)}</span>
        ${f.count != null ? `<span class="wf-badge" style="margin-left:auto">${f.count}</span>` : ""}
      </div>
      ${f.children ? render(f.children, depth + 1) : ""}
    `).join("");
    return `<div class="wf-folder-tree">${render(items)}</div>`;
  }

  function documentPreview(name, fileType) {
    return `<div class="wf-doc-preview">
      <div class="wf-doc-preview__toolbar">
        <span style="font-size:13px;font-weight:600">${esc(name || "Document Preview")}</span>
        <div class="wf-flex wf-gap-8" style="margin-left:auto">
          <button class="wf-btn wf-btn--sm">Zoom In</button>
          <button class="wf-btn wf-btn--sm">Zoom Out</button>
          <button class="wf-btn wf-btn--sm">Download</button>
          <button class="wf-btn wf-btn--sm">Print</button>
        </div>
      </div>
      <div class="wf-doc-preview__body">
        <div class="wf-chart-placeholder" style="height:480px;border:none">${esc(fileType || "PDF")} Preview — ${esc(name || "Document")}</div>
      </div>
    </div>`;
  }

  function versionHistory(versions) {
    const items = versions || [];
    return `<div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Version</th><th>Uploaded By</th><th>Date</th><th>Size</th><th>Changes</th><th>Actions</th></tr></thead>
    <tbody>${items.map((v) => `<tr>
      <td><span class="wf-badge${v.current ? " wf-badge--dark" : ""}">v${esc(v.version)}${v.current ? " (current)" : ""}</span></td>
      <td>${esc(v.uploadedBy)}</td><td>${esc(v.date)}</td><td>${esc(v.size)}</td>
      <td style="font-size:12px">${esc(v.changes)}</td>
      <td><button class="wf-btn wf-btn--sm">Download</button> ${v.current ? "" : `<button data-screen="preview" class="wf-btn wf-btn--sm">Preview</button>`}</td>
    </tr>`).join("")}</tbody></table></div>`;
  }

  function documentModals() {
    return modals()
      .replace(/Customers/g, "Documents")
      .replace(/Customer/g, "Document")
      .replace(/Rahul Sharma \(CUS-2024-001\)/, "PAN Card — Rahul Sharma (DOC-2024-156)")
      + `
    <div class="wf-modal-overlay" id="modal-verify-doc">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Verify Document</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <p>Verify <strong>PAN Card — Rahul Sharma</strong>?</p>
          <div class="wf-form__group wf-mt-16"><label class="wf-form__label">Verification Notes</label><textarea class="wf-form__textarea" placeholder="KYC validation notes…"></textarea></div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-verify-doc">Verify</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-approve-doc">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Approve Document</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><p>Approve <strong>Franchise Agreement — Meera Iyer</strong> for archival?</p></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-approve-doc">Approve</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-reject-doc">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Reject Document</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <p>Reject <strong>Aadhaar — Priya Nair</strong>?</p>
          <div class="wf-form__group wf-mt-16"><label class="wf-form__label wf-form__label--required">Rejection Reason</label><textarea class="wf-form__textarea" placeholder="Document unclear / expired / mismatch…" required></textarea></div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--danger" data-action="confirm-reject-doc">Reject</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-delete-doc">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Archive Document</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><p>Archive <strong>PAN Card — Rahul Sharma</strong>? Document will be moved to archive.</p></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--danger" data-action="confirm-delete-doc">Archive</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-bulk-upload">
      <div class="wf-modal wf-modal--lg"><div class="wf-modal__header"><span class="wf-modal__title">Bulk Upload</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <div class="wf-upload" style="min-height:160px"><div class="wf-upload__icon"></div><div class="wf-upload__text">Drop multiple files or click to browse</div></div>
          <p style="font-size:12px;color:var(--wf-text-muted);margin-top:12px">Allowed: PDF, DOCX, XLSX, JPG, PNG · Max 25 MB per file · Duplicate prevention active</p>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-bulk-upload">Upload All</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-bulk-download">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Bulk Download</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><p>Download <strong>8 selected documents</strong> as ZIP?</p></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-bulk-download">Download ZIP</button></div>
      </div>
    </div>`;
  }

  function notificationTable(notifications, options = {}) {
    const { selectable = true, showActions = true, screen = "details" } = options;
    const rows = (notifications || []).map((n) => `
      <tr class="${n.read ? "" : "wf-notif-row--unread"}">
        ${selectable ? `<td><span class="wf-table__checkbox"></span></td>` : ""}
        <td>${n.read ? "" : `<span class="wf-notif-dot"></span>`}</td>
        <td><a href="#${screen}" data-screen="${screen}" class="wf-table__link">${esc(n.id)}</a></td>
        <td><a href="#${screen}" data-screen="${screen}" class="wf-table__link">${esc(n.title)}</a></td>
        <td><span class="wf-badge wf-badge--outline">${esc(n.type)}</span></td>
        <td><span class="wf-badge${n.priority === "High" || n.priority === "Critical" ? " wf-badge--dark" : ""}">${esc(n.priority)}</span></td>
        <td>${esc(n.recipient)}</td>
        <td><span class="wf-badge">${esc(n.channel)}</span></td>
        <td>${esc(n.sentAt)}</td>
        <td><span class="wf-badge${n.status === "Delivered" || n.status === "Read" ? " wf-badge--dark" : n.status === "Failed" ? "" : ""}">${esc(n.status)}</span></td>
        <td>${n.read ? "Read" : "<strong>Unread</strong>"}</td>
        ${showActions ? `<td><div class="wf-table__actions">
          <button data-screen="${screen}" class="wf-btn wf-btn--sm">View</button>
          ${!n.read ? `<button class="wf-btn wf-btn--sm" data-action="mark-read">Mark Read</button>` : ""}
          <button class="wf-btn wf-btn--sm" data-modal="delete-notif">Delete</button>
        </div></td>` : ""}
      </tr>
    `).join("");
    const count = (notifications || []).length;
    return `<div class="wf-table-wrap"><table class="wf-table wf-notif-table"><thead><tr>
      ${selectable ? "<th><span class='wf-table__checkbox'></span></th>" : ""}
      <th></th><th>ID</th><th>Title</th><th>Type</th><th>Priority</th><th>Recipient</th><th>Channel</th><th>Sent</th><th>Status</th><th>Read</th>
      ${showActions ? "<th>Actions</th>" : ""}
    </tr></thead><tbody>${rows || `<tr><td colspan="13" style="text-align:center;padding:24px;color:var(--wf-text-muted)">No notifications</td></tr>`}</tbody></table>${pagination(count > 6 ? 342 : count)}</div>`;
  }

  function notificationList(notifications, options = {}) {
    const { screen = "details" } = options;
    return `<div class="wf-notif-list">${(notifications || []).map((n) => `
      <div class="wf-notif-item${n.read ? "" : " wf-notif-item--unread"}" data-screen="${screen}">
        <div class="wf-notif-item__icon"></div>
        <div class="wf-notif-item__body">
          <div class="wf-notif-item__title">${esc(n.title)}</div>
          <div class="wf-notif-item__msg">${esc(n.message)}</div>
          <div class="wf-notif-item__meta">${esc(n.type)} · ${esc(n.channel)} · ${esc(n.sentAt)}</div>
        </div>
        ${!n.read ? `<span class="wf-notif-dot"></span>` : ""}
      </div>
    `).join("")}</div>`;
  }

  function notificationForm(notif, mode) {
    const n = notif || {};
    const d = typeof NOTIFICATION_DATA !== "undefined" ? NOTIFICATION_DATA : { types: [], channels: [], priorities: [], users: [], roles: [], workflow: [], templates: [] };
    const opt = (arr, sel) => (arr || []).map((v) => `<option${v === sel ? " selected" : ""}>${esc(v)}</option>`).join("");
    return `<form class="wf-form" id="wf-notification-form" data-mode="${mode || "create"}">
      <div class="wf-form__section"><div class="wf-form__section-title">Notification Details</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Notification ID</label><input class="wf-form__input" value="${esc(n.id || "Auto-generated")}" readonly></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Title</label><input class="wf-form__input" value="${esc(n.title || "")}" required></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label wf-form__label--required">Message</label><textarea class="wf-form__textarea" rows="4">${esc(n.message || "")}</textarea></div>
          <div class="wf-form__group"><label class="wf-form__label">Notification Type</label><select class="wf-form__select">${opt(d.types, n.type)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Priority</label><select class="wf-form__select">${opt(d.priorities || ["Critical", "High", "Medium", "Low"], n.priority)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Recipient</label><select class="wf-form__select">${opt(d.users, n.recipient)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Recipient Role</label><select class="wf-form__select">${opt(d.roles, n.recipientRole)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Delivery Channel</label><select class="wf-form__select">${opt(d.channels, n.channel)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Template</label><select class="wf-form__select"><option>—</option>${opt(d.templates, n.template)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Schedule Date</label><input type="datetime-local" class="wf-form__input" value="${esc(n.scheduleDate || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Expiry Date</label><input type="date" class="wf-form__input" value="${esc(n.expiryDate || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Status</label><select class="wf-form__select">${opt(d.workflow, n.status)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Created By</label><select class="wf-form__select">${opt(d.users, n.createdBy)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Action Button Label</label><input class="wf-form__input" value="${esc(n.actionButton || "View Details")}" placeholder="View Details"></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Action URL</label><input class="wf-form__input" value="${esc(n.actionUrl || "")}" placeholder="/approvals/inbox"></div>
        </div>
        <div class="wf-upload wf-mt-16"><div class="wf-upload__icon"></div><div class="wf-upload__text">Optional attachments</div></div>
      </div>
      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-action="cancel-form">Cancel</button>
        <button type="submit" class="wf-btn wf-btn--primary">Schedule Notification</button>
      </div>
    </form>`;
  }

  function channelToggle(channels, active) {
    const list = channels || ["In-App", "Email", "SMS", "WhatsApp", "Push Notification"];
    const screenMap = {
      "in-app": "center",
      "push-notification": "push"
    };
    return `<div class="wf-view-toggle">${list.map((c) => {
      const id = c.toLowerCase().replace(/\s+/g, "-");
      const screenId = screenMap[id] || id;
      return `<button type="button" class="wf-btn wf-btn--sm${c === active ? " wf-btn--primary" : ""}" data-screen="${screenId}">${esc(c)}</button>`;
    }).join("")}</div>`;
  }

  function deliveryStatus(delivery) {
    const items = delivery || [];
    return `<div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Channel</th><th>Status</th><th>Sent At</th><th>Delivered At</th><th>Read At</th><th>Error</th></tr></thead>
    <tbody>${items.map((d) => `<tr>
      <td>${esc(d.channel)}</td>
      <td><span class="wf-badge${d.status === "Delivered" || d.status === "Read" ? " wf-badge--dark" : d.status === "Failed" ? "" : ""}">${esc(d.status)}</span></td>
      <td>${esc(d.sentAt || "—")}</td><td>${esc(d.deliveredAt || "—")}</td><td>${esc(d.readAt || "—")}</td>
      <td style="font-size:12px;color:var(--wf-text-muted)">${esc(d.error || "—")}</td>
    </tr>`).join("")}</tbody></table></div>`;
  }

  function notificationModals() {
    return modals()
      .replace(/Customers/g, "Notifications")
      .replace(/Customer/g, "Notification")
      .replace(/Rahul Sharma \(CUS-2024-001\)/, "Approval Required — Discount (NOT-2024-089)")
      + `
    <div class="wf-modal-overlay" id="modal-delete-notif">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Delete Notification</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><p>Delete this notification permanently?</p></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--danger" data-action="confirm-delete-notif">Delete</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-archive-notif">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Archive Notifications</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><p>Archive <strong>12 selected notifications</strong>?</p></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-archive-notif">Archive</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-mark-all-read">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Mark All Read</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><p>Mark all <strong>24 unread notifications</strong> as read?</p></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="mark-all-read">Mark All Read</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-resend">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Resend Notification</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <p>Resend <strong>Payment Due Reminder — Priya Nair</strong> via SMS?</p>
          <div class="wf-form__group wf-mt-16"><label class="wf-form__label">Channel</label><select class="wf-form__select"><option>SMS</option><option>Email</option><option>WhatsApp</option><option>All Channels</option></select></div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-resend">Resend</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-send-announcement">
      <div class="wf-modal wf-modal--lg"><div class="wf-modal__header"><span class="wf-modal__title">Send Announcement</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <div class="wf-form__grid">
            <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Title</label><input class="wf-form__input" value="Q2 Franchise Expansion Update"></div>
            <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Message</label><textarea class="wf-form__textarea">Dear team, Q2 expansion targets for Odette and OBC have been updated…</textarea></div>
            <div class="wf-form__group"><label class="wf-form__label">Recipients</label><select class="wf-form__select"><option>All Users</option><option>Sales Team</option><option>Brand Owners</option></select></div>
            <div class="wf-form__group"><label class="wf-form__label">Channels</label><select class="wf-form__select"><option>In-App + Email</option><option>All Channels</option></select></div>
          </div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-send-announcement">Send Announcement</button></div>
      </div>
    </div>`;
  }

  function reportActions() {
    return `<div class="wf-report-actions wf-flex wf-gap-8" style="flex-wrap:wrap;margin-bottom:16px">
      <button class="wf-btn wf-btn--sm" data-action="export-pdf">Export PDF</button>
      <button class="wf-btn wf-btn--sm" data-action="export-excel">Export Excel</button>
      <button class="wf-btn wf-btn--sm" data-action="export-csv">Export CSV</button>
      <button class="wf-btn wf-btn--sm" data-action="print-report">Print</button>
      <button class="wf-btn wf-btn--sm" data-modal="share-report">Share</button>
      <button class="wf-btn wf-btn--sm" data-modal="schedule-report">Schedule</button>
    </div>`;
  }

  function periodToggle(active) {
    const periods = ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"];
    return `<div class="wf-view-toggle">${periods.map((p) => `<button type="button" class="wf-btn wf-btn--sm${p === active ? " wf-btn--primary" : ""}" data-period="${p.toLowerCase()}">${p}</button>`).join("")}</div>`;
  }

  function statValueSizeClass(value, small) {
    if (small) return " wf-stat-card__value--sm";
    const text = String(value == null ? "" : value);
    if (text.length > 16) return " wf-stat-card__value--sm";
    if (text.length > 7) return " wf-stat-card__value--md";
    return "";
  }

  function kpiGrid(kpis) {
    const items = kpis || [];
    return `<div class="wf-card-grid">${items.map((k) => `
      <div class="wf-stat-card">
        <div class="wf-stat-card__label">${esc(k.label)}</div>
        <div class="wf-stat-card__value${statValueSizeClass(k.value, k.small)}">${esc(k.value)}</div>
        ${k.change ? `<div class="wf-stat-card__change">${esc(k.change)}</div>` : ""}
      </div>
    `).join("")}</div>`;
  }

  function chartCard(title, chartType, options = {}) {
    const { drillScreen, subtitle, bare } = options;
    const drill = drillScreen ? `<button data-screen="${drillScreen}" class="wf-btn wf-btn--sm">Drill Down</button>` : "";
    const body = `${subtitle ? `<p style="font-size:12px;color:var(--wf-text-muted);margin-bottom:12px">${esc(subtitle)}</p>` : ""}${dummyChart(chartType, title, options)}`;
    if (bare) return body;
    return `<div class="wf-card${options.className ? " " + options.className : ""}">
      <div class="wf-card__header"><span class="wf-card__title">${esc(title)}</span>${drill}</div>
      <div class="wf-card__body">${body}</div>
    </div>`;
  }

  function defaultBarItems(title, chartType) {
    const t = `${title || ""} ${chartType || ""}`.toLowerCase();
    const brands = [
      { label: "Odette", value: 86 },
      { label: "Belgian Waffle", value: 72 },
      { label: "Chai Point", value: 64 },
      { label: "Kasturi", value: 48 },
      { label: "Burger Co.", value: 42 }
    ];
    const cities = [
      { label: "Bengaluru", value: 72 },
      { label: "Mumbai", value: 58 },
      { label: "Delhi", value: 45 },
      { label: "Hyderabad", value: 38 },
      { label: "Pune", value: 24 }
    ];
    if (t.includes("quarter") || t.includes("franchise growth") || t.includes("new franchise")) {
      return [{ label: "Q1", value: 28 }, { label: "Q2", value: 34 }, { label: "Q3", value: 42 }, { label: "Q4", value: 48 }];
    }
    if (t.includes("city") || t.includes("geo") || t.includes("map") || t.includes("expansion") || t.includes("territory")) return cities;
    if (t.includes("brand") || t.includes("enquir") || t.includes("executive") || t.includes("horizontal")) return brands;
    if (t.includes("department")) {
      return [
        { label: "Sales", value: 86 },
        { label: "Operations", value: 42 },
        { label: "Accounts", value: 28 },
        { label: "Legal", value: 14 }
      ];
    }
    if (t.includes("meeting") && t.includes("type")) {
      return [
        { label: "Discovery", value: 42 },
        { label: "Presentation", value: 38 },
        { label: "Site Visit", value: 28 },
        { label: "Legal", value: 18 },
        { label: "Follow-up", value: 56 }
      ];
    }
    if (t.includes("payment") || t.includes("neft") || t.includes("upi")) {
      return [
        { label: "NEFT", value: 45 },
        { label: "UPI", value: 68 },
        { label: "Cheque", value: 12 },
        { label: "RTGS", value: 24 }
      ];
    }
    if (t.includes("fee") || t.includes("royalty") || t.includes("gst") || t.includes("cgst")) {
      return [
        { label: "Franchise Fee", value: 42 },
        { label: "Royalty", value: 28 },
        { label: "Booking", value: 18 },
        { label: "Training", value: 12 }
      ];
    }
    if (t.includes("channel") || t.includes("delivery") || t.includes("notification") || t.includes("success %")) {
      return [
        { label: "In-App", value: 94 },
        { label: "Email", value: 88 },
        { label: "SMS", value: 76 },
        { label: "WhatsApp", value: 82 },
        { label: "Push", value: 71 }
      ];
    }
    if (t.includes("role") || t.includes("user") || t.includes("headcount")) {
      return [
        { label: "Sales Exec", value: 42 },
        { label: "Admin", value: 18 },
        { label: "Ops Mgr", value: 12 },
        { label: "HR", value: 8 }
      ];
    }
    if (t.includes("trigger") || t.includes("action") || t.includes("module") || t.includes("event")) {
      return [
        { label: "Customers", value: 420 },
        { label: "Leads", value: 380 },
        { label: "Payments", value: 240 },
        { label: "Documents", value: 186 }
      ];
    }
    if (t.includes("target") || t.includes("kpi")) {
      return [
        { label: "Revenue", value: 92 },
        { label: "Leads", value: 78 },
        { label: "Conversion", value: 64 },
        { label: "Retention", value: 88 }
      ];
    }
    if (t.includes("pipeline") || t.includes("lead")) {
      return [
        { label: "New", value: 124 },
        { label: "Qualified", value: 86 },
        { label: "Proposal", value: 52 },
        { label: "Negotiation", value: 34 },
        { label: "Won", value: 28 }
      ];
    }
    if (t.includes("model") || t.includes("investment") || t.includes("comparison")) {
      return [
        { label: "FOFO", value: 24 },
        { label: "FOCO", value: 18 },
        { label: "Hybrid", value: 12 },
        { label: "Master", value: 8 }
      ];
    }
    return brands;
  }

  function defaultDonutItems(title, chartType) {
    const t = `${title || ""} ${chartType || ""}`.toLowerCase();
    if (t.includes("status") || t.includes("employee") || t.includes("distribution")) {
      return [
        { label: "Active", value: 186 },
        { label: "Onboarding", value: 34 },
        { label: "Inactive", value: 12 }
      ];
    }
    if (t.includes("meeting")) {
      return [
        { label: "Scheduled", value: 48 },
        { label: "Completed", value: 124 },
        { label: "Cancelled", value: 8 }
      ];
    }
    if (t.includes("document") || t.includes("kyc")) {
      return [
        { label: "KYC", value: 124 },
        { label: "Agreements", value: 86 },
        { label: "Payments", value: 64 },
        { label: "Brand", value: 42 },
        { label: "Training", value: 28 }
      ];
    }
    if (t.includes("approval") || t.includes("type")) {
      return [
        { label: "Lead", value: 42 },
        { label: "Discount", value: 28 },
        { label: "Agreement", value: 36 },
        { label: "Payment", value: 24 },
        { label: "Brand", value: 18 }
      ];
    }
    if (t.includes("model") || t.includes("draft") || t.includes("published")) {
      return [
        { label: "Published", value: 24 },
        { label: "Draft", value: 8 },
        { label: "Archived", value: 4 }
      ];
    }
    if (t.includes("source") || t.includes("conversion")) {
      return [
        { label: "Website", value: 42 },
        { label: "Referral", value: 28 },
        { label: "Trade Show", value: 18 },
        { label: "Social", value: 24 }
      ];
    }
    if (t.includes("success") || t.includes("workflow") || t.includes("failed")) {
      return [
        { label: "Success", value: 372 },
        { label: "Failed", value: 12 },
        { label: "Pending", value: 8 }
      ];
    }
    if (t.includes("severity") || t.includes("security")) {
      return [
        { label: "Critical", value: 4 },
        { label: "High", value: 18 },
        { label: "Medium", value: 42 },
        { label: "Low", value: 86 }
      ];
    }
    if (t.includes("notification") || t.includes("donut")) {
      return [
        { label: "Approvals", value: 86 },
        { label: "Meetings", value: 64 },
        { label: "Payments", value: 48 },
        { label: "Documents", value: 36 },
        { label: "Leads", value: 52 }
      ];
    }
    if (t.includes("payment") && t.includes("type")) {
      return [
        { label: "Paid", value: 168 },
        { label: "Partial", value: 32 },
        { label: "Overdue", value: 18 },
        { label: "Pending", value: 24 }
      ];
    }
  if (t.includes("permission") || t.includes("role")) {
      return [
        { label: "Sales Exec", value: 42 },
        { label: "Admin", value: 18 },
        { label: "Ops Mgr", value: 12 },
        { label: "Read Only", value: 6 }
      ];
    }
    return [
      { label: "Category A", value: 45 },
      { label: "Category B", value: 32 },
      { label: "Category C", value: 23 }
    ];
  }

  function defaultLineLabels(title, chartType) {
    const t = `${title || ""} ${chartType || ""}`.toLowerCase();
    if (t.includes("quarter") || t.includes("week")) return ["W1", "W2", "W3", "W4", "W5", "W6"];
    if (t.includes("sent") || t.includes("delivered")) return ["1", "5", "10", "15", "20", "25", "30"];
    return ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  }

  function dummyChart(chartType, title, options = {}) {
    const type = (chartType || "Bar Chart").toLowerCase();
    const items = options.items || defaultBarItems(title, chartType);
    const segments = options.segments || defaultDonutItems(title, chartType);
    const labels = options.labels || defaultLineLabels(title, chartType);
    if (type.includes("line") || type.includes("area") || type.includes("forecast") || type.includes("trend") || type.includes("cumulative") || type.includes("multi")) {
      return miniLineChart(labels);
    }
    if (type.includes("donut") || type.includes("pie") || type.includes("funnel")) {
      const total = segments.reduce((sum, s) => sum + (Number(s.value) || 0), 0);
      return miniDonut(segments, options.center || String(total));
    }
    return miniBarChart(items);
  }

  function chartPlaceholder(chartType, title, options = {}) {
    return dummyChart(chartType, title, options);
  }

  function miniBarChart(items) {
    const data = items || [];
    const max = Math.max(...data.map((i) => Number(i.value) || 0), 1);
    return `<div class="wf-mini-chart">${data.map((item) => {
      const pct = item.pct != null ? item.pct : Math.round((Number(item.value) / max) * 100);
      return `<div class="wf-mini-chart__row">
        <span class="wf-mini-chart__label">${esc(item.label)}</span>
        <div class="wf-mini-chart__track"><div class="wf-mini-chart__bar" style="width:${pct}%"></div></div>
        <span class="wf-mini-chart__value">${esc(String(item.value))}</span>
      </div>`;
    }).join("")}</div>`;
  }

  function miniDonut(segments, centerLabel) {
    const data = segments || [];
    return `<div class="wf-mini-donut">
      <div class="wf-mini-donut__ring" title="${esc(centerLabel || "")}"></div>
      <div class="wf-mini-donut__legend">${data.map((s) => `
        <div class="wf-mini-donut__item">
          <span>${esc(s.label)}</span>
          <strong>${esc(String(s.value))}</strong>
        </div>
      `).join("")}</div>
    </div>`;
  }

  function miniLineChart(labels) {
    const pts = labels || ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    return `<div class="wf-line-chart">
      <svg viewBox="0 0 300 80" preserveAspectRatio="none" aria-hidden="true">
        <polyline points="0,60 50,45 100,52 150,30 200,38 250,20 300,28" fill="none" stroke="#888" stroke-width="2"/>
        <polyline points="0,60 50,45 100,52 150,30 200,38 250,20 300,28 300,80 0,80" fill="#d8d8d8" opacity="0.5"/>
      </svg>
      <div class="wf-line-chart__labels">${pts.map((l) => `<span>${esc(l)}</span>`).join("")}</div>
    </div>`;
  }

  function chartFilterSelect(options, selected) {
    const opts = options || [];
    return `<select class="wf-chart-filter" aria-label="Filter">${opts.map((o) => `<option${o === selected ? " selected" : ""}>${esc(o)}</option>`).join("")}</select>`;
  }

  function verticalBarChart(items, options = {}) {
    const data = items || [];
    const maxVal = Math.max(...data.map((i) => Number(i.value) || 0), 1);
    const step = options.axisStep || 15;
    const axisMax = options.axisMax || Math.ceil(maxVal / step) * step;
    const colCount = options.columns || data.length;
    const ticks = [];
    for (let v = axisMax; v >= 0; v -= step) ticks.push(v);

    return `<div class="wf-vbar-chart wf-vbar-chart--interactive" style="--wf-bar-count:${colCount}">
      <div class="wf-vbar-chart__yaxis">${ticks.map((t) => `<span>${t}</span>`).join("")}</div>
      <div class="wf-vbar-chart__plot">
        <div class="wf-vbar-chart__grid" aria-hidden="true">${ticks.map(() => '<div class="wf-vbar-chart__gridline"></div>').join("")}</div>
        <div class="wf-vbar-chart__cols">${data.map((item) => {
          const pct = Math.round(((Number(item.value) || 0) / axisMax) * 100);
          const title = item.short || item.label;
          const xlab = item.xlabel || item.short || item.label;
          return `<div class="wf-vbar-chart__col">
            <div class="wf-vbar-chart__col-inner">
              <div class="wf-vbar-chart__highlight" aria-hidden="true"></div>
              <div class="wf-vbar-chart__tooltip" role="tooltip">
                <div class="wf-vbar-chart__tooltip-title">${esc(title)}</div>
                <div class="wf-vbar-chart__tooltip-value">count : ${esc(String(item.value))}</div>
              </div>
              <div class="wf-vbar-chart__bar-area">
                <div class="wf-vbar-chart__bar" style="height:${pct}%"></div>
              </div>
            </div>
            <div class="wf-vbar-chart__label" title="${esc(title)}">${esc(xlab)}</div>
          </div>`;
        }).join("")}</div>
      </div>
    </div>`;
  }

  function dualLineChart(labels, series, options = {}) {
    const pts = labels || ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const lines = series || [];
    const allVals = lines.flatMap((s) => s.values || []);
    const max = options.axisMax || Math.max(...allVals, 1);
    const w = 600;
    const h = 200;
    const padTop = 12;
    const padBottom = 8;
    const plotH = h - padTop - padBottom;
    const step = pts.length > 1 ? w / (pts.length - 1) : w;

    const yAt = (v) => padTop + plotH - ((Number(v) || 0) / max) * plotH;

    const toPoly = (values) => (values || []).map((v, i) => `${i * step},${yAt(v)}`).join(" ");

    const gridStep = options.axisStep || 15;
    const axisMax = options.axisMax || Math.ceil(max / gridStep) * gridStep;
    const ticks = [];
    for (let v = axisMax; v >= 0; v -= gridStep) ticks.push(v);

    const primary = lines[0] || { label: "Leads", values: [] };
    const secondary = lines[1] || { label: "Converted", values: [] };

    const zones = pts.map((label, i) => `
      <button type="button" class="wf-dual-line-chart__zone" data-index="${i}" aria-label="${esc(label)}"></button>
    `).join("");

    const primaryDots = (primary.values || []).map((v, i) => {
      const xPct = pts.length > 1 ? (i / (pts.length - 1)) * 100 : 50;
      const yPct = (yAt(v) / h) * 100;
      return `<span class="wf-dual-line-chart__dot wf-dual-line-chart__dot--primary" style="left:${xPct}%;top:${yPct}%"></span>`;
    }).join("");

    return `<div class="wf-dual-line-chart wf-dual-line-chart--interactive" style="--wf-chart-points:${pts.length}"
      data-chart-labels='${JSON.stringify(pts)}'
      data-chart-primary='${JSON.stringify(primary.values || [])}'
      data-chart-secondary='${JSON.stringify(secondary.values || [])}'
      data-primary-label="${esc(primary.label)}"
      data-secondary-label="${esc(secondary.label)}">
      <div class="wf-dual-line-chart__yaxis">${ticks.map((t) => `<span>${t}</span>`).join("")}</div>
      <div class="wf-dual-line-chart__plot-wrap">
        <div class="wf-dual-line-chart__plot">
          <svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true">
            ${ticks.map((t) => {
              const y = yAt(t);
              return `<line x1="0" y1="${y}" x2="${w}" y2="${y}" class="wf-dual-line-chart__gridline"/>`;
            }).join("")}
            <polyline class="wf-dual-line-chart__line wf-dual-line-chart__line--secondary" points="${toPoly(secondary.values)}" fill="none"/>
            <polyline class="wf-dual-line-chart__line wf-dual-line-chart__line--primary" points="${toPoly(primary.values)}" fill="none"/>
          </svg>
          <div class="wf-dual-line-chart__dots" aria-hidden="true">${primaryDots}</div>
          <div class="wf-dual-line-chart__crosshair" hidden aria-hidden="true"></div>
          <div class="wf-dual-line-chart__zones">${zones}</div>
          <div class="wf-dual-line-chart__tooltip" hidden role="tooltip">
            <div class="wf-chart-tooltip__title"></div>
            <div class="wf-chart-tooltip__row wf-chart-tooltip__row--primary"></div>
            <div class="wf-chart-tooltip__row wf-chart-tooltip__row--secondary"></div>
          </div>
        </div>
        <div class="wf-line-chart__labels">${pts.map((l) => `<span>${esc(l)}</span>`).join("")}</div>
      </div>
      <div class="wf-dual-line-chart__legend">
        <span class="wf-dual-line-chart__legend-item"><span class="wf-dual-line-chart__swatch wf-dual-line-chart__swatch--primary"></span>${esc(primary.label)}</span>
        <span class="wf-dual-line-chart__legend-item"><span class="wf-dual-line-chart__swatch wf-dual-line-chart__swatch--secondary"></span>${esc(secondary.label)}</span>
      </div>
    </div>`;
  }

  function leadKpiGrid(kpis) {
    const items = kpis || [];
    return `<div class="wf-card-grid wf-card-grid--6 wf-lead-kpi-grid">${items.map((k) => `
      <div class="wf-stat-card wf-lead-kpi">
        <div class="wf-lead-kpi__head">
          <div class="wf-stat-card__label">${esc(k.label)}</div>
          ${k.icon ? `<span class="wf-lead-kpi__icon" aria-hidden="true">${k.icon}</span>` : ""}
        </div>
        <div class="wf-stat-card__value${statValueSizeClass(k.value, k.small)}">${esc(k.value)}</div>
        <div class="wf-stat-card__change${k.meta ? "" : " wf-stat-card__change--empty"}">${k.meta ? esc(k.meta) : "—"}</div>
      </div>
    `).join("")}</div>`;
  }

  function leadTopPerformers(rows) {
    const data = rows || [];
    return `<div class="wf-table-wrap wf-table-wrap--fit" style="border:none">
      <table class="wf-table wf-table--fit wf-table--compact wf-performer-table">
        <thead><tr>
          <th>#</th><th>Executive</th>
          <th class="wf-table__num">Assigned</th>
          <th class="wf-table__num">Converted</th>
          <th class="wf-table__num">Rate</th>
        </tr></thead>
        <tbody>${data.map((r, i) => `
          <tr>
            <td>${i + 1}</td>
            <td><span class="wf-avatar wf-avatar--sm" aria-hidden="true">${esc(r.initials)}</span> ${esc(r.name)}</td>
            <td class="wf-table__num">${esc(String(r.assigned))}</td>
            <td class="wf-table__num">${esc(String(r.converted))}</td>
            <td class="wf-table__num">${esc(r.rate)}</td>
          </tr>
        `).join("")}</tbody>
      </table>
    </div>`;
  }

  function leadRecentActivity(items) {
    const list = items || [];
    return `<div class="wf-lead-activity">${list.map((a) => `
      <div class="wf-lead-activity__item">
        <span class="wf-lead-activity__icon wf-lead-activity__icon--${esc(a.type || "update")}" aria-hidden="true"></span>
        <div class="wf-lead-activity__body">
          <div class="wf-lead-activity__text">${a.html || esc(a.text)}</div>
          <div class="wf-lead-activity__time">${esc(a.ago)}</div>
        </div>
      </div>
    `).join("")}</div>`;
  }

  function brandLeadCards(brands) {
    const data = brands || [];
    return `<div class="wf-brand-count-grid">${data.map((b) => `
      <a href="${screenHref("list")}" data-screen="list" class="wf-brand-count-card">
        <span class="wf-brand-count-card__name">${esc(b.name)}</span>
        <span class="wf-brand-count-card__value">${esc(String(b.count))}</span>
        <span class="wf-brand-count-card__sub">leads</span>
      </a>
    `).join("")}</div>`;
  }

  function reportDataTable(columns, rows) {
    const cols = columns || ["Column A", "Column B", "Column C"];
    const data = rows || [["—", "—", "—"]];
    return `<div class="wf-table-wrap"><table class="wf-table wf-report-table"><thead><tr>
      ${cols.map((c) => `<th>${esc(c)}</th>`).join("")}
    </tr></thead><tbody>${data.map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}
    </tbody></table>${pagination(data.length > 6 ? 48 : data.length)}</div>`;
  }

  function comparisonToggle(active) {
    return `<div class="wf-comparison-bar wf-mb-16">
      <span style="font-size:12px;font-weight:600;margin-right:8px">Compare:</span>
      <button type="button" class="wf-btn wf-btn--sm${active === "period" ? " wf-btn--primary" : ""}">vs Previous Period</button>
      <button type="button" class="wf-btn wf-btn--sm${active === "brand" ? " wf-btn--primary" : ""}">vs Brand</button>
      <button type="button" class="wf-btn wf-btn--sm${active === "city" ? " wf-btn--primary" : ""}">vs City</button>
    </div>`;
  }

  function reportForm() {
    const d = typeof ANALYTICS_DATA !== "undefined" ? ANALYTICS_DATA : { reportTypes: [], dimensions: [], metrics: [] };
    const opt = (arr) => (arr || []).map((v) => `<option>${esc(v)}</option>`).join("");
    return `<form class="wf-form" id="wf-report-form">
      <div class="wf-form__section"><div class="wf-form__section-title">Report Configuration</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Report Name</label><input class="wf-form__input" placeholder="Q2 Sales by Brand"></div>
          <div class="wf-form__group"><label class="wf-form__label">Report Type</label><select class="wf-form__select">${opt(d.reportTypes)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Date Range</label><select class="wf-form__select"><option>Last 30 days</option><option>Last Quarter</option><option>Custom</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Dimension</label><select class="wf-form__select">${opt(d.dimensions)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Metric</label><select class="wf-form__select">${opt(d.metrics)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Chart Type</label><select class="wf-form__select"><option>Bar Chart</option><option>Line Chart</option><option>Pie Chart</option><option>Table</option><option>Pivot Table</option></select></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Filters</label>
            <div class="wf-form__grid wf-form__grid--3">
              <select class="wf-form__select"><option>Brand: All</option></select>
              <select class="wf-form__select"><option>City: All</option></select>
              <select class="wf-form__select"><option>Sales Executive: All</option></select>
            </div>
          </div>
        </div>
      </div>
      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-action="cancel-form">Cancel</button>
        <button type="button" class="wf-btn">Preview</button>
        <button type="submit" class="wf-btn wf-btn--primary">Save Report</button>
      </div>
    </form>`;
  }

  function workflowNode(type, label, opts = {}) {
    const { selected = false, id = "" } = opts;
    const icons = { trigger: "⚡", condition: "◇", action: "▶", delay: "⏱", end: "■" };
    return `<div class="wf-node wf-node--${type}${selected ? " wf-node--selected" : ""}"${id ? ` data-node="${esc(id)}"` : ""} draggable="true">
      <div class="wf-node__header"><span class="wf-node__icon">${icons[type] || "●"}</span><span class="wf-node__type">${esc(type)}</span></div>
      <div class="wf-node__body">${esc(label)}</div>
      <div class="wf-node__port wf-node__port--in"></div>
      <div class="wf-node__port wf-node__port--out"></div>
    </div>`;
  }

  function nodePalette(items, title) {
    return `<div class="wf-palette">
      <div class="wf-palette__title">${esc(title)}</div>
      <div class="wf-palette__search"><input type="text" class="wf-form__input" placeholder="Search…" style="font-size:12px"></div>
      <div class="wf-palette__list">${items.map((item) => `<div class="wf-palette__item" draggable="true" title="Drag to canvas">${esc(item)}</div>`).join("")}</div>
    </div>`;
  }

  function propertiesPanel(props) {
    const rows = (props || []).map(([k, v]) => `<div class="wf-props__row"><span class="wf-props__key">${esc(k)}</span><span class="wf-props__val">${v}</span></div>`).join("");
    return `<aside class="wf-builder__props">
      <div class="wf-props__header"><span>Properties</span><button class="wf-btn wf-btn--sm" data-action="validate-workflow">Validate</button></div>
      <div class="wf-props__section"><div class="wf-props__section-title">Selected Node</div>${rows || '<div class="wf-empty" style="padding:12px;font-size:12px">Select a node on canvas</div>'}</div>
      <div class="wf-props__section"><div class="wf-props__section-title">Validation</div>
        <div class="wf-props__check wf-props__check--ok">Trigger configured</div>
        <div class="wf-props__check wf-props__check--ok">No infinite loops</div>
        <div class="wf-props__check wf-props__check--ok">All actions connected</div>
        <div class="wf-props__check wf-props__check--warn">Note: Email template not set</div>
      </div>
      <div class="wf-props__section"><div class="wf-props__section-title">Version History</div>
        <div class="wf-timeline" style="padding:0 8px">
          <div class="wf-timeline__item"><span class="wf-timeline__dot"></span><div><strong>v3</strong> · 25 Jun · Himani Bhargava<br><span style="font-size:11px;color:var(--wf-text-muted)">Added delay node</span></div></div>
          <div class="wf-timeline__item"><span class="wf-timeline__dot"></span><div><strong>v2</strong> · 20 Jun · Automation Admin<br><span style="font-size:11px;color:var(--wf-text-muted)">Condition branch</span></div></div>
        </div>
      </div>
    </aside>`;
  }

  function workflowBuilder(options = {}) {
    const { workflowName = "Lead Follow-up — Odette Bengaluru", status = "Draft" } = options;
    const triggerList = (typeof AUTOMATION_DATA !== "undefined" ? AUTOMATION_DATA.triggers : ["Lead Created", "Payment Due"]);
    const actionList = (typeof AUTOMATION_DATA !== "undefined" ? AUTOMATION_DATA.actions : ["Send Email", "Create Task"]);
    const states = (typeof AUTOMATION_DATA !== "undefined" && AUTOMATION_DATA.workflowStates) || ["Draft", "Testing", "Active", "Paused", "Completed", "Archived"];
    return `<div class="wf-builder">
      <div class="wf-builder__toolbar">
        <div class="wf-builder__toolbar-left">
          <button class="wf-btn wf-btn--sm" data-screen="workflow-list">← Back</button>
          <strong style="font-size:14px;margin:0 12px">${esc(workflowName)}</strong>
          <span class="wf-badge">${esc(status)}</span>
        </div>
        <div class="wf-builder__toolbar-center">
          <button class="wf-btn wf-btn--sm" data-action="undo" title="Undo">↶ Undo</button>
          <button class="wf-btn wf-btn--sm" data-action="redo" title="Redo">↷ Redo</button>
          <span style="width:1px;height:20px;background:var(--wf-border);margin:0 8px"></span>
          <button class="wf-btn wf-btn--sm" data-action="validate-workflow">Validate</button>
          <button class="wf-btn wf-btn--sm" data-screen="testing">Test Run</button>
          <button class="wf-btn wf-btn--sm wf-btn--primary" data-modal="activate-workflow">Activate</button>
        </div>
        <div class="wf-builder__toolbar-right">
          <button class="wf-btn wf-btn--sm">Import</button>
          <button class="wf-btn wf-btn--sm">Export</button>
          <button class="wf-btn wf-btn--sm" data-screen="details">Details</button>
        </div>
      </div>
      ${workflowStepper(status, states)}
      <div class="wf-builder__main">
        <div class="wf-builder__side">
          ${nodePalette(triggerList.slice(0, 10), "Triggers")}
          ${nodePalette(actionList.slice(0, 10), "Actions")}
          <div style="padding:8px"><button class="wf-btn wf-btn--sm" data-screen="triggers" style="width:100%">All Triggers →</button>
          <button class="wf-btn wf-btn--sm wf-mt-8" data-screen="actions" style="width:100%">All Actions →</button></div>
        </div>
        <div class="wf-builder__canvas-wrap">
          <div class="wf-builder__canvas" id="wf-workflow-canvas">
            <div class="wf-canvas__grid"></div>
            <div class="wf-canvas__nodes">
              <div class="wf-canvas__col">
                ${workflowNode("trigger", "Lead Created", { id: "n1" })}
                <div class="wf-canvas__connector"></div>
                ${workflowNode("condition", "City = Bengaluru AND Brand = Odette", { id: "n2" })}
                <div class="wf-canvas__connector"></div>
                ${workflowNode("action", "Send Email — Welcome Template", { selected: true, id: "n3" })}
                <div class="wf-canvas__connector"></div>
                ${workflowNode("action", "Assign User — Himani Bhargava", { id: "n4" })}
                <div class="wf-canvas__connector"></div>
                ${workflowNode("delay", "Wait 2 days", { id: "n5" })}
                <div class="wf-canvas__connector"></div>
                ${workflowNode("action", "Create Task — Follow-up Call", { id: "n6" })}
                <div class="wf-canvas__connector"></div>
                ${workflowNode("end", "End Workflow", { id: "n7" })}
              </div>
              <div class="wf-canvas__branch">
                <div class="wf-canvas__branch-label">Else</div>
                ${workflowNode("action", "Notify Manager", { id: "n8" })}
                <div class="wf-canvas__connector"></div>
                ${workflowNode("end", "End Workflow", { id: "n9" })}
              </div>
            </div>
          </div>
          <div class="wf-builder__zoom">
            <button class="wf-btn wf-btn--sm">−</button>
            <span>100%</span>
            <button class="wf-btn wf-btn--sm">+</button>
            <button class="wf-btn wf-btn--sm">Fit</button>
          </div>
          <div class="wf-builder__minimap">
            <div class="wf-minimap__title">Mini Map</div>
            <div class="wf-minimap__view"><div class="wf-minimap__nodes"></div><div class="wf-minimap__viewport"></div></div>
          </div>
        </div>
        ${propertiesPanel([
          ["Node", "Send Email"],
          ["Template", "Customer Welcome"],
          ["To", "{{lead.email}}"],
          ["Brand", "Odette"],
          ["Delay", "Immediate"]
        ])}
      </div>
    </div>`;
  }

  function workflowTable(workflows, options = {}) {
    const { selectable = true, showActions = true } = options;
    const rows = workflows.map((w) => `
      <tr>
        ${selectable ? '<td><span class="wf-table__checkbox"></span></td>' : ""}
        <td><a href="#" data-screen="details" style="font-weight:600;color:inherit">${esc(w.name)}</a><br><span style="font-size:11px;color:var(--wf-text-muted)">${esc(w.id)}</span></td>
        <td>${esc(w.trigger)}</td>
        <td><span class="wf-badge${w.status === "Active" ? " wf-badge--dark" : ""}">${esc(w.status)}</span></td>
        <td>${esc(w.brand)}</td>
        <td>${esc(w.city)}</td>
        <td>${w.executions}</td>
        <td>${w.successRate}%</td>
        <td>${esc(w.owner)}</td>
        <td>${esc(w.updated)}</td>
        ${showActions ? `<td class="wf-table__actions">
          <button class="wf-btn wf-btn--sm" data-screen="builder">Edit</button>
          <button class="wf-btn wf-btn--sm" data-screen="details">View</button>
          <button class="wf-btn wf-btn--sm" data-screen="testing">Test</button>
        </td>` : ""}
      </tr>`).join("");
    return `<div class="wf-table-wrap"><table class="wf-table">
      <thead><tr>
        ${selectable ? "<th></th>" : ""}
        <th>Workflow</th><th>Trigger</th><th>Status</th><th>Brand</th><th>City</th><th>Runs</th><th>Success</th><th>Owner</th><th>Updated</th>
        ${showActions ? "<th>Actions</th>" : ""}
      </tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
  }

  function executionTable(executions, options = {}) {
    const { showError = false } = options;
    const rows = executions.map((e) => `
      <tr${e.status === "Failed" ? ' style="background:var(--wf-surface-alt)"' : ""}>
        <td>${esc(e.id)}</td>
        <td><a href="#" data-screen="details" style="font-weight:600;color:inherit">${esc(e.workflow)}</a></td>
        <td>${esc(e.trigger)}</td>
        <td><span class="wf-badge${e.status === "Failed" ? "" : " wf-badge--dark"}">${esc(e.status)}</span></td>
        <td>${esc(e.started)}</td>
        <td>${e.duration}</td>
        <td>${esc(e.brand)}</td>
        <td>${esc(e.city)}</td>
        ${showError ? `<td style="color:var(--wf-text-secondary);font-size:12px">${esc(e.error || "—")}</td>` : ""}
        <td class="wf-table__actions">
          <button class="wf-btn wf-btn--sm" data-screen="execution-history">Log</button>
          ${e.status === "Failed" ? '<button class="wf-btn wf-btn--sm">Retry</button>' : ""}
        </td>
      </tr>`).join("");
    return `<div class="wf-table-wrap"><table class="wf-table">
      <thead><tr>
        <th>Execution ID</th><th>Workflow</th><th>Trigger</th><th>Status</th><th>Started</th><th>Duration</th><th>Brand</th><th>City</th>
        ${showError ? "<th>Error</th>" : ""}
        <th>Actions</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
  }

  function workflowForm(workflow, mode = "create") {
    const w = workflow || {};
    const triggers = (typeof AUTOMATION_DATA !== "undefined" ? AUTOMATION_DATA.triggers : ["Lead Created"]);
    const brands = (typeof AUTOMATION_DATA !== "undefined" ? AUTOMATION_DATA.brands : ["Odette"]);
    const cities = (typeof AUTOMATION_DATA !== "undefined" ? AUTOMATION_DATA.cities : ["Bengaluru"]);
    const users = (typeof AUTOMATION_DATA !== "undefined" ? AUTOMATION_DATA.users : ["Himani Bhargava"]);
    return `<form class="wf-form" id="wf-workflow-form" data-mode="${mode}">
      <div class="wf-form__grid">
        <div class="wf-form__group"><label class="wf-form__label">Workflow Name *</label><input class="wf-form__input" value="${esc(w.name || "")}" placeholder="e.g. Lead Follow-up — Odette"></div>
        <div class="wf-form__group"><label class="wf-form__label">Trigger *</label><select class="wf-form__select"><option>${esc(w.trigger || "Lead Created")}</option>${triggers.map((t) => `<option>${esc(t)}</option>`).join("")}</select></div>
        <div class="wf-form__group"><label class="wf-form__label">Brand</label><select class="wf-form__select"><option>All Brands</option>${brands.map((b) => `<option${b === w.brand ? " selected" : ""}>${esc(b)}</option>`).join("")}</select></div>
        <div class="wf-form__group"><label class="wf-form__label">City</label><select class="wf-form__select"><option>All Cities</option>${cities.map((c) => `<option>${esc(c)}</option>`).join("")}</select></div>
        <div class="wf-form__group"><label class="wf-form__label">Owner</label><select class="wf-form__select">${users.map((u) => `<option${u === w.owner ? " selected" : ""}>${esc(u)}</option>`).join("")}</select></div>
        <div class="wf-form__group"><label class="wf-form__label">Priority</label><select class="wf-form__select"><option>Normal</option><option>High</option><option>Critical</option></select></div>
        <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Description</label><textarea class="wf-form__textarea" placeholder="Workflow purpose and business rules…">${esc(w.description || "")}</textarea></div>
      </div>
      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-action="cancel-form">Cancel</button>
        <button type="button" class="wf-btn" data-screen="builder">Open Builder</button>
        <button type="submit" class="wf-btn wf-btn--primary">${mode === "edit" ? "Save Changes" : "Create & Open Builder"}</button>
      </div>
    </form>`;
  }

  function conditionBuilder() {
    const conditions = (typeof AUTOMATION_DATA !== "undefined" ? AUTOMATION_DATA.conditions : ["If / Else", "AND", "OR"]);
    return `<div class="wf-condition-builder">
      <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Condition Group 1</span><select class="wf-form__select" style="width:auto;font-size:12px"><option>AND</option><option>OR</option></select></div>
        <div class="wf-card__body">
          <div class="wf-form__grid" style="grid-template-columns:1fr 120px 1fr auto">
            <select class="wf-form__select"><option>City</option><option>Brand</option><option>Amount</option><option>Status</option><option>Role</option></select>
            <select class="wf-form__select"><option>=</option><option>≠</option><option>&gt;</option><option>&lt;</option><option>contains</option></select>
            <input class="wf-form__input" value="Bengaluru" placeholder="Value">
            <button class="wf-btn wf-btn--sm">×</button>
          </div>
          <div class="wf-form__grid wf-mt-16" style="grid-template-columns:1fr 120px 1fr auto">
            <select class="wf-form__select"><option>Brand</option></select>
            <select class="wf-form__select"><option>=</option></select>
            <input class="wf-form__input" value="Odette">
            <button class="wf-btn wf-btn--sm">×</button>
          </div>
          <button class="wf-btn wf-btn--sm wf-mt-16">+ Add Condition</button>
        </div>
      </div>
      <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Else Branch</span></div>
        <div class="wf-card__body" style="font-size:13px;color:var(--wf-text-secondary)">Actions in else branch execute when conditions above are not met. Configure in Workflow Builder.</div>
      </div>
      <div class="wf-mt-16" style="font-size:12px;color:var(--wf-text-muted)">Available: ${conditions.map((c) => esc(c)).join(" · ")}</div>
    </div>`;
  }

  function automationModals() {
    return modals()
      .replace(/Customers/g, "Workflows")
      .replace(/Customer/g, "Workflow")
      .replace(/Rahul Sharma \(CUS-2024-001\)/, "WF-2024-012 Lead Follow-up Odette")
      + `
    <div class="wf-modal-overlay" id="modal-activate-workflow">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Activate Workflow</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><p style="font-size:13px;margin-bottom:16px">Validation passed. Activate this workflow for production?</p>
          <div class="wf-props__check wf-props__check--ok">Trigger: Lead Created</div>
          <div class="wf-props__check wf-props__check--ok">6 actions configured</div>
          <div class="wf-props__check wf-props__check--ok">Permissions verified</div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-activate-workflow">Activate</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-test-workflow">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Test Workflow</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><div class="wf-form__group"><label class="wf-form__label">Test Data</label><select class="wf-form__select"><option>Sample Lead — Rahul Sharma</option><option>Sample Customer — Priya Nair</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Environment</label><select class="wf-form__select"><option>Sandbox</option><option>Staging</option></select></div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-test-workflow">Run Test</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-pause-workflow">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Pause Workflow</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><p style="font-size:13px">Queued jobs will complete. New triggers will not fire until resumed.</p></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-pause-workflow">Pause</button></div>
      </div>
    </div>`;
  }

  function userTable(users, options = {}) {
    const { selectable = true, showActions = true } = options;
    const rows = users.map((u) => `
      <tr>
        ${selectable ? '<td><span class="wf-table__checkbox"></span></td>' : ""}
        <td><a href="#" data-screen="profile" style="font-weight:600;color:inherit">${esc(u.name)}</a><br><span style="font-size:11px;color:var(--wf-text-muted)">${esc(u.employeeId)}</span></td>
        <td>${esc(u.email)}</td>
        <td>${esc(u.role)}</td>
        <td>${esc(u.department)}</td>
        <td>${esc(u.team)}</td>
        <td>${esc(u.city)}</td>
        <td><span class="wf-badge${u.status === "Active" ? " wf-badge--dark" : ""}">${esc(u.status)}</span></td>
        <td>${esc(u.manager)}</td>
        ${showActions ? `<td class="wf-table__actions">
          <button class="wf-btn wf-btn--sm" data-screen="profile">View</button>
          <button class="wf-btn wf-btn--sm" data-screen="edit">Edit</button>
        </td>` : ""}
      </tr>`).join("");
    return `<div class="wf-table-wrap"><table class="wf-table">
      <thead><tr>
        ${selectable ? "<th></th>" : ""}
        <th>Employee</th><th>Email</th><th>Role</th><th>Department</th><th>Team</th><th>City</th><th>Status</th><th>Manager</th>
        ${showActions ? "<th>Actions</th>" : ""}
      </tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
  }

  function userProfileCard(user) {
    const u = user || (typeof USER_DATA !== "undefined" ? USER_DATA.users[0] : { name: "Employee", employeeId: "EMP-001", status: "Active", email: "", phone: "", city: "", department: "", team: "", role: "", manager: "" });
    return `<div class="wf-card">
      <div class="wf-card__body" style="text-align:center">
        <div class="wf-avatar-lg"></div>
        <div style="font-size:16px;font-weight:600">${esc(u.name)}</div>
        <div style="font-size:12px;color:var(--wf-text-muted)">${esc(u.employeeId)} · ${esc(u.designation || u.role)}</div>
        <div style="margin-top:8px"><span class="wf-badge wf-badge--dark">${esc(u.status)}</span></div>
      </div>
      <div class="wf-card__body" style="padding-top:0">
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Email</span><span class="wf-detail-info__value">${esc(u.email)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Mobile</span><span class="wf-detail-info__value">${esc(formatPhone(u.phone))}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Department</span><span class="wf-detail-info__value">${esc(u.department)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Team</span><span class="wf-detail-info__value">${esc(u.team)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Office</span><span class="wf-detail-info__value">${esc(u.city)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Reports To</span><span class="wf-detail-info__value">${esc(u.manager)}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Joined</span><span class="wf-detail-info__value">${esc(u.joiningDate || "—")}</span></div>
      </div>
      <div class="wf-card__footer" style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center">
        <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
        <button data-screen="hierarchy" class="wf-btn wf-btn--sm">Hierarchy</button>
        <button data-modal="send-email" class="wf-btn wf-btn--sm wf-btn--primary">Contact</button>
      </div>
    </div>`;
  }

  function userForm(user, mode = "create") {
    const u = user || {};
    const isEdit = mode === "edit";
    const d = typeof USER_DATA !== "undefined" ? USER_DATA : {};
    const opt = (arr, selected) => (arr || []).map((v) => `<option${v === selected ? " selected" : ""}>${esc(v)}</option>`).join("");
    return `<form class="wf-form" id="wf-user-form" data-mode="${mode}">
      <div class="wf-form__section"><div class="wf-form__section-title">Identity</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Employee ID</label><input class="wf-form__input" value="${esc(u.employeeId || "Auto-generated")}" ${isEdit ? "" : "readonly"}></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Full Name</label><input class="wf-form__input" value="${esc(u.name || "")}" required></div>
          <div class="wf-form__group"><label class="wf-form__label">Profile Photo</label><input type="file" class="wf-form__input"></div>
          <div class="wf-form__group"><label class="wf-form__label">Gender</label><select class="wf-form__select"><option>Male</option><option>Female</option><option>Other</option><option>Prefer not to say</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Date of Birth</label><input type="date" class="wf-form__input" value="${esc(u.dob || "")}"></div>
        </div>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Contact</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Mobile Number</label><input class="wf-form__input" type="tel" data-phone-input value="${esc(formatPhone(u.phone || ""))}" placeholder="${PHONE_FORMAT}" required></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Email</label><input type="email" class="wf-form__input" value="${esc(u.email || "")}" required></div>
          <div class="wf-form__group"><label class="wf-form__label">Emergency Contact</label><input class="wf-form__input" value="${esc(formatPhoneInText(u.emergencyContact || ""))}" placeholder="Name — ${PHONE_FORMAT}"></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Address</label><input class="wf-form__input" value="${esc(u.address || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">City</label><select class="wf-form__select">${opt(d.cities || shared("cities"), u.city)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">State</label><select class="wf-form__select">${opt(d.states || shared("states"), u.state)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Country</label><select class="wf-form__select"><option selected>India</option></select></div>
        </div>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Employment</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Department</label><select class="wf-form__select">${opt(d.departments, u.department)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Team</label><select class="wf-form__select">${opt((d.teams || []).map((t) => t.name), u.team)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Designation</label><input class="wf-form__input" value="${esc(u.designation || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Manager</label><select class="wf-form__select">${opt(d.users?.map((x) => x.name) || shared("users"), u.manager)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Reporting To</label><select class="wf-form__select">${opt(d.users?.map((x) => x.name) || shared("users"), u.reportsTo || u.manager)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Role</label><select class="wf-form__select">${opt(d.roles, u.role)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Employment Type</label><select class="wf-form__select"><option${u.employmentType === "Full-time" ? " selected" : ""}>Full-time</option><option>Part-time</option><option>Contract</option><option>Intern</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Joining Date</label><input type="date" class="wf-form__input" value="${esc(u.joiningDate || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Employee Status</label><select class="wf-form__select">${opt(d.userStatuses, u.status)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Office Location</label><select class="wf-form__select">${opt(d.offices, u.city)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Shift Timing</label><select class="wf-form__select"><option>9:00 AM – 6:00 PM</option><option>10:00 AM – 7:00 PM</option><option>Flexible</option></select></div>
        </div>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Skills & Compliance</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Skills</label><input class="wf-form__input" value="${esc((u.skills || []).join(", "))}" placeholder="Comma-separated"></div>
          <div class="wf-form__group"><label class="wf-form__label">Certifications</label><input class="wf-form__input" value="${esc((u.certifications || []).join(", "))}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Languages</label><input class="wf-form__input" value="${esc((u.languages || []).join(", "))}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Identity Proof</label><select class="wf-form__select"><option>Aadhaar</option><option>PAN</option><option>Passport</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Bank Details</label><input class="wf-form__input" placeholder="Account number (masked)" value="${esc(u.bankAccount || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Salary Grade</label><select class="wf-form__select"><option>L1</option><option>L2</option><option>L3</option><option>L4</option><option>L5</option></select></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Notes</label><textarea class="wf-form__textarea" placeholder="Internal HR notes…">${esc(u.notes || "")}</textarea></div>
        </div>
      </div>
      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-screen="directory">Cancel</button>
        <button type="submit" class="wf-btn wf-btn--primary">${isEdit ? "Save Changes" : "Create Employee"}</button>
      </div>
    </form>`;
  }

  function orgChart(tree) {
    const renderNode = (node) => {
      const children = node.children && node.children.length
        ? `<div class="wf-org__children">${node.children.map(renderNode).join("")}</div>`
        : "";
      return `<div class="wf-org__node-wrap">
        <div class="wf-org__node" data-screen="profile">
          <div class="wf-org__avatar"></div>
          <div class="wf-org__name">${esc(node.name)}</div>
          <div class="wf-org__title">${esc(node.title)}</div>
        </div>
        ${children}
      </div>`;
    };
    const root = tree || (typeof USER_DATA !== "undefined" ? USER_DATA.orgChart : { name: "Abdul Syed", title: "CEO", children: [{ name: "Abrar", title: "Co-Founder", children: [] }] });
    return `<div class="wf-org">${renderNode(root)}</div>`;
  }

  function hierarchyTree(nodes) {
    const items = nodes || (typeof USER_DATA !== "undefined" ? USER_DATA.hierarchy : []);
    const render = (list, depth = 0) => list.map((n) => `
      <div class="wf-hierarchy__item" style="padding-left:${depth * 20}px">
        <span class="wf-hierarchy__toggle">▾</span>
        <a href="#" data-screen="profile" class="wf-hierarchy__link">${esc(n.name)}</a>
        <span class="wf-hierarchy__meta">${esc(n.title)} · ${esc(n.department)}</span>
        ${n.children ? render(n.children, depth + 1) : ""}
      </div>`).join("");
    return `<div class="wf-hierarchy">${render(items)}</div>`;
  }

  function departmentGrid(departments) {
    const depts = departments || (typeof USER_DATA !== "undefined" ? USER_DATA.departmentStats : []);
    return `<div class="wf-card-grid" style="grid-template-columns:repeat(4,1fr)">
      ${depts.map((d) => `<div class="wf-card" data-screen="directory" style="cursor:pointer"><div class="wf-card__body" style="padding:20px">
        <div style="font-size:15px;font-weight:600;margin-bottom:4px">${esc(d.name)}</div>
        <div style="font-size:24px;font-weight:700;margin:8px 0">${d.headcount}</div>
        <div style="font-size:12px;color:var(--wf-text-muted)">Head: ${esc(d.head)} · ${d.teams} teams</div>
        <button class="wf-btn wf-btn--sm wf-mt-16" data-screen="teams">View Teams</button>
      </div></div>`).join("")}
    </div>`;
  }

  function teamGrid(teams) {
    const list = teams || (typeof USER_DATA !== "undefined" ? USER_DATA.teams : []);
    return `<div class="wf-card-grid" style="grid-template-columns:repeat(3,1fr)">
      ${list.map((t) => `<div class="wf-card"><div class="wf-card__body" style="padding:20px">
        <div style="font-size:15px;font-weight:600">${esc(t.name)}</div>
        <div style="font-size:12px;color:var(--wf-text-muted);margin:4px 0">${esc(t.department)} · Lead: ${esc(t.lead)}</div>
        <div style="font-size:13px;margin:8px 0">${t.members} members · ${esc(t.city)}</div>
        <button class="wf-btn wf-btn--sm" data-screen="directory">View Members</button>
        <button class="wf-btn wf-btn--sm" data-screen="org-chart">Org Chart</button>
      </div></div>`).join("")}
    </div>`;
  }

  function activityFeed(items) {
    const list = items || [];
    return `<div class="wf-activity-feed">
      ${list.map((a) => `<div class="wf-activity-feed__item">
        <div class="wf-activity-feed__dot" aria-hidden="true"></div>
        <div class="wf-activity-feed__content">
          <div class="wf-activity-feed__title">${esc(a.title)}</div>
          <div class="wf-activity-feed__meta">${esc(a.user)} · ${esc(a.time)}</div>
          ${a.desc ? `<div class="wf-activity-feed__desc">${esc(a.desc)}</div>` : ""}
        </div>
      </div>`).join("")}
    </div>`;
  }

  function userModals() {
    return modals()
      .replace(/Customers/g, "Employees")
      .replace(/Customer/g, "Employee")
      .replace(/Rahul Sharma \(CUS-2024-001\)/, "Himani Bhargava (EMP-2022-014)")
      + `
    <div class="wf-modal-overlay" id="modal-invite-user">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Invite User</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Email *</label><input type="email" class="wf-form__input" placeholder="employee@company.com"></div>
          <div class="wf-form__group"><label class="wf-form__label">Role</label><select class="wf-form__select"><option>Sales Executive</option><option>Team Lead</option><option>Operations Manager</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Department</label><select class="wf-form__select"><option>Sales</option><option>Operations</option><option>HR</option></select></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Welcome Message</label><textarea class="wf-form__textarea" placeholder="Optional message in invitation email…"></textarea></div>
        </div></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-invite-user">Send Invite</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-deactivate-user">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Deactivate User</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <p style="font-size:13px;margin-bottom:12px">Deactivate Himani Bhargava (EMP-2022-014)? User will lose system access. Assigned leads will be reassigned.</p>
          <div class="wf-form__group"><label class="wf-form__label">Reason</label><select class="wf-form__select"><option>Resignation</option><option>Termination</option><option>Leave of absence</option><option>Other</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Reassign To</label><select class="wf-form__select"><option>Diksha</option><option>Abrar</option><option>Abdul Syed</option></select></div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-deactivate-user">Deactivate</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-bulk-import">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Bulk Import Users</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <div class="wf-form__group"><label class="wf-form__label">Upload CSV / Excel</label><input type="file" class="wf-form__input" accept=".csv,.xlsx"></div>
          <div style="font-size:12px;color:var(--wf-text-muted);margin-top:8px">Required columns: Employee ID, Name, Email, Phone, Department, Role, City</div>
          <button class="wf-btn wf-btn--sm wf-mt-16">Download Template</button>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-bulk-import">Start Import</button></div>
      </div>
    </div>`;
  }

  function permissionMatrix(options = {}) {
    const {
      modules = (typeof ROLES_DATA !== "undefined" ? ROLES_DATA.modules : ["Dashboard", "Leads", "Customers"]),
      columns = (typeof ROLES_DATA !== "undefined" ? ROLES_DATA.matrixColumns : ["View", "Create", "Edit", "Delete"]),
      grants = {},
      editable = true,
      compact = false
    } = options;
    const cell = (mod, col) => {
      const key = mod + ":" + col;
      const on = grants[key] !== false && (grants[key] || ["View", "Create", "Edit"].includes(col) && ["Dashboard", "Lead Management", "Customer Management"].includes(mod));
      const disabled = !editable ? " disabled" : "";
      const checked = on ? " checked" : "";
      return `<td class="wf-perm-matrix__cell"><input type="checkbox" class="wf-perm-matrix__cb"${checked}${disabled} aria-label="${esc(mod)} ${esc(col)}"></td>`;
    };
    const header = columns.map((c) => `<th class="wf-perm-matrix__col">${esc(c)}</th>`).join("");
    const rows = modules.map((mod) => `
      <tr>
        <td class="wf-perm-matrix__module">${esc(mod)}</td>
        ${columns.map((col) => cell(mod, col)).join("")}
      </tr>`).join("");
    return `<div class="wf-perm-matrix-wrap${compact ? " wf-perm-matrix-wrap--compact" : ""}">
      <table class="wf-perm-matrix">
        <thead><tr><th class="wf-perm-matrix__module">Module</th>${header}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
  }

  function roleTable(roles, options = {}) {
    const { selectable = true, showActions = true } = options;
    const rows = roles.map((r) => `
      <tr>
        ${selectable ? '<td><span class="wf-table__checkbox"></span></td>' : ""}
        <td>
          <span class="wf-role-color" style="background:${esc(r.color || "#888")}"></span>
          <a href="#" data-screen="details" style="font-weight:600;color:inherit">${esc(r.name)}</a>
          ${r.isCustom ? '<span class="wf-badge" style="margin-left:6px">Custom</span>' : ""}
          <br><span style="font-size:11px;color:var(--wf-text-muted)">${esc(r.id)}</span>
        </td>
        <td>${esc(r.department || "—")}</td>
        <td>${r.users}</td>
        <td>${r.permissions}</td>
        <td>${esc(r.parent || "—")}</td>
        <td><span class="wf-badge${r.status === "Active" ? " wf-badge--dark" : ""}">${esc(r.status)}</span></td>
        <td>${esc(r.updated)}</td>
        ${showActions ? `<td class="wf-table__actions">
          <button class="wf-btn wf-btn--sm" data-screen="permission-matrix">Matrix</button>
          <button class="wf-btn wf-btn--sm" data-screen="edit">Edit</button>
          <button class="wf-btn wf-btn--sm" data-screen="clone">Clone</button>
        </td>` : ""}
      </tr>`).join("");
    return `<div class="wf-table-wrap"><table class="wf-table">
      <thead><tr>
        ${selectable ? "<th></th>" : ""}
        <th>Role</th><th>Department</th><th>Users</th><th>Permissions</th><th>Parent Role</th><th>Status</th><th>Updated</th>
        ${showActions ? "<th>Actions</th>" : ""}
      </tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
  }

  function roleForm(role, mode = "create") {
    const r = role || {};
    const d = typeof ROLES_DATA !== "undefined" ? ROLES_DATA : {};
    const opt = (arr, sel) => (arr || []).map((v) => `<option${v === sel ? " selected" : ""}>${esc(v)}</option>`).join("");
    const isEdit = mode === "edit";
    return `<form class="wf-form" id="wf-role-form" data-mode="${mode}">
      <div class="wf-form__section"><div class="wf-form__section-title">Role Definition</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Role Name</label><input class="wf-form__input" value="${esc(r.name || "")}" required></div>
          <div class="wf-form__group"><label class="wf-form__label">Department</label><select class="wf-form__select">${opt(d.departments, r.department)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Priority</label><select class="wf-form__select"><option>Low</option><option selected>Normal</option><option>High</option><option>Critical</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Role Color</label><input type="color" class="wf-form__input" value="${r.color || "#666666"}" style="height:38px;padding:4px"></div>
          <div class="wf-form__group"><label class="wf-form__label">Parent Role</label><select class="wf-form__select"><option>—</option>${opt(d.systemRoles, r.parent)}</select></div>
          <div class="wf-form__group"><label class="wf-form__label">Default Dashboard</label><select class="wf-form__select"><option>Executive Dashboard</option><option>Sales Dashboard</option><option>Operations Dashboard</option></select></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Description</label><textarea class="wf-form__textarea">${esc(r.description || "")}</textarea></div>
        </div>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Accessible Modules</div>
        <div class="wf-form__grid wf-form__grid--3" style="font-size:13px">
          ${(d.modules || []).slice(0, 12).map((m) => `<label><input type="checkbox" checked> ${esc(m)}</label>`).join("")}
        </div>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Permissions Matrix</div>
        ${permissionMatrix({ editable: true, compact: true })}
        <button type="button" class="wf-btn wf-btn--sm wf-mt-16" data-action="validate-permissions">Validate Permissions</button>
      </div>
      <div class="wf-form__section"><div class="wf-form__section-title">Security Policies</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">API Access</label><select class="wf-form__select"><option>Full</option><option>Read Only</option><option>None</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Storage Access</label><select class="wf-form__select"><option>Full</option><option>Department</option><option>Own Files</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Session Timeout</label><select class="wf-form__select"><option>30 min</option><option>1 hour</option><option>8 hours</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label"><input type="checkbox"> MFA Required</label></div>
          <div class="wf-form__group"><label class="wf-form__label">IP Restrictions</label><input class="wf-form__input" placeholder="e.g. 103.0.0.0/8"></div>
          <div class="wf-form__group"><label class="wf-form__label">Allowed Locations</label><select class="wf-form__select" multiple style="height:80px"><option>Bengaluru</option><option>Hyderabad</option><option>Mumbai</option></select></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Notes</label><textarea class="wf-form__textarea" placeholder="Internal security notes…"></textarea></div>
        </div>
      </div>
      <div class="wf-form__actions">
        <button type="button" class="wf-btn" data-screen="roles-list">Cancel</button>
        <button type="button" class="wf-btn" data-screen="permission-matrix">Preview Matrix</button>
        <button type="submit" class="wf-btn wf-btn--primary">${isEdit ? "Save Role" : "Create Role"}</button>
      </div>
    </form>`;
  }

  function roleDetailCard(role) {
    const r = role || (typeof ROLES_DATA !== "undefined" ? ROLES_DATA.roles[0] : { name: "Role", id: "ROL-001" });
    return `<div class="wf-card">
      <div class="wf-card__body" style="text-align:center">
        <div style="width:48px;height:48px;border-radius:8px;background:${esc(r.color || "#666")};margin:0 auto 12px"></div>
        <div style="font-size:16px;font-weight:600">${esc(r.name)}</div>
        <div style="font-size:12px;color:var(--wf-text-muted)">${esc(r.id)}</div>
        <div style="margin-top:8px"><span class="wf-badge wf-badge--dark">${esc(r.status)}</span></div>
      </div>
      <div class="wf-card__body" style="padding-top:0;font-size:13px">
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Users</span><span class="wf-detail-info__value">${r.users}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Permissions</span><span class="wf-detail-info__value">${r.permissions}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Parent</span><span class="wf-detail-info__value">${esc(r.parent || "—")}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">Department</span><span class="wf-detail-info__value">${esc(r.department || "—")}</span></div>
        <div class="wf-detail-info__row"><span class="wf-detail-info__label">MFA</span><span class="wf-detail-info__value">${r.mfa ? "Required" : "Optional"}</span></div>
      </div>
      <div class="wf-card__footer" style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center">
        <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
        <button data-screen="permission-matrix" class="wf-btn wf-btn--sm">Matrix</button>
        <button data-screen="clone" class="wf-btn wf-btn--sm">Clone</button>
      </div>
    </div>`;
  }

  function permissionComparison(roleA, roleB) {
    const a = roleA || "Sales Manager";
    const b = roleB || "Team Lead";
    const perms = (typeof ROLES_DATA !== "undefined" ? ROLES_DATA.matrixColumns : ["View", "Create", "Edit", "Delete"]);
    const mods = (typeof ROLES_DATA !== "undefined" ? ROLES_DATA.modules.slice(0, 8) : ["Leads", "Customers"]);
    const rows = mods.map((m) => {
      const cells = perms.map((p, i) => {
        const same = i % 3 !== 2;
        return `<td class="wf-perm-compare__cell${same ? "" : " wf-perm-compare__cell--diff"}">${same ? "Yes" : "—"}</td>`;
      }).join("");
      return `<tr><td>${esc(m)}</td><td class="wf-perm-compare__role">${esc(a)}</td>${cells}<td class="wf-perm-compare__role">${esc(b)}</td>${cells}</tr>`;
    }).join("");
    return `<div class="wf-perm-compare-wrap"><table class="wf-perm-compare">
      <thead><tr><th>Module</th><th colspan="${perms.length}">${esc(a)}</th><th colspan="${perms.length}">${esc(b)}</th></tr>
      <tr><th></th>${perms.map((p) => `<th>${esc(p)}</th>`).join("")}${perms.map((p) => `<th>${esc(p)}</th>`).join("")}</tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
  }

  function permissionTree(items) {
    const list = items || (typeof ROLES_DATA !== "undefined" ? ROLES_DATA.permissionTree : []);
    const render = (nodes, depth = 0) => nodes.map((n) => `
      <div class="wf-perm-tree__item" style="padding-left:${depth * 18}px">
        <input type="checkbox" class="wf-perm-tree__cb"${n.granted ? " checked" : ""}${n.children ? " data-indeterminate" : ""}>
        <span class="wf-perm-tree__label">${esc(n.label)}</span>
        ${n.type ? `<span class="wf-badge" style="font-size:10px;margin-left:6px">${esc(n.type)}</span>` : ""}
        ${n.children ? render(n.children, depth + 1) : ""}
      </div>`).join("");
    return `<div class="wf-perm-tree">${render(list)}</div>`;
  }

  function effectivePermissionsPanel(user, role) {
    const u = user || "Himani Bhargava";
    const r = role || "Sales Manager";
    return `<div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Effective Permissions — ${esc(u)}</span></div>
      <div class="wf-card__body">
        <div style="font-size:13px;margin-bottom:16px"><strong>Primary Role:</strong> ${esc(r)} · <strong>Department:</strong> Sales · <strong>Overrides:</strong> 2</div>
        ${permissionMatrix({ editable: false, compact: true })}
        <div class="wf-mt-16">
          <div class="wf-props__check wf-props__check--ok">Inherited from Sales Manager</div>
          <div class="wf-props__check wf-props__check--ok">Department scope: Sales + assigned cities</div>
          <div class="wf-props__check wf-props__check--warn">Note: Override: Export denied on Accounts module</div>
        </div>
      </div>
    </div>`;
  }

  function securityModals() {
    return modals()
      .replace(/Customers/g, "Roles")
      .replace(/Customer/g, "Role")
      .replace(/Rahul Sharma \(CUS-2024-001\)/, "Sales Manager (ROL-2021-003)")
      + `
    <div class="wf-modal-overlay" id="modal-clone-role">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Clone Role</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Source Role</label><select class="wf-form__select"><option>Sales Manager</option><option>Team Lead</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">New Role Name *</label><input class="wf-form__input" placeholder="e.g. Sales Manager — Hyderabad"></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label"><input type="checkbox" checked> Copy all permissions</label></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label"><input type="checkbox" checked> Copy security policies</label></div>
        </div></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-clone-role">Clone Role</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-access-request">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Approve Access Request</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <p style="font-size:13px;margin-bottom:12px"><strong>Abdul Syed</strong> requests <strong>Export</strong> permission on <strong>Reports</strong> module.</p>
          <div class="wf-form__group"><label class="wf-form__label">Duration</label><select class="wf-form__select"><option>Permanent</option><option>7 days</option><option>30 days</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Justification</label><textarea class="wf-form__textarea" readonly>Q2 pipeline report for management review</textarea></div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Reject</button><button class="wf-btn wf-btn--primary" data-action="confirm-access-request">Approve</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-bulk-permission">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Bulk Permission Assignment</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Roles</label><select class="wf-form__select" multiple style="height:80px"><option>Team Lead</option><option>Sales Executive</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Module</label><select class="wf-form__select"><option>Reports</option><option>Documents</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Permission</label><select class="wf-form__select"><option>View</option><option>Export</option><option>Configure</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Action</label><select class="wf-form__select"><option>Grant</option><option>Revoke</option></select></div>
        </div></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-bulk-permission">Apply</button></div>
      </div>
    </div>`;
  }

  function severityBadge(severity) {
    const s = (severity || "Info").toLowerCase();
    const cls = s === "critical" ? " wf-badge--dark" : s === "high" ? "" : "";
    return `<span class="wf-badge wf-severity wf-severity--${s}${cls}">${esc(severity || "Info")}</span>`;
  }

  function securityEventCard(event, options = {}) {
    const e = event || {};
    const severity = (e.severity || "Info").toLowerCase();
    const { compact = false, detailScreen = "explorer", actionLabel = "Details" } = options;
    const aside = compact
      ? `<div class="wf-security-card__aside">${severityBadge(e.severity)}</div>`
      : `<div class="wf-security-card__aside">
          ${severityBadge(e.severity)}
          <button type="button" data-screen="${esc(detailScreen)}" class="wf-btn wf-btn--sm">${esc(actionLabel)}</button>
        </div>`;
    return `<article class="wf-security-card wf-security-card--${esc(severity)}">
      <div class="wf-security-card__body">
        <div class="wf-security-card__title">${esc(e.type || "Security Event")}<span class="wf-security-card__id">${e.id ? ` · ${esc(e.id)}` : ""}</span></div>
        ${e.detail ? `<div class="wf-security-card__detail">${esc(e.detail)}</div>` : ""}
        <div class="wf-security-card__meta">${esc(e.time || "—")}${e.user ? ` · ${esc(e.user)}` : ""}</div>
      </div>
      ${aside}
    </article>`;
  }

  function securityEventList(events, options = {}) {
    const list = events || [];
    if (!list.length) return emptyState("No security events", "Adjust filters to see more results.");
    return `<div class="wf-security-card-list" role="list">${list.map((e) => securityEventCard(e, options)).join("")}</div>`;
  }

  function auditDiff(before, after) {
    return `<div class="wf-audit-diff">
      <div class="wf-audit-diff__col"><div class="wf-audit-diff__label">Before</div><pre class="wf-audit-diff__val">${esc(before || "—")}</pre></div>
      <div class="wf-audit-diff__col"><div class="wf-audit-diff__label">After</div><pre class="wf-audit-diff__val">${esc(after || "—")}</pre></div>
    </div>`;
  }

  function auditDetailPanel(log) {
    const l = log || (typeof AUDIT_DATA !== "undefined" ? AUDIT_DATA.logs[0] : {});
    return `<div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Audit Details — ${esc(l.auditId || "AUD-000")}</span>${severityBadge(l.severity)}</div>
      <div class="wf-card__body">
        <div class="wf-form__grid wf-form__grid--3" style="font-size:13px;margin-bottom:16px">
          <div><strong>Timestamp:</strong> ${esc(l.timestamp)}</div>
          <div><strong>User:</strong> ${esc(l.user)}</div>
          <div><strong>Role:</strong> ${esc(l.role)}</div>
          <div><strong>Department:</strong> ${esc(l.department || "—")}</div>
          <div><strong>Module:</strong> ${esc(l.module)}</div>
          <div><strong>Action:</strong> ${esc(l.action)}</div>
          <div><strong>Record ID:</strong> ${esc(l.recordId || "—")}</div>
          <div><strong>Status:</strong> ${esc(l.status || "Success")}</div>
          <div><strong>Location:</strong> ${esc(l.location || "—")}</div>
          <div><strong>IP:</strong> ${esc(l.ip || "—")}</div>
          <div><strong>Device:</strong> ${esc(l.device || "—")}</div>
          <div><strong>Browser:</strong> ${esc(l.browser || "—")}</div>
        </div>
        ${l.before || l.after ? auditDiff(l.before, l.after) : ""}
        ${l.reason ? `<div style="font-size:13px;margin-top:12px"><strong>Reason:</strong> ${esc(l.reason)}</div>` : ""}
      </div>
    </div>`;
  }

  function auditLogTable(logs, options = {}) {
    const { showSeverity = true, showModule = true, compact = false } = options;
    const rows = (logs || []).map((l) => `
      <tr data-audit-id="${esc(l.auditId)}">
        <td><a href="#" data-screen="explorer" style="font-weight:600;color:inherit;font-size:12px">${esc(l.auditId)}</a></td>
        <td style="font-size:12px;white-space:nowrap">${esc(l.timestamp)}</td>
        <td>${esc(l.user)}</td>
        ${showModule ? `<td>${esc(l.module)}</td>` : ""}
        <td>${esc(l.action)}</td>
        <td style="font-size:12px">${esc(l.recordId || "—")}</td>
        ${showSeverity ? `<td>${severityBadge(l.severity)}</td>` : ""}
        <td style="font-size:12px">${esc(l.ip || "—")}</td>
        <td class="wf-table__actions"><button class="wf-btn wf-btn--sm" data-screen="explorer">Details</button></td>
      </tr>`).join("");
    return `<div class="wf-table-wrap"><table class="wf-table${compact ? " wf-table--compact" : ""}">
      <thead><tr>
        <th>Audit ID</th><th>Timestamp</th><th>User</th>${showModule ? "<th>Module</th>" : ""}<th>Action</th><th>Record</th>${showSeverity ? "<th>Severity</th>" : ""}<th>IP</th><th></th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
  }

  function activityHeatmap(data) {
    const hours = ["00", "04", "08", "12", "16", "20"];
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const vals = data || [[1,2,4,8,6,3,1],[2,3,5,12,10,4,2],[1,4,8,18,14,5,1],[2,5,10,22,16,6,2],[3,6,12,20,18,8,3],[1,2,4,6,5,3,2],[1,1,2,3,2,1,1]];
    return `<div class="wf-heatmap">
      <div class="wf-heatmap__y">${days.map((d) => `<span>${d}</span>`).join("")}</div>
      <div class="wf-heatmap__grid">
        ${vals.map((row) => row.map((v) => `<div class="wf-heatmap__cell" data-level="${Math.min(5, Math.ceil(v / 5))}" title="${v} events"></div>`).join("")).join("")}
      </div>
      <div class="wf-heatmap__x">${hours.map((h) => `<span>${h}:00</span>`).join("")}</div>
    </div>`;
  }

  function auditToolbar() {
    return WF.toolbar({ filters: ["Date Range", "User", "Role", "Module", "Event", "Status", "Severity"], showImport: false, showExport: true })
      + `<div class="wf-audit-quick-filters">
        <button class="wf-btn wf-btn--sm">Today</button>
        <button class="wf-btn wf-btn--sm">Last 7 days</button>
        <button class="wf-btn wf-btn--sm">Last 30 days</button>
        <button class="wf-btn wf-btn--sm">Critical only</button>
        <button class="wf-btn wf-btn--sm">Failed only</button>
      </div>`;
  }

  function auditModals() {
    return modals()
      .replace(/Customers/g, "Audit Logs")
      .replace(/Customer/g, "Audit Entry")
      .replace(/Rahul Sharma \(CUS-2024-001\)/, "AUD-2024-08921 Lead Updated")
      + `
    <div class="wf-modal-overlay" id="modal-restore-record">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Restore Deleted Record</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <p style="font-size:13px;margin-bottom:12px">Restore <strong>Lead — Rahul Sharma (LEAD-2024-089)</strong>? This action is logged in the audit trail.</p>
          <div class="wf-props__check wf-props__check--ok">Export permission validated</div>
          <div class="wf-props__check wf-props__check--ok">Retention policy allows restore</div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-restore-record">Restore</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-export-audit">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Export Audit Logs</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Date Range</label><select class="wf-form__select"><option>Last 7 days</option><option>Last 30 days</option><option>Custom</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Format</label><select class="wf-form__select"><option>CSV</option><option>PDF</option><option>JSON</option></select></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label"><input type="checkbox" checked> Mask sensitive data (PII, bank details)</label></div>
        </div></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-export-audit">Export</button></div>
      </div>
    </div>`;
  }

  function settingsFormFooter() {
    return `<div class="wf-form__actions">
      <button type="button" class="wf-btn" data-modal="reset-settings">Reset</button>
      <button type="button" class="wf-btn">Cancel</button>
      <button type="button" class="wf-btn" data-action="test-connection">Test Connection</button>
      <button type="submit" class="wf-btn wf-btn--primary" data-modal="save-settings">Save Changes</button>
    </div>`;
  }

  function statusIndicator(label, status, detail) {
    const ok = status === "Healthy" || status === "Connected" || status === "Active" || status === "OK";
    return `<div class="wf-status-card">
      <div class="wf-status-card__dot${ok ? " wf-status-card__dot--ok" : ""}"></div>
      <div><div class="wf-status-card__label">${esc(label)}</div><div class="wf-status-card__val">${esc(status)}</div>${detail ? `<div class="wf-status-card__detail">${esc(detail)}</div>` : ""}</div>
    </div>`;
  }

  function configLayout(_activeScreen, content) {
    return content;
  }

  function masterDataLayout(_activeScreen, content) {
    return content;
  }

  function masterDataTable(records, columns) {
    const statusBadge = (status) => {
      const cls = status === "Active" ? " wf-badge--dark" : "";
      return `<span class="wf-badge${cls}">${esc(status)}</span>`;
    };
    const actionBtns = `<div class="wf-table-actions">
      <button class="wf-btn wf-btn--sm" title="Edit">Edit</button>
      <button class="wf-btn wf-btn--sm" title="Archive">Archive</button>
      <button class="wf-btn wf-btn--sm" title="Activate">Activate</button>
      <button class="wf-btn wf-btn--sm" title="Deactivate">Deactivate</button>
    </div>`;
    return `<div class="wf-table-wrap"><table class="wf-table wf-table--responsive">
      <thead><tr>${columns.map((c) => `<th>${esc(c.label)}</th>`).join("")}<th>Status</th><th>Actions</th></tr></thead>
      <tbody>${records.map((r) => `<tr>${columns.map((c) => `<td${c.clip ? ' class="wf-table__cell-clip"' : ""}>${esc(r[c.key] ?? "—")}</td>`).join("")}<td>${statusBadge(r.status || "Active")}</td><td>${actionBtns}</td></tr>`).join("")}</tbody>
    </table></div>`;
  }

  function masterDataToolbar(entityLabel) {
    return `<div class="wf-toolbar wf-mb-16">
      <div class="wf-toolbar__filters">
        <input type="search" class="wf-form__input" placeholder="Search ${esc(entityLabel)}…" style="max-width:220px">
        <select class="wf-filter-select" aria-label="Status filter"><option>All Status</option><option>Active</option><option>Inactive</option><option>Archived</option></select>
      </div>
      <div class="wf-toolbar__actions wf-sticky-actions">
        <button class="wf-btn wf-btn--sm wf-btn--primary">+ Add ${esc(entityLabel)}</button>
        <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
      </div>
    </div>`;
  }

  function companySettingsForm() {
    const c = (typeof CONFIG_DATA !== "undefined" ? CONFIG_DATA.company : {});
    return `<form class="wf-form" id="wf-settings-form">
      <div class="wf-form__section"><div class="wf-form__section-title">Company Information</div>
        <div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Company Name</label><input class="wf-form__input" value="${esc(c.name || "iFranchise")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Website</label><input class="wf-form__input" value="${esc(c.website || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Support Email</label><input type="email" class="wf-form__input" value="${esc(c.supportEmail || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">Support Phone</label><input class="wf-form__input" type="tel" data-phone-input value="${esc(formatPhone(c.supportPhone || ""))}" placeholder="${PHONE_FORMAT}"></div>
          <div class="wf-form__group"><label class="wf-form__label">GST</label><input class="wf-form__input" value="${esc(c.gst || "")}"></div>
          <div class="wf-form__group"><label class="wf-form__label">PAN</label><input class="wf-form__input" value="${esc(c.pan || "")}"></div>
          <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Registered Address</label><textarea class="wf-form__textarea">${esc(c.address || "")}</textarea></div>
          <div class="wf-form__group"><label class="wf-form__label">Timezone</label><select class="wf-form__select"><option>${esc(c.timezone || "Asia/Kolkata")}</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Currency</label><select class="wf-form__select"><option>${esc(c.currency || "INR (₹)")}</option></select></div>
        </div>
      </div>
      ${settingsFormFooter()}
    </form>`;
  }

  function integrationPanel(name, opts = {}) {
    const { status = "Connected", screen = "integrations", fields = [] } = opts;
    const fieldHtml = fields.map(([l, v]) => `<div class="wf-form__group"><label class="wf-form__label">${esc(l)}</label><input class="wf-form__input" value="${esc(v)}" type="${l.toLowerCase().includes("secret") || l.toLowerCase().includes("key") ? "password" : "text"}"></div>`).join("");
    return `<form class="wf-form" id="wf-settings-form">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
        <div style="width:48px;height:48px;background:var(--wf-placeholder);border-radius:8px"></div>
        <div><div style="font-weight:600;font-size:16px">${esc(name)}</div><span class="wf-badge wf-badge--dark">${esc(status)}</span></div>
      </div>
      <div class="wf-form__grid">${fieldHtml || '<div class="wf-form__group"><label class="wf-form__label">API Key</label><input class="wf-form__input" type="password" value="••••••••"></div><div class="wf-form__group"><label class="wf-form__label">Webhook URL</label><input class="wf-form__input" value="https://api.franchisecrm.com/webhooks"></div>'}</div>
      ${settingsFormFooter()}
    </form>`;
  }

  function featureFlagGrid(flags) {
    const list = flags || (typeof CONFIG_DATA !== "undefined" ? CONFIG_DATA.featureFlags : []);
    return `<div class="wf-feature-flags">
      ${list.map((f) => `<div class="wf-feature-flags__item">
        <div><div style="font-weight:600;font-size:13px">${esc(f.name)}</div><div style="font-size:12px;color:var(--wf-text-muted)">${esc(f.desc || "")}</div></div>
        <label class="wf-toggle"><input type="checkbox"${f.enabled ? " checked" : ""}><span class="wf-toggle__slider"></span></label>
      </div>`).join("")}
    </div>`;
  }

  function storageUsagePanel() {
    const buckets = (typeof CONFIG_DATA !== "undefined" ? CONFIG_DATA.storage : []);
    return `<div class="wf-storage-grid">
      ${buckets.map((b) => `<div class="wf-card"><div class="wf-card__body" style="padding:16px">
        <div style="font-weight:600;margin-bottom:4px">${esc(b.name)}</div>
        <div style="font-size:20px;font-weight:700">${b.used} / ${b.limit}</div>
        <div class="wf-progress wf-mt-8"><div class="wf-progress__bar" style="width:${b.pct}%"></div></div>
        <div style="font-size:11px;color:var(--wf-text-muted);margin-top:4px">${b.pct}% used</div>
      </div></div>`).join("")}
    </div>`;
  }

  function settingsModals() {
    return modals()
      .replace(/Customers/g, "Settings")
      .replace(/Customer/g, "Setting")
      .replace(/Rahul Sharma \(CUS-2024-001\)/, "SMTP Configuration")
      + `
    <div class="wf-modal-overlay" id="modal-save-settings">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Save Settings</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><p style="font-size:13px">Save configuration changes? This will apply immediately for all users.</p>
          <div class="wf-props__check wf-props__check--ok">Permission validation passed</div>
          <div class="wf-props__check wf-props__check--ok">Required fields validated</div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-save-settings">Save</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-reset-settings">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Reset Settings</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><p style="font-size:13px">Reset to default values? Unsaved changes will be lost.</p></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-reset-settings">Reset</button></div>
      </div>
    </div>`;
  }

  function analyticsModals() {
    return modals()
      .replace(/Customers/g, "Reports")
      .replace(/Customer/g, "Report")
      .replace(/Rahul Sharma \(CUS-2024-001\)/, "Q2 Revenue Summary Report")
      + `
    <div class="wf-modal-overlay" id="modal-schedule-report">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Schedule Report</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body"><div class="wf-form__grid">
          <div class="wf-form__group"><label class="wf-form__label">Frequency</label><select class="wf-form__select"><option>Weekly</option><option>Monthly</option><option>Quarterly</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Recipients</label><select class="wf-form__select"><option>CEO</option><option>Sales Manager</option><option>Accounts Manager</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Format</label><select class="wf-form__select"><option>PDF</option><option>Excel</option><option>Both</option></select></div>
        </div></div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-schedule-report">Schedule</button></div>
      </div>
    </div>
    <div class="wf-modal-overlay" id="modal-share-report">
      <div class="wf-modal"><div class="wf-modal__header"><span class="wf-modal__title">Share Report</span><button class="wf-modal__close" data-close-modal>&times;</button></div>
        <div class="wf-modal__body">
          <div class="wf-form__group"><label class="wf-form__label">Share With</label><select class="wf-form__select"><option>Sales Team</option><option>Management</option><option>Custom</option></select></div>
          <div class="wf-form__group"><label class="wf-form__label">Message</label><textarea class="wf-form__textarea" placeholder="Optional message…"></textarea></div>
        </div>
        <div class="wf-modal__footer"><button class="wf-btn" data-close-modal>Cancel</button><button class="wf-btn wf-btn--primary" data-action="confirm-share-report">Share</button></div>
      </div>
    </div>`;
  }

  return {
    BRAND_NAME,
    BRAND_MARK,
    MODULE_NAV,
    moduleLink,
    screenHref,
    sidebarLogo,
    authLogo,
    initPage,
    pageHeader,
    toolbar,
    topbar,
    modals,
    bindEvents,
    spaSidebar,
    spaModuleSwitcher,
    mobileScreenNavBar,
    spaBreadcrumb,
    spaTabs,
    customerTable,
    brandTable,
    detailTabs,
    customerProfileCard,
    brandProfileCard,
    customerForm,
    brandForm,
    leadTable,
    leadProfileCard,
    leadForm,
    leadToolbar,
    leadSortSelect,
    leadBulkBar,
    leadKanbanView,
    leadMeetingForm,
    leadFollowupForm,
    leadAssignmentForm,
    leadConvertForm,
    leadMeetingTable,
    leadModals,
    timeline,
    emptyState,
    loadingState,
    pagination,
    esc,
    brandModals,
    modelTable,
    modelProfileCard,
    modelForm,
    workflowStepper,
    roleSwitcher,
    modelModals,
    meetingTable,
    meetingProfileCard,
    meetingForm,
    meetingModals,
    calendarView,
    kanbanView,
    viewToggle,
    approvalTable,
    approvalProfileCard,
    approvalForm,
    approvalLevels,
    approvalModals,
    errorState,
    formatINR,
    paymentTable,
    invoiceTable,
    paymentProfileCard,
    paymentForm,
    invoiceForm,
    accountsModals,
    documentTable,
    documentProfileCard,
    documentForm,
    folderTree,
    documentPreview,
    versionHistory,
    documentModals,
    notificationTable,
    notificationList,
    notificationForm,
    channelToggle,
    deliveryStatus,
    notificationModals,
    reportActions,
    periodToggle,
    kpiGrid,
    chartCard,
    chartPlaceholder,
    dummyChart,
    miniBarChart,
    miniDonut,
    miniLineChart,
    chartFilterSelect,
    verticalBarChart,
    dualLineChart,
    leadKpiGrid,
    leadTopPerformers,
    leadRecentActivity,
    brandLeadCards,
    reportDataTable,
    comparisonToggle,
    reportForm,
    analyticsModals,
    workflowNode,
    nodePalette,
    propertiesPanel,
    workflowBuilder,
    workflowTable,
    executionTable,
    workflowForm,
    conditionBuilder,
    automationModals,
    userTable,
    userProfileCard,
    userForm,
    orgChart,
    hierarchyTree,
    departmentGrid,
    teamGrid,
    activityFeed,
    userModals,
    permissionMatrix,
    roleTable,
    roleForm,
    roleDetailCard,
    permissionComparison,
    permissionTree,
    effectivePermissionsPanel,
    securityModals,
    severityBadge,
    securityEventCard,
    securityEventList,
    auditDiff,
    auditDetailPanel,
    auditLogTable,
    activityHeatmap,
    auditToolbar,
    auditModals,
    settingsFormFooter,
    statusIndicator,
    configLayout,
    companySettingsForm,
    integrationPanel,
    featureFlagGrid,
    storageUsagePanel,
    settingsModals,
    masterDataLayout,
    masterDataTable,
    masterDataToolbar,
    DETAIL_SCREENS,
    CUSTOMER_DETAIL_TABS,
    showToast,
    formatPhone,
    formatPhoneInText,
    PHONE_FORMAT,
    refreshMobileBottomNav,
    mobileBottomNav,
    enhanceMobileExperience,
    updateBottomNavActive,
    isMobileViewport,
    getViewRole,
    setViewRole,
    resetViewRole,
    applyRoleViewState,
    rolePermissionSummary
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  if (typeof WF_PAGE !== "undefined") {
    WF_PAGE();
  }
});
