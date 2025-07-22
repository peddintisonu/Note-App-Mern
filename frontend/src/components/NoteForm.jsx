import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function NoteForm({ onSave, currentNote, onCancel }) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	useEffect(() => {
		if (currentNote) {
			setTitle(currentNote.title);
			setContent(currentNote.content);
		} else {
			setTitle("");
			setContent("");
		}
	}, [currentNote]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title.trim() || !content.trim()) {
			toast.warn("Please fill in both the title and content fields.");
			return;
		}
		onSave({ ...currentNote, title, content });
		setTitle("");
		setContent("");
	};

	return (
		<form onSubmit={handleSubmit} className="note-form">
			<h2>{currentNote ? "Edit Note" : "Create a New Note"}</h2>
			<input
				type="text"
				placeholder="Note Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				placeholder="Write your note here..."
				value={content}
				onChange={(e) => setContent(e.target.value)}
			></textarea>
			<div className="form-actions">
				<button type="submit">Save Note</button>
				<button type="button" onClick={onCancel}>
					Cancel
				</button>
			</div>
		</form>
	);
}

export default NoteForm;
