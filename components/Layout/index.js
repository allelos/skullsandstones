import React from "react";
import dynamic from "next/dynamic";
import Box from "@ui-kit/Box";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

const AcceptCookies = dynamic(() => import("@organisms/AcceptCookies"));

const Layout = ({ children, floating, transparent, dark }) => {
  return (
    <Box column width={{ max: "100%", min: "100%" }} height="100%">
      <Nav floating={floating} transparent={transparent} dark={dark} />
      {children}
      <Footer />
      <AcceptCookies>hello</AcceptCookies>
    </Box>
  );
};

export default Layout;
