const bodyParser = require('body-parser')
const express = require('express')

const app = express()
app.use(bodyParser.json)

app.get("/", (res,req) => {
    write.json("something");
})

app.post("/user", (res,req) =>{
    const user = res.param("name");
    write.json("user")
})

app.listen("listening on port", 4000);