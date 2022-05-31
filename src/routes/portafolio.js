const express = require('express')

const router = express.Router()
const { indexPortafolio, singleProject } = require('../controllers/portafolio')

router.get('/portafolio', indexPortafolio)
router.get('/portafolio/:slug', singleProject)

module.exports = router
