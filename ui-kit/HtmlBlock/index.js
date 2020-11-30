import styled from "styled-components";
import Box from "../Box";
import makeFontSize from "../utilities/makeFontSize";
import makeFontWeight from "../utilities/makeFontWeight";

const getColor = ({ color = "black" }) => `color: ${color};`;

const HtmlBlock = styled(Box).attrs({ column: true, gap: 4 })`
  * {
    line-height: 1.7;
    ${getColor};
  }
  h2 {
    ${makeFontSize("subtitle")};
    ${makeFontWeight("subtitle")};
  }

  & p,
  li,
  ul {
    ${makeFontSize("text")};
    ${makeFontWeight("text")};
    margin: 0;
  }

  strong {
    ${makeFontWeight("text")({ strong: true })}
  }
`;

export default HtmlBlock;
