import Navbar from "@bw/components/navbar";
import "@bw/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@bw/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Navbar />
    <Component {...pageProps} />;
    <Footer />
  </>
}
