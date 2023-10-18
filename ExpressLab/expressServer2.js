const express = require('express')

const server = express()

server.get("/",(req, res) => {
    res.send("welcome to my server!")
})

let user = "James"

server.get("/user", (req, res) => {
    res.send(user)
} )

server.listen(3000, () => {
    console.log("server has started");
})