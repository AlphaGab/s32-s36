const express = require("express")
const router = express.Router()
const controller = require("../controllers/courseControllers")
router.get("/show",controller.showPersons);
router.post("/add",controller.addPerson);

module.exports = router