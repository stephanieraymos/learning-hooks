import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'stephanie', 
    age: 28, 
    message: 'Random message'
  })
  return(
    <>
      <h1>Hello, {person.name}!</h1>
      <h1>You are {person.age} years old.</h1>
      <h1>{person.message}</h1>
    </>
  )
};

export default UseStateObject;
