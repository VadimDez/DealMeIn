/**
 * Created by Vadym Yatsyuk on 02/04/16
 */

export default function (app) {

  app.route('/*')
    .get((req, res) => {
      res.json({ok: 1});
    });
}