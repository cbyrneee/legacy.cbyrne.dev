import Head from "next/head"
import { Introduction, AboutMe, Experience } from "../lib/elements/home"

export default function Home() {
    return (
        <>
            <Head>
                <title>Conor Byrne</title>
            </Head>

            <div className="flex flex-col gap-4">
                <Introduction />
                <AboutMe />
                <Experience />
            </div>
        </>
    )
}
