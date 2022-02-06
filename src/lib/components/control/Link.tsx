import NextLink from "next/link"
import React from "react"
import typography from "../../typography"

interface LinkProps {
    href: string
    className?: string
    children?: React.ReactNode
}

export function Link({ href, className = "", children }: LinkProps) {
    return (
        <NextLink href={href} passHref>
            <a target="_blank" className={typography.link + ` ${className}`}>
                {children}
            </a>
        </NextLink>
    )
}
