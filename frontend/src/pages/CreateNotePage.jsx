import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import NoteForm from '../components/NoteForm';
import noteService from '../api/noteService';

function CreateNotePage() {
  const navigate = useNavigate();

  const handleSave = async (noteData) => {
    try {
      await noteService.createNote(noteData);
      toast.success('Note created successfully!');
      navigate('/');
    } catch (error) {
      console.error('Failed to create note:', error);
      toast.error('Error: Could not create the note.');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <NoteForm onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}

export default CreateNotePage;