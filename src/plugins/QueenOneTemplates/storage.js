import templates from "./templates";
import supabase from "../../utils/supabase";

export default function (editor, opts) {
  editor.Storage.add("supabase", {
    async store(projectJSONData) {
      console.log("Saving template....", projectJSONData);
      const { data, error } = await supabase
        .from("templates")
        .upsert({
          id: opts.id,
          data: projectJSONData,
          css: editor.getCss(),
          html: editor.getHtml(),
        })
        .select();
      console.log("saving template returned: ", data || error);
      // If saving a new project we want to then navigate to that project. This is just a workaround to persist the ID. Should come up with a better solution for final project.
      if (!opts.id) {
        opts.handleSavingNewTemplate(data[0].id);
      }
    },
    async load() {
      console.log("Loading template....", opts.id);
      if (!opts.id) {
        editor.loadProjectData(templates["blank"]);
        return;
      }
      let { data: template, error } = await supabase
        .from("templates")
        .select("*")
        .eq("id", opts.id);
      if (template[0]) {
        console.log("loading template returned: ", template);
        return template[0].data;
      } else {
        console.log(
          "No template found or error: show blank canvas and alert or something",
          template,
          error
        );
      }
    },
  });
}
