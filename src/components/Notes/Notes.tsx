import { useState, useEffect } from 'react';
import Notepad from '../Notepad/Notepad';
import dayjs from 'dayjs';
import './Notes.scss';

// Seed data to local storage for testing
// const data = [
//   {
//     date: '2021-05-18',
//     note: 'Praesent blandit laoreet nibh. Nunc nonummy metus. Vestibulum fringilla pede sit amet augue.',
//   },
//   {
//     date: '2021-05-17',
//     note: 'Praesent blandit laoreet nibh. Nunc nonummy metus. Vestibulum fringilla pede sit amet augue.',
//   },
//   {
//     date: '2021-05-16',
//     note: 'Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.',
//   },
//   {
//     date: '2021-05-15',
//     note: 'Etiam feugiat lorem non metus.',
//   },
// ];

interface NOTETYPE {
  date: string;
  note: string;
}

const Notes = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [notes, setNotes] = useState<NOTETYPE[]>([]);
  const [newNote, setNewNote] = useState<NOTETYPE>({
    date: dayjs().format('YYYY-MM-DD'),
    note: '',
  });

  useEffect(() => {
    // localStorage.setItem('notes', JSON.stringify(data));
    const fetchNotes = (): void => {
      setIsLoading(true);
      const getNotes: string | null = localStorage.getItem('notes');
      if (getNotes) {
        setNotes(JSON.parse(getNotes));
      }
      setIsLoading(false);
      return;
    };

    fetchNotes();
  }, []);

  useEffect(() => {
    const createNewNoteDaily = (): void => {
      const getNotes: string | null = localStorage.getItem('notes');
      if (!getNotes) {
        setNotes([newNote]);
        return;
      }

      const filteredNotes: Array<NOTETYPE> =
        getNotes &&
        JSON.parse(getNotes).filter((item: NOTETYPE) =>
          dayjs().isSame(dayjs(item.date, 'DD-MM-YYYY'), 'day')
        );
      if (!filteredNotes.length) {
        setNotes((prevNotes): NOTETYPE[] => [newNote, ...prevNotes]);
        return;
      }
      setNewNote(filteredNotes[0]);
      return;
    };

    createNewNoteDaily();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // save notes to local storage every 5 seconds
    const timer = setTimeout(() => {
      syncLocalStorage();
    }, 5000);
    return () => clearTimeout(timer);
  });

  const syncLocalStorage = (): void => {
    const currentNoteIndex: number = notes.findIndex((item) =>
      dayjs().isSame(dayjs(item.date, 'DD-MM-YYYY'), 'day')
    );
    if (currentNoteIndex !== -1) {
      setNotes((prevNotes) => {
        prevNotes[currentNoteIndex] = newNote;
        return prevNotes;
      });
      localStorage.setItem('notes', JSON.stringify(notes));
    }
    console.log('saved', notes);
    return;
  };

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="notes">
      {notes &&
        notes.map((item: NOTETYPE) => (
          <Notepad
            key={item.date}
            date={item.date}
            note={item.note}
            newNote={newNote}
            updateNote={setNewNote}
          />
        ))}
    </div>
  );
};

export default Notes;
