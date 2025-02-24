// src/routes/porchRoutes.ts
import express from "express";
import { getPorch } from "../controllers/porchController";

const router = express.Router();

// Define the /porch route
router.get("/porch", getPorch);

export default router;