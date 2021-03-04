import React from 'react';
import './style.css';

const Question = ({ name }) => {
  return (
    <div className="quesTile">
      {name}
    </div>
  )
}

export default Question;
