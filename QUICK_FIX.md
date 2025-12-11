# Quick Fix: Push to GitHub

## The Problem
Your Git installation is incompatible with your Windows version. You need a working Git to push to GitHub.

## Fastest Solution (2 minutes)

### Step 1: Download Git
Go to: **https://git-scm.com/download/win**
- Click "Download for Windows"
- Choose **64-bit** version

### Step 2: Install
- Run the installer
- Click "Next" through all steps (defaults are fine)
- Finish installation

### Step 3: Push Your Code
1. **Close and reopen** your terminal/PowerShell
2. Navigate to your project:
   ```powershell
   cd "C:\Users\navad\OneDrive\Desktop\Contact Manager"
   ```
3. Run the script:
   ```powershell
   .\push-to-github.bat
   ```
   OR
   ```powershell
   .\push-to-github.ps1
   ```

### Step 4: Authenticate
When prompted:
- Enter your GitHub username
- Use a **Personal Access Token** as password (not your GitHub password)
  - Create one at: https://github.com/settings/tokens
  - Select "repo" scope
  - Copy the token and use it as your password

## Done!
Your Contact Manager project will be pushed to: https://github.com/naninavadeep/MangoDB

