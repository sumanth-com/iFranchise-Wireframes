/* Meeting Management — Single Page Module (17 screens) */

const MEETINGS_MODULE = (() => {
  const m = () => MEETING_DATA.meetings[0];
  let activeRole = "CEO";

  const roleBar = () => WF.roleSwitcher(activeRole, MEETING_DATA.roles);

  const meetingTabs = (active) => WF.spaTabs([
    { id: "details", label: "Overview" },
    { id: "agenda", label: "Agenda" },
    { id: "participants", label: "Participants" },
    { id: "notes", label: "Notes" },
    { id: "documents", label: "Documents" },
    { id: "timeline", label: "Timeline" },
    { id: "followups", label: "Follow-ups" },
    { id: "outcomes", label: "Outcomes" },
    { id: "online", label: "Online" },
    { id: "offline", label: "Offline" }
  ], active);

  const screens = [
    {
      id: "dashboard", label: "Meeting Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Meeting Dashboard", "Today's meetings, follow-ups, and performance overview", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="schedule" class="wf-btn wf-btn--sm wf-btn--primary">+ Schedule Meeting</button>
        `)}
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Today's Meetings</div><div class="wf-stat-card__value">4</div><div class="wf-stat-card__change">2 online · 2 offline</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Upcoming (7 days)</div><div class="wf-stat-card__value">18</div><div class="wf-stat-card__change">↑ 3 vs last week</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Pending Follow-ups</div><div class="wf-stat-card__value">7</div><div class="wf-stat-card__change">Requires action</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Completed (MTD)</div><div class="wf-stat-card__value">42</div><div class="wf-stat-card__change">↑ 8% vs last month</div></div>
        </div>
        <div class="wf-card-grid" style="grid-template-columns:repeat(4,1fr)">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Cancelled</div><div class="wf-stat-card__value">3</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Success Rate</div><div class="wf-stat-card__value">78%</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Avg Duration</div><div class="wf-stat-card__value">52 min</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Upcoming Tasks</div><div class="wf-stat-card__value">12</div></div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Today's Meetings</span><button data-screen="calendar" class="wf-btn wf-btn--sm">Calendar</button></div>
            <div class="wf-card__body" style="padding:0">${WF.meetingTable(MEETING_DATA.meetings.slice(0, 3))}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Calendar Overview</span><button data-screen="calendar" class="wf-btn wf-btn--sm">Full View</button></div>
            <div class="wf-card__body">${WF.calendarView("Week")}</div>
          </div>
        </div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Pending Follow-ups</span><button data-screen="followups" class="wf-btn wf-btn--sm">View All</button></div>
            <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Task</th><th>Assignee</th><th>Due</th><th>Status</th></tr></thead>
            <tbody>${MEETING_DATA.followups.filter(f => f.status !== "Completed").map(f => `<tr><td>${WF.esc(f.task)}</td><td>${WF.esc(f.assignee)}</td><td>${WF.esc(f.due)}</td><td><span class="wf-badge">${WF.esc(f.status)}</span></td></tr>`).join("")}</tbody></table></div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Activities</span><button data-screen="timeline" class="wf-btn wf-btn--sm">Timeline</button></div>
            <div class="wf-card__body">${WF.timeline(MEETING_DATA.timeline.slice(0, 4))}</div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Meeting Success Rate Trend</span><button data-screen="analytics" class="wf-btn wf-btn--sm">Analytics</button></div>
          <div class="wf-card__body"><div class="wf-chart-placeholder" style="height:200px">Line Chart — Success Rate & Completion by Month</div></div>
        </div>
      `
    },
    {
      id: "calendar", label: "Meeting Calendar",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Meeting Calendar", "Day, week, and month views across all meetings", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="schedule" class="wf-btn wf-btn--sm wf-btn--primary">+ Schedule</button>
        `)}
        ${WF.toolbar({ filters: ["Brand", "Type", "Mode", "Status", "Organizer", "City"] })}
        ${WF.calendarView("Week")}
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Upcoming This Week</span></div>
          <div class="wf-card__body" style="padding:0">${WF.meetingTable(MEETING_DATA.meetings)}</div>
        </div>
      `
    },
    {
      id: "list", label: "Meeting List",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Meeting List", "All meetings — table, kanban, and timeline views", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="schedule" class="wf-btn wf-btn--sm wf-btn--primary">+ Schedule Meeting</button>
        `)}
        ${WF.toolbar({ filters: ["Status", "Type", "Brand", "Mode", "Priority", "Organizer", "Date Range"] })}
        <div class="wf-flex wf-gap-8 wf-mb-16" style="align-items:center">
          ${WF.viewToggle("table")}
          <span style="font-size:12px;color:var(--wf-text-muted);margin-left:auto">86 meetings · Page 1 of 9</span>
        </div>
        <div id="wf-data-content">${WF.meetingTable(MEETING_DATA.meetings)}</div>
        ${WF.loadingState()}
      `
    },
    {
      id: "schedule", label: "Schedule Meeting",
      breadcrumb: [{ label: "Meeting List", screen: "list" }, { label: "Schedule Meeting" }],
      render: () => `${roleBar()}${WF.pageHeader("Schedule Meeting", "Create a new meeting with agenda and participants")}<div class="wf-card"><div class="wf-card__body">${WF.meetingForm(null, "create")}</div></div>`
    },
    {
      id: "details", label: "Meeting Details",
      breadcrumb: [{ label: "Meeting List", screen: "list" }, { label: m().title }],
      render: () => {
        const mtg = m();
        return `
          ${roleBar()}
          ${WF.pageHeader(mtg.title, mtg.id + " · " + mtg.brand + " · " + mtg.city, `
            <button data-screen="online" class="wf-btn wf-btn--sm wf-btn--primary">Join Meeting</button>
            <button data-screen="edit" class="wf-btn wf-btn--sm">Edit</button>
            <button data-modal="reschedule" class="wf-btn wf-btn--sm">Reschedule</button>
            <button class="wf-btn wf-btn--sm wf-btn--danger" data-modal="cancel-meeting">Cancel</button>
          `)}
          ${WF.workflowStepper(mtg.status, MEETING_DATA.workflow)}
          ${meetingTabs("details")}
          <div class="wf-detail-layout">
            <div class="wf-detail-sidebar">${WF.meetingProfileCard(mtg)}</div>
            <div>
              <div class="wf-card-grid" style="grid-template-columns:repeat(4,1fr)">
                <div class="wf-stat-card"><div class="wf-stat-card__label">Type</div><div class="wf-stat-card__value" style="font-size:14px">${WF.esc(mtg.type)}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Priority</div><div class="wf-stat-card__value" style="font-size:14px">${WF.esc(mtg.priority)}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Participants</div><div class="wf-stat-card__value">${mtg.participants.length}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Mode</div><div class="wf-stat-card__value" style="font-size:14px">${WF.esc(mtg.mode)}</div></div>
              </div>
              <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Overview</span></div>
                <div class="wf-card__body">
                  <div class="wf-form__grid wf-form__grid--3">
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Customer</span><span class="wf-detail-info__value">${WF.esc(mtg.customer)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Brand</span><span class="wf-detail-info__value">${WF.esc(mtg.brand)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Franchise Model</span><span class="wf-detail-info__value">${WF.esc(mtg.model)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Date & Time</span><span class="wf-detail-info__value">${WF.esc(mtg.date)} · ${WF.esc(mtg.start)} – ${WF.esc(mtg.end)} IST</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Organizer</span><span class="wf-detail-info__value">${WF.esc(mtg.organizer)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Expected Outcome</span><span class="wf-detail-info__value">${WF.esc(mtg.outcome)}</span></div>
                  </div>
                </div>
              </div>
              <div class="wf-grid-2">
                <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Agenda</span><button data-screen="agenda" class="wf-btn wf-btn--sm">Full Agenda</button></div>
                  <div class="wf-card__body"><p style="font-size:13px">${WF.esc(mtg.agenda)}</p></div>
                </div>
                <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Attendance</span><button data-screen="participants" class="wf-btn wf-btn--sm">Participants</button></div>
                  <div class="wf-card__body">${MEETING_DATA.participants.map(p => `<div class="wf-detail-info__row"><span class="wf-detail-info__label">${WF.esc(p.name)}</span><span class="wf-badge">${WF.esc(p.status)}</span></div>`).join("")}</div>
                </div>
              </div>
              <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Action Items & Follow-ups</span><button data-screen="followups" class="wf-btn wf-btn--sm">View All</button></div>
                <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Task</th><th>Assignee</th><th>Due</th><th>Status</th></tr></thead>
                <tbody>${MEETING_DATA.followups.map(f => `<tr><td>${WF.esc(f.task)}</td><td>${WF.esc(f.assignee)}</td><td>${WF.esc(f.due)}</td><td><span class="wf-badge">${WF.esc(f.status)}</span></td></tr>`).join("")}</tbody></table></div>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      id: "edit", label: "Edit Meeting",
      breadcrumb: [{ label: "Meeting List", screen: "list" }, { label: m().title, screen: "details" }, { label: "Edit" }],
      render: () => `${roleBar()}${WF.pageHeader("Edit Meeting", m().id)}<div class="wf-card"><div class="wf-card__body">${WF.meetingForm(m(), "edit")}</div></div>`
    },
    {
      id: "agenda", label: "Meeting Agenda",
      breadcrumb: [{ label: "Meeting List", screen: "list" }, { label: m().title, screen: "details" }, { label: "Agenda" }],
      render: () => {
        const mtg = m();
        return `
          ${roleBar()}
          ${WF.pageHeader("Meeting Agenda", mtg.title, `<button data-screen="edit" class="wf-btn wf-btn--sm">Edit Agenda</button>`)}
          ${meetingTabs("agenda")}
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Agenda Items</span><button class="wf-btn wf-btn--sm">+ Add Item</button></div>
            <div class="wf-card__body">
              <div class="wf-timeline">
                <div class="wf-timeline__item"><div class="wf-timeline__dot"></div><div class="wf-timeline__content"><div class="wf-timeline__title">10:00 — Welcome & Introductions</div><div class="wf-timeline__desc">Abdul Syed · 5 min</div></div></div>
                <div class="wf-timeline__item"><div class="wf-timeline__dot"></div><div class="wf-timeline__content"><div class="wf-timeline__title">10:05 — Brand Presentation</div><div class="wf-timeline__desc">Odette deck, market positioning · 25 min</div></div></div>
                <div class="wf-timeline__item"><div class="wf-timeline__dot"></div><div class="wf-timeline__content"><div class="wf-timeline__title">10:30 — ROI & Investment Discussion</div><div class="wf-timeline__desc">${WF.esc(mtg.discussion)} · 20 min</div></div></div>
                <div class="wf-timeline__item"><div class="wf-timeline__dot"></div><div class="wf-timeline__content"><div class="wf-timeline__title">10:50 — Q&A & Next Steps</div><div class="wf-timeline__desc">Expected: ${WF.esc(mtg.outcome)} · 10 min</div></div></div>
              </div>
            </div>
          </div>
          <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Discussion Points</span></div>
            <div class="wf-card__body"><p style="font-size:13px">${WF.esc(mtg.discussion)}</p></div>
          </div>
        `;
      }
    },
    {
      id: "participants", label: "Meeting Participants",
      breadcrumb: [{ label: "Meeting List", screen: "list" }, { label: m().title, screen: "details" }, { label: "Participants" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Meeting Participants", m().title, `
          <button class="wf-btn wf-btn--sm" data-modal="send-email">Send Invite</button>
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Add Participant</button>
        `)}
        ${meetingTabs("participants")}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Participants & Attendance</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Name</th><th>Role</th><th>Email</th><th>RSVP</th><th>Attendance</th><th>Actions</th></tr></thead>
          <tbody>${MEETING_DATA.participants.map(p => `<tr>
            <td>${WF.esc(p.name)}</td><td>${WF.esc(p.role)}</td><td>${WF.esc(p.email)}</td>
            <td><span class="wf-badge">${WF.esc(p.status)}</span></td>
            <td><span class="wf-badge wf-badge--outline">Not started</span></td>
            <td><button class="wf-btn wf-btn--sm">Remove</button></td>
          </tr>`).join("")}</tbody></table></div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Organizer</span></div>
          <div class="wf-card__body"><div class="wf-detail-info__row"><span class="wf-detail-info__label">Name</span><span class="wf-detail-info__value">${WF.esc(m().organizer)}</span></div></div>
        </div>
      `
    },
    {
      id: "notes", label: "Meeting Notes",
      breadcrumb: [{ label: "Meeting List", screen: "list" }, { label: m().title, screen: "details" }, { label: "Notes" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Meeting Notes", "Discussion notes and internal comments", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Add Note</button>
        `)}
        ${meetingTabs("notes")}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Discussion Notes</span></div>
          <div class="wf-card__body">
            <div class="wf-form__group"><textarea class="wf-form__textarea" rows="6" placeholder="Capture discussion points during the meeting…">${WF.esc(m().notes)}</textarea></div>
            <button class="wf-btn wf-btn--sm wf-btn--primary">Save Notes</button>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Internal Notes History</span></div>
          <div class="wf-card__body">${MEETING_DATA.notes.map(n => `
            <div style="padding:12px 0;border-bottom:1px solid var(--wf-border-light)">
              <div style="font-size:12px;color:var(--wf-text-muted);margin-bottom:4px">${WF.esc(n.author)} · ${WF.esc(n.time)}</div>
              <p style="font-size:13px;margin:0">${WF.esc(n.body)}</p>
            </div>
          `).join("")}</div>
        </div>
      `
    },
    {
      id: "documents", label: "Meeting Documents",
      breadcrumb: [{ label: "Meeting List", screen: "list" }, { label: m().title, screen: "details" }, { label: "Documents" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Meeting Documents", "Attachments, decks, and meeting recordings", `
          <button class="wf-btn wf-btn--sm">Export</button>
          <button class="wf-btn wf-btn--sm wf-btn--primary">Upload</button>
        `)}
        ${meetingTabs("documents")}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Documents</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th><span class="wf-table__checkbox"></span></th><th>Name</th><th>Type</th><th>Size</th><th>Uploaded</th><th>Actions</th></tr></thead>
          <tbody>${MEETING_DATA.documents.map(d => `<tr>
            <td><span class="wf-table__checkbox"></span></td>
            <td>${WF.esc(d.name)}</td><td><span class="wf-badge wf-badge--outline">${WF.esc(d.type)}</span></td>
            <td>${WF.esc(d.size)}</td><td>${WF.esc(d.date)}</td>
            <td><button class="wf-btn wf-btn--sm">Download</button> <button class="wf-btn wf-btn--sm">Preview</button></td>
          </tr>`).join("")}</tbody></table></div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Meeting Recording</span></div>
          <div class="wf-card__body">
            <div class="wf-chart-placeholder" style="height:180px">Video Player — Recording available after meeting completion</div>
            <p style="font-size:12px;color:var(--wf-text-muted);margin-top:8px">Recording link will appear here for online meetings.</p>
          </div>
        </div>
        <div class="wf-upload wf-mt-16"><div class="wf-upload__icon"></div><div class="wf-upload__text">Drag & drop files or click to upload</div></div>
      `
    },
    {
      id: "timeline", label: "Meeting Timeline",
      breadcrumb: [{ label: "Meeting List", screen: "list" }, { label: m().title, screen: "details" }, { label: "Timeline" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Meeting Timeline", "Chronological activity and status changes")}
        ${meetingTabs("timeline")}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Activity Timeline</span></div>
          <div class="wf-card__body">${WF.timeline(MEETING_DATA.timeline)}</div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Activity Log</span><button class="wf-btn wf-btn--sm">Export Log</button></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Timestamp</th><th>Action</th><th>User</th><th>Details</th></tr></thead>
          <tbody>${MEETING_DATA.timeline.map(t => `<tr>
            <td>${WF.esc(t.time)}</td><td>${WF.esc(t.title)}</td><td>${WF.esc(t.user)}</td><td>${WF.esc(t.desc)}</td>
          </tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "followups", label: "Meeting Follow-ups",
      breadcrumb: [{ label: "Meeting List", screen: "list" }, { label: "Follow-ups" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Meeting Follow-ups", "Action items and tasks from meetings", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Create Follow-up</button>
        `)}
        ${WF.toolbar({ filters: ["Status", "Assignee", "Due Date", "Meeting", "Priority"] })}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Pending Follow-ups</span><span class="wf-badge">4 open</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th><span class="wf-table__checkbox"></span></th><th>Task</th><th>Meeting</th><th>Assignee</th><th>Due</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>${MEETING_DATA.followups.map(f => `<tr>
            <td><span class="wf-table__checkbox"></span></td>
            <td>${WF.esc(f.task)}</td><td><a data-screen="details" class="wf-table__link">${WF.esc(m().title)}</a></td>
            <td>${WF.esc(f.assignee)}</td><td>${WF.esc(f.due)}</td>
            <td><span class="wf-badge${f.status === "Completed" ? " wf-badge--dark" : ""}">${WF.esc(f.status)}</span></td>
            <td><button class="wf-btn wf-btn--sm">Complete</button></td>
          </tr>`).join("")}</tbody></table>${WF.pagination(24)}</div>
        </div>
      `
    },
    {
      id: "outcomes", label: "Meeting Outcomes",
      breadcrumb: [{ label: "Meeting List", screen: "list" }, { label: m().title, screen: "details" }, { label: "Outcomes" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Meeting Outcomes", "Expected vs achieved outcomes", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Add Outcome</button>
        `)}
        ${meetingTabs("outcomes")}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Expected Outcome</span></div>
          <div class="wf-card__body"><p style="font-size:13px">${WF.esc(m().outcome)}</p></div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Outcome Tracking</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Outcome Item</th><th>Status</th><th>Owner</th><th>Actions</th></tr></thead>
          <tbody>${MEETING_DATA.outcomes.map(o => `<tr>
            <td>${WF.esc(o.item)}</td>
            <td><span class="wf-badge${o.status === "Achieved" ? " wf-badge--dark" : ""}">${WF.esc(o.status)}</span></td>
            <td>${WF.esc(o.owner)}</td>
            <td><button class="wf-btn wf-btn--sm">Update</button></td>
          </tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "online", label: "Online Meeting",
      breadcrumb: [{ label: "Meeting List", screen: "list" }, { label: m().title, screen: "details" }, { label: "Online Meeting" }],
      render: () => {
        const mtg = m();
        return `
          ${roleBar()}
          ${WF.pageHeader("Online Meeting", mtg.title, `
            <button class="wf-btn wf-btn--sm wf-btn--primary">Join Google Meet</button>
            <button class="wf-btn wf-btn--sm">Copy Link</button>
          `)}
          ${meetingTabs("online")}
          <div class="wf-grid-2">
            <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Google Meet</span></div>
              <div class="wf-card__body">
                <div class="wf-detail-info__row"><span class="wf-detail-info__label">Link</span><span class="wf-detail-info__value"><a href="#" style="color:inherit">${WF.esc(mtg.meetLink || "Not set")}</a></span></div>
                <button class="wf-btn wf-btn--primary wf-mt-16">Launch Google Meet</button>
              </div>
            </div>
            <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Zoom</span></div>
              <div class="wf-card__body">
                <div class="wf-detail-info__row"><span class="wf-detail-info__label">Link</span><span class="wf-detail-info__value">${WF.esc(mtg.zoomLink || "Not set")}</span></div>
                <button class="wf-btn wf-mt-16" disabled>Launch Zoom</button>
              </div>
            </div>
          </div>
          <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Meeting Room Preview</span></div>
            <div class="wf-card__body"><div class="wf-chart-placeholder" style="height:320px">Video Conference Preview — Camera / Mic / Screen Share controls</div></div>
          </div>
          <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Dial-in & Access</span></div>
            <div class="wf-card__body">
              <div class="wf-form__grid wf-form__grid--3">
                <div class="wf-detail-info__row"><span class="wf-detail-info__label">Meeting ID</span><span class="wf-detail-info__value">abc-defg-hij</span></div>
                <div class="wf-detail-info__row"><span class="wf-detail-info__label">PIN</span><span class="wf-detail-info__value">482 019</span></div>
                <div class="wf-detail-info__row"><span class="wf-detail-info__label">Time Zone</span><span class="wf-detail-info__value">IST (UTC+5:30)</span></div>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      id: "offline", label: "Offline Meeting Details",
      breadcrumb: [{ label: "Meeting List", screen: "list" }, { label: "Site Visit — Indiranagar", screen: "details" }, { label: "Offline Details" }],
      render: () => {
        const offline = MEETING_DATA.meetings[2];
        return `
          ${roleBar()}
          ${WF.pageHeader("Offline Meeting Details", offline.title, `
            <button class="wf-btn wf-btn--sm">Get Directions</button>
            <button data-screen="edit" class="wf-btn wf-btn--sm">Edit Location</button>
          `)}
          ${meetingTabs("offline")}
          <div class="wf-detail-layout">
            <div class="wf-detail-sidebar">${WF.meetingProfileCard(offline)}</div>
            <div>
              <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Location</span></div>
                <div class="wf-card__body">
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Address</span><span class="wf-detail-info__value">${WF.esc(offline.location)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">City</span><span class="wf-detail-info__value">${WF.esc(offline.city)}</span></div>
                  <div class="wf-detail-info__row"><span class="wf-detail-info__label">Date & Time</span><span class="wf-detail-info__value">${WF.esc(offline.date)} · ${WF.esc(offline.start)} – ${WF.esc(offline.end)}</span></div>
                </div>
              </div>
              <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Map</span></div>
                <div class="wf-card__body"><div class="wf-chart-placeholder" style="height:280px">Map — Indiranagar, Bengaluru · Pin location</div></div>
              </div>
              <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Site Visit Checklist</span></div>
                <div class="wf-card__body">
                  ${["Footfall assessment", "Accessibility & parking", "Kitchen layout review", "Landlord terms", "Photos captured"].map((item, i) => `
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">${WF.esc(item)}</span><span class="wf-badge${i < 2 ? " wf-badge--dark" : ""}">${i < 2 ? "Done" : "Pending"}</span></div>
                  `).join("")}
                </div>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      id: "cancel-reschedule", label: "Cancel / Reschedule",
      breadcrumb: [{ label: "Meeting List", screen: "list" }, { label: "Cancel / Reschedule" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Cancel / Reschedule Meeting", "Manage meeting changes and notify participants")}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Reschedule Meeting</span></div>
            <div class="wf-card__body">
              <p style="font-size:13px;margin-bottom:16px">Select a new date and time. All participants will be notified.</p>
              <div class="wf-form__grid">
                <div class="wf-form__group"><label class="wf-form__label">Meeting</label><select class="wf-form__select">${MEETING_DATA.meetings.map(mt => `<option>${WF.esc(mt.title)}</option>`).join("")}</select></div>
                <div class="wf-form__group"><label class="wf-form__label">New Date</label><input type="date" class="wf-form__input" value="2024-06-27"></div>
                <div class="wf-form__group"><label class="wf-form__label">Start Time</label><input type="time" class="wf-form__input" value="11:00"></div>
                <div class="wf-form__group"><label class="wf-form__label">End Time</label><input type="time" class="wf-form__input" value="12:00"></div>
                <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Notify</label><select class="wf-form__select"><option>Email + SMS + Calendar update</option><option>Email only</option></select></div>
              </div>
              <button class="wf-btn wf-btn--primary wf-mt-16" data-modal="reschedule">Reschedule</button>
            </div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Cancel Meeting</span></div>
            <div class="wf-card__body">
              <p style="font-size:13px;margin-bottom:16px">Cancel a meeting and record the reason. This action cannot be undone.</p>
              <div class="wf-form__grid">
                <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Meeting</label><select class="wf-form__select">${MEETING_DATA.meetings.map(mt => `<option>${WF.esc(mt.title)}</option>`).join("")}</select></div>
                <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Reason</label><select class="wf-form__select"><option>Customer unavailable</option><option>Rescheduled to new meeting</option><option>No show</option><option>Internal conflict</option><option>Other</option></select></div>
                <div class="wf-form__group wf-form__group--full"><label class="wf-form__label">Notes</label><textarea class="wf-form__textarea" placeholder="Optional cancellation notes…"></textarea></div>
              </div>
              <button class="wf-btn wf-btn--danger wf-mt-16" data-modal="cancel-meeting">Cancel Meeting</button>
            </div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Recently Cancelled / Rescheduled</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Meeting</th><th>Action</th><th>Date</th><th>By</th><th>Reason</th></tr></thead>
          <tbody>
            <tr><td>Discovery Call — Sneha</td><td><span class="wf-badge">Rescheduled</span></td><td>22 Jun 2024</td><td>Diksha</td><td>Customer requested later slot</td></tr>
            <tr><td>Legal Discussion — Arjun</td><td><span class="wf-badge wf-badge--dark">Cancelled</span></td><td>21 Jun 2024</td><td>Sumanth</td><td>Merged into agreement review</td></tr>
          </tbody></table></div>
        </div>
      `
    },
    {
      id: "analytics", label: "Meeting Analytics",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Meeting Analytics", "Performance metrics, trends, and team insights", `
          <button class="wf-btn wf-btn--sm">Export Report</button>
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
        `)}
        ${WF.toolbar({ filters: ["Date Range", "Brand", "Type", "Organizer", "City", "Mode"] })}
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Total Meetings</div><div class="wf-stat-card__value">186</div><div class="wf-stat-card__change">Last 90 days</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Completion Rate</div><div class="wf-stat-card__value">82%</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Avg Duration</div><div class="wf-stat-card__value">52 min</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Follow-up Rate</div><div class="wf-stat-card__value">68%</div></div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Meetings by Type</span></div><div class="wf-card__body"><div class="wf-chart-placeholder">Bar Chart — Discovery, Presentation, Site Visit, Legal…</div></div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Meetings by Status</span></div><div class="wf-card__body"><div class="wf-chart-placeholder">Donut Chart — Scheduled / Completed / Cancelled</div></div></div>
        </div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Success Rate by Brand</span></div><div class="wf-card__body"><div class="wf-chart-placeholder">Horizontal Bar — Odette, OBC, Kasturi, Tea Time…</div></div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Team Performance</span></div>
            <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Organizer</th><th>Meetings</th><th>Completed</th><th>Success %</th></tr></thead>
            <tbody>
              <tr><td>Abdul Syed</td><td>24</td><td>20</td><td>83%</td></tr>
              <tr><td>Himani Bhargava</td><td>18</td><td>16</td><td>89%</td></tr>
              <tr><td>Diksha</td><td>15</td><td>11</td><td>73%</td></tr>
              <tr><td>Om Anil</td><td>12</td><td>10</td><td>83%</td></tr>
            </tbody></table></div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Meeting Volume Trend</span></div>
          <div class="wf-card__body"><div class="wf-chart-placeholder" style="height:240px">Area Chart — Meetings per Week (Scheduled vs Completed)</div></div>
        </div>
      `
    }
  ];

  function init() {
    WF_SPA.init({
      moduleKey: "meetings",
      moduleLabel: "Meeting Management",
      moduleTitle: "Meeting Management",
      moduleHref: "index.html",
      defaultScreen: "dashboard",
      searchPlaceholder: "Search meetings, customers, brands, participants…",
      modals: WF.meetingModals,
      screens
    });

    document.body.addEventListener("click", (e) => {
      const roleBtn = e.target.closest("[data-role]");
      if (roleBtn) {
        activeRole = roleBtn.getAttribute("data-role");
        document.querySelectorAll("[data-role]").forEach((btn) => {
          btn.classList.toggle("wf-btn--primary", btn.getAttribute("data-role") === activeRole);
        });
        WF.showToast(`Viewing as ${activeRole}`);
      }

      const listView = e.target.closest("[data-list-view]");
      if (listView && WF_SPA.getCurrent() === "list") {
        const view = listView.getAttribute("data-list-view");
        const container = document.getElementById("wf-data-content");
        if (!container) return;
        document.querySelectorAll("[data-list-view]").forEach((btn) => {
          btn.classList.toggle("wf-btn--primary", btn.getAttribute("data-list-view") === view);
        });
        if (view === "table") container.innerHTML = WF.meetingTable(MEETING_DATA.meetings);
        else if (view === "kanban") container.innerHTML = WF.kanbanView(MEETING_DATA.kanban);
        else if (view === "timeline") container.innerHTML = `<div class="wf-card"><div class="wf-card__body">${WF.timeline(MEETING_DATA.timeline)}</div></div>`;
        WF.bindEvents();
      }

      const calView = e.target.closest("[data-cal-view]");
      if (calView) {
        const view = calView.getAttribute("data-cal-view");
        const calEl = document.querySelector(".wf-chart-placeholder");
        if (calEl && calEl.textContent.includes("Calendar")) {
          document.querySelectorAll("[data-cal-view]").forEach((btn) => {
            btn.classList.toggle("wf-btn--primary", btn.getAttribute("data-cal-view") === view);
          });
          calEl.textContent = `${view.charAt(0).toUpperCase() + view.slice(1)} Calendar View — Meeting blocks by time slot`;
        }
      }
    });
  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => MEETINGS_MODULE.init());
