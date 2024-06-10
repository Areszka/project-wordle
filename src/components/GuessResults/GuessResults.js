import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ guess, id }) => {
        return (
          <p className="guess" key={id}>
            {guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
