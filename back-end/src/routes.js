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

//Importação do pacote 'celebrate', que é pesponsável pela validação
//dos meus dados no back-end.
const { celebrate, Segments, Joi } = require('celebrate');

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
//a validação deve vir antes da criação da nova ong no cadastro
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}) ,OngController.create)

//rota profile - itens específicos
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}) ,ProfileController.index)

//rotas dos casos
//validando para que o número de página passado aqui seja numérico ?page=1, por exemplo
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}) ,IncidentController.index)

//validando body dos incidents
routes.post('/incidents', celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required().min(3),
    description: Joi.string().required(),
    value: Joi.number().required()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}) ,IncidentController.create)

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}) ,IncidentController.delete)

module.exports = routes