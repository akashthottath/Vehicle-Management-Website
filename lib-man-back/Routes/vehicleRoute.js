const express = require('express')

const vehicleController = require('../Controller/vehicleController')

const router = new express.Router();

// add vehicle
router.post('/addvehicle',vehicleController.addvehicle)
// get cars
router.get('/getcars',vehicleController.getallcars)
// get single vehicles
router.get('/view/:id',vehicleController.getAvehicle)
// delete vehicles
router.delete('/car-delete/:id',vehicleController.deletecar)
// edit vehicles
router.put('/edit-vehicle/:id',vehicleController.editvehicle)

module.exports=router;
