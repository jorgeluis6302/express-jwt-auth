const jwt = require('jsonwebtoken')

const users = [
  {
    id: 1,
    userName: 'admin',
    password: 'SuperSecret',
  },
  {
    id: 2,
    userName: 'john',
    password: 'SuperSecret'
  }
]

const login = (req, res, next) => {
  const { userName, password } = req.body

  const userFound = users.find((user) => (
    userName === user.userName && user.password === password
  ))

  if (userFound) {
    const accessToken = jwt.sign(
      { user_id: userFound.id,username: userFound.userName },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    res.status(201).json({
      id: userFound.id,
      userName: userFound.userName,
      accessToken,
    })
  } else {
    res.status(401).json({
      error: 'Username or password are wrong!'
    })
  }
}

module.exports = {
  login,
}
