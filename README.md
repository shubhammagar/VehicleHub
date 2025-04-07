# VehicleHubBackend in Node.js
select postgrsql and run following command 

CREATE DATABASE vehicle_db;

then go to project folder in VS CODE
open .env file and add following code

DB_NAME=vehicle_db
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432

then cd to vehicleHubBackend
run following commands

npm install
node seed.js
npx nodemon server.js


VehicleHubFrontend in Angular

cd to VehicleHubFrontend

run following command
npm i
ng serve / npm start

open http://localhost:4200/ in your browser to navigate in project or ready to buy car.
