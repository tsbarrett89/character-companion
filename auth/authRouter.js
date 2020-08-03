const bcrypt = require('bcryptjs')
const express = require('express')
const users = require('../users/usersModel.js')
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
            .catch(err => {
                res.status(409).json({ message: "unable to create user" })
            })
    } else {
        res.status(400).json({ message: 'username and password are required' })
    }
})

router.post('/login', (req, res) => {
    const { username, password } = req.body

    users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)){
                const token = createToken(user.id)

                res.status(200).json({ user_id: user.id, token })
            } else {
                res.status(401).json({ message: "Invalid credentials" })
            }
        })
        .catch(err => {
            res.status(403).json({ message: "user not found" })
        })
})

router.put('/:username', (req, res) => {
    const username = req.params.username
    const updates = req.body

    if(updates.username){
        const hash = bcrypt.hashSync(updates.password, 12)
        updates.password = hash
    }
    
    users.findBy({ username })
    .then(user => {
        if(user){
            users.updateUser(updates, username)
                .then(updatedUser => {
                    res.status(200).json(updatedUser)
                })
                .catch(err => {
                    res.status(409).json({ message: "Unable to update user."})
                })
        } else {
            res.status(404).json({ message: "No user found."})
        }
    })
    .catch(err => {
        res.status(404).json({ message: "Could not find user."})
    })
})

module.exports = router