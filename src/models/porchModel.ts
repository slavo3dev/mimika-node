import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export const getPorchData = async () => {
  const { data, error } = await supabase.from("porch").select("*");
    if (error) {
      throw new Error(error.message);
    }
  return data;
}