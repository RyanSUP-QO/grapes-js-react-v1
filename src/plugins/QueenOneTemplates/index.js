import supabase from "../../utils/supabase";
import panels from "./panels";

export default function QueenOneTemplates(editor, opts) {
  editor.Storage.add("supabase", {
    async store(data) {
      console.log(data);
    },
    async load() {
      // Needs to return the json data of the template
      console.log("Loading template....");
      let { data: template, error } = await supabase
        .from("templates")
        .select("*")
        .eq("id", opts.id);
      if (template[0] || error) {
        return template[0].data;
      } else {
        console.log(
          "No template found or error: show blank canvas and alert or something"
        );
      }
    },
  });

  panels(editor);
  editor.on("load", (editor) => {
    console.log("all storages", editor.Storage.getStorages());
  });
}
