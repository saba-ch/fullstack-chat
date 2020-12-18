import jwt from 'jsonwebtoken'

const sign = ({ id }) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '2d'
  })
  return token
}

const verify = ({ token }) => {
  const data = jwt.verify(token, process.env.JWT_SECRET)
  return data
}

export default {
  sign,
  verify
}