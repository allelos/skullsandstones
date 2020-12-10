import styled from "styled-components";
import Box from "@ui-kit/Box";

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  max-width: 1080px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 475px) {
    grid-template-columns: 1fr;
  }
`;

export default Grid;
