@echo off
setlocal
cd /d "%~dp0"

where python >nul 2>nul
if errorlevel 1 (
  echo Python is required to launch Class Instants.
  echo Install Python or run the dist folder with any local web server.
  pause
  exit /b 1
)

start "Class Instants Server - close to stop" /min python -m http.server 43817 --bind 127.0.0.1 --directory dist
timeout /t 1 /nobreak >nul
start "" "http://127.0.0.1:43817/"
endlocal
