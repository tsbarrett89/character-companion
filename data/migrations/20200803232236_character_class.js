
exports.up = function(knex) {
    return knex.schema.createTable('character_class', tbl => {
        tbl.increments()
        tbl.integer('character_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('characters')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.string('class')
            .notNullable()
        tbl.string('subclass')
            .defaultTo('none')
        tbl.integer('class_level')
            .unsigned()
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('character_class')
};
