import mongoose from "mongoose";
import brypt from "bcryptjs";

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Name is missing"],
  },
  username: {
    type: String,
    required: [true, "User name is missing"],
    unique: [true, "User name already exists"],
    validate: {
      validator: function (value) {
        return !/\s/.test(value);
      },
      message: (props) =>
        `${props.value} conatins spaces, which is not allowed`,
    },
  },
  password: {
    type: String,
    required: [true, "password is missing"],
  },
  profilePic: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: [true, "Gender is missing"],
  },
});

userSchema.pre("save", async function (next) {
  // only  run this if password is actually changed
  if (!this.isModified("password")) return next();

  // encrypt the password
  this.password = await brypt.hash(this.password, 12);
});

export default mongoose.model("User", userSchema);
