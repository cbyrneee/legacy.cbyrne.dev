import Link from "next/link"
import React from "react"
import { ReactIcon, NextIcon, KotlinIcon, PhoneIcon } from "../../../icons"
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
                    title="iOS Runtime Modifications"
                    icon={<PhoneIcon className="h-16 w-16 stroke-emerald-800 dark:fill-emerald-400/80" />}
                >
                    In the past, I spent a lot of time developing {"'"}tweaks{"'"} for jailbroken iOS devices. Some of
                    which, have gained over 270,000 downloads.
                    <Link passHref href="https://repo.dynastic.co/package/dotto">
                        <span className={typography.paragraphLink + " mx-2 cursor-pointer"}>dotto+</span>
                    </Link>
                    <Link passHref href="https://repo.dynastic.co/package/dragspring">
                        <span className={typography.paragraphLink + " cursor-pointer"}>Dragspring</span>
                    </Link>
                </ExperienceItem>

                <ExperienceItem title="Kotlin" icon={<KotlinIcon className="h-16 w-16 dark:fill-emerald-400/80" />}>
                    I{"'"}ve been using Kotlin for 2 years to build server-side software, JVM applications, and more.
                    <Link passHref href="https://github.com/cbyrneee/KDiscordIPC">
                        <span className={typography.paragraphLink + " mx-2 cursor-pointer"}>KDiscordIPC</span>
                    </Link>
                    <Link passHref href="https://github.com/cbyrneee/Injector">
                        <span className={typography.paragraphLink + " mr-2 cursor-pointer"}>Injector</span>
                    </Link>
                </ExperienceItem>

                <ExperienceItem title="React" icon={<ReactIcon className="h-16 w-16 dark:fill-emerald-400/80" />}>
                    I{"'"}ve been using React for 1 year, and I have a great understanding of how it works and best
                    practices.
                    <Link passHref href="https://cbyrne.dev">
                        <span className={typography.paragraphLink + " mx-2 cursor-pointer"}>cbyrne.dev</span>
                    </Link>
                </ExperienceItem>

                <ExperienceItem title="Next.js" icon={<NextIcon className="h-16 w-16 dark:fill-emerald-400/80" />}>
                    I{"'"}ve been using Next.JS for 1 year to build websites for myself, and for my clients.
                    <Link passHref href="https://cbyrne.dev">
                        <span className={typography.paragraphLink + " mx-2 cursor-pointer"}>cbyrne.dev</span>
                    </Link>
                </ExperienceItem>
            </div>
        </Container>
    )
}
