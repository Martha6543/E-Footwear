Steps to launch the project:


Step 1: Open the E-Footwear folder in an editor of your choice, such as VS Code


Step 1.1: Enter the E-Footwear folder if the folder src is not visible


Step 1.2: Deploy database using .sql files stored in the database folder, preferably run through MySQL


Step 1.3: In order to run with database, ensure that database is deployed and running on the same configuration as in line 17-20 of index.js, otherwise modify index.js to correctly reflect database user, password and database name.


Step 2: Open the folder within a terminal, type `npm install` and press enter.


Step 2.1: For full website functionality, type `npm build` and press enter.


Step 3: Type `npm start` in the termal and press enter.


Step 4: Open a second terminal in the same folder and type `node index.js` and press enter


Step 5: Open web browser and type `http://localhost:3000/` to begin browsing in a reduced view, or if using the command `npm build` use `http://localhost:3001/`


Aditional functionality with deployed database: 


Log into account email : `admin@gmail.com` password: `admin` to access admin panel functionality and ability to add products.


Log into account email : `employee@gmail.com` password: `employee` to access employee panel functionality and ability to process orders and modify stock.


Log into account email : `user@gmail.com` password: `user` to be restricted from admin panel access.
