@echo off

start cmd /k ^
    "cd frontend" ^
    "& npm install" ^
    "& npm install @angular/cli" ^
    "& npm audit fix" ^
    "& exit"