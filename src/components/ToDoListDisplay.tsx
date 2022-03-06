import { ToDo } from '../App';
import { ToDoIndividualDisplay } from './ToDoIndividualDisplay'
import { useContext } from 'react';
import { TodoContext, ToDoContextInterface } from '../context/ToDoContext'


export function ToDoDisplay() {
    const { toDoList }: ToDoContextInterface = useContext(TodoContext)

    return (
        <div>
            {toDoList.map((toDo: ToDo) =>
                <ToDoIndividualDisplay
                    key={toDo.id}
                    toDo={toDo}
                />)
            }
        </div>
    );
}
