import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setGuess("");

    console.log({ guess });
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        pattern="[A-Z]{5}"
        maxLength={5}
        minLength={5}
        required={true}
        onChange={(event) => setGuess(event.target.value.toLocaleUpperCase())}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
