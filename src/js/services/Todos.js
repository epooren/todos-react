

var storage = require('client-storage');

storage.config('async', true);

var todos = new storage.Collection('todos');

var Todos = {
  getAll: function () {
    return todos.findAll();
  },

  create: function (todo) {
    return todos.create(todo);
  },

  update: function (id, data) {
    return todos.update(id, data);
  },

  destroy: function (id) {
    return todos.destroy(id);
  }
};



module.exports = Todos;
