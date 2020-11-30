const textDecoration = ({ textDecoration }) => {
  if (textDecoration === "underline") {
    return `
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        `;
  }
  return "";
};

export default textDecoration;
