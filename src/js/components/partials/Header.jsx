
var React = require('react');

var ActionsTodos = require('../../actions/Todos.js');

var Header = React.createClass({
  render: function () {
    return (
      <header>
        <h1>Todos</h1>
        <form onSubmit={this.newTodo}>
          <input ref="msg" id="new-todo" type="text" placeholder="What needs to be done?" />
        </form>
      </header>
    );
  },

  newTodo: function (ev) {
    ev.preventDefault();

    var input = this.refs.msg.getDOMNode();
    ActionsTodos.create(input.value);
    input.value = '';
  }
});


module.exports = Header;
