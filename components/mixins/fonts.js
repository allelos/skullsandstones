import { css } from "styled-components";

export const fontFace = css`
  @font-face {
    font-family: "Inter";
    src: url("/assets/fonts/Inter-VariableFont.ttf") format("truetype-variations");
    font-weight: 1 999;
  }
`;

export const fontStack = css`
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-rendering: optimizeLegibility;
`;

export const fontRendering = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "case" 1, "rlig" 1, "calt" 0;
`;

export const textSelection = css`
  &::selection {
    background-color: #79ffe1;
  }
`;
