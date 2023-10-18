const express = require('express');
// const cors = require('cors')

const server = express();

// app.use(cors({
//     origin: "*"
// }))


server.get("/", (req, res) => {
    res.send("<h1>Welcome1<h1>")
})
let myMessages = ["hello", 'Hi', "welcome"]
server.get("/messages", (req, res) => {
    res.send(myMessages);
})

server.delete("/messages/last", (req, res) => {
        myMessages.pop()
        res.send("last message deleted")
})
server.delete("/messages/first", (req, res) => {
        myMessages.shift()
        res.send("first message deleted")
})

// /messages/good morning!

server.put('/messages/:messageContent', (req, res) => {
    // req.params is an object with our params
    // { messageContent: "url text"}
    myMessages.push(req.params.messageContent);
    res.send("message added!")
})



server.listen(4000, () => {
    console.log("Server has started");
})


















