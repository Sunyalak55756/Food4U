import db from '../../model'
const User = db.users

export const findOneUser = async (id) => {
  return await User.findOne({
    where: { id: id }
  }).then(res => res).catch(err => err)
}
