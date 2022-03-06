import * as React from 'react';
import { AddToDo } from './AddToDo';
import { ToDoDisplay } from './ToDoListDisplay';
import { ToDoNullListDisplay } from './ToDoNullListDisplay';
import { useContext } from 'react';
import { TodoContext, ToDoContextInterface } from '../context/ToDoContext';



export const TodoDisplayWrapper: React.FunctionComponent = () => {
    const { toDoList }: ToDoContextInterface = useContext(TodoContext)

    return <>
        <AddToDo />
        <div className="ToDo-Display-Border">
            {toDoList.length > 0 ? <ToDoDisplay /> : <ToDoNullListDisplay />}
        </div> </>
};

