import { useState, useEffect } from "react";
import supabase from "../utils/supabase";

export function useStudioSDKTemplates() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      const { data, error } = await supabase
        .from("studio-sdk-templates")
        .select("id, name, author");

      if (error) {
        console.error("Error fetching from supabase studio-sdk-templates");
        return;
      }
      setTemplates(data || []);
    };
    fetchTemplates();
  }, []);

  return templates;
}
