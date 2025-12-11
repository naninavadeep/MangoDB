# Git Setup and Push Instructions

## Current Issue
Your Git installation appears to be incompatible with your Windows version. You need to fix this before pushing to GitHub.

## Solution 1: Reinstall Git (Recommended)

1. **Download the latest Git for Windows:**
   - Visit: https://git-scm.com/download/win
   - Download the 64-bit version for Windows

2. **Install Git:**
   - Run the installer
   - Choose "64-bit" if prompted
   - Use default installation options

3. **After installation, restart your terminal/command prompt**

4. **Run the push script:**
   - Double-click `push-to-github.bat` in your project folder
   - OR manually run these commands in your terminal:

```bash
git init
git add .
git commit -m "Initial commit: Contact Manager project"
git remote add origin https://github.com/naninavadeep/MangoDB.git
git branch -M main
git push -u origin main
```

## Solution 2: Use GitHub Desktop (Easier Alternative)

1. **Download GitHub Desktop:**
   - Visit: https://desktop.github.com/
   - Install the application

2. **In GitHub Desktop:**
   - File → Add Local Repository
   - Select your "Contact Manager" folder
   - Publish repository to GitHub
   - Choose the repository: `naninavadeep/MangoDB`

## Solution 3: Manual Git Commands

Once Git is working, open PowerShell or Command Prompt in your project folder and run:

```bash
# Initialize repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Contact Manager project"

# Add remote
git remote add origin https://github.com/naninavadeep/MangoDB.git

# Create and switch to main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## If Remote Already Exists

If you get an error that the remote already exists, first remove it:

```bash
git remote remove origin
git remote add origin https://github.com/naninavadeep/MangoDB.git
```

## Authentication

When you push, GitHub may ask for authentication. You can:
- Use a Personal Access Token (recommended)
- Or use GitHub Desktop which handles authentication automatically

