
var React = require('react');

var StoreTodos = require('../stores/Todos.js');

var Header = require('./partials/Header.jsx');
var Main = require('./partials/Main.jsx');
var Footer = require('./partials/Footer.jsx');


StoreTodos.fetchAll();

function getTodosState() {
  return {
    items: StoreTodos.getAll(),
    done_all: StoreTodos.doneAll()
  };
}

var App = React.createClass({
  getInitialState: function () {
    return getTodosState();
  },

  componentDidMount: function() {
    StoreTodos.on('change', this._onChange);
  },

  componentWillUnmount: function() {
    StoreTodos.off('change', this._onChange);
  },

  render: function () {
    var state = this.state;

    return (
      <div id="container">
        <div id="todoapp">
          <Header />
          <Main
            items={state.items}
            done_all={state.done_all} />
          <Footer items={state.items} />
        </div>

        <div id="instructions">
          Double-click to edit a todo.
        </div>

        <div id="credits">
          Created by
          <br/>
          <a href="http://jgn.me/">J&eacute;r&ocirc;me Gravel-Niquet</a>.
          <br/>
          Rewritten by: <a href="http://github.com/epooren/todos-react">daifee</a>.
        </div>
      </div>
    );
  },

  _onChange: function () {
    this.setState(getTodosState());
  }
});


module.exports = App;
