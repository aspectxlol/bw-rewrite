import Navbar from "@bw/components/Navbar";
import "@bw/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@bw/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <div id={"TESTSIZES"} className={"top-1/2 left-1/2 p-5 z-40 bg-blue-800 text-white absolute"}>
      <h1 className={"hidden sm:block"}>SM</h1>
      <h1 className={"hidden md:block"}>MD</h1>
      <h1 className={"hidden lg:block"}>LG</h1>
      <h1 className={"hidden xl:block"}>XL</h1>
    </div>
    <Navbar/>
    <Component {...pageProps} />;
    <Footer />
  </>
}
