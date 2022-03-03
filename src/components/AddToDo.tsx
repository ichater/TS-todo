import { AddToDoInput } from './AddToDoInput'
import { useState } from 'react'


export function AddToDo() {
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
                        <AddToDoInput />
                    </div> : null}
            </div>
        </div>

    );
}
