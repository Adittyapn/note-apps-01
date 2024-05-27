import { Routes, Route } from 'react-router-dom';
import NotesList from './components/NotesList';
import NoteDetail from './components/NotesDetail';
import NoteForm from './components/NotesForm';
import ArchivedNotesList from './components/ArchivedNotesList';
import NotFound from './components/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<NotesList />} />
      <Route path='/notes/:id' element={<NoteDetail />} />
      <Route path='/notes/new' element={<NoteForm />} />
      <Route path='/notes/archived' element={<ArchivedNotesList />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Router;
