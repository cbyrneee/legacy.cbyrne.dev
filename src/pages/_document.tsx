import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html className="dark:bg-neutral-900">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=optional"
                    rel="stylesheet"
                />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
