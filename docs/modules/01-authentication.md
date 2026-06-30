# iFranchise CRM — Authentication

## Login

**Why do we need it?** Every employee who uses the system must prove their identity before accessing any data. This screen ensures that only authorised people can log in, protects sensitive customer and financial data, and creates a record of who accessed the system and when.

**What is inside?**
- iFranchise logo and company branding at the top
- A welcome message ("Welcome back to iFranchise CRM")
- Email address input field
- Password input field with a show/hide toggle
- A "Remember me" checkbox for trusted devices
- A "Forgot Password?" link
- A primary "Login" button
- Error messages shown inline if credentials are wrong (e.g., "Incorrect password" or "Account not found")
- A loading spinner shown while the system verifies credentials
- Footer with version number and copyright

## Forgot Password

**Why do we need it?** Employees forget passwords regularly. Without this screen, the admin would have to manually reset every password, wasting time. This screen lets users handle it themselves in under two minutes, without bothering the IT team or admin.

**What is inside?**
- A short explanatory message ("Enter your registered email and we will send you a reset link")
- Email address input field
- A "Send Reset Link" button
- A back link to return to the Login screen
- A success state message shown after submission: "If this email is registered, you will receive a reset link shortly"
- An error state if the email field is left blank

## Reset Password

**Why do we need it?** Once a user requests a reset, they need a safe, guided place to enter and confirm their new password. This screen enforces password strength rules so users do not set weak passwords like "1234".

**What is inside?**
- A message confirming the reset link is valid ("You are setting a new password for youremail@company.com")
- New password input field with a strength indicator (Weak / Fair / Strong)
- Confirm new password input field
- Password rules displayed clearly (minimum 8 characters, one uppercase, one number, one special character)
- A "Set New Password" button
- Real-time validation — the confirm field turns red if it does not match
- A link to go back to Login if the user ended up here by mistake
- An expiry warning if the reset link is older than 30 minutes ("This link has expired. Please request a new one.")

## Two-Factor Authentication

**Why do we need it?** Passwords alone can be stolen or guessed. Two-factor authentication (2FA) means that even if someone knows your password, they still cannot log in without your phone. For a CRM with sensitive customer data, financial records, and agreements, this is an important security layer.

**What is inside?**
- A message explaining the step: "A 6-digit code has been sent to your registered mobile number ending in XXXX"
- Six individual digit input boxes (or a single 6-digit field)
- A countdown timer showing how long the code is valid (typically 5 minutes)
- A "Verify" button
- A "Resend Code" link that becomes active after 30 seconds
- An option to choose a different verification method (e.g., email instead of SMS) if configured
- Error message if the wrong code is entered ("Incorrect code. 2 attempts remaining.")

## Session Expired

**Why do we need it?** If an employee walks away from their computer and leaves the CRM open, we do not want their session to stay active indefinitely. After a set period of inactivity (configurable — typically 30 minutes), the system logs them out and shows this screen to protect data.

**What is inside?**
- A clear message: "Your session has expired due to inactivity"
- A sub-message explaining what happened and reassuring the user their data is safe
- An email field pre-filled with the user's email (so they do not have to type it again)
- Password input field
- A "Log In Again" button
- A link to go to the full login page if they prefer

## Account Locked

**Why do we need it?** This prevents brute-force attacks where someone tries hundreds of password combinations to break into an account. After a certain number of failed attempts (typically 5), the system locks the account and requires admin intervention or a timed cooldown period to unlock it.

**What is inside?**
- A clear warning message: "Your account has been locked"
- An explanation of why it was locked ("Too many failed login attempts")
- Information on how long until the account auto-unlocks (e.g., "Try again after 30 minutes") or instructions to contact the admin
- A "Contact Admin" link or button that opens a pre-filled email or support request
- A link to go back to the login page
- Timestamp of when the account was locked

## Password Changed

**Why do we need it?** Users need a clear confirmation that their password change worked. Additionally, this screen warns them if they did not make the change — so if someone else changed their password without permission, they know immediately and can act.

**What is inside?**
- A success icon (green checkmark) and message: "Your password has been changed successfully"
- The date and time the password was changed
- The device and location from which the change was made
- A security notice: "If you did not make this change, contact your administrator immediately"
- A "Log In Now" button that takes them to the login screen
- An option to view account security settings
