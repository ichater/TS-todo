import * as React from 'react';
import { useContext, useState } from 'react';
import { ToDo } from '../App';
import { TodoContext, ToDoContextInterface } from '../context/ToDoContext'

export interface IToDoIndividualDisplayProps {
    toDo: ToDo
}

export function ToDoIndividualDisplay(props: IToDoIndividualDisplayProps) {
    const { handleEditToDo, handleDeleteToDo }:
        ToDoContextInterface = useContext(TodoContext)
    const [completedToDo, setCompletedTodo] = useState<boolean>(false)



    return (
        <div className="Individual-ToDo-Wrapper">
            <div className="Individual-ToDo-Content-Wrapper">
                <div className={completedToDo ? "todo-completed" : "todo-pending"}>
                    <h3>{props.toDo.title}</h3>
                    <div>{props.toDo.description}</div>
                </div>
            </div>
            <div className="Individual-ToDo-btn-Wrapper">

                <button className="edit-ToDo-btn"
                    onClick={() => handleEditToDo(props.toDo.id)}
                >Edit</button>
                <button className="delete-ToDo-btn"
                    onClick={() => handleDeleteToDo(props.toDo.id)}
                >X</button>
                <button className="complete-ToDo-btn"
                    onClick={() => setCompletedTodo(completedToDo => !completedToDo)}
                >Complete</button>
            </div>
        </div >
    );
}
