import { createGlobalStyle } from "styled-components";
import { fontFace, fontRendering, fontStack, textSelection } from "@components/mixins";

const GlobalStyles = createGlobalStyle`
    ${fontFace};
    ${textSelection};
    * {
      box-sizing: border-box;
    }
    html {
      ${fontRendering};
    }
    body {
        margin: 0;
        padding: 0;
        ${fontStack};
        background: #fefefe;
      }
    a {
      color: inherit;
      text-decoration: none;
    }
    button {
      ${fontStack};
    }
`;

export default GlobalStyles;
