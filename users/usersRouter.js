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

module.exports = router