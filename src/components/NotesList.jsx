import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import initialData from '../data';
import { getInitialData, searchNotes, archiveNote } from '../utils';

const NotesList = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState(
    searchParams.get('keyword') || ''
  );

  const filteredNotes = searchNotes(
    notes.filter((note) => !note.archived),
    searchKeyword
  );

  useEffect(() => {
    setSearchParams({ keyword: searchKeyword });
  }, [searchKeyword, setSearchParams]);

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleArchive = (id) => {
    const updatedNotes = archiveNote(notes, id);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h1>Daftar Catatan</h1>
      <input
        type='text'
        placeholder='Cari catatan...'
        value={searchKeyword}
        onChange={handleSearch}
      />
      {filteredNotes.length === 0 ? (
        <p>Tidak ada catatan</p>
      ) : (
        <ul>
          {filteredNotes.map((note) => (
            <li key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.createdAt}</p>
              <p>{note.body}</p>
              <Link to={`/notes/${note.id}`}>Lihat Detail</Link>
              <button onClick={() => handleDelete(note.id)}>Hapus</button>
              {!note.archived && (
                <button onClick={() => handleArchive(note.id)}>Arsip</button>
              )}
            </li>
          ))}
        </ul>
      )}
      <Link to='/notes/new'>Buat Catatan Baru</Link>
      <Link to='/notes/archived'>Lihat Catatan Terarsip</Link>
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
};

export default NotesList;
