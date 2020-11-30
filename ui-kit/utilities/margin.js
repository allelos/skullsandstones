import { sizes } from "../theme";

const margin = ({ margin }) => {
  if (!margin) {
    return "";
  }

  if (!Array.isArray(margin) && !isNaN(margin)) {
    return `margin: ${sizes[margin]};`;
  }

  if (Array.isArray(margin) && margin.length >= 1 && margin.length <= 4) {
    return `margin: ${margin.map((size) => sizes[size] || "auto").join(" ")};`;
  }

  console.error("Please provide an array (max 4 elements) for `margin` style helper.");
};

export default margin;
