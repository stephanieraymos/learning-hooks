import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: "Item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      showModal: true,
      modalContent: "Please enter a value",
    };
  }
  if(action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      showModal: false,
    }
  }
  if(action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((person) => person.id !== action.payload)

    return{
      ...state,
      people: newPeople
      
    }
  }

  throw new Error("No matching action type.");
};

const defaultState = {
  people: [],
  showModal: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({type:'CLOSE_MODAL'})
  }

  return (
    <>
      {/* Show Modal component when showModal is true */}
      {state.showModal && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
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
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button onClick={() => dispatch({type:'REMOVE_ITEM', payload: person.id})}>Remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
