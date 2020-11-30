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
      <script defer src="https://cdn.snipcart.com/themes/v3.0.25/default/snipcart.js" />
      <div id="snipcart" data-api-key="MmM3MzlkMGYtZWVlMy00MTBhLWE4NmEtZGRiZjIxYmZkNDdlNjM3MDgyMTc4ODYwNDM5MzY2" />
    </React.Fragment>
  );
};

export default SnipCart;
