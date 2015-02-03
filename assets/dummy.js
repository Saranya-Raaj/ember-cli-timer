define("dummy/Ember CLI QUnit/tests/ember-cli-qunit/components/x-timer.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-qunit/components');
    test('ember-cli-qunit/components/x-timer.js should pass jshint', function() { 
      ok(true, 'ember-cli-qunit/components/x-timer.js should pass jshint.'); 
    });
  });
define("dummy/Ember CLI QUnit/tests/ember-cli-qunit/utils/timeformatter.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-qunit/utils');
    test('ember-cli-qunit/utils/timeformatter.js should pass jshint', function() { 
      ok(true, 'ember-cli-qunit/utils/timeformatter.js should pass jshint.'); 
    });
  });
define("dummy/app", 
  ["ember","ember/resolver","ember/load-initializers","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Resolver = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];
    var config = __dependency4__["default"];

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix,
      Resolver: Resolver
    });

    loadInitializers(App, config.modulePrefix);

    __exports__["default"] = App;
  });
define("dummy/components/x-timer", 
  ["ember","ember-cli-timer/components/x-timer","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Timer = __dependency2__["default"];
     
    __exports__["default"] = Timer;
  });
define("dummy/ember-cli-content-security-policy/tests/ember-cli-content-security-policy/components/x-timer.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-content-security-policy/components');
    test('ember-cli-content-security-policy/components/x-timer.js should pass jshint', function() { 
      ok(true, 'ember-cli-content-security-policy/components/x-timer.js should pass jshint.'); 
    });
  });
define("dummy/ember-cli-content-security-policy/tests/ember-cli-content-security-policy/utils/timeformatter.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-content-security-policy/utils');
    test('ember-cli-content-security-policy/utils/timeformatter.js should pass jshint', function() { 
      ok(true, 'ember-cli-content-security-policy/utils/timeformatter.js should pass jshint.'); 
    });
  });
define("dummy/ember-cli-esnext/tests/ember-cli-esnext/components/x-timer.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-esnext/components');
    test('ember-cli-esnext/components/x-timer.js should pass jshint', function() { 
      ok(true, 'ember-cli-esnext/components/x-timer.js should pass jshint.'); 
    });
  });
define("dummy/ember-cli-esnext/tests/ember-cli-esnext/utils/timeformatter.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-esnext/utils');
    test('ember-cli-esnext/utils/timeformatter.js should pass jshint', function() { 
      ok(true, 'ember-cli-esnext/utils/timeformatter.js should pass jshint.'); 
    });
  });
define("dummy/ember-cli-timer/tests/ember-cli-timer/components/x-timer.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-timer/components');
    test('ember-cli-timer/components/x-timer.js should pass jshint', function() { 
      ok(true, 'ember-cli-timer/components/x-timer.js should pass jshint.'); 
    });
  });
define("dummy/ember-cli-timer/tests/ember-cli-timer/utils/timeformatter.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-timer/utils');
    test('ember-cli-timer/utils/timeformatter.js should pass jshint', function() { 
      ok(true, 'ember-cli-timer/utils/timeformatter.js should pass jshint.'); 
    });
  });
define("dummy/ember-data/tests/ember-data/components/x-timer.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-data/components');
    test('ember-data/components/x-timer.js should pass jshint', function() { 
      ok(true, 'ember-data/components/x-timer.js should pass jshint.'); 
    });
  });
define("dummy/ember-data/tests/ember-data/utils/timeformatter.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-data/utils');
    test('ember-data/utils/timeformatter.js should pass jshint', function() { 
      ok(true, 'ember-data/utils/timeformatter.js should pass jshint.'); 
    });
  });
define("dummy/ember-export-application-global/tests/ember-export-application-global/components/x-timer.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-export-application-global/components');
    test('ember-export-application-global/components/x-timer.js should pass jshint', function() { 
      ok(true, 'ember-export-application-global/components/x-timer.js should pass jshint.'); 
    });
  });
define("dummy/ember-export-application-global/tests/ember-export-application-global/utils/timeformatter.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-export-application-global/utils');
    test('ember-export-application-global/utils/timeformatter.js should pass jshint', function() { 
      ok(true, 'ember-export-application-global/utils/timeformatter.js should pass jshint.'); 
    });
  });
define("dummy/initializers/export-application-global", 
  ["ember","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    function initialize(container, application) {
      var classifiedName = Ember.String.classify(config.modulePrefix);

      if (config.exportApplicationGlobal) {
        window[classifiedName] = application;
      }
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: 'export-application-global',

      initialize: initialize
    };
  });
define("dummy/live-reload-middleware/tests/live-reload-middleware/components/x-timer.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - live-reload-middleware/components');
    test('live-reload-middleware/components/x-timer.js should pass jshint', function() { 
      ok(true, 'live-reload-middleware/components/x-timer.js should pass jshint.'); 
    });
  });
define("dummy/live-reload-middleware/tests/live-reload-middleware/utils/timeformatter.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - live-reload-middleware/utils');
    test('live-reload-middleware/utils/timeformatter.js should pass jshint', function() { 
      ok(true, 'live-reload-middleware/utils/timeformatter.js should pass jshint.'); 
    });
  });
define("dummy/router", 
  ["ember","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    var Router = Ember.Router.extend({
      location: config.locationType
    });

    Router.map(function() {
    });

    __exports__["default"] = Router;
  });
define("dummy/templates/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
    /**/) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


      data.buffer.push("<h2 id='title'>Welcome</h2>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Timer with auto start</div>\n  <div class=\"panel-body\">\n    ");
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
      data.buffer.push("\n  </div>\n</div>\n");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("dummy/templates/components/x-timer", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
    /**/) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
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
define("dummy/tests/app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('app.js should pass jshint', function() { 
      ok(true, 'app.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/helpers/resolver.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/helpers');
    test('dummy/tests/helpers/resolver.js should pass jshint', function() { 
      ok(true, 'dummy/tests/helpers/resolver.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/helpers/start-app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/helpers');
    test('dummy/tests/helpers/start-app.js should pass jshint', function() { 
      ok(true, 'dummy/tests/helpers/start-app.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/test-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests');
    test('dummy/tests/test-helper.js should pass jshint', function() { 
      ok(true, 'dummy/tests/test-helper.js should pass jshint.'); 
    });
  });
define("dummy/tests/helpers/resolver", 
  ["ember/resolver","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var config = __dependency2__["default"];

    var resolver = Resolver.create();

    resolver.namespace = {
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix
    };

    __exports__["default"] = resolver;
  });
define("dummy/tests/helpers/start-app", 
  ["ember","dummy/app","dummy/router","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Application = __dependency2__["default"];
    var Router = __dependency3__["default"];
    var config = __dependency4__["default"];

    __exports__["default"] = function startApp(attrs) {
      var App;

      var attributes = Ember.merge({}, config.APP);
      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

      Ember.run(function() {
        App = Application.create(attributes);
        App.setupForTesting();
        App.injectTestHelpers();
      });

      return App;
    }
  });
define("dummy/tests/router.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('router.js should pass jshint', function() { 
      ok(true, 'router.js should pass jshint.'); 
    });
  });
define("dummy/tests/test-helper", 
  ["dummy/tests/helpers/resolver","ember-qunit"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var resolver = __dependency1__["default"];
    var setResolver = __dependency2__.setResolver;

    setResolver(resolver);

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