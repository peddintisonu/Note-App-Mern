const mongoose = require('mongoose');

const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    content: {
      type: String,
      required: [true, 'Please add content'],
    },
  },
  {
    timestamps: true, // Automatic createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('Note', noteSchema);