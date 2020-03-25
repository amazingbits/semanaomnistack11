
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        //chave auto_increment
        table.increments()
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()
        
        //relacionamento
        table.string('ong_id').notNullable()

        //chave estrangeira
        table.foreign('ong_id').references('id').inTable('ongs')
    })
};

exports.down = function(knex) {
    knex.schema.dropTable('incidents')
};
