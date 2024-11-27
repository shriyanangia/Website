import { supabase } from "./supabase";
import { notFound } from "next/navigation";

/////////////
// GET

export async function getProject(id) {
    const { data, error } = await supabase
      .from("work")
      .select("*")
      .eq("id", id)
      .single();
  
    // For testing
    // await new Promise((res) => setTimeout(res, 1000));
  
    if (error) {
      console.error(error);
      notFound();
    }
  
    return data;
  }

  export const getProjects = async function () {
    const { data, error } = await supabase
      .from("work")
      .select("id, name, description")
      .order("id");
  
    if (error) {
      console.error(error);
      throw new Error("Projects could not be loaded");
    }
  
    return data;
  };
  
  export const getBooks = async function () {
    const { data, error } = await supabase
      .from("books")
      .select("id, bookTitle, isbn, shortStory, read")
      .order("bookTitle");
  
    if (error) {
      console.error(error);
      throw new Error("Books could not be loaded");
    }
  
    return data;
  };


