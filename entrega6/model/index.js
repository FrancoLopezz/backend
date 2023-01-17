const { dbClient } = require("../config/connectToDb");

const createTable = () => {
    dbClient.schema.createTable('articles', table => {
        table.string('name', 15).notNullable();
        table.string('code', 10).notNullable();
        table.float('price');
        table.integer('stock');
    })
        .then(() => console.log('table created'))
        .catch((err) => console.log('error', err.message))
};

module.exports = {createTable};