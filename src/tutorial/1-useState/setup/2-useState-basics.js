import React, { useState } from 'react';
// useState is techincally a function


const UseStateBasics = () => {

  const [text, setText] = useState('random title') //second value is function, useState perameter is default value
  return (
    <React.Fragment>
      <h1>{text}</h1>
    </React.Fragment>
  )
};

export default UseStateBasics;
