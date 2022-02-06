import React from "react"
import typography from "../../../typography"

interface ExperienceItemProps {
    title: string
    icon: React.ReactNode

    children: React.ReactNode
}

export function ExperienceItem({ title, children, icon }: ExperienceItemProps) {
    return (
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center">
            <div className="flex h-16 w-16 items-center rounded-lg bg-emerald-400/40 p-2 dark:bg-emerald-400/10">
                {icon}
            </div>

            <div>
                <h3 className={typography.subtitle}>{title}</h3>
                <p className={typography.paragraph}>{children}</p>
            </div>
        </div>
    )
}
