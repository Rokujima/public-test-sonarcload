import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TaskModule } from './../src/task/task.module';
import { UserModule } from './../src/user/user.module';
import { createUserSuccess } from './mocks/user-sample-data/createUserSuccess.mocks';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/user (POST) ', (done) => {
    return request(app.getHttpServer())
      .post('/user')
      .send(createUserSuccess) // x-www-form-urlencoded upload
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  it('/user (GET)', (done) => {
    return request(app.getHttpServer())
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });


  afterAll(async () => {
    await app.close();
  });
});
