import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name) {
      showModal(true)
      setPeople([...people, {id:new Date().getTime().toString(), name }])
      setName = ''
    } else {
      showModal(true)
    }
  }

  return (
    <>
      {/* Show Modal component when showModal is true */}
      {setShowModal && <Modal />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <button type="submit">Add person</button>
      </form>
      {people.map((person) => {
        return <div key={person.id}>
          <h4>{person.name}</h4>
        </div>
      })}
    </>
  );
};

export default Index;
