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
    const id = req.params.id

    chars.findById(id)
        .then(char => {
            res.status(200).json(char)
        })
        .catch(err => {
            res.status(404).json({ message: "Character not found."})
        })
})

router.get('/all/:user_id', (req, res) => {
    const user_id = req.params.user_id

    chars.findAllByUserId(user_id)
        .then(characters => {
            res.status(200).json(characters)
        })
        .catch(err => {
            res.status(404).json({ message: "User not found"})
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const updates = req.body

    chars.findById(id)
        .then(char => {
            if(char){
                chars.update(updates, id)
                    .then(num => {
                        chars.findById(id)
                            .then(char => {
                                res.status(201).json(char)
                            })
                            .catch(err => {
                                res.status(404).json({ message: "Character not found" })
                            })
                    })
                    .catch(err => {
                        res.status(400).json({message: "Unable to update character"})
                    })
            } else {
                res.status(404).json({ message: "Could not find character." })
            }
        })
        .catch(err => {
            res.status(404).json({ message: "Could not find character." })
        })
})

module.exports = router