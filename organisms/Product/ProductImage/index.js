import styled from "styled-components";
import { objectFit } from "@components/mixins";
import Box from "@ui-kit/Box";

const ProductImage = styled(Box)`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 500ms ease-in-out;
  padding-bottom: 56.25%;
  ${objectFit};
`;

export default ProductImage;
