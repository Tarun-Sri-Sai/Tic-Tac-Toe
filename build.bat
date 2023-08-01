@echo off

start cmd /k "cd tic-tac-toe & npm install & npm install @angular/cli & npm audit fix --force & exit"