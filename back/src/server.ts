import express from 'express';

import routes from './routes';

const server = express();

server.use(express.urlencoded({ extended: true }));

server.use(routes);

server.listen(3000, () => console.log('Server is running! :D'));
