const knex = require("knex");
const environment = process.env.ENVIROMENT || 'development'
const config = require("../../knexfile");

const dbEnv = process.env.DB_ENV || "development";

module.exports = knex(config);
