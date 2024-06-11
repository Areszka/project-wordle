import React from "react";
import { range } from "../../utils";

function Keyboard({ letters }) {
  return (
    <div className="keyboard">
      <Row range={range(10)} letters={letters}></Row>
      <Row range={range(10, 19)} letters={letters}></Row>
      <Row range={range(19, 26)} letters={letters}></Row>
    </div>
  );
}

function Row({ letters, range }) {
  return (
    <div className="keyboard-row">
      {range.map((num) => (
        <p
          key={letters[num].letter}
          className={`keyboard-cell ${letters[num].status ?? ""}`}
        >
          {letters[num].letter}
        </p>
      ))}
    </div>
  );
}

export default Keyboard;
