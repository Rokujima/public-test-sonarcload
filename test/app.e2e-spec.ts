import * as request from 'supertest';

describe('UserController (e2e)', () => {
  let app;

  beforeEach(async () => {
    app = 'http://localhost:3000';
  });

  it('/user (GET)', async () => {
    return request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('/user (Update)', async () => {
    return request(app)
      .put('/user/6142037e68f41cc0397923c8')
      .send({
        email: 'testing-update-6142037e68f41cc0397923c8@gmail.com',
        username: 'testing-username',
      })
      .expect(200);
  });

  it('/user (Delete)', async () => {
    return request(app).delete('/user/6142037e68f41cc0397923c8').expect(200);
  });

  it('/user (POST)', () => {
    return request(app)
      .post('/user')
      .set('Accept', 'application/json')
      .send({
        email: 'testing-update-6142037e68f41cc0397923c8@gmail.com',
        username: 'testing-username',
      })
      .expect(201);
  });
});
