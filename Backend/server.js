import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import authRouter from "./routes/authRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import connectingToDB from "./DB/connnectToMongoDb.js";
import { globalErrorHandler } from "./controllers/errorController.js";

const app = express();
dotenv.config({ path: "./.env" });

app.use(cookieParser());
app.use(helmet());
app.use(
  express.json({
    limit: "10kb",
  })
);

app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

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
