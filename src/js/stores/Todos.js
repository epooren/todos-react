

var objectAssign = require('object-assign');
var jEvent = require('jevent');
var DispatcherApp = require('../dispatchers/App.js');
var ConstantsTodos = require('../constants/Todos.js');
var serviceTodos = require('../services/Todos.js');

var CHANGE_EVENT = 'change';


var _todos = {};


// 从localStorage获取数据
function getAll() {
  serviceTodos.getAll().then(function (data) {
    var result = {};
    var todo;

    for (var i = 0, len = data.length; i < len; i++) {
      todo = data[i];
      result[todo.id] = todo;
    }

    _todos = result;
    Todos.emit('change');
  });
}



function create(text) {
  text = text.trim();
  if (text === '') return;

  var todo = {
    text: text,
    done: false
  };

  serviceTodos.create(todo).then(function (id) {
    todo.id = id;
    _todos[id] = todo;
    Todos.emit('change');
  });
}


function destroy(id) {
  serviceTodos.destroy(id).then(function () {
    delete _todos[id];
    Todos.emit('change');
  });
}

function updateText(id, text) {
  var data = {
    text: text.trim()
  };

  serviceTodos.update(id, data).then(function () {
    _todos[id].text = data.text;
    Todos.emit('change');
  });
}

function toggleDone(id) {
  var data = {
    done: !_todos[id].done
  };

  serviceTodos.update(id, data).then(function () {
    _todos[id].done = data.done;
    Todos.emit('change');
  });
}

function toggleDoneAll() {
  var done = Todos.areDoneAll();
  var key;

  var data;
  var success;

  for (key in _todos) {
    data = {
      done: !done
    };

    var success = (function (id, data) {
      return function () {
        _todos[id].done = data.done;
        Todos.emit('change');
      }
    }(key, data));

    serviceTodos.update(key, data).then(success);
  }
}



var Todos = objectAssign({}, jEvent, {
  areDoneAll: function () {
    var result = true;
    var key;

    for (key in _todos) {
      if (_todos[key].done === false) {
        result = false;
        break;
      }
    }

    return result;
  },

  getAll: function () {
    return _todos;
  }
});

DispatcherApp.register(function (action) {

  switch (action.actionType) {
    case ConstantsTodos.TODOS_CREATE:
      create(action.text);
      break;
    case ConstantsTodos.TODOS_DESTROY:
      destroy(action.id);
      break;
    case ConstantsTodos.TODOS_UPDATE_TEXT:
      updateText(action.id, action.text);
      break;
    case ConstantsTodos.TODOS_TOGGLE_DONE:
      toggleDone(action.id);
      break;
    case ConstantsTodos.TODOS_TOGGLE_DONE_ALL:
      toggleDoneAll();
      break;
  }
});

getAll();

module.exports = Todos;
