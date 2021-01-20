import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const firstValue = text || 'hello world';
  //If first value is false, then it returns the second value, if true then it returns the intial value of 'text' which is the empty string.
  const secondValue = text && 'hello world'; //If first value (text) is true; then it returns the second value (hellow world), if false then it returns nothing.

  return <>
  <h1>{text || 'john doe'}</h1>
  {/* || is saying "is that <-- false, okay then do this -->"
  && is saying "is that <-- true, okay then do this -->" */}
  {text && <h1>hello world</h1>}
  {!text && <h1>hello world</h1>}
  {/* ^This is the same as the first h1 */}
  </>;
};

export default ShortCircuit;
