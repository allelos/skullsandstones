import styled from "styled-components";
import Box from "@ui-kit/Box";

const SubNavContainer = styled(Box).attrs({ justifyContent: "between", alignItems: "start" })`
  @media (max-width: 600px) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 48px;
    }
  }
`;
export default SubNavContainer