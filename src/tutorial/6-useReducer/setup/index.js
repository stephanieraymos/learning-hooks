import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Show Modal component when showModal is true */}
      {showModal && <Modal />}
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" />
        </div>
      </form>
    </>
  );
};

export default Index;
