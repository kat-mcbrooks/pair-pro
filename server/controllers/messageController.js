const asyncHandler = require('express-async-handler');
const Message = require('../models/messageModel')

const postMessage = asyncHandler(async(req, res) => {
  const newMessage = new Message(req.body);

  const savedMessage = await newMessage.save();

  res.status(200).json(savedMessage)
})

const getMessages = asyncHandler(async(req, res) => {
  const messages = await Messages.find({
    conversationId: req.params.conversationId,
  })

  res.status(200).json(messages)
})

module.exports = {
  postMessage,
  getMessages
}
