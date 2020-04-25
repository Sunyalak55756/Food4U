import jwt from 'jsonwebtoken'
import codeStatus from '../config/codeStatus'
import conf from '../config'

export default (req, res, next) => {
  let token = req.headers['authorization']
  if (token) {
    if (token.startsWith('Bearer ')) {
      token = token.slice(8, token.length)
    }
    jwt.verify(token, conf.secretKeyToken, (err, decoded) => {
      if (err) {
        return res.json({
          status: codeStatus.TokenExpire,
          message: 'Token is not valid'
        })
      } else {
        req.decodedToken = decoded
        next()
      }
    })
  } else {
    return res.json({
      success: codeStatus.TokenSupplied,
      message: 'Auth token is not supplied'
    })
  }
}