
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) { // cria a tabela de indicents
        table.increments(); //cada vez q é criado um caso id++
  
        table.string('title').notNullable();
        table.string('description').notNullable(); //noNullable = n pode ser nulo
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
 
   })
 };
 
 exports.down = function (knex) { //se der erro
     return knex.schema.dropTable('incidents'); //deleta a tabela se der erro
   
 };
 