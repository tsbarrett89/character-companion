const db = require('../data/dbConfig')

module.exports = {
    add,
    findById,
    findAllByUserId,
    update,
    remove
}

function add(details){
    return db('characters').insert(details)
}

function findById(id){
    return db('characters').where({ id }).first()
}

function findAllByUserId(user_id){
    return db('characters').where({ user_id })
}

function update(updates, id){
    return db('characters').where({ id }).update(updates)
}

function remove(id){
    return db('characters').where({ id }).del()
}