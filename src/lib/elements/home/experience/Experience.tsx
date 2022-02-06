import React from "react"
import { ReactIcon, NextIcon } from "../../../icons"
import KotlinLogo from "../../../icons/KotlinLogo"
import typography from "../../../typography"
import { Container } from "../../layout"
import { ExperienceItem } from "./ExperienceItem"

export function Experience() {
    return (
        <Container className="flex flex-col gap-4">
            <div>
                <h3 className={typography.normalTitle}>Experience</h3>
                <div className="flex flex-col gap-2 lg:gap-0">
                    <p className={typography.paragraph}>
                        I have been developing software for 5+ years, and I have experience with a wide range of
                        languages and frameworks.
                    </p>
                </div>
            </div>

            <div className="mt-2 flex flex-col gap-6 lg:mt-0 lg:gap-4">
                <ExperienceItem
                    title="React"
                    description="React is a library for creating user interfaces for the web."
                    icon={<ReactIcon className="h-16 w-16 dark:fill-emerald-400/80" />}
                />

                <ExperienceItem
                    title="Next.js"
                    description="Next.js is a framework for React which helps build fast and modern websites."
                    icon={<NextIcon className="h-16 w-16 dark:fill-emerald-400/80" />}
                />

                <ExperienceItem
                    title="Kotlin"
                    description="Kotlin is a programming language (initially) designed for the JVM."
                    icon={<KotlinLogo className="h-16 w-16 dark:fill-emerald-400/80" />}
                />
            </div>
        </Container>
    )
}
