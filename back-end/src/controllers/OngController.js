//pacote do node crypto que serve para
//criar chaves criptografadas e/ou chaves randômicas
const crypto = require('crypto')
//importo as configurações do connection.js
const connection = require('../database/connection')
module.exports = {

    async index (request, response) {
        //seleciono tudo da tabela ongs
        const ongs = await connection('ongs').select('*')
        
        return response.json({ ongs })
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body

        const id = crypto.randomBytes(4).toString('HEX')

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.json({ id })

    }

}