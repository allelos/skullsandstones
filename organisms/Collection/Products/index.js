import styled from "styled-components";
import Box from "@ui-kit/Box";

const Products = styled(Box)`
  background: black;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export default Products;
