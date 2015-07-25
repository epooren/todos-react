
var React = require('react');

var Footer = React.createClass({
  render: function () {
    var items = this.props.items;

    var display = 'block';
    var display_done = '';

    var count_done = 0;
    var count_undone = 0;
    var key;

    for (key in items) {
      items[key].done ? count_done++ : count_undone++;
    }

    if (count_undone === 0) {
      display_done = 'none';

      if (count_done === 0) {
        display = 'none';
      }
    }

    return (
      <footer style={{display: display}}>
        <a
          style={{display: display_done}}
          id="clear-completed">Clear {count_done} completed item</a>

        <div className="todo-count"><b>{count_undone}</b> items left</div>
      </footer>
    );
  }
});

module.exports = Footer;
