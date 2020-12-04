import React from "react";
import Head from "next/head";

const GoogleAnalytics = () => (
  <React.Fragment>
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-20YC6D82V2" />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-20YC6D82V2');`,
        }}
      />
    </Head>
  </React.Fragment>
);

export default GoogleAnalytics;
