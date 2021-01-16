import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
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
