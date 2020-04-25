import db from '../../../model'
const User = db.users

export const cheackLoginUser = async (user_name) => {
  return await User.findOne({
    where: { user_name: user_name }
  }).then(res => res).catch(err => err)
}
