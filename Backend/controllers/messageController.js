import conversationModel from "../models/conversationModel.js";
import messageModel from "../models/messageModel.js";
import catchAsync from "../utils/catchAsync.js";

export const createMessage = catchAsync(async (req, res, next) => {
  const { message } = req.body;
  const { id: receiverId } = req.params;
  const senderId = req.user._id;

  let conversation = await conversationModel.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  // create a new conversation
  if (!conversation) {
    conversation = await conversationModel.create({
      participants: [senderId, receiverId],
    });
  }

  // create new message
  const newMessage = await messageModel.create({
    senderId,
    receiverId,
    message,
  });

  // add new message in conversation
  if (newMessage) {
    conversation.messages.push(newMessage._id);
    await conversation.save();

    res.status(201).json({
      status: "success",
      newMessage,
    });
  }
});

export const getMessage = catchAsync(async (req, res, next) => {
  const { id: userToChatId } = req.params;
  const senderId = req.user._id;

  const conversation = await conversationModel
    .findOne({
      participants: { $all: [senderId, userToChatId] },
    })
    .populate("messages");

  let messages;
  if (!conversation) {
    messages = [];
  } else {
    messages = conversation.messages;
  }

  res.status(200).json({
    status: "success",
    messages,
  });
});
