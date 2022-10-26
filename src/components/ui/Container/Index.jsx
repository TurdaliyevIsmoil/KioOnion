import React from "react";

const Container = ({ children, className, ...rest }) => {
  return (
    <div
      className={"max-w-6xl px-10 xl:px-0 w-full mx-auto " + className}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
