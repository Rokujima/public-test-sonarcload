import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { UserCreateRequestSuccess } from './mocks/user-sample-data/user-create-sample-success.mocks';
import { TaskCreateRequestSuccess } from './mocks/task-sample-data/task-create-sample-success.mocks';

describe('Users & Task (e2e)', () => {
  let app, userId: string, taskId: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/user (POST) - should create a user', () => {
    return request(app.getHttpServer())
      .post('/user')
      .set('Accept', 'application/json')
      .send(UserCreateRequestSuccess)
      .expect((res) => {
        userId = res.body._id;
      })
      .expect(201);
  });

  it('/user (POST) - should create error email duplicate', () => {
    return request(app.getHttpServer())
      .post('/user')
      .set('Accept', 'application/json')
      .send(UserCreateRequestSuccess)
      .expect(400);
  });

  it('/user (PUT) - should update user', () => {
    return request(app.getHttpServer())
      .put(`/user`)
      .query({ id: userId })
      .set('Accept', 'application/json')
      .send({
        username: 'update username',
      })
      .expect(200);
  });

  it('/user (PUT) - should user can not update email', () => {
    return request(app.getHttpServer())
      .put(`/user/`)
      .query({ id: userId })
      .set('Accept', 'application/json')
      .send({
        email: 'test123@gmail.com',
      })
      .expect(200);
  });

  it('/user (GET) - should get list users', () => {
    return request(app.getHttpServer()).get('/user').expect(200);
  });

  it('/task (POST) - should craete new task', () => {
    return request(app.getHttpServer())
      .post('/task')
      .send({
        ...TaskCreateRequestSuccess,
        user_id: userId,
      })
      .expect((res) => {
        taskId = res.body._id;
      })
      .expect(201);
  });

  it('/task (POST) - should craete new task failed user not register', () => {
    return request(app.getHttpServer())
      .post('/task')
      .send(TaskCreateRequestSuccess)
      .expect(400);
  });

  it('/task (GET) - should get task users', () => {
    return request(app.getHttpServer())
      .get(`/task/`)
      .query({ id: taskId })
      .expect(200);
  });

  it('/task (GET) - should get task not found', () => {
    return request(app.getHttpServer())
      .get('/task')
      .query({ id: 'adsadas' })
      .expect(400);
  });

  it('/task/list (GET) - should get list tasks', () => {
    return request(app.getHttpServer()).get('/task/list').expect(200);
  });

  it('/task (PUT) - should update task', () => {
    return request(app.getHttpServer())
      .put(`/task/${taskId}`)
      .send({
        title: 'update task 2',
        description: 'update task description 2',
      })
      .expect(200);
  });

  it('/task (PUT) - should can not update task', () => {
    return request(app.getHttpServer())
      .put(`/task/${taskId}`)
      .send(TaskCreateRequestSuccess)
      .expect(200);
  });

  it('/task (DELETE) - should delete task error ', () => {
    return request(app.getHttpServer())
      .delete('/task/asdasdasdasdjkas')
      .send(TaskCreateRequestSuccess)
      .expect(400);
  });

  it('/task (DELETE) - should delete task', () => {
    return request(app.getHttpServer()).delete(`/task/${taskId}`).expect(200);
  });

  it('/user (DELETE) - should delete user error', async () => {
    return await request(app.getHttpServer())
      .delete('/user/asdsadasd')
      .expect(400);
  });

  it('/user (DELETE) - should delete user', async () => {
    return await request(app.getHttpServer())
      .delete(`/user/${userId}`)
      .expect(200);
  });
});
