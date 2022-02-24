import * as React from 'react';
import { ToDo } from '../App';

export interface IToDoIndividualDisplayProps {
    toDo: ToDo
}

export function ToDoIndividualDisplay(props: IToDoIndividualDisplayProps) {
    return (
        <div className="Individual-ToDo-Wrapper">
            {props.toDo.title}
            <div>{props.toDo.description}</div>
        </div>
    );
}
