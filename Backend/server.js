import path from "path";
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
import { app, server } from "./socket/socket.js";

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

const __dirname = path.resolve();

// using this we will access our frontend from the server
app.use(express.static(path.join(__dirname, "/Frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

app.use("*", (req, res) => {
  res.send(`Can't find the ${req.originalUrl} on this server!`);
});

app.use(globalErrorHandler);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  // rootURL = https://localhost:5000
  connectingToDB();
  console.log(`Server running on port ${port}`);
});
