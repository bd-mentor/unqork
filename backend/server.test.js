const request = require('supertest');
const app = require('./app');

describe('GET /api/message', () => {
    it('should respond with a JSON containing "Hello from the API in Express!"', async () => {
        const response = await request(app).get('/api/message');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Hello from the API in Express!');
    });
});

describe('GET /', () => {
    it('should respond with the text "Hello from Express!"', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello from Express!');
    });
});
