module.exports = {
  name: 'ember-cli-x-button',

  included: function(app) {
    this._super.included(app);
        
    app.import('../../../bower_components/x-timer/dist/js/x-timer.js');
    app.import('../../../bower_components/bootstrap/dist/css/bootstrap.min.css');
  }
};