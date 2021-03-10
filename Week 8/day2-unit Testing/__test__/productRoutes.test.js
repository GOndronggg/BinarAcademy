const app = require('../app');
const request = require('supertest');

test("routes /products should return message this is product", () => {
    return request(app).get('/products').expect(200).expect("this is product");

})