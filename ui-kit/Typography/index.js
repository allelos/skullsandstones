import styled, { css } from "styled-components";
import margin from "../utilities/margin";
import makeFontSize from "../utilities/makeFontSize";
import makeFontWeight from "../utilities/makeFontWeight";
import textAlign from "../utilities/textAlign";
import textColor from "../utilities/textColor";
import backgroundColor from "../utilities/backgroundColor";
import padding from "../utilities/padding";
import textTransform from "../utilities/textTransform";
import letterSpacing from "../utilities/letterSpacing";
import textDecoration from "../utilities/textDecoration";
import fontStyle from "../utilities/fontStyle";

const makeTypography = (type) => css`
  display: inline-block;
  ${makeFontSize(type)};
  ${makeFontWeight(type)};
  ${fontStyle};
  ${textAlign};
  ${textColor};
  ${backgroundColor};
  ${margin};
  ${padding};
  ${textTransform};
  ${textDecoration};
  ${letterSpacing};
`;

export const Small = styled("small").attrs(({ margin = [0] }) => ({ margin }))`
  ${makeTypography("small")};
`;

export const Text = styled("p").attrs(({ margin = [0] }) => ({ margin }))`
  ${makeTypography("text")};
`;

export const Tertiary = styled("h3").attrs(({ margin = [0] }) => ({ margin }))`
  ${makeTypography("tertiary")};
  ${makeFontWeight("tertiary")};
  line-height: 1.4;
`;

export const Subtitle = styled("h3").attrs(({ margin = [0] }) => ({ margin }))`
  ${makeTypography("subtitle")};
  ${makeFontWeight("subtitle")};
`;

export const Title = styled("h1").attrs(({ margin = [0] }) => ({ margin }))`
  ${makeTypography("title")};
  ${makeFontWeight("title")};
`;
