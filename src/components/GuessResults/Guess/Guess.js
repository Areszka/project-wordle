import React from "react";
import { range } from "../../../utils";
import { checkGuess } from "../../../game-helpers";

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <Cell
            key={num}
            letter={result ? result[num].letter : ""}
            status={result ? result[num].status : ""}
          />
        );
      })}
    </p>
  );
}

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

export default Guess;
