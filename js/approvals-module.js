/* Approval Management — Single Page Module (17 screens) */

const APPROVALS_MODULE = (() => {
  const a = () => APPROVAL_DATA.approvals[0];
  let activeRole = "CEO";

  const roleBar = () => WF.roleSwitcher(activeRole, APPROVAL_DATA.roles);

  const approvalTabs = (active) => WF.spaTabs([
    { id: "details", label: "Overview" },
    { id: "workflow", label: "Workflow" },
    { id: "comments", label: "Comments" },
    { id: "history", label: "History" },
    { id: "documents", label: "Documents" },
    { id: "timeline", label: "Timeline" },
    { id: "decision", label: "Decision" },
    { id: "audit", label: "Activity Log" }
  ], active);

  const pending = () => APPROVAL_DATA.approvals.filter(x => ["Submitted", "Manager Review", "Operations Review", "CEO Approval"].includes(x.status));
  const rejected = () => APPROVAL_DATA.approvals.filter(x => x.status === "Rejected");
  const completed = () => APPROVAL_DATA.approvals.filter(x => x.status === "Approved");
  const returned = () => APPROVAL_DATA.approvals.filter(x => x.status === "Returned for Changes");

  const screens = [
    {
      id: "dashboard", label: "Approval Dashboard",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Approval Dashboard", "Pending requests, SLA tracking, and approval performance", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="inbox" class="wf-btn wf-btn--sm wf-btn--primary">Open Inbox</button>
        `)}
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Pending Approvals</div><div class="wf-stat-card__value">14</div><div class="wf-stat-card__change">5 due today</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Approved Today</div><div class="wf-stat-card__value">8</div><div class="wf-stat-card__change">↑ 2 vs yesterday</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Rejected Today</div><div class="wf-stat-card__value">1</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Escalated</div><div class="wf-stat-card__value">2</div><div class="wf-stat-card__change">SLA breach</div></div>
        </div>
        <div class="wf-card-grid" style="grid-template-columns:repeat(4,1fr)">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Avg Approval Time</div><div class="wf-stat-card__value">18h</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">SLA Compliance</div><div class="wf-stat-card__value">92%</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">My Pending Tasks</div><div class="wf-stat-card__value">3</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Returned for Changes</div><div class="wf-stat-card__value">2</div></div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Requests</span><button data-screen="inbox" class="wf-btn wf-btn--sm">Inbox</button></div>
            <div class="wf-card__body" style="padding:0">${WF.approvalTable(APPROVAL_DATA.approvals.slice(0, 4), { showActions: false })}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Approval Trends</span><button data-screen="analytics" class="wf-btn wf-btn--sm">Analytics</button></div>
            <div class="wf-card__body"><div class="wf-chart-placeholder" style="height:220px">Line Chart — Submitted vs Approved vs Rejected (30 days)</div></div>
          </div>
        </div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Department-wise Approvals</span></div>
            <div class="wf-card__body"><div class="wf-chart-placeholder">Bar Chart — Sales · Operations · Accounts · Legal</div></div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Recent Activity</span><button data-screen="audit" class="wf-btn wf-btn--sm">Audit Log</button></div>
            <div class="wf-card__body">${WF.timeline(APPROVAL_DATA.timeline.slice(0, 4))}</div>
          </div>
        </div>
      `
    },
    {
      id: "inbox", label: "Approval Inbox",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Approval Inbox", "All requests assigned to you or your team", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="bulk" class="wf-btn wf-btn--sm">Bulk Actions</button>
          <button data-screen="decision" class="wf-btn wf-btn--sm wf-btn--primary">Review Next</button>
        `)}
        ${WF.toolbar({ filters: ["Status", "Type", "Priority", "Department", "Module", "Date Range"] })}
        <div class="wf-flex wf-gap-8 wf-mb-16" style="flex-wrap:wrap">
          <button class="wf-btn wf-btn--sm wf-btn--primary" data-screen="pending">Pending (14)</button>
          <button class="wf-btn wf-btn--sm" data-screen="escalated">Escalated (2)</button>
          <button class="wf-btn wf-btn--sm" data-screen="completed">Completed</button>
          <button class="wf-btn wf-btn--sm" data-screen="rejected">Rejected</button>
        </div>
        <div id="wf-data-content">${WF.approvalTable(pending())}</div>
        ${WF.loadingState()}
      `
    },
    {
      id: "pending", label: "Pending Approvals",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Pending Approvals", "Requests awaiting action at current approval level", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
          <button data-screen="bulk" class="wf-btn wf-btn--sm">Bulk Approve</button>
        `)}
        ${WF.toolbar({ filters: ["Type", "Priority", "Approver", "Department", "Due Date", "Module"] })}
        <div id="wf-data-content">${WF.approvalTable(pending())}</div>
      `
    },
    {
      id: "details", label: "Approval Details",
      breadcrumb: [{ label: "Approval Inbox", screen: "inbox" }, { label: a().id }],
      render: () => {
        const ap = a();
        return `
          ${roleBar()}
          ${WF.pageHeader(ap.type, ap.id + " · " + ap.reference, `
            <button data-modal="approve" class="wf-btn wf-btn--sm wf-btn--primary">Approve</button>
            <button data-modal="reject" class="wf-btn wf-btn--sm wf-btn--danger">Reject</button>
            <button data-modal="return" class="wf-btn wf-btn--sm">Return</button>
            <button data-screen="decision" class="wf-btn wf-btn--sm">Decision Panel</button>
          `)}
          ${WF.workflowStepper(ap.status, APPROVAL_DATA.workflow)}
          ${approvalTabs("details")}
          <div class="wf-detail-layout">
            <div class="wf-detail-sidebar">${WF.approvalProfileCard(ap)}</div>
            <div>
              <div class="wf-card-grid" style="grid-template-columns:repeat(4,1fr)">
                <div class="wf-stat-card"><div class="wf-stat-card__label">Module</div><div class="wf-stat-card__value" style="font-size:14px">${WF.esc(ap.module)}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Department</div><div class="wf-stat-card__value" style="font-size:14px">${WF.esc(ap.department)}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Brand</div><div class="wf-stat-card__value" style="font-size:14px">${WF.esc(ap.brand)}</div></div>
                <div class="wf-stat-card"><div class="wf-stat-card__label">Location</div><div class="wf-stat-card__value" style="font-size:14px">${WF.esc(ap.city)}</div></div>
              </div>
              <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Overview</span><span class="wf-approval-badge">Current: ${WF.esc(ap.currentApprover)}</span></div>
                <div class="wf-card__body">
                  <p style="font-size:13px;margin-bottom:16px">${WF.esc(ap.reason)}</p>
                  <div class="wf-form__grid wf-form__grid--3">
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Requested By</span><span class="wf-detail-info__value">${WF.esc(ap.requestedBy)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Created</span><span class="wf-detail-info__value">${WF.esc(ap.createdDate)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Due Date</span><span class="wf-detail-info__value">${WF.esc(ap.dueDate)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Approval Level</span><span class="wf-detail-info__value">${WF.esc(ap.level)}</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Priority</span><span class="wf-detail-info__value"><span class="wf-badge wf-badge--dark">${WF.esc(ap.priority)}</span></span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Status</span><span class="wf-detail-info__value"><span class="wf-badge">${WF.esc(ap.status)}</span></span></div>
                  </div>
                </div>
              </div>
              <div class="wf-grid-2">
                <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Approval Progress</span><button data-screen="workflow" class="wf-btn wf-btn--sm">Workflow</button></div>
                  <div class="wf-card__body">${WF.approvalLevels(APPROVAL_DATA.levels, ap.status)}</div>
                </div>
                <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Related Records</span></div>
                  <div class="wf-card__body">
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Lead</span><span class="wf-detail-info__value">L-2024-089</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Customer</span><span class="wf-detail-info__value">Rahul Sharma</span></div>
                    <div class="wf-detail-info__row"><span class="wf-detail-info__label">Brand</span><span class="wf-detail-info__value">${WF.esc(ap.brand)}</span></div>
                  </div>
                </div>
              </div>
              <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Assigned Approvers</span></div>
                <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Level</th><th>Approver</th><th>Role</th><th>Status</th></tr></thead>
                <tbody>${APPROVAL_DATA.levels.map(l => `<tr><td>${l.level}</td><td>${WF.esc(l.approver)}</td><td>${WF.esc(l.name)}</td><td><span class="wf-badge">${WF.esc(l.status)}</span></td></tr>`).join("")}</tbody></table></div>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      id: "workflow", label: "Multi-Level Workflow",
      breadcrumb: [{ label: "Approval Inbox", screen: "inbox" }, { label: a().id, screen: "details" }, { label: "Workflow" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Multi-Level Approval Workflow", a().id + " · " + a().type)}
        ${approvalTabs("workflow")}
        <div class="wf-card wf-mb-16"><div class="wf-card__header"><span class="wf-card__title">Workflow Stages</span><span class="wf-approval-badge">Levels cannot be skipped</span></div>
          <div class="wf-card__body">${WF.workflowStepper(a().status, APPROVAL_DATA.workflow)}</div>
        </div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Approval Levels</span></div>
          <div class="wf-card__body">${WF.approvalLevels(APPROVAL_DATA.levels, a().status)}</div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Validation Rules</span></div>
          <div class="wf-card__body" style="font-size:13px;line-height:1.8">
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Skip levels</span><span class="wf-badge wf-badge--dark">Prevented</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Rejection comment</span><span class="wf-badge wf-badge--dark">Mandatory</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Document upload</span><span class="wf-badge">Required for Agreement & Payment</span></div>
            <div class="wf-detail-info__row"><span class="wf-detail-info__label">Duplicate prevention</span><span class="wf-badge wf-badge--dark">Active</span></div>
          </div>
        </div>
      `
    },
    {
      id: "timeline", label: "Approval Timeline",
      breadcrumb: [{ label: "Approval Inbox", screen: "inbox" }, { label: a().id, screen: "details" }, { label: "Timeline" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Approval Timeline", "Chronological status changes and events")}
        ${approvalTabs("timeline")}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Timeline</span></div>
          <div class="wf-card__body">${WF.timeline(APPROVAL_DATA.timeline)}</div>
        </div>
      `
    },
    {
      id: "history", label: "Approval History",
      breadcrumb: [{ label: "Approval Inbox", screen: "inbox" }, { label: "History" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Approval History", "Complete history of actions on this request", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
        `)}
        ${approvalTabs("history")}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Action History — ${WF.esc(a().id)}</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Date</th><th>Action</th><th>Actor</th><th>Level</th><th>Notes</th></tr></thead>
          <tbody>${APPROVAL_DATA.history.map(h => `<tr>
            <td>${WF.esc(h.date)}</td><td><span class="wf-badge">${WF.esc(h.action)}</span></td>
            <td>${WF.esc(h.actor)}</td><td>${WF.esc(h.level)}</td><td>${WF.esc(h.notes)}</td>
          </tr>`).join("")}</tbody></table></div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Decision History</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Date</th><th>Decision</th><th>Approver</th><th>Level</th><th>Comment</th></tr></thead>
          <tbody>${APPROVAL_DATA.decisions.map(d => `<tr>
            <td>${WF.esc(d.date)}</td><td><span class="wf-badge${d.decision === "Approved" ? " wf-badge--dark" : ""}">${WF.esc(d.decision)}</span></td>
            <td>${WF.esc(d.actor)}</td><td>${WF.esc(d.level)}</td><td>${WF.esc(d.comment)}</td>
          </tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "comments", label: "Approval Comments",
      breadcrumb: [{ label: "Approval Inbox", screen: "inbox" }, { label: a().id, screen: "details" }, { label: "Comments" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Approval Comments", "Discussion thread and review notes", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">+ Add Comment</button>
        `)}
        ${approvalTabs("comments")}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Comments (${APPROVAL_DATA.comments.length})</span></div>
          <div class="wf-card__body">
            ${APPROVAL_DATA.comments.map(c => `
              <div style="padding:14px 0;border-bottom:1px solid var(--wf-border-light)">
                <div style="display:flex;justify-content:space-between;margin-bottom:6px">
                  <span style="font-size:13px;font-weight:600">${WF.esc(c.author)} <span class="wf-badge wf-badge--outline" style="margin-left:6px">${WF.esc(c.role)}</span></span>
                  <span style="font-size:12px;color:var(--wf-text-muted)">${WF.esc(c.time)}</span>
                </div>
                <p style="font-size:13px;margin:0">${WF.esc(c.body)}</p>
              </div>
            `).join("")}
            <div class="wf-form__group wf-mt-16"><textarea class="wf-form__textarea" placeholder="Add a comment…"></textarea></div>
            <button class="wf-btn wf-btn--sm wf-btn--primary">Post Comment</button>
          </div>
        </div>
      `
    },
    {
      id: "documents", label: "Approval Documents",
      breadcrumb: [{ label: "Approval Inbox", screen: "inbox" }, { label: a().id, screen: "details" }, { label: "Documents" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Approval Documents", "Supporting documents and attachments", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
          <button class="wf-btn wf-btn--sm wf-btn--primary">Upload</button>
        `)}
        ${approvalTabs("documents")}
        <div class="wf-card wf-mb-16"><div class="wf-card__body" style="font-size:13px;padding:12px 16px;background:var(--wf-surface-alt)">
          <strong>Validation:</strong> Document upload is mandatory for Agreement Approval, Payment Verification, and Document Approval types.
        </div></div>
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Supporting Documents</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th><span class="wf-table__checkbox"></span></th><th>Name</th><th>Type</th><th>Size</th><th>Uploaded</th><th>Actions</th></tr></thead>
          <tbody>${APPROVAL_DATA.documents.map(d => `<tr>
            <td><span class="wf-table__checkbox"></span></td>
            <td>${WF.esc(d.name)}</td><td><span class="wf-badge wf-badge--outline">${WF.esc(d.type)}</span></td>
            <td>${WF.esc(d.size)}</td><td>${WF.esc(d.date)}</td>
            <td><button class="wf-btn wf-btn--sm">Preview</button> <button class="wf-btn wf-btn--sm">Download</button></td>
          </tr>`).join("")}</tbody></table></div>
        </div>
        <div class="wf-upload wf-mt-16"><div class="wf-upload__icon"></div><div class="wf-upload__text">Drag & drop supporting documents</div></div>
      `
    },
    {
      id: "decision", label: "Approval Decision",
      breadcrumb: [{ label: "Approval Inbox", screen: "inbox" }, { label: a().id, screen: "details" }, { label: "Decision" }],
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Approval Decision", a().type + " · " + a().reference)}
        ${approvalTabs("decision")}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Request Summary</span></div>
            <div class="wf-card__body">${WF.approvalForm(a())}</div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Take Decision</span></div>
            <div class="wf-card__body">
              <div class="wf-form__group"><label class="wf-form__label">Current Level</label><input class="wf-form__input" value="${WF.esc(a().status)}" readonly></div>
              <div class="wf-form__group"><label class="wf-form__label">Decision</label><select class="wf-form__select"><option>Approve</option><option>Reject</option><option>Return for Changes</option></select></div>
              <div class="wf-form__group"><label class="wf-form__label wf-form__label--required">Comments</label><textarea class="wf-form__textarea" placeholder="Required for rejection. Optional for approval."></textarea></div>
              <div style="display:flex;gap:8px;margin-top:16px">
                <button class="wf-btn wf-btn--primary" data-modal="approve">Approve</button>
                <button class="wf-btn wf-btn--danger" data-modal="reject">Reject</button>
                <button class="wf-btn" data-modal="return">Return</button>
              </div>
            </div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Decision History</span></div>
          <div class="wf-card__body">${WF.timeline(APPROVAL_DATA.timeline.filter(t => t.title.includes("approved") || t.title.includes("submitted")))}</div>
        </div>
      `
    },
    {
      id: "analytics", label: "Approval Analytics",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Approval Analytics", "Performance metrics, SLA, and trends", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export Report</button>
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
        `)}
        ${WF.toolbar({ filters: ["Date Range", "Type", "Department", "Approver", "Status", "Priority"] })}
        <div class="wf-card-grid">
          <div class="wf-stat-card"><div class="wf-stat-card__label">Total Requests (90d)</div><div class="wf-stat-card__value">342</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Approval Rate</div><div class="wf-stat-card__value">84%</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">Avg Time to Approve</div><div class="wf-stat-card__value">18h</div></div>
          <div class="wf-stat-card"><div class="wf-stat-card__label">SLA Compliance</div><div class="wf-stat-card__value">92%</div></div>
        </div>
        <div class="wf-grid-2 wf-mb-20">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Approval Trends</span></div><div class="wf-card__body"><div class="wf-chart-placeholder">Area Chart — Submitted / Approved / Rejected per week</div></div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">By Approval Type</span></div><div class="wf-card__body"><div class="wf-chart-placeholder">Donut — Lead · Discount · Agreement · Payment · Brand</div></div></div>
        </div>
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Department-wise</span></div><div class="wf-card__body"><div class="wf-chart-placeholder">Bar Chart — Sales · Operations · Accounts · Legal</div></div></div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Approver Performance</span></div>
            <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Approver</th><th>Pending</th><th>Avg Time</th><th>SLA %</th></tr></thead>
            <tbody>
              <tr><td>Himani Bhargava</td><td>4</td><td>14h</td><td>96%</td></tr>
              <tr><td>Om Anil</td><td>3</td><td>22h</td><td>88%</td></tr>
              <tr><td>CEO</td><td>2</td><td>36h</td><td>90%</td></tr>
              <tr><td>Fazil</td><td>1</td><td>8h</td><td>98%</td></tr>
            </tbody></table></div>
          </div>
        </div>
      `
    },
    {
      id: "settings", label: "Approval Settings",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Approval Settings", "Workflow rules, SLA, and validation configuration", `
          <button class="wf-btn wf-btn--sm wf-btn--primary">Save Settings</button>
        `)}
        <div class="wf-grid-2">
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">SLA Configuration</span></div>
            <div class="wf-card__body">
              <div class="wf-form__grid">
                <div class="wf-form__group"><label class="wf-form__label">Manager Review (hours)</label><input class="wf-form__input" value="${APPROVAL_DATA.settings.slaHours.manager}"></div>
                <div class="wf-form__group"><label class="wf-form__label">Operations Review (hours)</label><input class="wf-form__input" value="${APPROVAL_DATA.settings.slaHours.operations}"></div>
                <div class="wf-form__group"><label class="wf-form__label">CEO Approval (hours)</label><input class="wf-form__input" value="${APPROVAL_DATA.settings.slaHours.ceo}"></div>
              </div>
            </div>
          </div>
          <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Validation Rules</span></div>
            <div class="wf-card__body" style="font-size:13px">
              <label style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><input type="checkbox" checked disabled> Prevent skipping approval levels</label>
              <label style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><input type="checkbox" checked disabled> Mandatory comment on rejection</label>
              <label style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><input type="checkbox" checked disabled> Prevent duplicate requests</label>
              <label style="display:flex;align-items:center;gap:8px"><input type="checkbox" checked disabled> Required fields validation</label>
            </div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Mandatory Document Types</span></div>
          <div class="wf-card__body">
            <div class="wf-form__grid wf-form__grid--3">
              ${APPROVAL_DATA.settings.mandatoryDocTypes.map(t => `<label style="display:flex;align-items:center;gap:8px;font-size:13px"><input type="checkbox" checked> ${WF.esc(t)}</label>`).join("")}
            </div>
          </div>
        </div>
        <div class="wf-card wf-mt-16"><div class="wf-card__header"><span class="wf-card__title">Approval Type Configuration</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Type</th><th>Levels</th><th>Doc Required</th><th>Active</th><th>Actions</th></tr></thead>
          <tbody>${APPROVAL_DATA.types.slice(0, 6).map((t, i) => `<tr>
            <td>${WF.esc(t)}</td><td>${i % 2 === 0 ? "3" : "2"}</td><td>${APPROVAL_DATA.settings.mandatoryDocTypes.includes(t) ? "Yes" : "No"}</td>
            <td><span class="wf-badge wf-badge--dark">Active</span></td><td><button class="wf-btn wf-btn--sm">Edit</button></td>
          </tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "escalated", label: "Escalated Approvals",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Escalated Approvals", "Requests past SLA — require immediate attention", `
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
        `)}
        ${WF.toolbar({ filters: ["Type", "Priority", "Escalated Date", "Approver"] })}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Escalated Requests</span><span class="wf-badge">2 active</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>ID</th><th>Type</th><th>Reference</th><th>Requested By</th><th>Priority</th><th>Approver</th><th>Due</th><th>Escalated</th><th>Reason</th><th>Actions</th></tr></thead>
          <tbody>${APPROVAL_DATA.escalated.map(e => `<tr>
            <td><a data-screen="details" class="wf-table__link">${WF.esc(e.id)}</a></td>
            <td>${WF.esc(e.type)}</td><td>${WF.esc(e.reference)}</td><td>${WF.esc(e.requestedBy)}</td>
            <td><span class="wf-badge wf-badge--dark">${WF.esc(e.priority)}</span></td>
            <td>${WF.esc(e.currentApprover)}</td><td>${WF.esc(e.dueDate)}</td><td>${WF.esc(e.escalatedOn)}</td>
            <td style="font-size:12px">${WF.esc(e.reason)}</td>
            <td><button data-screen="decision" class="wf-btn wf-btn--sm wf-btn--primary">Act Now</button></td>
          </tr>`).join("")}</tbody></table></div>
        </div>
      `
    },
    {
      id: "rejected", label: "Rejected Approvals",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Rejected Approvals", "Requests that were denied with mandatory comments", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
        `)}
        ${WF.toolbar({ filters: ["Type", "Rejected By", "Date Range", "Department"] })}
        <div id="wf-data-content">${rejected().length ? WF.approvalTable(rejected()) : WF.emptyState("No rejected approvals", "Rejected requests will appear here", "View Inbox", "#inbox")}</div>
      `
    },
    {
      id: "completed", label: "Completed Approvals",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Completed Approvals", "Fully approved requests", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export</button>
        `)}
        ${WF.toolbar({ filters: ["Type", "Approved By", "Date Range", "Module"] })}
        <div id="wf-data-content">${WF.approvalTable(completed())}</div>
      `
    },
    {
      id: "bulk", label: "Bulk Approval Actions",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Bulk Approval Actions", "Select and process multiple requests", `
          <button class="wf-btn wf-btn--sm" data-modal="bulk-approve">Bulk Approve Selected</button>
        `)}
        ${WF.toolbar({ filters: ["Status", "Type", "Priority", "Level"] })}
        <div class="wf-card wf-mb-16"><div class="wf-card__body" style="font-size:13px;padding:12px 16px;background:var(--wf-surface-alt)">
          <strong>Bulk rules:</strong> Only requests at the same approval level can be bulk-approved. Levels cannot be skipped. Rejection requires individual comments.
        </div></div>
        <div id="wf-data-content">${WF.approvalTable(pending())}</div>
        <div class="wf-flex wf-gap-8 wf-mt-16">
          <button class="wf-btn wf-btn--primary" data-modal="bulk-approve">Approve Selected (5)</button>
          <button class="wf-btn" data-screen="inbox">Cancel</button>
        </div>
      `
    },
    {
      id: "audit", label: "Approval Audit Log",
      render: () => `
        ${roleBar()}
        ${WF.pageHeader("Approval Audit Log", "Immutable log of all approval system actions", `
          <button class="wf-btn wf-btn--sm" data-action="export">Export Log</button>
          <button class="wf-btn wf-btn--sm" id="wf-demo-loading">Refresh</button>
        `)}
        ${WF.toolbar({ filters: ["Action", "User", "Entity", "Date Range"] })}
        <div class="wf-card"><div class="wf-card__header"><span class="wf-card__title">Audit Trail</span><span style="font-size:12px;color:var(--wf-text-muted)">124 events · Page 1 of 13</span></div>
          <div class="wf-table-wrap" style="border:none"><table class="wf-table"><thead><tr><th>Timestamp</th><th>User</th><th>Action</th><th>Entity</th><th>Details</th></tr></thead>
          <tbody>${APPROVAL_DATA.auditLog.map(l => `<tr>
            <td style="font-size:12px">${WF.esc(l.timestamp)}</td><td>${WF.esc(l.user)}</td>
            <td><span class="wf-badge wf-badge--outline">${WF.esc(l.action)}</span></td>
            <td><a data-screen="details" class="wf-table__link">${WF.esc(l.entity)}</a></td>
            <td style="font-size:12px">${WF.esc(l.details)}</td>
          </tr>`).join("")}</tbody></table>${WF.pagination(124)}</div>
        </div>
      `
    }
  ];

  function init() {
    WF_SPA.init({
      moduleKey: "approvals",
      moduleLabel: "Approval Management",
      moduleTitle: "Approval Management",
      moduleHref: "index.html",
      defaultScreen: "dashboard",
      searchPlaceholder: "Search approvals, references, requesters, types…",
      modals: WF.approvalModals,
      screens
    });

    document.body.addEventListener("click", (e) => {
      const roleBtn = e.target.closest("[data-role]");
      if (roleBtn) {
        activeRole = roleBtn.getAttribute("data-role");
        document.querySelectorAll("[data-role]").forEach((btn) => {
          btn.classList.toggle("wf-btn--primary", btn.getAttribute("data-role") === activeRole);
        });
        const msg = activeRole === "Sales Executive" ? "Viewing own requests only" : `Viewing as ${activeRole}`;
        WF.showToast(msg);
      }
    });
  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => APPROVALS_MODULE.init());
