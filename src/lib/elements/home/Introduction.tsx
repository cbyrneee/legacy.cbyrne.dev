import Image from "next/image"
import React from "react"
import { Container } from "../base"
import typography from "../../typography"

export function Introduction() {
    return (
        <Container>
            <div className="flex flex-row items-center gap-4">
                <div className="h-20 w-20">
                    <Image className="rounded-md" alt="Profile" width="100px" height="100px" src="/profile.webp" />
                </div>

                <div>
                    <h3 className={typography.accentTitle}>Hello,</h3>
                    <h1 className={typography.largeTitle}>I{"'"}m Conor</h1>
                </div>
            </div>
        </Container>
    )
}
