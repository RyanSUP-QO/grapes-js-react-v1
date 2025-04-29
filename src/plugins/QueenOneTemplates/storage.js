import supabase from "../../utils/supabase";

export default function (editor, opts) {
  editor.Storage.add("supabase", {
    async store(projectJSONData) {
      console.log("Saving template....", projectJSONData);
      // ? What is the goal... this is just a dev tool for now. A demo for saving new templates. But we also want to update existing templates. So the save button should update, and the save as button should insert.
      // TODO Update supabase row when user hits save
      // TODO - Icebox - "Save as" modal feature.
      const { data, error } = await supabase
        .from("templates")
        .update({ data: projectJSONData })
        .eq("id", "1")
        .select();

      console.log("returned: ", data || error);
    },
    async load() {
      console.log("Loading template....", opts.id);
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
}
