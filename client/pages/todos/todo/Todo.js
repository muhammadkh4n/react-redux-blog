import React from 'react';

const Todo = ({ id, text, completed, onDelete }) => {
  return (
    <li>{text} <button onClick={onDelete(id)}>x</button></li>
  );
};

export default Todo;