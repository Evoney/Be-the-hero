const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ong', () =>{
    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();

    });
    it('should be able to create a new ong', async () => {
        const response = await request(app).post('/ongs').send({
                name: "Evoney",
                email: "ong@gm.com",
                whatsapp: "99999999999",
                city: "Manaus",
                uf: "AM"             
        });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    });
})