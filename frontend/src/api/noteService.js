import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}`;

const getNotes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createNote = async (noteData) => {
  const response = await axios.post(API_URL, noteData);
  return response.data;
};

const updateNote = async (id, noteData) => {
  const response = await axios.put(API_URL + id, noteData);
  return response.data;
};

const deleteNote = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

const noteService = {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};

export default noteService;