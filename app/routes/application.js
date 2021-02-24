import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
  @action
  willTransition() {
    this.controllerFor('application').closeNavPrimary(); // eslint-disable-line ember/no-controller-access-in-routes
  }
}
