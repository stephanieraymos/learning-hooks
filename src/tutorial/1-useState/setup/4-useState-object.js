import React, { useState } from 'react';

 {/* OBJECT EXAMPLE: */}
const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'stephanie', 
    age: 28, 
    message: 'Random message'
  });

  {/* NON-OBJECT EXAMPLE: */}
  const [name, setName] = useState('Stephanie')
  const [age, setAge] = useState(28)
  const [message, setMessage] = useState('Message')

  // BUTTON FUNCTION FOR OBJECT
  // const changeMessage = () => {
  //   setPerson({
  //     ...person,
  //     message: 'Change message only, keep the name and age the same'
  // });
  // }

  // BUTTON FUNCTION FOR NON OBJECT
  const changeMessage = () => {
    setMessage('New message')
  }
  return(
    <>

      {/* OBJECT EXAMPLE: */}
      <h1>Hello, {person.name}!</h1>
      <h1>You are {person.age} years old.</h1>
      <h1>{person.message}</h1>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>

      {/* NON-OBJECT EXAMPLE: */}
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
    </>
  )
};

export default UseStateObject;
