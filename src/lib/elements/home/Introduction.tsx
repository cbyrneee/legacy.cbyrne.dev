import Image from "next/image"
import React from "react"

export function Introduction() {
    return (
        <div className="flex flex-row items-center gap-4">
            <div className="h-20 w-20">
                <Image className="rounded-md" alt="Profile" width="100px" height="100px" src="/profile.webp" />
            </div>

            <div>
                <h3 className="text-xl font-semibold text-emerald-800/50 ">Hello,</h3>
                <h1 className="text-3xl font-bold">I{"'"}m Conor</h1>
            </div>
        </div>
    )
}
