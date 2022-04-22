import { Schema, models, model } from 'mongoose'

const CommentSchema = new Schema({
  comment: {
    required: true,
    type: String,
  },
  userName: {
    required: true,
    type: String,
  },
  userImage: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String,
  },
  path: {
    required: true,
    type: String,
  },
  createdAt: Date,
  replayId: String | Boolean,
})

export default models.Comment || model('Comment', CommentSchema)
