import React from 'react';
import './App.css';
import {TodoListContainer} from "./Redux/TodoList/TodoListContainer";


function App() {
  return (
    <div className="App">
        <TodoListContainer />
    </div>
  );
}

export default App;
