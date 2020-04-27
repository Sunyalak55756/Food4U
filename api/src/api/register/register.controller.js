import express from 'express'
import bcrypt from 'bcryptjs'
import log4js from 'log4js'
import conf from '../../config'
import codeStatus from '../../config/codeStatus'
import signin from '../../config/signin'
import { createUser } from './register.service'
const logErr = log4js.getLogger('error')
const router = express.Router()

const Register = async (req, res, next) => {
  try {
    const { password, user_name } = req.body
    if (!user_name && !password) {
      return res.json({ status: codeStatus.Validated })
    }
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
        id: user.id,
        user_name: user.user_name
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
