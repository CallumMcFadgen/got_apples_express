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
Simply fork and clone a copy of this repo to your local device and ensure that MySQL Workbench and a REST client (Postman, Insomnia) are installed.

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
Once the application has compiled, open a browser and enter the following URL 
```
http://localhost:3333
```
This should display a message that the server is running.
<br />
<br />
Now open a rest Client like Postman or Insomnia and open the MySQL Workbench
<br />
<br />
In the Rest client, enter the following URL as a GET method to show a return of all the users data in a JSON array.  This can be verified by checking the user records in the database.
```
http://localhost:3333/get_users
```
Enter the following URL as a GET method to show a return of a single specified users data, in this case me!  Again this can be verified by checking the user records
```
http://localhost:3333/get_user/Kal
```
To add a new user, enter the following URL as a POST method, there will be no return but a check of the refreshed user records will show the addition of a new user Bob Belcher.
```
http://localhost:3333/post_user
```
To then edit the new users name, eneter the following URL as a PATCH method, there will be no return but a check of the refreshed user records will show that Bob Belcher has become Burger Master.
```
http://localhost:3333/patch_user/Bobby
```
To remove a user record, enter the following URL as a DELETE method, there will be no return but a check of the refreshed user records will show that Burger Master has been deleted.
```
http://localhost:3333/delete_user/Bobby
```

