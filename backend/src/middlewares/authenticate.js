import { jwtService } from '../services'

const authenticate = (req, res, next) => {
  try {
    if (!req.headers.authorization) return next()
    const data = jwtService.verify({ token: req.headers.authorization })
    req.sessionId = data.id
    next()
  } catch (error) {
    res.status(401).send({ message: 'Invalid token' })
  }
}

export default authenticate
