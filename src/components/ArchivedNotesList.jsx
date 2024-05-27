import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import initialData from '../data';
import { searchByTitleAndBody } from '../utils';

const ArchivedNotesList = () => {
  const [notes, setNotes] = useState(
    initialData.filter((note) => note.archived)
  );

  useEffect(() => {
    const archivedNotes = initialData.filter((note) => note.archived);
    setNotes(archivedNotes);
  }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredNotes = searchByTitleAndBody(
      searchValue,
      initialData.filter((note) => note.archived)
    );
    setNotes(filteredNotes);
  };

  const handleUnarchive = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: false } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h1>Catatan Terarsip</h1>
      <input type='text' placeholder='Cari...' onChange={handleSearch} />
      {notes.length === 0 ? (
        <p>Arsip kosong</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.createdAt}</p>
              <p>{note.body}</p>
              <Link to={`/notes/${note.id}`}>Lihat Detail</Link>
              <button onClick={() => handleUnarchive(note.id)}>
                Batal Arsip
              </button>
            </li>
          ))}
        </ul>
      )}
      <Link to='/'>Kembali ke Daftar Catatan</Link>
    </div>
  );
};

export default ArchivedNotesList;
