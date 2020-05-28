# WEB701 Milestone 2 Express server prototype

### Overview
This server prototype is an Express restful API service that is intended to be used in conjunction with front-end client prototypes for web application functionality testing for the Got Apples! website.
<br />
<br />
<b>Note -</b> This prototype needs to be installed and running before testing the client prototypes as they need to call the APIs in this API service.

### Current features
<ul>
  <li>Connected to MySQL database</li>
  <li>Get all users API to return all users data</li>
  <li>Get user data API to return a single users data</li>
  <li>Post a user API to add a new user to the table</li>
  <li>Patch a user API to update an existing user</li>
  <li>Delete a user API to delete a specific user</li>
  <li>Post an auction to add a new auction to the table</li>
  <li>Get an authentication response a authentication request user</li>
</ul>

### Installation
Simply fork and clone a copy of this repo to your local device.

Open the database script in MySQL workbench and run it to create, use, and populate the database.
<br />
<br />
Open the prototypes folder in a editor with a terminal, I recommend VS code.
<br />
<br />
Edit the MySQLConnection function to match your local MySQL details in the app.js file
<br />
<br />
Open terminal and enter the following command to start the prototype on a development server
```
nodemon app.js
```
Once the application has compiled , open a browser and enter the following URL 
```
http://localhost:3333
```
This should display a message that the server is running.
<br />
<br />
Now open a rest Client like Postman or Insomnia
<br />
<br />
Enter the following URL and set the method to GET, this show a return of all the users data in a JSON array.
```
http://localhost:3333/get_users
```
A RESTful Client like Insomnia or Postman would be useful for running tests on the API's
<br />
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
http://localhost:3333/form.html to open an editing form for creating a user

