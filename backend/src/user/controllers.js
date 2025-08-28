const users = [
  {
    id: 1,
    firstName: 'JOhn',
    lastName: 'Doe'
  },
  {
    id: 2,
    username: 'Jane',
    password: 'Smith',
  },
]

const getUsers = (req, res, next) => {
  res.status(200).send({ users })
}

module.exports = {
  getUsers,
}
