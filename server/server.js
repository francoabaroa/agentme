// require('dotenv').config();
const bodyParser = require('body-parser');
const metadata = require('../package.json');
const compression = require('compression');
const express = require('express');
const path = require('path');
const port = 5000;
const app = express();

app.use(bodyParser.json({limit: '40mb'}));
app.use(compression()); // gzip compress all responses

const routes = ['/', '/work', '/about', '/contact', '/signin', '/join'];

for (const route of routes) {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/index.html'));
  });
}

app.use(express.static(path.join(__dirname, '../client')));

app.post('/buysearch', (req, res) => {
  res.status(200).send(req.body.searchQuery);
});

app.post('/sellsearch', (req, res) => {
  res.status(200).send(req.body.searchQuery);
});

app.post('/estimate', (req, res) => {
  res.status(200).send(req.body.searchQuery);
});

app.get('/work', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

app.get('/signin', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

app.get('/join', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});


// wildcard route
app.get('*', function(req, res) {
  res.status(404).send('Error! Please go back to AgentMe.com');
});

app.listen(port, () => {
  console.log(`🌎  Listening on port ${port} for app ${metadata.name} 🌏`);
});