import React from "react";

function App() {
  /* Contants used in this component */
  const DOLLAR_TO_EURO_RATIO = 0.92;
  const DOLLAR_TO_DONG_RATIO = 24560;

  let valueDollars = 15;

  // Convert the given value in dollars to a value in euro
  function dollarToEuro(valueInDollars) {
    return valueInDollars * DOLLAR_TO_EURO_RATIO;
  }

  // Convert the given value in dollars to a value in dong
  function dollarToDong(valueInDollars) {
    return DOLLAR_TO_DONG_RATIO * valueInDollars;
  }

  const DONG = dollarToDong(valueDollars);
  const EURO = dollarToEuro(valueDollars);

  return (
    <main>
      <h1>Device conversions</h1>
      <p>
        <label>Current value in dollars</label>
        <input disabled value={valueDollars} />
        <label>Value in Dong</label>
        <input disabled value={DONG} />
        <label>Value in Euro</label>
        <input disabled value={EURO} />
      </p>
    </main>
  );
}

export default App;
