// REQUIRED VARIABLES (IMPORTS) //////////////////////
const express = require ('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require ('body-parser');
const cors = require('cors');

// REQUIRED USINGS (MIDDLEWARE) //////////////////////
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('short'));
app.use(express.static('./public'));
app.use(cors());


// DB CONNECTION CONFIGURATION ///////////////////////
function MySQLConnection () {
    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'P@ssword1',
        database: 'got_apples_db'
    });
};

// START SERVER ON PORT 3333 /////////////////////////
app.listen(3333, () => {
    console.log('Got Apples! RESTful API service is running on port 3333');
});

// DISPLAY MESSAGE IN BROWSER ///////////////////////
app.get("/", (req, res) => {
    res.send("Got Apples! RESTful API service IS running on localhost:3333");
});


// REST API ROUTES //////////////////////////////////////////////////////////////////


// GET A SPECIFIC USER FROM THE USER TABLE BY USERNAME
// EXAMPLE ROUTE - http://localhost:3333/get_user/Fitz

app.get('/get_user/:username', (req, res) => {

    const userName = req.params.username

    const queryString = "SELECT * FROM user WHERE user_name = ?"
    MySQLConnection().query(queryString, [userName], (err, rows, fields) => {
        if (err) {
            console.log("Get user " + userName + " failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log(rows)
        res.json(rows)
    });
});


// GET ALL USERS FROM THE USER TABLE
// EXAMPLE ROUTE - http://localhost:3333/get_users

app.get('/get_users', (req, res) => {

    const queryString = "SELECT * FROM user"
    MySQLConnection().query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Get users failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log(rows);
        res.json(rows);
    });
});



// POST A NEW USER CALLED BOB BELCHER TO THE USER TABLE
// EXAMPLE ROUTE - http://localhost:3333/post_user

app.post('/post_user',(req, res) => { 

    const firstName = "Bob"
    const lastName = "Belcher"
    const userName = "Bobby"
    const password = "P@ssword1"
    const emailAddress = "bobbybobbob@gmail.com"
    const phoneNumber =  "1234567891234567"
    const addressLine1 = "12 Ocean Avenue"
    const addressLine2 = "Long Island"
    const region = "New Jersey"
    const city = "New York"
    const zipCode = "1234"
    const memberStatus = 0

    const queryString = "INSERT INTO user (user_name, first_name, last_name, password, email_address, phone_number, address_line_1, address_line_2, region, city, zip_code, got_apples_member) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    MySQLConnection().query(queryString, [userName, firstName, lastName, password, emailAddress, phoneNumber, addressLine1, addressLine2, region, city, zipCode, memberStatus], (err, results, fields) => {
        if (err) {
            console.log("Post user " + userName + " failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Post user succeded: user " + userName + " added")
        res.end()
    });
});


// PATCH AN EXISTING USER WITH AN NAME UPDATE
// EXAMPLE - http://localhost:3333/patch_user/Bobby

app.patch('/patch_user/:username',(req, res) => { 

    const userName = req.params.username
    const firstName = "Burger"
    const lastName = "King"

    const queryString = "UPDATE user SET first_name =?, last_name =? WHERE user_name =?"
    MySQLConnection().query(queryString, [firstName, lastName, userName], (err, results, fields) => {
        if (err) {
            console.log("Patch user " + userName + " failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Patch user succeded: user " + userName + " updated")
        res.end()
    });
});



// DELETE A SPECIFIC USER FROM THE USER TABLE BY USERNAME
// EXAMPLE - http://localhost:3333/delete_user/Bobby

app.delete('/delete_user/:username', (req, res) => {

    const userName = req.params.username

    const queryString = "DELETE FROM user WHERE user_name = ?"
    MySQLConnection().query(queryString, [userName], (err, results, fields) => {
        if (err) {
            console.log("Delete user " + userName + " failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Delete user succeded: user " + userName + " deleted")
        res.end()
    });
});


// POST A NEW USER CALLED BOB BELCHER TO THE USER TABLE
// EXAMPLE ROUTE - http://localhost:3333/post_user

// app.post('/post_user',(req, res) => { 

//     const firstName = "Bob"
//     const lastName = "Belcher"
//     const userName = "Bobby"
//     const password = "P@ssword1"
//     const emailAddress = "bobbybobbob@gmail.com"
//     const phoneNumber =  "1234567891234567"
//     const addressLine1 = "12 Ocean Avenue"
//     const addressLine2 = "Long Island"
//     const region = "New Jersey"
//     const city = "New York"
//     const zipCode = "1234"
//     const memberStatus = 0

//     const queryString = "INSERT INTO user (user_name, first_name, last_name, password, email_address, phone_number, address_line_1, address_line_2, region, city, zip_code, got_apples_member) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
//     MySQLConnection().query(queryString, [userName, firstName, lastName, password, emailAddress, phoneNumber, addressLine1, addressLine2, region, city, zipCode, memberStatus], (err, results, fields) => {
//         if (err) {
//             console.log("Post user " + userName + " failed: " + err)
//             res.sendStatus(500)
//             return
//         };
//         console.log("Post user succeded: user " + userName + " added")
//         res.end()
//     });
// });

//////////////////////////////////////////////////////////////////////////////////////////////








// working specific user api
app.get('/orchard/:orchard_name', (req, res) => {

    const orchard_name = req.params.orchard_name

    const queryString = "SELECT * FROM orchard WHERE orchard_name = ?"
    MySQLConnection().query(queryString, [orchard_name], (err, rows, fields) => {
        console.log(rows);
        res.json(rows);
    });
});


// working all orchards api
app.get('/orchards', (req, res) => {

    const queryString = "SELECT * FROM orchard"
    MySQLConnection().query(queryString, (err, rows, fields) => {
        console.log(rows);
        res.json(rows);
    });

});








