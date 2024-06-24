import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
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
      minlength: [6, "password must be at least 6 characters long"],
    },
    profilePic: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female"],
        message: "{VALUE} is not a valid gender",
      },
      required: [true, "Gender is missing"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  // only  run this if password is actually changed
  if (!this.isModified("password")) return next();

  // encrypt the password
  this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.comparePassword = async (
  candidatePassword,
  userPassword
) => {
  const isPasswordMatched = await bcrypt.compare(
    candidatePassword,
    userPassword
  );
  return isPasswordMatched;
};

export default mongoose.model("User", userSchema);
