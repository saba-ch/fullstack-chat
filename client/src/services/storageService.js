
const setJwtToken = (token) => {
  localStorage.setItem('token', token)
}

const getJwtToken = () => {
  return localStorage.getItem('token')
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setJwtToken,
  getJwtToken
}