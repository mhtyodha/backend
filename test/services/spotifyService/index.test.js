'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('spotifyService service', function() {
  it('registered the spotifyServices service', () => {
    assert.ok(app.service('spotifyServices'));
  });
});
