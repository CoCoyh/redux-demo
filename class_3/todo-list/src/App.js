import React from 'react';
import {connect} from 'react-redux'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList';
import FilterLink from './components/FilterLink'

function App() {
  return (
    <div className="App">
      <AddTodo></AddTodo>
      <TodoList></TodoList>
      <FilterLink></FilterLink>
    </div>
  );
}

export default connect()(App)
