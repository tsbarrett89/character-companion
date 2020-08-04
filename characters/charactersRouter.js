const { Router } = require("express");

const express = require('express')
const chars = require('./charactersModel.js')

const router = express.Router()

router.post('/create', (req, res) => {
    const details = req.body

    chars.add(details)
        .then(charId => {
            res.status(201).json(charId)
        })
        .catch(err => {
            res.status(409).json({ message: "Could not create character."})
        })
})

router.get('/:id', (req, res) => {
    const user_id = req.params.id

    chars.findAllByUserId(user_id)
        .then(characters => {
            res.status(200).json(characters)
        })
        .catch(err => {
            res.status(404).json({ message: "User not found"})
        })
})

module.exports = router