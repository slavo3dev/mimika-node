import express from "express";
import { getComments } from "../controllers/commentsController";

const router = express.Router();

router.get("/comments", getComments);

export default router;