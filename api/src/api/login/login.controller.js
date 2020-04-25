import express from 'express'
import bcrypt from 'bcryptjs'
import log4js from 'log4js'
import codeStatus from '../../../config/codeStatus'
import { cheackLoginUser } from './login.service'
import { userSchema } from './login.schema'
import signin from '../../../config/signin'
import Ajv from 'ajv'
const logErr = log4js.getLogger('error')
const router = express.Router()

const Login = async (req, res, next) => {
  try {
    const { user_name, password } = req.body
    var ajv = new Ajv();
    var valid = await ajv.validate(userSchema, req.body);
    if (!valid)
      return res.json({ status: codeStatus.Validated, message: ajv.errors[0].message })

    const user = await cheackLoginUser(user_name)
    if (user) {
      console.log(password, user)
      const loginStatus = bcrypt.compareSync(password, user.password)
      if (loginStatus) {
        const token = signin({ id: user.id, user_name: user.user_name })
        return res.json({
          status: codeStatus.OK,
          token,
          user: {
            user_name: user.user_name,
            balance: user.balance.balance,
            setting: user.setting
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
