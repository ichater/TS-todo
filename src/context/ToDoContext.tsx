import React, { createContext, useState } from "react";
import { ToDo } from './../App'



const samplefunction = () => "i am a function"

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

const toDoContextProps = {
    samplefunction,
    toDoSample
}

export const TodoContext = createContext(toDoContextProps)

type Props = { children: React.ReactNode }

export function ToDoContextProvider({ children }: Props) {


    return (
        <TodoContext.Provider value={toDoContextProps}>
            {children}
        </TodoContext.Provider>
    )
}