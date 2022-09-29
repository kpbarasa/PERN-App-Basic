const express = require('express')
const router = express.Router()
const { catchErrors } = require("../handlers/errorHandler");

// CONTOLLERS ====================================================================================================
const mainController  = require('../controllers/main.controller');

// Create 
router.post("/new", catchErrors(mainController.newData))

// Get all
router.get("/get", catchErrors(mainController.getData))

// Get single
router.get("/get/:id", catchErrors(mainController.getData_id))

// Update 
router.post("/update/:id", catchErrors(mainController.updateData))

// Delete
router.delete("/delete/:id", catchErrors(mainController.deleteData))

module.exports = router