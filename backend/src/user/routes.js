const router = require('express').Router()
const { verifyAccessToken } = require('../middleware')
const { getUsers } = require('./controllers')

router.get('/', verifyAccessToken, getUsers);

module.exports = router
