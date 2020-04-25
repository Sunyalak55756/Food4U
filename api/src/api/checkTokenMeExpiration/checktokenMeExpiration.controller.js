import express from 'express'
import log4js from 'log4js'
import codeStatus from '../../config/codeStatus'
import { findOneUser } from './checktokenMeExpiration.service'
const logErr = log4js.getLogger('error')
const router = express.Router()

const checktokenMeExpiration = async (req, res, next) => {
  try {
    const { id } = req.decodedToken
    const user = await findOneUser(id)
    return res.json({
      status: codeStatus.OK,
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

router.get('/', checktokenMeExpiration)
module.exports = router
