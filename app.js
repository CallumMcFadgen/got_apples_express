// Required variables (imports)
const express = require ('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require ('body-parser');
const cors = require('cors');

// Required usings (middleware)
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('short'));
app.use(express.static('./public'));
app.use(cors());


// Connection configuration
function MySQLConnection () {
    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'P@ssword1',
        database: 'got_apples_db'
    });
};

// Start server on localhost:3333/
app.listen(3333, () => {
    console.log('Got Apples! RESTful API service is running on port 3333');
});

// homepage message
app.get("/", (req, res) => {
    res.send("Got Apples! RESTful API service");
});



// USER API's //////////////////////////////////////////////////////////////////

// Get a user by username // example - http://localhost:3333/get_user/Fitz
app.get('/get_user/:username', (req, res) => {
    const username = req.params.username
    const queryString = "SELECT * FROM user WHERE user_name = ?"
    MySQLConnection().query(queryString, [username], (err, rows, fields) => {
        if (err) {
            console.log("Get user " + username + " failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log(rows)
        res.json(rows)
    });
});


// Get all users // example - http://localhost:3333/get_users
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


// Post a new user
app.post('/post_user',(req, res) => { 
    const firstName = req.body.create_first_name
    const lastName = req.body.create_last_name
    const username = req.body.create_username
    const password = req.body.create_password
    const emailAddress = req.body.create_email_address
    const phoneNumber =  req.body.create_phone_number
    const addressLine1 = req.body.create_address_line_1
    const addressLine2 = req.body.create_address_line_2
    const region = req.body.create_region
    const city = req.body.create_city
    const zipCode = req.body.create_zip_code
    const memberStatus = req.body.create_member_status

    const queryString = "INSERT INTO user (user_name, first_name, last_name, password, email_address, phone_number, address_line_1, address_line_2, region, city, zip_code, got_apples_member) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    MySQLConnection().query(queryString, [username, firstName, lastName, password, emailAddress, phoneNumber, addressLine1, addressLine2, region, city, zipCode, memberStatus], (err, results, fields) => {
        if (err) {
            console.log("Post user " + username + " failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Post user succeded: user " + username + " added")
        res.end()
    });
});


// // Patch an existing user
// app.patch('/patch_user/:username',(req, res) => { 

//     const firstName = req.body.create_first_name

//     const queryString = "UPDATE user SET (first_name) WHERE user_name = ?"
//     MySQLConnection().query(queryString, [username, firstName], (err, results, fields) => {
//         if (err) {
//             console.log("Patch user " + username + " failed: " + err)
//             res.sendStatus(500)
//             return
//         };
//         console.log("Patch user succeded: user " + username + " added")
//         res.end()
//     });
// });



// Delete a user by username // example - http://localhost:3333/delete_user/
// wont work in a browser?
app.delete('/delete_user/:username', (req, res) => {
    const username = req.params.username
    //const username = req.body.delete_username
    const queryString = "DELETE FROM user WHERE user_name = ?"
    MySQLConnection().query(queryString, [username], (err, results, fields) => {
        if (err) {
            console.log("Delete user " + username + " failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Delete user succeded: user " + username + " deleted")
        res.end()
    });
});


//////////////////////////////////////////////////////////////////////////////////////////////








// working specific user api
app.get('/orchard/:orchard_name', (req, res) => {

    const orchard_name = req.params.orchard_name
    const queryString = "SELECT * FROM orchard WHERE orchard_name = ?"
    MySQLConnection().query(queryString, [orchard_name], (err, rows, fields) => {
        console.log(rows);
        res.json(rows);
    });
    //res.end();
});


// working all orchards api
app.get('/orchards', (req, res) => {

    const queryString = "SELECT * FROM orchard"
    MySQLConnection().query(queryString, (err, rows, fields) => {
        console.log(rows);
        res.json(rows);
    });

    //res.end();
});








