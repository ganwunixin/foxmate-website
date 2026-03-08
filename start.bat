@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Starting FoxMate Website...
echo.
npm run dev
pause
