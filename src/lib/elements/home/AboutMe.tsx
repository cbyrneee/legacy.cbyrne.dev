import React from "react"
import typography from "../../typography"
import { Container } from "../base"

export function AboutMe() {
    return (
        <Container>
            <h3 className={typography.normalTitle}>About Me</h3>
            <div className="flex flex-col gap-2 lg:gap-0">
                <p className={typography.paragraph}>
                    I am a student and developer, with proficiency in Kotlin, Java, Typescript and Swift.
                </p>
                <p className={typography.paragraph}>
                    Currently, I am working for{" "}
                    <a className={typography.paragraphLink} href="https://oplegends.com">
                        OPLegends.
                    </a>
                </p>
            </div>
        </Container>
    )
}
