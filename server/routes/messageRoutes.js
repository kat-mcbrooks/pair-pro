const express = require('express')
const messageRouter = express.Router()

const {
  postMessage,
  getMessages
} = require('../controllers/messageController')

messageRouter.post('/', postMessage)
messageRouter.get('/:conversationId', getMessages)

module.exports = messageRouter
