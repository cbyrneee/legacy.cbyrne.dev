import "../styles/globals.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/700.css"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="container mx-auto w-full max-w-4xl p-4 lg:p-0 lg:py-12">
            <Component {...pageProps} />
        </div>
    )
}
