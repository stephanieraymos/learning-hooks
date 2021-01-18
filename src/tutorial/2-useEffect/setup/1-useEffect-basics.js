import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0)
  useEffect(() => {

    console.log('call useEffect')
    if(value >= 1) {
    document.title = `New Messages(${value})`
    }
  }, [value]) //Adding value as a dependency will cause useEffect to rerender ONLY when "value" is changed. If array is left blank, useEffect will only run on the initial render and will not rerender.

  useEffect(() => {
    console.log('Hello')
  }, [])

  console.log('render component')

  return (
  <>
    <h1>{value}</h1>
    <button className='btn' onClick={() =>
      setValue(value + 1)
    }>Click Me</button>
  </>
    );
};

export default UseEffectBasics;
