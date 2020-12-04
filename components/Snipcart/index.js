import React from "react";
import Head from "next/head";

const SnipCart = () => {
  return (
    <React.Fragment>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="preload"
          href="https://cdn.snipcart.com/themes/v3.0.25/default/snipcart.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
      </Head>
      <script async src="https://cdn.snipcart.com/themes/v3.0.25/default/snipcart.js" />
      <div id="snipcart" data-api-key={process.env.NEXT_PUBLIC_SNIPCART_APIKEY} />
    </React.Fragment>
  );
};

export default SnipCart;
