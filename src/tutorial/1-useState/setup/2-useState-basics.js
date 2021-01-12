import React, { useState } from 'react';
// useState is techincally a function


const UseStateBasics = () => {

  const [text, setText] = useState('random title') //second value is function, useState perameter is default value
  return <h2>useState basic example</h2>;
};

export default UseStateBasics;
