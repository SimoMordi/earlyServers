const express = require('express');
const path = require('path')
const app = express();
app.use(express.json());
const names = ["bob", "sarah", "james"];
app.get("/names", (req, res) => {
    res.send(names)
});
// add name to array
// needed: the name of the peron "JC"
// sending data 1 PARAMS
//        /addPerson/Svitlana
app.put("/addPerson/:nameToAdd", (req, res) => {
    names.push(req.params.nameToAdd);
    res.send("added a person!");
})
// sending data 2 QUERIES (still part of url, just not path)
//        /addPerson/?personName=Svitlana
app.put("/addPerson", (req, res) => {
    names.push(req.query.personName);
    res.send("added a person!");
})
// sending data req.body OBJECT
//        /addPerson/
app.put('/addAPerson', (req, res) => {
    console.log(req.body);
})
// get a specifc name (using the index)
// look for name
app.listen(3000, () => {
    console.log("server is active on port 3000");
})












