set dt=%DATE:~6,4%_%DATE:~3,2%_%DATE:~0,2%__%TIME:~0,2%_%TIME:~3,2%_%TIME:~6,2%
set dt=%dt: =0%

call npm run build
rem call npm run start
git add *
git commit -m "Zola commit %dt%"
git branch -M main
git remote add origin https://github.com/egzola/front.git
git push -u origin main