import { useState, useEffect } from "react";
import supabase from "../utils/supabase";

export function useTemplates(isTemplate = true) {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      const { data } = await supabase
        .from("templates")
        .select("id, name")
        .eq("is_template", isTemplate);

      setTemplates(data || []);
    };
    fetchTemplates();
  }, [isTemplate]);

  return templates;
} 