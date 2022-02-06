import React from "react"

interface ContainerProps {
    children?: React.ReactNode
}

export function Container({ children }: ContainerProps) {
    return (
        <div className="rounded-md border-2 border-neutral-100 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-800">
            {children}
        </div>
    )
}
