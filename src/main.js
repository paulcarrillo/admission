  "use strict";

  var React = require('react');
  var Router = require('react-router');
  var routes = require('./routes');
  var InitializeActions = require('./actions/initializeActions');

  InitializeActions.initApp();

// Router.HistoryLocation no #'s  in the routes //
  Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
  });
