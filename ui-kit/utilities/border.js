const borderMap = {
  all: ({ size, type, color }) => `
      border: ${size} ${type} ${color};
    `,
  horizontal: ({ size, type, color }) => `
      border-top: ${size} ${type} ${color};
      border-bottom: ${size} ${type} ${color};
    `,
  vertical: ({ size, type, color }) => `
      border-left: ${size} ${type} ${color};
      border-right: ${size} ${type} ${color};
    `,
  top: ({ size, type, color }) => `
      border-top: ${size} ${type} ${color};
    `,
  right: ({ size, type, color }) => `
      border-right: ${size} ${type} ${color};
    `,
  bottom: ({ size, type, color }) => `
      border-bottom: ${size} ${type} ${color};
    `,
  left: ({ size, type, color }) => `
      border-left: ${size} ${type} ${color};
    `,
};

const getDefaults = () => ({ color: "#e0e0e0", size: "1px", side: "all", type: "solid" });

const border = ({ border }) => {
  if (!border) {
    return "";
  }

  if (border === true) {
    return borderMap.all(getDefaults());
  }

  if (border in borderMap) {
    return borderMap[border](getDefaults());
  }

  if (typeof border !== "object") {
    return "";
  }

  const { side } = border;
  return (
    side in borderMap &&
    borderMap[side]({
      ...getDefaults(),
      ...border,
    })
  );
};

export default border;
