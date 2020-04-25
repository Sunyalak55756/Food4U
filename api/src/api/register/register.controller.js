import express from 'express'
import bcrypt from 'bcryptjs'
import conf from '../../../config'
import log4js from 'log4js'
import codeStatus from '../../../config/codeStatus'
import { createUser } from './register.service'
import { userSchema } from './register.schema'
import Ajv from 'ajv'
const logErr = log4js.getLogger('error')
const router = express.Router()
import signin from '../../../config/signin'

const Register = async (req, res, next) => {
  try {
    var ajv = new Ajv();
    var valid = await ajv.validate(userSchema, req.body);
    if (!valid)
      return res.json({ status: codeStatus.Validated, message: ajv.errors[0].message })

    const { password } = req.body
    const hash = await bcrypt.hash(password, conf.saltBcrypt).then(hash => hash)
    const user = await createUser({
      ...req.body,
      password: hash,
    })
    if (user.errors) {
      return res.json({ status: codeStatus.Validated, message: create.errors[0].message })
    }
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

  } catch (error) {
    console.log(error)
    logErr.error(error)
    return res.json({ status: codeStatus.InternalServerError, error })
  }
}

router.post('/', Register)
module.exports = router
