import React from 'react';

const ErrorExample = () => {
  let title = "Title name"
  const handleClick = () => {
    title = "Hello People"
  }
  
  return <React.Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>
      Change title
    </button>
  </React.Fragment>
  return <h2>useState error example</h2>;
};

export default ErrorExample;
