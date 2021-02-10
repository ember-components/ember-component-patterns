import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Controller {
  @tracked navPrimaryIsOpen = false;

  @action
  toggleNavPrimary(explicitBoolean) {
    if (typeof explicitBoolean === 'boolean') { // Sometimes this isn't passed and it becomes the event... haha
      this.navPrimaryIsOpen = explicitBoolean;
      return;
    }
    this.navPrimaryIsOpen = !this.navPrimaryIsOpen;
  }
}
