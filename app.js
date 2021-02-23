const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const tweetRoutes = require('./routes');

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}).then(() => console.log('Connected to MongoDB'));

app.use(express.static('html'));
app.use(express.json());
app.use('/api/tweet', tweetRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running at http://localhost:${port}`));
