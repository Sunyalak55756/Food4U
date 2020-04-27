import db from '../../model'
const Orders = db.orders
const Lists = db.lists
const Foods = db.foods

export const allOrders = async (id) => {
  return await Orders.findAll({
    where: { users_id: id },
    include: [{
      model: Lists,
      include: [{ model: Foods }],
    }]
  }).then(res => res).catch(err => err)
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