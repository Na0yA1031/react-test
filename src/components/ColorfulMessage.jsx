import React from "react";

const ColorfulMessage = (props) => {
  console.log(props);
  const { color, children } = props;
  console.log(color, children);
  // CSSをオブジェクトとして変数で定義することも可能

  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return (
    <>
      <p style={contentStyle}>{children}</p>
    </>
  );
};

export default ColorfulMessage;
