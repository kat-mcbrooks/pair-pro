const asyncHandler = require("express-async-handler");
const Conversation = require("../models/conversationModel");

const postConversation = asyncHandler(async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId]
  });

  const savedConversation = await newConversation.save();

  res.status(200).json(savedConversation);
});

const getConversations = asyncHandler(async (req, res) => {
  const conversations = await Conversation.find({
    members: { $in: [req.params.userId] },
  });

  res.status(200).json(conversations);
});

const findConversation = asyncHandler(async (req, res) => {
  const conversation = await Conversation.findOne({
    members: { $all: [req.params.firstUserId, req.params.secondUserId] },
  });
  res.status(200).json(conversation);
});

module.exports = {
  postConversation,
  getConversations,
  findConversation,
};
