set dt=%date:~10,4%-%date:~4,2%-%date:~7,2% %time:~0,8%
echo %dt%

call npm run build

git add *
git commit -m "Zola commit %dt%"
git branch -M main
git remote add origin https://github.com/egzola/front.git
git push -u origin main

call npm run start
