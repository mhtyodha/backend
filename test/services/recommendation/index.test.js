'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('recommendation service', function() {
  it('registered the recommendations service', () => {
    assert.ok(app.service('recommendations'));
  });
});
