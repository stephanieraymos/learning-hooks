import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {
  if(action.type === 'TESTING') {
    return {...state, people:data, isModalOpen:true, modalContent: "Item added"}
  }
  return state; //Always return state in reducer or app will not work
}

const defaultState = {
  people: [],
  showModal: false,
  modalContent: ''
}

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
     dispatch({type: 'TESTING'})
    } else {
    }
  };

  return (
    <>
      {/* Show Modal component when showModal is true */}
      {state.showModal && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add person</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
