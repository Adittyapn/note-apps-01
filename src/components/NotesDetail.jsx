import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import initialData from '../data';
import { getInitialData } from '../utils';

const NoteDetail = () => {
  const { id } = useParams();
  const notes = getInitialData();
  const note = notes.find((note) => note.id === id);

  if (!note) {
    return <p>Catatan tidak ditemukan</p>;
  }

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.createdAt}</p>
      <p>{note.body}</p>
      <Link to="/">Kembali ke Daftar Catatan</Link>
    </div>
  );
};

NoteDetail.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
};

export default NoteDetail;