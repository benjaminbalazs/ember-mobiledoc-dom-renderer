import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

<<<<<<< HEAD
let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
=======
const App = Application.extend({
>>>>>>> 7c49161... message
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
