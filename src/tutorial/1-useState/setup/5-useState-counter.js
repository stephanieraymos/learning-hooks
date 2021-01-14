import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  return(
    <>
    <section style={{margin: '4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
    </section>
    </>
  )
};

export default UseStateCounter;
