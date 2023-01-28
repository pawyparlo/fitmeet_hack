import React from "react";

interface SizeWrapperProps {}

const SizeWrapper: React.FC = () => {
  const layoutStyles = {
    height: 800,
    width: 360,
    overflow: "hidden",
  };

  return <div style={layoutStyles}>SizeWrapper</div>;
};

export default SizeWrapper;
