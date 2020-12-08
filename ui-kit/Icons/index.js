import React from "react";
import icons from "./icons";
import StyledIcon from "./Icon";

console.log(icons);

const Icon = ({ name }) => {
  const iconSymbol = icons[name];
  return (
    <StyledIcon>
      <use xlinkHref={`#${iconSymbol.id}`} />
    </StyledIcon>
  );
};

export default Icon;
