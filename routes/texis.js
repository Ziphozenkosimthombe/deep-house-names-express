const express = require('express')
const router = express.Router()
const texisContoller = require('../controllers/texis')

router.get('/', texisContoller.getTexis)

router.post('/api', texisContoller.api)

router.delete('/deleteEntry', texisContoller.deleteEntry)

router.put('/markComplete', texisContoller.markComplete)



module.exports = router