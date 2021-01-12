import React, { useState } from 'react';
// useState is techincally a function


const UseStateBasics = () => {

  const [text, setText] = useState('random title') //second value is function, useState perameter is default value

  const handleClick = () => {
    setText('random text changed');
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>Change Title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
