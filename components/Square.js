import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button className="square border " onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
