import env from '../config/index'
import Sequelize from 'sequelize'
import fs from 'fs'
import path from 'path'
var basename = path.basename(module.filename);

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: 0,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
})
const db = {}
fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    var model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model;
  })

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate)
    db[modelName].associate(db)
})

db.Sequelize = Sequelize
db.sequelize = sequelize

export default db