const mongoose = require('mongoose')
const dotenv = require("dotenv");

dotenv.config();

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name']
    },
    email: {
      type: String,
      required: [true, 'Please add a email'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please add a password']
    },
    languages: {
      type: String,
      required: [true, 'Please add at least one language you know, or will be learning']
    },
    bio: {
      type: String,
      required: [true, 'Please tell everyone a little about yourself']
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
