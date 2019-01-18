import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';
const server = express();

// Use sass
server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

// Front end will be using EJS in the view folder
server.set('view engine', 'ejs');


import './serverRender';

server.get('/', (req, res) => {
  //res.send('Hello Express');
  res.render('index', {
    content: 'Hello Express and <em>EJS!</em>'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
