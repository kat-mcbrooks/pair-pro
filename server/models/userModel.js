// const mongoose = require('mongoose')
import mongoose from 'mongoose'
import AttachmentPlugin from 'mongoose-file-attachment' // ALWAYS after mongoose

mongoose.Schema.Types.Attachment = AttachmentPlugin.Attachment
mongoose.plugin(AttachmentPlugin)

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
    },
    image: {
      // does this need to change to change? Is the string too long?
      type: String,
      image: Buffer,
      required: [true, 'Please add a profile picture'],
      default: ""
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
