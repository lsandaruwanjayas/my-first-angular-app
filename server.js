//Vercel requires a serverless-compatible setup. Create a file called server.js in the root of your project:
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;