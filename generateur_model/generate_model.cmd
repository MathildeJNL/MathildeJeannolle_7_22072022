CALL npm install
CALL rm -d -r models
CALL mkdir models
CALL npx sequelize-auto -o "./models" -d groupomania -h localhost -u root -p 3306 -x 'password' -e mysql