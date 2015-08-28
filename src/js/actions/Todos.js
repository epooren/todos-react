

var DispatcherApp = require('../dispatchers/App.js');
var ConstantsTodos = require('../constants/Todos.js');


module.exports = {
  create: function (text) {
    DispatcherApp.dispatch({
      actionType: ConstantsTodos.TODOS_CREATE,
      text: text
    });
  },

  destroy: function (id) {
    DispatcherApp.dispatch({
      actionType: ConstantsTodos.TODOS_DESTROY,
      id: id
    });
  },

  updateText: function (id, text) {
    DispatcherApp.dispatch({
      actionType: ConstantsTodos.TODOS_UPDATE_TEXT,
      id: id,
      text: text
    });
  },

  syncText: function (id) {
    DispatcherApp.dispatch({
      actionType: ConstantsTodos.TODOS_SYNC_TEXT,
      id: id
    });
  },

  toggleDone: function (id) {
    DispatcherApp.dispatch({
      actionType: ConstantsTodos.TODOS_TOGGLE_DONE,
      id: id
    });
  },

  toggleDoneAll: function () {
    DispatcherApp.dispatch({
      actionType: ConstantsTodos.TODOS_TOGGLE_DONE_ALL
    });
  }
};

