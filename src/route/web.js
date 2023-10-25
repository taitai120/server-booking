const express = require('express')
const { getHomePage } = require('../controllers/homeController')

const router = express.Router()

const initWebRoutes = app => {
    app.use('/aa', getHomePage)

    return app.use('/', router)
}

module.exports = initWebRoutes