import React from "react";

const Link = ({ link, children }) => {
  return (
    <li className="font-medium text-xl lg:text-base hover:text-orange">
      <a href={`${link}`}>{children}</a>
    </li>
  );
};

export default Link;
