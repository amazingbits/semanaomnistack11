const knex = require('knex')
const configuration = require('../../knexfile')

//se a variável de ambiente NODE_ENV for igual a 'test', utilizamos o banco de testes,
//caso contrário, utilizamos o banco de aplicação (development)
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

//aqui estou passando a configuração "development"
//do knex no arquivo knexfile
const connection = knex(config)

//exportação do connection
module.exports = connection