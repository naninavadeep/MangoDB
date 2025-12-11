# PowerShell script to push Contact Manager project to GitHub
# Run this script after fixing Git compatibility issues

Write-Host "Initializing Git repository..." -ForegroundColor Green
git init

Write-Host "`nAdding all files..." -ForegroundColor Green
git add .

Write-Host "`nCommitting files..." -ForegroundColor Green
git commit -m "Initial commit: Contact Manager project"

Write-Host "`nConfiguring remote repository..." -ForegroundColor Green
# Remove remote if it already exists
git remote remove origin 2>$null
git remote add origin https://github.com/naninavadeep/MangoDB.git

Write-Host "`nChecking remote configuration..." -ForegroundColor Green
git remote -v

Write-Host "`nSetting branch to main..." -ForegroundColor Green
git branch -M main

Write-Host "`nAttempting to push to GitHub..." -ForegroundColor Green
Write-Host "Note: If the remote repository has existing files (like README.md)," -ForegroundColor Yellow
Write-Host "you may need to pull first with --allow-unrelated-histories" -ForegroundColor Yellow

$pushResult = git push -u origin main 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "`nPush failed. Trying to pull first..." -ForegroundColor Yellow
    git pull origin main --allow-unrelated-histories --no-edit
    Write-Host "`nPushing again..." -ForegroundColor Green
    git push -u origin main
}

Write-Host "`nDone! Check https://github.com/naninavadeep/MangoDB to verify your files were pushed." -ForegroundColor Green

