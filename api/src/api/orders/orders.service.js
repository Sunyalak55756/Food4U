import db from '../../model'
const Foods = db.foods

export const allFood = async () => {
  return await Foods.findAll().then(res => res).catch(err => err)
}
