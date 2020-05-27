# WEB701 Milestone 2 Express server prototype

### Overview
This server prototype is an Express restful API service that is intended to be used in conjunction with front-end client prototypes for web application functionality testing for the Got Apples! website.

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

Open the database script in MySQL workbench and run it to create, use, and populate the database.

Edit the MySQLConnection function to match your local MySQL details in app.js

Open the in editor terminal and enter 
```
nodemon app.js
```
to start a copy running on a development server, once the application has compiled , enter the url http://localhost:3333 to open the application in a browser
<br />
A RESTful Client like Insomnia or Postman would be useful for running tests on the API's
<br />
http://localhost:3333 start message
<br />
http://localhost:3333/get_users to get all users
<br />
http://localhost:3333/get_user/username to get a specific user
<br />
http://localhost:333/delete_user/username to delete a specific user
<br />
<br />
http://localhost:3333/form.html to open an editing form for creating or editing a user

