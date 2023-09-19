"use client";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import AOS from "aos";
import { Web3ReactProvider } from "@web3-react/core";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: '--body-font',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  const POLLING_INTERVAL = 12000 


  const getLibrary = (provider) => {
    const library = new ethers.providers.Web3Provider(provider)
    library.pollingInterval = POLLING_INTERVAL
    return library
  }
  return (
    <html lang="en">
      {/* <Web3ReactProvider getLibrary={getLibrary}> */}
        {/* <Header /> */}
        <body suppressHydrationWarning={true} className={dm_sans.className}>{children}</body>
        <Footer/>
      {/* </Web3ReactProvider> */}
    </html>
  );
}
