@echo off

start cmd /k ^
    "cd frontend & npm install & npm audit fix & exit"
