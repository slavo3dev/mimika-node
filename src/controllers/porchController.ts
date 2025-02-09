// src/controllers/porchController.ts
import { Request, Response } from "express";
import { getPorchData } from "../models/porchModel";

export const getPorch = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await getPorchData();
    res.send(data);
  } catch (error) {
    console.error("Error fetching porch data:", error);
    res.status(500).send({ error: (error as Error).message });
  }
};