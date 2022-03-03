import * as React from 'react';
import { Dispatch, SetStateAction, useState } from 'react'
import { ToDo } from '../App';
import { useContext } from 'react';
import { TodoContext, ToDoContextInterface } from '../context/ToDoContext';




export function AddToDoInput() {

    // const [title, setTitle] = useState("")
    // const [description, setDescription] = useState("")

    // const submitToDo = (e: any) => {
    //     e.preventDefault();
    //     return props.setToDoList([...props.toDoList, { id: props.toDoList.length + 1, title: title, description: description }])
    // }
    const toDoContext: ToDoContextInterface = useContext(TodoContext)


    return (
        <div className="ToDo-form-wrapper">
            <form className="ToDo-form"
                onSubmit={e => toDoContext.handleSubmitToDo(e)} >
                <div className="ToDo-Form-title-wrapper">
                    <label>ToDo title:</label>
                    <input
                        type="text"
                        placeholder='ToDo title'
                        value={toDoContext.title}
                        onChange={(e) => toDoContext.setTitle(e.target.value)}
                    />
                </div>
                <br />
                <div className="ToDo-Form-text-wrapper">
                    <label >ToDo Description (optional)</label>
                    <textarea
                        className="Todo-Description-Text"
                        id="description"
                        name="description"
                        value={toDoContext.description}
                        onChange={(e) => toDoContext.setDescription(e.target.value)}
                    />
                </div>
                <input
                    className="Submit-ToDo"
                    type="submit"
                    value="submit"
                />
            </form>
        </div>
    );
}
