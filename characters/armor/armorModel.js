const db = require('../../data/dbConfig.js')

module.exports = {
    add,
    findByCharacterId,
    update,
    remove
}

function add(skill){
    return db('armor_proficiencies').insert(skill, 'id')
}

function findByCharacterId(character_id){
    return db('armor_proficiencies').where({ character_id })
}

function update(updates, id){
    return db('armor_proficiencies').where({ id }).update(updates)
}

function remove(id){
    return db('armor_proficiencies').where({ id }).del()
}