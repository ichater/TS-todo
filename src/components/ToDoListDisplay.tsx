import * as React from 'react';
import { ToDo } from '../App';
import { ToDoIndividualDisplay } from './ToDoIndividualDisplay'

export interface ToDoDisplayProps {
    toDoList: ToDo[]
}

export function ToDoDisplay(props: ToDoDisplayProps) {
    return (
        <div>
            {props.toDoList.map((toDo: ToDo) =>
                <ToDoIndividualDisplay key={toDo.id} toDo={toDo} />)
            }
        </div>
    );
}
