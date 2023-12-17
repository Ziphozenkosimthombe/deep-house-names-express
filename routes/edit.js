const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/:id', editController.getEdit)
router.put('/updateEntry', editController.updateEntry)

module.exports = router