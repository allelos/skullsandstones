import styled from "styled-components";
import Box from "@ui-kit/Box";

const setBackground = (transparent) => (transparent ? "transparent" : "#ffffffcc");
const getPosition = ({ floating = false }) => {
  if (typeof floating === "boolean") {
    return floating ? `position: fixed;` : `position: sticky;`;
  }

  if (typeof floating === "string") {
    return `position: ${floating};`;
  }
};

const NavContainer = styled(Box).attrs(({ transparent }) => ({
  justifyContent: "between",
  alignItems: "center",
  padding: [0, 4, 0, 4],
  width: "100%",
  background: setBackground(transparent),
  height: "80px",
}))`
  z-index: 10;
  top: 0;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  ${getPosition};
`;

export default NavContainer;
