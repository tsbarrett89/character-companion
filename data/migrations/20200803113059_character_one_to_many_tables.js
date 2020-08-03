
exports.up = function(knex) {
    return knex.schema
        .createTable('skill_proficiences', tbl => {
            tbl.increments()
            tbl.integer('character_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.string('skill')
                .notNullable()
        })
        .createTable('language_proficiencies', tbl => {
            tbl.increments()
            tbl.integer('character_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.string('language')
                .notNullable()
        })
        .createTable('tool_proficiencies', tbl => {
            tbl.increments()
            tbl.integer('character_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.string('tool')
                .notNullable()
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tool_proficiencies')
        .dropTableIfExists('language_proficiencies')
        .dropTableIfExists('skill_proficiencies')
};
