import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    //reponse it waiting for data to be fetched from the url declared on line 3
    const response = await fetch(url);
    
    const users = await response.json();
    console.log(users);
  }
  //USE EFFECT CAN'T BE ASYNC: IT CAN'T RETURN A PROMISE,and async returns a promise. This is why I created a seperate fetch function above to call inside of useEffect; so that it could be async.
  // This function could have been set up INSIDE useEffect, or as a serpate function as I have done.
  useEffect(() => {
    
  })
  return (
    <>
      <h3>github users</h3>
    </>
  );
};

export default UseEffectFetchData;
