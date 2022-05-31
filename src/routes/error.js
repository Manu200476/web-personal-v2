const express = require('express')

const router = express.Router()
const { error404, error500 } = require('../controllers/error')

router.get('/error-404', error404)
router.get('/error-500', error500)

module.exports = router
