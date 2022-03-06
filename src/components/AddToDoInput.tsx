import * as React from 'react';
import { useContext } from 'react';
import { TodoContext, ToDoContextInterface } from '../context/ToDoContext';




export function AddToDoInput() {

    const { handleSubmitToDo, title, setTitle, description, setDescription }: ToDoContextInterface = useContext(TodoContext)


    return (
        <div className="ToDo-form-wrapper">
            <form className="ToDo-form"
                onSubmit={handleSubmitToDo} >
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
