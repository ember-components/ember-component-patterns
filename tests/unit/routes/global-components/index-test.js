import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | global-components/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:global-components/index');
    assert.ok(route);
  });
});
