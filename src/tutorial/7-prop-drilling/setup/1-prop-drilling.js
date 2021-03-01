import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      //Return all people whose id doesn't match the id passed in (the removed person)
      return people.filter((person) => person.id !== id); //If person id doesn't match the (removed) id passed into the function; return them, if not (that's the id I'm deleting;) then remove it.
    });
  };

  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson}/>
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} removePerson={removePerson} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default PropDrilling;
