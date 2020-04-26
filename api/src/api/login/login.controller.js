import express from 'express'
import bcrypt from 'bcryptjs'
import log4js from 'log4js'
import codeStatus from '../../config/codeStatus'
import signin from '../../config/signin'
import { cheackLoginUser } from './login.service'
const logErr = log4js.getLogger('error')
const router = express.Router()

const Login = async (req, res, next) => {
  try {
    const { user_name, password } = req.body
    const user = await cheackLoginUser(user_name)
    if (user) {
      const loginStatus = bcrypt.compareSync(password, user.password)
      if (loginStatus) {
        const token = signin({ id: user.id, user_name: user.user_name })
        return res.json({
          status: codeStatus.OK,
          token,
          user: {
            id: user.id,
            user_name: user.user_name
          }
        })
      }
    }
    return res.send({ status: codeStatus.Validated })

  } catch (error) {
    console.log(error)
    logErr.error(error)
    return res.json({ status: codeStatus.InternalServerError, error })
  }
}

router.post('/', Login)
module.exports = router
