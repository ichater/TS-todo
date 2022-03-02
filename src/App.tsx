import { useState } from 'react';
import { Header } from './components/Header'
import { AddToDo } from './components/AddToDo'
import './css/App.css';
import { ToDoDisplay } from './components/ToDoListDisplay'
import { ToDoNullListDisplay } from './components/ToDoNullListDisplay'
import { ToDoContextProvider } from './context/ToDoContext'

const heading = "Todo List"

export interface ToDo {
  id: number,
  title: string,
  description?: string
}

const toDoSample: ToDo[] = [
  {
    id: 1,
    title: "Get Good at React",
    description: "Get through this project and take on feedback"
  },
  {
    id: 2,
    title: "Guided meditation daily",
    description: "Good for the nerves and in line with your new years resolution. Also lets extend this out to see how it fits in with the page"
  },
  {
    id: 3,
    title: "Feed Bruno"
  },
]

function App() {
  const [toDoList, setToDoList] = useState(toDoSample)

  const handleAddToDo = (newToDo: ToDo): void => {
    setToDoList([...toDoList, newToDo])
  }
  return (
    <div className="App">
      <div className="ToDo-Border">
        <Header heading={heading} />
        <ToDoContextProvider>
          <AddToDo setToDoList={setToDoList} toDoList={toDoList} />
          <div className="ToDo-Display-Border">
            {toDoList.length > 0 ? <ToDoDisplay setToDoList={setToDoList} toDoList={toDoList} /> : <ToDoNullListDisplay />}
          </div>
        </ToDoContextProvider>
      </div>
    </div>
  );
}

export default App;
