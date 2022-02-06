import React from "react"
import typography from "../../../typography"

interface ExperienceItemProps {
    title: string
    description: string
    icon: React.ReactNode
}

export function ExperienceItem({ title, description, icon }: ExperienceItemProps) {
    return (
        <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center">
            <div className="flex h-16 w-16 items-center rounded-lg p-2 dark:bg-emerald-400/10">{icon}</div>

            <div>
                <h3 className={typography.normalTitle}>{title}</h3>
                <p className={typography.paragraph}>{description}</p>
            </div>
        </div>
    )
}
