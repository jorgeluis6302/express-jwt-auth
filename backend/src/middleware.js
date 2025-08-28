const jwt = require('jsonwebtoken')

const verifyAccessToken = (req, res, next) => {
  const token = req.header("authorization")

  if (token === null || token === undefined || token === '') {
    res.status(401).json({
      error: 'Token was not provided!'
    })
  } else {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  }
}

module.exports = {
  verifyAccessToken,
}
