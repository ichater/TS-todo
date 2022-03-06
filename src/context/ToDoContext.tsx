import React, { createContext, useState } from "react";
import { ToDo } from './../App'


export interface ToDoContextInterface {
    toDoList: ToDo[];
    toDoSample: ToDo[];
    handleAddToDo: (newToDo: ToDo) => void;
    handleSubmitToDo: (e: any) => void;
    handleDeleteToDo: (id: number) => void | null;
    handleEditToDo: (id: number) => void | null;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    toggleToDoView: boolean;
    setToggleToDoView: React.Dispatch<React.SetStateAction<boolean>>;
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
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [toggleToDoView, setToggleToDoView] = useState<boolean>(false)


    const handleAddToDo = (newToDo: ToDo): void => {
        setToDoList([...toDoList, newToDo])
    }

    const handleDeleteToDo = (id: number): void | null =>
        toDoList.filter(toDo => toDo.id === id).length > 0 ?
            setToDoList(toDoList.filter(toDo => toDo.id !== id)) : null

    const handleSubmitToDo = (e: any) => {
        e.preventDefault();
        return setToDoList([...toDoList, { id: toDoList.length + 1, title: title, description: description }])
    }

    const handleEditToDo = (id: number): void | null => {
        const setEditToDoState = (toDo: ToDo) => {
            setToggleToDoView(true)
            setTitle(toDo.title)
            return toDo.description ? setDescription(toDo.description) : null
        }

        return toDoList.filter(toDo => toDo.id === id).length > 0 ?
            setEditToDoState(toDoList[id - 1]) : null
    }

    const toDoContextProps: ToDoContextInterface = {
        toDoList,
        toDoSample,
        handleAddToDo,
        handleSubmitToDo,
        handleDeleteToDo,
        handleEditToDo,
        title,
        setTitle,
        description,
        setDescription,
        toggleToDoView,
        setToggleToDoView
    }


    return (
        <TodoContext.Provider value={toDoContextProps}>
            {children}
        </TodoContext.Provider>
    )
}