import express from 'express';
const app = express();
const cors = require('cors')
app.use(cors())
import renderer from './helpers/renderer';
app.use(express.static('public'));
app.get('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.send(renderer(req));
})
app.listen(3000, () => {
  console.log('Listening on port 3000');
})
