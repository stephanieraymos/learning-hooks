import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('resize', checkSize)
    return () => {
      //Whatever is in here will be invokes once we exit. Clean up function is very important when setting up side effects to avoid issues. In cases where the component will always be visible on the screen it is ok to use the empty array as second argument as seen below.
      
      console.log('clean up')
      window.removeEventListener('resize', checkSize)
    }
  }, []);
  console.log('render')
  return(
    <>
    <h1>Window</h1>
    <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
