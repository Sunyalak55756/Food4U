import jwt from 'jsonwebtoken'
import conf from '../config'

const signin = ({ id, user_name }) => {
  return jwt.sign(
    {
      id: id,
      user_name: user_name
    },
    conf.secretKeyToken,
    {
      expiresIn: conf.expiresInToken
    }
  )
}

export default signin