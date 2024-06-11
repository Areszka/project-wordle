import React from "react";

function Banner({ children, status, onButtonClick }) {
  return (
    <div className={`${status} banner`}>
      <p>{children}</p>
      <button onClick={onButtonClick}>Start again</button>
    </div>
  );
}

export default Banner;
