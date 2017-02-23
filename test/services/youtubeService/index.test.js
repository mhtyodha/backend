'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('youtubeService service', function() {
  it('registered the youtubeServices service', () => {
    assert.ok(app.service('youtubeServices'));
  });
});
