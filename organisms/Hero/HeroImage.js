import styled from "styled-components";
import Box from "@ui-kit/Box";
import { objectFit } from "@components/mixins";

const HeroImage = styled(Box).attrs({ width: "100%", height: "100vh", position: "relative" })`
  ${objectFit};
`;

export default HeroImage;
