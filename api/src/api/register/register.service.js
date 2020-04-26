import db from '../../model'
const User = db.users

export const createUser = async (data) => {
  return await User.create({
    ...data
  }).then(res => res).catch(err => err)
}
