/**
 * Created by Vadym Yatsyuk on 02/04/16
 */

import express from 'express';
import bodyParser from 'body-parser';
import methdOverride from 'method-override';

export default function (app) {
  app.use(express.static(__dirname + '/../../web-app'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(methdOverride());
};