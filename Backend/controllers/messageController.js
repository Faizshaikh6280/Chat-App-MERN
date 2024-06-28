import conversationModel from "../models/conversationModel.js";
import messageModel from "../models/messageModel.js";
import userModel from "../models/userModel.js";
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

export const getLastMessages = catchAsync(async (req, res, next) => {
  const logedInId = req.user._id;

  const otherUsers = await userModel.find({
    _id: { $ne: logedInId },
  });

  const allConversationsPromise = otherUsers.map((el) =>
    conversationModel
      .findOne({
        participants: { $all: [logedInId, el._id] },
      })
      .populate("messages")
  );

  const allConversations = await Promise.all(allConversationsPromise);
  const lastMessages = allConversations.map((el) => {
    const lastMessage = el?.messages[el.messages.length - 1] || "";
    const isSendByLogedInUser = lastMessage?.senderId?.equals(logedInId);

    return [lastMessage.message, isSendByLogedInUser];
  });

  res.status(200).json({
    status: "success",
    lastMessages,
  });
});
