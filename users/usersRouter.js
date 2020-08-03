const express = require('express')
const users = require('./usersModel')

const router = express.Router()

router.get('/:username', (req, res) => {
    const username = req.params.username

    users.findBy({ username })
        .first()
        .then(user => {
            res.status(200).json({ user_id: user.id, username: user.username})
        })
        .catch(err => {
            res.status(404).json({ message: "user not found"})
        })
})

router.delete('/:username', (req, res) => {
    const username = req.params.username

    users.findBy({ username })
        .first()
        .then(user => {
            if(user){
                users.removeUser(user.id)
                    .then(deleted => {
                        res.status(201).json({ user_id: user.id, username: user.username})
                    })
                    .catch(err => {
                        res.status(409).json({ message: "Unable to remove user."})
                    })
            } else {
                res.status(404).json({ message: "Could not find user."})
            }
        })
        .catch(err => {
            res.status(404).json({ message: "Could not find user." })
        })
})

module.exports = router