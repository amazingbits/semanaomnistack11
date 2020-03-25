/**
 * Tudo o que vem após à barra nas rotas são chamados
 * de "Recursos" ou "Resource"
 */

/**
 * Métodos HTTP
 *  GET: buscar uma informação no back-end
 *  POST: criar uma informação no back-end
 *  PUT: alterar uma informação no back-end
 *  DELETE: deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros (params):
  * 
  * Query params: parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
  * Route params: parâmetros utilizados para identificar recursos
  * Request body: corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
 * utilizo a ideia de async await para que o programa
 * aguarde a inserção, que pode demorar algum tempo, para
 * depois sim retornar o resultado
 */

const express = require('express')
//pacote que vem no próprio node e serve para
//criptografia e/ou gerar números aleatórios
//const crypto = require('crypto')

const routes = express.Router()

//importando o controller da ong
const OngController = require('./controllers/OngController')
//importando o controller dos casos
const IncidentController = require('./controllers/IncidentController')
//importando o controller dos casos específicos
const ProfileController = require('./controllers/ProfileController')
//importando o controller do login
const SessionController = require('./controllers/SessionController')

//rota do login
routes.post('/sessions', SessionController.create)

//rota das ongs
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

//rota profile - itens específicos
routes.get('/profile', ProfileController.index)

//rotas dos casos
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes