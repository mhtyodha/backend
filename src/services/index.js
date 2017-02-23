'use strict';
const youtubeService = require('./youtubeService');
const spotifyService = require('./spotifyService');
const recommendation = require('./recommendation');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(recommendation);
  app.configure(spotifyService);
  app.configure(youtubeService);
};
