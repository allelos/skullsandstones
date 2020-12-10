import React from "react";
import Box from "@ui-kit/Box";
import { Title, Subtitle } from "@ui-kit/Typography";
import SubNavContainer from "@components/SubNav/SubNavContainer";
import SubNavLinks from "@components/SubNav/SubNavLinks";

const SubNav = ({ title = "συλλογή" }) => {
  return (
    <SubNavContainer>
      <Title textTransform="lowercase" margin={[0, 0, 4, 0]}>
        \ {title}
      </Title>
      <Box column gap={4}>
        <Subtitle strong>ΟΛΕΣ ΟΙ ΚΑΤΗΓΟΡΙΕΣ</Subtitle>
        <Box column padding={[0, 0, 0, 2]} gap={2}>
          <SubNavLinks />
        </Box>
      </Box>
    </SubNavContainer>
  );
};

export default SubNav;
