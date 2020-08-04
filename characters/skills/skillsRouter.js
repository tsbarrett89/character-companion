const express = require('express')
const skills = require('./skillsModel')

const router = express.Router()

router.post('/create', (req, res) => {
    const details = req.body

    skills.add(details)
        .then(id => {
            res.status(201).json(id)
        })
        .catch(err => {
            res.status(409).json({ message: "Could not add skill proficiency" })
        })
})

router.get('/proficiencies/:char_id', (req, res) => {
    const char_id = req.params.char_id

    skills.findByCharacterId(char_id)
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

    skills.update(updates, id)
        .then(num => {
            res.status(201).json(num)
        })
        .catch(err => {
            res.status(409).json({ message: "Could not update skills proficiency" })
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    skills.delete(id)
        .then(num => {
            res.status(200).json(num)
        })
        .catch(err => {
            res.status(404).json({ message: "Skill proficiency not found." })
        })
})

module.exports = router