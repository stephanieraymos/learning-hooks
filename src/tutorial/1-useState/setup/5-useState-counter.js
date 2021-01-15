import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
 
  const reset = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1) This way is async so it kept the value that was originally there (0) and would only increase one no matter how many times clicked in 2 seconds, this is because it was only increasing +1 from 0.
      setValue((prevState) => {
        return prevState + 1; 
      }) //This is the fix, calling the function within the function; before the timeout. Here we are getting the current state/value before the update (the value previous to the update.)
    }, 2000); //2 seconds
  }

  return(
    <>

    <section style={{margin: '4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value -1)}>Decrease</button>
      <button className="btn" onClick={reset}>Reset</button>
      <button className="btn" onClick={() => setValue(value +1)}>Increase</button>
    </section>
    
    <section style={{margin: '4rem 0'}}>
      <h2>Complex Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={complexIncrease}>Increase Later</button>
    </section>

    </>
  )
};

export default UseStateCounter;
