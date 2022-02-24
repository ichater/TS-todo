import * as React from 'react';
import { Dispatch, SetStateAction, useState } from 'react'
import { ToDo } from '../App';
import { ToDoNullListDisplay } from './ToDoNullListDisplay';

export interface IAppProps {
    setToDoList: Dispatch<SetStateAction<ToDo[]>>
    toDoList: ToDo[]
}

export function AddToDoInput(props: IAppProps) {
    const submitToDo = (e, toDo: toDo) => {
        (
            props.setToDoList([...props.toDoList])
        )
        e.preventDefault()
    }

    return (
        <div className="ToDo-form-wrapper">
            <form className="ToDo-form"
                onSubmit={() => submitToDo(e,
                    { id: 10, title: "test", description: "test" })
                } >
                <div className="ToDo-Form-title-wrapper">
                    <label>ToDo title:</label>
                    <input
                        type="text"
                        placeholder='ToDo title'
                    />
                </div>
                <br />
                <div className="ToDo-Form-text-wrapper">
                    <label >ToDo Description (optional)</label>
                    <textarea
                        className="Todo-Description-Text"
                        id="description"
                        name="description" />
                </div>
                <input
                    className="Submit-ToDo"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
}
