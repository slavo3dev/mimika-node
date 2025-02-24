import express, { Express } from "express";
import dotenv from "dotenv";
import porchRoutes from "./routes/porchRoutes";
import comentsRoutes from "./routes/commentsRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 9000;

app.use("/api", porchRoutes);

app.use("/api", comentsRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

