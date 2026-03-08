@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Initializing Git repository...
echo.
git init
git remote add origin https://github.com/ganwunixin/foxmate-website.git
git fetch origin
git branch -M main
git branch --set-upstream-to=origin/main main
echo.
echo Git initialized successfully!
echo You can now use push.bat to push updates.
pause
