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

router.put('/:username', (req, res) => {
    const username = req.params.username
    const updates = req.body

    users.findBy({ username })
        .then(user => {
            if(user){
                users.updateUser(updates)
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