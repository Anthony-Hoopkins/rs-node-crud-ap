import http, { ServerResponse } from 'http';

const server = http.createServer((request: unknown, response: ServerResponse) => {
  response.end('Hello From Server! !!!');
});

server.listen(3001, () => {
  console.log('Server started on port:');
})
