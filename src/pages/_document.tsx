import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html className="dark:bg-neutral-900">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=optional"
                    rel="stylesheet"
                />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
