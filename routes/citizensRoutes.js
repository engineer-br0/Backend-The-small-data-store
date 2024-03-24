const express = require("express");
const router = express.Router();
const citizenController = require("../controllers/citizenController");

// Routes
router.get("/", citizenController.getAllCitizens);
router.post("/", citizenController.createCitizen);
router.put("/:id", citizenController.updateCitizen);
router.delete("/:id", citizenController.deleteCitizen);

module.exports = router;
