import db from '../../model'
const Orders = db.orders

export const allOrders = async () => {
  return await Orders.findAll().then(res => res).catch(err => err)
}

export const createOrders = async (id, localtion, total_price, foods) => {
  return await Orders.create({
    localtion: localtion,
    total_price: total_price,
    users_id: id,
    lists: [...foods]
  }, {
    include: ['lists']
  })
}