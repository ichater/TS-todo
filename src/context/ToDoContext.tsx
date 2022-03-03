import React, { createContext, useState } from "react";
import { ToDo } from './../App'


export interface ToDoContextInterface {
    toDoList: ToDo[];
    toDoSample: ToDo[];
    handleAddToDo: (newToDo: ToDo) => void;
    handleSubmitToDo: (e: any) => void;
    deleteToDo: (id: number) => void | null;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
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



    const [toDoList, setToDoList] = useState(toDoSample)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleAddToDo = (newToDo: ToDo): void => {
        setToDoList([...toDoList, newToDo])
    }

    const deleteToDo = (id: number): void | null =>
        toDoList.filter(toDo => toDo.id === id).length > 0 ?
            setToDoList(toDoList.filter(toDo => toDo.id !== id)) : null

    const handleSubmitToDo = (e: any) => {
        e.preventDefault();
        return setToDoList([...toDoList, { id: toDoList.length + 1, title: title, description: description }])
    }

    const toDoContextProps = {
        toDoList,
        toDoSample,
        handleAddToDo,
        handleSubmitToDo,
        deleteToDo,
        title,
        setTitle,
        description,
        setDescription
    }


    return (
        <TodoContext.Provider value={toDoContextProps}>
            {children}
        </TodoContext.Provider>
    )
}