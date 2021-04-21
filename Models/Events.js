const mongoose = require('mongoose')
const Schema = mongoose.Schema

var EventSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  eventDate: {
    type: String,
    required: "date of event is required"
  },
  eventName: {
    type: String,
  },
  eventDescription:{
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

module.exports = mongoose.model('Event', EventSchema)
