  "use strict";

  var React = require('react');

  var Home = React.createClass({
    render: function() {
      return (
        <div className="jumbotron">
          <h1>Pluralsight Administration</h1>
          <p>React, React Router, and flux for ultra-reponsive web apps.</p>
        </div>
      );
    }
  });

  module.exports = Home;
