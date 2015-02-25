define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/components/x-timer', ['exports', 'ember', 'ember-cli-timer/components/x-timer'], function (exports, Ember, Timer) {

	'use strict';

	exports['default'] = Timer['default'];

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal) {
      window[classifiedName] = application;
    }
  };

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function() {
  });

  exports['default'] = Router;

});
define('dummy/templates/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
  /**/) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


    data.buffer.push("<div class=\"container\">\n<h2 id='title'>Welcome</h2>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Timer with auto start</div>\n  <div class=\"panel-body\">\n    ");
    data.buffer.push(escapeExpression((helper = helpers['x-timer'] || (depth0 && depth0['x-timer']),options={hash:{
      'autoStart': ("true"),
      'format': ("HH:MM:SS"),
      'stopRequired': ("false")
    },hashTypes:{'autoStart': "STRING",'format': "STRING",'stopRequired': "STRING"},hashContexts:{'autoStart': depth0,'format': depth0,'stopRequired': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "x-timer", options))));
    data.buffer.push("\n  </div>\n</div>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Timer with auto start  and stop</div>\n  <div class=\"panel-body\">\n    ");
    data.buffer.push(escapeExpression((helper = helpers['x-timer'] || (depth0 && depth0['x-timer']),options={hash:{
      'autoStart': ("true"),
      'format': ("HH:MM:SS"),
      'stopRequired': ("true")
    },hashTypes:{'autoStart': "STRING",'format': "STRING",'stopRequired': "STRING"},hashContexts:{'autoStart': depth0,'format': depth0,'stopRequired': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "x-timer", options))));
    data.buffer.push("\n  </div>\n</div>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">A typical timer</div>\n  <div class=\"panel-body\">\n    ");
    data.buffer.push(escapeExpression((helper = helpers['x-timer'] || (depth0 && depth0['x-timer']),options={hash:{
      'format': ("HH:MM:SS"),
      'stopRequired': ("true")
    },hashTypes:{'format': "STRING",'stopRequired': "STRING"},hashContexts:{'format': depth0,'stopRequired': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "x-timer", options))));
    data.buffer.push("\n  </div>\n</div>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Timer with start time and auto start set</div>\n  <div class=\"panel-body\">\n    <div>Start time set at 300 seconds</div>\n    ");
    data.buffer.push(escapeExpression((helper = helpers['x-timer'] || (depth0 && depth0['x-timer']),options={hash:{
      'autoStart': ("false"),
      'startTime': ("300"),
      'format': ("HH:MM:SS"),
      'stopRequired': ("true")
    },hashTypes:{'autoStart': "STRING",'startTime': "STRING",'format': "STRING",'stopRequired': "STRING"},hashContexts:{'autoStart': depth0,'startTime': depth0,'format': depth0,'stopRequired': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "x-timer", options))));
    data.buffer.push("\n  </div>\n</div>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Stop watch</div>\n  <div class=\"panel-body\">\n    ");
    data.buffer.push(escapeExpression((helper = helpers['x-timer'] || (depth0 && depth0['x-timer']),options={hash:{
      'autoStart': ("false"),
      'startTime': ("300"),
      'format': ("HH:MM:SS"),
      'isStopWatch': ("true")
    },hashTypes:{'autoStart': "STRING",'startTime': "STRING",'format': "STRING",'isStopWatch': "STRING"},hashContexts:{'autoStart': depth0,'startTime': depth0,'format': depth0,'isStopWatch': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "x-timer", options))));
    data.buffer.push("\n  </div>\n</div>\n</div>\n");
    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/x-timer', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
  /**/) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '';
    data.buffer.push("\n<button type=\"submit\" ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': (":btn :btn-sm isRunning:btn-default:btn-primary")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" class=\"btn btn-sm btn-primary\" ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "start", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
    data.buffer.push(">Start</button>\n");
    return buffer;
    }

  function program3(depth0,data) {
    
    var buffer = '';
    data.buffer.push("\n<button type=\"button\" ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': (":btn :btn-sm isRunning:btn-primary:btn-default")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "stop", true, {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","BOOLEAN"],data:data})));
    data.buffer.push(">Stop</button>\n");
    return buffer;
    }

  function program5(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n<button type=\"button\" class=\"btn btn-sm btn-default\" ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "pause", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
    data.buffer.push(">");
    stack1 = helpers['if'].call(depth0, "isRunning", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</button>\n");
    return buffer;
    }
  function program6(depth0,data) {
    
    
    data.buffer.push("Pause");
    }

  function program8(depth0,data) {
    
    
    data.buffer.push("Cont.");
    }

    data.buffer.push("<h4>");
    stack1 = helpers._triageMustache.call(depth0, "duration", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</h4>\n");
    stack1 = helpers['if'].call(depth0, "showStartBtn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    stack1 = helpers['if'].call(depth0, "stopRequired", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    stack1 = helpers['if'].call(depth0, "isStopWatch", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';

  function startApp(attrs) {
    var App;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function() {
      App = Application['default'].create(attributes);
      App.setupForTesting();
      App.injectTestHelpers();
    });

    return App;
  }
  exports['default'] = startApp;

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

  'use strict';

  ember_qunit.setResolver(resolver['default']);

  document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

  QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container'});
  var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
  document.getElementById('ember-testing-container').style.visibility = containerVisibility;

});
/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map