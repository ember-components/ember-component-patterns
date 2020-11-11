import EmberRouter from '@ember/routing/router';
import config from 'ember-component-patterns/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('forms', function() {});
  this.route('navigation', function() {});
  this.route('messaging', function() {});
  this.route('faq');
  this.route('global-components', function() {});
});
