import React from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import Todos from './models/todo'

function App() {

  const todos = [
    new Todos('learn typescript'),
    new Todos('learn datadtatdats')
  ];
  return (
    <div className="App">
      <Todo items={todos}/>
    </div>
  );
}

export default App;
