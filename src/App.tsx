import React from 'react';
import './App.css';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Todo items={['learn typescript', 'learn datadtatdats']}/>
    </div>
  );
}

export default App;
