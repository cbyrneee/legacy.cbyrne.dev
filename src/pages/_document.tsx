import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html className="dark:bg-neutral-900">
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta property="og:title" content="Conor Byrne" />
                <meta
                    name="description"
                    content="I am a student and developer, with proficiency in Kotlin, Java, Typescript and Swift."
                />
                <meta
                    name="og:description"
                    content="I am a student and developer, with proficiency in Kotlin, Java, Typescript and Swift."
                />
                <meta name="og:image" content="/profile.webp" />
                <meta name="theme-color" content="#9ebeb2" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
