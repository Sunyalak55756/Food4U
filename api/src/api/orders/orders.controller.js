import express from 'express'
import log4js from 'log4js'
import codeStatus from '../../config/codeStatus'
import { allOrders, createOrders } from './orders.service'
const logErr = log4js.getLogger('error')
const router = express.Router()

const Orders = async (req, res, next) => {
  try {
    const orders = await allOrders()
    return res.json(foods)
  } catch (error) {
    console.log(error)
    logErr.error(error)
    return res.json({ status: codeStatus.InternalServerError, error })
  }
}

const CreateOrders = async (req, res, next) => {
  try {
    const { localtion, foods, total_price } = req.body
    const { id } = req.decodedToken
    const createFoods = await createOrders(id, localtion, total_price, foods)
    return res.json(createFoods)
  } catch (error) {
    console.log(error)
    logErr.error(error)
    return res.json({ status: codeStatus.InternalServerError, error })
  }
}

router.get('/', Orders)
  .post('/', CreateOrders)
module.exports = router
