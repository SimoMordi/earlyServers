
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("<h2>Hello Nodemon</h2>")
})

let message = "I love Back-End"
app.get("/info",(req, res)=>{
res.send(message)
})

let person = {
    name: "Simo",
    Hobby: "Sleep",
    city: "Bellevue"
}
app.get("/data", (req, res) => {
    res.send(person)
})

app.listen(4001, () => {
    console.log("Working");
})


