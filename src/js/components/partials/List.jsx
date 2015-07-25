
var React = require('react');
var Item = require('./Item.jsx');

var List = React.createClass({
  render: function () {
    var items = this.props.items;
    var todos = [];
    var id;

    for (id in items) {
      todos.push(<Item key={id} item={items[id]} />);
    }

    return (
      <ul id="todo-list">{todos}</ul>
    );
  }
});


module.exports = List;
