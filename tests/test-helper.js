import Application from 'ember-component-patterns/app';
import config from 'ember-component-patterns/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
