const express = require('express')
const languages = require('./languagesModel')

const router = express.Router()

router.post('/create', (req, res) => {
    const details = req.body

    languages.add(details)
        .then(id => {
            res.status(201).json(id)
        })
        .catch(err => {
            res.status(409).json({ message: "Could not add languages" })
        })
})

router.get('/:char_id', (req, res) => {
    const char_id = req.params.char_id

    languages.findByCharacterId(char_id)
        .then(prof => {
            res.status(200).json(prof)
        })
        .catch(err => {
            res.status(404).json({ message: "Character not found." })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const updates = req.body

    languages.update(updates, id)
        .then(num => {
            res.status(201).json(num)
        })
        .catch(err => {
            res.status(409).json({ message: "Could not update language" })
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    languages.delete(id)
        .then(num => {
            res.status(200).json(num)
        })
        .catch(err => {
            res.status(404).json({ message: "Languages not found." })
        })
})

module.exports = router