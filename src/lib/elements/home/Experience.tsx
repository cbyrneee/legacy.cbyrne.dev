import React from "react"
import typography from "../../typography"
import { Container } from "../base"

export function Experience() {
    return (
        <Container>
            <h3 className={typography.normalTitle}>Experience</h3>
            <div className="flex flex-col gap-2 lg:gap-0">
                <p className={typography.paragraph}>
                    I have been developing software for 5+ years, and I have experience with a wide range of languages
                    and frameworks.
                </p>
            </div>
        </Container>
    )
}
