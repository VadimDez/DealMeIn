/**
 * Created by Vadym Yatsyuk on 02/04/16
 */

import express from 'express';

const router = express.Router();

router.get('/data', (req, res) => {
  res.status(200)
    .json({
      data: [
        {
          something: 'asd'
        }
      ]
    });
});

export default router