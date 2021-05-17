import React from 'react';
import Notes from '../Notes/Notes';
import './App.scss';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>takada.</h1>
      </header>
      <Notes />
    </div>
  );
};

export default App;
