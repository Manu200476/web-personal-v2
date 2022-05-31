const express = require('express')

const router = express.Router()
const { pagesController, contactController } = require('../controllers/pages')

router.get('/contacto', contactController)
router.get('/:slug', pagesController)

module.exports = router
