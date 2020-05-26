# WEB701 Milestone 2 Express API service

### Overview
This Express restful API service is intended to be used in conjunction with front-end prototypes for web application functionality testing

### Current features
<ul>
  <li>Connected to MySQL database</li>
  <li>Get all users API</li>
  <li>Get a user API</li>
  <li>Post a user API</li>
  <li>Delete a user API</li>
</ul>

### Installation
Simply fork and clone a copy of this repo to your local device, open the folder in a editor with a terminal, I recommend VS code, and enter the command line 

Open the database script in MySQL and run it

Edit the MySQLConnection function to match your local MySQL details
```
nodemon app.js
```
to start a copy running on a development server, enter the url 
http://localhost:3333 to open a home page
http://localhost:3333/get_users to get all users
http://localhost:3333/get_user/username to get a specific user
http://localhost:3333/form.html to open an editing form for creating a user
etc
