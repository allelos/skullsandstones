import { sizes } from "../theme";

const letterSpacing = ({ letterSpacing }) => {
  if (!letterSpacing) {
    return "";
  }

  if (typeof letterSpacing === "number") {
    return `letter-spacing: ${sizes[letterSpacing]}`;
  }

  if (typeof letterSpacing === "string") {
    return `letter-spacing: ${letterSpacing}`;
  }
};

export default letterSpacing;
