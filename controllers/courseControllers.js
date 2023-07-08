const personModel = require("../models/Course")
let personArray = []

function showPersons(req,res){
    res.send(personArray)
}


function addPerson(req,res){    
    const personInput = {name : req.body.name, age :req.body.age}
    const personObject = new personModel(personInput.name,personInput.age)
    personArray.push(personObject)
    res.send("Details Saved")
}

module.exports = {showPersons,addPerson}