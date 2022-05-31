const express = require('express')

const router = express.Router()
const { indexBlog, singlePost } = require('../controllers/blog')

router.get('/blog', indexBlog)
router.get('/blog/:slug', singlePost)

module.exports = router
