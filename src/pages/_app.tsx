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
