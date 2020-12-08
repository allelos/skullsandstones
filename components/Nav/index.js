import React from "react";
import styled from "styled-components";
import Box from "@ui-kit/Box";
import { Bag } from "@ui-kit/Icons/icons";
import SimpleLink from "@components/Links/Link";
import NavContainer from "./NavContainer";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import { centerMixin } from "./helpers";

const NavLogoContainer = styled(Box).attrs({ position: "absolute" })`
  ${centerMixin};
`;

const Nav = ({ floating, transparent, dark }) => {
  return (
    <NavContainer floating={floating} transparent={transparent} dark={dark}>
      <Box gap={4}>
        <NavLinks dark={dark} />
      </Box>
      <NavLogoContainer>
        <NavLogo href="/" dark={dark} />
      </NavLogoContainer>
      <SimpleLink dark={dark} className="snipcart-checkout">
        <Bag color={dark && "#fefefe"} />
      </SimpleLink>
    </NavContainer>
  );
};

export default Nav;
