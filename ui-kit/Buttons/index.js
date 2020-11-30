import styled from "styled-components";
import makeFontSize from "../utilities/makeFontSize";
import { sizes } from "../theme";

const colorsMap = {
  white: "#fff",
  black: "#000",
};
const makeBorder = ({ borderColor = "black" }) => `border: 1px solid ${colorsMap[borderColor]};`;
const makeBackground = ({ background = "black" }) => `background-color: ${colorsMap[background]};`;
const getPadding = ({ small }) => `padding ${small ? sizes[2] : sizes[5]}`;
const getColor = (color) => `color: ${colorsMap[color]}`;

const Button = styled("button")`
  display: inline-block;
  ${makeFontSize("small")};
  ${makeBackground};
  ${makeBorder};
  ${getPadding};
  ${getColor("white")};

  letter-spacing: 0.2em;
  transition: all 0.17s ease-in-out;
  cursor: pointer;
  outline: 0;

  &:hover {
    ${makeBackground({ background: "white" })};
    ${getColor("black")};
  }

  &:active {
    ${makeBackground("black")};
    ${getColor({ background: "white" })};
  }
`;

export default Button;
