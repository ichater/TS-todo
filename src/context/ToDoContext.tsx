import React, { createContext, useState } from "react";
import { ToDo } from './../App'


export interface ToDoContextInterface {
    toDoList: ToDo[];
    toDoSample: ToDo[];
    handleAddToDo: (newToDo: ToDo) => void;
    handleSubmitToDo: (e: any) => void;
    handleDeleteToDo: (id: number) => void | null;
    handleEditToDo: (id: number) => void | null;
    toggleToDoView: boolean;
    setToggleToDoView: React.Dispatch<React.SetStateAction<boolean>>;
    handleToDoInputAlso: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, inputType: string) => void,
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
            id: 1,
            title: "Get Good at React",
            description: "Get through this project and take on feedback"
        },
        {
            id: 2,
            title: "Guided meditation daily",
            description: "Good for the nerves and in line with your new years resolution. Also lets extend this out to see how it fits in with the page"
        },
        {
            id: 3,
            title: "Feed Bruno"
        },
    ]


    const [toggleToDoView, setToggleToDoView] = useState<boolean>(false)
    const [toDoList, setToDoList] = useState(toDoSample)


    const [toDoForm, setToDoForm] = useState<{
        title: string;
        description?: string;
    }>({ title: "", description: "" })



    const handleAddToDo = (newToDo: ToDo): void => {
        setToDoList([...toDoList, newToDo])
    }

    const handleDeleteToDo = (id: number): void | null =>
        toDoList.filter(toDo => toDo.id === id).length > 0 ?
            setToDoList(toDoList.filter(toDo => toDo.id !== id)) : null


    const handleSubmitToDo = (e: any) => {
        e.preventDefault();
        console.log(toDoList)
        return setToDoList([...toDoList, { id: toDoList.length + 1, title: toDoForm.title, description: toDoForm.description }])

    }

    const handleEditToDo = (id: number): void | null => {
        const setEditToDoState = (toDo: ToDo) => {
            setToggleToDoView(true)
            setToDoForm(toDoForm => ({ ...toDoForm, title: toDo.title }))
            toDo.description ?
                setToDoForm(toDoForm => ({ ...toDoForm, description: toDo.description })) :
                setToDoForm(toDoForm => ({ ...toDoForm, description: "" }))
        }

        return toDoList.filter(toDo => toDo.id === id).length > 0 ?
            setEditToDoState(toDoList[id - 1]) : null
    }

    const handleToDoInputAlso = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, inputType: string) => {
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
        handleToDoInputAlso,
        toDoForm,
        setToDoForm
    }


    return (
        <TodoContext.Provider value={toDoContextProps}>
            {children}
        </TodoContext.Provider>
    )
}