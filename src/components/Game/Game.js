import React from "react";

import { sample } from "../../utils";
import { WORDS, LETTERS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import LostBanner from "../LostBanner";
import WonBanner from "../WonBanner";
import Keyboard from "../Keyboard";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("inProgress");
  const [keyboardLetters, setKeyboardLetters] = React.useState(LETTERS);

  function handleNewGuess(guess) {
    // add new guess to previous guesses
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    // update keyboard letters status
    const result = checkGuess(guess, answer);
    let nextKeyboardLetters = [...keyboardLetters];
    nextKeyboardLetters = nextKeyboardLetters.map((keyboardLetter) => {
      let newLetter = keyboardLetter;
      result.forEach((value) => {
        if (keyboardLetter.letter === value.letter) {
          if (newLetter.status === "correct") {
            return newLetter;
          } else if (
            newLetter.status === "misplaced" &&
            value.status === "incorrect"
          ) {
          } else {
            newLetter = value;
          }
        }
      });
      return newLetter;
    });
    setKeyboardLetters(nextKeyboardLetters);

    // update game status
    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleNewGuess={handleNewGuess}
        disabled={gameStatus !== "inProgress"}
      />
      <Keyboard letters={keyboardLetters} />

      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
