import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Controller {
  @tracked navPrimaryIsOpen = false;

  @action
  closeNavPrimary() {
    this.navPrimaryIsOpen = false;
  }

  @action
  openNavPrimary() {
    this.navPrimaryIsOpen = true;
  }
}
