const bodyParser = require('body-parser')
const express = require('express')

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/static', express.static('public'));

app.get("/", (res,req) => {
    res.send("hello world")
})

app.get("/user/:userId", (req,res) =>{
    res.send(req.params);
})

app.post("/user", (res,req) =>{
    const user = req.body.name; // form name
    // do some db stuff

    res.send(`Creating a Post Request ${user}`)
})

app.get("/user/:userid/book/:bookid", (req,res) =>{
    const id = req.params("userid")
    const bid = req.params("bookid");
    res.json = {
        userID: id,
        bookID: bid
    }
})

app.listen("listening on port", 4000);