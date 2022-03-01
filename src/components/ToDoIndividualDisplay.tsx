import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { ToDo } from '../App';

export interface IToDoIndividualDisplayProps {
    toDo: ToDo
    setToDoList: Dispatch<SetStateAction<ToDo[]>>
    deleteToDo: (id: number) => void
}

export function ToDoIndividualDisplay(props: IToDoIndividualDisplayProps) {
    return (
        <div className="Individual-ToDo-Wrapper">
            <div className="Individual-ToDo-Content-Wrapper">
                <h3>{props.toDo.title}</h3>
                <div>{props.toDo.description}</div>
            </div>
            <div className="Individual-ToDo-btn-Wrapper">
                <button className="edit-ToDo-btn">Edit</button>
                <button className="delete-ToDo-btn"
                    onClick={() => props.deleteToDo(props.toDo.id)}
                >X</button>
            </div>
        </div>
    );
}
