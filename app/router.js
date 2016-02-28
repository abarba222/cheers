import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('funny-tab');
  this.route('global');
  this.route('funny');
  this.route('serious');
});

export default Router;
