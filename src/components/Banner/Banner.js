import React from "react";

function Banner({ children, status }) {
  return (
    <div className={`${status} banner`}>
      <p>{children}</p>
    </div>
  );
}

export default Banner;
