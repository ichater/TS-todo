import { AddToDoInput } from './AddToDoInput'
import { Dispatch, SetStateAction, useState } from 'react'
import { ToDo } from '../App';

export interface AddToDoProps {
    setToDoList: Dispatch<SetStateAction<ToDo[]>>
    toDoList: ToDo[]
}

export function AddToDo(props: AddToDoProps) {
    const [toggleToDoView, setToggleToDoView] = useState(false)
    return (
        <div className="Add-Todo-Border">
            <div className="Add-ToDo-divider">
                <div className="Add-Todo-Toggle"
                    onClick={() => setToggleToDoView(toggle => !toggle)}>
                    {toggleToDoView ? "Close Add Todo" : "Add ToDo"}
                </div>
                {toggleToDoView ?
                    <div className="Add-Todo-input-wrapper">
                        <AddToDoInput
                            toDoList={props.toDoList}
                            setToDoList={props.setToDoList}
                        />
                    </div> : null}
            </div>
        </div>

    );
}
