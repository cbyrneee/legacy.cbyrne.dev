import "../styles/globals.css"
import type { AppProps } from "next/app"
import { AnimatePresence, motion } from "framer-motion"
import { variants } from "../lib/animation"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()

    return (
        <AnimatePresence>
            <motion.div
                className="container mx-auto w-full max-w-4xl p-4 lg:p-0 lg:py-12"
                key={router.asPath}
                variants={variants.fadeInOut}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: "linear", duration: 0.35 }}
            >
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    )
}
