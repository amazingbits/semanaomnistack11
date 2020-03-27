const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        //a cada novo teste, eu excluo as informações do banco de
        //testes e crio um banco do zero, para que eu não
        //alimente o banco de dados a cada teste e essas informações se
        //acumulem no banco
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
                         .post('/ongs')
                         .send({
                            name: "Ong Teste 2",
                            email: "ong@mail.email.com",
                            whatsapp: "47999896989",
                            city: "Santa Catarina",
                            uf: "SC"
                         })
        
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})