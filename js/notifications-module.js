/* Notification Center — Single Page Module (17 screens) */

const NOTIFICATIONS_MODULE = (() => {
  const n = () => NOTIFICATION_DATA.notifications[0];
  let activeRole = "CEO";

  const roleBar = () => WF.roleSwitcher(WF.getViewRole(activeRole), NOTIFICATION_DATA.roles);
  const unread = () => NOTIFICATION_DATA.notifications.filter(x => !x.read);
  const byChannel = (ch) => NOTIFICATION_DATA.notifications.filter(x => x.channel === ch || x.channel.includes(ch));

  const screens = [
    {
      id: "dashboard", label: "Notification Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Notification Dashboard", "Delivery performance, unread alerts, and channel analytics", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="center" class="wf-btn wf-btn--sm wf-btn--primary">Open Center</button>
        `)}
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Unread</div><div class="wf-stat-card__value">${NOTIFICATION_DATA.kpis.unread}</div><div class="wf-stat-card__change">Requires attention</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Today's Notifications</div><div class="wf-stat-card__value">${NOTIFICATION_DATA.kpis.today}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Pending Delivery</div><div class="wf-stat-card__value">${NOTIFICATION_DATA.kpis.pendingDelivery}</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Failed</div><div class="wf-stat-card__value">${NOTIFICATION_DATA.kpis.failed}</div></div>
        </div>
        <div class="wf-card-grid" style="grid-template-columns:repeat(5,1fr)">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Read Rate</div><div class="wf-stat-card__value">${NOTIFICATION_DATA.kpis.readRate}%</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Delivery Success</div><div class="wf-stat-card__value">${NOTIFICATION_DATA.kpis.deliverySuccess}%</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Email</div><div class="wf-stat-card__value">${NOTIFICATION_DATA.kpis.emailRate}%</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">SMS</div><div class="wf-stat-card__value">${NOTIFICATION_DATA.kpis.smsRate}%</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">WhatsApp</div><div class="wf-stat-card__value">${NOTIFICATION_DATA.kpis.whatsappRate}%</div></div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Activity</span><button data-screen="audit" class="wf-btn wf-btn--sm">Audit Log</button></div>
            <div class="wf-card__body">${WF.timeline(NOTIFICATION_DATA.timeline)}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Channel Performance</span><button data-screen="analytics" class="wf-btn wf-btn--sm">Analytics</button></div>
            <div class="wf-card__body">${WF.chartPlaceholder("Bar Chart", "In-App · Email · SMS · WhatsApp · Push delivery rates")}</div>
          </div>
        </div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Unread Notifications</span><button data-modal="mark-all-read" class="wf-btn wf-btn--sm">Mark All Read</button></div>
          <div class="wf-card__body" style="padding:0">${WF.notificationList(unread().slice(0, 5))}</div>
        </div>
      `
    },
    {
      id: "center", label: "Notification Center",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Notification Center", "Your inbox — read, act, and manage notifications", `
          <button data-modal="mark-all-read" class="wf-btn wf-btn--sm">Mark All Read</button>
          <button data-modal="archive-notif" class="wf-btn wf-btn--sm">Archive</button>
          <button data-screen="scheduled" class="wf-btn wf-btn--sm wf-btn--primary">+ Schedule</button>
        `)}
        <div class="wf-flex wf-gap-8 wf-mb-16" style="flex-wrap:wrap">
          <button class="wf-btn wf-btn--sm wf-btn--primary">All (${NOTIFICATION_DATA.notifications.length})</button>
          <button class="wf-btn wf-btn--sm">Unread (${unread().length})</button>
          <button class="wf-btn wf-btn--sm">Approvals (3)</button>
          <button class="wf-btn wf-btn--sm">Meetings (5)</button>
          <button class="wf-btn wf-btn--sm">Payments (4)</button>
        </div>
        <div class="wf-center-layout">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Inbox</span></div>
            <div class="wf-card__body" style="padding:0">${WF.notificationList(NOTIFICATION_DATA.notifications.slice(0, 8))}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Preview</span><button data-screen="details" class="wf-btn wf-btn--sm">Full Details</button></div>
            <div class="wf-card__body">
              <div style="font-size:15px;font-weight:600;margin-bottom:8px">${WF.esc(n().title)}</div>
              <p style="font-size:13px;color:var(--wf-text-secondary);line-height:1.6;margin-bottom:16px">${WF.esc(n().message)}</p>
              <div class="wf-form__grid wf-form__grid--3">
                <div class="wf-detail-info__row"><span class="wf-detail-info__label">Type</span><span class="wf-badge wf-badge--outline">${WF.esc(n().type)}</span></div>
                <div class="wf-detail-info__row"><span class="wf-detail-info__label">Priority</span><span class="wf-badge wf-badge--dark">${WF.esc(n().priority)}</span></div>
                <div class="wf-detail-info__row"><span class="wf-detail-info__label">Channel</span><span class="wf-badge">${WF.esc(n().channel)}</span></div>
              </div>
              <button class="wf-btn wf-btn--primary wf-mt-16">${WF.esc(n().actionButton)}</button>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "all", label: "All Notifications",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("All Notifications", "Complete notification history with filters", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
          <button data-modal="mark-all-read" class="wf-btn wf-btn--sm">Mark All Read</button>
          <button data-modal="archive-notif" class="wf-btn wf-btn--sm">Archive Selected</button>
        `)}
        ${WF.toolbar({ filters: ["Type", "Priority", "Channel", "Status", "Read/Unread", "Date Range", "Recipient"] })}
        <div id="wf-data-content">${WF.notificationTable(NOTIFICATION_DATA.notifications)}</div>
        ${WF.loadingState()}
      `
    },
    {
      id: "details", label: "Notification Details",
      breadcrumb: [{ label: "All Notifications", screen: "all" }, { label: n().id }],
      render: () => {
        const notif = n();
        return `
          ${roleBar()}
          ${WF.pageHeader(notif.title, notif.id + " · " + notif.type, `
            <button class="wf-btn wf-btn--sm wf-btn--primary">${WF.esc(notif.actionButton)}</button>
            <button class="wf-btn wf-btn--sm" data-action="mark-read">Mark Read</button>
            <button data-modal="resend" class="wf-btn wf-btn--sm">Resend</button>
            <button data-modal="delete-notif" class="wf-btn wf-btn--sm wf-btn--danger">Delete</button>
          `)}
          ${WF.workflowStepper(notif.status, NOTIFICATION_DATA.workflow)}
          <div class="wf-detail-layout">
            <div class="wf-detail-sidebar">
              <div class="wf-card"><div class="wf-card__body">
                <div style="font-size:14px;font-weight:600;margin-bottom:12px">${WF.esc(notif.title)}</div>
                <span class="wf-badge wf-badge--dark">${WF.esc(notif.status)}</span>
                <div class="wf-mt-16">
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Recipient</span><span class="wf-detail-info__value">${WF.esc(notif.recipient)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Channel</span><span class="wf-detail-info__value">${WF.esc(notif.channel)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Sent</span><span class="wf-detail-info__value">${WF.esc(notif.sentAt)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Read</span><span class="wf-detail-info__value">${notif.read ? "Yes" : "No"}</span></div>
                </div>
              </div></div>
            </div>
            <div>
              <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Message</span></div>
                <div class="wf-card__body"><p style="font-size:14px;line-height:1.7">${WF.esc(notif.message)}</p></div>
              </div>
              <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Delivery Status</span><button data-screen="delivery" class="wf-btn wf-btn--sm">Full Status</button></div>
                <div class="wf-card__body">${WF.deliveryStatus(NOTIFICATION_DATA.delivery)}</div>
              </div>
              <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Activity Timeline</span><button data-screen="audit" class="wf-btn wf-btn--sm">Audit Log</button></div>
                <div class="wf-card__body">${WF.timeline(NOTIFICATION_DATA.timeline)}</div>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      id: "preferences", label: "Notification Preferences",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Notification Preferences", "Configure how you receive notifications", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">Save Preferences</button>
        `)}
        <div class="wf-card wf-mb-16"><div class="wf-card__body" style="font-size:13px;padding:12px 16px;background:var(--wf-surface-alt)">
          Permission-based access · Valid delivery channel required · Duplicate prevention active
        </div></div>
        ${WF.channelToggle(NOTIFICATION_DATA.channels, "In-App")}
        <div class="wf-grid-2 wf-mt-16">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Notification Types</span></div>
            <div class="wf-card__body" style="font-size:13px">
              ${NOTIFICATION_DATA.types.slice(0, 10).map(t => `<label style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><input type="checkbox" checked> ${WF.esc(t)}</label>`).join("")}
            </div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Quiet Hours</span></div>
            <div class="wf-card__body">
              <div class="wf-form__grid">
                <div class="wf-form__group"><label class="wf-form__label">From</label><input type="time" class="wf-form__input" value="22:00"></div>
                <div class="wf-form__group"><label class="wf-form__label">To</label><input type="time" class="wf-form__input" value="08:00"></div>
                <div class="wf-form__group wf-form__group--full"><label style="display:flex;align-items:center;gap:8px"><input type="checkbox"> Allow critical alerts during quiet hours</label></div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "email", label: "Email Notifications",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Email Notifications", "Email delivery settings and history — ${NOTIFICATION_DATA.kpis.emailRate}% success rate", `
          <button data-screen="templates" class="wf-btn wf-btn--sm">Templates</button>
        `)}
        ${WF.channelToggle(NOTIFICATION_DATA.channels, "Email")}
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Email Preferences</span></div>
          <div class="wf-card__body" style="font-size:13px">
            ${Object.entries(NOTIFICATION_DATA.preferences.email).map(([k, v]) => `<label style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><input type="checkbox"${v ? " checked" : ""}> ${WF.esc(k.charAt(0).toUpperCase() + k.slice(1))}</label>`).join("")}
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recent Email Notifications</span></div>
          <div class="wf-card__body" style="padding:0">${WF.notificationTable(byChannel("Email"))}</div>
        </div>
      `
    },
    {
      id: "sms", label: "SMS Notifications",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("SMS Notifications", "SMS delivery — ${NOTIFICATION_DATA.kpis.smsRate}% success rate", `
          <button data-screen="failed" class="wf-btn wf-btn--sm">Failed (${NOTIFICATION_DATA.failed.filter(f => f.channel === "SMS").length})</button>
        `)}
        ${WF.channelToggle(NOTIFICATION_DATA.channels, "SMS")}
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">SMS Preferences</span></div>
          <div class="wf-card__body" style="font-size:13px">
            ${Object.entries(NOTIFICATION_DATA.preferences.sms).map(([k, v]) => `<label style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><input type="checkbox"${v ? " checked" : ""}> ${WF.esc(k.charAt(0).toUpperCase() + k.slice(1))}</label>`).join("")}
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recent SMS</span></div>
          <div class="wf-card__body" style="padding:0">${WF.notificationTable(byChannel("SMS"))}</div>
        </div>
      `
    },
    {
      id: "whatsapp", label: "WhatsApp Notifications",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("WhatsApp Notifications", "WhatsApp Business API — ${NOTIFICATION_DATA.kpis.whatsappRate}% success rate")}
        ${WF.channelToggle(NOTIFICATION_DATA.channels, "WhatsApp")}
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">WhatsApp Preferences</span></div>
          <div class="wf-card__body" style="font-size:13px">
            ${Object.entries(NOTIFICATION_DATA.preferences.whatsapp).map(([k, v]) => `<label style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><input type="checkbox"${v ? " checked" : ""}> ${WF.esc(k.charAt(0).toUpperCase() + k.slice(1))}</label>`).join("")}
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__body"><div class="wf-chart-placeholder" style="height:180px">WhatsApp message preview — template-based notifications</div></div>
        </div>
      `
    },
    {
      id: "push", label: "Push Notifications",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Push Notifications", "Mobile & desktop push — ${NOTIFICATION_DATA.kpis.pushRate}% success rate")}
        ${WF.channelToggle(NOTIFICATION_DATA.channels, "Push Notification")}
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Push Preferences</span></div>
          <div class="wf-card__body" style="font-size:13px">
            ${Object.entries(NOTIFICATION_DATA.preferences.push).map(([k, v]) => `<label style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><input type="checkbox"${v ? " checked" : ""}> ${WF.esc(k.charAt(0).toUpperCase() + k.slice(1))}</label>`).join("")}
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recent Push Notifications</span></div>
          <div class="wf-card__body" style="padding:0">${WF.notificationTable(NOTIFICATION_DATA.notifications.filter(x => x.channel.includes("Push")))}</div>
        </div>
      `
    },
    {
      id: "announcements", label: "Announcement Center",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Announcement Center", "Broadcast announcements to users and teams", `
          <button data-modal="send-announcement" class="wf-btn wf-btn--sm wf-btn--primary">+ New Announcement</button>
        `)}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Sent Announcements</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Title</th><th>Author</th><th>Date</th><th>Recipients</th><th>Channels</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>${NOTIFICATION_DATA.announcements.map(a => `<tr>
            <td>${WF.esc(a.title)}</td><td>${WF.esc(a.author)}</td><td>${WF.esc(a.date)}</td>
            <td>${WF.esc(a.recipients)}</td><td>${WF.esc(a.channels)}</td>
            <td><span class="wf-badge wf-badge--dark">${WF.esc(a.status)}</span></td>
            <td><button class="wf-btn wf-btn--sm">View</button></td>
          </tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "reminders", label: "Reminder Center",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Reminder Center", "Scheduled reminders for leads, meetings, and payments", `
          <button data-screen="scheduled" class="wf-btn wf-btn--sm wf-btn--primary">+ Schedule Reminder</button>
        `)}
        ${WF.toolbar({ filters: ["Type", "Due Date", "Recipient", "Status"] })}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Active Reminders</span><span class="wf-badge">${NOTIFICATION_DATA.reminders.length}</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Reminder</th><th>Type</th><th>Due</th><th>Recipient</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>${NOTIFICATION_DATA.reminders.map(r => `<tr>
            <td>${WF.esc(r.title)}</td><td><span class="wf-badge wf-badge--outline">${WF.esc(r.type)}</span></td>
            <td>${WF.esc(r.due)}</td><td>${WF.esc(r.recipient)}</td>
            <td><span class="wf-badge">${WF.esc(r.status)}</span></td>
            <td><button class="wf-btn wf-btn--sm">Edit</button> <button class="wf-btn wf-btn--sm">Send Now</button></td>
          </tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "scheduled", label: "Scheduled Notifications",
      breadcrumb: [{ label: "Notification Center", screen: "center" }, { label: "Scheduled" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Scheduled Notifications", "Upcoming and queued notification deliveries", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Schedule New</button>
        `)}
        <div class="wf-card wf-mb-16"><div class="wf-card__body">${WF.notificationForm(null, "create")}</div></div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Scheduled Queue</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>ID</th><th>Title</th><th>Recipient</th><th>Channel</th><th>Schedule</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>${NOTIFICATION_DATA.scheduled.map(s => `<tr>
            <td>${WF.esc(s.id)}</td><td>${WF.esc(s.title)}</td><td>${WF.esc(s.recipient)}</td>
            <td>${WF.esc(s.channel)}</td><td>${WF.esc(s.scheduleDate)}</td>
            <td><span class="wf-badge">${WF.esc(s.status)}</span></td>
            <td><button class="wf-btn wf-btn--sm">Edit</button> <button class="wf-btn wf-btn--sm wf-btn--danger">Cancel</button></td>
          </tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "templates", label: "Notification Templates",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Notification Templates", "Reusable templates with variable placeholders", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Create Template</button>
        `)}
        <div class="wf-card wf-mb-16"><div class="wf-card__body" style="font-size:13px;padding:12px 16px;background:var(--wf-surface-alt)">
          Template validation active · Variables: {{meeting_title}}, {{amount}}, {{due_date}}, {{approval_type}}, {{document_name}}
        </div></div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Templates</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Name</th><th>Type</th><th>Channels</th><th>Subject</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>${NOTIFICATION_DATA.templates.map(t => `<tr>
            <td>${WF.esc(t.name)}</td><td>${WF.esc(t.type)}</td><td>${WF.esc(t.channels)}</td>
            <td style="font-size:12px">${WF.esc(t.subject)}</td>
            <td><span class="wf-badge wf-badge--dark">${WF.esc(t.status)}</span></td>
            <td><button class="wf-btn wf-btn--sm">Edit</button> <button class="wf-btn wf-btn--sm">Preview</button></td>
          </tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "analytics", label: "Notification Analytics",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Notification Analytics", "Delivery metrics, read rates, and channel performance", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export Report</button>
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
        `)}
        ${WF.toolbar({ filters: ["Date Range", "Channel", "Type", "Recipient Role"] })}
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Total Sent (30d)</div><div class="wf-stat-card__value">1,842</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Delivered</div><div class="wf-stat-card__value">1,768</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Read Rate</div><div class="wf-stat-card__value">${NOTIFICATION_DATA.kpis.readRate}%</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Failed</div><div class="wf-stat-card__value">${NOTIFICATION_DATA.kpis.failed}</div></div>
        </div>
        <div class="wf-grid-2 wf-mb-16">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Delivery by Channel</span></div>
            <div class="wf-card__body">${WF.chartPlaceholder("Bar Chart", "In-App · Email · SMS · WhatsApp · Push success %")}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Notifications by Type</span></div>
            <div class="wf-card__body">${WF.chartPlaceholder("Donut", "Approvals · Meetings · Payments · Documents · Leads")}</div>
          </div>
        </div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Volume Trend</span></div>
          <div class="wf-card__body">${WF.chartPlaceholder("Line Chart", "Sent vs Delivered vs Read (daily, 30 days)")}</div>
        </div>
      `
    },
    {
      id: "delivery", label: "Delivery Status",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Delivery Status", "Track notification delivery across all channels", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
        `)}
        ${WF.toolbar({ filters: ["Channel", "Status", "Date Range", "Recipient"] })}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Delivery Tracking — ${WF.esc(n().id)}</span></div>
          <div class="wf-card__body">${WF.deliveryStatus(NOTIFICATION_DATA.delivery)}</div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">All Recent Deliveries</span></div>
          <div class="wf-card__body" style="padding:0">${WF.notificationTable(NOTIFICATION_DATA.notifications)}</div>
        </div>
      `
    },
    {
      id: "failed", label: "Failed Notifications",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Failed Notifications", "Delivery failures — retry or investigate", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
        `)}
        ${WF.toolbar({ filters: ["Channel", "Error Type", "Date Range", "Retries"] })}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Failed Deliveries</span><span class="wf-badge">${NOTIFICATION_DATA.failed.length} failed</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>ID</th><th>Title</th><th>Channel</th><th>Recipient</th><th>Failed At</th><th>Error</th><th>Retries</th><th>Actions</th></tr></thead>
          <tbody>${NOTIFICATION_DATA.failed.map(f => `<tr>
            <td><a data-screen="details" class="wf-table__link">${WF.esc(f.id)}</a></td>
            <td>${WF.esc(f.title)}</td><td>${WF.esc(f.channel)}</td><td>${WF.esc(f.recipient)}</td>
            <td>${WF.esc(f.failedAt)}</td><td style="font-size:12px;color:var(--wf-text-muted)">${WF.esc(f.error)}</td>
            <td>${f.retries}</td>
            <td><button data-modal="resend" class="wf-btn wf-btn--sm wf-btn--primary">Resend</button></td>
          </tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "audit", label: "Notification Audit Log",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Notification Audit Log", "Immutable log of all notification system actions", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export Log</button>
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
        `)}
        ${WF.toolbar({ filters: ["Action", "User", "Entity", "Date Range", "Channel"] })}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Audit Trail</span><span style="font-size:12px;color:var(--wf-text-muted)">528 events · Page 1 of 53</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Timestamp</th><th>User</th><th>Action</th><th>Entity</th><th>Details</th></tr></thead>
          <tbody>${NOTIFICATION_DATA.auditLog.map(l => `<tr>
            <td style="font-size:12px">${WF.esc(l.timestamp)}</td><td>${WF.esc(l.user)}</td>
            <td><span class="wf-badge wf-badge--outline">${WF.esc(l.action)}</span></td>
            <td><a data-screen="details" class="wf-table__link">${WF.esc(l.entity)}</a></td>
            <td style="font-size:12px">${WF.esc(l.details)}</td>
          </tr>`).join("")}</tbody></table>${WF.pagination(528)}</div>
        </div>
      `
    }
  ];

  function init() {
    WF.resetViewRole(activeRole);
    WF_SPA.init({
      moduleKey: "notifications",
      moduleLabel: "Notification Center",
      moduleTitle: "Notification Center",
      moduleHref: "index.html",
      defaultScreen: "dashboard",
      searchPlaceholder: "Search notifications, recipients, types, channels…",
      modals: WF.notificationModals,
      screens
    });

    document.body.addEventListener("click", (e) => {
      const notifItem = e.target.closest(".wf-notif-item");
      if (notifItem && notifItem.dataset.screen) {
        WF_SPA.navigate(notifItem.dataset.screen);
      }
    });
  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => NOTIFICATIONS_MODULE.init());
