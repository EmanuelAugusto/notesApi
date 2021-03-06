const mongoose = require('mongoose')
const Schema = mongoose.Schema

var NoteSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
  },
  noteHtml: {
    type: String,
  },
  erased: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Note', NoteSchema)
