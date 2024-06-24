import express from "express";
import { createMessage, getMessage } from "../controllers/messageController.js";
import { protect } from "../middlewares/protect.js";

const router = express.Router();

router.get("/:id", protect, getMessage);
router.post("/send/:id", protect, createMessage);

export default router;
