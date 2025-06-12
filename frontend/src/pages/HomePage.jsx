import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import noteService from '../api/noteService';
import Note from '../components/Note';

/**
 * A custom component rendered inside a toast for delete confirmation.
 */
const ConfirmationToast = ({ closeToast, onConfirm, id }) => (
  <div>
    <p>Are you sure you want to delete this note?</p>
    <button
      className="toast-button-confirm"
      onClick={() => {
        onConfirm(id);
        closeToast();
      }}
    >
      Yes, Delete
    </button>
    <button className="toast-button-cancel" onClick={closeToast}>
      Cancel
    </button>
  </div>
);

function HomePage() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const fetchedNotes = await noteService.getNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Error fetching notes:', error);
      toast.error('Could not load notes.');
    } finally {
      setIsLoading(false);
    }
  };

  const performDelete = async (id) => {
    try {
      await noteService.deleteNote(id);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      toast.success('Note deleted.');
    } catch (error) {
      console.error('Error deleting note:', error);
      toast.error('Could not delete note.');
    }
  };

  const handleDeleteConfirmation = (id) => {
    toast.warn(<ConfirmationToast onConfirm={performDelete} id={id} />, {
      position: 'top-center',
      autoClose: false,
      closeOnClick: false,
      draggable: false,
    });
  };

  if (isLoading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Your Notes</h1>
      {notes.length > 0 ? (
        <div className="notes-list">
          {notes.map((note) => (
            <Note
              key={note._id}
              note={note}
              onDelete={handleDeleteConfirmation}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>You haven't created any notes yet.</p>
          <Link to="/create" className="navbar-button">
            Create Your First Note
          </Link>
        </div>
      )}
    </div>
  );
}

export default HomePage;