import React from "react";

const Button = ({
  primary = false,
  children,
  className,
  onClick = () => {},
  ...rest
}) => {
  return (
    <button
      className={`rounded border border-white px-8 py-4 text-base text-white font-bold cursor-pointer ${
        primary ? "rounded-md" : "hover:bg-orange text-white"
      } ${className}`}
      onClick={() => onClick(true)}
      style={{
        background: primary
          ? "linear-gradient(180deg, rgba(255, 116, 0, 0.2) 0%, rgba(255, 0, 0, 0.2) 100%), #FF7400"
          : "transparent",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
