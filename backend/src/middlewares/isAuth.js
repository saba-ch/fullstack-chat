const isAuth = (req, res, next) => {
  if (!req.sectionId) return res.status(401).send({ message: 'You are not authorized' })
  next()
}

export default isAuth
