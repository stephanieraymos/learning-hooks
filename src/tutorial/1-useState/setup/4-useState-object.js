import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'stephanie', 
    age: 28, 
    message: 'Random message'
  });

  const changeMessage = () => {
    setPerson({
      ...person,
      message: 'Change message only, keep the name and age the same'
  });
  }
  return(
    <>
      <h1>Hello, {person.name}!</h1>
      <h1>You are {person.age} years old.</h1>
      <h1>{person.message}</h1>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  )
};

export default UseStateObject;
