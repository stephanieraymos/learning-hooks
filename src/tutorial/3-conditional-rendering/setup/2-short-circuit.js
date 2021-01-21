import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)

  // const firstValue = text || 'hello world';
  // //If first value is false, then it returns the second value, if true then it returns the intial value of 'text' which is the empty string.
  // const secondValue = text && 'hello world'; //If first value (text) is true; then it returns the second value (hellow world), if false then it returns nothing.

  return <>
    <h1>{text || 'john doe'}</h1>
    {/* || is saying "is that <-- false, okay then do this -->"
  && is saying "is that <-- true, okay then do this -->" */}
    <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button>
    {/* !isError is the opposite of isError, so every time it is clicked it is setting isError to the opposite of what it currently is; toggle. */}
    {isError && <h1>Error...</h1>}
    {isError ? <p>There is an error</p> : <div>
      <h2>There is no error</h2>
    </div>}
  </>;
};

export default ShortCircuit;
