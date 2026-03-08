@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Pushing updates to GitHub...
echo.
git add .
git status
echo.
set /p msg="Enter commit message: "
git commit -m "%msg%"
git push origin main
echo.
echo Done! Check Vercel for deployment status.
pause
