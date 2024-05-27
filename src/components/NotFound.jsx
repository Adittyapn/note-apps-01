import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
      <Link to="/">Kembali ke Halaman Utama</Link>
    </div>
  );
};

export default NotFound;