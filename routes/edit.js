const express = require('express')
const router = express.Router()
const editRouterControllers = require('../controllers/edit')

router.get('/', editRouterControllers.getEditTexi)

module.exports = router