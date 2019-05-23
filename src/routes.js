const express = require('express')
const authMiddleware = require('./middlewares/authMiddleware')
const controllers = require('./controllers')

const routes = express.Router()

routes.post('/user', controllers.UserController.storage)
routes.get('/user', controllers.UserController.list)
routes.delete('/user/:id', controllers.UserController.delete)

routes.use(authMiddleware)

routes.get('/notice/:id', controllers.NoticeController.show)
routes.post('/notice', controllers.NoticeController.storage)
routes.put('/notice/:id', controllers.NoticeController.update)
routes.delete('/notice/:id', controllers.NoticeController.delete)

module.exports = routes
