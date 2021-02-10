import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | click-elsewhere', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function (assert) {
    this.clickedElsewhere = () => assert.step('clicked elsewhere');
  });

  test('it ignores clicks on itself', async function(assert) {
    await render(hbs`
      <div test-clickelsewhere {{click-elsewhere this.clickedElsewhere}}></div>
    `);
    await click('[test-clickelsewhere]');

    assert.verifySteps([]);
  });

  test('it ignores clicks on children', async function(assert) {
    this.clickedButton = () => assert.step('clicked button');

    await render(hbs`
      <div {{click-elsewhere this.clickedElsewhere}}>
        <button test-childbutton {{on 'click' this.clickedButton}}>Example</button>
      </div>
    `);
    await click('[test-childbutton]');

    assert.verifySteps(['clicked button']);
  });

  test('it handles clicking elsewhere', async function(assert) {
    this.clickedButton = () => assert.step('clicked button');

    await render(hbs`
      <div {{click-elsewhere this.clickedElsewhere}}></div>
      <button test-anotherbutton {{on 'click' this.clickedButton}}>Example</button>
    `);
    await click('[test-anotherbutton]');

    assert.verifySteps(['clicked button', 'clicked elsewhere']);
  });
});
