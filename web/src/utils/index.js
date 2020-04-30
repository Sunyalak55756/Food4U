export const isLogin = () => {
  return localStorage.getItem('_token') ? true : false
}

export const setToken = (data) => {
  return localStorage.setItem('_token', data)
}

export const getToken = () => {
  return localStorage.getItem('_token')
}

export const removeToken = () => {
  return localStorage.removeItem('_token')
}

export const setUser = (data) => {
  return localStorage.setItem('user', data)
}

export const getUser = () => {
  return localStorage.getItem('user')
}

export const removeUser= () => {
  return localStorage.removeItem('user')
}
