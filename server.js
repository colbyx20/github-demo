const bodyParser = require('body-parser');
const express = require('express');
const myData = require("myData")

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/static', express.static('app'));

app.get("/", (res,req) => {
    res.send("hello world")
});

app.get("/user/:userId", (req,res) =>{
    const user = myData
    res.json = {
        firstName: myData.firstName,
        lastName: myData.lastName
    };
});

app.post("/user", (res,req) =>{
    const user = req.body.name; // form name
    // do some db stuff

    res.send(`Creating a Post Request ${user}`)
});

app.get("/user/:userid/book/:bookid", (req,res) =>{
    const id = req.params("userid")
    const bid = req.params("bookid");
    res.json = {
        userID: id,
        bookID: bid
    }
});

app.get("/user/:id", (req,res) =>{
    const id = req.params("ID");
    res.send(myData.data);
});

app.listen("listening on port", 4000);