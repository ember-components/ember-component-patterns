import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | messaging/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:messaging/index');
    assert.ok(route);
  });
});
