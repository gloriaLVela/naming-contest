import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();


// Front end will be using EJS in the view folder
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  //res.send('Hello Express');
  res.render('index', {
    content: 'Hello Express and <em>EJS!</em>'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
