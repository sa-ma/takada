import React from 'react';
import Notepad from '../Notepad/Notepad';
import './Notes.scss';

const Notes = () => {
  return (
    <div className="notes">
      <Notepad />
      <Notepad />
    </div>
  );
};

export default Notes;
