import NextLink from "next/link"
import React from "react"
import typography from "../../typography"

interface LinkProps {
    href: string
    className?: string
    bigger?: boolean
    children?: React.ReactNode
}

export function Link({ href, className = "", bigger = false, children }: LinkProps) {
    return (
        <NextLink href={href} passHref>
            <a target="_blank" className={typography.link + ` ${className} ${bigger && "py-2 px-4"}`}>
                {children}
            </a>
        </NextLink>
    )
}
