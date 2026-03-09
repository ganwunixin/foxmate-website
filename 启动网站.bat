@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 正在启动小狐狸网站...
echo.
echo 启动后请打开浏览器访问: http://localhost:3000
echo.
npm run dev
pause
