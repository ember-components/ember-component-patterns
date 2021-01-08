import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | linkable-header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
    <LinkableHeader @linkTitle="For Developers" />
    `);

    assert.equal(this.element.textContent.trim(), 'For Developers');
  });
  test('it creates a link with the correct href', async function(assert) {
    await render(hbs`
    <LinkableHeader @linkTitle="For Developers" />
    `);
    assert.equal(this.element.querySelector('.heading__link').getAttribute('href'), '#for-developers');
  })
});
