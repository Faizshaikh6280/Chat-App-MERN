import express from "express";
import { createMessage, getMessage } from "../controllers/messageController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, createMessage);

export default router;
