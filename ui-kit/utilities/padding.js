import { sizes } from "../theme";

const padding = ({ padding }) => {
  if (!padding) {
    return "";
  }

  if (!Array.isArray(padding) && !isNaN(padding)) {
    return `padding: ${sizes[padding]};`;
  }

  if (Array.isArray(padding) && padding.length >= 1 && padding.length <= 4) {
    return `padding: ${padding.map((size) => sizes[size] || "auto").join(" ")};`;
  }

  console.error("Please provide an array (max 4 elements) for `padding` style helper.");
};

export default padding;
