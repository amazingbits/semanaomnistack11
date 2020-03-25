//importo as configurações do connection.js
const connection = require('../database/connection')

module.exports = {

    async index(request, response) {

        const { page = 1 } = request.query

        //retorna quantos casos há no total para passar esse
        //dado ao front end
        //isso irá me retornar um array, então já estou
        //criando uma variável count que receberá a primeira
        //chave do array
        const [count] = await connection('incidents').count()
        
        //aqui eu retorno este count ao cabeçalho de resposta
        //o count(*) é o nome da propriedade count na pesquisa acima
        response.header('X-Total-Count', count['count(*)'])

        //limitando a busca de 5 em 5 itens - paginação
        const incidents = await connection('incidents')
                                //aqui eu dou um join para trazer informações da ONG além do caso
                                .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
                                .limit(5)
                                .offset((page - 1) * 5)
                                .select([
                                            'incidents.*',
                                            'ongs.name',
                                            'ongs.email',
                                            'ongs.whatsapp',
                                            'ongs.city',
                                            'ongs.uf'
                                        ])

        return response.json({ incidents })

    },

    async create(request, response) {
        const { title, description, value } = request.body
        //aqui o id da ong que está logada no momento criando este caso
        const ong_id = request.headers.authorization

        //a chave do primeiro registro dessa função, que será
        //o id será armazenado numa variável id que eu
        //vou retornar no fim dessa função
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params
        const ong_id = request.headers.authorization

        //me retornar apenas o primeiro resultado do item ong_id da tabela incidents
        const incident = await connection('incidents').where('id', id).select('ong_id').first()

        if(incident.ong_id != ong_id){
            return response.status(401).json({ "error": "Operation unauthorized!" })
        }

        //exclui o item do banco
        await connection('incidents').where('id',id).delete()

        return response.status(204).send()

    }

}