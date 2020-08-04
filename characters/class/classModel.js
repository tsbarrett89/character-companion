const db = require('../../data/dbConfig.js')

module.exports = {
    add,
    findByCharacterId,
    update,
    remove
}

function add(char_class){
    return db('character_class').insert(char_class, 'id')
}

function findByCharacterId(character_id){
    return db('character_class').where({ character_id })
}

function update(updates, id){
    return db('character_class').where({ id }).update(updates)
}

function remove(id){
    return db('character_class').where({ id }).del()
}