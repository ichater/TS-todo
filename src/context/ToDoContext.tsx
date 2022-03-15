import React, { createContext, useState } from "react";
import { ToDo } from './../App'
import { v4 as uuidv4 } from 'uuid';
import { off } from "process";
import { idText } from "typescript";


export interface ToDoContextInterface {
    toDoList: ToDo[];
    toDoSample: ToDo[];
    handleAddToDo: (newToDo: ToDo) => void;
    handleSubmitToDo: (e: any) => void;
    handleDeleteToDo: (id: string) => void | null;
    handleEditToDo: (id: string) => void | null;
    toggleToDoView: boolean;
    setToggleToDoView: React.Dispatch<React.SetStateAction<boolean>>;
    handleToDoInput: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, inputType: string) => void,
    toDoForm: {
        title: string;
        description?: string;
    },
    setToDoForm: React.Dispatch<React.SetStateAction<{
        title: string;
        description?: string;
    }>>
}

export const TodoContext = createContext<ToDoContextInterface>(null!)

type Props = { children: React.ReactNode }

export function ToDoContextProvider({ children }: Props) {
    const toDoSample: ToDo[] = [
        {
            id: uuidv4(),
            title: "Get Good at React",
            description: "Get through this project and take on feedback"
        },
        {
            id: uuidv4(),
            title: "Guided meditation daily",
            description: "Good for the nerves and in line with your new years resolution. Also lets extend this out to see how it fits in with the page"
        },
        {
            id: uuidv4(),
            title: "Feed Bruno"
        },
    ]

    type StateForm = {
        id?: string;
        title: string;
        description?: string;
    }
    const [toggleToDoView, setToggleToDoView] = useState<boolean>(false)
    const [toDoList, setToDoList] = useState<ToDo[]>(toDoSample)

    const emptyToDoForm: StateForm = { id: "", title: "", description: "" }
    const [toDoForm, setToDoForm] = useState<StateForm>(emptyToDoForm)



    const handleAddToDo = (newToDo: ToDo): void => {
        setToDoList([...toDoList, newToDo])
    }

    const handleDeleteToDo = (id: string): void | null =>
        toDoList.filter(toDo => toDo.id === id).length > 0 ?
            setToDoList(toDoList.filter(toDo => toDo.id !== id)) : null


    const handleSubmitToDo = (e: any) => {
        e.preventDefault();
        const isEdit = (stateForm: StateForm): stateForm is ToDo => stateForm.id !== "";
        if (isEdit(toDoForm)) {
            const existingIndex = toDoList.findIndex(e => e.id === toDoForm.id)
            const newToDoArr = toDoList
            newToDoArr[existingIndex] = toDoForm
            setToDoList(newToDoArr)
        } else {
            const newToDo = { id: uuidv4(), title: toDoForm.title, description: toDoForm.description }
            toDoList.push(newToDo)
            setToDoList(toDoList)
        }
        setToDoForm(emptyToDoForm)
    }

    const handleEditToDo = (id: string): void | null => {
        const setEditToDoState = (toDo: ToDo) => {
            setToggleToDoView(true)
            setToDoForm(toDo)
        }

        const existingToDo = toDoList.filter(toDo => toDo.id === id)

        return existingToDo.length > 0 ?
            setEditToDoState(existingToDo[0]) : null
    }

    const handleToDoInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, inputType: string) => {
        switch (inputType) {
            case "title":
                setToDoForm(toDoForm => ({ ...toDoForm, title: e.target.value }))
                break
            case "description":
                setToDoForm(toDoForm => ({ ...toDoForm, description: e.target.value }))
                break
            default:
                console.log("unhandled input type")
        }
    }

    const toDoContextProps: ToDoContextInterface = {
        toDoList,
        toDoSample,
        handleAddToDo,
        handleSubmitToDo,
        handleDeleteToDo,
        handleEditToDo,
        toggleToDoView,
        setToggleToDoView,
        handleToDoInput,
        toDoForm,
        setToDoForm
    }


    return (
        <TodoContext.Provider value={toDoContextProps}>
            {children}
        </TodoContext.Provider>
    )
}