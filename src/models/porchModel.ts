import { supabase } from "../lib/supabaseClient";

export const getPorchData = async () => {
  const { data, error } = await supabase.from("porch").select("*");
    if (error) {
      throw new Error(error.message);
    }
  return data;
}