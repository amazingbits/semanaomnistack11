const knex = require('knex')
const configuration = require('../../knexfile')

//aqui estou passando a configuração "development"
//do knex no arquivo knexfile
const connection = knex(configuration.development)

//exportação do connection
module.exports = connection