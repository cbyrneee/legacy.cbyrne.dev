import Image from "next/image"
import { Introduction } from "../lib/elements/home"

export default function Home() {
    return (
        <div className="rounded-md border-2 border-neutral-100 bg-neutral-50 p-6">
            <Introduction />
        </div>
    )
}
