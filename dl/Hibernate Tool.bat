@echo off

Cd %TMP%

REM  --> Check for permissions
Reg query "HKU\S-1-5-19\Environment" 
REM --> If error flag set, we do not have admin.
if %errorlevel% NEQ 0 (
ECHO                 **************************************
ECHO                  Running Admin shell... Please wait...
ECHO                 **************************************

    goto UACPrompt
) else ( goto Ask )

:UACPrompt
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    set params = "%*:"=""
    echo UAC.ShellExecute "cmd.exe", "/c ""%~s0"" %params%", "", "runas", 1 >> "%temp%\getadmin.vbs"

    "%temp%\getadmin.vbs"
    del "%temp%\getadmin.vbs"
    exit /B


:Ask
Cls
echo Activating Hibernate (Y/N)?
:INPUT
set /P INPUT=Type input: %=%
If /I "%INPUT%"=="y" goto yes
If /I "%INPUT%"=="n" goto no
echo Incorrect input & goto Ask
:yes
C:\Windows\System32\powercfg.exe /hibernate on
C:\Windows\System32\powercfg.exe /h /type full
pause
:no
C:\Windows\System32\powercfg.exe /hibernate off
pause