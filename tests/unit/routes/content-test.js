import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | content', function(hooks) {
  setupTest(hooks);

  test('it fetches a content model', async function(assert) {
    let route = this.owner.lookup('route:content');
    route.store.createRecord('content', {
      id: 'foo',
      title: 'Foo',
    });
    let model = await route.model({ content_id: 'foo' });

    assert.equal(model.title, 'Foo');
  });
});
