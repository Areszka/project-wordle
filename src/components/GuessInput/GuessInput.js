import React from "react";

function GuessInput({ handleNewGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setGuess("");

    handleNewGuess(guess);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        pattern="[A-Z]{5}"
        title={"5 letter word"}
        maxLength={5}
        required={true}
        onChange={(event) => setGuess(event.target.value.toLocaleUpperCase())}
        id="guess-input"
        type="text"
        autoFocus
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
