/**
 * Created by Vadym Yatsyuk on 02/04/16
 */

import bodyParser from 'body-parser';
import methdOverride from 'method-override';

export default function (app) {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(methdOverride());
};