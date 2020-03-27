
exports.up = function(knex) {
   return knex.schema.createTable('ongs', function (table) { // cria a tabela de ongs
        table.string('id').primary()  // o id vai ser criado por mim, para maior segurança
        table.string('name').notNullable(); //noNullable = n pode ser nulo
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); // o 2 é o tamanho q os uf podem ter
  })
};

exports.down = function (knex) { //se der erro
    return knex.schema.dropTable('ongs'); //deleta a tabela se der erro
  
};
