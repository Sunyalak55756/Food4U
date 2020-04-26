import express from 'express'
import setup from './src/setup'
import log4js from 'log4js'
import config from './src/config'
import packageJson from './package.json'
log4js.configure(require('./src/config/log'))
const log = log4js.getLogger('startup')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

setup(app)
app.listen(config.port, () => {
  log.info(`Application:: ${packageJson.name} v.${packageJson.version} running on port ${config.port}`)
})

