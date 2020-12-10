import styled from "styled-components";
import Box from "@ui-kit/Box";

const ProductImage = styled(Box)`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 500ms ease-in-out;
  min-height: 475px;
`;

export default ProductImage;
