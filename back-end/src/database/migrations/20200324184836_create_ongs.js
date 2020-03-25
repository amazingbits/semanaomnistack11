//método UP ocorre quando eu executo a
//migration, no caso, quando eu crio a tabela
exports.up = function(knex) {
  
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
    })
};

//método down ocorre quando há algum problema e
//eu preciso de alguma ação de correção, no caso
//excluir a tabela
exports.down = function(knex) {
    return knex.schema.dropTable('ongs')
};
