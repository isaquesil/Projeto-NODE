import express from 'express';

const ep = express();

ep.listen(3333, () => {
  console.log('listening');
});
