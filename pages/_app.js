import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import GlobalStyles from "@components/GlobalStyles";
import "keen-slider/keen-slider.min.css";

const SnipCart = dynamic(() => import("@components/Snipcart"));

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <link rel="icon" href="/assets/images/favicon.png" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="preload"
          href="https://cdn.snipcart.com/themes/v3.0.25/default/snipcart.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
      </Head>
      <Component {...pageProps} />
      <SnipCart />
    </>
  );
};

export default App;
