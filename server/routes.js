/**
 * Created by Vadym Yatsyuk on 02/04/16
 */
import dataApi from './api/data';

export default function (app) {

  // Insert routes below
  app.use('/api', dataApi);

  app.route('/:url(api|auth|components|node_modules|app|bower_components|assets|templates)/*')
    .get((req, res) => {
      res.status(400).end();
    });

  app.route('/*')
    .get((req, res) => {
      res
        .status(200)
        .render('index');
    });
}