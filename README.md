# WEB701 Milestone 2 Express server prototype

### Overview
This server prototype is an Express restful API service that is intended to be used in conjunction with front-end client prototypes for web application functionality testing for the Got Apples! website.
<br />
<br />
Click here to view the video walkthrough
https://youtu.be/8ufu3DofQ9Q
<br />
<br />
<b>Note -</b> This prototype needs to be installed and running before testing the client prototypes as they will need to call the APIs in this API service.

### Current features
<ul>
  <li>Connected to MySQL database</li>
  <li>GET all users API to return all users data</li>
  <li>GET user API to return a single users data</li>
  <li>POST a user API to add a new user to the table</li>
  <li>PATCH a user API to update an existing user</li>
  <li>DELETE a user API to delete a specific user</li>
  <li>POST an auction API to add a new auction to the table</li>
  <li>GET an authentication API response to an authentication request</li>
</ul>

### Installation

Simply fork and clone a copy of this repo to your local device and ensure that MySQL Workbench and a REST client (Postman, Insomnia) are installed.

Open the SQL file in the database_script folder and copy the contents into a query tab in MySQL workbench and run it to create the database and populate it with dummy data as per the instructions at the top of the script.
<br />
<br />
Open the Express prototypes folder in a editor with a terminal, such as VS Code.
<br />
<br />
Edit the MySQLConnection function in the prototypes App.js file to match your local MySQL details, such as password, user, etc.
<br />
<br />
Open a terminal and enter the following command to start the prototype on a development server.
```
nodemon app.js
```
Once the application has compiled, open a browser and enter the following URL. 
```
http://localhost:3333
```
This should display a message that the server is running.
<br />
<br />
Now open a REST Client like Postman or Insomnia as well as MySQL Workbench.
<br />
<br />
In the REST client, enter the following URL as a GET method to show a return of all the users data in a JSON array.  This can be verified by checking the user records in the database.
```
http://localhost:3333/get_users
```
Enter the following URL as a GET method to show a return of a single specified users data, in this case me!  Again this can be verified by checking the user records.
```
http://localhost:3333/get_user/Kal
```
To add a new user, enter the following URL as a POST method, there will be no return, but a check of the refreshed user records will show the addition of a new user Bob Belcher.
```
http://localhost:3333/post_user
```
To then edit the new users name, enter the following URL as a PATCH method, there will be no return, but a check of the refreshed user records will show that Bob Belcher has become Burger Master.
```
http://localhost:3333/patch_user/Bobby
```
To remove a user record, enter the following URL as a DELETE method, there will be no return, but a check of the refreshed user records will show that Burger Master has been deleted.
```
http://localhost:3333/delete_user/Bobby
```
These routes cover the full Create Read Update and Delete functionality required for the prototype.  There were also some use cases, create a new auction and authenticate user login process.
<br />
<br />
To test creating a new auction enter the following URL as a POST method, there will be no return, but a check of the refreshed auction records will show the addition of a new auction Test Auction.
```
http://localhost:3333/post_auction
```
To test a user login, enter the following URL as a GET method, there will be a return of LOGIN SUCCEDED or LOGIN FAILED.  Try different combinations of username and password appended to the URL to test the methods effectiveness as shown below.
<br />
Successful login
```
http://localhost:3333/get_login_auth/Kal/P@ssword1
```
Incorrect username
```
http://localhost:3333/get_login_auth/Kl/P@ssword1
```
Incorrect password
```
http://localhost:3333/get_login_auth/Kal/P@ssord1
```
If there are any issues with testing the Express prototype, please do not hesitate to contact me.
