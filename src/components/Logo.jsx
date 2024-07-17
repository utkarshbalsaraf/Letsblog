import React from "react";

function Logo({ className = "", ...props }) {
  return (
    <div
      className={`text-white text-2xl font-bold font-serif ${className} `}
      {...props}
    >
      Let's Blog
    </div>
  );
}

export default Logo;
