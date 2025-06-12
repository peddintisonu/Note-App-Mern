import React from 'react';
import { Link } from 'react-router-dom';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

function Note({ note, onDelete }) {
  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(note._id);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
  };

  return (
    <Link to={`/edit/${note._id}`} className="note-card-link">
      <div className="note">
        <h3>{note.title}</h3>
        <p>
          {note.content.substring(0, 150)}
          {note.content.length > 150 ? '...' : ''}
        </p>

        <div className="note-footer">
          <small>{new Date(note.createdAt).toLocaleDateString()}</small>

          <div className="note-actions">
            <span
              className="icon-button"
              onClick={handleEdit}
              aria-label="Edit Note"
            >
              <FaPencilAlt />
            </span>

            <button
              onClick={handleDelete}
              className="icon-button"
              aria-label="Delete Note"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Note;