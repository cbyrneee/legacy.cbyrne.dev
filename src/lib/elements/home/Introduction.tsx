import Image from "next/image"
import React from "react"
import { Container } from "../layout"
import typography from "../../typography"
import { Link } from "../../components/control"
import { ChatIcon, CodeIcon, EmailIcon } from "../../components/icons"

export function Introduction() {
    return (
        <Container>
            <div className="w-full items-center gap-4 px-4 lg:flex lg:flex-row lg:justify-between">
                <div className="flex flex-row items-center gap-4">
                    <div className="h-20 w-20">
                        <Image className="rounded-md" alt="Profile" width="100px" height="100px" src="/profile.webp" />
                    </div>

                    <div>
                        <h3 className={typography.accentTitle}>Hello,</h3>
                        <h1 className={typography.largeTitle}>I{"'"}m Conor</h1>
                    </div>
                </div>

                <div className="mt-4 flex flex-row gap-2 lg:mt-0">
                    <Link href="mailto:hello@cbyrne.dev" bigger>
                        <div className="flex flex-row gap-2">
                            <EmailIcon className="hidden h-6 w-6 md:inline" /> Email
                        </div>
                    </Link>
                    <Link href="https://github.com/cbyrneee" bigger>
                        <div className="flex flex-row gap-2">
                            <CodeIcon className="hidden h-6 w-6 md:inline" /> GitHub
                        </div>
                    </Link>
                    <Link href="https://twitter.com/cbyrnedev" bigger>
                        <div className="flex flex-row gap-2">
                            <ChatIcon className="hidden h-6 w-6 md:inline" /> Twitter
                        </div>
                    </Link>
                </div>
            </div>
        </Container>
    )
}
