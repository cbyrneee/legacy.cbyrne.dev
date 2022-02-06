import React from "react"

interface KotlinIconProps {
    className?: string
}

export function KotlinIcon({ className = "" }: KotlinIconProps) {
    return (
        <svg
            className={className}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
        >
            <g>
                <linearGradient
                    id="XMLID_3_"
                    gradientUnits="userSpaceOnUse"
                    x1="15.9594"
                    y1="-13.0143"
                    x2="44.3068"
                    y2="15.3332"
                    gradientTransform="matrix(1 0 0 -1 0 61)"
                >
                    <stop offset="9.677000e-02" />
                    <stop offset="0.3007" />
                    <stop offset="0.6211" />
                    <stop offset="0.8643" />
                    <stop offset="1" />
                </linearGradient>
                <polygon id="XMLID_2_" points="0,60 30.1,29.9 60,60  " className="opacity-80" />

                <linearGradient
                    id="SVGID_1_"
                    gradientUnits="userSpaceOnUse"
                    x1="4.2092"
                    y1="48.9409"
                    x2="20.6734"
                    y2="65.405"
                    gradientTransform="matrix(1 0 0 -1 0 61)"
                >
                    <stop offset="0.1183" />
                    <stop offset="0.4178" />
                    <stop offset="0.6962" />
                    <stop offset="0.8333" />
                </linearGradient>
                <polygon points="0,0 30.1,0 0,32.5" className="opacity-80" />

                <linearGradient
                    id="SVGID_2_"
                    gradientUnits="userSpaceOnUse"
                    x1="-10.1017"
                    y1="5.8362"
                    x2="45.7315"
                    y2="61.6694"
                    gradientTransform="matrix(1 0 0 -1 0 61)"
                >
                    <stop offset="0.1075" />
                    <stop offset="0.2138" />
                    <stop offset="0.4254" />
                    <stop offset="0.6048" />
                    <stop offset="0.743" />
                    <stop offset="0.8232" />
                </linearGradient>
                <polygon points="30.1,0 0,31.7 0,60 30.1,29.9 60,0" />
            </g>
        </svg>
    )
}
