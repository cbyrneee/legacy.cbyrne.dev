import React from "react"
import { Link } from "../../../components/control"
import { ReactIcon, NextIcon, KotlinIcon, PhoneIcon } from "../../../components/icons"
import typography from "../../../typography"
import { Container } from "../../layout"
import { ExperienceItem } from "./ExperienceItem"

const iconStyle = "h-16 w-16 fill-emerald-800/60 dark:fill-emerald-400/80"

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
                    icon={<PhoneIcon className={iconStyle + " stroke-emerald-700 dark:stroke-emerald-800"} />}
                >
                    In the past, I spent a lot of time developing {"'"}tweaks{"'"} for jailbroken iOS devices. Some of
                    which, have gained over 270,000 downloads.
                    <Link href="https://repo.dynastic.co/package/dotto" className="mx-2">
                        dotto+
                    </Link>
                    <Link href="https://repo.dynastic.co/package/dragspring">Dragspring</Link>
                </ExperienceItem>

                <ExperienceItem title="Kotlin" icon={<KotlinIcon className={iconStyle} />}>
                    I{"'"}ve been using Kotlin for 2 years to build server-side software, JVM applications, and more.
                    <Link href="https://github.com/MediaModMC/MediaMod" className="mx-2">MediaMod</Link>
                    <Link href="https://github.com/cbyrneee/KDiscordIPC" className="mr-2">
                        KDiscordIPC
                    </Link>
                    <Link href="https://github.com/cbyrneee/Injector">Injector</Link>
                </ExperienceItem>

                <ExperienceItem title="React" icon={<ReactIcon className={iconStyle} />}>
                    I{"'"}ve been using React for 1 year, and I have a great understanding of how it works and best
                    practices.
                    <Link href="https://cbyrne.dev" className="mx-2">
                        cbyrne.dev
                    </Link>
                </ExperienceItem>

                <ExperienceItem title="Next.js" icon={<NextIcon className={iconStyle} />}>
                    I{"'"}ve been using Next.JS for 1 year to build websites for myself, and for my clients.
                    <Link href="https://cbyrne.dev" className="mx-2">
                        cbyrne.dev
                    </Link>
                </ExperienceItem>
            </div>
        </Container>
    )
}
