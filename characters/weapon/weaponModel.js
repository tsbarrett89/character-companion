const db = require('../../data/dbConfig.js')

module.exports = {
    add,
    findByCharacterId,
    update,
    remove
}

function add(details){
    return db('weapon_proficiencies').insert(details, 'id')
}

function findByCharacterId(character_id){
    return db('weapon_proficiencies').where({ character_id })
}

function update(updates, id){
    return db('weapon_proficiencies').where({ id }).update(updates)
}

function remove(id){
    return db('weapon_proficiencies').where({ id }).del()
}