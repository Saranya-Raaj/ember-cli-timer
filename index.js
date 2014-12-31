/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-timer',
  
  included: function(app) {
    this._super.included(app);
 
    app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  }
};
