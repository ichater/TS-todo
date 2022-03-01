import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { ToDo } from '../App';
import { ToDoIndividualDisplay } from './ToDoIndividualDisplay'

export interface ToDoDisplayProps {
    toDoList: ToDo[]
    setToDoList: Dispatch<SetStateAction<ToDo[]>>
}

export function ToDoDisplay(props: ToDoDisplayProps) {

    const deleteToDo = (id: number): void | null =>
        props.toDoList.filter(toDo => toDo.id === id).length > 0 ?
            props.setToDoList(props.toDoList.filter(toDo => toDo.id !== id)) : null

    return (
        <div>
            {props.toDoList.map((toDo: ToDo) =>
                <ToDoIndividualDisplay
                    key={toDo.id}
                    toDo={toDo}
                    deleteToDo={deleteToDo}
                    setToDoList={props.setToDoList}
                />)
            }
        </div>
    );
}
