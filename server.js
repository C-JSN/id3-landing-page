const express = require('express');
const bodyParser =require('body-parser');
const path = require('path');
const dotenv = require('dotenv');

const app = express();
dotenv.load();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('server is listening on port 3000...');
});
