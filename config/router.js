const express = require('express')
const router = express.Router()

const bloodBanksController = require('../app/controller/bloodBanksController')
const donorsController = require('../app/controller/donorsController')
const usersController = require('../app/controller/usersController')
const authenticateUser = require('../app/middlewares/authenticate')

router.get('/bank', authenticateUser, bloodBanksController.list)
router.get('/bank/:id', authenticateUser, bloodBanksController.show)
router.post('/bank', authenticateUser, bloodBanksController.create)
router.put('/bank/:id', authenticateUser,  bloodBanksController.update)
router.delete('/bank/:id', authenticateUser, bloodBanksController.delete)

router.get('/donate', donorsController.list)
router.get('/donate/:id', donorsController.show)
router.post('/donate', donorsController.create)
router.put('/donate/:id', donorsController.update)
router.delete('/donate/:id', donorsController.delete)

router.post('/hospital/login', usersController.login)

module.exports = router
