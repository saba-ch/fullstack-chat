import { jwtService } from '../services'

const isAuth = (req, res, next) => {
  if (!req.sessionId) return res.status(401).send({ message: 'You are not authorized' })
  next()
}

export default isAuth
