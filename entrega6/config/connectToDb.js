const knex = require('knex');

const dbClient = knex({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Independiente03', 
        database: 'ecommerce',
    },
});

module.exports = {dbClient}; 

