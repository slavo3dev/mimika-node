import { supabase } from "../lib/supabaseClient";

export const getCommentsBySourceId = async (sourceId: number) => {
try {
  const { data, error } = await supabase
  .from("comments")
  .select("*")
  .eq("sourceId", sourceId);

  if (error) {
    console.error("Error fetching comments:", error.message);
    throw new Error(error.message);
  }

  return data ?? [];
  
} catch (err) {
  console.error("Unexpected error:", err);
  throw err;
  }
};