import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfGuesses, resetGame }) {
  return (
    <Banner status="happy" onButtonClick={resetGame}>
      <strong>Congratulations!</strong> Got it in
      <strong>
        {" "}
        {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
      </strong>
      .
    </Banner>
  );
}

export default WonBanner;
