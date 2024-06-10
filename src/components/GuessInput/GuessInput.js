import React from "react";

function GuessInput({ addNewGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setGuess("");

    addNewGuess({ guess, id: Math.random() });
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        pattern="[A-Z]{5}"
        title={"5 letter word"}
        required={true}
        onChange={(event) => setGuess(event.target.value.toLocaleUpperCase())}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
