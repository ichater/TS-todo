import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { ToDo } from '../App';
import { ToDoIndividualDisplay } from './ToDoIndividualDisplay'
import { useContext } from 'react';
import { TodoContext, ToDoContextInterface } from '../context/ToDoContext'


export function ToDoDisplay() {

    const todoContext: ToDoContextInterface = useContext(TodoContext)



    return (
        <div>
            {todoContext.toDoList.map((toDo: ToDo) =>
                <ToDoIndividualDisplay
                    key={toDo.id}
                    toDo={toDo}
                />)
            }
        </div>
    );
}
