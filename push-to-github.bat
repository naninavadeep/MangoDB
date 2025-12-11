@echo off
echo Initializing Git repository...
git init

echo.
echo Adding all files...
git add .

echo.
echo Committing files...
git commit -m "Initial commit: Contact Manager project"

echo.
echo Configuring remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/naninavadeep/MangoDB.git

echo.
echo Checking remote...
git remote -v

echo.
echo Setting branch to main...
git branch -M main

echo.
echo Attempting to push to GitHub...
echo Note: If the remote repository has existing files (like README.md),
echo you may need to pull first.
git push -u origin main

if errorlevel 1 (
    echo.
    echo Push failed. Trying to pull first...
    git pull origin main --allow-unrelated-histories --no-edit
    echo.
    echo Pushing again...
    git push -u origin main
)

echo.
echo Done! Check https://github.com/naninavadeep/MangoDB to verify your files were pushed.
pause

