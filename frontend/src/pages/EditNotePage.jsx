import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import NoteForm from '../components/NoteForm';
import noteService from '../api/noteService';

function EditNotePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const notes = await noteService.getNotes();
        const noteToEdit = notes.find((n) => n._id === id);
        if (noteToEdit) {
          setCurrentNote(noteToEdit);
        } else {
          toast.error('Note not found!');
          navigate('/');
        }
      } catch (error) {
        console.error('Failed to fetch note:', error);
        toast.error('Could not load the note for editing.');
        navigate('/');
      }
    };
    fetchNote();
  }, [id, navigate]);

  const handleSave = async (noteData) => {
    try {
      await noteService.updateNote(id, noteData);
      toast.success('Note updated successfully!');
      navigate('/');
    } catch (error) {
      console.error('Failed to update note:', error);
      toast.error('Error: Could not update the note.');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (!currentNote) {
    return (
      <div className="container">
        <h2>Loading Note...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <NoteForm
        onSave={handleSave}
        onCancel={handleCancel}
        currentNote={currentNote}
      />
    </div>
  );
}

export default EditNotePage;