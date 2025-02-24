import { Request, Response } from "express";
import { getCommentsBySourceId } from "../models/getCommentsModel";

export const getComments = async (req: Request, res: Response): Promise<void> => {
  try {
    const sourceId = Number(req.query.sourceId);
    const data = await getCommentsBySourceId(sourceId);
    res.send(data);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).send({ error: (error as Error).message });
  }
};