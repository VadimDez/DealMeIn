/**
 * Created by Vadym Yatsyuk on 02/04/16
 */
import dataApi from './api/data';

export default function (app) {

  // Insert routes below
  app.use('/api', dataApi);
  
  app.route('/*')
    .get((req, res) => {
      res
        .status(200)
        .render('index');
    });
}