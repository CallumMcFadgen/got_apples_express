// Required variables 
const express = require ('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');

// Required using
app.use(morgan('combined'));

// Database connection config
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'P@ssword1',
    database: 'got_apples_db'
});

// Start server on localhost:3333/
app.listen(3333, () => {
    console.log('Got Apples! RESTful API service is running on port 3333');
});



// working specific user api
// example -  http://localhost:3333/user/Fitz

app.get('/user/:username', (req, res) => {
    const username = req.params.username
    const queryString = "SELECT * FROM user WHERE user_name = ?"
    connection.query(queryString, [username], (err, rows, fields) => {
        if (err) {
            console.log("Get user failed:" + err)
            res.sendStatus(500)
            return
        };
        console.log(rows)
        res.json(rows)
    });
});


// working all users api
app.get('/users', (req, res) => {

    const queryString = "SELECT * FROM user"
    connection.query(queryString, (err, rows, fields) => {
        console.log(rows);
        res.json(rows);
    });

    //res.end();
});



// working specific user api
app.get('/orchard/:orchard_name', (req, res) => {

    const orchard_name = req.params.orchard_name
    const queryString = "SELECT * FROM orchard WHERE orchard_name = ?"
    connection.query(queryString, [orchard_name], (err, rows, fields) => {
        console.log(rows);
        res.json(rows);
    });
    //res.end();
});


// working all orchards api
app.get('/orchards', (req, res) => {

    const queryString = "SELECT * FROM orchard"
    connection.query(queryString, (err, rows, fields) => {
        console.log(rows);
        res.json(rows);
    });

    //res.end();
});

app.get("/", (req, res) => {
    res.send("Got Apples! RESTful API service");
});

// app.get("/users", (req, res) => {

//     const user1 = {
//         first_name: "Callum",
//         second_name: "McFadgen"
//     };
//     const user2 = {
//         first_name: "Jason",
//         second_name: "McDonald"
//     };
//     const user3 = {
//         first_name: "Corrina",
//         second_name: "Busby"
//     };

//     res.json([user1, user2, user3]);
// });




