import initialData from './data';

const getInitialData = () => {
  return initialData;
};

const saveNote = (note) => {
  initialData.push(note);
};

const searchNotes = (notes, keyword) => {
  if (keyword.trim() === '') {
    return notes;
  }
  const lowercaseKeyword = keyword.toLowerCase();
  return notes.filter((note) =>
    note.title.toLowerCase().includes(lowercaseKeyword)
  );
};

const archiveNote = (notes, id) => {
  return notes.map((note) =>
    note.id === id ? { ...note, archived: true } : note
  );
};

const unarchiveNote = (notes, id) => {
  return notes.map((note) =>
    note.id === id ? { ...note, archived: false } : note
  );
};

const searchByTitleAndBody = (searchValue, notes) => {
  const lowercaseSearchValue = searchValue.toLowerCase();
  return notes.filter(
    (note) =>
      note.title.toLowerCase().includes(lowercaseSearchValue) ||
      note.body.toLowerCase().includes(lowercaseSearchValue)
  );
};

export {
  getInitialData,
  saveNote,
  searchNotes,
  archiveNote,
  unarchiveNote,
  searchByTitleAndBody,
};
