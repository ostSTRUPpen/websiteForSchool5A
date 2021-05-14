rem Made by ostSTRUPpen
cls
@echo off
title saving
echo Jak chcete pojmenovat zmenu?
set/p change=""
title saving
git add .
git commit -m "%change%"
git push -u origin main
title saved
pause