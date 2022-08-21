@echo off

setlocal

rmdir build /s /q

call npm run build

cd build

git init -b main

git remote add origin https://github.com/JakeIsMeh/jakeismeh.github.io.git

git config user.name "deploy"
git config user.email "deploy@git.invalid"

git add -A
git commit -m "manual deploy"

git push origin main --force

endlocal
