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

    it('Should add a new movie to database', async () => {
        let movie_titles = [
            'Avangers',
            'Black Panther',
            'Zombies',
            'Zombies 2',
            'Zombies 3',
            'Avangers II',
            'Black Panther IV',
            'Zombies IX',
            'Zombies IXX',
            'Zombies IXXX'
        ]

        let new_movie_id = Math.floor(Math.random() * movie_titles.length);

        const res = await request(app).post('/movies').send({
            id: new_movie_id,
            title: movie_titles[new_movie_id]
        })

        expect(res.statusCode).toEqual(200)
        expect(res.body).toMatchObject({
            message: "Movie Created"
        })
    })
})