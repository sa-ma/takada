import React from 'react';
import dayjs from 'dayjs';
import './Notepad.scss';

type NoteProps = {
  date: string;
  note: string;
  newNote: { date: string; note: string };
  updateNote: (item: { date: string; note: string }) => void;
};

const Notepad = ({ date, note, newNote, updateNote }: NoteProps) => {
  const checkNoteStatus = (noteDate: string): boolean => {
    if (dayjs().isSame(dayjs(noteDate, 'DD-MM-YYYY'), 'day')) {
      return false;
    }
    return true;
  };

  return (
    <div className="notepad">
      <div className="top"></div>
      <div className="date">
        {dayjs(date, 'DD-MM-YYYY').format('ddd DD, MMM YYYY')}
      </div>
      <textarea
        className="paper"
        value={
          dayjs().isSame(dayjs(date, 'DD-MM-YYYY'), 'day') ? newNote.note : note
        }
        onChange={(event) =>
          updateNote({
            date: dayjs().format('YYYY-MM-DD'),
            note: event.target.value,
          })
        }
        disabled={checkNoteStatus(date)}
        placeholder="Click here to start writing."
        autoFocus
      />
    </div>
  );
};

export default Notepad;
