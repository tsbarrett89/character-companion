const bcrypt = require('bcryptjs')
const express = require('express')
const users = require('./authModel.js')
const createToken = require('./token')

const router = express.Router()

router.post('/register', (req, res) => {
    const creds = req.body

    if (creds.username && creds.password){
        const hash = bcrypt.hashSync(creds.password, 12)
        creds.password = hash
        users.add(creds)
            .then(userId => {
                const token = createToken(userId)

                res.status(201).json({ user_id: userId[0], token })
            })
    } else {
        res.status(400).json({ message: 'username and password are required' })
    }
})

module.exports = router