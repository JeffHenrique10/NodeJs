const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')
const { promisify } = require('util')

module.exports = async (res, req, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    res.status(401).json({ error: 'Token was not generated' })
  }
  const [, token] = authHeader.split('')

  try {
    const decode = await promisify(jwt.verify)(token, authConfig.secret)
    req.useId = decode.useId
    return next()
  } catch (error) {
    return res.status(400).json({ error: 'Invalid Token' })
  }
}
