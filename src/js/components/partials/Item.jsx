
var React = require('react');
var ActionsTodos = require('../../actions/Todos.js');

var Item = React.createClass({
  getInitialState: function () {
    return {
      editing: false
    };
  },

  componentDidUpdate: function () {
    if (this.state.editing) {
      this.refs.input.getDOMNode().focus();
    }
  },

  liClasses: function () {
    var result = [];

    this.props.item.done && result.push('done');;
    this.state.editing && result.push('editing');

    return result.join(' ');;
  },

  render: function () {
    var state = this.state;
    var props = this.props;
    var item = props.item;

    return (
      <li onDoubleClick={this.toggleEditMode} className={this.liClasses()}>
        <div className="view">
          <input
            onChange={this.onToggle}
            className="toggle"
            type="checkbox"
            checked={item.done ? 'checked' : ''} />
          &ensp;
          <label>{item.text}</label>
          <a onClick={this.onDestroy} className="destroy">x</a>
        </div>

        <form onSubmit={this.onSubmit}>
          <input
            ref="input"
            onChange={this.onEdit}
            onBlur={this.toggleEditMode}
            className="edit"
            type="text"
            value={item.text} />
        </form>
      </li>
    );
  },

  destroy: function () {
    var todo = this.props.item;
    var input = this.refs.input.getDOMNode();

    if (input.value.trim() === '') {
      ActionsTodos.destroy(todo.id);
    }
  },

  toggleEditMode: function () {
    // !
    if (this.state.editing) {
      this.destroy();
    }

    this.setState({'editing': !this.state.editing});
  },

  // 回车键 失焦
  onSubmit: function (ev) {
    ev.preventDefault();
    this.refs.input.getDOMNode().blur();
  },

  onToggle: function (ev) {
    var todo = this.props.item;
    ActionsTodos.toggleDone(todo.id);
  },

  onDestroy: function () {
    ActionsTodos.destroy(this.props.item.id);
  },

  onEdit: function (ev) {
    var todo = this.props.item;

    ActionsTodos.updateText(todo.id, ev.target.value);
  }
});


module.exports = Item;
