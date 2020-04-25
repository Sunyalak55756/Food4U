const env = {
  expiresInToken: '24hr',
  secretKeyToken: 'demo',
  port: 5000,
  apiName: 'api',
  saltBcrypt: 10,
  database: 'food4u',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

export default env