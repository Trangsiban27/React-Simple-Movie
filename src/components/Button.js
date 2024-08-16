import React from "react";

const Button = ({ children, className }) => {
  return (
    <div
      className={`bg-buttonPrimary inline-block py-3 px-10 text-2xl font-semibold rounded-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
