const express = require('express')

const driverController = require('../Controller/driverController')

const router = new express.Router();
// add drivers
router.post('/adddriver',driverController.adddriver)
// get drivers
router.get('/getdriver',driverController.getallDrivers)
// get single product
router.get('/view/:id',driverController.getAdriver)
// delete driver
router.delete('/driver-delete/:id',driverController.deletedriver)
// edit driver
router.put('/edit-driver/:id',driverController.editdriver)

module.exports=router;