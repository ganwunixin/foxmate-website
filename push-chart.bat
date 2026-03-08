@echo off
chcp 65001 >nul
cd /d "%~dp0"
git add .
git commit -m "Update chart design and layout"
git push origin main
echo Done!
pause
