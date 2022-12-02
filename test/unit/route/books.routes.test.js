const db = require('../../../model/index');
let request = require('supertest');
let app = require('../../../app');

const booksEndpoint = '/Books';
const booksAddEndpoint = '/Books/add';


// bookRoute.get('/', booksController.getAllBooks);

describe('Books Routes', () => {
  test('should test my get route', async () => {
    const res = await request(app).get(booksEndpoint);

    expect(res.status).toEqual(200);
  });
  test('my Add books api', async () => {
    const res = await request(app).post(booksAddEndpoint).send({
      name : "Shamchi Aai",
      author : "Dnyneshwar Maharaj" 
    })

    expect(res.statusCode).toEqual(201)
  }); 
});
