import React from "react"
import { Link } from "../../components/control"
import typography from "../../typography"
import { Container } from "../layout"

export function AboutMe() {
    return (
        <Container>
            <h3 className={typography.normalTitle}>About Me</h3>
            <div className="flex flex-col gap-2 lg:gap-0">
                <p className={typography.paragraph}>
                    I am a student and developer, with proficiency in Kotlin, Java, Typescript and Swift.
                </p>
                <p className={typography.paragraph}>
                    Currently, I am working for <Link href="https://essential.gg">Essential</Link>.
                </p>
            </div>
        </Container>
    )
}
