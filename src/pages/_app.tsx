import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
    variable: "--poppins-font",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`${poppins.variable} font-sans flex pt-8 px-4 justify-center`}>
            <main className="max-w-5xl w-full">
                <NavBar />
                <Component {...pageProps} />
            </main>
        </div>
    );
}
