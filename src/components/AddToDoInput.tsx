import * as React from 'react';
import { Dispatch, SetStateAction, useState } from 'react'
import { ToDo } from '../App';


export interface AddToDoInputProps {
    setToDoList: Dispatch<SetStateAction<ToDo[]>>
    toDoList: ToDo[]
}

export function AddToDoInput(props: AddToDoInputProps) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const submitToDo = (e: any) => {
        e.preventDefault();
        return props.setToDoList([...props.toDoList, { id: props.toDoList.length + 1, title: title, description: description }])
    }


    return (
        <div className="ToDo-form-wrapper">
            <form className="ToDo-form"
                onSubmit={e => submitToDo(e)} >
                <div className="ToDo-Form-title-wrapper">
                    <label>ToDo title:</label>
                    <input
                        type="text"
                        placeholder='ToDo title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <br />
                <div className="ToDo-Form-text-wrapper">
                    <label >ToDo Description (optional)</label>
                    <textarea
                        className="Todo-Description-Text"
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
