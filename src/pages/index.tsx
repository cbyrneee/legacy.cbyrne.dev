import { Container } from "../lib/elements/base"
import { Introduction, AboutMe, Experience } from "../lib/elements/home"

export default function Home() {
    return (
        <div className="flex flex-col gap-4">
            <Introduction />
            <AboutMe />
            <Experience />
        </div>
    )
}
