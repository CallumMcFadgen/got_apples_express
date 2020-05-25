const express = require ('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('short'));

// localhost:3001
app.listen(3333, () => {
    console.log('RESTful API server is running and listening on port 3333');
});



app.get("/", (req, res) => {
    console.log("Got a root route request");
    res.send("Hello!!");
});

app.get("/users", (req, res) => {

    let user = {
        first_name: "Callum",
        second_name: "McFadgen"
    };
    res.json(user);
});




