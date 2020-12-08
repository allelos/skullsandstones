import styled from "styled-components";

const sizeMap = {
  small: "16px",
  medium: "24px",
  large: "48px",
};

const Icon = styled.svg`
  height: ${({ size = "medium" }) => sizeMap[size]};
  width: ${({ size = "medium" }) => sizeMap[size]};
  stroke: ${({ color = "currentcolor" }) => color};
  fill: none;
`;

export default Icon;
