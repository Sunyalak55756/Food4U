import bodyParser from 'body-parser'
import cors from 'cors'
import conf from './config'
import decodedToken from '../src/config/decodedToken'

const setupRoutes = function (app) {
  app.use(`/${conf.apiName}/register`, require('./api/register/register.controller'))
  app.use(`/${conf.apiName}/login`, require('./api/login/login.controller'))
  app.use(`/${conf.apiName}/checktoken-me-expiration`, decodedToken, require('./api/checkTokenMeExpiration/checktokenMeExpiration.controller'))
  app.use(`/${conf.apiName}/foods`, decodedToken, require('./api/foods/foods.controller'))
}
const invalidRoute = (app) => {
  app.use((req, res, next) => {
    const error = new Error()
    error.message = 'Invalid route'
    error.status = 404
    next(error)
  })
}

export default (app) => {
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  setupRoutes(app)
  invalidRoute(app)
}
