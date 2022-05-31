const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

const app = express()

dotenv.config()

const PORT = process.env.PORT || 3000

const indexRouter = require('./src/routes')
const pagesRouter = require('./src/routes/pages')
const blogRoutes = require('./src/routes/blog')
const portafolioRoutes = require('./src/routes/portafolio')
const errorRoutes = require('./src/routes/error')
const apiRoutes = require('./src/routes/api')

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'static')))
app.use(express.static(path.join(__dirname, 'assets')))

app.use(errorRoutes)
app.use(blogRoutes)
app.use(portafolioRoutes)
app.use(apiRoutes)
app.use(indexRouter)
app.use(pagesRouter)

app.listen(PORT)
