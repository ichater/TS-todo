import React from 'react';
import { Header } from './components/Header'
import { AddToDo } from './components/AddToDo'
import './css/App.css';


const heading = "todoList"


function App() {
  return (
    <div className="App">
      <div className="ToDo-Border">
        <Header heading={heading} />
        <AddToDo />
      </div>
    </div>
  );
}

export default App;
