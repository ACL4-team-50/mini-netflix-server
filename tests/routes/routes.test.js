const request = require('supertest')
const app = require('../../app')


describe('App Endpoints', () => {
    it('Should display home page', async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toEqual(200)
    })

    it('Should display 404 if route does not exist', async () => {
        const res = await request(app).get('/no-page')
        expect(res.statusCode).toEqual(404)
    })

    it('Should display movies page', async () => {
        const res = await request(app).get('/movies')
        expect(res.statusCode).toEqual(200)
    })
})