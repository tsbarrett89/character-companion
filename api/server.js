const express = require('express')
const cors = require('cors')

const authRouter = require('../auth/authRouter')
const usersRouter = require('../users/usersRouter')
const charactersRouter = require('../characters/charactersRouter')
const armorRouter = require('../characters/armor/armorRouter')
const equipmentRouter = require('../characters/equipment/equipmentRouter')
const featsRouter = require('../characters/feats/featsRouter')
const languagesRouter = require('../characters/languages/languagesRouter')
const skillsRouter = require('../characters/skills/skillsRouter')
const toolsRouter = require('../characters/tools/toolsRouter')
const weaponRouter = require('../characters/weapon/weaponRouter')

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send('Character Companion Api')
})

server.use('/auth', authRouter)
server.use('/users', usersRouter)
server.use('/characters', charactersRouter)
server.use('/armor', armorRouter)
server.use('/equipment', equipmentRouter)
server.use('/feats', featsRouter)
server.use('/languages', languagesRouter)
server.use('/skils', skillsRouter)
server.use('/tools', toolsRouter)
server.use('/weapon', weaponRouter)

module.exports = server