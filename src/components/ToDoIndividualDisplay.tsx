import * as React from 'react';
import { useContext } from 'react';
import { ToDo } from '../App';
import { TodoContext, ToDoContextInterface } from '../context/ToDoContext'

export interface IToDoIndividualDisplayProps {
    toDo: ToDo
}

export function ToDoIndividualDisplay(props: IToDoIndividualDisplayProps) {
    const toDoContext: ToDoContextInterface = useContext(TodoContext)



    return (
        <div className="Individual-ToDo-Wrapper">
            <div className="Individual-ToDo-Content-Wrapper">
                <h3>{props.toDo.title}</h3>
                <div>{props.toDo.description}</div>
            </div>
            <div className="Individual-ToDo-btn-Wrapper">
                <button className="edit-ToDo-btn">Edit</button>
                <button className="delete-ToDo-btn"
                    onClick={() => toDoContext.deleteToDo(props.toDo.id)}
                >X</button>
            </div>
        </div>
    );
}
