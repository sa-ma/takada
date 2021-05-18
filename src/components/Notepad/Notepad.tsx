import React from 'react';
import dayjs from 'dayjs';
import './Notepad.scss';

type NoteProps = {
  date: string;
  note: string;
};
const Notepad = ({ date, note }: NoteProps) => {
  const [text, setText] = React.useState('');

  // check if date is current
  const checkNoteStatus = (noteDate: string): boolean => {
    if (dayjs().isSame(dayjs(date, 'DD-MM-YYYY'), 'day')) {
      return false;
    }
    return true;
  };

  console.log(checkNoteStatus(date));
  React.useEffect(() => {
    setText(note || '');
  }, [note]);

  return (
    <div className="notepad">
      <div className="top"></div>
      <div className="date">
        {dayjs(date, 'DD-MM-YYYY').format('ddd DD, MMM YYYY')}
      </div>
      <textarea
        className="paper"
        value={text}
        onChange={(event) => setText(event.target.value)}
        disabled={checkNoteStatus(date)}
        placeholder="Click here to start writing."
      />
    </div>
  );
};

export default Notepad;
