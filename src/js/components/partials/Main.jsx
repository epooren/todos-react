
var React = require('react');
var ActionsTodos = require('../../actions/Todos.js');

var List = require('./List.jsx');

var Main = React.createClass({
  render: function () {
    var props = this.props;

    if (Object.keys(props.items).length <= 0) {
      return null;
    }

    return (
      <section id="main" style={{display: 'block'}}>
        <input id="toggle-all" type="checkbox" checked={props.done_all ? 'checked' : ''} onChange={this.onToggle} />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <List items={props.items} />
      </section>
    );
  },

  onToggle: function () {
    ActionsTodos.toggleDoneAll();
  }
});

module.exports = Main;
