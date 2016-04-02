/**
 * Created by Vadym Yatsyuk on 02/04/16
 */
"use strict";

import express from 'express';
import http from 'http';
import config from './configs/server';
import configExpress from './configs/express';
import routes from './routes';

var app = express();
var server = http.createServer(app);

configExpress(app);
routes(app);

server.listen(config.port, null, () => {
  console.log(`Server started on ${config.port}...`);
});