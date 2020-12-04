import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Box from "@ui-kit/Box";
import { Small } from "ui-kit/Typography";
import { responsiveMixin } from "./helpers";

const getSeparatorColor = (theme) => (theme === "dark" ? "#505050" : "#0a0a0a");

const logo = "/assets/logos/logo-white.png";
const logoSize = {
  width: 64,
  height: 64,
};

const ResponsiveBox = styled(Box)`
  ${responsiveMixin};
`;

const Footer = () => {
  return (
    <footer>
      <Box column padding={[20, 4, 20, 4]} gap={10} background="#252525">
        <Box alignItems="center" gap={6}>
          <Box flex height="1px" background={getSeparatorColor("dark")} />
          <Link href="/">
            <a>
              <Image src={logo} alt="skulls-and-stones-footer-logo" {...logoSize} />
            </a>
          </Link>
          <Box flex height="1px" background={getSeparatorColor("dark")} />
        </Box>
        <ResponsiveBox justifyContent="around" gap={2} alignItems="start">
          <Box column gap={2}>
            <Small color="white" strong>
              ΈΧΕΙΣ ΕΡΩΤΗΣΕΙΣ?
            </Small>
            <Small color="white" as="a" href="mailto:skullsandstonesproject@gmail.com">
              skullsandstonesproject@gmail.com
            </Small>
          </Box>
          <Box basis="33%" alignItems="center">
            <Small color="white" textAlign="center">
              Skulls & Stones and Skulls & Stones design are trademarks and/or registered trademarks of Skulls & Stones,
              Inc. or its affiliates.
            </Small>
          </Box>
          <Box column gap={2} alignItems="center">
            <Small color="white">
              <Link href="/faq">Συχνές Ερωτήσεις</Link>
            </Small>
            <Small color="white">
              <Link href="/privacy">Πολιτική Απορρήτου</Link>
            </Small>
            <Small color="white">
              <Link href="/termsofuse">Όροι χρήσης</Link>
            </Small>
          </Box>
        </ResponsiveBox>
      </Box>
    </footer>
  );
};

export default Footer;
