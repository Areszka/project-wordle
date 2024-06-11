import React from "react";
import Banner from "../Banner";

function LostBanner({ answer, resetGame }) {
  return (
    <Banner status="sad" onButtonClick={resetGame}>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </Banner>
  );
}

export default LostBanner;
