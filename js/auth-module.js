/* Authentication — Enterprise wireframe module (7 screens) */

const AUTH_MODULE = (() => {
  const d = () => AUTH_DATA;

  const logo = () => `
    <div class="wf-auth__brand">
      <div class="wf-auth__logo-icon" aria-hidden="true">${WF.BRAND_MARK}</div>
      <div class="wf-auth__title">${WF.BRAND_NAME}</div>
      <div class="wf-auth__subtitle">Enterprise Franchise Management</div>
    </div>`;

  const cardFooter = () => `
    <div class="wf-auth__card-footer">
      <p class="wf-auth__legal">
        By signing in you agree to our
        <a href="#" data-action="toast" data-toast="Terms of Service (wireframe)">Terms of Service</a>
        and
        <a href="#" data-action="toast" data-toast="Privacy Policy (wireframe)">Privacy Policy</a>.
      </p>
      <div class="wf-auth__meta">
        <span>${WF.esc(d().version)}</span>
        <span aria-hidden="true">·</span>
        <a href="mailto:${WF.esc(d().contactEmail)}">Contact Support</a>
      </div>
    </div>`;

  const passwordField = (id, label, opts = {}) => {
    const required = opts.required !== false ? " wf-form__label--required" : "";
    const value = opts.value ? ` value="${WF.esc(opts.value)}"` : "";
    const placeholder = opts.placeholder || "Enter password";
    return `
      <div class="wf-form__group wf-auth__field">
        <label class="wf-form__label${required}" for="${id}">${WF.esc(label)}</label>
        <div class="wf-auth__password-wrap">
          <input class="wf-form__input wf-auth__password-input" id="${id}" type="password"
            placeholder="${WF.esc(placeholder)}" autocomplete="${opts.autocomplete || "new-password"}"${value}>
          <button type="button" class="wf-auth__password-toggle" data-password-toggle="${id}" aria-label="Show password">Show</button>
        </div>
      </div>`;
  };

  const strengthMeter = (level = 3) => {
    const labels = ["Weak", "Fair", "Good", "Strong"];
    const label = labels[Math.min(level, labels.length - 1)];
    return `
      <div class="wf-auth__strength" data-strength="${level}">
        <div class="wf-auth__strength-bars" aria-hidden="true">
          ${[0, 1, 2, 3].map((i) => `<span class="wf-auth__strength-bar${i < level ? " is-filled" : ""}"></span>`).join("")}
        </div>
        <span class="wf-auth__strength-label">Password strength: ${label}</span>
      </div>`;
  };

  const otpInputs = (count = 6) => `
    <div class="wf-auth__otp" role="group" aria-label="One-time password">
      ${Array.from({ length: count }, (_, i) => `
        <input class="wf-auth__otp-digit" type="text" inputmode="numeric" maxlength="1"
          aria-label="Digit ${i + 1}" data-otp-index="${i}"${i === 0 ? " autofocus" : ""}>
      `).join("")}
    </div>`;

  const socialDivider = () => `
    <div class="wf-auth__divider" role="separator"><span>or continue with</span></div>`;

  const socialButtons = () => `
    <div class="wf-auth__social">
      <button type="button" class="wf-btn wf-auth__social-btn" data-action="toast" data-toast="Microsoft SSO redirect (wireframe)">
        <svg class="wf-auth__social-svg wf-auth__social-svg--mono" viewBox="0 0 21 21" aria-hidden="true">
          <rect x="1" y="1" width="9" height="9" fill="#1a1a1a"/>
          <rect x="11" y="1" width="9" height="9" fill="#4a4a4a"/>
          <rect x="1" y="11" width="9" height="9" fill="#6a6a6a"/>
          <rect x="11" y="11" width="9" height="9" fill="#909090"/>
        </svg>
        Continue with Microsoft
      </button>
      <button type="button" class="wf-btn wf-auth__social-btn" data-action="toast" data-toast="Google SSO redirect (wireframe)">
        <svg class="wf-auth__social-svg wf-auth__social-svg--mono" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#333" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#555" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#777" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#999" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Continue with Google
      </button>
    </div>`;

  const backLink = (screenId, label) => `
    <p class="wf-auth__back">
      <a href="#" data-screen="${screenId}">← ${WF.esc(label)}</a>
    </p>`;

  const screens = [
    {
      id: "login",
      label: "Login",
      shortLabel: "Login",
      render: () => `
        <div class="wf-auth__card wf-auth__card--login wf-card">
          <div class="wf-card__body">
            ${logo()}
            <h1 class="wf-auth__welcome">Welcome back</h1>
            <p class="wf-auth__lead">Sign in to your iFranchise workspace. Use your organisation email.</p>
            <form class="wf-form" id="wf-auth-login-form" novalidate>
              <div class="wf-form__group wf-auth__field">
                <label class="wf-form__label wf-form__label--required" for="auth-email">Work Email</label>
                <input class="wf-form__input" id="auth-email" type="email"
                  placeholder="name@ifranchise.in" autocomplete="email"
                  value="${WF.esc(d().demoUser.email)}">
              </div>
              ${passwordField("auth-password", "Password", { value: "", placeholder: "Enter your password", autocomplete: "current-password" })}
              <div class="wf-auth__row">
                <label class="wf-auth__check">
                  <input type="checkbox" name="remember" checked>
                  Remember me on this device
                </label>
                <a href="#" data-screen="forgot-password">Forgot password?</a>
              </div>
              <button type="submit" class="wf-btn wf-btn--primary wf-auth__submit">Sign In</button>
              ${socialDivider()}
              ${socialButtons()}
            </form>
            ${cardFooter()}
          </div>
        </div>`
    },
    {
      id: "forgot-password",
      label: "Forgot Password",
      shortLabel: "Forgot",
      render: () => `
        <div class="wf-auth__card wf-card">
          <div class="wf-card__header">
            <span class="wf-card__title">Forgot Password</span>
          </div>
          <div class="wf-card__body">
            <p class="wf-auth__lead">Enter your registered work email. We will send a secure reset link valid for 30 minutes.</p>
            <form class="wf-form" id="wf-auth-forgot-form">
              <div class="wf-form__group wf-auth__field">
                <label class="wf-form__label wf-form__label--required">Work Email</label>
                <input class="wf-form__input" type="email" placeholder="name@ifranchise.in"
                  value="${WF.esc(d().demoUser.email)}" autocomplete="email">
              </div>
              <fieldset class="wf-auth__method">
                <legend class="wf-form__label">Verification method</legend>
                <label class="wf-auth__radio">
                  <input type="radio" name="reset-method" value="email" checked>
                  Send reset link to email
                </label>
                <label class="wf-auth__radio">
                  <input type="radio" name="reset-method" value="otp">
                  Send OTP to registered mobile (+91 •••• •• 42 18)
                </label>
              </fieldset>
              <button type="submit" class="wf-btn wf-btn--primary wf-auth__submit">Send Reset Link</button>
            </form>
            ${backLink("login", "Back to Login")}
            <div class="wf-auth__hint">
              Need help? Email <a href="mailto:${WF.esc(d().contactEmail)}">${WF.esc(d().contactEmail)}</a>
              or call ${WF.esc(d().supportPhone)} (Mon–Sat, 9 AM–7 PM IST).
            </div>
          </div>
        </div>`
    },
    {
      id: "reset-password",
      label: "Reset Password",
      shortLabel: "Reset",
      render: () => `
        <div class="wf-auth__card wf-card">
          <div class="wf-card__header">
            <span class="wf-card__title">Reset Password</span>
          </div>
          <div class="wf-card__body">
            <p class="wf-auth__lead">Create a new password for <strong>${WF.esc(d().demoUser.email)}</strong>. Do not reuse your last 5 passwords.</p>
            <form class="wf-form" id="wf-auth-reset-form">
              ${passwordField("auth-new-password", "New Password", { placeholder: "Minimum 12 characters" })}
              ${strengthMeter(3)}
              <ul class="wf-auth__rules">
                ${d().passwordRules.map((r) => `<li>${WF.esc(r)}</li>`).join("")}
              </ul>
              ${passwordField("auth-confirm-password", "Confirm Password", { placeholder: "Re-enter new password" })}
              <button type="submit" class="wf-btn wf-btn--primary wf-auth__submit">Update Password</button>
            </form>
            ${backLink("login", "Back to Login")}
          </div>
        </div>`
    },
    {
      id: "two-factor",
      label: "Two-Factor Authentication",
      shortLabel: "2FA",
      render: () => `
        <div class="wf-auth__card wf-card">
          <div class="wf-card__header">
            <span class="wf-card__title">Two-Factor Authentication</span>
          </div>
          <div class="wf-card__body">
            <p class="wf-auth__lead">Enter the 6-digit code sent to <strong>+91 •••• •• 42 18</strong> for ${WF.esc(d().demoUser.name)}.</p>
            <form class="wf-form" id="wf-auth-2fa-form">
              ${otpInputs(6)}
              <p class="wf-auth__resend">
                Did not receive the code?
                <button type="button" class="wf-btn wf-btn--ghost wf-btn--sm" data-action="toast" data-toast="OTP resent to registered mobile">Resend OTP</button>
                <span class="wf-auth__timer" aria-live="polite">Resend available in 0:42</span>
              </p>
              <label class="wf-auth__check">
                <input type="checkbox" name="trusted">
                Trust this device for 30 days (Bengaluru office network)
              </label>
              <button type="submit" class="wf-btn wf-btn--primary wf-auth__submit">Verify &amp; Continue</button>
            </form>
            <details class="wf-auth__backup">
              <summary>Use backup code instead</summary>
              <p class="wf-auth__lead">Enter one of your single-use backup codes. Contact IT if you have run out.</p>
              <div class="wf-auth__backup-codes" aria-label="Example backup codes">
                ${d().backupCodes.map((c) => `<code>${WF.esc(c)}</code>`).join("")}
              </div>
              <div class="wf-form__group wf-mt-16">
                <label class="wf-form__label">Backup Code</label>
                <input class="wf-form__input" placeholder="XXXX-XXXX" autocomplete="one-time-code">
              </div>
              <button type="button" class="wf-btn wf-btn--sm" data-action="toast" data-toast="Backup code verified (wireframe)">Verify Backup Code</button>
            </details>
            ${backLink("login", "Back to Login")}
          </div>
        </div>`
    },
    {
      id: "session-expired",
      label: "Session Expired",
      shortLabel: "Session",
      render: () => `
        <div class="wf-auth__card wf-card">
          <div class="wf-card__body wf-auth__state">
            <div class="wf-auth__state-icon" aria-hidden="true">!</div>
            <h1 class="wf-auth__state-title">Session Expired</h1>
            <p class="wf-auth__lead">Your session ended at ${WF.esc(d().session.expiredAt)} due to inactivity. Sign in again to continue where you left off.</p>
            <dl class="wf-auth__dl">
              <div><dt>Last screen</dt><dd>${WF.esc(d().session.lastActivity)}</dd></div>
              <div><dt>User</dt><dd>${WF.esc(d().demoUser.name)}</dd></div>
            </dl>
            <button type="button" class="wf-btn wf-btn--primary wf-auth__submit" data-screen="login">Login Again</button>
            <p class="wf-auth__hint">If this keeps happening, clear browser cache or contact ${WF.esc(d().contactEmail)}.</p>
          </div>
        </div>`
    },
    {
      id: "account-locked",
      label: "Account Locked",
      shortLabel: "Locked",
      render: () => `
        <div class="wf-auth__card wf-card">
          <div class="wf-card__body wf-auth__state">
            <div class="wf-auth__state-icon" aria-hidden="true">X</div>
            <h1 class="wf-auth__state-title">Account Locked</h1>
            <p class="wf-auth__lead">Too many failed sign-in attempts. The account for <strong>${WF.esc(d().lockedUser.email)}</strong> is temporarily locked.</p>
            <dl class="wf-auth__dl">
              <div><dt>Locked at</dt><dd>${WF.esc(d().lockedUser.lockedAt)}</dd></div>
              <div><dt>Failed attempts</dt><dd>${d().lockedUser.attempts} consecutive</dd></div>
              <div><dt>Auto-unlock</dt><dd>30 minutes from lock time</dd></div>
            </dl>
            <button type="button" class="wf-btn wf-btn--primary wf-auth__submit" data-action="toast" data-toast="Opening support request to administrator">Contact Administrator</button>
            <button type="button" class="wf-btn wf-auth__submit" data-screen="login">Return to Login</button>
            <p class="wf-auth__hint">IT Admin: Himani Bhargava · ${WF.esc(d().supportPhone)}</p>
          </div>
        </div>`
    },
    {
      id: "password-changed",
      label: "Password Successfully Changed",
      shortLabel: "Success",
      render: () => `
        <div class="wf-auth__card wf-card">
          <div class="wf-card__body wf-auth__state">
            <div class="wf-auth__state-icon wf-auth__state-icon--success" aria-hidden="true">✓</div>
            <h1 class="wf-auth__state-title">Password Successfully Changed</h1>
            <p class="wf-auth__lead">Your password was updated. All other active sessions have been signed out for security.</p>
            <dl class="wf-auth__dl">
              <div><dt>Account</dt><dd>${WF.esc(d().demoUser.email)}</dd></div>
              <div><dt>Changed by</dt><dd>${WF.esc(d().demoUser.name)}</dd></div>
              <div><dt>Time</dt><dd>25 Jun 2026, 11:28 AM IST</dd></div>
            </dl>
            <button type="button" class="wf-btn wf-btn--primary wf-auth__submit" data-screen="login">Sign In with New Password</button>
            <p class="wf-auth__hint">Did not make this change? Contact <a href="mailto:${WF.esc(d().contactEmail)}">${WF.esc(d().contactEmail)}</a> immediately.</p>
          </div>
        </div>`
    }
  ];

  function bindAuthEvents() {
    document.querySelectorAll("[data-password-toggle]:not([data-bound])").forEach((btn) => {
      btn.dataset.bound = "1";
      btn.addEventListener("click", () => {
        const input = document.getElementById(btn.getAttribute("data-password-toggle"));
        if (!input) return;
        const show = input.type === "password";
        input.type = show ? "text" : "password";
        btn.textContent = show ? "Hide" : "Show";
        btn.setAttribute("aria-label", show ? "Hide password" : "Show password");
      });
    });

    document.querySelectorAll(".wf-auth__otp-digit:not([data-bound])").forEach((input, idx, all) => {
      input.dataset.bound = "1";
      input.addEventListener("input", () => {
        input.value = input.value.replace(/\D/g, "").slice(0, 1);
        if (input.value && all[idx + 1]) all[idx + 1].focus();
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && all[idx - 1]) all[idx - 1].focus();
      });
    });

    const loginForm = document.getElementById("wf-auth-login-form");
    if (loginForm && !loginForm.dataset.bound) {
      loginForm.dataset.bound = "1";
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        WF_SPA.navigate("two-factor");
      });
    }

    const forgotForm = document.getElementById("wf-auth-forgot-form");
    if (forgotForm && !forgotForm.dataset.bound) {
      forgotForm.dataset.bound = "1";
      forgotForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const method = forgotForm.querySelector('input[name="reset-method"]:checked')?.value;
        WF.showToast(method === "otp" ? "OTP sent to registered mobile" : "Reset link sent to your email");
        setTimeout(() => WF_SPA.navigate("reset-password"), 800);
      });
    }

    const resetForm = document.getElementById("wf-auth-reset-form");
    if (resetForm && !resetForm.dataset.bound) {
      resetForm.dataset.bound = "1";
      resetForm.addEventListener("submit", (e) => {
        e.preventDefault();
        WF_SPA.navigate("password-changed");
      });
    }

    const tfaForm = document.getElementById("wf-auth-2fa-form");
    if (tfaForm && !tfaForm.dataset.bound) {
      tfaForm.dataset.bound = "1";
      tfaForm.addEventListener("submit", (e) => {
        e.preventDefault();
        WF.showToast("Identity verified");
        setTimeout(() => { window.location.href = "/dashboard/ceo"; }, 600);
      });
    }

    document.querySelectorAll("[data-action='toast'][data-toast]:not([data-bound])").forEach((el) => {
      el.dataset.bound = "1";
      el.addEventListener("click", (e) => {
        if (el.tagName === "A" && el.getAttribute("href") === "#") e.preventDefault();
        WF.showToast(el.getAttribute("data-toast") || "Action triggered");
      });
    });
  }

  function init() {
    WF_SPA.init({
      moduleKey: "auth",
      moduleLabel: "Authentication",
      moduleTitle: "Authentication",
      moduleHref: "/auth/login",
      defaultScreen: "login",
      layout: "auth",
      screens,
      onAfterBind: bindAuthEvents
    });
  }

  return { init, screens };
})();

document.addEventListener("DOMContentLoaded", () => AUTH_MODULE.init());
