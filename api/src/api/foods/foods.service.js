import db from '../../model'
const Foods = db.foods

export const allFoods = async () => {
  return await Foods.findAll().then(res => res).catch(err => err)
}
