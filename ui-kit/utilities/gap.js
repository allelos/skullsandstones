import { sizes } from "../theme";

const gap = ({ gap, column, columnReverse }) => {
  if (gap === undefined || !(gap in sizes)) {
    return "";
  }

  if (column || columnReverse) {
    return `
        &> *:not(:last-child) {
          margin-bottom: ${sizes[gap]};
        }
      `;
  }

  return `
      &> *:not(:last-child) {
        margin-right: ${sizes[gap]};
      }
    `;
};

export default gap;
