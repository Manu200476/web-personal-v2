const express = require('express')

const router = express.Router()
const { sendMail } = require('../controllers/api')

router.post('/api/send-mail', sendMail)

module.exports = router