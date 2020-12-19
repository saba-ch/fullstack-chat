
const setJwtToken = (token) => {
  localStorage.setItem('token', token)
}

const getJwtToken = () => {
  return localStorage.getItem('token')
}

const getName = () => {
  return localStorage.getItem('name')
}

const setName = (name) => {
  return localStorage.setItem('name', name)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setJwtToken,
  getJwtToken,
  getName,
  setName
}