const db = require('../../data/dbConfig.js')

module.exports = {
    add,
    findByCharacterId,
    update,
    remove
}

function add(details){
    return db('character_equipment').insert(details, 'id')
}

function findByCharacterId(character_id){
    return db('character_equipment').where({ character_id })
}

function update(updates, id){
    return db('character_equipment').where({ id }).update(updates)
}

function remove(id){
    return db('character_equipment').where({ id }).del()
}