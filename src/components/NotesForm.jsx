import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { saveNote } from '../utils';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      id: `notes-${+new Date()}`,
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    saveNote(newNote);
    navigate('/');
  };

  return (
    <div>
      <h1>Buat Catatan Baru</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Judul'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <textarea
          placeholder='Isi catatan...'
          value={body}
          onChange={(event) => setBody(event.target.value)}
          required
        />
        <button type='submit'>Simpan</button>
        <Link to='/'>Kembali</Link>
      </form>
    </div>
  );
};

export default NoteForm;
