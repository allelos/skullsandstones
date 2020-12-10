import styled from "styled-components";
import Box from "@ui-kit/Box";

const Main = styled(Box)`
  min-height: calc(100vh - 80px);
  max-width: 1920px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Main;
