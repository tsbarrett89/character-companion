const express = require('express')
const char_class = require('./classModel')

const router = express.Router()

router.post('/create', (req, res) => {
    const details = req.body

    char_class.add(details)
        .then(id => {
            res.status(201).json(id)
        })
        .catch(err => {
            res.status(409).json({ message: "Could not add character class" })
        })
})

router.get('/classes/:char_id', (req, res) => {
    const char_id = req.params.char_id

    char_class.findByCharacterId(char_id)
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

    char_class.update(updates, id)
        .then(num => {
            res.status(201).json(num)
        })
        .catch(err => {
            res.status(409).json({ message: "Could not update character class" })
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    char_class.delete(id)
        .then(num => {
            res.status(200).json(num)
        })
        .catch(err => {
            res.status(404).json({ message: "Character class not found." })
        })
})

module.exports = router