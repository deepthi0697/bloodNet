const express = require('express')
const router = express.Router()

const bloodBanksController = require('../app/controller/bloodBanksController')
const donorsController = require('../app/controller/donorsController')

router.get('/bank', bloodBanksController.list)
router.get('/bank/:id', bloodBanksController.show)
router.post('/bank', bloodBanksController.create)
router.put('/bank/:id', bloodBanksController.update)
router.delete('/bank/:id', bloodBanksController.delete)

router.get('/donate', donorsController.list)
router.get('/donate/:id', donorsController.show)
router.post('/donate', donorsController.create)
router.put('/donate/:id', donorsController.update)
router.delete('/donate/:id', donorsController.delete)


module.exports = router
