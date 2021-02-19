// reducer function

export const reducer = (state, action) => {
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
  