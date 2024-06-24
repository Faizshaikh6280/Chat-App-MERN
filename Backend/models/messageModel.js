import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Sender Id is required"],
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Reciever Id is required"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
  },
  {
    // createdAt, updatedAt
    timestamps: true,
  }
);

export default mongoose.model("Message", messageSchema);
