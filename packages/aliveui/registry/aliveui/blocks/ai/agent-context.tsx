"use client"

import * as React from "react"

export interface TodoHandler {
    addTodo: (text: string) => Promise<void>
    listTodos: () => Promise<string[]>
}

interface AgentContextValue {
    todoHandler?: TodoHandler
}

const AgentContext = React.createContext<AgentContextValue>({})

export function useAgent() {
    return React.useContext(AgentContext)
}

interface AgentProviderProps {
    children: React.ReactNode
    todoHandler?: TodoHandler
}

export function AgentProvider({ children, todoHandler }: AgentProviderProps) {
    return (
        <AgentContext.Provider value={{ todoHandler }}>
            {children}
        </AgentContext.Provider>
    )
}
