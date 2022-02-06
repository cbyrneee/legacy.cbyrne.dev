import React from "react"
import typography from "../../typography"
import { Container } from "../base"

export function AboutMe() {
    return (
        <Container>
            <h3 className={typography.normalTitle}>About Me</h3>
            <p className={typography.paragraph}>
                I am a student and developer, with proficiency in Kotlin, Java, Typescript and Swift.
            </p>
        </Container>
    )
}
