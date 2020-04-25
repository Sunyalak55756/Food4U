import express from 'express'
import setup from './src/setup'
import log4js from 'log4js'
import config from './src/config'
log4js.configure(require('./src/config/log'))
// require('./src/cronjob/cron-jobs');
const log = log4js.getLogger('startup')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// add route
setup(app)
// set port & run server
app.listen(config.port, () => {
  log.info(`Application:: ${config.app.name} v.${config.app.version} running on port ${config.port}`)
})

