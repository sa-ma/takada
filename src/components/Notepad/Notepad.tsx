import React from 'react';
import './Notepad.scss';

const Notepad = () => {
  return (
    <div className="notepad">
      <div className="top"></div>
      <div className="paper" contentEditable="true">
        Click here to start writing.
      </div>
    </div>
  );
};

export default Notepad;
