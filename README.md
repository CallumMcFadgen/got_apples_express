# WEB701 Milestone 3 Express.js REST API service

### Overview
This application is an Express.js REST API service that is accessing a MySQL database and is intended to be used in conjunction with the front-end Vue web application in a Multi-Tier Client Server model.
<br />
<br />
Click here to view the video walkthrough
Link here
<br />
<br />
<b>Note -</b> This API service needs to be installed and running before running the Vue web application, as the web application needs to be able to send requests to the APIs in this API service.

### Current features
<ul>
  <li>CORS enabled for HTTP requests</li>
  <li>Connected to MySQL database</li>
  <li>GET all users API to return all users data</li>
  <li>GET all auctions API to return all auction data</li>
  <li>GET all orchards API to return all orchard data</li>
  <li>GET all growers API to return all grower/member users data</li>
  <li>GET all varieties API to return all variety data</li>
  <li>GET user API to return a single user’s data</li>
  <li>GET variety API to return a single variety’s data</li>
  <li>GET auction API to return a single auction’s data</li>
  <li>GET orchard API to return a single orchard’s data</li>
  <li>GET watch API to return a watchlist for a user</li>
  <li>GET an authentication API response to an authentication request</li>
  <li>GET a username API response to a username match request</li>
  <li>POST a user API to add a new user row to the user table</li>
  <li>POST an auction API to add a new auction row to the auction table</li>
  <li>POST a watch API to add a new watch to the watchlist table</li>
  <li>PATCH a user API to update an existing user record</li>
  <li>DELETE a user API to delete a specific user record</li>
</ul>

### Installation

Simply fork and clone a copy of this repo to your local device and ensure that MySQL Workbench and Node.js are installed.

Open the SQL file in the <b>database_script</b> folder and copy the contents into a query tab in MySQL workbench and run it to create the database and populate it with dummy data as per the instructions at the top of the script.
<br />
<br />
Open the <b>got_apples_express</b> folder in an editor with a terminal, such as VS Code.
<br />
<br />
Edit the <b>MySQLConnection</b> function in the prototypes <b>App.js</b> file to match your local MySQL details, such as password, user, etc.
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
As an additional test, the following GET request can be run directly in the browser address bar to return a list of users from the user table, this confirms that the database is being accessed by the Express.js REST API service
```
http://localhost:3333/get_users
```
Now that the application is running as expected, the next step is to open the Vue web application to use some of these APIs in a Client application.
<br />
<br />
If there are any issues with installing or running the Expres.js service, please do not hesitate to contact me at Callum-McFadgen@live.nmit.ac.nz
