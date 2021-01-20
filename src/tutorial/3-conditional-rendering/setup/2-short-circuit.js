import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const firstValue = text || 'hello world';
  //If first value is false, then it returns the second value, if true then it returns the intial value of 'text' which is the empty string.
  const secondValue = text && 'hello world'; //If first value (text) is true; then it returns the second value (hellow world), if false then it returns the first value of string; empty string.

  return <>
  <h1>{firstValue}</h1>
  <h1>{secondValue}</h1>
  </>;
};

export default ShortCircuit;
