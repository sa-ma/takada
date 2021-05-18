import React from 'react';
import Notepad from '../Notepad/Notepad';
import './Notes.scss';

const data = [
  {
    date: '2021-05-18',
    note: 'Praesent blandit laoreet nibh. Nunc nonummy metus. Vestibulum fringilla pede sit amet augue.',
  },
  {
    date: '2021-05-17',
    note: 'Praesent blandit laoreet nibh. Nunc nonummy metus. Vestibulum fringilla pede sit amet augue.',
  },
  {
    date: '2021-05-16',
    note: 'Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.',
  },
  {
    date: '2021-05-15',
    note: 'Etiam feugiat lorem non metus.',
  },
];

const Notes = () => {
  return (
    <div className="notes">
      {data &&
        data.map((item) => (
          <Notepad key={item.date} date={item.date} note={item.note} />
        ))}
    </div>
  );
};

export default Notes;
