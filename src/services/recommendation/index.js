'use strict';

const hooks = require('./hooks');

class Service {
  constructor(app) {
    this.app = app || {};           // binding app object for the context to call other services
  }

  find(params) {
    const spotify = this.app.service('spotifyServices');
    spotify.find(params);
    return Promise.resolve([]);
  }

  get(id, params) {
    return Promise.resolve({
      id, text: `A new message with ID: ${id}!`
    });
  }

  create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    return Promise.resolve(data);
  }

  update(id, data, params) {
    return Promise.resolve(data);
  }

  patch(id, data, params) {
    return Promise.resolve(data);
  }

  remove(id, params) {
    return Promise.resolve({ id });
  }
}

module.exports = function () {
  const app = this;

  // Initialize our service with any options it requires
  app.use('/recommendations', new Service(app));

  // Get our initialize service to that we can bind hooks
  const recommendationService = app.service('/recommendations');

  // Set up our before hooks
  recommendationService.before(hooks.before);

  // Set up our after hooks
  recommendationService.after(hooks.after);
};

module.exports.Service = Service;
