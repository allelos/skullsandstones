import styled from "styled-components";
import Box from "@ui-kit/Box";

const Main = styled(Box)`
  min-height: calc(100vh - 80px);
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

export default Main;
