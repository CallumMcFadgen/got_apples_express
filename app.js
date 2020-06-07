// SET UP AND CONFIGURATION ////////////////////////////////////////////////////////

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

// GET ROUTES///////////////////////////////////////

// GET ALL USERS FROM THE USER TABLE  // EXAMPLE ROUTE - http://localhost:3333/get_users
app.get('/get_users', (req, res) => {
    const queryString = "SELECT * FROM user"
    MySQLConnection().query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Get users failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Get users succeded")
        res.json(rows);
    });
});


// GET ALL AUCTIONS FROM THE AUCTION TABLE  // EXAMPLE ROUTE - http://localhost:3333/get_auctions
app.get('/get_auctions', (req, res) => {
    const queryString = "SELECT * FROM auction"
    MySQLConnection().query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Get auctions failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Get auctions succeded")
        res.json(rows);
    });
});


// GET ALL ORCHARDS FROM THE ORCHARD TABLE  // EXAMPLE ROUTE - http://localhost:3333/get_orchards
app.get('/get_orchards', (req, res) => {
    const queryString = "SELECT * FROM orchard"
    MySQLConnection().query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Get orchards failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Get orchards succeded")
        res.json(rows);
    });
});



// GET ALL GROWERS FROM THE USER TABLE  // EXAMPLE ROUTE - http://localhost:3333/get_growers
app.get('/get_growers', (req, res) => {
    const queryString = "SELECT * FROM user WHERE got_apples_member = true"
    MySQLConnection().query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Get growers failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Get growers succeded")
        res.json(rows);
    });
});


// GET ALL VARIETIES FROM THE VARIETY TABLE  // EXAMPLE ROUTE - http://localhost:3333/get_varieties
app.get('/get_varieties', (req, res) => {
    const queryString = "SELECT * FROM variety"
    MySQLConnection().query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Get varieties failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Get varieties succeded")
        res.json(rows);
    });
});


// GET A SPECIFIC USER FROM THE USER TABLE BY USERNAME  // EXAMPLE ROUTE - http://localhost:3333/get_user/Kal
app.get('/get_user/:username', (req, res) => {
    const userName = req.params.username
    const queryString = "SELECT * FROM user WHERE user_name = ?"
    MySQLConnection().query(queryString, [userName], (err, rows, fields) => {
        if (err) {
            console.log("Get user " + userName + " failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Get user " + userName + " succeded")
        res.json(rows)
    });
});


// GET A SPECIFIC VARIETY FROM THE VARIETY TABLE BY VARIETY NAME  // EXAMPLE ROUTE - http://localhost:3333/get_variety/Baujade
app.get('/get_variety/:varietyname', (req, res) => {
    const varietyName = req.params.varietyname
    const queryString = "SELECT * FROM variety WHERE variety_name = ?"
    MySQLConnection().query(queryString, [varietyName], (err, rows, fields) => {
        if (err) {
            console.log("Get variety " + varietyName + " failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Get variety " + varietyName + " succeded")
        res.json(rows)
    });
});


// GET A SPECIFIC AUCTION FROM THE AUCTION TABLE BY AUCTION NUMBER  // EXAMPLE ROUTE - http://localhost:3333/get_auction/1
app.get('/get_auction/:auctionnumber', (req, res) => {
    const auctionNumber = req.params.auctionnumber
    const queryString = "SELECT * FROM auction WHERE auction_number = ?"
    MySQLConnection().query(queryString, [auctionNumber], (err, rows, fields) => {
        if (err) {
            console.log("Get auction " + auctionNumber + " failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Get auction " + auctionNumber + " succeded")
        res.json(rows)
    });
});


// GET A SPECIFIC ORCHARD FROM THE ORCHARD TABLE BY ORCHARD NAME  // EXAMPLE ROUTE - http://localhost:3333/get_orchard/Bushlands Orchard
app.get('/get_orchard/:orchardname', (req, res) => {
    const orchardName = req.params.orchardname
    const queryString = "SELECT * FROM orchard WHERE orchard_name = ?"
    MySQLConnection().query(queryString, [orchardName], (err, rows, fields) => {
        if (err) {
            console.log("Get orchard " + orchardName + " failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Get orchard " + orchardName + " succeded")
        res.json(rows)
    });
});


// GET SPECIFIC WATCHERS FROM THE WATCHLIST TABLE BY USERNAME  // EXAMPLE ROUTE - http://localhost:3333/get_watchlist/Kelly
app.get('/get_watchlist/:username', (req, res) => {
    const userName = req.params.username
    const queryString = "SELECT * FROM watchlist WHERE user_name = ?"
    MySQLConnection().query(queryString, [userName], (err, rows, fields) => {
        if (err) {
            console.log("Get watchlist for " + userName + " failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Get watchlist for " + userName + " succeded")
        res.json(rows)
    });
});



// POST ROUTES ///////////////////////////////////////


// POST A NEW USER CALLED BOB BELCHER TO THE USER TABLE  // EXAMPLE ROUTE - http://localhost:3333/post_user
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


// POST A NEW WATCH TO THE WATCHLIST TABLE  // EXAMPLE ROUTE - http://localhost:3333/post_watch/kal/3/2020-05-03 16:00:00
app.post('/post_watch/:username/:auctionnumber/:date',(req, res) => { 

    const userName = req.params.username
    const auctionNumber = req.params.auctionnumber
    const date = req.params.date

    const queryString = "INSERT INTO watchlist (user_name, auction_number, date) VALUES (?, ?, ?)"
    MySQLConnection().query(queryString, [userName, auctionNumber, date], (err, results, fields) => {
        if (err) {
            console.log("Post watch on auction " + auctionNumber + " failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Post watch on auction " + auctionNumber + " added")
        res.end()
    });
});


// PATCH AN EXISTING USER WITH AN NAME UPDATE
// EXAMPLE - http://localhost:3333/patch_user/Bobby

app.patch('/patch_user/:username',(req, res) => { 

    const userName = req.params.username
    const firstName = "Burger"
    const lastName = "Master"

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


// POST A NEW AUCTION TO THE AUCTION TABLE
// EXAMPLE ROUTE - http://localhost:3333/post_auction

app.post('/post_auction',(req, res) => { 

    const title = "Test Auction"
    const weight = 3
    const startDate = "2020-05-04 12:30:00"
    const endDate = "2020-05-11 12:30:00"
    const description = "Description for test auction."
    const reserveAmount =  4
    const buyNow = 1
    const buyNowAmount =  4.50
    const delivery = 1
    const deliveryAmount = .50
    const sold = 0
    const userName = "Kal"
    const VarietyName = "Blenheim Orange"

    const queryString = "INSERT INTO auction (title, weight, start_date, end_date, `description`, reserve_amount, buy_now, buy_now_amount, delivery, delivery_amount, sold, variety_name, user_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    MySQLConnection().query(queryString, [title, weight, startDate, endDate, description, reserveAmount, buyNow, buyNowAmount, delivery, deliveryAmount, sold, VarietyName, userName], (err, results, fields) => {
        if (err) {
            console.log("Post auction failed: " + err)
            res.sendStatus(500)
            return
        };
        console.log("Post auction succeded")
        res.end()
    });
});


// CHECK USER CREDENTIALS FOR LOGIN USING USERNAME AND PASSWORD
// EXAMPLE SUCCESFUL ROUTE - http://localhost:3333/get_login_auth/Kal/P@ssword1
// EXAMPLE UNSUCCESFUL ROUTE - http://localhost:3333/get_login_auth/Kal/P@ssword
// EXAMPLE UNSUCCESFUL ROUTE - http://localhost:3333/get_login_auth/Ka/P@ssword1

app.get('/get_login_auth/:id/:password',(req, res) => { 

    const userName = req.params.id
    const password = req.params.password

    const queryString = "CALL UserLogin(?, ?);"
    MySQLConnection().query(queryString, [userName, password], (err, results) => {
        if (err) {
            console.log("Authentication request for " + userName + " failed: " + err)
            res.sendStatus(500)
            return
        };

        console.log("Authentication request for " + userName + " succesful")
        res.json(results[0])

        if (results[0] = "LOGIN SUCCEDED") {
            console.log ("Succesful login for user: " + userName);
        }
        else if (results[0] = "LOGIN FAILED"){
            console.log ("Unsuccesful login for user: " + userName);
        }

        res.end()
    });
});


// TO DO - BID ROUTE FOR CREATING/UPDATING A BID USING A MYSQL PROCEDURE





// TESTING ////////////////////////////////////////////////////////////////////////////////////////////


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



// // working specific user api
// app.get('/orchard/:orchard_name', (req, res) => {

//     const orchard_name = req.params.orchard_name

//     const queryString = "SELECT * FROM orchard WHERE orchard_name = ?"
//     MySQLConnection().query(queryString, [orchard_name], (err, rows, fields) => {
//         console.log(rows);
//         res.json(rows);
//     });
// });


// // working all orchards api
// app.get('/orchards', (req, res) => {

//     const queryString = "SELECT * FROM orchard"
//     MySQLConnection().query(queryString, (err, rows, fields) => {
//         console.log(rows);
//         res.json(rows);
//     });

// });


// // Updating a user using a MySQL stored procedure
// // http://localhost:3333/patch_user_procedure/Kal/Test2
// app.patch('/patch_user_procedure/:id/:param',(req, res) => { 

//     const userName = req.params.id
//     const firstName = req.params.param

//     const queryString = "CALL UpdateFirstName(?, ?);"
//     MySQLConnection().query(queryString, [userName, firstName], (err, results) => {
//         if (err) {
//             console.log("Patch user " + userName + " failed: " + err)
//             res.sendStatus(500)
//             return
//         };
//         console.log("Patch user succeded: user " + userName + " updated")
//         res.json(results[0])
//         if (results[0] = "Name changed") {
//             console.log ("Test name changed Test")
//         }
//         res.end()
//     });
// });









