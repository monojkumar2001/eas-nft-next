'use client'

import "./globals.css";
import { DM_Sans } from "next/font/google";
import AOS from "aos";
import axios from "axios";
// import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import GlobalState from "@/context";
// import { Metadata } from 'next'
 
export const metadata = {
  title: 'monoj',
  description: 'homin',
}
const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--body-font",
});

axios.defaults.baseURL = "https://admin.accurentvc.com/";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.authorization = token ? `Bearer ${token}` : "";
  return config;
});


export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  // const POLLING_INTERVAL = 12000;

  // const getLibrary = (provider) => {
  //   console.log("Provider:", provider);
  //   const library = new ethers.providers.Web3Provider(provider);
  //   console.log("Library:", library);
  //   library.pollingInterval = POLLING_INTERVAL;
  //   return library;
  // };

  return (
    <html lang="en">
      <body className={dm_sans.className} suppressHydrationWarning={false}>
        {/* <Web3ReactProvider getLibrary={getLibrary}  > */}
        {/* <GlobalState> */}
          <Header />
          {children}
          <Footer />
        {/* </GlobalState> */}

        {/* </Web3ReactProvider> */}
      </body>
    </html>
  );
}
