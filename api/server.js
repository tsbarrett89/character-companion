const express = require('express')
const cors = require('cors')

const authRouter = require('../auth/authRouter')

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send('Character Companion Api')
})

server.use('/auth', authRouter)

module.exports = server