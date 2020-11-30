import styled from "styled-components";
import Box from "@ui-kit/Box";

const ProductInformation = styled(Box)`
  @media (max-width: 768px) {
    padding: 32px;
  }

  @media (max-width: 425px) {
    padding: 32px 16px;
  }
`;

export default ProductInformation;
