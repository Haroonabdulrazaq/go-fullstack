const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'My first thing',
      description: 'All of the info about my first thing',
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/OsPMXeUrqpbSmNEulsKgZJhV0Q8=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13707075/akrales_190117_3163_0194.jpg',
      price: 1900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'My second thing',
      description: 'All of the info about my second thing',
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/OsPMXeUrqpbSmNEulsKgZJhV0Q8=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13707075/akrales_190117_3163_0194.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    }
  ];
  res.status(200).json(stuff);
});

module.exports = app