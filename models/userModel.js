import { Schema, models, model } from 'mongoose'

const UserSchema = new Schema({
  email: {
    required: true,
    type: String,
  },
  hashedPassword: {
    required: true,
    type: String,
  },
})

export default models.User || model('User', UserSchema)
