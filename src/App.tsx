import { Header } from './components/Header'
import './css/App.css';
import { ToDoContextProvider } from './context/ToDoContext'
import { TodoDisplayWrapper } from './components/ToDoDisplayWrapper'

const heading = "Todo List"

export interface ToDo {
  id: number,
  title: string,
  description?: string
}


function App() {
  return (
    <div className="App">
      <div className="ToDo-Border">
        <Header heading={heading} />
        <ToDoContextProvider>
          <TodoDisplayWrapper />
        </ToDoContextProvider>
      </div>
    </div>
  );
}

export default App;
