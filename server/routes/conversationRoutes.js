const express = require('express')
const conversationRouter = express.Router()

const {
  postConversation,
  getConversations,
  findConversation
} = require('../controllers/conversationController')

conversationRouter.post('/', postConversation)
conversationRouter.get('/:userId', getConversations)
conversationRouter.get('/find/:firstUserId/:secondUserId', findConversation)

module.exports = conversationRouter
