import express from 'express'
import log4js from 'log4js'
import codeStatus from '../../config/codeStatus'
import { allFood } from './foods.service'
const logErr = log4js.getLogger('error')
const router = express.Router()

const Foods = async (req, res, next) => {
  try {
    const foods = await allFood()
    return res.json(foods)
  } catch (error) {
    console.log(error)
    logErr.error(error)
    return res.json({ status: codeStatus.InternalServerError, error })
  }
}

router.get('/', Foods)
module.exports = router
