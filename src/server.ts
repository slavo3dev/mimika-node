import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { createClient } from '@supabase/supabase-js'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 9000;
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl,supabaseKey);

app.get("/porch", async (req: Request, res: Response): Promise<void> => {
   
  try {
    const { data, error } = await supabase.from('porch').select('*');
    if (error) {
      res.status(500).send({ error: error.message });
      return;
    }
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: (error as Error).message });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});