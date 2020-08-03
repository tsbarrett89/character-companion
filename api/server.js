const express = require('express')
const cors = require('cors')

const authRouter = require('../auth/authRouter')
const usersRouter = require('../users/usersRouter')

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send('Character Companion Api')
})

server.use('/auth', authRouter)
server.use('/users', usersRouter)

module.exports = server