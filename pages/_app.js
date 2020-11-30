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
      </Head>
      <Component {...pageProps} />
      <SnipCart />
    </>
  );
};

export default App;
