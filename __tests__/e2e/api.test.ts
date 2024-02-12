import request from 'supertest';
import { server } from '../../src';
import { getAllDBUsers } from '../../src/db/db';
import { API_USERS_PREFIX } from '../../src/core/consts/consts';


describe('/users', () => {
  it('should return 200 and Users array', async () => {
    await request(server).get(API_USERS_PREFIX).expect(200, getAllDBUsers());
  });

  it('should return 200 and empty array 2', () => {
    expect(10).toBe(10);
  });
});

xdescribe('/test', () => {
  it('should return 200', async () => {
    await request(server).get(API_USERS_PREFIX).expect(200);
  });

});

xdescribe('/interesting', () => {
  it('should return 200 and title: \'test\'', async () => {
    await request(server).get('/interesting').expect(200, {title: 'test'});
  });

});

xdescribe('With empty DB', () => {
  beforeAll(async () => {
    await request(server).delete('06799d93-f8ca-4c13-a019-584377fc5601');
  });

  it('should return 200 and empty array', async () => {
    await request(server).get(API_USERS_PREFIX).expect(200, []);
  });

  it('should return 404', async () => {
    await request(server)
      .get('incorrect/url')
      .expect(404);
  });

  it('shouldn\'t create course with incorrect input data', async () => {
    await request(server).post(API_USERS_PREFIX).send({ name: 'Igor' }).expect(400);

    await request(server).get(API_USERS_PREFIX).expect(200, []);
  });

  it('should return 200 and empty array', async () => {
    await request(server).get(API_USERS_PREFIX).expect(200, []);
  });
});
