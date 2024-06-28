import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import authRouter from "./routes/authRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import userRouter from "./routes/userRoutes.js";
import connectingToDB from "./DB/connnectToMongoDb.js";
import { globalErrorHandler } from "./controllers/errorController.js";
import cors from "cors";
import morgan from "morgan";

const app = express();
dotenv.config({ path: "./.env" });

app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));
app.use(
  express.json({
    limit: "10kb",
  })
);
app.use(cors());

app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/users", userRouter);

app.use("*", (req, res) => {
  res.send(`Can't find the ${req.originalUrl} on this server!`);
});

app.use(globalErrorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  // rootURL = https://localhost:5000
  connectingToDB();
  console.log(`Server running on port ${port}`);
});
